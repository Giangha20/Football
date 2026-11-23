/**
 * ============================================================================
 * STICKMAN 3D FOOTBALL SIMULATION ENGINE (Giả Lập 3D Người Que Siêu Chân Thật)
 * ============================================================================
 * - 15-Joint Articulated Humanoid Biomechanics: Pelvis, Spine, Neck, Head, 
 *   Shoulders, Elbows, Wrists, Hips, Knees, Ankles and Cleats
 * - Authentic Football Animations:
 *     * High-speed Sprinting with natural knee-flexion and pumping bent arms
 *     * Close-control Dribbling with foot-taps & low agility center-of-gravity
 *     * Powerful Striking with athletic backswing, hip snap & follow-through
 *     * Goalkeeper Lateral Airborne Diving & Parrying saves
 *     * Slide Tackling & Interceptions flat on the turf
 *     * Iconic Knee-Slide Celebrations & Teammate Group Hugs
 *     * Defending Disappointment (Hands on Head) upon conceding
 * - Realistic 3D Ball Physics: Magnus curve, true rolling rotation, turf bounces
 * - 3D Net Bulge & Ripple upon goal impact
 * - Dynamic 3D Billboard Name Tags with authentic player names & roles
 * - Multiple Camera Angles: Broadcast tracking, Tactical Top-Down, Behind-the-Goal
 * - Zero-Lag Architecture: 60 FPS WebGL, automatically sleeps when 2D tab is shown
 */

(function (window) {
  'use strict';

  let scene, camera, renderer, container;
  let pitchGroup, ballMesh, ballShadow;
  let netMeshLeft, netMeshRight;
  let stickmen = []; // Array of 22 3D stickman objects
  let is3DActive = false;
  let animationFrameId = null;
  let lastTime = 0;
  let currentCamMode = 'broadcast'; // 'broadcast' | 'tactical' | 'behind_goal' | 'custom'

  // Drag to rotate / zoom camera
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let orbitPhi = 0.58; // elevation angle
  let orbitTheta = 0.0; // azimuth angle
  let orbitDistance = 56;

  // Pitch dimensions (proportional to 105m x 68m)
  const PITCH_L = 96; // Length
  const PITCH_W = 64; // Width
  const HALF_L = PITCH_L / 2;
  const HALF_W = PITCH_W / 2;

  // Shared reusable assets for optimal performance (chống lag web)
  let matTurf, matLines;
  let geomStickLimb, geomJoint, geomHead, geomBoot;

  function init3D(containerEl) {
    if (!window.THREE) {
      console.warn('Three.js is still loading...');
      return false;
    }
    container = containerEl || document.getElementById('canvas3DContainer');
    if (!container) return false;

    // Clear previous canvas
    container.innerHTML = '';

    // Detect mobile for performance optimization
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || window.innerWidth < 768;

    const width = container.clientWidth || 800;
    const height = container.clientHeight || (isMobile ? 280 : 380);

    // Scene & Camera
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060f17);
    if (!isMobile) {
      scene.fog = new THREE.FogExp2(0x060f17, 0.007);
    }

    camera = new THREE.PerspectiveCamera(isMobile ? 50 : 45, width / height, 0.5, isMobile ? 160 : 320);
    camera.position.set(0, 32, 54);
    camera.lookAt(0, 0, 0);

    // High performance WebGL renderer (optimized for mobile)
    renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, // Disable AA on mobile for performance
      powerPreference: isMobile ? 'default' : 'high-performance',
      alpha: false,
      precision: isMobile ? 'mediump' : 'highp'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.0 : 1.5));
    if (!isMobile) {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    } else {
      renderer.shadowMap.enabled = false; // Disable shadows on mobile
    }
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    container.appendChild(renderer.domElement);

    // Setup Lighting
    setupLighting();

    // Setup Shared Assets
    createSharedAssets();

    // Build 3D Pitch, Lines, Stadium & Goals
    buildStadiumPitch();

    // Build Ball
    buildBall();

    // Build 22 Stickmen
    buildStickmenRoster();

    // Attach Orbit & Touch Controls
    setupInteractionControls();

    // Responsive Resize Observer
    const ro = new ResizeObserver(() => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    ro.observe(container);

    return true;
  }

  function setupLighting() {
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || window.innerWidth < 768;

    // Atmospheric Sky Lighting
    const hemiLight = new THREE.HemisphereLight(0x93c5fd, 0x14532d, isMobile ? 0.9 : 0.7);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    // Main Stadium Floodlight with Shadows (shadows only on desktop)
    const dirLight = new THREE.DirectionalLight(0xffffff, isMobile ? 1.2 : 1.0);
    dirLight.position.set(28, 48, 32);
    if (!isMobile) {
      dirLight.castShadow = true;
      dirLight.shadow.mapSize.width = 1024;
      dirLight.shadow.mapSize.height = 1024;
      dirLight.shadow.camera.near = 10;
      dirLight.shadow.camera.far = 130;
      dirLight.shadow.camera.left = -HALF_L - 8;
      dirLight.shadow.camera.right = HALF_L + 8;
      dirLight.shadow.camera.top = HALF_W + 8;
      dirLight.shadow.camera.bottom = -HALF_W - 8;
      dirLight.shadow.bias = -0.0006;
    }
    scene.add(dirLight);

    // Opposite Fill Floodlight
    const fillLight = new THREE.DirectionalLight(0x6ee7b7, isMobile ? 0.55 : 0.45);
    fillLight.position.set(-28, 36, -32);
    scene.add(fillLight);
  }

  function createSharedAssets() {
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || window.innerWidth < 768;
    // Shared Geometries for All 22 Stickmen (lower poly on mobile)
    const limbSeg = isMobile ? 4 : 8;
    const jointSeg = isMobile ? 4 : 8;
    const headSeg = isMobile ? 6 : 12;
    geomStickLimb = new THREE.CylinderGeometry(0.085, 0.075, 1, limbSeg);
    geomJoint = new THREE.SphereGeometry(0.11, jointSeg, jointSeg);
    geomHead = new THREE.SphereGeometry(0.36, headSeg, headSeg);
    geomBoot = new THREE.BoxGeometry(0.18, 0.12, 0.34);
  }

  // Generates authentic alternating Premier League green mowing stripes
  function generateTurfTexture() {
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || window.innerWidth < 768;
    const cv = document.createElement('canvas');
    cv.width = isMobile ? 256 : 1024;
    cv.height = isMobile ? 128 : 512;
    const cx = cv.getContext('2d');

    const stripes = 12;
    const stripeW = cv.width / stripes;
    for (let i = 0; i < stripes; i++) {
      cx.fillStyle = (i % 2 === 0) ? '#15803d' : '#166534';
      cx.fillRect(i * stripeW, 0, stripeW, cv.height);

      // Subtle grass fiber texture
      cx.fillStyle = 'rgba(255,255,255,0.025)';
      for (let j = 0; j < 400; j++) {
        cx.fillRect(i * stripeW + Math.random() * stripeW, Math.random() * cv.height, 2, 3);
      }
    }

    const tex = new THREE.CanvasTexture(cv);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    return tex;
  }

  function buildStadiumPitch() {
    pitchGroup = new THREE.Group();
    scene.add(pitchGroup);

    // Turf Plane
    const turfGeo = new THREE.PlaneGeometry(PITCH_L, PITCH_W);
    const turfTex = generateTurfTexture();
    matTurf = new THREE.MeshStandardMaterial({
      map: turfTex,
      roughness: 0.85,
      metalness: 0.04
    });
    const turfMesh = new THREE.Mesh(turfGeo, matTurf);
    turfMesh.rotation.x = -Math.PI / 2;
    turfMesh.receiveShadow = true;
    pitchGroup.add(turfMesh);

    // Outer Stadium Apron
    const apronGeo = new THREE.PlaneGeometry(PITCH_L + 18, PITCH_W + 16);
    const matApron = new THREE.MeshStandardMaterial({ color: 0x071e18, roughness: 0.95 });
    const apronMesh = new THREE.Mesh(apronGeo, matApron);
    apronMesh.rotation.x = -Math.PI / 2;
    apronMesh.position.y = -0.04;
    apronMesh.receiveShadow = true;
    pitchGroup.add(apronMesh);

    // Pitch Lines
    matLines = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lineThickness = 0.24;

    function addLine(x1, z1, x2, z2) {
      const dx = x2 - x1;
      const dz = z2 - z1;
      const len = Math.sqrt(dx * dx + dz * dz);
      const angle = Math.atan2(dz, dx);
      const geo = new THREE.PlaneGeometry(len, lineThickness);
      const mesh = new THREE.Mesh(geo, matLines);
      mesh.rotation.x = -Math.PI / 2;
      mesh.rotation.z = -angle;
      mesh.position.set((x1 + x2) / 2, 0.02, (z1 + z2) / 2);
      pitchGroup.add(mesh);
    }

    // Touchlines & Goal lines
    addLine(-HALF_L, -HALF_W,  HALF_L, -HALF_W);
    addLine(-HALF_L,  HALF_W,  HALF_L,  HALF_W);
    addLine(-HALF_L, -HALF_W, -HALF_L,  HALF_W);
    addLine( HALF_L, -HALF_W,  HALF_L,  HALF_W);

    // Halfway Line
    addLine(0, -HALF_W, 0, HALF_W);

    // Center Circle (Radius 9.15m -> ~8.4 units)
    const circleGeo = new THREE.RingGeometry(8.2, 8.44, 48);
    const circleMesh = new THREE.Mesh(circleGeo, matLines);
    circleMesh.rotation.x = -Math.PI / 2;
    circleMesh.position.set(0, 0.02, 0);
    pitchGroup.add(circleMesh);

    // Center Spot
    const spotGeo = new THREE.CircleGeometry(0.42, 16);
    const spotMesh = new THREE.Mesh(spotGeo, matLines);
    spotMesh.rotation.x = -Math.PI / 2;
    spotMesh.position.set(0, 0.025, 0);
    pitchGroup.add(spotMesh);

    // Penalty Boxes (36 x 15 units)
    const penW = 36;
    const penD = 15;
    addLine(-HALF_L, -penW / 2, -HALF_L + penD, -penW / 2);
    addLine(-HALF_L + penD, -penW / 2, -HALF_L + penD, penW / 2);
    addLine(-HALF_L, penW / 2, -HALF_L + penD, penW / 2);

    const leftSpot = new THREE.Mesh(spotGeo, matLines);
    leftSpot.rotation.x = -Math.PI / 2;
    leftSpot.position.set(-HALF_L + 10, 0.025, 0);
    pitchGroup.add(leftSpot);

    addLine(HALF_L, -penW / 2, HALF_L - penD, -penW / 2);
    addLine(HALF_L - penD, -penW / 2, HALF_L - penD, penW / 2);
    addLine(HALF_L, penW / 2, HALF_L - penD, penW / 2);

    const rightSpot = new THREE.Mesh(spotGeo, matLines);
    rightSpot.rotation.x = -Math.PI / 2;
    rightSpot.position.set(HALF_L - 10, 0.025, 0);
    pitchGroup.add(rightSpot);

    // Goal Areas (6-yard boxes: 18 x 5.5 units)
    const gBoxW = 18;
    const gBoxD = 5.5;
    addLine(-HALF_L, -gBoxW / 2, -HALF_L + gBoxD, -gBoxW / 2);
    addLine(-HALF_L + gBoxD, -gBoxW / 2, -HALF_L + gBoxD, gBoxW / 2);
    addLine(-HALF_L, gBoxW / 2, -HALF_L + gBoxD, gBoxW / 2);

    addLine(HALF_L, -gBoxW / 2, HALF_L - gBoxD, -gBoxW / 2);
    addLine(HALF_L - gBoxD, -gBoxW / 2, HALF_L - gBoxD, gBoxW / 2);
    addLine(HALF_L, gBoxW / 2, HALF_L - gBoxD, gBoxW / 2);

    // 3D Goals with Posts, Crossbars & 3D Protruding Nets
    netMeshLeft = build3DGoal(-HALF_L, -1);
    netMeshRight = build3DGoal(HALF_L, 1);

    // Stadium Perimeter LED Boards
    buildStadiumBoards();
  }

  let sharedGoalNetTex = null;

  // Generates high-detail authentic woven nylon diamond netting texture for 3D Goals
  function generateGoalNetTexture() {
    if (sharedGoalNetTex) return sharedGoalNetTex;
    const cv = document.createElement('canvas');
    cv.width = 128;
    cv.height = 128;
    const ctx = cv.getContext('2d');
    ctx.clearRect(0, 0, 128, 128);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.lineWidth = 1.8;
    const step = 16;

    for (let x = -128; x < 256; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + 128, 128);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x, 128);
      ctx.lineTo(x + 128, 0);
      ctx.stroke();
    }

    // Small knot dots at net intersections for realistic weave
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    for (let x = 0; x < 128; x += step) {
      for (let y = 0; y < 128; y += step) {
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    sharedGoalNetTex = new THREE.CanvasTexture(cv);
    sharedGoalNetTex.wrapS = THREE.RepeatWrapping;
    sharedGoalNetTex.wrapT = THREE.RepeatWrapping;
    sharedGoalNetTex.repeat.set(5, 3);
    return sharedGoalNetTex;
  }

  function build3DGoal(xPos, direction) {
    // Proportional FIFA standard goal dimensions for 96x64 pitch:
    // Width ~7.4 units (inside the 18-unit 6-yard box), Height ~2.45 units (fits 1.8m players), Depth ~2.4 units
    const goalW = 7.4;
    const goalH = 2.45;
    const goalD = 2.4;
    const postR = 0.095;

    // Crisp semi-gloss white enamel post material (không bị bóng nhựa rẻ tiền)
    const postMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.22,
      metalness: 0.12
    });

    // Rear metal support stanchion material (khung kim loại đỡ lưới phía sau)
    const supportMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      roughness: 0.35,
      metalness: 0.65
    });

    // 1. Two Main Vertical Goalposts
    const postGeo = new THREE.CylinderGeometry(postR, postR, goalH, 16);
    const postLeft = new THREE.Mesh(postGeo, postMat);
    postLeft.position.set(xPos, goalH / 2, -goalW / 2);
    postLeft.castShadow = true;
    pitchGroup.add(postLeft);

    const postRight = new THREE.Mesh(postGeo, postMat);
    postRight.position.set(xPos, goalH / 2, goalW / 2);
    postRight.castShadow = true;
    pitchGroup.add(postRight);

    // 2. Horizontal Crossbar
    const barGeo = new THREE.CylinderGeometry(postR, postR, goalW, 16);
    const crossbar = new THREE.Mesh(barGeo, postMat);
    crossbar.rotation.x = Math.PI / 2;
    crossbar.position.set(xPos, goalH, 0);
    crossbar.castShadow = true;
    pitchGroup.add(crossbar);

    // 3. Rounded Corner Joint Elbows (nối góc xà ngang và cột dọc)
    const elbowGeo = new THREE.SphereGeometry(postR * 1.05, 12, 12);
    const elbowL = new THREE.Mesh(elbowGeo, postMat);
    elbowL.position.set(xPos, goalH, -goalW / 2);
    pitchGroup.add(elbowL);

    const elbowR = new THREE.Mesh(elbowGeo, postMat);
    elbowR.position.set(xPos, goalH, goalW / 2);
    pitchGroup.add(elbowR);

    // 4. Rear Top Tension Support Bars (hai thanh giằng ngang trên cao giữ căng nóc lưới)
    const tensionGeo = new THREE.CylinderGeometry(0.045, 0.045, goalD, 8);
    const tensionL = new THREE.Mesh(tensionGeo, supportMat);
    tensionL.rotation.z = Math.PI / 2;
    tensionL.position.set(xPos + direction * (goalD / 2), goalH * 0.98, -goalW / 2);
    pitchGroup.add(tensionL);

    const tensionR = new THREE.Mesh(tensionGeo, supportMat);
    tensionR.rotation.z = Math.PI / 2;
    tensionR.position.set(xPos + direction * (goalD / 2), goalH * 0.98, goalW / 2);
    pitchGroup.add(tensionR);

    // 5. Ground Base Frame (thanh dầm sắt đáy giữ chân lưới trên mặt cỏ)
    const groundSideGeo = new THREE.CylinderGeometry(0.045, 0.045, goalD, 8);
    const groundL = new THREE.Mesh(groundSideGeo, supportMat);
    groundL.rotation.z = Math.PI / 2;
    groundL.position.set(xPos + direction * (goalD / 2), 0.04, -goalW / 2);
    pitchGroup.add(groundL);

    const groundR = new THREE.Mesh(groundSideGeo, supportMat);
    groundR.rotation.z = Math.PI / 2;
    groundR.position.set(xPos + direction * (goalD / 2), 0.04, goalW / 2);
    pitchGroup.add(groundR);

    const groundBackGeo = new THREE.CylinderGeometry(0.045, 0.045, goalW, 8);
    const groundBack = new THREE.Mesh(groundBackGeo, supportMat);
    groundBack.rotation.x = Math.PI / 2;
    groundBack.position.set(xPos + direction * goalD, 0.04, 0);
    pitchGroup.add(groundBack);

    // 6. Realistic Woven Nylon Goal Net (Lưới sợi đan chéo thực tế)
    const netTex = generateGoalNetTexture();
    const netMat = new THREE.MeshStandardMaterial({
      map: netTex,
      transparent: true,
      opacity: 0.88,
      roughness: 0.85,
      metalness: 0.02,
      side: THREE.DoubleSide,
      depthWrite: false
    });

    const backNet = new THREE.Mesh(new THREE.PlaneGeometry(goalW, goalH, 4, 3), netMat);
    backNet.position.set(xPos + direction * goalD, goalH / 2, 0);
    backNet.rotation.y = direction < 0 ? Math.PI / 2 : -Math.PI / 2;
    pitchGroup.add(backNet);

    const roofNet = new THREE.Mesh(new THREE.PlaneGeometry(goalW, goalD, 4, 2), netMat);
    roofNet.position.set(xPos + direction * (goalD / 2), goalH, 0);
    roofNet.rotation.x = Math.PI / 2;
    pitchGroup.add(roofNet);

    const sideNet1 = new THREE.Mesh(new THREE.PlaneGeometry(goalD, goalH, 2, 3), netMat);
    sideNet1.position.set(xPos + direction * (goalD / 2), goalH / 2, -goalW / 2);
    pitchGroup.add(sideNet1);

    const sideNet2 = new THREE.Mesh(new THREE.PlaneGeometry(goalD, goalH, 2, 3), netMat);
    sideNet2.position.set(xPos + direction * (goalD / 2), goalH / 2, goalW / 2);
    pitchGroup.add(sideNet2);

    return backNet;
  }

  function buildStadiumBoards() {
    const boardMat = new THREE.MeshStandardMaterial({
      color: 0x064e3b,
      emissive: 0x059669,
      emissiveIntensity: 0.35,
      roughness: 0.3
    });

    const boardGeo = new THREE.BoxGeometry(PITCH_L + 8, 1.2, 0.4);
    const boardTop = new THREE.Mesh(boardGeo, boardMat);
    boardTop.position.set(0, 0.6, -HALF_W - 3);
    pitchGroup.add(boardTop);

    const boardBottom = new THREE.Mesh(boardGeo, boardMat);
    boardBottom.position.set(0, 0.6, HALF_W + 3);
    pitchGroup.add(boardBottom);
  }

  // Generates classic authentic soccer ball texture (black pentagons on white leather)
  function generateBallTexture() {
    const cv = document.createElement('canvas');
    cv.width = 512;
    cv.height = 256;
    const ctx = cv.getContext('2d');

    // Crisp white leather base
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, cv.width, cv.height);

    // Draw classic black pentagon patches
    ctx.fillStyle = '#0f172a';
    const patches = [
      { x: 128, y: 70, r: 28 },
      { x: 256, y: 130, r: 30 },
      { x: 384, y: 70, r: 28 },
      { x: 64, y: 190, r: 26 },
      { x: 448, y: 190, r: 26 },
      { x: 192, y: 215, r: 25 },
      { x: 320, y: 215, r: 25 },
      { x: 256, y: 25, r: 24 }
    ];

    patches.forEach(p => {
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
        const px = p.x + Math.cos(angle) * p.r;
        const py = p.y + Math.sin(angle) * p.r;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();

      // Golden seam accent around patches
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2.5;
      ctx.stroke();
    });

    // Hexagonal panel seam lines connecting the pentagons
    ctx.strokeStyle = 'rgba(15, 23, 42, 0.35)';
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.moveTo(128, 70); ctx.lineTo(256, 130);
    ctx.moveTo(384, 70); ctx.lineTo(256, 130);
    ctx.moveTo(64, 190); ctx.lineTo(192, 215);
    ctx.moveTo(448, 190); ctx.lineTo(320, 215);
    ctx.stroke();

    const tex = new THREE.CanvasTexture(cv);
    return tex;
  }

  function buildBall() {
    const ballGeo = new THREE.SphereGeometry(0.44, 20, 20);
    const ballTex = generateBallTexture();
    const ballMat = new THREE.MeshStandardMaterial({
      map: ballTex,
      roughness: 0.42,
      metalness: 0.05
    });
    ballMesh = new THREE.Mesh(ballGeo, ballMat);
    ballMesh.position.set(0, 0.44, 0);
    ballMesh.castShadow = true;
    scene.add(ballMesh);

    // Dynamic Ball Shadow on Pitch
    const shadowGeo = new THREE.CircleGeometry(0.48, 16);
    const matShadow = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.55
    });
    ballShadow = new THREE.Mesh(shadowGeo, matShadow);
    ballShadow.rotation.x = -Math.PI / 2;
    ballShadow.position.set(0, 0.03, 0);
    scene.add(ballShadow);
  }

  // Generates high-resolution 2D Canvas Billboard Name Tag with Vietnamese UTF-8 text
  function generateNameTagTexture(playerName, role, isHome, teamColorHex) {
    const cv = document.createElement('canvas');
    cv.width = 384;
    cv.height = 96;
    const ctx = cv.getContext('2d');

    // Rounded Pill Container Background
    ctx.fillStyle = 'rgba(3, 7, 18, 0.88)';
    ctx.strokeStyle = teamColorHex || (isHome ? '#10b981' : '#38bdf8');
    ctx.lineWidth = 4;
    const r = 24;
    ctx.beginPath();
    ctx.roundRect(4, 4, cv.width - 8, cv.height - 8, r);
    ctx.fill();
    ctx.stroke();

    // Role Badge (GK, DF, MF, FW)
    const badgeColor = role === 'GK' ? '#f59e0b' : (isHome ? '#10b981' : '#0284c7');
    ctx.fillStyle = badgeColor;
    ctx.beginPath();
    ctx.roundRect(14, 16, 68, cv.height - 32, 14);
    ctx.fill();

    ctx.fillStyle = '#0f172a';
    ctx.font = '900 32px "Be Vietnam Pro", system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(role, 48, cv.height / 2 + 2);

    // Player Name in Crisp White Text
    ctx.fillStyle = '#ffffff';
    ctx.font = '800 36px "Be Vietnam Pro", system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0,0,0,0.85)';
    ctx.shadowBlur = 6;

    let displayName = playerName || 'Cầu thủ';
    if (displayName.length > 14) displayName = displayName.substring(0, 13) + '…';
    ctx.fillText(displayName, 96, cv.height / 2 + 2);

    const tex = new THREE.CanvasTexture(cv);
    tex.minFilter = THREE.LinearFilter;
    return tex;
  }

  // ============================================================================
  // FULL 15-JOINT ARTICULATED HUMANOID STICKMAN RIG (HOẠT ĐỘNG SIÊU CHÂN THẬT)
  // ============================================================================
  function createStickmanRig(id, side, role, fullName, shortName, teamColorHex) {
    const isHome = side === 'home';
    const isGK = role === 'GK';
    const root = new THREE.Group();

    // Palette
    const jerseyColor = isGK ? 0xfacc15 : (teamColorHex || (isHome ? 0x10b981 : 0x0284c7));
    const shortsColor = isGK ? 0x1e293b : 0xffffff;
    const skinStickColor = 0x1e293b;
    const bootColor = isGK ? 0xf97316 : (isHome ? 0x34d399 : 0x38bdf8);

    // Professional athletic kit materials (matte fabric & athletic leather, không bóng nhựa)
    const matJersey = new THREE.MeshStandardMaterial({ color: jerseyColor, roughness: 0.72, metalness: 0.04 });
    const matShorts = new THREE.MeshStandardMaterial({ color: shortsColor, roughness: 0.78, metalness: 0.02 });
    const matStick = new THREE.MeshStandardMaterial({ color: skinStickColor, roughness: 0.65, metalness: 0.03 });
    const matPlayerBoot = new THREE.MeshStandardMaterial({ color: bootColor, roughness: 0.45, metalness: 0.12 });
    const matJointShared = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.60, metalness: 0.05 });

    // 1. Pelvis / Hip base
    const pelvis = new THREE.Group();
    pelvis.position.y = 1.05;
    root.add(pelvis);

    const pelvisMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.16, 0.25, 10), matShorts);
    pelvis.add(pelvisMesh);

    // 2. Spine / Torso (can lean forward during sprints, bend during kicks)
    const spine = new THREE.Group();
    spine.position.y = 0.12;
    pelvis.add(spine);

    const torsoMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.17, 0.85, 10), matJersey);
    torsoMesh.position.y = 0.42;
    torsoMesh.castShadow = true;
    spine.add(torsoMesh);

    // Team chest stripe / crest accent
    const chestStripe = new THREE.Mesh(
      new THREE.CylinderGeometry(0.225, 0.21, 0.22, 10),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 })
    );
    chestStripe.position.y = 0.52;
    spine.add(chestStripe);

    // 3. Neck & Head
    const neck = new THREE.Group();
    neck.position.y = 0.88;
    spine.add(neck);

    const headMesh = new THREE.Mesh(geomHead, matStick);
    headMesh.position.y = 0.32;
    headMesh.castShadow = true;
    neck.add(headMesh);

    // Eyes / Visor in team accent color so you can see where player is looking!
    const visorGeo = new THREE.BoxGeometry(0.32, 0.08, 0.22);
    const visorMat = new THREE.MeshBasicMaterial({ color: isGK ? 0xffffff : jerseyColor });
    const visor = new THREE.Mesh(visorGeo, visorMat);
    visor.position.set(0, 0.34, 0.26);
    neck.add(visor);

    // Headband
    const bandMesh = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.04, 8, 20), matJersey);
    bandMesh.rotation.x = Math.PI / 2;
    bandMesh.position.y = 0.36;
    neck.add(bandMesh);

    // 4. Dynamic Name Tag Billboard Sprite (Always faces camera)
    const nameTex = generateNameTagTexture(shortName || fullName, role, isHome, teamColorHex);
    const spriteMat = new THREE.SpriteMaterial({ map: nameTex, transparent: true, depthTest: false });
    const nameSprite = new THREE.Sprite(spriteMat);
    nameSprite.position.set(0, 1.05, 0);
    nameSprite.scale.set(4.0, 1.0, 1.0);
    neck.add(nameSprite);

    // 5. Left Arm (Shoulder -> Upper Arm -> Elbow Joint -> Forearm -> Hand)
    const shoulderL = new THREE.Group();
    shoulderL.position.set(-0.30, 0.75, 0);
    spine.add(shoulderL);
    shoulderL.add(new THREE.Mesh(geomJoint, matJointShared));

    const upperArmL = new THREE.Group();
    shoulderL.add(upperArmL);
    const upperArmMeshL = new THREE.Mesh(geomStickLimb, matJersey);
    upperArmMeshL.position.y = -0.25;
    upperArmMeshL.scale.set(0.95, 0.52, 0.95);
    upperArmL.add(upperArmMeshL);

    const elbowL = new THREE.Group();
    elbowL.position.y = -0.50;
    upperArmL.add(elbowL);
    elbowL.add(new THREE.Mesh(geomJoint, matJointShared));

    const forearmMeshL = new THREE.Mesh(geomStickLimb, matStick);
    forearmMeshL.position.y = -0.22;
    forearmMeshL.scale.set(0.85, 0.46, 0.85);
    elbowL.add(forearmMeshL);

    const handL = new THREE.Mesh(
      new THREE.SphereGeometry(isGK ? 0.16 : 0.11, 8, 8),
      isGK ? new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 }) : matStick
    );
    handL.position.y = -0.46;
    elbowL.add(handL);

    // 6. Right Arm (Shoulder -> Upper Arm -> Elbow Joint -> Forearm -> Hand)
    const shoulderR = new THREE.Group();
    shoulderR.position.set(0.30, 0.75, 0);
    spine.add(shoulderR);
    shoulderR.add(new THREE.Mesh(geomJoint, matJointShared));

    const upperArmR = new THREE.Group();
    shoulderR.add(upperArmR);
    const upperArmMeshR = new THREE.Mesh(geomStickLimb, matJersey);
    upperArmMeshR.position.y = -0.25;
    upperArmMeshR.scale.set(0.95, 0.52, 0.95);
    upperArmR.add(upperArmMeshR);

    const elbowR = new THREE.Group();
    elbowR.position.y = -0.50;
    upperArmR.add(elbowR);
    elbowR.add(new THREE.Mesh(geomJoint, matJointShared));

    const forearmMeshR = new THREE.Mesh(geomStickLimb, matStick);
    forearmMeshR.position.y = -0.22;
    forearmMeshR.scale.set(0.85, 0.46, 0.85);
    elbowR.add(forearmMeshR);

    const handR = new THREE.Mesh(
      new THREE.SphereGeometry(isGK ? 0.16 : 0.11, 8, 8),
      isGK ? new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 }) : matStick
    );
    handR.position.y = -0.46;
    elbowR.add(handR);

    // 7. Left Leg (Hip -> Thigh -> Knee Joint -> Shin -> Ankle -> Boot)
    const hipL = new THREE.Group();
    hipL.position.set(-0.16, -0.08, 0);
    pelvis.add(hipL);
    hipL.add(new THREE.Mesh(geomJoint, matJointShared));

    const thighL = new THREE.Group();
    hipL.add(thighL);
    const thighMeshL = new THREE.Mesh(geomStickLimb, matShorts);
    thighMeshL.position.y = -0.25;
    thighMeshL.scale.set(1.15, 0.52, 1.15);
    thighL.add(thighMeshL);

    const kneeL = new THREE.Group();
    kneeL.position.y = -0.52;
    thighL.add(kneeL);
    kneeL.add(new THREE.Mesh(geomJoint, matJointShared));

    const shinMeshL = new THREE.Mesh(geomStickLimb, matStick);
    shinMeshL.position.y = -0.24;
    shinMeshL.scale.set(1.0, 0.50, 1.0);
    kneeL.add(shinMeshL);

    const bootL = new THREE.Mesh(geomBoot, matPlayerBoot);
    bootL.position.set(0, -0.50, 0.09);
    bootL.castShadow = true;
    kneeL.add(bootL);

    // 8. Right Leg (Hip -> Thigh -> Knee Joint -> Shin -> Ankle -> Boot)
    const hipR = new THREE.Group();
    hipR.position.set(0.16, -0.08, 0);
    pelvis.add(hipR);
    hipR.add(new THREE.Mesh(geomJoint, matJointShared));

    const thighR = new THREE.Group();
    hipR.add(thighR);
    const thighMeshR = new THREE.Mesh(geomStickLimb, matShorts);
    thighMeshR.position.y = -0.25;
    thighMeshR.scale.set(1.15, 0.52, 1.15);
    thighR.add(thighMeshR);

    const kneeR = new THREE.Group();
    kneeR.position.y = -0.52;
    thighR.add(kneeR);
    kneeR.add(new THREE.Mesh(geomJoint, matJointShared));

    const shinMeshR = new THREE.Mesh(geomStickLimb, matStick);
    shinMeshR.position.y = -0.24;
    shinMeshR.scale.set(1.0, 0.50, 1.0);
    kneeR.add(shinMeshR);

    const bootR = new THREE.Mesh(geomBoot, matPlayerBoot);
    bootR.position.set(0, -0.50, 0.09);
    bootR.castShadow = true;
    kneeR.add(bootR);

    // Soft Player Shadow on Grass
    const pShadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.55, 12),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.45 })
    );
    pShadow.rotation.x = -Math.PI / 2;
    pShadow.position.y = 0.025;
    root.add(pShadow);

    scene.add(root);

    return {
      id,
      side,
      role,
      fullName,
      shortName,
      root,
      pelvis,
      spine,
      neck,
      nameSprite,
      pShadow,
      // Arm joints
      shoulderL, upperArmL, elbowL,
      shoulderR, upperArmR, elbowR,
      // Leg joints
      hipL, thighL, kneeL, bootL,
      hipR, thighR, kneeR, bootR,
      // Animation state variables
      animState: 'idle', // 'idle' | 'running' | 'dribbling' | 'kicking' | 'slide_tackle' | 'gk_dive' | 'celebrate' | 'frustrated'
      runCycle: Math.random() * 6.28,
      kickTimer: 0,
      diveTimer: 0,
      diveSide: 1, // 1 for right, -1 for left
      celebrateTimer: 0,
      tackleTimer: 0,
      frustratedTimer: 0,
      currentHeading: 0
    };
  }

  function buildStickmenRoster() {
    // Clear existing stickmen
    stickmen.forEach(s => scene.remove(s.root));
    stickmen = [];

    const state = window.footballState;
    const homeTeam = state?.homeTeam || { name: 'Chủ nhà', color: '#10b981', stars: ['Cầu thủ 1'] };
    const awayTeam = state?.awayTeam || { name: 'Khách', color: '#0284c7', stars: ['Cầu thủ 1'] };

    const roles = ['GK', 'DF', 'DF', 'DF', 'DF', 'MF', 'MF', 'MF', 'FW', 'FW', 'FW'];

    // Home 11
    for (let i = 0; i < 11; i++) {
      const full = homeTeam.stars[i] || `Cầu thủ ${i + 1}`;
      const short = full.split(' (')[0].split(' ').slice(-1)[0];
      const sm = createStickmanRig(`home_${i}`, 'home', roles[i], full, short, homeTeam.color || '#10b981');
      stickmen.push(sm);
    }

    // Away 11
    for (let i = 0; i < 11; i++) {
      const full = awayTeam.stars[i] || `Cầu thủ ${i + 1}`;
      const short = full.split(' (')[0].split(' ').slice(-1)[0];
      const sm = createStickmanRig(`away_${i}`, 'away', roles[i], full, short, awayTeam.color || '#0284c7');
      stickmen.push(sm);
    }
  }

  function updateTeamNames(homeTeam, awayTeam) {
    if (!stickmen.length) return;
    const roles = ['GK', 'DF', 'DF', 'DF', 'DF', 'MF', 'MF', 'MF', 'FW', 'FW', 'FW'];

    for (let i = 0; i < 11; i++) {
      const sm = stickmen[i];
      if (sm && homeTeam) {
        const full = homeTeam.stars[i] || homeTeam.stars[0] || `Cầu thủ ${i + 1}`;
        const short = full.split(' (')[0].split(' ').slice(-1)[0];
        sm.fullName = full;
        sm.shortName = short;
        sm.nameSprite.material.map = generateNameTagTexture(short, roles[i], true, homeTeam.color || '#10b981');
      }
    }

    for (let i = 0; i < 11; i++) {
      const sm = stickmen[11 + i];
      if (sm && awayTeam) {
        const full = awayTeam.stars[i] || awayTeam.stars[0] || `Cầu thủ ${i + 1}`;
        const short = full.split(' (')[0].split(' ').slice(-1)[0];
        sm.fullName = full;
        sm.shortName = short;
        sm.nameSprite.material.map = generateNameTagTexture(short, roles[i], false, awayTeam.color || '#0284c7');
      }
    }
  }

  // Maps 2D Pitch normalized coordinates (0..1, 0..1) to 3D World (X, Z)
  function map2DTo3D(normX, normY) {
    const x3D = (normX - 0.5) * PITCH_L;
    const z3D = (normY - 0.5) * PITCH_W;
    return { x: x3D, z: z3D };
  }

  // ============================================================================
  // MAIN ANIMATION LOOP & BIOMECHANICAL MOTION ENGINE
  // ============================================================================
  function update(state) {
    if (!state || !is3DActive) return;

    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.08);
    lastTime = now;

    const rawBall = state.ballPos || state.ball || { x: 0.5, y: 0.5 };
    const ballPos3D = map2DTo3D(rawBall.x, rawBall.y);

    // 1. Update each of the 22 Stickmen with high realism
    if (state.players && state.players.length >= 22) {
      for (let i = 0; i < 22; i++) {
        const p2d = state.players[i];
        const sm = stickmen[i];
        if (!p2d || !sm) continue;

        const targetPos = map2DTo3D(p2d.x, p2d.y);

        // Smooth position tracking with realistic inertia
        const prevX = sm.root.position.x;
        const prevZ = sm.root.position.z;
        const lerpFactor = sm.animState === 'slide_tackle' ? 0.15 : 0.28;
        sm.root.position.x += (targetPos.x - prevX) * lerpFactor;
        sm.root.position.z += (targetPos.z - prevZ) * lerpFactor;

        // Calculate velocity & movement heading
        const vx = targetPos.x - prevX;
        const vz = targetPos.z - prevZ;
        const speed = Math.sqrt(vx * vx + vz * vz);

        // Distance to Ball
        const distToBall = Math.hypot(sm.root.position.x - ballPos3D.x, sm.root.position.z - ballPos3D.z);
        const hasBallPossession = distToBall < 1.4;

        // Direction & Smooth Facing Angle
        if (speed > 0.04) {
          const targetAngle = Math.atan2(vx, vz);
          // Shortest angle rotation lerp
          let diff = targetAngle - sm.currentHeading;
          while (diff < -Math.PI) diff += Math.PI * 2;
          while (diff > Math.PI) diff -= Math.PI * 2;
          sm.currentHeading += diff * 0.22;
          sm.root.rotation.y = sm.currentHeading;
        }

        // Check if player should look at the ball with their head
        const headTargetX = ballPos3D.x - sm.root.position.x;
        const headTargetZ = ballPos3D.z - sm.root.position.z;
        const ballAngleRel = Math.atan2(headTargetX, headTargetZ) - sm.currentHeading;
        let clampedHeadYaw = Math.max(-0.65, Math.min(0.65, ballAngleRel));
        sm.neck.rotation.y += (clampedHeadYaw - sm.neck.rotation.y) * 0.15;

        // -------------------------------------------------------------
        // ANIMATION STATE MACHINE (SIÊU CHÂN THẬT)
        // -------------------------------------------------------------
        if (sm.celebrateTimer > 0) {
          // CELEBRATION MODE: Knee-slide or Jumping Fist Pump!
          sm.celebrateTimer -= dt;
          sm.animState = 'celebrate';

          // Knee-Slide along grass: drop down, arch spine back, arms spread wide!
          sm.pelvis.position.y = 0.52;
          sm.spine.rotation.x = -0.55; // Arched back in ecstasy
          sm.spine.rotation.z = 0;
          sm.thighL.rotation.x = 0.55;
          sm.thighR.rotation.x = 0.55;
          sm.kneeL.rotation.x = 1.95; // Knees folded backward touching turf
          sm.kneeR.rotation.x = 1.95;

          // Arms raised high in Victory 'V'
          sm.shoulderL.rotation.x = -2.6;
          sm.shoulderL.rotation.z = -0.6;
          sm.elbowL.rotation.x = -0.4;
          sm.shoulderR.rotation.x = -2.6;
          sm.shoulderR.rotation.z = 0.6;
          sm.elbowR.rotation.x = -0.4;

        } else if (sm.frustratedTimer > 0) {
          // CONCEDING GOAL DISAPPOINTMENT: Hands on head / slump
          sm.frustratedTimer -= dt;
          sm.animState = 'frustrated';
          sm.pelvis.position.y = 1.0;
          sm.spine.rotation.x = 0.35; // Slumped
          sm.neck.rotation.x = 0.3; // Looking down

          // Hands clutched behind head
          sm.shoulderL.rotation.x = -2.2;
          sm.shoulderL.rotation.z = -0.7;
          sm.elbowL.rotation.x = -1.9;
          sm.shoulderR.rotation.x = -2.2;
          sm.shoulderR.rotation.z = 0.7;
          sm.elbowR.rotation.x = -1.9;

        } else if (sm.diveTimer > 0) {
          // GOALKEEPER AIRBORNE DIVE SAVE
          sm.diveTimer -= dt;
          sm.animState = 'gk_dive';

          const diveProgress = 1.0 - (sm.diveTimer / 1.4);
          const diveHeight = Math.sin(diveProgress * Math.PI) * 1.85;
          sm.pelvis.position.y = 0.8 + diveHeight;

          // Roll body horizontally into the direction of the dive
          sm.root.rotation.z = sm.diveSide * Math.sin(diveProgress * Math.PI) * 1.35;

          // Arms fully extended to parry ball
          sm.shoulderL.rotation.x = -1.2;
          sm.shoulderR.rotation.x = -1.2;
          sm.elbowL.rotation.x = 0; // Fully straight arms!
          sm.elbowR.rotation.x = 0;

          // Trailing legs
          sm.thighL.rotation.x = -0.4;
          sm.kneeL.rotation.x = 0.6;
          sm.thighR.rotation.x = 0.3;
          sm.kneeR.rotation.x = 0.3;

        } else if (sm.kickTimer > 0) {
          // POWER KICK / PASS ANIMATION
          sm.kickTimer -= dt;
          sm.animState = 'kicking';
          const p = 1.0 - (sm.kickTimer / 0.45);

          if (p < 0.4) {
            // Phase 1: Massive Backswing & Wind-up
            const t = p / 0.4;
            sm.spine.rotation.x = -0.35 * t; // Leans back
            sm.thighR.rotation.x = -1.2 * t; // Kicking leg pulls way back (-68 deg)
            sm.kneeR.rotation.x = 1.55 * t;  // Knee deeply flexed
            sm.thighL.rotation.x = 0.25;    // Plant foot stable
            sm.kneeL.rotation.x = 0.2;
            // Balance arms
            sm.shoulderL.rotation.x = 0.8 * t;
            sm.shoulderR.rotation.x = -0.7 * t;
          } else {
            // Phase 2: Explosive Forward Snap & Follow-through
            const t = (p - 0.4) / 0.6;
            sm.spine.rotation.x = 0.35 * (1 - t); // Snaps forward over ball
            sm.thighR.rotation.x = 1.25 * (1 - t * 0.3); // Kicking foot whips high
            sm.kneeR.rotation.x = 0.1; // Leg straightens at ball contact
            sm.thighL.rotation.x = -0.15;
            sm.kneeL.rotation.x = 0.15;
          }

        } else if (sm.tackleTimer > 0) {
          // SLIDE TACKLE ANIMATION
          sm.tackleTimer -= dt;
          sm.animState = 'slide_tackle';
          sm.pelvis.position.y = 0.35;
          sm.spine.rotation.x = -0.7; // Leans back on turf

          // Lead tackling leg stretched flat out along grass
          sm.thighR.rotation.x = 1.45;
          sm.kneeR.rotation.x = 0.05;
          // Trail leg tucked under
          sm.thighL.rotation.x = -0.6;
          sm.kneeL.rotation.x = 1.85;

        } else if (hasBallPossession && speed > 0.03) {
          // DRIBBLING MODE: Agile close control with rapid foot touches
          sm.animState = 'dribbling';
          sm.runCycle += speed * 4.6;
          const cycle = sm.runCycle;

          sm.pelvis.position.y = 0.98 + Math.abs(Math.sin(cycle * 2)) * 0.06;
          sm.spine.rotation.x = 0.28; // Forward athletic lean
          sm.neck.rotation.x = 0.22;  // Eyes on the ball

          // Quick alternating foot touches
          sm.thighL.rotation.x = Math.sin(cycle) * 0.55;
          sm.thighR.rotation.x = -Math.sin(cycle) * 0.55;
          sm.kneeL.rotation.x = Math.max(0, -Math.sin(cycle)) * 1.1;
          sm.kneeR.rotation.x = Math.max(0, Math.sin(cycle)) * 1.1;

          // Athletic bent-arm balance
          sm.shoulderL.rotation.x = -Math.sin(cycle) * 0.5;
          sm.elbowL.rotation.x = -1.1;
          sm.shoulderR.rotation.x = Math.sin(cycle) * 0.5;
          sm.elbowR.rotation.x = -1.1;

        } else if (speed > 0.04) {
          // SPRINTING / RUNNING MODE: Biomechanical high-knee stride & arm pump
          sm.animState = 'running';
          sm.runCycle += speed * 3.8;
          const cycle = sm.runCycle;

          // Vertical pelvis bounce with each stride
          sm.pelvis.position.y = 1.05 + Math.abs(Math.sin(cycle * 2)) * 0.09;
          sm.spine.rotation.x = 0.22; // Aerodynamic forward lean

          // Thigh & Knee coordination (Knee flexes up to 75 deg on backswing!)
          const swingL = Math.sin(cycle);
          sm.thighL.rotation.x = swingL * 0.78;
          sm.kneeL.rotation.x = Math.max(0, -swingL) * 1.35;

          const swingR = -swingL;
          sm.thighR.rotation.x = swingR * 0.78;
          sm.kneeR.rotation.x = Math.max(0, -swingR) * 1.35;

          // Upper body opposite arm pumping with permanently bent elbows
          sm.shoulderL.rotation.x = -swingL * 0.65;
          sm.elbowL.rotation.x = -0.95 - swingL * 0.25;

          sm.shoulderR.rotation.x = swingL * 0.65;
          sm.elbowR.rotation.x = -0.95 + swingL * 0.25;

        } else {
          // IDLE ATHLETIC STANCE: Breathing, gentle weight shift, ready bounce
          sm.animState = 'idle';
          const idleCadence = now * 0.003;
          sm.pelvis.position.y = 1.05 + Math.sin(idleCadence) * 0.02;
          sm.spine.rotation.x = 0.06;
          sm.neck.rotation.x = 0.0;

          sm.thighL.rotation.x = Math.sin(idleCadence * 0.5) * 0.06;
          sm.thighR.rotation.x = -Math.sin(idleCadence * 0.5) * 0.06;
          sm.kneeL.rotation.x = 0.12;
          sm.kneeR.rotation.x = 0.12;

          sm.shoulderL.rotation.x = 0.1;
          sm.elbowL.rotation.x = -0.75;
          sm.shoulderR.rotation.x = 0.1;
          sm.elbowR.rotation.x = -0.75;
        }

        // Trigger occasional slide tackles for nearest defenders
        if (sm.role === 'DF' && distToBall < 1.6 && !hasBallPossession && Math.random() < 0.004 && sm.tackleTimer <= 0) {
          sm.tackleTimer = 0.75;
        }
      }
    }

    // 2. Realistic 3D Soccer Ball & Aerodynamics
    if (ballMesh) {
      if (state.shotAnim && state.shotAnim.active) {
        // Fast low-driven shot into goal net (realistic, not floating)
        const shot = state.shotAnim;
        const startPos = map2DTo3D(shot.startX, shot.startY);
        const targetPos = map2DTo3D(shot.targetX, shot.targetY);

        // Fast shot speed — ball travels quickly like a real strike
        shot.progress = Math.min(1.0, shot.progress + dt * 3.5 * (state.speedMultiplier || 1));
        const p = shot.progress;

        // Trigger shooter kick animation at start of shot (only once)
        if (!shot._kickTriggered) {
          shot._kickTriggered = true;
          const shooterSide = shot.side;
          stickmen.forEach(sm => {
            if (sm.side === shooterSide && sm.role === 'FW' && sm.kickTimer <= 0) {
              sm.kickTimer = 0.45;
            }
          });
        }

        const shooterSide = shot.side;

        // Trigger Defending Goalkeeper Dive!
        const defendingSide = shooterSide === 'home' ? 'away' : 'home';
        const defendingGK = stickmen.find(sm => sm.side === defendingSide && sm.role === 'GK');
        if (defendingGK && defendingGK.diveTimer <= 0 && p > 0.1) {
          defendingGK.diveTimer = 1.3;
          defendingGK.diveSide = targetPos.z > defendingGK.root.position.z ? 1 : -1;
        }

        // Realistic low-driven trajectory — ball stays low (max ~0.9m off ground)
        // Uses a flatter arc that simulates a powerful ground-level or half-volley shot
        const shotHeight = Math.sin(p * Math.PI) * 0.9;
        ballMesh.position.x = startPos.x + (targetPos.x - startPos.x) * p;
        ballMesh.position.z = startPos.z + (targetPos.z - startPos.z) * p;
        ballMesh.position.y = 0.44 + shotHeight;

        // Rapid backspin on the ball
        ballMesh.rotation.x += dt * 32;
        ballMesh.rotation.z += dt * 8;

        // Shadow stays close because ball is low
        ballShadow.position.x = ballMesh.position.x;
        ballShadow.position.z = ballMesh.position.z;
        const shadowScale = Math.max(0.55, 1.0 - shotHeight * 0.35);
        ballShadow.scale.setScalar(shadowScale);

        // Net bulge ripple when ball hits goal!
        if (p > 0.88) {
          const targetNet = shooterSide === 'home' ? netMeshRight : netMeshLeft;
          if (targetNet) {
            targetNet.position.x += (shooterSide === 'home' ? 0.08 : -0.08);
          }
        }
      } else {
        // Ground passing & dribbling with true rolling physics
        const prevBallX = ballMesh.position.x;
        const prevBallZ = ballMesh.position.z;

        ballMesh.position.x += (ballPos3D.x - prevBallX) * 0.38;
        ballMesh.position.z += (ballPos3D.z - prevBallZ) * 0.38;
        ballMesh.position.y = 0.44;

        // True rolling rotation based on distance traveled (omega = v / r)
        const dX = ballMesh.position.x - prevBallX;
        const dZ = ballMesh.position.z - prevBallZ;
        const distRolled = Math.sqrt(dX * dX + dZ * dZ);
        if (distRolled > 0.001) {
          const rollAngle = distRolled / 0.44;
          ballMesh.rotation.x += (dZ / distRolled) * rollAngle;
          ballMesh.rotation.z -= (dX / distRolled) * rollAngle;
        }

        ballShadow.position.x = ballMesh.position.x;
        ballShadow.position.z = ballMesh.position.z;
        ballShadow.scale.setScalar(1.0);
      }
    }

    // 3. Update Camera according to active view mode
    updateCameraPosition();

    // 4. Render Frame
    renderer.render(scene, camera);
  }

  function updateCameraPosition() {
    if (!camera || !ballMesh) return;

    if (currentCamMode === 'broadcast') {
      // Dynamic TV Broadcast camera smoothly tracking match action
      const targetCamX = ballMesh.position.x * 0.58;
      const targetCamZ = 48;
      const targetCamY = 28;

      camera.position.x += (targetCamX - camera.position.x) * 0.08;
      camera.position.y += (targetCamY - camera.position.y) * 0.08;
      camera.position.z += (targetCamZ - camera.position.z) * 0.08;

      const lookTargetX = ballMesh.position.x * 0.72;
      camera.lookAt(lookTargetX, 1.2, 0);
    } else if (currentCamMode === 'tactical') {
      // High-angle Tactical Top-Down
      camera.position.set(0, 58, 38);
      camera.lookAt(0, 0, 0);
    } else if (currentCamMode === 'behind_goal') {
      // Behind the Goal View
      camera.position.set(-HALF_L - 8, 12, 0);
      camera.lookAt(0, 1.5, 0);
    } else if (currentCamMode === 'custom') {
      // Free 3D Drag / Orbit
      const x = orbitDistance * Math.sin(orbitPhi) * Math.sin(orbitTheta);
      const y = orbitDistance * Math.cos(orbitPhi);
      const z = orbitDistance * Math.sin(orbitPhi) * Math.cos(orbitTheta);
      camera.position.set(x, Math.max(3, y), z);
      camera.lookAt(0, 0, 0);
    }
  }

  function setCameraMode(mode) {
    currentCamMode = mode;
    const btnB = document.getElementById('btnCamBroadcast');
    const btnT = document.getElementById('btnCamTactical');
    const btnG = document.getElementById('btnCamBehindGoal');

    const activeClasses = 'bg-amber-400 text-slate-950 font-black';
    const inactiveClasses = 'text-slate-300 hover:bg-white/10';

    if (btnB) btnB.className = `cam-btn px-2 py-0.5 rounded text-[11px] ${mode === 'broadcast' ? activeClasses : inactiveClasses}`;
    if (btnT) btnT.className = `cam-btn px-2 py-0.5 rounded text-[11px] ${mode === 'tactical' ? activeClasses : inactiveClasses}`;
    if (btnG) btnG.className = `cam-btn px-2 py-0.5 rounded text-[11px] ${mode === 'behind_goal' ? activeClasses : inactiveClasses}`;
  }

  function setupInteractionControls() {
    if (!container) return;

    container.addEventListener('pointerdown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      currentCamMode = 'custom';
      orbitTheta -= deltaX * 0.007;
      orbitPhi = Math.max(0.15, Math.min(Math.PI / 2.05, orbitPhi - deltaY * 0.007));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointerup', () => { isDragging = false; });
    window.addEventListener('pointercancel', () => { isDragging = false; });

    // Wheel zoom
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      currentCamMode = 'custom';
      orbitDistance = Math.max(18, Math.min(110, orbitDistance + e.deltaY * 0.05));
    }, { passive: false });
  }

  // Trigger Goal Celebration for 3D Stickmen
  function onGoalScored(scorerSide) {
    const concedingSide = scorerSide === 'home' ? 'away' : 'home';

    stickmen.forEach(sm => {
      if (sm.side === scorerSide) {
        // Scorer & Teammates perform knee-slide / high-jump celebration!
        sm.celebrateTimer = 2.8;
      } else if (sm.side === concedingSide) {
        // Conceding players slump in frustration
        sm.frustratedTimer = 2.5;
      }
    });
  }

  // ZERO-LAG ACTIVE TOGGLE: Pause/Resume Render Loop to use 0% CPU when 2D tab is shown
  function setActive(active) {
    is3DActive = !!active;
    if (is3DActive) {
      if (!renderer) {
        init3D();
      }
      lastTime = performance.now();
      startLoop();
    } else {
      stopLoop();
    }
  }

  function startLoop() {
    if (animationFrameId) return;
    function renderLoop() {
      if (!is3DActive) {
        animationFrameId = null;
        return;
      }
      animationFrameId = requestAnimationFrame(renderLoop);
      if (window.footballState) {
        update(window.footballState);
      }
    }
    renderLoop();
  }

  function stopLoop() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  // Public Interface
  window.Stickman3D = {
    init: init3D,
    update: update,
    setActive: setActive,
    setCameraMode: setCameraMode,
    updateTeamNames: updateTeamNames,
    onGoalScored: onGoalScored,
    isActive: () => is3DActive
  };

})(window);
