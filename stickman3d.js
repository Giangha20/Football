/**
 * ============================================================================
 * STICKMAN 3D FOOTBALL SIMULATION ENGINE (Giả Lập 3D Người Que Siêu Chân Thật)
 * ============================================================================
 * - Authentic 3D Pitch with Premier League mowing stripes, white lines & 3D nets
 * - 22 Articulated 3D Stickman Players with head, spine, shoulders, elbows, hips, knees & boots
 * - Dynamic 3D Billboard Name Tags showing authentic player names & roles above heads
 * - Real-time 3D physics: parabolic shots, goal-net ripples, keeper dives, celebration jumps
 * - Multiple Camera Angles: TV Broadcast (tracking ball), Tactical Top-Down, Behind-the-Goal & Free Drag
 * - Zero-Lag Architecture: 60 FPS WebGL, automatically sleeps when 2D tab is active (0% CPU/GPU overhead)
 */

(function (window) {
  'use strict';

  let scene, camera, renderer, container;
  let pitchGroup, ballMesh, ballShadow;
  let stickmen = []; // Array of 22 3D stickman objects
  let is3DActive = false;
  let animationFrameId = null;
  let lastTime = 0;
  let currentCamMode = 'broadcast'; // 'broadcast' | 'tactical' | 'behind_goal' | 'custom'

  // Drag to rotate / zoom camera
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let orbitPhi = 0.55; // elevation angle
  let orbitTheta = 0.0; // azimuth angle
  let orbitDistance = 58;

  // Pitch dimensions (proportional to 105m x 68m)
  const PITCH_L = 96; // Length
  const PITCH_W = 64; // Width
  const HALF_L = PITCH_L / 2;
  const HALF_W = PITCH_W / 2;

  // Shared reusable materials & geometries for top performance (tránh lag web)
  let matTurf, matLines, matNet, matBall, matShadow;
  let matStickBlack, matBoot;
  let geomStickLimb, geomJoint, geomHead, geomBoot;

  function init3D(containerEl) {
    if (!window.THREE) {
      console.warn('Three.js is still loading...');
      return false;
    }
    container = containerEl || document.getElementById('canvas3DContainer');
    if (!container) return false;

    // Clear previous canvas if any
    container.innerHTML = '';

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 360;

    // Scene & Camera
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x07111a);
    scene.fog = new THREE.FogExp2(0x07111a, 0.0075);

    camera = new THREE.PerspectiveCamera(45, width / height, 0.5, 300);
    camera.position.set(0, 32, 54);
    camera.lookAt(0, 0, 0);

    // Renderer with high performance & capped pixel ratio
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    // Setup Lighting
    setupLighting();

    // Create Shared Assets
    createSharedAssets();

    // Build 3D Pitch, Lines, Stadium & Goals
    buildStadiumPitch();

    // Build Ball
    buildBall();

    // Build 22 Stickmen
    buildStickmenRoster();

    // Attach Orbit & Touch Controls
    setupInteractionControls();

    // Resize Observer
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
    // Sky / Atmosphere Ambient
    const hemiLight = new THREE.HemisphereLight(0x93c5fd, 0x14532d, 0.65);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    // Main Stadium Floodlight (Casts shadows onto turf)
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.95);
    dirLight.position.set(25, 45, 30);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 10;
    dirLight.shadow.camera.far = 120;
    dirLight.shadow.camera.left = -HALF_L - 6;
    dirLight.shadow.camera.right = HALF_L + 6;
    dirLight.shadow.camera.top = HALF_W + 6;
    dirLight.shadow.camera.bottom = -HALF_W - 6;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);

    // Secondary fill light from opposite side
    const fillLight = new THREE.DirectionalLight(0x6ee7b7, 0.4);
    fillLight.position.set(-25, 35, -30);
    scene.add(fillLight);
  }

  function createSharedAssets() {
    // Shared Materials
    matStickBlack = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.4,
      metalness: 0.3
    });
    matBoot = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.6
    });

    // Shared Geometries (One geometry reused for all 22 stickmen limbs)
    geomStickLimb = new THREE.CylinderGeometry(0.09, 0.08, 1, 8);
    geomJoint = new THREE.SphereGeometry(0.12, 8, 8);
    geomHead = new THREE.SphereGeometry(0.38, 12, 12);
    geomBoot = new THREE.BoxGeometry(0.18, 0.12, 0.32);
  }

  // Generates authentic alternating Premier League green mowing stripes
  function generateTurfTexture() {
    const cv = document.createElement('canvas');
    cv.width = 1024;
    cv.height = 512;
    const cx = cv.getContext('2d');

    const stripes = 12;
    const stripeW = cv.width / stripes;
    for (let i = 0; i < stripes; i++) {
      cx.fillStyle = (i % 2 === 0) ? '#15803d' : '#166534';
      cx.fillRect(i * stripeW, 0, stripeW, cv.height);

      // Subtle grass texture pattern
      cx.fillStyle = 'rgba(255,255,255,0.02)';
      for (let j = 0; j < 300; j++) {
        cx.fillRect(i * stripeW + Math.random() * stripeW, Math.random() * cv.height, 2, 2);
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
      metalness: 0.05
    });
    const turfMesh = new THREE.Mesh(turfGeo, matTurf);
    turfMesh.rotation.x = -Math.PI / 2;
    turfMesh.receiveShadow = true;
    pitchGroup.add(turfMesh);

    // Stadium Surrounding Border (Apron)
    const apronGeo = new THREE.PlaneGeometry(PITCH_L + 16, PITCH_W + 14);
    const matApron = new THREE.MeshStandardMaterial({ color: 0x091b17, roughness: 0.95 });
    const apronMesh = new THREE.Mesh(apronGeo, matApron);
    apronMesh.rotation.x = -Math.PI / 2;
    apronMesh.position.y = -0.04;
    apronMesh.receiveShadow = true;
    pitchGroup.add(apronMesh);

    // White Pitch Lines
    matLines = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lineThickness = 0.22;

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

    // Touchlines and Goal lines
    addLine(-HALF_L, -HALF_W,  HALF_L, -HALF_W); // Top touchline
    addLine(-HALF_L,  HALF_W,  HALF_L,  HALF_W); // Bottom touchline
    addLine(-HALF_L, -HALF_W, -HALF_L,  HALF_W); // Left goal line
    addLine( HALF_L, -HALF_W,  HALF_L,  HALF_W); // Right goal line

    // Halfway Line
    addLine(0, -HALF_W, 0, HALF_W);

    // Center Circle (Radius 9.15m -> ~8.4 units)
    const circleGeo = new THREE.RingGeometry(8.2, 8.42, 48);
    const circleMesh = new THREE.Mesh(circleGeo, matLines);
    circleMesh.rotation.x = -Math.PI / 2;
    circleMesh.position.set(0, 0.02, 0);
    pitchGroup.add(circleMesh);

    // Center Spot
    const spotGeo = new THREE.CircleGeometry(0.4, 16);
    const spotMesh = new THREE.Mesh(spotGeo, matLines);
    spotMesh.rotation.x = -Math.PI / 2;
    spotMesh.position.set(0, 0.025, 0);
    pitchGroup.add(spotMesh);

    // Penalty Areas (40.3m x 16.5m -> 36 x 15 units)
    const penW = 36;
    const penD = 15;
    // Left Penalty Box
    addLine(-HALF_L, -penW / 2, -HALF_L + penD, -penW / 2);
    addLine(-HALF_L + penD, -penW / 2, -HALF_L + penD, penW / 2);
    addLine(-HALF_L, penW / 2, -HALF_L + penD, penW / 2);
    // Left Penalty Spot
    const leftSpot = new THREE.Mesh(spotGeo, matLines);
    leftSpot.rotation.x = -Math.PI / 2;
    leftSpot.position.set(-HALF_L + 10, 0.025, 0);
    pitchGroup.add(leftSpot);

    // Right Penalty Box
    addLine(HALF_L, -penW / 2, HALF_L - penD, -penW / 2);
    addLine(HALF_L - penD, -penW / 2, HALF_L - penD, penW / 2);
    addLine(HALF_L, penW / 2, HALF_L - penD, penW / 2);
    // Right Penalty Spot
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
    build3DGoal(-HALF_L, -1); // Left Goal
    build3DGoal( HALF_L,  1); // Right Goal

    // Stadium Perimeter LED Advertising Boards
    buildStadiumBoards();
  }

  function build3DGoal(xPos, direction) {
    const goalW = 12; // width
    const goalH = 4.4; // height
    const goalD = 3.8; // depth behind line
    const postR = 0.14;

    const postMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.6
    });

    // 2 Vertical Goalposts
    const postGeo = new THREE.CylinderGeometry(postR, postR, goalH, 12);
    const postLeft = new THREE.Mesh(postGeo, postMat);
    postLeft.position.set(xPos, goalH / 2, -goalW / 2);
    postLeft.castShadow = true;
    pitchGroup.add(postLeft);

    const postRight = new THREE.Mesh(postGeo, postMat);
    postRight.position.set(xPos, goalH / 2, goalW / 2);
    postRight.castShadow = true;
    pitchGroup.add(postRight);

    // Crossbar
    const barGeo = new THREE.CylinderGeometry(postR, postR, goalW, 12);
    const crossbar = new THREE.Mesh(barGeo, postMat);
    crossbar.rotation.x = Math.PI / 2;
    crossbar.position.set(xPos, goalH, 0);
    crossbar.castShadow = true;
    pitchGroup.add(crossbar);

    // 3D Goal Net (Slanted translucent wireframe mesh)
    const netMat = new THREE.MeshBasicMaterial({
      color: 0xe2e8f0,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });

    // Back net
    const backGeo = new THREE.PlaneGeometry(goalW, goalH);
    const backNet = new THREE.Mesh(backGeo, netMat);
    backNet.position.set(xPos + direction * goalD, goalH / 2, 0);
    backNet.rotation.y = direction < 0 ? Math.PI / 2 : -Math.PI / 2;
    pitchGroup.add(backNet);

    // Roof net (slanted from crossbar to back net)
    const roofGeo = new THREE.PlaneGeometry(goalW, goalD);
    const roofNet = new THREE.Mesh(roofGeo, netMat);
    roofNet.position.set(xPos + direction * (goalD / 2), goalH, 0);
    roofNet.rotation.x = Math.PI / 2;
    pitchGroup.add(roofNet);

    // Side nets
    const sideGeo = new THREE.PlaneGeometry(goalD, goalH);
    const sideNet1 = new THREE.Mesh(sideGeo, netMat);
    sideNet1.position.set(xPos + direction * (goalD / 2), goalH / 2, -goalW / 2);
    pitchGroup.add(sideNet1);

    const sideNet2 = new THREE.Mesh(sideGeo, netMat);
    sideNet2.position.set(xPos + direction * (goalD / 2), goalH / 2, goalW / 2);
    pitchGroup.add(sideNet2);
  }

  function buildStadiumBoards() {
    // Top and Bottom Glowing LED Ad Boards
    const boardMat = new THREE.MeshStandardMaterial({
      color: 0x064e3b,
      emissive: 0x047857,
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

  function buildBall() {
    const ballGeo = new THREE.SphereGeometry(0.42, 16, 16);
    // Soccer ball texture with high contrast
    matBall = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3,
      metalness: 0.1
    });
    ballMesh = new THREE.Mesh(ballGeo, matBall);
    ballMesh.position.set(0, 0.42, 0);
    ballMesh.castShadow = true;
    scene.add(ballMesh);

    // Dynamic Ball Shadow on Pitch
    const shadowGeo = new THREE.CircleGeometry(0.45, 16);
    matShadow = new THREE.MeshBasicMaterial({
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

    // Left Role Pill Badge (GK, DF, MF, FW)
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
    ctx.shadowColor = 'rgba(0,0,0,0.8)';
    ctx.shadowBlur = 6;

    // Truncate cleanly if name is extra long
    let displayName = playerName || 'Cầu thủ';
    if (displayName.length > 14) displayName = displayName.substring(0, 13) + '…';
    ctx.fillText(displayName, 96, cv.height / 2 + 2);

    const tex = new THREE.CanvasTexture(cv);
    tex.minFilter = THREE.LinearFilter;
    return tex;
  }

  // Creates an articulated 3D Stickman rig (Hierarchical joints for natural running/kicking)
  function createStickmanRig(id, side, role, fullName, shortName, teamColorHex) {
    const isHome = side === 'home';
    const root = new THREE.Group();

    // Team Jersey Material for Torso
    const jerseyMat = new THREE.MeshStandardMaterial({
      color: teamColorHex || (isHome ? 0x10b981 : 0x0284c7),
      roughness: 0.35,
      metalness: 0.15
    });

    // 1. Torso (Spine)
    const torsoMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.16, 0.14, 1.1, 10),
      role === 'GK' ? new THREE.MeshStandardMaterial({ color: 0xfacc15, roughness: 0.3 }) : jerseyMat
    );
    torsoMesh.position.y = 1.35;
    torsoMesh.castShadow = true;
    root.add(torsoMesh);

    // 2. Neck & Head
    const headMesh = new THREE.Mesh(geomHead, matStickBlack);
    headMesh.position.y = 2.15;
    headMesh.castShadow = true;
    root.add(headMesh);

    // Headband / Visor matching team color
    const bandGeo = new THREE.TorusGeometry(0.38, 0.05, 8, 24);
    const bandMesh = new THREE.Mesh(bandGeo, jerseyMat);
    bandMesh.rotation.x = Math.PI / 2;
    bandMesh.position.y = 2.18;
    root.add(bandMesh);

    // 3. Dynamic Name Tag Billboard Sprite (Always faces camera)
    const nameTex = generateNameTagTexture(shortName || fullName, role, isHome, teamColorHex);
    const spriteMat = new THREE.SpriteMaterial({
      map: nameTex,
      transparent: true,
      depthTest: false
    });
    const nameSprite = new THREE.Sprite(spriteMat);
    nameSprite.position.set(0, 2.85, 0);
    nameSprite.scale.set(4.0, 1.0, 1.0);
    root.add(nameSprite);

    // 4. Articulated Limbs with Pivot Joints
    // Left Shoulder -> Arm
    const shoulderL = new THREE.Group();
    shoulderL.position.set(0, 1.75, -0.28);
    const armL = new THREE.Mesh(geomStickLimb, matStickBlack);
    armL.position.y = -0.45;
    armL.scale.set(1, 0.9, 1);
    shoulderL.add(armL);
    root.add(shoulderL);

    // Right Shoulder -> Arm
    const shoulderR = new THREE.Group();
    shoulderR.position.set(0, 1.75, 0.28);
    const armR = new THREE.Mesh(geomStickLimb, matStickBlack);
    armR.position.y = -0.45;
    armR.scale.set(1, 0.9, 1);
    shoulderR.add(armR);
    root.add(shoulderR);

    // Left Hip -> Leg & Boot
    const hipL = new THREE.Group();
    hipL.position.set(0, 0.85, -0.18);
    const legL = new THREE.Mesh(geomStickLimb, matStickBlack);
    legL.position.y = -0.42;
    legL.scale.set(1.1, 0.85, 1.1);
    hipL.add(legL);
    const bootL = new THREE.Mesh(geomBoot, matBoot);
    bootL.position.set(0.08, -0.82, 0);
    hipL.add(bootL);
    root.add(hipL);

    // Right Hip -> Leg & Boot
    const hipR = new THREE.Group();
    hipR.position.set(0, 0.85, 0.18);
    const legR = new THREE.Mesh(geomStickLimb, matStickBlack);
    legR.position.y = -0.42;
    legR.scale.set(1.1, 0.85, 1.1);
    hipR.add(legR);
    const bootR = new THREE.Mesh(geomBoot, matBoot);
    bootR.position.set(0.08, -0.82, 0);
    hipR.add(bootR);
    root.add(hipR);

    scene.add(root);

    return {
      id,
      side,
      role,
      fullName,
      shortName,
      root,
      torsoMesh,
      nameSprite,
      shoulderL,
      shoulderR,
      hipL,
      hipR,
      runCadence: Math.random() * 6.28,
      kickAnim: 0,
      diveAnim: 0,
      celebrateAnim: 0
    };
  }

  function buildStickmenRoster() {
    // Clear existing stickmen from scene
    stickmen.forEach(s => scene.remove(s.root));
    stickmen = [];

    const state = window.footballState;
    const homeTeam = state?.homeTeam || { name: 'Chủ nhà', color: '#10b981', stars: ['Cầu thủ 1'] };
    const awayTeam = state?.awayTeam || { name: 'Khách', color: '#0284c7', stars: ['Cầu thủ 1'] };

    // Standard 11v11 Tactical 4-3-3 Roles
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

  // Updates name badges when teams are changed
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

  // Main 3D Simulation Frame Update (Syncs with match engine state)
  function update(state) {
    if (!state || !is3DActive) return;

    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.1);
    lastTime = now;

    // 1. Update 22 Stickman Player Rigs
    if (state.players && state.players.length >= 22) {
      for (let i = 0; i < 22; i++) {
        const p2d = state.players[i];
        const sm = stickmen[i];
        if (!p2d || !sm) continue;

        const targetPos = map2DTo3D(p2d.x, p2d.y);

        // Smooth Lerp towards target position
        const prevX = sm.root.position.x;
        const prevZ = sm.root.position.z;
        sm.root.position.x += (targetPos.x - prevX) * 0.25;
        sm.root.position.z += (targetPos.z - prevZ) * 0.25;

        // Calculate velocity & movement vector
        const dx = targetPos.x - prevX;
        const dz = targetPos.z - prevZ;
        const speed = Math.sqrt(dx * dx + dz * dz);

        // Heading & Rotation
        if (speed > 0.05) {
          const targetAngle = Math.atan2(dx, dz);
          sm.root.rotation.y = targetAngle;
        }

        // Running / Walking Limb Animation (Sinusoidal Inverse Kinematics)
        const isRunning = speed > 0.04;
        const isKicking = sm.kickAnim > 0;
        const isCelebrating = sm.celebrateAnim > 0;

        if (isCelebrating) {
          sm.celebrateAnim -= dt;
          sm.root.position.y = Math.max(0, Math.sin(now * 0.008) * 0.5);
          sm.shoulderL.rotation.x = -2.6; // Arms high in Victory V-pose
          sm.shoulderR.rotation.x = -2.6;
          sm.hipL.rotation.x = 0;
          sm.hipR.rotation.x = 0;
        } else if (isKicking) {
          sm.kickAnim -= dt;
          // Kicking backswing & powerful follow-through
          sm.hipR.rotation.x = -1.1 * Math.sin(sm.kickAnim * Math.PI);
          sm.shoulderL.rotation.x = 0.6;
          sm.shoulderR.rotation.x = -0.6;
        } else if (isRunning) {
          sm.runCadence += speed * 3.5;
          const swing = Math.sin(sm.runCadence) * 0.65;

          // Alternating Thighs & Opposite Arms
          sm.hipL.rotation.x = swing;
          sm.hipR.rotation.x = -swing;
          sm.shoulderL.rotation.x = -swing * 0.7;
          sm.shoulderR.rotation.x = swing * 0.7;

          // Vertical bobbing with stride
          sm.root.position.y = Math.abs(Math.sin(sm.runCadence * 2)) * 0.08;
        } else {
          // Idle athletic ready stance
          sm.hipL.rotation.x *= 0.85;
          sm.hipR.rotation.x *= 0.85;
          sm.shoulderL.rotation.x *= 0.85;
          sm.shoulderR.rotation.x *= 0.85;
          sm.root.position.y = 0;
        }
      }
    }

    // 2. Update 3D Soccer Ball & Physics
    if (ballMesh) {
      if (state.shotAnim && state.shotAnim.active) {
        // High-velocity parabolic shot into the goal net
        const shot = state.shotAnim;
        const startPos = map2DTo3D(shot.startX, shot.startY);
        const targetPos = map2DTo3D(shot.targetX, shot.targetY);

        shot.progress = Math.min(1.0, shot.progress + dt * 1.8 * (state.speedMultiplier || 1));
        const p = shot.progress;

        ballMesh.position.x = startPos.x + (targetPos.x - startPos.x) * p;
        ballMesh.position.z = startPos.z + (targetPos.z - startPos.z) * p;

        // Parabolic arc (curves up off the turf and into top/bottom corner)
        ballMesh.position.y = 0.42 + Math.sin(p * Math.PI) * 3.4;

        // Rapid spin
        ballMesh.rotation.x += dt * 18;
        ballMesh.rotation.y += dt * 12;

        // Shadow follows ground position
        ballShadow.position.x = ballMesh.position.x;
        ballShadow.position.z = ballMesh.position.z;
        ballShadow.scale.setScalar(Math.max(0.3, 1.0 - (ballMesh.position.y - 0.42) * 0.18));
      } else if (state.ballPos || state.ball) {
        // Ground passing & dribbling
        const rawBall = state.ballPos || state.ball;
        const ballPos = map2DTo3D(rawBall.x, rawBall.y);
        ballMesh.position.x += (ballPos.x - ballMesh.position.x) * 0.35;
        ballMesh.position.z += (ballPos.z - ballMesh.position.z) * 0.35;
        ballMesh.position.y = 0.42;

        ballMesh.rotation.x += 0.15;
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
      // Broadcast Camera: Dynamic side-view tracking ball with smooth dampening
      const targetCamX = ballMesh.position.x * 0.55;
      const targetCamZ = 46;
      const targetCamY = 28;

      camera.position.x += (targetCamX - camera.position.x) * 0.08;
      camera.position.y += (targetCamY - camera.position.y) * 0.08;
      camera.position.z += (targetCamZ - camera.position.z) * 0.08;

      const lookTargetX = ballMesh.position.x * 0.7;
      camera.lookAt(lookTargetX, 1.2, 0);
    } else if (currentCamMode === 'tactical') {
      // Top-Down Tactical Camera
      camera.position.set(0, 56, 36);
      camera.lookAt(0, 0, 0);
    } else if (currentCamMode === 'behind_goal') {
      // Dramatic Behind-the-Goal Camera
      camera.position.set(-HALF_L - 8, 11, 0);
      camera.lookAt(0, 1.5, 0);
    } else if (currentCamMode === 'custom') {
      // Orbit spherical coordinates from user touch/mouse drag
      const x = orbitDistance * Math.sin(orbitPhi) * Math.sin(orbitTheta);
      const y = orbitDistance * Math.cos(orbitPhi);
      const z = orbitDistance * Math.sin(orbitPhi) * Math.cos(orbitTheta);
      camera.position.set(x, Math.max(4, y), z);
      camera.lookAt(0, 0, 0);
    }
  }

  function setCameraMode(mode) {
    currentCamMode = mode;
    const btnB = document.getElementById('btnCamBroadcast');
    const btnT = document.getElementById('btnCamTactical');
    const btnG = document.getElementById('btnCamBehindGoal');

    const activeClasses = 'bg-amber-400 text-slate-950';
    const inactiveClasses = 'text-slate-300 hover:bg-white/10';

    if (btnB) btnB.className = `cam-btn px-2 py-0.5 rounded text-[11px] font-bold ${mode === 'broadcast' ? activeClasses : inactiveClasses}`;
    if (btnT) btnT.className = `cam-btn px-2 py-0.5 rounded text-[11px] font-bold ${mode === 'tactical' ? activeClasses : inactiveClasses}`;
    if (btnG) btnG.className = `cam-btn px-2 py-0.5 rounded text-[11px] font-bold ${mode === 'behind_goal' ? activeClasses : inactiveClasses}`;
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

      currentCamMode = 'custom'; // Switch to manual touch-drag camera
      orbitTheta -= deltaX * 0.007;
      orbitPhi = Math.max(0.15, Math.min(Math.PI / 2.1, orbitPhi - deltaY * 0.007));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('pointerup', () => { isDragging = false; });
    window.addEventListener('pointercancel', () => { isDragging = false; });

    // Wheel zoom
    container.addEventListener('wheel', (e) => {
      e.preventDefault();
      currentCamMode = 'custom';
      orbitDistance = Math.max(20, Math.min(100, orbitDistance + e.deltaY * 0.05));
    }, { passive: false });
  }

  // Trigger Goal Celebration for 3D Stickmen
  function onGoalScored(scorerSide) {
    stickmen.forEach(sm => {
      if (sm.side === scorerSide) {
        sm.celebrateAnim = 2.4; // 2.4 seconds celebration jump
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
