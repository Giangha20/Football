// =========================================================================
    // 0. 100% OFFLINE ICON ENGINE (LUCIDE SVG) & OFFLINE CONFETTI ENGINE
    // =========================================================================
    const OFFLINE_SVG_PATHS = {
      'trophy': '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
      'flame': '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
      'star': '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      'crown': '<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>',
      'volume-2': '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
      'volume-x': '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/>',
      'help-circle': '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
      'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
      'swords': '<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/>',
      'chevron-up': '<path d="m18 15-6-6-6 6"/>',
      'chevron-down': '<path d="m6 9 6 6 6-6"/>',
      'check-square': '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
      'trending-up': '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>',
      'play': '<polygon points="6 3 20 12 6 21 6 3"/>',
      'zap': '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
      'shuffle': '<path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/>',
      'bar-chart-3': '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
      'shield': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
      'layout-grid': '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
      'globe': '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
      'history': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
      'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
      'award': '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',
      'loader-2': '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>'
    };

    window.lucide = {
      createIcons() {
        document.querySelectorAll('[data-lucide]').forEach(el => {
          const name = el.getAttribute('data-lucide');
          const paths = OFFLINE_SVG_PATHS[name] || OFFLINE_SVG_PATHS['star'];
          const cls = el.getAttribute('class') || 'w-4 h-4';
          const idAttr = el.id ? `id="${el.id}"` : '';
          el.outerHTML = `<svg ${idAttr} data-lucide="${name}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="${cls}">${paths}</svg>`;
        });
      }
    };

    window.confetti = function(opts = {}) {
      const count = opts.particleCount || 60;
      const container = document.createElement('div');
      container.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;';
      document.body.appendChild(container);
      const colors = ['#10b981', '#fde047', '#38bdf8', '#f43f5e', '#a855f7'];
      for (let i = 0; i < count; i++) {
        const p = document.createElement('div');
        const size = 6 + Math.random() * 6;
        const left = 20 + Math.random() * 60;
        const dx = (Math.random() - 0.5) * 360;
        const dy = -180 - Math.random() * 260;
        const col = colors[i % colors.length];
        p.style.cssText = `position:absolute;left:${left}%;top:65%;width:${size}px;height:${size}px;background:${col};border-radius:2px;transition:transform 1.1s cubic-bezier(.16,1,.3,1),opacity 1.1s ease;`;
        container.appendChild(p);
        requestAnimationFrame(() => {
          p.style.transform = `translate(${dx}px, ${dy}px) rotate(${Math.random() * 520}deg)`;
          p.style.opacity = '0';
        });
      }
      setTimeout(() => container.remove(), 1200);
    };

    // =========================================================================
    // 1. TOURNAMENTS / LEAGUES CATALOG (14 STRICTLY SEPARATED COMPETITIONS)
    // =========================================================================
    const TOURNAMENTS = [
      {
        id: 'vleague1', name: 'LPBank V.League 1 (Việt Nam)', shortName: 'V.League 1', icon: '🇻🇳', group: 'vleague', groups: ['vleague'],
        formatType: 'league', totalRounds: 26, knockoutPossible: false, groupCount: 0, fifaI: 15,
        formatBadge: 'Vòng tròn 2 lượt (14 CLB - 26 Vòng) • Thắng 3đ, Hòa 1đ + Tính điểm BXH Thế Giới',
        stages: ['Vòng 1/26 (Lượt đi)', 'Vòng 7/26 (Lượt đi)', 'Vòng 13/26 (Cuối lượt đi)', 'Vòng 18/26 (Lượt về)', 'Vòng 24/26 (Đua Vô địch)', 'Vòng 26/26 (Hạ màn V.League)'],
        desc: 'Giải VĐQG Việt Nam (14 CLB) — Thi đấu vòng tròn 2 lượt sân nhà & sân khách (26 vòng đấu), tính điểm BXH.'
      },
      {
        id: 'asian_cup', name: 'Giải Vô Địch Châu Á — AFC Asian Cup (47 ĐTQG)', shortName: 'AFC Asian Cup', icon: '🏆', group: 'vleague', groups: ['vleague', 'nations'],
        formatType: 'cup', totalRounds: 11, knockoutPossible: true, groupCount: 6, fifaI: 40,
        formatBadge: 'Vòng loại Châu Á (47 ĐTQG) + VCK 24 Đội (6 Bảng A, B, C, D, E, F) + Vòng 1/8, Tứ kết, Bán kết & Chung kết',
        stages: [
          'Vòng loại AFC Asian Cup - Lượt 1 (47 ĐTQG Châu Á)',
          'Vòng loại AFC Asian Cup - Vòng loại cuối',
          'Vòng bảng AFC Asian Cup (Bảng A - B - C - D - E - F) • Lượt 1/3',
          'Vòng bảng AFC Asian Cup (Bảng A - B - C - D - E - F) • Lượt 2/3',
          'Vòng bảng AFC Asian Cup (Bảng A - B - C - D - E - F) • Lượt 3/3 (Quyết định)',
          'Vòng 1/8 AFC Asian Cup (16 Đội - Knock-out)',
          'Tứ kết AFC Asian Cup (8 Đội - Knock-out)',
          'Bán kết AFC Asian Cup (4 Đội - Knock-out)',
          'CHUNG KẾT GIẢI VÔ ĐỊCH CHÂU Á — AFC ASIAN CUP'
        ],
        desc: 'Giải Vô Địch Bóng Đá Châu Á (AFC Asian Cup - Đủ 47 Đội tuyển Quốc gia AFC): Vòng loại 47 đội, VCK chia 6 Bảng (Bảng A đến Bảng F - 24 đội), chọn Top 2 mỗi bảng + 4 đội hạng 3 xuất sắc nhất vào Vòng 1/8, Tứ kết, Bán kết và Chung kết!'
      },
      {
        id: 'asean_cup', name: 'ASEAN Mitsubishi Electric Cup (AFF Cup)', shortName: 'ASEAN Cup (ĐNÁ)', icon: '🌏', group: 'vleague', groups: ['vleague', 'nations'],
        formatType: 'cup', totalRounds: 8, knockoutPossible: true, groupCount: 2, fifaI: 30,
        formatBadge: 'Giải VĐQG Đông Nam Á (11 ĐTQG) • Vòng bảng (Bảng A & Bảng B) + Bán kết & Chung kết 2 lượt',
        stages: ['Vòng loại ASEAN Cup (Play-off)', 'Vòng bảng ASEAN Cup (Bảng A & Bảng B) • Lượt 1', 'Vòng bảng ASEAN Cup (Bảng A & Bảng B) • Lượt 3', 'Vòng bảng ASEAN Cup (Bảng A & Bảng B) • Lượt 5', 'Bán kết ASEAN Cup (Knock-out)', 'CHUNG KẾT ASEAN MITSUBISHI ELECTRIC CUP'],
        desc: 'Giải Vô Địch Bóng Đá Đông Nam Á (AFF Cup - Đủ 11 Đội tuyển ĐNÁ) — Chia 2 bảng A & B, chọn Top 2 mỗi bảng vào Bán kết & Chung kết.'
      },
      {
        id: 'asean_club', name: 'Shopee Cup ASEAN Club Championship', shortName: 'ASEAN Club Cup', icon: '🌏', group: 'vleague',
        formatType: 'cup', totalRounds: 8, knockoutPossible: true, groupCount: 3, fifaI: 20,
        formatBadge: 'Cúp C1 CLB Đông Nam Á (Bảng A, B, C) + Bán kết & Chung kết (Có Hiệp phụ & Pen)',
        stages: ['Vòng đấu Bảng (Bảng A - B - C) • Lượt 1', 'Vòng đấu Bảng (Bảng A - B - C) • Lượt 3', 'Vòng đấu Bảng (Bảng A - B - C) • Lượt 5', 'Bán kết Shopee Cup (Knock-out)', 'CHUNG KẾT SHOPEE CUP ASEAN'],
        desc: 'Giải Vô địch các CLB Đông Nam Á — Chia Bảng A, B, C đá vòng tròn tính điểm chọn đội đầu bảng vào Bán kết.'
      },
      {
        id: 'thaileague', name: 'Thai League 1 (Giải VĐQG Thái Lan)', shortName: 'Thai League 1', icon: '🇹🇭', group: 'vleague',
        formatType: 'league', totalRounds: 30, knockoutPossible: false, groupCount: 0, fifaI: 16,
        formatBadge: 'Giải VĐQG Thái Lan (Vòng tròn 2 lượt - 30 Vòng) • Thắng 3đ, Hòa 1đ',
        stages: ['Vòng 1/30 (Khai màn Thai League)', 'Vòng 10/30 (Lượt đi)', 'Vòng 15/30 (Giữa mùa)', 'Vòng 23/30 (Lượt về)', 'Vòng 30/30 (Hạ màn Thai League 1)'],
        desc: 'Giải VĐQG Thái Lan (Thai League 1) — Các CLB hàng đầu xứ Chùa Vàng đối đầu vòng tròn 2 lượt.'
      },
      {
        id: 'msl_idn', name: 'Malaysia Super League & Liga 1 Indonesia', shortName: 'VĐQG Malaysia & Indo', icon: '🇲🇾', group: 'vleague',
        formatType: 'league', totalRounds: 28, knockoutPossible: false, groupCount: 0, fifaI: 15,
        formatBadge: 'Giải VĐQG Đông Nam Á (Malaysia & Indonesia - 28 Vòng) • Thắng 3đ, Hòa 1đ',
        stages: ['Vòng 1/28 (Khai màn)', 'Vòng 9/28 (Lượt đi)', 'Vòng 14/28 (Derby Nusantara)', 'Vòng 22/28 (Lượt về)', 'Vòng 28/28 (Chung kết mùa giải)'],
        desc: 'Giải VĐQG Malaysia & Liga 1 Indonesia — Các CLB mạnh nhất Malaysia và Indonesia tranh tài.'
      },
      {
        id: 'jleague', name: 'Meiji Yasuda J1 League (Nhật Bản)', shortName: 'J1 League (Nhật)', icon: '🇯🇵', group: 'vleague',
        formatType: 'league', totalRounds: 38, knockoutPossible: false, groupCount: 0, fifaI: 20,
        formatBadge: 'Giải VĐQG Nhật Bản (Vòng tròn 2 lượt - 38 Vòng) • Thắng 3đ, Hòa 1đ',
        stages: ['Vòng 1/38 (Khai màn J1 League)', 'Vòng 12/38 (Lượt đi)', 'Vòng 19/38 (Giữa mùa)', 'Vòng 29/38 (Lượt về)', 'Vòng 38/38 (Hạ màn J1 League)'],
        desc: 'Giải VĐQG Nhật Bản (J1 League) — Giải đấu cấp CLB hàng đầu Đông Á với lối chơi kỹ thuật tốc độ cao.'
      },
      {
        id: 'kleague', name: 'Hana 1Q K League 1 (Hàn Quốc)', shortName: 'K League 1 (Hàn)', icon: '🇰🇷', group: 'vleague',
        formatType: 'league', totalRounds: 38, knockoutPossible: false, groupCount: 0, fifaI: 20,
        formatBadge: 'Giải VĐQG Hàn Quốc (Vòng tròn + Championship Round - 38 Vòng) • Thắng 3đ, Hòa 1đ',
        stages: ['Vòng 1/38 (Khai màn K League)', 'Vòng 11/38 (Hyundai Derby)', 'Vòng 22/38 (Lượt về)', 'Vòng 33/38 (Tách nhóm Vô địch)', 'Vòng 38/38 (Chung kết K League 1)'],
        desc: 'Giải VĐQG Hàn Quốc (K League 1) — Đấu trường giàu thể lực và chiến thuật của các CLB Hàn Quốc.'
      },
      {
        id: 'csl', name: 'Chinese Super League (VĐQG Trung Quốc)', shortName: 'CSL (Trung Quốc)', icon: '🇨🇳', group: 'vleague',
        formatType: 'league', totalRounds: 30, knockoutPossible: false, groupCount: 0, fifaI: 18,
        formatBadge: 'Giải VĐQG Trung Quốc (Vòng tròn 2 lượt - 30 Vòng) • Thắng 3đ, Hòa 1đ',
        stages: ['Vòng 1/30 (Khai màn CSL)', 'Vòng 10/30 (Shanghai Derby)', 'Vòng 15/30 (Giữa mùa)', 'Vòng 24/30 (Đua vô địch)', 'Vòng 30/30 (Hạ màn CSL)'],
        desc: 'Giải VĐQG Trung Quốc (Chinese Super League) — Cuộc đua vô địch giữa các CLB lớn của bóng đá Trung Quốc.'
      },
      {
        id: 'saudi_pro', name: 'Roshn Saudi Pro League (Ả Rập)', shortName: 'Saudi Pro League', icon: '🌙', group: 'vleague',
        formatType: 'league', totalRounds: 34, knockoutPossible: false, groupCount: 0, fifaI: 20,
        formatBadge: 'Giải VĐQG Ả Rập Xê Út (Vòng tròn 2 lượt - 34 Vòng) • Thắng 3đ, Hòa 1đ',
        stages: ['Vòng 1/34 (Khai màn)', 'Vòng 12/34 (Riyadh Derby)', 'Vòng 17/34 (Giữa mùa)', 'Vòng 28/34 (Đua vô địch)', 'Vòng 34/34 (Hạ màn Roshn League)'],
        desc: 'Giải VĐQG Ả Rập Xê Út — Quy tụ dàn siêu sao thế giới tại khu vực Tây Á.'
      },
      {
        id: 'afc_cl', name: 'AFC Champions League Elite (Cúp C1 Châu Á)', shortName: 'AFC Champions Cup', icon: '🌏', group: 'vleague',
        formatType: 'cup', totalRounds: 12, knockoutPossible: true, groupCount: 4, fifaI: 25,
        formatBadge: 'Vòng đấu Bảng Châu Á (Bảng A, B, C, D) + Vòng 1/8, Tứ kết, Bán kết & Chung kết',
        stages: ['Vòng đấu Bảng (Bảng A - B - C - D) • Lượt 1', 'Vòng đấu Bảng (Bảng A - B - C - D) • Lượt 3', 'Vòng đấu Bảng (Bảng A - B - C - D) • Lượt 6', 'Vòng 1/8 AFC Elite (Knock-out)', 'Tứ kết AFC Elite (Knock-out)', 'Bán kết AFC Elite (Knock-out)', 'CHUNG KẾT AFC CHAMPIONS LEAGUE ELITE'],
        desc: 'Cúp C1 Châu Á — Chia 4 bảng đấu (Bảng A, B, C, D) giữa các nhà vô địch V.League, J1 League, K League, Thai League, CSL và Saudi Pro League.'
      },

      {
        id: 'ucl', name: 'UEFA Champions League', shortName: 'UEFA Champions League', icon: '⭐', group: 'clubs',
        formatType: 'cup', totalRounds: 15, knockoutPossible: true, groupCount: 8, fifaI: 35,
        formatBadge: 'Vòng đấu Bảng (Bảng A đến Bảng H) + Vòng 1/16, Vòng 1/8, Tứ kết, Bán kết & Chung kết',
        stages: ['Vòng đấu Bảng (Bảng A -> H) • Lượt 1', 'Vòng đấu Bảng (Bảng A -> H) • Lượt 4', 'Vòng đấu Bảng (Bảng A -> H) • Lượt 6', 'Vòng 1/16 Champions League (Knock-out)', 'Vòng 1/8 Champions League (Knock-out)', 'Tứ kết Champions League (Knock-out)', 'Bán kết Champions League (Knock-out)', 'CHUNG KẾT UEFA CHAMPIONS LEAGUE'],
        desc: 'Cúp C1 Châu Âu — Chia 8 bảng đấu (Bảng A đến Bảng H) kết hợp đấu loại trực tiếp Vòng 1/16, 1/8, Tứ kết, Bán kết & Chung kết.'
      },
      {
        id: 'epl', name: 'Premier League (Anh)', shortName: 'Premier League', icon: '🦁', group: 'clubs',
        formatType: 'league', totalRounds: 38, knockoutPossible: false, groupCount: 0, fifaI: 25,
        formatBadge: 'Vòng tròn 2 lượt (20 CLB - 38 Vòng) • Thắng 3đ, Hòa 1đ + Tính điểm BXH Thế Giới',
        stages: ['Vòng 1/38 (Khai màn)', 'Vòng 10/38 (Lượt đi)', 'Vòng 19/38 (Boxing Day)', 'Vòng 28/38 (Lượt về)', 'Vòng 35/38 (Đua Top 4 & Vô địch)', 'Vòng 38/38 (Super Sunday Hạ màn)'],
        desc: 'Giải Ngoại Hạng Anh (Đủ 20 CLB) — Đá vòng tròn 2 lượt đi & về tổng 38 vòng đấu tích điểm BXH.'
      },
      {
        id: 'laliga', name: 'La Liga (Tây Ban Nha)', shortName: 'La Liga', icon: '🇪🇸', group: 'clubs',
        formatType: 'league', totalRounds: 38, knockoutPossible: false, groupCount: 0, fifaI: 25,
        formatBadge: 'Vòng tròn 2 lượt (20 CLB - 38 Vòng) • Thắng 3đ, Hòa 1đ + Tính điểm BXH Thế Giới',
        stages: ['Jornada 1/38 (Khai màn)', 'Jornada 11/38 (El Clásico / Lượt đi)', 'Jornada 19/38 (Giữa mùa)', 'Jornada 29/38 (Lượt về)', 'Jornada 38/38 (Hạ màn La Liga)'],
        desc: 'Giải VĐQG Tây Ban Nha (Đủ 20 CLB) — Đá vòng tròn 2 lượt đi & về 38 vòng đấu.'
      },
      {
        id: 'seriea', name: 'Serie A (Ý)', shortName: 'Serie A', icon: '🇮🇹', group: 'clubs',
        formatType: 'league', totalRounds: 38, knockoutPossible: false, groupCount: 0, fifaI: 25,
        formatBadge: 'Vòng tròn 2 lượt (20 CLB - 38 Vòng) • Đua Scudetto + Tính điểm BXH Thế Giới',
        stages: ['Giornata 1/38 (Lượt đi)', 'Giornata 12/38 (Derby della Madonnina)', 'Giornata 19/38 (Giữa mùa)', 'Giornata 30/38 (Lượt về)', 'Giornata 38/38 (Chung kết Scudetto)'],
        desc: 'Giải VĐQG Ý (Đủ 20 CLB) — Đá vòng tròn 2 lượt 38 vòng đấu tranh danh hiệu Scudetto.'
      },
      {
        id: 'bundesliga', name: 'Bundesliga (Đức)', shortName: 'Bundesliga', icon: '🇩🇪', group: 'clubs',
        formatType: 'league', totalRounds: 34, knockoutPossible: false, groupCount: 0, fifaI: 25,
        formatBadge: 'Vòng tròn 2 lượt (18 CLB - 34 Vòng) • Thắng 3đ, Hòa 1đ + Tính điểm BXH Thế Giới',
        stages: ['Spieltag 1/34 (Khai màn)', 'Spieltag 9/34 (Der Klassiker)', 'Spieltag 17/34 (Hết lượt đi)', 'Spieltag 26/34 (Lượt về)', 'Spieltag 34/34 (Hạ màn đĩa bạc)'],
        desc: 'Giải VĐQG Đức (Đủ 18 CLB) — Đá vòng tròn 2 lượt đi & về tổng cộng 34 vòng đấu.'
      },
      {
        id: 'ligue1', name: 'Ligue 1 (Pháp)', shortName: 'Ligue 1', icon: '🇫🇷', group: 'clubs',
        formatType: 'league', totalRounds: 34, knockoutPossible: false, groupCount: 0, fifaI: 22,
        formatBadge: 'Vòng tròn 2 lượt (18 CLB - 34 Vòng) • Thắng 3đ, Hòa 1đ + Tính điểm BXH Thế Giới',
        stages: ['Journée 1/34 (Khai màn)', 'Journée 10/34 (Le Classique)', 'Journée 17/34 (Giữa mùa)', 'Journée 27/34 (Lượt về)', 'Journée 34/34 (Hạ màn Ligue 1)'],
        desc: 'Giải VĐQG Pháp (Đủ 18 CLB) — Đá vòng tròn 2 lượt đi & về tổng cộng 34 vòng đấu.'
      },
      {
        id: 'americas_cl', name: 'MLS Cup & Copa Libertadores', shortName: 'MLS & Nam Mỹ', icon: '🌎', group: 'clubs',
        formatType: 'cup', totalRounds: 13, knockoutPossible: true, groupCount: 4, fifaI: 25,
        formatBadge: 'Vòng đấu Bảng (Bảng A, B, C, D) + Vòng 1/8, Tứ kết, Bán kết & Chung kết',
        stages: ['Vòng đấu Bảng (Bảng A - B - C - D) • Lượt 1', 'Vòng đấu Bảng (Bảng A - B - C - D) • Lượt 6', 'Vòng 1/8 Châu Mỹ (Knock-out)', 'Tứ kết Châu Mỹ (Knock-out)', 'Bán kết Châu Mỹ (Knock-out)', 'CHUNG KẾT SIÊU CÚP CHÂU MỸ'],
        desc: 'Đấu trường Cúp CLB Châu Mỹ — Chia 4 bảng A, B, C, D kết hợp đấu loại trực tiếp Knock-out.'
      },
      {
        id: 'euro', name: 'UEFA Euro (53 ĐTQG Châu Âu)', shortName: 'UEFA Euro', icon: '🇪🇺', group: 'nations',
        formatType: 'cup', totalRounds: 10, knockoutPossible: true, groupCount: 6, fifaI: 40,
        formatBadge: 'Vòng loại + Vòng bảng (Bảng A, B, C, D, E, F) + Vòng 1/16, 1/8, Tứ kết, Bán kết & Chung kết',
        stages: ['Vòng loại UEFA Euro (Qualifiers)', 'Vòng bảng Euro (Bảng A -> F) • Lượt 1', 'Vòng bảng Euro (Bảng A -> F) • Lượt 2', 'Vòng bảng Euro (Bảng A -> F) • Lượt 3', 'Vòng 1/16 UEFA Euro (Knock-out)', 'Vòng 1/8 UEFA Euro (Knock-out)', 'Tứ kết UEFA Euro (Knock-out)', 'Bán kết UEFA Euro (Knock-out)', 'CHUNG KẾT UEFA EURO'],
        desc: 'Giải Vô Địch ĐTQG Châu Âu (53 ĐTQG) — Vòng loại, Vòng bảng (Bảng A->F) và loại trực tiếp Vòng 1/16, 1/8, Tứ kết, Bán kết, Chung kết.'
      },
      {
        id: 'world_cup', name: 'FIFA World Cup (Đủ 186 ĐTQG)', shortName: 'FIFA World Cup (186 ĐT)', icon: '🌍', group: 'nations',
        formatType: 'cup', totalRounds: 12, knockoutPossible: true, groupCount: 12, fifaI: 50,
        formatBadge: 'Vòng loại 186 ĐTQG + Vòng bảng (Bảng A, B, C, D... L) + Vòng 1/16, 1/8, Tứ kết, Bán kết & Chung kết',
        stages: ['Vòng loại World Cup - Lượt 1 (186 Quốc gia)', 'Vòng loại World Cup - Play-off Liên lục địa', 'Vòng bảng World Cup (Bảng A, B, C, D... L) • Lượt 1', 'Vòng bảng World Cup (Bảng A, B, C, D... L) • Lượt 2', 'Vòng bảng World Cup (Bảng A, B, C, D... L) • Lượt 3', 'Vòng 1/16 FIFA World Cup (Knock-out)', 'Vòng 1/8 FIFA World Cup (Knock-out)', 'Tứ kết FIFA World Cup (Knock-out)', 'Bán kết FIFA World Cup (Knock-out)', 'Tranh Hạng 3 FIFA World Cup (Knock-out)', 'CHUNG KẾT FIFA WORLD CUP'],
        desc: 'Giải Vô Địch Bóng Đá Thế Giới (186 Quốc gia) — Đầy đủ Vòng loại, Vòng bảng (Bảng A, B, C, D... L) và Vòng 1/16, 1/8, Tứ kết, Bán kết, Chung kết!'
      }
    ];

    // =========================================================================
    // 2. COMPLETE TEAMS DATABASE WITH TOURNAMENT TAGS & 11-PLAYER SQUADS
    // =========================================================================
    const TEAMS_DB = [
      // -----------------------------------------------------------------------
      // LPBANK V.LEAGUE 1 (14 CLUBS)
      // -----------------------------------------------------------------------
      {
        id: 'nmd', name: 'Thép Xanh Nam Định', code: 'NĐFC', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1', 'afc_cl', 'asean_club'], rating: 80, icon: '🟡', colors: ['#eab308', '#ca8a04'], form: 'W-W-W',
        stars: ['Nguyễn Xuân Son (Rafaelson)', 'Hendrio Araújo', 'Nguyễn Văn Toàn', 'Lucas Silva', 'Nguyễn Phong Hồng Duy', 'Nguyễn Tuấn Anh', 'Trần Nguyên Mạnh', 'Dương Thanh Hào', 'Lucas Alves', 'Lý Công Hoàng Anh', 'Tô Văn Vũ']
      },
      {
        id: 'cahn', name: 'Công An Hà Nội FC', code: 'CAHN', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1', 'asean_club'], rating: 80, icon: '🛡️', colors: ['#b91c1c', '#eab308'], form: 'W-D-W',
        stars: ['Nguyễn Quang Hải', 'Léo Artur', 'Alan Grafite', 'Vũ Văn Thanh', 'Phan Văn Đức', 'Đoàn Văn Hậu', 'Nguyễn Filip', 'Bùi Hoàng Việt Anh', 'Jason Pendant Quang Vinh', 'Lê Phạm Thành Long', 'Nguyễn Đình Bắc']
      },
      {
        id: 'hnfc', name: 'Hà Nội FC', code: 'HNFC', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1', 'afc_cl'], rating: 79, icon: '🟣', colors: ['#6d28d9', '#eab308'], form: 'W-W-D',
        stars: ['Nguyễn Văn Quyết', 'Phạm Tuấn Hải', 'Đỗ Hùng Dũng', 'Nguyễn Hai Long', 'Augustine Chidi Kwem', 'João Pedro', 'Nguyễn Thành Chung', 'Đỗ Duy Mạnh', 'Phạm Xuân Mạnh', 'Quan Văn Chuẩn', 'Nguyễn Văn Trường']
      },
      {
        id: 'vtl', name: 'Thể Công - Viettel', code: 'VTL', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1'], rating: 79, icon: '⭐', colors: ['#dc2626', '#991b1b'], form: 'W-D-W',
        stars: ['Nguyễn Hoàng Đức', 'Khuất Văn Khang', 'Nhâm Mạnh Dũng', 'Pedro Henrique', 'Amarildo', 'Bùi Tiến Dũng', 'Nguyễn Thanh Bình', 'Trương Tiến Anh', 'Phan Tuấn Tài', 'Nguyễn Đức Chiến', 'Phạm Văn Phong']
      },
      {
        id: 'hpfc', name: 'Hải Phòng FC', code: 'HPFC', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1'], rating: 78, icon: '⚓', colors: ['#dc2626', '#ef4444'], form: 'W-D-W',
        stars: ['Lucão do Break', 'Triệu Việt Hưng', 'Lương Hoàng Nam', 'Nguyễn Hữu Sơn', 'Bicou Bissainthe', 'Nguyễn Đình Triệu', 'Đặng Văn Tới', 'Nguyễn Tuấn Anh', 'Phạm Trung Hiếu', 'Lê Mạnh Dũng', 'Zé Paulo']
      },
      {
        id: 'bbd', name: 'Becamex Bình Dương', code: 'BBD', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1'], rating: 78, icon: '🔵', colors: ['#1d4ed8', '#dc2626'], form: 'W-W-L',
        stars: ['Nguyễn Tiến Linh', 'Bùi Vĩ Hào', 'Quế Ngọc Hải', 'Võ Hoàng Minh Khoa', 'Hồ Tấn Tài', 'Wellington Nem', 'Janclesio', 'Nguyễn Trần Việt Cường', 'Trần Minh Toàn', 'Odilzhon Abdurakhmanov', 'Hà Đức Chinh']
      },
      {
        id: 'bth', name: 'Đông Á Thanh Hóa', code: 'THFC', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1', 'asean_club'], rating: 78, icon: '💛', colors: ['#eab308', '#15803d'], form: 'W-W-D',
        stars: ['Luiz Antônio', 'Rimario Gordon', 'Doãn Ngọc Tân', 'A Mít', 'Nguyễn Thái Sơn', 'Lê Văn Thắng', 'Yago Ramos', 'Gustavo Santos', 'Đinh Viết Tú', 'Hoàng Thái Bình', 'Trịnh Xuân Hoàng']
      },
      {
        id: 'hagl', name: 'Hoàng Anh Gia Lai', code: 'HAGL', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1'], rating: 76, icon: '⛰️', colors: ['#15803d', '#eab308'], form: 'D-W-D',
        stars: ['Trần Minh Vương', 'Châu Ngọc Quang', 'Marciel Silva', 'Jairo Rodrigues', 'Nguyễn Quốc Việt', 'Trần Bảo Toàn', 'Dụng Quang Nho', 'Phạm Lý Đức', 'Trần Trung Kiên', 'Nguyễn Thanh Nhân', 'Lê Văn Sơn']
      },
      {
        id: 'slna', name: 'Sông Lam Nghệ An', code: 'SLNA', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1'], rating: 75, icon: '🦁', colors: ['#facc15', '#ca8a04'], form: 'D-L-W',
        stars: ['Michael Olaha', 'Benjamin Kuku', 'Trần Nam Hải', 'Đinh Xuân Tiến', 'Hồ Văn Cường', 'Phan Xuân Đại', 'Nguyễn Văn Việt', 'Zaracho', 'Lê Nguyên Hoàng', 'Vương Văn Huy', 'Nguyễn Quang Vinh']
      },
      {
        id: 'hlht', name: 'Hồng Lĩnh Hà Tĩnh', code: 'HLHT', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1'], rating: 76, icon: '⛰️', colors: ['#ec4899', '#dc2626'], form: 'W-D-D',
        stars: ['Geovane Magno', 'Noel Mbo', 'Lương Xuân Trường', 'Viktor Lê', 'Nguyễn Trọng Hoàng', 'Adou Minh', 'Helerson', 'Trần Đình Tiến', 'Huỳnh Tấn Tài', 'Vũ Viết Triều', 'Nguyễn Thanh Tùng']
      },
      {
        id: 'qnbd', name: 'Quy Nhơn Bình Định', code: 'QNBĐ', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1'], rating: 75, icon: '🥋', colors: ['#ea580c', '#1e3a8a'], form: 'D-W-L',
        stars: ['Alisson Farias', 'Leonardo Melo', 'Mạc Hồng Quân', 'Vũ Minh Tuấn', 'Cao Văn Triền', 'Đặng Văn Lâm', 'Lục Xuân Hưng', 'Nguyễn Văn Đức', 'Trần Trọng Hiếu', 'Phan Ngọc Tín', 'Huỳnh Tuấn Linh']
      },
      {
        id: 'hcmc', name: 'CLB TP. Hồ Chí Minh', code: 'TP.HCM', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1'], rating: 75, icon: '🚢', colors: ['#dc2626', '#16a34a'], form: 'D-W-L',
        stars: ['Patrik Lê Giang', 'Endrick dos Santos', 'Erik Sorga', 'Bùi Ngọc Long', 'Võ Huy Toàn', 'Adriano Schmidt', 'Nguyễn Hạ Long', 'Đào Quốc Gia', 'Phan Nhật Thanh Long', 'Lâm Thuận', 'Trần Mạnh Cường']
      },
      {
        id: 'qnam', name: 'Quảng Nam FC', code: 'QNFC', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1'], rating: 74, icon: '🌊', colors: ['#0284c7', '#eab308'], form: 'D-L-W',
        stars: ['Hoàng Vũ Samson', 'Charles Atshimene', 'Hyuri Henrique', 'Ngân Văn Đại', 'Nguyễn Văn Công', 'Phạm Văn Nam', 'Võ Văn Toàn', 'Nguyễn Phú Nguyên', 'Phan Thanh Hậu', 'Đặng Văn Lắm', 'Eyenga Alain']
      },
      {
        id: 'shbdn', name: 'SHB Đà Nẵng', code: 'ĐNFC', type: 'vleague', league: 'LPBank V.League 1',
        tournaments: ['vleague1'], rating: 74, icon: '🌉', colors: ['#f97316', '#ea580c'], form: 'L-D-W',
        stars: ['Yuri Mamute', 'Caio César', 'Phan Văn Long', 'Đặng Anh Tuấn', 'Hà Minh Tuấn', 'Phạm Đình Duy', 'Nguyễn Phi Hoàng', 'Lương Duy Cương', 'Marlon Rangel', 'Bùi Tiến Dũng (GK)', 'Lê Văn Hưng']
      },

      // -----------------------------------------------------------------------
      // AFC CHAMPIONS LEAGUE ELITE & ASEAN CLUBS & SAUDI PRO LEAGUE
      // -----------------------------------------------------------------------
      {
        id: 'hil', name: 'Al-Hilal SFC', code: 'HIL', type: 'vleague', league: 'Saudi Pro League / AFC',
        tournaments: ['saudi_pro', 'afc_cl'], rating: 85, icon: '🌙', colors: ['#1d4ed8', '#38bdf8'], form: 'W-W-W',
        stars: ['Aleksandar Mitrović', 'Salem Al-Dawsari', 'Malcom', 'Marcos Leonardo', 'Sergej Milinković-Savić', 'Rúben Neves', 'João Cancelo', 'Renan Lodi', 'Kalidou Koulibaly', 'Ali Al-Bulaihi', 'Yassine Bounou']
      },
      {
        id: 'nas', name: 'Al-Nassr FC', code: 'NAS', type: 'vleague', league: 'Saudi Pro League / AFC',
        tournaments: ['saudi_pro', 'afc_cl'], rating: 85, icon: '☀️', colors: ['#eab308', '#1d4ed8'], form: 'W-W-D',
        stars: ['Cristiano Ronaldo', 'Sadio Mané', 'Anderson Talisca', 'Otávio', 'Marcelo Brozović', 'Angelo Gabriel', 'Mohamed Simakan', 'Aymeric Laporte', 'Sultan Al-Ghannam', 'Nawaf Boushal', 'Bento']
      },
      {
        id: 'itt', name: 'Al-Ittihad Club', code: 'ITT', type: 'vleague', league: 'Saudi Pro League',
        tournaments: ['saudi_pro'], rating: 84, icon: '🐯', colors: ['#eab308', '#18181b'], form: 'W-W-L',
        stars: ['Karim Benzema', 'Moussa Diaby', 'Steven Bergwijn', 'Houssem Aouar', 'N\'Golo Kanté', 'Fabinho', 'Danilo Pereira', 'Mario Mitaj', 'Abdulelah Al-Amri', 'Muhannad Al-Shanqeeti', 'Predrag Rajković']
      },
      {
        id: 'ahl', name: 'Al-Ahli Saudi FC', code: 'AHL', type: 'vleague', league: 'Saudi Pro League / AFC',
        tournaments: ['saudi_pro', 'afc_cl'], rating: 84, icon: '🟢', colors: ['#15803d', '#064e3b'], form: 'W-D-W',
        stars: ['Ivan Toney', 'Roberto Firmino', 'Riyad Mahrez', 'Gabri Veiga', 'Franck Kessié', 'Roger Ibañez', 'Merih Demiral', 'Ezgjan Alioski', 'Ali Majrashi', 'Feras Al-Buraikan', 'Édouard Mendy']
      },
      {
        id: 'fmar', name: 'Yokohama F. Marinos', code: 'YFM', type: 'vleague', league: 'J1 League / AFC',
        tournaments: ['jleague', 'afc_cl'], rating: 81, icon: '⚓', colors: ['#1d4ed8', '#dc2626'], form: 'W-D-W',
        stars: ['Anderson Lopes', 'Yan Matheus', 'Élber', 'Takuma Nishimura', 'Kota Watanabe', 'Takuya Kida', 'Katsuya Nagato', 'Eduardo', 'Ken Matsubara', 'Jun Amano', 'William Popp']
      },
      {
        id: 'vissel', name: 'Vissel Kobe', code: 'VIS', type: 'vleague', league: 'J1 League / AFC',
        tournaments: ['jleague', 'afc_cl'], rating: 82, icon: '🐂', colors: ['#881337', '#18181b'], form: 'W-W-W',
        stars: ['Yuya Osako', 'Yoshinori Muto', 'Daiju Sasaki', 'Hotaru Yamaguchi', 'Takahiro Ogihara', 'Haruya Ide', 'Gotoku Sakai', 'Tetsushi Yamakawa', 'Matheus Thuler', 'Rikuto Hirose', 'Daiya Maekawa']
      },
      {
        id: 'ulsan', name: 'Ulsan HD FC', code: 'ULS', type: 'vleague', league: 'K League 1 / AFC',
        tournaments: ['kleague', 'afc_cl'], rating: 81, icon: '🐅', colors: ['#1e3a8a', '#f59e0b'], form: 'W-W-D',
        stars: ['Joo Min-kyu', 'Yago Cariello', 'Gustav Ludwigson', 'Darijan Bojanić', 'Ko Seung-beom', 'Lee Chung-yong', 'Kim Young-gwon', 'Hwang Seok-ho', 'Lee Myung-jae', 'Seol Young-woo', 'Jo Hyeon-woo']
      },
      {
        id: 'alain', name: 'Al-Ain FC (UAE)', code: 'AIN', type: 'vleague', league: 'UAE Pro League / AFC',
        tournaments: ['afc_cl'], rating: 81, icon: '💜', colors: ['#6d28d9', '#eab308'], form: 'W-L-W',
        stars: ['Soufiane Rahimi', 'Kodjo Fo-Doh Laba', 'Kaku Romero', 'Matías Palacios', 'Park Yong-woo', 'Yahia Nader', 'Bandar Al-Ahbabi', 'Kouame Autonne', 'Erik Jorgens', 'Fábio Cardoso', 'Khalid Eisa']
      },
      {
        id: 'buri', name: 'Buriram United', code: 'BRU', type: 'vleague', league: 'Thai League 1 / AFC',
        tournaments: ['thaileague', 'afc_cl', 'asean_club'], rating: 79, icon: '⚡', colors: ['#1e3a8a', '#38bdf8'], form: 'W-W-D',
        stars: ['Supachai Chaided', 'Guilherme Bissoli', 'Lucas Crispim', 'Theerathon Bunmathan', 'Narubadin Weerawatnodom', 'Phitiwat Sukjitthammakul', 'Kenneth Dougall', 'Dion Cools', 'Kim Min-hyeok', 'Sasalak Haiprakhon', 'Neil Etheridge']
      },
      {
        id: 'bgpu', name: 'BG Pathum United', code: 'BGPU', type: 'vleague', league: 'Thai League 1 / ASEAN',
        tournaments: ['thaileague', 'asean_club'], rating: 78, icon: '🐰', colors: ['#1d4ed8', '#2563eb'], form: 'W-D-W',
        stars: ['Chanathip Songkrasin', 'Teerasil Dangda', 'Ikhsan Fandi', 'Raniel Santana', 'Freddy Álvarez', 'Kritsada Kaman', 'achitpol Keereerom', 'Christian Gomis', 'Waris Choolthong', 'Sanchai Nontasila', 'Saranon Anuin']
      },
      {
        id: 'jdt', name: 'Johor Darul Ta\'zim', code: 'JDT', type: 'vleague', league: 'Malaysia Super League / AFC',
        tournaments: ['msl_idn', 'afc_cl', 'asean_club'], rating: 80, icon: '🐯', colors: ['#1e3a8a', '#dc2626'], form: 'W-W-W',
        stars: ['Arif Aiman Hanapi', 'Bérgson da Silva', 'Heberty Fernandes', 'Juan Muñiz', 'Jordi Amat', 'Matthew Davies', 'La\'Vere Corbin-Ong', 'Hong Wan', 'Natxo Insa', 'Feroz Baharudin', 'Syihan Hazmi']
      },
      {
        id: 'psm', name: 'PSM Makassar', code: 'PSM', type: 'vleague', league: 'Liga 1 Indonesia / ASEAN',
        tournaments: ['msl_idn', 'asean_club'], rating: 76, icon: '⛵', colors: ['#991b1b', '#dc2626'], form: 'D-W-D',
        stars: ['Nermin Haljeta', 'Tito Okello', 'Yuran Fernandes', 'Akbar Tanjung', 'Ananda Raehan', 'Victor Luiz', 'Aloisio Neto', 'Dzaky Asraf', 'Ricky Pratama', 'Latyr Fall', 'Reza Arya Pratama']
      },

      // -----------------------------------------------------------------------
      // LA LIGA (SPAIN) & UEFA CHAMPIONS LEAGUE
      // -----------------------------------------------------------------------
      {
        id: 'rma', name: 'Real Madrid', code: 'RMA', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga', 'ucl'], rating: 92, icon: '👑', colors: ['#1e3a8a', '#f59e0b'], form: 'W-W-W',
        stars: ['Kylian Mbappé', 'Vinícius Júnior', 'Jude Bellingham', 'Federico Valverde', 'Rodrygo Goes', 'Luka Modrić', 'Eduardo Camavinga', 'Antonio Rüdiger', 'Dani Carvajal', 'Thibaut Courtois', 'Arda Güler']
      },
      {
        id: 'fcb', name: 'FC Barcelona', code: 'BAR', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga', 'ucl'], rating: 91, icon: '🔵', colors: ['#991b1b', '#1d4ed8'], form: 'W-W-W',
        stars: ['Lamine Yamal', 'Robert Lewandowski', 'Raphinha', 'Pedri', 'Dani Olmo', 'Gavi', 'Frenkie de Jong', 'Jules Koundé', 'Pau Cubarsí', 'Alejandro Balde', 'Marc-André ter Stegen']
      },
      {
        id: 'atm', name: 'Atlético Madrid', code: 'ATM', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga', 'ucl'], rating: 87, icon: '🛡️', colors: ['#dc2626', '#1e3a8a'], form: 'W-W-D',
        stars: ['Antoine Griezmann', 'Julián Álvarez', 'Alexander Sørloth', 'Rodrigo De Paul', 'Conor Gallagher', 'Koke', 'Marcos Llorente', 'José María Giménez', 'Robin Le Normand', 'Jan Oblak', 'Samuel Lino']
      },
      {
        id: 'ath', name: 'Athletic Bilbao', code: 'ATH', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 85, icon: '🔴', colors: ['#dc2626', '#18181b'], form: 'W-D-W',
        stars: ['Nico Williams', 'Iñaki Williams', 'Oihan Sancet', 'Gorka Guruzeta', 'Álex Berenguer', 'Iñigo Ruiz de Galarreta', 'Mikel Jauregizar', 'Dani Vivian', 'Aitor Paredes', 'Yuri Berchiche', 'Unai Simón']
      },

      // -----------------------------------------------------------------------
      // PREMIER LEAGUE (ENGLAND) & UEFA CHAMPIONS LEAGUE
      // -----------------------------------------------------------------------
      {
        id: 'mci', name: 'Manchester City', code: 'MCI', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl', 'ucl'], rating: 91, icon: '⛵', colors: ['#0284c7', '#38bdf8'], form: 'W-W-D',
        stars: ['Erling Haaland', 'Kevin De Bruyne', 'Phil Foden', 'Rodri', 'Bernardo Silva', 'Jérémy Doku', 'Savinho', 'Joško Gvardiol', 'Rúben Dias', 'Kyle Walker', 'Ederson']
      },
      {
        id: 'liv', name: 'Liverpool FC', code: 'LIV', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl', 'ucl'], rating: 90, icon: '🦅', colors: ['#991b1b', '#dc2626'], form: 'W-W-W',
        stars: ['Mohamed Salah', 'Luis Díaz', 'Darwin Núñez', 'Cody Gakpo', 'Dominik Szoboszlai', 'Alexis Mac Allister', 'Ryan Gravenberch', 'Virgil van Dijk', 'Trent Alexander-Arnold', 'Ibrahima Konaté', 'Alisson Becker']
      },
      {
        id: 'ars', name: 'Arsenal FC', code: 'ARS', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl', 'ucl'], rating: 89, icon: '🎯', colors: ['#dc2626', '#991b1b'], form: 'W-D-W',
        stars: ['Bukayo Saka', 'Martin Ødegaard', 'Kai Havertz', 'Gabriel Martinelli', 'Leandro Trossard', 'Declan Rice', 'Thomas Partey', 'William Saliba', 'Gabriel Magalhães', 'Jurriën Timber', 'David Raya']
      },
      {
        id: 'che', name: 'Chelsea FC', code: 'CHE', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 87, icon: '🦁', colors: ['#1d4ed8', '#2563eb'], form: 'W-W-D',
        stars: ['Cole Palmer', 'Nicolas Jackson', 'Christopher Nkunku', 'Pedro Neto', 'Noni Madueke', 'Moisés Caicedo', 'Enzo Fernández', 'Reece James', 'Levi Colwill', 'Marc Cucurella', 'Robert Sánchez']
      },
      {
        id: 'mun', name: 'Manchester United', code: 'MUN', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 85, icon: '🔱', colors: ['#b91c1c', '#f59e0b'], form: 'W-D-L',
        stars: ['Bruno Fernandes', 'Alejandro Garnacho', 'Rasmus Højlund', 'Marcus Rashford', 'Amad Diallo', 'Kobbie Mainoo', 'Manuel Ugarte', 'Lisandro Martínez', 'Matthijs de Ligt', 'Diogo Dalot', 'André Onana']
      },
      {
        id: 'tot', name: 'Tottenham Hotspur', code: 'TOT', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 85, icon: '🐓', colors: ['#1e293b', '#38bdf8'], form: 'W-L-W',
        stars: ['Son Heung-min', 'Dominic Solanke', 'James Maddison', 'Dejan Kulusevski', 'Brennan Johnson', 'Yves Bissouma', 'Pape Matar Sarr', 'Cristian Romero', 'Micky van de Ven', 'Pedro Porro', 'Guglielmo Vicario']
      },

      // -----------------------------------------------------------------------
      // BUNDESLIGA (GERMANY) & UEFA CHAMPIONS LEAGUE
      // -----------------------------------------------------------------------
      {
        id: 'bay', name: 'Bayern Munich', code: 'BAY', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga', 'ucl'], rating: 90, icon: '🔴', colors: ['#b91c1c', '#ef4444'], form: 'W-D-W',
        stars: ['Harry Kane', 'Jamal Musiala', 'Michael Olise', 'Leroy Sané', 'Serge Gnabry', 'Joshua Kimmich', 'Aleksandar Pavlović', 'Alphonso Davies', 'Dayot Upamecano', 'Kim Min-jae', 'Manuel Neuer']
      },
      {
        id: 'lev', name: 'Bayer Leverkusen', code: 'B04', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga', 'ucl'], rating: 88, icon: '🦁', colors: ['#b91c1c', '#111827'], form: 'W-D-W',
        stars: ['Florian Wirtz', 'Victor Boniface', 'Patrik Schick', 'Alejandro Grimaldo', 'Jeremie Frimpong', 'Granit Xhaka', 'Exequiel Palacios', 'Jonathan Tah', 'Edmond Tapsoba', 'Piero Hincapié', 'Lukáš Hrádecký']
      },
      {
        id: 'bvb', name: 'Borussia Dortmund', code: 'BVB', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga', 'ucl'], rating: 86, icon: '🐝', colors: ['#eab308', '#18181b'], form: 'W-L-W',
        stars: ['Serhou Guirassy', 'Julian Brandt', 'Karim Adeyemi', 'Jamie Gittens', 'Donyell Malen', 'Marcel Sabitzer', 'Pascal Groß', 'Emre Can', 'Nico Schlotterbeck', 'Waldemar Anton', 'Gregor Kobel']
      },
      {
        id: 'rbl', name: 'RB Leipzig', code: 'RBL', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga', 'ucl'], rating: 85, icon: '🐂', colors: ['#dc2626', '#1e3a8a'], form: 'W-D-W',
        stars: ['Loïs Openda', 'Benjamin Šeško', 'Xavi Simons', 'Antonio Nusa', 'Christoph Baumgartner', 'Amadou Haidara', 'Castello Lukeba', 'Willi Orbán', 'David Raum', 'Benjamin Henrichs', 'Péter Gulácsi']
      },

      // -----------------------------------------------------------------------
      // SERIE A (ITALY) & UEFA CHAMPIONS LEAGUE
      // -----------------------------------------------------------------------
      {
        id: 'int', name: 'Inter Milan', code: 'INT', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea', 'ucl'], rating: 89, icon: '🐍', colors: ['#1e40af', '#0f172a'], form: 'W-W-D',
        stars: ['Lautaro Martínez', 'Marcus Thuram', 'Nicolò Barella', 'Hakan Çalhanoğlu', 'Henrikh Mkhitaryan', 'Federico Dimarco', 'Denzel Dumfries', 'Alessandro Bastoni', 'Benjamin Pavard', 'Francesco Acerbi', 'Yann Sommer']
      },
      {
        id: 'acm', name: 'AC Milan', code: 'MIL', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea', 'ucl'], rating: 86, icon: '⚫', colors: ['#991b1b', '#18181b'], form: 'W-L-W',
        stars: ['Rafael Leão', 'Christian Pulisic', 'Álvaro Morata', 'Tammy Abraham', 'Tijjani Reijnders', 'Youssouf Fofana', 'Theo Hernández', 'Fikayo Tomori', 'Matteo Gabbia', 'Emerson Royal', 'Mike Maignan']
      },
      {
        id: 'juv', name: 'Juventus', code: 'JUV', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea', 'ucl'], rating: 86, icon: '🦓', colors: ['#18181b', '#52525b'], form: 'D-W-W',
        stars: ['Dušan Vlahović', 'Kenan Yıldız', 'Francisco Conceição', 'Teun Koopmeiners', 'Khéphren Thuram', 'Manuel Locatelli', 'Andrea Cambiaso', 'Gleison Bremer', 'Federico Gatti', 'Pierre Kalulu', 'Michele Di Gregorio']
      },
      {
        id: 'nap', name: 'SSC Napoli', code: 'NAP', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 87, icon: '🩵', colors: ['#0284c7', '#0369a1'], form: 'W-W-W',
        stars: ['Romelu Lukaku', 'Khvicha Kvaratskhelia', 'Matteo Politano', 'Scott McTominay', 'André-Frank Zambo Anguissa', 'Stanislav Lobotka', 'Giovanni Di Lorenzo', 'Alessandro Buongiorno', 'Amir Rrahmani', 'Mathías Olivera', 'Alex Meret']
      },

      // -----------------------------------------------------------------------
      // LIGUE 1 (FRANCE) & UEFA CHAMPIONS LEAGUE
      // -----------------------------------------------------------------------
      {
        id: 'psg', name: 'Paris Saint-Germain', code: 'PSG', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1', 'ucl'], rating: 88, icon: '🗼', colors: ['#1e3a8a', '#dc2626'], form: 'W-W-D',
        stars: ['Ousmane Dembélé', 'Bradley Barcola', 'Gonçalo Ramos', 'Lee Kang-in', 'João Neves', 'Vitinha', 'Warren Zaïre-Emery', 'Achraf Hakimi', 'Nuno Mendes', 'Marquinhos', 'Gianluigi Donnarumma']
      },
      {
        id: 'om', name: 'Olympique Marseille', code: 'OM', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 84, icon: '⚓', colors: ['#0284c7', '#1e3a8a'], form: 'W-D-W',
        stars: ['Mason Greenwood', 'Elye Wahi', 'Luis Henrique', 'Adrien Rabiot', 'Pierre-Emile Højbjerg', 'Amine Harit', 'Geoffrey Kondogbia', 'Leonardo Balerdi', 'Pol Lirola', 'Quentin Merlin', 'Gerónimo Rulli']
      },
      {
        id: 'asm', name: 'AS Monaco', code: 'MON', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1', 'ucl'], rating: 84, icon: '🎲', colors: ['#dc2626', '#f8fafc'], form: 'W-W-D',
        stars: ['Folarin Balogun', 'Breel Embolo', 'Maghnes Akliouche', 'Eliesse Ben Seghir', 'Aleksandr Golovin', 'Takumi Minamino', 'Denis Zakaria', 'Lamine Camara', 'Thilo Kehrer', 'Vanderson', 'Radosław Majecki']
      },
      {
        id: 'lil', name: 'LOSC Lille', code: 'LIL', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1', 'ucl'], rating: 83, icon: '🐕', colors: ['#dc2626', '#1e3a8a'], form: 'W-D-W',
        stars: ['Jonathan David', 'Edon Zhegrova', 'Hakon Arnar Haraldsson', 'Osame Sahraoui', 'Angel Gomes', 'Benjamin André', 'Ayyoub Bouaddi', 'Bafodé Diakité', 'Alexsandro Ribeiro', 'Tiago Santos', 'Lucas Chevalier']
      },

      // -----------------------------------------------------------------------
      // AMERICAS CLUBS (MLS & COPA LIBERTADORES)
      // -----------------------------------------------------------------------
      {
        id: 'mia', name: 'Inter Miami CF', code: 'MIA', type: 'clubs', league: 'MLS (Mỹ)',
        tournaments: ['americas_cl'], rating: 83, icon: '🦩', colors: ['#ec4899', '#18181b'], form: 'W-W-D',
        stars: ['Lionel Messi', 'Luis Suárez', 'Diego Gómez', 'Matías Rojas', 'Sergio Busquets', 'Federico Redondo', 'Jordi Alba', 'Marcelo Weigandt', 'Tomás Avilés', 'Hector David Martínez', 'Drake Callender']
      },
      {
        id: 'lag', name: 'LA Galaxy', code: 'LAG', type: 'clubs', league: 'MLS (Mỹ)',
        tournaments: ['americas_cl'], rating: 81, icon: '🌟', colors: ['#1e3a8a', '#eab308'], form: 'W-W-L',
        stars: ['Riqui Puig', 'Marco Reus', 'Gabriel Pec', 'Joseph Paintsil', 'Dejan Joveljić', 'Gastón Brugman', 'Mark Delgado', 'Maya Yoshida', 'Miki Yamane', 'Julian Aude', 'John McCarthy']
      },
      {
        id: 'fla', name: 'CR Flamengo', code: 'FLA', type: 'clubs', league: 'Copa Libertadores',
        tournaments: ['americas_cl'], rating: 83, icon: '🦅', colors: ['#b91c1c', '#18181b'], form: 'W-D-W',
        stars: ['Pedro', 'Giorgian de Arrascaeta', 'Bruno Henrique', 'Gerson', 'Nicolás de la Cruz', 'Carlos Alcaraz', 'Gonzalo Plata', 'Alex Sandro', 'Léo Ortiz', 'Fabrício Bruno', 'Agustín Rossi']
      },
      {
        id: 'riv', name: 'River Plate', code: 'RIV', type: 'clubs', league: 'Copa Libertadores',
        tournaments: ['americas_cl'], rating: 82, icon: '⚪', colors: ['#dc2626', '#18181b'], form: 'W-D-W',
        stars: ['Miguel Borja', 'Facundo Colidio', 'Claudio Echeverri', 'Franco Mastantuono', 'Matías Kranevitter', 'Santiago Simón', 'Germán Pezzella', 'Paulo Díaz', 'Marcos Acuña', 'Fabricio Bustos', 'Franco Armani']
      },

      // -----------------------------------------------------------------------
      // NATIONAL TEAMS (ASIAN CUP, EURO, WORLD CUP & COPA AMERICA)
      // -----------------------------------------------------------------------
      {
        id: 'vie', name: 'ĐT Việt Nam', code: 'VIE', type: 'nations', league: 'AFC Asian Cup / ASEAN',
        tournaments: ['asean_cup', 'asian_cup', 'world_cup'], rating: 79, icon: '🇻🇳', colors: ['#dc2626', '#eab308'], form: 'W-W-D',
        stars: ['Nguyễn Xuân Son', 'Nguyễn Tiến Linh', 'Nguyễn Quang Hải', 'Nguyễn Hoàng Đức', 'Phạm Tuấn Hải', 'Nguyễn Văn Toàn', 'Doãn Ngọc Tân', 'Vũ Văn Thanh', 'Bùi Hoàng Việt Anh', 'Đỗ Duy Mạnh', 'Nguyễn Filip']
      },
      {
        id: 'tha', name: 'ĐT Thái Lan', code: 'THA', type: 'nations', league: 'AFC Asian Cup / ASEAN',
        tournaments: ['asean_cup', 'asian_cup', 'world_cup'], rating: 78, icon: '🇹🇭', colors: ['#1e3a8a', '#dc2626'], form: 'W-D-W',
        stars: ['Suphanat Mueanta', 'Supachai Chaided', 'Chanathip Songkrasin', 'Supachok Sarachat', 'Ekanit Panya', 'Weerathep Pomphan', 'Peeradon Chamratsamee', 'Nicholas Mickelson', 'Jonathan Khemdee', 'Pansa Hemviboon', 'Patiwat Khammai']
      },
      {
        id: 'idn', name: 'ĐT Indonesia', code: 'IDN', type: 'nations', league: 'AFC Asian Cup / ASEAN',
        tournaments: ['asean_cup', 'asian_cup', 'world_cup'], rating: 78, icon: '🇮🇩', colors: ['#dc2626', '#991b1b'], form: 'W-D-W',
        stars: ['Rafael Struick', 'Ragnar Oratmangoen', 'Marselino Ferdinan', 'Thom Haye', 'Ivar Jenner', 'Calvin Verdonk', 'Jay Idzes', 'Mees Hilgers', 'Kevin Diks', 'Rizky Ridho', 'Maarten Paes']
      },
      {
        id: 'jpn', name: 'ĐT Nhật Bản', code: 'JPN', type: 'nations', league: 'AFC Asian Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 85, icon: '🇯🇵', colors: ['#1e3a8a', '#3b82f6'], form: 'W-W-W',
        stars: ['Kaoru Mitoma', 'Takefusa Kubo', 'Takumi Minamino', 'Ayase Ueda', 'Ritsu Dōan', 'Junya Ito', 'Wataru Endo', 'Hidemasa Morita', 'Ko Itakura', 'Takehiro Tomiyasu', 'Zion Suzuki']
      },
      {
        id: 'kor', name: 'ĐT Hàn Quốc', code: 'KOR', type: 'nations', league: 'AFC Asian Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 84, icon: '🇰🇷', colors: ['#dc2626', '#1e3a8a'], form: 'W-W-D',
        stars: ['Son Heung-min', 'Lee Kang-in', 'Hwang Hee-chan', 'Oh Hyeon-gyu', 'Lee Jae-sung', 'Hwang In-beom', 'Park Yong-woo', 'Kim Min-jae', 'Seol Young-woo', 'Cho Yu-min', 'Jo Hyeon-woo']
      },
      {
        id: 'ksa', name: 'ĐT Ả Rập Xê Út', code: 'KSA', type: 'nations', league: 'AFC Asian Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 81, icon: '🇸🇦', colors: ['#15803d', '#065f46'], form: 'W-D-L',
        stars: ['Salem Al-Dawsari', 'Feras Al-Buraikan', 'Saleh Al-Shehri', 'Mohamed Kanno', 'Abdulelah Al-Malki', 'Musab Al-Juwayr', 'Saud Abdulhamid', 'Hassan Al-Tambakti', 'Ali Al-Bulaihi', 'Sultan Al-Ghannam', 'Ahmed Al-Kassar']
      },
      {
        id: 'arg', name: 'ĐT Argentina', code: 'ARG', type: 'nations', league: 'FIFA World Cup / CONMEBOL',
        tournaments: ['world_cup'], rating: 92, icon: '🇦🇷', colors: ['#0284c7', '#38bdf8'], form: 'W-W-W',
        stars: ['Lionel Messi', 'Lautaro Martínez', 'Julián Álvarez', 'Rodrigo De Paul', 'Enzo Fernández', 'Alexis Mac Allister', 'Giovani Lo Celso', 'Cristian Romero', 'Lisandro Martínez', 'Nahuel Molina', 'Emiliano Martínez']
      },
      {
        id: 'bra', name: 'ĐT Brazil', code: 'BRA', type: 'nations', league: 'FIFA World Cup / CONMEBOL',
        tournaments: ['world_cup'], rating: 89, icon: '🇧🇷', colors: ['#eab308', '#15803d'], form: 'W-D-W',
        stars: ['Vinícius Júnior', 'Rodrygo Goes', 'Raphinha', 'Endrick', 'Savinho', 'Bruno Guimarães', 'Lucas Paquetá', 'Gabriel Magalhães', 'Marquinhos', 'Danilo', 'Ederson']
      },
      {
        id: 'col', name: 'ĐT Colombia', code: 'COL', type: 'nations', league: 'FIFA World Cup / CONMEBOL',
        tournaments: ['world_cup'], rating: 86, icon: '🇨🇴', colors: ['#eab308', '#1d4ed8'], form: 'W-W-D',
        stars: ['Luis Díaz', 'James Rodríguez', 'Jhon Durán', 'Jhon Córdoba', 'Jhon Arias', 'Richard Ríos', 'Jefferson Lerma', 'Davinson Sánchez', 'Jhon Lucumí', 'Daniel Muñoz', 'Camilo Vargas']
      },
      {
        id: 'uru', name: 'ĐT Uruguay', code: 'URU', type: 'nations', league: 'FIFA World Cup / CONMEBOL',
        tournaments: ['world_cup'], rating: 86, icon: '🇺🇾', colors: ['#0284c7', '#1e3a8a'], form: 'W-D-D',
        stars: ['Darwin Núñez', 'Federico Valverde', 'Facundo Pellistri', 'Maximiliano Araújo', 'Rodrigo Bentancur', 'Manuel Ugarte', 'Nicolás de la Cruz', 'Ronald Araújo', 'José María Giménez', 'Mathías Olivera', 'Sergio Rochet']
      },
      {
        id: 'esp', name: 'ĐT Tây Ban Nha', code: 'ESP', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 92, icon: '🇪🇸', colors: ['#b91c1c', '#f59e0b'], form: 'W-W-W',
        stars: ['Lamine Yamal', 'Nico Williams', 'Álvaro Morata', 'Dani Olmo', 'Pedri', 'Rodri', 'Fabián Ruiz', 'Dani Carvajal', 'Robin Le Normand', 'Aymeric Laporte', 'Unai Simón']
      },
      {
        id: 'fra', name: 'ĐT Pháp', code: 'FRA', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 91, icon: '🇫🇷', colors: ['#1e3a8a', '#2563eb'], form: 'W-D-W',
        stars: ['Kylian Mbappé', 'Ousmane Dembélé', 'Bradley Barcola', 'Michael Olise', 'Eduardo Camavinga', 'Aurélien Tchouaméni', 'N\'Golo Kanté', 'William Saliba', 'Dayot Upamecano', 'Theo Hernández', 'Mike Maignan']
      },
      {
        id: 'eng', name: 'ĐT Anh', code: 'ENG', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 90, icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', colors: ['#1e3a8a', '#dc2626'], form: 'W-W-D',
        stars: ['Harry Kane', 'Jude Bellingham', 'Bukayo Saka', 'Cole Palmer', 'Phil Foden', 'Declan Rice', 'Kobbie Mainoo', 'Trent Alexander-Arnold', 'John Stones', 'Marc Guéhi', 'Jordan Pickford']
      },
      {
        id: 'ger', name: 'ĐT Đức', code: 'GER', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 89, icon: '🇩🇪', colors: ['#18181b', '#dc2626'], form: 'W-W-D',
        stars: ['Jamal Musiala', 'Florian Wirtz', 'Kai Havertz', 'Niclas Füllkrug', 'Serge Gnabry', 'Joshua Kimmich', 'Robert Andrich', 'Antonio Rüdiger', 'Jonathan Tah', 'Maximilian Mittelstädt', 'Marc-André ter Stegen']
      },
      {
        id: 'por', name: 'ĐT Bồ Đào Nha', code: 'POR', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 89, icon: '🇵🇹', colors: ['#991b1b', '#15803d'], form: 'W-W-W',
        stars: ['Cristiano Ronaldo', 'Rafael Leão', 'Bruno Fernandes', 'Bernardo Silva', 'Pedro Neto', 'Vitinha', 'João Neves', 'João Palhinha', 'Rúben Dias', 'Nuno Mendes', 'Diogo Costa']
      },
      {
        id: 'ned', name: 'ĐT Hà Lan', code: 'NED', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 87, icon: '🇳🇱', colors: ['#ea580c', '#1e3a8a'], form: 'W-D-W',
        stars: ['Cody Gakpo', 'Xavi Simons', 'Joshua Zirkzee', 'Donyell Malen', 'Tijjani Reijnders', 'Ryan Gravenberch', 'Frenkie de Jong', 'Virgil van Dijk', 'Denzel Dumfries', 'Nathan Aké', 'Bart Verbruggen']
      },
      {
        id: 'ita', name: 'ĐT Ý', code: 'ITA', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 87, icon: '🇮🇹', colors: ['#1d4ed8', '#0284c7'], form: 'W-D-W',
        stars: ['Mateo Retegui', 'Moise Kean', 'Nicolò Barella', 'Davide Frattesi', 'Sandro Tonali', 'Federico Dimarco', 'Andrea Cambiaso', 'Alessandro Bastoni', 'Riccardo Calafiori', 'Giovanni Di Lorenzo', 'Gianluigi Donnarumma']
      },
      {
        id: 'cro', name: 'ĐT Croatia', code: 'CRO', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 84, icon: '🇭🇷', colors: ['#dc2626', '#1d4ed8'], form: 'W-D-L',
        stars: ['Luka Modrić', 'Andrej Kramarić', 'Bruno Petković', 'Mateo Kovačić', 'Mario Pašalić', 'Luka Sučić', 'Ivan Perišić', 'Joško Gvardiol', 'Josip Šutalo', 'Duje Ćaleta-Car', 'Dominik Livaković']
      },
      {
        id: 'mar', name: 'ĐT Ma-rốc', code: 'MAR', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 84, icon: '🇲🇦', colors: ['#b91c1c', '#15803d'], form: 'W-W-W',
        stars: ['Brahim Díaz', 'Youssef En-Nesyri', 'Hakim Ziyech', 'Soufiane Rahimi', 'Achraf Hakimi', 'Sofyan Amrabat', 'Azzedine Ounahi', 'Noussair Mazraoui', 'Nayef Aguerd', 'Chadi Riad', 'Yassine Bounou']
      },
      {
        id: 'sen', name: 'ĐT Senegal', code: 'SEN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 82, icon: '🇸🇳', colors: ['#15803d', '#eab308'], form: 'W-D-W',
        stars: ['Sadio Mané', 'Nicolas Jackson', 'Ismaïla Sarr', 'Iliman Ndiaye', 'Habib Diarra', 'Pape Matar Sarr', 'Idrissa Gueye', 'Lamine Camara', 'Kalidou Koulibaly', 'Moussa Niakhaté', 'Édouard Mendy']
      },
      {
        id: 'usa', name: 'ĐT Mỹ', code: 'USA', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 82, icon: '🇺🇸', colors: ['#1e3a8a', '#dc2626'], form: 'W-D-L',
        stars: ['Christian Pulisic', 'Folarin Balogun', 'Timothy Weah', 'Ricardo Pepi', 'Weston McKennie', 'Yunus Musah', 'Giovanni Reyna', 'Antonee Robinson', 'Chris Richards', 'Tim Ream', 'Matt Turner']
      }      ,
      // =======================================================================
      // FULL PREMIER LEAGUE (20/20 CLUBS)
      // =======================================================================
      {
        id: 'avl', name: 'Aston Villa', code: 'AVL', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl', 'ucl'], rating: 85, icon: '🦁', colors: ['#7c2d12', '#38bdf8'], form: 'W-W-D',
        stars: ['Ollie Watkins', 'Morgan Rogers', 'Jhon Durán', 'Leon Bailey', 'John McGinn', 'Youri Tielemans', 'Amadou Onana', 'Pau Torres', 'Ezri Konsa', 'Lucas Digne', 'Emiliano Martínez']
      },
      {
        id: 'new', name: 'Newcastle United', code: 'NEW', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 85, icon: '⚫', colors: ['#18181b', '#38bdf8'], form: 'W-D-W',
        stars: ['Alexander Isak', 'Anthony Gordon', 'Harvey Barnes', 'Bruno Guimarães', 'Sandro Tonali', 'Joelinton', 'fabian Schär', 'Sven Botman', 'Tino Livramento', 'Lewis Hall', 'Nick Pope']
      },
      {
        id: 'bha', name: 'Brighton & Hove Albion', code: 'BHA', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 82, icon: '🕊️', colors: ['#0284c7', '#f8fafc'], form: 'W-D-W',
        stars: ['Kaoru Mitoma', 'Danny Welbeck', 'João Pedro', 'Yankuba Minteh', 'Georginio Rutter', 'Carlos Baleba', 'Yasin Ayari', 'Lewis Dunk', 'Jan Paul van Hecke', 'Pervis Estupiñán', 'Bart Verbruggen']
      },
      {
        id: 'whu', name: 'West Ham United', code: 'WHU', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 81, icon: '⚒️', colors: ['#7f1d1d', '#38bdf8'], form: 'D-W-L',
        stars: ['Jarrod Bowen', 'Mohammed Kudus', 'Lucas Paquetá', 'Crysencio Summerville', 'Michail Antonio', 'Tomáš Souček', 'Edson Álvarez', 'Max Kilman', 'Jean-Clair Todibo', 'Aaron Wan-Bissaka', 'Alphonse Areola']
      },
      {
        id: 'ful', name: 'Fulham FC', code: 'FUL', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 80, icon: '⚪', colors: ['#18181b', '#dc2626'], form: 'W-D-D',
        stars: ['Raúl Jiménez', 'Alex Iwobi', 'Emile Smith Rowe', 'Adama Traoré', 'Reiss Nelson', 'Andreas Pereira', 'Sander Berge', 'Calvin Bassey', 'Joachim Andersen', 'Antonee Robinson', 'Bernd Leno']
      },
      {
        id: 'bre', name: 'Brentford FC', code: 'BRE', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 80, icon: '🐝', colors: ['#dc2626', '#18181b'], form: 'W-L-W',
        stars: ['Bryan Mbeumo', 'Yoane Wissa', 'Kevin Schade', 'Mikkel Damsgaard', 'Christian Nørgaard', 'Vitaly Janelt', 'Mathias Jensen', 'Nathan Collins', 'Ethan Pinnock', 'Kristoffer Ajer', 'Mark Flekken']
      },
      {
        id: 'cry', name: 'Crystal Palace', code: 'CRY', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 79, icon: '🦅', colors: ['#1d4ed8', '#dc2626'], form: 'D-W-L',
        stars: ['Eberechi Eze', 'Jean-Philippe Mateta', 'Ismaïla Sarr', 'Eddie Nketiah', 'Daichi Kamada', 'Adam Wharton', 'Jefferson Lerma', 'Marc Guéhi', 'Maxence Lacroix', 'Daniel Muñoz', 'Dean Henderson']
      },
      {
        id: 'bou', name: 'AFC Bournemouth', code: 'BOU', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 79, icon: '🍒', colors: ['#b91c1c', '#18181b'], form: 'W-D-L',
        stars: ['Evanilson', 'Antoine Semenyo', 'Justin Kluivert', 'Marcus Tavernier', 'Luis Sinisterra', 'Ryan Christie', 'Lewis Cook', 'Illia Zabarnyi', 'Marcos Senesi', 'Milos Kerkez', 'Kepa Arrizabalaga']
      },
      {
        id: 'wol', name: 'Wolverhampton Wanderers', code: 'WOL', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 78, icon: '🐺', colors: ['#eab308', '#18181b'], form: 'L-D-W',
        stars: ['Matheus Cunha', 'Jørgen Strand Larsen', 'Hwang Hee-chan', 'Gonçalo Guedes', 'João Gomes', 'Mario Lemina', 'André', 'Rayan Aït-Nouri', 'Nélson Semedo', 'Toti Gomes', 'José Sá']
      },
      {
        id: 'eve', name: 'Everton FC', code: 'EVE', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 78, icon: '🍬', colors: ['#1e40af', '#2563eb'], form: 'D-D-W',
        stars: ['Dominic Calvert-Lewin', 'Iliman Ndiaye', 'Dwight McNeil', 'Jack Harrison', 'Abdoulaye Doucouré', 'Idrissa Gueye', 'Orel Mangala', 'Jarrad Branthwaite', 'James Tarkowski', 'Vitaliy Mykolenko', 'Jordan Pickford']
      },
      {
        id: 'nfo', name: 'Nottingham Forest', code: 'NFO', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 81, icon: '🌲', colors: ['#dc2626', '#991b1b'], form: 'W-W-D',
        stars: ['Chris Wood', 'Callum Hudson-Odoi', 'Anthony Elanga', 'Morgan Gibbs-White', 'Elliot Anderson', 'Ryan Yates', 'Nicolás Domínguez', 'Murillo', 'Nikola Milenković', 'Ola Aina', 'Matz Sels']
      },
      {
        id: 'lei', name: 'Leicester City', code: 'LEI', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 77, icon: '🦊', colors: ['#1d4ed8', '#eab308'], form: 'D-L-W',
        stars: ['Jamie Vardy', 'Facundo Buonanotte', 'Stephy Mavididi', 'Abdul Fatawu', 'Wilfred Ndidi', 'Harry Winks', 'Bilal El Khannouss', 'Wout Faes', 'Caleb Okoli', 'James Justin', 'Mads Hermansen']
      },
      {
        id: 'ips', name: 'Ipswich Town', code: 'IPS', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 76, icon: '🚜', colors: ['#1d4ed8', '#dc2626'], form: 'D-L-D',
        stars: ['Liam Delap', 'Omari Hutchinson', 'Sammie Szmodics', 'Jack Clarke', 'Sam Morsy', 'Kalvin Phillips', 'Jens Cajuste', 'Leif Davis', 'Dara O\'Shea', 'Jacob Greaves', 'Arijanet Muric']
      },
      {
        id: 'sou', name: 'Southampton FC', code: 'SOU', type: 'clubs', league: 'Premier League (Anh)',
        tournaments: ['epl'], rating: 76, icon: '😇', colors: ['#dc2626', '#18181b'], form: 'L-D-W',
        stars: ['Cameron Archer', 'Adam Armstrong', 'Tyler Dibling', 'Mateus Fernandes', 'Flynn Downes', 'Joe Aribo', 'Kyle Walker-Peters', 'Taylor Harwood-Bellis', 'Jan Bednarek', 'Yukinari Sugawara', 'Aaron Ramsdale']
      },

      // =======================================================================
      // FULL LA LIGA (20/20 CLUBS)
      // =======================================================================
      {
        id: 'vil', name: 'Villarreal CF', code: 'VIL', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 83, icon: '🟡', colors: ['#eab308', '#1e3a8a'], form: 'W-W-D',
        stars: ['Ayoze Pérez', 'Thierno Barry', 'Álex Baena', 'Yeremy Pino', 'Ilias Akhomach', 'Dani Parejo', 'Santi Comesaña', 'Logan Costa', 'Raúl Albiol', 'Sergi Cardona', 'Diego Conde']
      },
      {
        id: 'rso', name: 'Real Sociedad', code: 'RSO', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 83, icon: '🔵', colors: ['#1d4ed8', '#0284c7'], form: 'W-D-W',
        stars: ['Takefusa Kubo', 'Mikel Oyarzabal', 'Orri Óskarsson', 'Sheraldo Becker', 'Sergio Gómez', 'Martín Zubimendi', 'Brais Méndez', 'Luka Sučić', 'Nayef Aguerd', 'Igor Zubeldia', 'Álex Remiro']
      },
      {
        id: 'bet', name: 'Real Betis', code: 'BET', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 82, icon: '🟢', colors: ['#15803d', '#065f46'], form: 'W-D-L',
        stars: ['Giovani Lo Celso', 'Vitor Roque', 'Abde Ezzalzouli', 'Pablo Fornals', 'Chimy Ávila', 'Johnny Cardoso', 'Marc Roca', 'Diego Llorente', 'Natan', 'Héctor Bellerín', 'Rui Silva']
      },
      {
        id: 'gir', name: 'Girona FC', code: 'GIR', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga', 'ucl'], rating: 82, icon: '🔴', colors: ['#dc2626', '#991b1b'], form: 'W-L-W',
        stars: ['Bryan Gil', 'Arnaut Danjuma', 'Abel Ruiz', 'Viktor Tsygankov', 'Yáser Asprilla', 'Iván Martín', 'Yangel Herrera', 'Miguel Gutiérrez', 'Daley Blind', 'David López', 'Paulo Gazzaniga']
      },
      {
        id: 'sev', name: 'Sevilla FC', code: 'SEV', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 80, icon: '⚪', colors: ['#dc2626', '#991b1b'], form: 'D-W-L',
        stars: ['Dodi Lukébakio', 'Isaac Romero', 'Chidera Ejuke', 'Peque Fernández', 'Saúl Ñíguez', 'Albert Sambi Lokonga', 'Nemanja Gudelj', 'Loïc Badé', 'Marcão', 'José Ángel Carmona', 'Ørjan Nyland']
      },
      {
        id: 'val', name: 'Valencia CF', code: 'VAL', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 79, icon: '🦇', colors: ['#ea580c', '#18181b'], form: 'D-L-W',
        stars: ['Hugo Duro', 'Diego López', 'Luis Rioja', 'Pepelu', 'Javi Guerra', 'André Almeida', 'Cristhian Mosquera', 'César Tárrega', 'Thierry Correia', 'José Gayà', 'Giorgi Mamardashvili']
      },
      {
        id: 'cel', name: 'Celta Vigo', code: 'CEL', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 80, icon: '🩵', colors: ['#38bdf8', '#0284c7'], form: 'W-L-W',
        stars: ['Iago Aspas', 'Borja Iglesias', 'Williot Swedberg', 'Tasos Douvikas', 'Hugo Álvarez', 'Fran Beltrán', 'Ilaix Moriba', 'Óscar Mingueza', 'Carl Starfelt', 'Marcos Alonso', 'Vicente Guaita']
      },
      {
        id: 'osa', name: 'CA Osasuna', code: 'OSA', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 79, icon: '🔴', colors: ['#991b1b', '#1e3a8a'], form: 'W-D-W',
        stars: ['Ante Budimir', 'Bryan Zaragoza', 'Rubén García', 'Aimar Oroz', 'Lucas Torró', 'Jon Moncayola', 'Enzo Boyomo', 'Alejandro Catena', 'Jesús Areso', 'Abel Bretones', 'Sergio Herrera']
      },
      {
        id: 'mal', name: 'RCD Mallorca', code: 'MLL', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 79, icon: '👹', colors: ['#dc2626', '#18181b'], form: 'W-D-L',
        stars: ['Vedat Muriqi', 'Cyle Larin', 'Dani Rodríguez', 'Robert Navarro', 'Sergi Darder', 'Samú Costa', 'Manu Morlanes', 'Antonio Raíllo', 'Martin Valjent', 'Johan Mojica', 'Dominik Greif']
      },
      {
        id: 'ray', name: 'Rayo Vallecano', code: 'RAY', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 78, icon: '⚡', colors: ['#dc2626', '#334155'], form: 'D-W-D',
        stars: ['James Rodríguez', 'Isi Palazón', 'Jorge de Frutos', 'Sergio Camello', 'Álvaro García', 'Óscar Valentín', 'Unai López', 'Florian Lejeune', 'Abdul Mumin', 'Andrei Rațiu', 'Augusto Batalla']
      },
      {
        id: 'get', name: 'Getafe CF', code: 'GET', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 77, icon: '🔵', colors: ['#1d4ed8', '#1e40af'], form: 'D-D-W',
        stars: ['Borja Mayoral', 'Bertuğ Yıldırım', 'Carles Pérez', 'Chrisantus Uche', 'Luis Milla', 'Mauro Arambarri', 'Djené Dakonam', 'Omar Alderete', 'Diego Rico', 'Juan Iglesias', 'David Soria']
      },
      {
        id: 'ala', name: 'Deportivo Alavés', code: 'ALA', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 77, icon: '🔵', colors: ['#1e3a8a', '#2563eb'], form: 'W-L-L',
        stars: ['Toni Martínez', 'Kike García', 'Carlos Vicente', 'Stoichkov', 'Jon Guridi', 'Antonio Blanco', 'Ander Guevara', 'Abdel Abqar', 'Manu Sánchez', 'Nahuel Tenaglia', 'Antonio Sivera']
      },
      {
        id: 'lpa', name: 'UD Las Palmas', code: 'LPA', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 76, icon: '🌴', colors: ['#eab308', '#0284c7'], form: 'L-W-D',
        stars: ['Alberto Moleiro', 'Fábio Silva', 'Oli McBurnie', 'Sandro Ramírez', 'Kirian Rodríguez', 'Dário Essugo', 'Javi Muñoz', 'Mika Mármol', 'Scott McKenna', 'Álex Suárez', 'Jasper Cillessen']
      },
      {
        id: 'leg', name: 'CD Leganés', code: 'LEG', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 76, icon: '🥒', colors: ['#0284c7', '#16a34a'], form: 'D-D-L',
        stars: ['Sébastien Haller', 'Juan Cruz', 'Miguel de la Fuente', 'Munir El Haddadi', 'Óscar Rodríguez', 'Renato Tapia', 'Yvan Neyou', 'Sergio González', 'Matija Nastasić', 'Valentin Rosier', 'Marko Dmitrović']
      },
      {
        id: 'esp_cl', name: 'RCD Espanyol', code: 'RCDE', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 76, icon: '🦜', colors: ['#0284c7', '#1d4ed8'], form: 'W-L-D',
        stars: ['Javi Puado', 'Alejo Véliz', 'Walid Cheddira', 'Jofre Carreras', 'Alex Král', 'Pol Lozano', 'Álvaro Aguado', 'Marash Kumbulla', 'Leandro Cabrera', 'Omar El Hilali', 'Joan García']
      },
      {
        id: 'vld', name: 'Real Valladolid', code: 'VLL', type: 'clubs', league: 'La Liga (Tây Ban Nha)',
        tournaments: ['laliga'], rating: 75, icon: '🟣', colors: ['#6d28d9', '#4c1d95'], form: 'L-D-W',
        stars: ['Raúl Moro', 'Juanmi Latasa', 'Mamadou Sylla', 'Amath Ndiaye', 'Kike Pérez', 'Stanko Jurić', 'Selim Amallah', 'Enzo Boyomo', 'Eray Cömert', 'Lucas Rosa', 'Karl Hein']
      },

      // =======================================================================
      // FULL SERIE A (20/20 CLUBS)
      // =======================================================================
      {
        id: 'ata', name: 'Atalanta BC', code: 'ATA', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea', 'ucl'], rating: 86, icon: '⚡', colors: ['#1e3a8a', '#18181b'], form: 'W-W-W',
        stars: ['Ademola Lookman', 'Mateo Retegui', 'Charles De Ketelaere', 'Lazar Samardžić', 'Éderson', 'Marten de Roon', 'Mario Pašalić', 'Isak Hien', 'Sead Kolašinac', 'Raoul Bellanova', 'Marco Carnesecchi']
      },
      {
        id: 'rom', name: 'AS Roma', code: 'ROM', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 84, icon: '🐺', colors: ['#991b1b', '#eab308'], form: 'W-D-L',
        stars: ['Paulo Dybala', 'Artem Dovbyk', 'Matías Soulé', 'Lorenzo Pellegrini', 'Manu Koné', 'Bryan Cristante', 'Leandro Paredes', 'Evan Ndicka', 'Gianluca Mancini', 'Angeliño', 'Mile Svilar']
      },
      {
        id: 'laz', name: 'SS Lazio', code: 'LAZ', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 84, icon: '🦅', colors: ['#38bdf8', '#0284c7'], form: 'W-W-D',
        stars: ['Valentín Castellanos', 'Mattia Zaccagni', 'Boulaye Dia', 'Pedro Rodríguez', 'Gustav Isaksen', 'Mattéo Guendouzi', 'Nicolò Rovella', 'Alessio Romagnoli', 'Mario Gila', 'Nuno Tavares', 'Ivan Provedel']
      },
      {
        id: 'fio', name: 'ACF Fiorentina', code: 'FIO', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 83, icon: '⚜️', colors: ['#6d28d9', '#4c1d95'], form: 'W-W-W',
        stars: ['Moise Kean', 'Albert Guðmundsson', 'Andrea Colpani', 'Lucas Beltrán', 'Yacine Adli', 'Edoardo Bove', 'Danilo Cataldi', 'Robin Gosens', 'Dodô', 'Pietro Comuzzo', 'David de Gea']
      },
      {
        id: 'bol', name: 'Bologna FC', code: 'BOL', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea', 'ucl'], rating: 82, icon: '🔴', colors: ['#991b1b', '#1e3a8a'], form: 'D-W-D',
        stars: ['Riccardo Orsolini', 'Santiago Castro', 'Dan Ndoye', 'Jens Odgaard', 'Remo Freuler', 'helvetia Aebischer', 'Giovanni Fabbian', 'Sam Beukema', 'Jhon Lucumí', 'Juan Miranda', 'Łukasz Skorupski']
      },
      {
        id: 'tor', name: 'Torino FC', code: 'TOR', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 80, icon: '🐂', colors: ['#7f1d1d', '#991b1b'], form: 'W-L-D',
        stars: ['Duván Zapata', 'Ché Adams', 'Antonio Sanabria', 'Nikola Vlašić', 'Samuele Ricci', 'Ivan Ilić', 'Valentino Lazaro', 'Saúl Coco', 'Guillermo Maripán', 'Borna Sosa', 'Vanja Milinković-Savić']
      },
      {
        id: 'udi', name: 'Udinese Calcio', code: 'UDI', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 79, icon: '🦓', colors: ['#18181b', '#64748b'], form: 'W-D-L',
        stars: ['Lorenzo Lucca', 'Florian Thauvin', 'Keinan Davis', 'Brenner', 'Jesper Karlström', 'Sandi Lovrić', 'Martín Payero', 'Jaka Bijol', 'Lautaro Giannetti', 'Hassane Kamara', 'Maduka Okoye']
      },
      {
        id: 'gen', name: 'Genoa CFC', code: 'GEN', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 77, icon: '🐉', colors: ['#991b1b', '#1e3a8a'], form: 'D-L-W',
        stars: ['Andrea Pinamonti', 'Vitinha', 'Junior Messias', 'Morten Frendrup', 'Milan Badelj', 'Morten Thorsby', 'Ruslan Malinovskyi', 'Koni De Winter', 'Johan Vásquez', 'Aarón Martín', 'Pierluigi Gollini']
      },
      {
        id: 'ver', name: 'Hellas Verona', code: 'VER', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 77, icon: '🐕', colors: ['#1e3a8a', '#eab308'], form: 'W-L-L',
        stars: ['Casper Tengstedt', 'Daniel Mosquera', 'Darko Lazović', 'Tomáš Suslov', 'Reda Belahyane', 'Ondrej Duda', 'Jackson Tchatchoua', 'Diego Coppola', 'Giangiacomo Magnani', 'Domagoj Bradarić', 'Lorenzo Montipò']
      },
      {
        id: 'emp', name: 'Empoli FC', code: 'EMP', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 77, icon: '🔵', colors: ['#0284c7', '#1d4ed8'], form: 'D-W-D',
        stars: ['Lorenzo Colombo', 'Sebastiano Esposito', 'Emmanuel Gyasi', 'Jacopo Fazzini', 'Faustino Anjorin', 'Alberto Grassi', 'Youssef Maleh', 'Ardian Ismajli', 'Mattia Viti', 'Giuseppe Pezzella', 'Devis Vásquez']
      },
      {
        id: 'com', name: 'Como 1907', code: 'COM', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 77, icon: '🌊', colors: ['#1d4ed8', '#0284c7'], form: 'W-D-L',
        stars: ['Patrick Cutrone', 'Nico Paz', 'Andrea Belotti', 'Gabriel Strefezza', 'Alieu Fadera', 'Sergi Roberto', 'Máximo Perrone', 'Alberto Dossena', 'Marc-Oliver Kempf', 'Alberto Moreno', 'Emil Audero']
      },
      {
        id: 'par', name: 'Parma Calcio', code: 'PAR', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 77, icon: '💛', colors: ['#eab308', '#1e3a8a'], form: 'D-D-L',
        stars: ['Dennis Man', 'Ange-Yoan Bonny', 'Valentin Mihăilă', 'Matteo Cancellieri', 'Adrián Bernabé', 'Simon Sohm', 'Hernani', 'Botond Balogh', 'Enrico Del Prato', 'Emanuele Valeri', 'Zion Suzuki']
      },
      {
        id: 'cag', name: 'Cagliari Calcio', code: 'CAG', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 76, icon: '🏝️', colors: ['#991b1b', '#1e3a8a'], form: 'D-W-L',
        stars: ['Roberto Piccoli', 'Zito Luvumbo', 'Gianluca Gaetano', 'Nicolas Viola', 'Razvan Marin', 'Michel Adopo', 'Alessandro Deiola', 'Yerry Mina', 'Sebastiano Luperto', 'Tommaso Augello', 'Simone Scuffet']
      },
      {
        id: 'monz', name: 'AC Monza', code: 'MONZ', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 76, icon: '🏎️', colors: ['#dc2626', '#991b1b'], form: 'D-L-W',
        stars: ['Milan Đurić', 'Daniel Maldini', 'Dany Mota', 'Gianluca Caprari', 'Matteo Pessina', 'Warren Bondo', 'Georgios Kyriakopoulos', 'Pablo Marí', 'Armando Izzo', 'Andrea Carboni', 'Stefano Turati']
      },
      {
        id: 'lec', name: 'US Lecce', code: 'LEC', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 75, icon: '🌞', colors: ['#eab308', '#dc2626'], form: 'L-W-D',
        stars: ['Nikola Krstović', 'Patrick Dorgu', 'Ante Rebić', 'Lameck Banda', 'Ylber Ramadani', 'Lassana Coulibaly', 'Hamza Rafia', 'Federico Baschirotto', 'Kialonda Gaspar', 'Antonino Gallo', 'Wladimiro Falcone']
      },
      {
        id: 'ven', name: 'Venezia FC', code: 'VEN', type: 'clubs', league: 'Serie A (Ý)',
        tournaments: ['seriea'], rating: 74, icon: '🦁', colors: ['#ea580c', '#15803d'], form: 'L-W-L',
        stars: ['Joel Pohjanpalo', 'Gaetano Oristanio', 'Gianluca Busio', 'Hans Nicolussi Caviglia', 'Alfred Duncan', 'Mikael Egill Ellertsson', 'Jay Idzes', 'Michael Svoboda', 'Francesco Zampano', 'Ridgeciano Haps', 'Jesse Joronen']
      },

      // =======================================================================
      // FULL BUNDESLIGA (18/18 CLUBS)
      // =======================================================================
      {
        id: 'vfb', name: 'VfB Stuttgart', code: 'VFB', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga', 'ucl'], rating: 84, icon: '🦌', colors: ['#dc2626', '#991b1b'], form: 'W-D-W',
        stars: ['Ermedin Demirović', 'Deniz Undav', 'Enzo Millot', 'Jamie Leweling', 'Chris Führich', 'Angelo Stiller', 'Atakan Karazor', 'Jeff Chabot', 'Anthony Rouault', 'Maximilian Mittelstädt', 'Alexander Nübel']
      },
      {
        id: 'sge', name: 'Eintracht Frankfurt', code: 'SGE', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 84, icon: '🦅', colors: ['#dc2626', '#18181b'], form: 'W-W-D',
        stars: ['Omar Marmoush', 'Hugo Ekitiké', 'Mario Götze', 'Farès Chaïbi', 'Ansgar Knauff', 'Hugo Larsson', 'Ellyes Skhiri', 'Robin Koch', 'Arthur Theate', 'Rasmus Kristensen', 'Kevin Trapp']
      },
      {
        id: 'scf', name: 'SC Freiburg', code: 'SCF', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 81, icon: '🌲', colors: ['#dc2626', '#18181b'], form: 'W-W-L',
        stars: ['Vincenzo Grifo', 'Ritsu Dōan', 'Junior Adamu', 'Lucas Höler', 'Patrick Osterhage', 'Maximilian Eggestein', 'Christian Günter', 'Matthias Ginter', 'Philipp Lienhart', 'Lukas Kübler', 'Noah Atubolu']
      },
      {
        id: 'svw', name: 'Werder Bremen', code: 'SVW', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 79, icon: '🟢', colors: ['#15803d', '#065f46'], form: 'W-D-L',
        stars: ['Marvin Ducksch', 'Justin Njinmah', 'Mitchell Weiser', 'Romano Schmid', 'Jens Stage', 'Senne Lynen', 'Leonardo Bittencourt', 'Marco Friedl', 'Niklas Stark', 'Felix Agu', 'Michael Zetterer']
      },
      {
        id: 'tsg', name: 'TSG Hoffenheim', code: 'TSG', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 79, icon: '🔵', colors: ['#0284c7', '#1d4ed8'], form: 'D-W-L',
        stars: ['Andrej Kramarić', 'Adam Hložek', 'Marius Bülter', 'Haris Tabaković', 'Anton Stach', 'Tom Bischof', 'Florian Grillitsch', 'Kevin Akpoguma', 'Stanley Nsoki', 'Pavel Kadeřábek', 'Oliver Baumann']
      },
      {
        id: 'fcu', name: 'Union Berlin', code: 'FCU', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 79, icon: '🔨', colors: ['#dc2626', '#eab308'], form: 'W-D-D',
        stars: ['Benedict Hollerbach', 'Yorbe Vertessen', 'Jordan Siebatcheu', 'Jeong Woo-yeong', 'Rani Khedira', 'András Schäfer', 'Diogo Leite', 'Danilho Doekhi', 'Kevin Vogt', 'Christopher Trimmel', 'Frederik Rønnow']
      },
      {
        id: 'bmg', name: 'Borussia Mönchengladbach', code: 'BMG', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 79, icon: '🐎', colors: ['#15803d', '#18181b'], form: 'W-L-D',
        stars: ['Tim Kleindienst', 'Alassane Pléa', 'Franck Honorat', 'Robin Hack', 'Kevin Stöger', 'Julian Weigl', 'Rocco Reitz', 'Ko Itakura', 'Nico Elvedi', 'Joe Scally', 'Moritz Nicolas']
      },
      {
        id: 'wob', name: 'VfL Wolfsburg', code: 'WOB', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 79, icon: '🐺', colors: ['#16a34a', '#15803d'], form: 'D-W-L',
        stars: ['Mohamed Amoura', 'Jonas Wind', 'Tiago Tomás', 'Lovro Majer', 'Maximilian Arnold', 'Mattias Svanberg', 'Ridle Baku', 'Sebastiaan Bornauw', 'Konstantinos Koulierakis', 'Joakim Mæhle', 'Kamil Grabara']
      },
      {
        id: 'm05', name: 'Mainz 05', code: 'M05', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 78, icon: '🎭', colors: ['#dc2626', '#991b1b'], form: 'D-W-D',
        stars: ['Jonathan Burkardt', 'Lee Jae-sung', 'Paul Nebel', 'Armindo Sieb', 'Kaishu Sano', 'Nadiem Amiri', 'Philipp Mwene', 'Dominik Kohr', 'Moritz Jenz', 'Anthony Caci', 'Robin Zentner']
      },
      {
        id: 'fca', name: 'FC Augsburg', code: 'FCA', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 77, icon: '🛡️', colors: ['#dc2626', '#15803d'], form: 'W-L-D',
        stars: ['Phillip Tietz', 'Samuel Essende', 'Alexis Claude-Maurice', 'Ruben Vargas', 'Kristijan Jakić', 'Frank Onyeka', 'Elvis Rexhbeçaj', 'Jeffrey Gouweleeuw', 'Keven Schlotterbeck', 'Dimitrios Giannoulis', 'Nediljko Labrović']
      },
      {
        id: 'fch', name: '1. FC Heidenheim', code: 'FCH', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 77, icon: '🔴', colors: ['#dc2626', '#1d4ed8'], form: 'W-L-L',
        stars: ['Marvin Pieringer', 'Paul Wanner', 'Léo Scienza', 'Mathias Honsak', 'Jan Schöppner', 'Lennard Maloney', 'Niklas Dorsch', 'Patrick Mainka', 'Benedikt Gimber', 'Omar Traoré', 'Kevin Müller']
      },
      {
        id: 'stp', name: 'FC St. Pauli', code: 'STP', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 75, icon: '🏴‍☠️', colors: ['#78350f', '#18181b'], form: 'D-L-W',
        stars: ['Johannes Eggestein', 'Morgan Guilavogui', 'Elias Saad', 'Oladapo Afolayan', 'Jackson Irvine', 'Carlo Boukhalfa', 'Eric Smith', 'Hauke Wahl', 'Karol Mets', 'Manolis Saliakas', 'Nikola Vasilj']
      },
      {
        id: 'kiel', name: 'Holstein Kiel', code: 'KSV', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 74, icon: '⚓', colors: ['#1d4ed8', '#dc2626'], form: 'L-D-L',
        stars: ['Shuto Machino', 'Benedikt Pichler', 'Fiete Arp', 'Steven Skrzybski', 'Lewis Holtby', 'Magnus Knudsen', 'Armin Gigović', 'Timo Becker', 'Patrick Erras', 'Finn Porath', 'Timon Weiner']
      },
      {
        id: 'boc', name: 'VfL Bochum', code: 'BOC', type: 'clubs', league: 'Bundesliga (Đức)',
        tournaments: ['bundesliga'], rating: 74, icon: '🔵', colors: ['#1d4ed8', '#0284c7'], form: 'L-D-L',
        stars: ['Philipp Hofmann', 'Myron Boadu', 'Moritz Broschinski', 'Dani de Wit', 'Ibrahima Sissoko', 'Matúš Bero', 'Anthony Losilla', 'Ivan Ordets', 'Erhan Mašović', 'Maximilian Wittek', 'Patrick Drewes']
      },

      // =======================================================================
      // FULL LIGUE 1 (18/18 CLUBS)
      // =======================================================================
      {
        id: 'ol', name: 'Olympique Lyonnais', code: 'OL', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 83, icon: '🦁', colors: ['#1e3a8a', '#dc2626'], form: 'W-W-D',
        stars: ['Alexandre Lacazette', 'Georges Mikautadze', 'Malick Fofana', 'Rayan Cherki', 'Saïd Benrahma', 'Corentin Tolisso', 'Nemanja Matić', 'Maxence Caqueret', 'Duje Ćaleta-Car', 'Nicolás Tagliafico', 'Lucas Perri']
      },
      {
        id: 'nic', name: 'OGC Nice', code: 'NIC', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 82, icon: '🦅', colors: ['#dc2626', '#18181b'], form: 'W-D-W',
        stars: ['Evann Guessand', 'Jérémie Boga', 'Mohamed-Ali Cho', 'Youssoufa Moukoko', 'Sofiane Diop', 'Hicham Boudaoui', 'Pablo Rosario', 'Tanguy Ndombele', 'Dante', 'Jonathan Clauss', 'Marcin Bułka']
      },
      {
        id: 'rcl', name: 'RC Lens', code: 'RCL', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 82, icon: '🟡', colors: ['#eab308', '#dc2626'], form: 'D-W-D',
        stars: ['M\'Bala Nzola', 'Florian Sotoca', 'Wesley Saïd', 'Anass Zaroury', 'Andy Diouf', 'Adrien Thomasson', 'Neil El Aynaoui', 'Kevin Danso', 'Facundo Medina', 'Przemysław Frankowski', 'Brice Samba']
      },
      {
        id: 'sdr', name: 'Stade de Reims', code: 'SDR', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 80, icon: '🔴', colors: ['#dc2626', '#991b1b'], form: 'W-W-L',
        stars: ['Keito Nakamura', 'Junya Ito', 'Oumar Diakité', 'Marshall Munetsi', 'Valentin Atangana', 'Yaya Fofana', 'Teddy Teuma', 'Emmanuel Agbadou', 'Cédric Kipré', 'Sergio Akieme', 'Yehvann Diouf']
      },
      {
        id: 'srfc', name: 'Stade Rennais', code: 'REN', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 81, icon: '🦊', colors: ['#dc2626', '#18181b'], form: 'W-L-D',
        stars: ['Arnaud Kalimuendo', 'Amine Gouiri', 'Ludovic Blas', 'Albert Grønbæk', 'Jota', 'Azor Matusiwa', 'Baptiste Santamaria', 'Alidu Seidu', 'Christopher Wooh', 'Adrien Truffert', 'Steve Mandanda']
      },
      {
        id: 'sb29', name: 'Stade Brestois 29', code: 'SB29', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1', 'ucl'], rating: 81, icon: '🏴‍☠️', colors: ['#dc2626', '#991b1b'], form: 'W-D-W',
        stars: ['Ludovic Ajorque', 'Romain Del Castillo', 'Mama Baldé', 'Abdallah Sima', 'Pierre Lees-Melou', 'Mahdi Camara', 'Hugo Magnetti', 'Brendan Chardonnet', 'Soumaïla Coulibaly', 'Kenny Lala', 'Marco Bizot']
      },
      {
        id: 'rcs', name: 'RC Strasbourg', code: 'RCS', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 79, icon: '🦢', colors: ['#0284c7', '#1d4ed8'], form: 'D-W-L',
        stars: ['Emanuel Emegha', 'Sebastian Nanasi', 'Dilane Bakwa', 'Diego Moreira', 'Andrey Santos', 'Habib Diarra', 'Ismaël Doukouré', 'Abakar Sylla', 'mamadou Sarr', 'Guela Doué', 'Đorđe Petrović']
      },
      {
        id: 'tfc', name: 'Toulouse FC', code: 'TFC', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 78, icon: '🟣', colors: ['#6d28d9', '#4c1d95'], form: 'W-L-D',
        stars: ['Zakaria Aboukhlal', 'Joshua King', 'Yann Gboho', 'Shavy Babicka', 'Vincent Sierro', 'Cristian Cásseres', 'Charlie Cresswell', 'Rasmus Nicolaisen', 'Mark McKenzie', 'Gabriel Suazo', 'Guillaume Restes']
      },
      {
        id: 'fcn', name: 'FC Nantes', code: 'FCN', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 77, icon: '🐤', colors: ['#eab308', '#15803d'], form: 'D-L-W',
        stars: ['Matthis Abline', 'Moses Simon', 'Mostafa Mohamed', 'Sorba Thomas', 'Johann Lepenant', 'Pedro Chirivella', 'Douglas Augusto', 'Jean-Charles Castelletto', 'Nathan Zézé', 'Kelvin Amian', 'Alban Lafont']
      },
      {
        id: 'aja', name: 'AJ Auxerre', code: 'AJA', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 76, icon: '⚪', colors: ['#1d4ed8', '#0284c7'], form: 'W-L-W',
        stars: ['Hamed Junior Traorè', 'Gaëtan Perrin', 'Lassine Sinayoko', 'Thelonius Bair', 'Elisha Owusu', 'Rayan Raveloson', 'Jubal', 'Sinaly Diomandé', 'Clément Akpa', 'Paul Joly', 'Donovan Léon']
      },
      {
        id: 'sco', name: 'Angers SCO', code: 'SCO', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 75, icon: '⚫', colors: ['#18181b', '#475569'], form: 'D-W-L',
        stars: ['Himad Abdelli', 'Bamba Dieng', 'Farid El Melali', 'Jim Allevinah', 'Jean-Eudes Aholou', 'Haris Belkebla', 'Jordan Lefort', 'Abdoulaye Bamba', 'Carlens Arcus', 'Florent Hanin', 'Yahia Fofana']
      },
      {
        id: 'asse', name: 'AS Saint-Étienne', code: 'ASSE', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 76, icon: '🟢', colors: ['#15803d', '#065f46'], form: 'W-L-L',
        stars: ['Zuriko Davitashvili', 'Lucas Stassin', 'Ibrahim Sissoko', 'Mathieu Cafaro', 'Pierre Ekwah', 'Aïmen Moueffek', 'Benjamin Bouchouari', 'Yunis Abdelhamid', 'Mickaël Nadé', 'Léo Pétrot', 'Gautier Larsonneur']
      },
      {
        id: 'hac', name: 'Le Havre AC', code: 'HAC', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 75, icon: '🩵', colors: ['#0284c7', '#1e3a8a'], form: 'L-W-L',
        stars: ['Abdoulaye Touré', 'André Ayew', 'Josué Casimir', 'Emmanuel Sabbi', 'Yassine Kechta', 'Daler Kuzyayev', 'Gautier Lloris', 'Étienne Youté Kinkoué', 'Christopher Opéri', 'Loïc Nego', 'Arthur Desmas']
      },
      {
        id: 'mhsc', name: 'Montpellier HSC', code: 'MHSC', type: 'clubs', league: 'Ligue 1 (Pháp)',
        tournaments: ['ligue1'], rating: 75, icon: '🟠', colors: ['#ea580c', '#1e3a8a'], form: 'L-D-W',
        stars: ['Téji Savanier', 'Akor Adams', 'Arnaud Nordin', 'Wahbi Khazri', 'Mousa Al-Tamari', 'Joris Chotard', 'Jordan Ferri', 'Becir Omeragic', 'Modibo Sagnan', 'Falaye Sacko', 'Benjamin Lecomte']
      },

      // =======================================================================
      // ADDITIONAL UEFA CHAMPIONS LEAGUE ELITE CLUBS
      // =======================================================================
      {
        id: 'ben', name: 'SL Benfica', code: 'BEN', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 84, icon: '🦅', colors: ['#dc2626', '#991b1b'], form: 'W-W-W',
        stars: ['Ángel Di María', 'Vangelis Pavlidis', 'Kerem Aktürkoğlu', 'Orkun Kökçü', 'Fredrik Aursnes', 'Florentino Luís', 'Nicolás Otamendi', 'António Silva', 'Álvaro Carreras', 'Alexander Bah', 'Anatoliy Trubin']
      },
      {
        id: 'scp', name: 'Sporting CP', code: 'SCP', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 85, icon: '🦁', colors: ['#15803d', '#065f46'], form: 'W-W-W',
        stars: ['Viktor Gyökeres', 'Pedro Gonçalves', 'Francisco Trincão', 'Geovany Quenda', 'Morten Hjulmand', 'Hidemasa Morita', 'Daniel Bragança', 'Gonçalo Inácio', 'Ousmane Diomande', 'Zeno Debast', 'Franco Israel']
      },
      {
        id: 'psv', name: 'PSV Eindhoven', code: 'PSV', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 83, icon: '💡', colors: ['#dc2626', '#18181b'], form: 'W-W-D',
        stars: ['Luuk de Jong', 'Johan Bakayoko', 'Malik Tillman', 'Noa Lang', 'Joey Veerman', 'Jerdy Schouten', 'Guus Til', 'Olivier Boscagli', 'Ryan Flamingo', 'Matteo Dams', 'Walter Benítez']
      },
      {
        id: 'fey', name: 'Feyenoord Rotterdam', code: 'FEY', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 81, icon: '🔴', colors: ['#dc2626', '#18181b'], form: 'W-D-W',
        stars: ['Santiago Giménez', 'Igor Paixão', 'Ayase Ueda', 'Antoni Milambo', 'Quinten Timber', 'Hwang In-beom', 'Dávid Hancko', 'Gernot Trauner', 'Jordan Lotomba', 'Hugo Bueno', 'Timon Wellenreuther']
      },
      {
        id: 'celt', name: 'Celtic FC', code: 'CELT', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 80, icon: '🍀', colors: ['#15803d', '#16a34a'], form: 'W-W-D',
        stars: ['Kyogo Furuhashi', 'Daizen Maeda', 'Nicolas Kühn', 'Reo Hatate', 'Callum McGregor', 'Arne Engels', 'Paulo Bernardo', 'Cameron Carter-Vickers', 'Liam Scales', 'Alistair Johnston', 'Kasper Schmeichel']
      },

      // =======================================================================
      // FULL SAUDI PRO LEAGUE (14/14 REPRESENTATIVE CLUBS) & AFC CHAMPIONS LEAGUE
      // =======================================================================
      {
        id: 'shab', name: 'Al-Shabab FC', code: 'SHB', type: 'vleague', league: 'Saudi Pro League',
        tournaments: ['saudi_pro'], rating: 80, icon: '🦁', colors: ['#18181b', '#eab308'], form: 'W-W-L',
        stars: ['Yannick Carrasco', 'Abderrazak Hamdallah', 'Daniel Podence', 'Haroune Camara', 'Giacomo Bonaventura', 'Gustavo Cuéllar', 'Cristian Guanca', 'Wesley Hoedt', 'Robert Renan', 'Nader Al-Sharari', 'Kim Seung-gyu']
      },
      {
        id: 'ett', name: 'Al-Ettifaq FC', code: 'ETT', type: 'vleague', league: 'Saudi Pro League',
        tournaments: ['saudi_pro'], rating: 78, icon: '🟢', colors: ['#15803d', '#dc2626'], form: 'W-D-L',
        stars: ['Moussa Dembélé', 'Karl Toko Ekambi', 'Demarai Gray', 'Georginio Wijnaldum', 'Seko Fofana', 'Álvaro Medrán', 'Vitinho', 'Jack Hendry', 'Abdullah Madu', 'Madallah Al-Olayan', 'Marek Rodák']
      },
      {
        id: 'taaw', name: 'Al-Taawoun FC', code: 'TAA', type: 'vleague', league: 'Saudi Pro League',
        tournaments: ['saudi_pro'], rating: 78, icon: '🐺', colors: ['#eab308', '#1e3a8a'], form: 'W-D-W',
        stars: ['Musa Barrow', 'João Pedro', 'Flávio Medeiros', 'Fayçal Fajr', 'Aschraf El Mahdioui', 'Lucas Chávez', 'Sultan Mandash', 'Andrei Girotto', 'Awn Al-Saluli', 'Saad Al-Nasser', 'Mailson']
      },
      {
        id: 'qad', name: 'Al-Qadsiah FC', code: 'QAD', type: 'vleague', league: 'Saudi Pro League',
        tournaments: ['saudi_pro'], rating: 80, icon: '⚔️', colors: ['#dc2626', '#eab308'], form: 'W-W-D',
        stars: ['Pierre-Emerick Aubameyang', 'Julián Quiñones', 'Ezequiel Fernández', 'Nahitan Nández', 'Cameron Puertas', 'Nacho Fernández', 'Gastón Álvarez', 'Jehad Thakri', 'Mohammed Abu Al-Shamat', 'Turki Al-Ammar', 'Koen Casteels']
      },
      {
        id: 'fateh', name: 'Al-Fateh SC', code: 'FAT', type: 'vleague', league: 'Saudi Pro League',
        tournaments: ['saudi_pro'], rating: 76, icon: '🌴', colors: ['#0284c7', '#15803d'], form: 'D-L-W',
        stars: ['Lucas Zelarayán', 'Djaniny', 'Mourad Batna', 'Sofiane Bendebka', 'Saeed Baattia', 'Jason Denayer', 'Marwane Saâdane', 'Ammar Al-Daheem', 'Mohammed Al-Fuhaid', 'Othman Al-Othman', 'Péter Szappanos']
      },
      {
        id: 'riy', name: 'Al-Riyadh SC', code: 'RIY', type: 'vleague', league: 'Saudi Pro League',
        tournaments: ['saudi_pro'], rating: 76, icon: '🔴', colors: ['#dc2626', '#18181b'], form: 'W-D-L',
        stars: ['Bernard Mensah', 'Ibrahim Bayesh', 'Faïz Selemani', 'Mohamed Konaté', 'Tozé', 'Lucas Kal', 'Yoann Barbet', 'Enzo Roco', 'Hussain Al-Nowaiqi', 'Abdulelah Al-Khaibari', 'Milan Borjan']
      },

      // =======================================================================
      // ADDITIONAL AFC CHAMPIONS LEAGUE ELITE & ASEAN CLUBS
      // =======================================================================
      {
        id: 'sdd', name: 'Al-Sadd SC (Qatar)', code: 'SAD', type: 'vleague', league: 'Qatar Stars League / AFC',
        tournaments: ['afc_cl'], rating: 81, icon: '⚪', colors: ['#18181b', '#475569'], form: 'W-W-D',
        stars: ['Akram Afif', 'Rafa Mújica', 'Cristo González', 'Giovani', 'Mateus Uribe', 'Mohamed Camara', 'Claudinho', 'Romain Saïss', 'Boualem Khoukhi', 'Tarek Salman', 'Meshaal Barsham']
      },
      {
        id: 'pers', name: 'Persepolis FC (Iran)', code: 'PER', type: 'vleague', league: 'Persian Gulf League / AFC',
        tournaments: ['afc_cl'], rating: 80, icon: '🔴', colors: ['#dc2626', '#991b1b'], form: 'W-D-W',
        stars: ['Lucas João', 'Ali Alipour', 'Oston Urunov', 'Vahid Amiri', 'Soroush Rafiei', 'Masoud Rigi', 'Hossein Kanaanizadegan', 'Giorgi Gvelesiani', 'Ayoub El Amloud', 'Milad Mohammadi', 'Alexis Guendouz']
      },
      {
        id: 'poang', name: 'Pohang Steelers', code: 'POH', type: 'vleague', league: 'K League 1 / AFC',
        tournaments: ['kleague', 'afc_cl'], rating: 79, icon: '⚙️', colors: ['#dc2626', '#18181b'], form: 'W-L-W',
        stars: ['Jorge Luiz', 'Jeong Jae-hee', 'Hong Yun-sang', 'Oberdan', 'Kim Jong-woo', 'Wanderson', 'Shin Kwang-hoon', 'Jeon Min-gwang', 'Lee Kyu-baek', 'Eo Jeong-won', 'Hwang In-jae']
      },
      {
        id: 'shsp', name: 'Shanghai Port FC', code: 'SHP', type: 'vleague', league: 'Chinese Super League / AFC',
        tournaments: ['csl', 'afc_cl'], rating: 80, icon: '🦅', colors: ['#b91c1c', '#991b1b'], form: 'W-W-W',
        stars: ['Oscar', 'Wu Lei', 'Gustavo', 'Matías Vargas', 'Léo Cittadini', 'Jussa', 'Wang Shenchao', 'Jiang Guangtai', 'Li Ang', 'Li Shuai', 'Yan Junling']
      },
      {
        id: 'kawa', name: 'Kawasaki Frontale', code: 'KWF', type: 'vleague', league: 'J1 League / AFC',
        tournaments: ['jleague', 'afc_cl'], rating: 80, icon: '🐬', colors: ['#0284c7', '#18181b'], form: 'W-D-W',
        stars: ['Erison', 'Shin Yamada', 'Marcinho', 'Yasuto Wakizaka', 'Akihiro Ienaga', 'Kento Tachibanada', 'Yuki Yamamoto', 'Sota Miura', 'Kota Takai', 'Sai van Wermeskerken', 'Jung Sung-ryong']
      },
      {
        id: 'sela', name: 'Selangor FC (Malaysia)', code: 'SEL', type: 'vleague', league: 'Malaysia Super League / ASEAN',
        tournaments: ['msl_idn', 'asean_club'], rating: 76, icon: '🟡', colors: ['#dc2626', '#eab308'], form: 'W-D-W',
        stars: ['Ronnie Fernández', 'Alvin Fortes', 'Ali Olwan', 'Yohandry Orozco', 'Nooa Laine', 'Noor Al-Rawabdeh', 'Safuwan Baharudin', 'Harith Haiqal', 'Quentin Cheng', 'Fazly Mazlan', 'Azim Al-Amin']
      },
      {
        id: 'lcs', name: 'Lion City Sailors (Singapore)', code: 'LCS', type: 'vleague', league: 'Singapore Premier League / ASEAN',
        tournaments: ['asean_club'], rating: 76, icon: '⚓', colors: ['#1e3a8a', '#0284c7'], form: 'W-W-D',
        stars: ['Maxime Lestienne', 'Lennart Thy', 'Shawal Anuar', 'Bart Ramselaar', 'Rui Pires', 'Hariss Harun', 'Song Ui-young', 'Bailey Wright', 'Toni Datković', 'Christopher van Huizen', 'Izwan Mahbud']
      },
      {
        id: 'bFC', name: 'Borneo FC Samarinda', code: 'BOR', type: 'vleague', league: 'Liga 1 Indonesia / ASEAN',
        tournaments: ['msl_idn', 'asean_club'], rating: 76, icon: '🐬', colors: ['#ea580c', '#991b1b'], form: 'W-D-W',
        stars: ['Léo Gaúcho', 'Stefano Lilipaly', 'Berguinho', 'Mariano Peralta', 'Kei Hirose', 'Christophe Nduwarugira', 'Rivaldo Pakpahan', 'Ronaldo Rodrigues', 'Gabriel Furtado', 'Fajar Fathur Rahman', 'Nadeo Argawinata']
      },
      {
        id: 'kaya', name: 'Kaya FC-Iloilo (Philippines)', code: 'KAY', type: 'vleague', league: 'PFL Philippines / ASEAN',
        tournaments: ['asean_club'], rating: 73, icon: '🦁', colors: ['#eab308', '#18181b'], form: 'W-L-D',
        stars: ['Robert Lopez Mendy', 'Shuto Komaki', 'Jovin Bedic', 'Kaishu Yamazaki', 'Marwin Angeles', 'Park Yi-young', 'Simone Rota', 'Saito', 'Fitch Arboleda', 'Audie Menzi', 'Patrick Deyto']
      },
      {
        id: 'svay', name: 'Preah Khan Reach Svay Rieng', code: 'SVR', type: 'vleague', league: 'Cambodian Premier League / ASEAN',
        tournaments: ['asean_club'], rating: 73, icon: '🗡️', colors: ['#1d4ed8', '#eab308'], form: 'W-D-L',
        stars: ['Pablo Augusto', 'Cristian Roque', 'Bounphachan Bounkong', 'Min Ratanak', 'Ryo Fujii', 'Takashi Odawara', 'Soeuy Visal', 'Thierry Bin', 'Sareth Krya', 'Nick Taylor', 'Vireak Dara']
      },

      // =======================================================================
      // ADDITIONAL MLS & COPA LIBERTADORES CLUBS (12/12 CLUBS)
      // =======================================================================
      {
        id: 'pal', name: 'SE Palmeiras', code: 'PAL', type: 'clubs', league: 'Copa Libertadores',
        tournaments: ['americas_cl'], rating: 83, icon: '🌴', colors: ['#15803d', '#065f46'], form: 'W-W-D',
        stars: ['Estêvão Willian', 'Felipe Anderson', 'Flaco López', 'Rony', 'Raphael Veiga', 'Richard Ríos', 'Aníbal Moreno', 'Gustavo Gómez', 'Murilo Cerqueira', 'Joaquín Piquerez', 'Weverton']
      },
      {
        id: 'bot', name: 'Botafogo FR', code: 'BOT', type: 'clubs', league: 'Copa Libertadores',
        tournaments: ['americas_cl'], rating: 83, icon: '⭐', colors: ['#18181b', '#475569'], form: 'W-W-W',
        stars: ['Igor Jesus', 'Luiz Henrique', 'Thiago Almada', 'Jefferson Savarino', 'Júnior Santos', 'Marlon Freitas', 'Gregore', 'Alexander Barboza', 'Bastos', 'Alex Telles', 'John Victor']
      },
      {
        id: 'boc_j', name: 'Boca Juniors', code: 'CABJ', type: 'clubs', league: 'Copa Libertadores',
        tournaments: ['americas_cl'], rating: 81, icon: '💛', colors: ['#1e3a8a', '#eab308'], form: 'W-D-L',
        stars: ['Edinson Cavani', 'Miguel Merentiel', 'Exequiel Zeballos', 'Kevin Zenón', 'Cristian Medina', 'Pol Fernández', 'Tomás Belmonte', 'Marcos Rojo', 'Aaron Anselmino', 'Luis Advíncula', 'Sergio Romero']
      },
      {
        id: 'lafc', name: 'Los Angeles FC', code: 'LAFC', type: 'clubs', league: 'MLS (Mỹ)',
        tournaments: ['americas_cl'], rating: 81, icon: '🦅', colors: ['#18181b', '#eab308'], form: 'W-W-D',
        stars: ['Denis Bouanga', 'Olivier Giroud', 'Mateusz Bogusz', 'Cristian Olivera', 'Lewis O\'Brien', 'Ilíe Sánchez', 'Timothy Tillman', 'Maxime Chanot', 'Aaron Long', 'Sergi Palencia', 'Hugo Lloris']
      },
      {
        id: 'clb', name: 'Columbus Crew', code: 'CLB', type: 'clubs', league: 'MLS (Mỹ)',
        tournaments: ['americas_cl'], rating: 81, icon: '👷', colors: ['#eab308', '#18181b'], form: 'W-W-D',
        stars: ['Cucho Hernández', 'Diego Rossi', 'Christian Ramirez', 'Darlington Nagbe', 'Sean Zawadzki', 'Max Arfsten', 'Mohamed Farsi', 'Steven Moreira', 'Rudy Camacho', 'Yevhen Cheberko', 'Patrick Schulte']
      },
      {
        id: 'ame', name: 'Club América (Mexico)', code: 'AME', type: 'clubs', league: 'CONCACAF / Americas',
        tournaments: ['americas_cl'], rating: 81, icon: '🦅', colors: ['#eab308', '#1e3a8a'], form: 'W-D-W',
        stars: ['Henry Martín', 'Rodrigo Aguirre', 'Brian Rodríguez', 'Alejandro Zendejas', 'Álvaro Fidalgo', 'Jonathan dos Santos', 'Diego Valdés', 'Sebastián Cáceres', 'Ramón Juárez', 'Cristian Calderón', 'Luis Malagón']
      },

      // =======================================================================
      // ADDITIONAL NATIONAL TEAMS (EURO, ASIAN CUP, WORLD CUP)
      // =======================================================================
      {
        id: 'bel', name: 'ĐT Bỉ', code: 'BEL', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 86, icon: '🇧🇪', colors: ['#dc2626', '#eab308'], form: 'W-D-L',
        stars: ['Kevin De Bruyne', 'Romelu Lukaku', 'Jérémy Doku', 'Loïs Openda', 'Leandro Trossard', 'Youri Tielemans', 'Amadou Onana', 'Wout Faes', 'Arthur Theate', 'Timothy Castagne', 'Koen Casteels']
      },
      {
        id: 'sui', name: 'ĐT Thụy Sĩ', code: 'SUI', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 84, icon: '🇨🇭', colors: ['#dc2626', '#991b1b'], form: 'W-D-D',
        stars: ['Granit Xhaka', 'Breel Embolo', 'Dan Ndoye', 'Ruben Vargas', 'Zeki Amdouni', 'Remo Freuler', 'Michel Aebischer', 'Manuel Akanji', 'Nico Elvedi', 'Ricardo Rodriguez', 'Gregor Kobel']
      },
      {
        id: 'den', name: 'ĐT Đan Mạch', code: 'DEN', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 83, icon: '🇩🇰', colors: ['#dc2626', '#991b1b'], form: 'W-D-W',
        stars: ['Rasmus Højlund', 'Jonas Wind', 'Christian Eriksen', 'Pierre-Emile Højbjerg', 'Morten Hjulmand', 'Mikkel Damsgaard', 'Joakim Mæhle', 'Jannik Vestergaard', 'Joachim Andersen', 'Alexander Bah', 'Kasper Schmeichel']
      },
      {
        id: 'aut', name: 'ĐT Áo', code: 'AUT', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 83, icon: '🇦🇹', colors: ['#dc2626', '#18181b'], form: 'W-W-D',
        stars: ['Marcel Sabitzer', 'Marko Arnautović', 'Christoph Baumgartner', 'Konrad Laimer', 'Nicolas Seiwald', 'Romano Schmid', 'Philipp Lienhart', 'Kevin Danso', 'Stefan Posch', 'Phillipp Mwene', 'Patrick Pentz']
      },
      {
        id: 'tur', name: 'ĐT Thổ Nhĩ Kỳ', code: 'TUR', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 83, icon: '🇹🇷', colors: ['#dc2626', '#b91c1c'], form: 'W-W-D',
        stars: ['Arda Güler', 'Kenan Yıldız', 'Kerem Aktürkoğlu', 'Hakan Çalhanoğlu', 'Orkun Kökçü', 'Barış Alper Yılmaz', 'İsmail Yüksek', 'Merih Demiral', 'Abdülkerim Bardakcı', 'Ferdi Kadıoğlu', 'Mert Günok']
      },
      {
        id: 'ukr', name: 'ĐT Ukraine', code: 'UKR', type: 'nations', league: 'UEFA Euro',
        tournaments: ['euro', 'world_cup'], rating: 81, icon: '🇺🇦', colors: ['#eab308', '#1d4ed8'], form: 'W-D-L',
        stars: ['Artem Dovbyk', 'Mykhailo Mudryk', 'Viktor Tsygankov', 'Georgiy Sudakov', 'Mykola Shaparenko', 'Volodymyr Brazhko', 'Oleksandr Zinchenko', 'Illia Zabarnyi', 'Mykola Matviyenko', 'Yukhym Konoplya', 'Anatoliy Trubin']
      },
      {
        id: 'pol', name: 'ĐT Ba Lan', code: 'POL', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 81, icon: '🇵🇱', colors: ['#dc2626', '#991b1b'], form: 'D-L-W',
        stars: ['Robert Lewandowski', 'Krzysztof Piątek', 'Piotr Zieliński', 'Nicola Zalewski', 'Sebastian Szymański', 'Jakub Moder', 'Przemysław Frankowski', 'Jakub Kiwior', 'Jan Bednarek', 'Paweł Dawidowicz', 'Łukasz Skorupski']
      },
      {
        id: 'srb', name: 'ĐT Serbia', code: 'SRB', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 81, icon: '🇷🇸', colors: ['#dc2626', '#1e3a8a'], form: 'D-W-L',
        stars: ['Aleksandar Mitrović', 'Dušan Vlahović', 'Lazar Samardžić', 'Saša Lukić', 'Ivan Ilić', 'Andrija Živković', 'Nikola Milenković', 'Strahinja Pavlović', 'Miloš Veljković', 'Kosta Nedeljković', 'Predrag Rajković']
      },
      {
        id: 'irn', name: 'ĐT Iran', code: 'IRN', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 82, icon: '🇮🇷', colors: ['#15803d', '#dc2626'], form: 'W-W-D',
        stars: ['Mehdi Taremi', 'Sardar Azmoun', 'Alireza Jahanbakhsh', 'Mehdi Ghayedi', 'Saman Ghoddos', 'Saeid Ezatolahi', 'Mohammad Mohebi', 'Shoja Khalilzadeh', 'Hossein Kanaanizadegan', 'Milad Mohammadi', 'Alireza Beiranvand']
      },
      {
        id: 'aus', name: 'ĐT Úc', code: 'AUS', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 81, icon: '🇦🇺', colors: ['#eab308', '#15803d'], form: 'W-D-W',
        stars: ['Craig Goodwin', 'Mitchell Duke', 'Nestory Irankunda', 'Jackson Irvine', 'Riley McGree', 'Aiden O\'Neill', 'Harry Souttar', 'Kye Rowles', 'Cameron Burgess', 'Aziz Behich', 'Mathew Ryan']
      },
      {
        id: 'qat', name: 'ĐT Qatar', code: 'QAT', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 79, icon: '🇶🇦', colors: ['#7f1d1d', '#991b1b'], form: 'W-W-L',
        stars: ['Akram Afif', 'Almoez Ali', 'Yusuf Abdurisag', 'Abdulaziz Hatem', 'Jassem Gaber', 'Ahmed Fathy', 'Lucas Mendes', 'Tarek Salman', 'Boualem Khoukhi', 'Homam Ahmed', 'Meshaal Barsham']
      },
      {
        id: 'uzb', name: 'ĐT Uzbekistan', code: 'UZB', type: 'nations', league: 'AFC Asian Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 80, icon: '🇺🇿', colors: ['#0284c7', '#16a34a'], form: 'W-W-D',
        stars: ['Eldor Shomurodov', 'Abbosbek Fayzullaev', 'Jaloliddin Masharipov', 'Oston Urunov', 'Otabek Shukurov', 'Odiljon Hamrobekov', 'Abdukodir Khusanov', 'Husniddin Aliqulov', 'Rustam Ashurmatov', 'Sherzod Nasrullaev', 'Utkir Yusupov']
      },
      {
        id: 'irq', name: 'ĐT Iraq', code: 'IRQ', type: 'nations', league: 'AFC Asian Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 79, icon: '🇮🇶', colors: ['#15803d', '#18181b'], form: 'W-D-W',
        stars: ['Aymen Hussein', 'Ali Jasim', 'Mohanad Ali', 'Youssef Amyn', 'Ibrahim Bayesh', 'Amir Al-Ammari', 'Osama Rashid', 'Rebin Sulaka', 'Zaid Tahseen', 'Merchas Doski', 'Jalal Hassan']
      },
      {
        id: 'mas', name: 'ĐT Malaysia', code: 'MAS', type: 'nations', league: 'AFC Asian Cup / ASEAN',
        tournaments: ['asean_cup', 'asian_cup', 'world_cup'], rating: 75, icon: '🇲🇾', colors: ['#eab308', '#18181b'], form: 'W-D-L',
        stars: ['Arif Aiman Hanapi', 'Paulo Josué', 'Romel Morales', 'Safawi Rasid', 'Endrick dos Santos', 'Nooa Laine', 'Syamer Kutty Abba', 'Dion Cools', 'Matthew Davies', 'La\'Vere Corbin-Ong', 'Syihan Hazmi']
      }      ,
      // =======================================================================
      // MEIJI YASUDA J1 LEAGUE (NHẬT BẢN - 7 ADDITIONAL CLUBS -> 10 TOTAL)
      // =======================================================================
      {
        id: 'hiro', name: 'Sanfrecce Hiroshima', code: 'SFR', type: 'vleague', league: 'J1 League (Nhật Bản)',
        tournaments: ['jleague', 'afc_cl'], rating: 81, icon: '🟣', colors: ['#6d28d9', '#4c1d95'], form: 'W-W-D',
        stars: ['Pieros Sotiriou', 'Gonçalo Paciência', 'Mutsuki Kato', 'Tolgay Arslan', 'Hayao Kawabe', 'Makoto Mitsuta', 'Shunki Higashi', 'Sho Sasaki', 'Hayato Araki', 'Tsukasa Shiotani', 'Keisuke Osako']
      },
      {
        id: 'mach', name: 'FC Machida Zelvia', code: 'MCZ', type: 'vleague', league: 'J1 League (Nhật Bản)',
        tournaments: ['jleague'], rating: 80, icon: '🔵', colors: ['#1d4ed8', '#eab308'], form: 'W-D-W',
        stars: ['Oh Se-hun', 'Mitchell Duke', 'Shota Fujio', 'Erik Lima', 'Yuki Soma', 'Kai Shibato', 'Hokuto Shimoda', 'Gen Shoji', 'Ibrahim Drešević', 'Junya Suzuki', 'Kosei Tani']
      },
      {
        id: 'gamb', name: 'Gamba Osaka', code: 'GAM', type: 'vleague', league: 'J1 League (Nhật Bản)',
        tournaments: ['jleague'], rating: 80, icon: '⚫', colors: ['#1e3a8a', '#18181b'], form: 'W-W-L',
        stars: ['Takashi Usami', 'Issam Jebali', 'Welton Felipe', 'Juan Alano', 'Dawhan', 'Tokuma Suzuki', 'Kota Yamada', 'Shinnosuke Nakatani', 'Shota Fukuoka', 'Keisuke Kurokawa', 'Jun Ichimori']
      },
      {
        id: 'kash', name: 'Kashima Antlers', code: 'ANT', type: 'vleague', league: 'J1 League (Nhật Bản)',
        tournaments: ['jleague'], rating: 81, icon: '🦌', colors: ['#991b1b', '#1e3a8a'], form: 'W-D-W',
        stars: ['Yuma Suzuki', 'Aleksandar Čavrić', 'Kyosuke Tagawa', 'Gaku Shibasaki', 'Kei Chinen', 'Hayakawa', 'Koki Anzai', 'Naomichi Ueda', 'Ikuma Sekigawa', 'Kimito Nono', 'Tomoki Hayakawa']
      },
      {
        id: 'uraw', name: 'Urawa Red Diamonds', code: 'URA', type: 'vleague', league: 'J1 League (Nhật Bản)',
        tournaments: ['jleague', 'afc_cl'], rating: 80, icon: '♦️', colors: ['#dc2626', '#18181b'], form: 'D-W-L',
        stars: ['Thiago Santana', 'Bryan Linssen', 'Genki Haraguchi', 'Ryoma Watanabe', 'Samuel Gustafson', 'Ken Iwao', 'Shoya Nakajima', 'Alexander Scholz', 'Marius Høibråten', 'Hirokazu Ishihara', 'Shusaku Nishikawa']
      },
      {
        id: 'fctk', name: 'FC Tokyo', code: 'FCT', type: 'vleague', league: 'J1 League (Nhật Bản)',
        tournaments: ['jleague'], rating: 79, icon: '🗼', colors: ['#1d4ed8', '#dc2626'], form: 'W-L-D',
        stars: ['Diego Oliveira', 'Ryotaro Araki', 'Keita Endo', 'Teruhito Nakagawa', 'Kei Koizumi', 'Takahiro Ko', 'Yuto Nagatomo', 'Masato Morishige', 'Henrique Trevisan', 'Kashif Bangnagande', 'Taishi Brandon Nozawa']
      },
      {
        id: 'cere', name: 'Cerezo Osaka', code: 'CRZ', type: 'vleague', league: 'J1 League (Nhật Bản)',
        tournaments: ['jleague'], rating: 79, icon: '🌸', colors: ['#ec4899', '#1e3a8a'], form: 'D-W-D',
        stars: ['Léo Ceará', 'Lucas Fernandes', 'Vitor Bueno', 'Capixaba', 'Shinji Kagawa', 'Hiroaki Okuno', 'Shunta Tanaka', 'Kakeru Funaki', 'Seiya Maikuma', 'Ryuya Nishio', 'Kim Jin-hyeon']
      },

      // =======================================================================
      // HANA 1Q K LEAGUE 1 (HÀN QUỐC - 8 ADDITIONAL CLUBS -> 10 TOTAL)
      // =======================================================================
      {
        id: 'jeon', name: 'Jeonbuk Hyundai Motors', code: 'JHM', type: 'vleague', league: 'K League 1 (Hàn Quốc)',
        tournaments: ['kleague', 'afc_cl'], rating: 80, icon: '🟢', colors: ['#15803d', '#065f46'], form: 'W-D-W',
        stars: ['Tiago Orobó', 'Moon Seon-min', 'Song Min-kyu', 'Lee Seung-woo', 'Andrigo', 'Kim Jin-gyu', 'Boateng', 'Hong Jeong-ho', 'Park Jin-seob', 'Kim Tae-hwan', 'Kim Joon-hong']
      },
      {
        id: 'fcse', name: 'FC Seoul', code: 'FCS', type: 'vleague', league: 'K League 1 (Hàn Quốc)',
        tournaments: ['kleague'], rating: 80, icon: '🔴', colors: ['#b91c1c', '#18181b'], form: 'W-W-D',
        stars: ['Jesse Lingard', 'Stanislav Iljutcenko', 'Willyan', 'Lucas Silva', 'Ki Sung-yueng', 'Ryu Jae-moon', 'Cho Young-wook', 'Yazan Al-Arab', 'Kim Ju-sung', 'Choi Jun', 'Kang Hyeon-mu']
      },
      {
        id: 'gang', name: 'Gangwon FC', code: 'GWN', type: 'vleague', league: 'K League 1 (Hàn Quốc)',
        tournaments: ['kleague'], rating: 79, icon: '🟠', colors: ['#ea580c', '#15803d'], form: 'W-W-L',
        stars: ['Yang Min-hyeok', 'Yago Cariello', 'Lee Sang-heon', 'Franko Kovačević', 'Kim Dong-현', 'Kim Kang-guk', 'Hwang Mun-ki', 'Kim Young-bin', 'Marko Tući', 'Lee Gi-hyuk', 'Lee Kwang-yeon']
      },
      {
        id: 'gimch', name: 'Gimcheon Sangmu FC', code: 'GIM', type: 'vleague', league: 'K League 1 (Hàn Quốc)',
        tournaments: ['kleague'], rating: 79, icon: '🎖️', colors: ['#991b1b', '#eab308'], form: 'W-D-W',
        stars: ['Lee Dong-gyeong', 'Yu Kang-hyun', 'Kim Dae-won', 'Mo Jae-hyeon', 'Seo Min-woo', 'Kim Bong-soo', '맹성웅', 'Park Seung-wook', 'Kim Jae-woo', 'Park Soo-il', 'Kim Dong-heon']
      },
      {
        id: 'suwon', name: 'Suwon FC', code: 'SWF', type: 'vleague', league: 'K League 1 (Hàn Quốc)',
        tournaments: ['kleague'], rating: 78, icon: '🔵', colors: ['#1e3a8a', '#dc2626'], form: 'D-W-L',
        stars: ['Anderson Oliveira', 'Ji Dong-won', 'Jeong Seung-won', 'Yoon Bit-garam', 'Son Jun-ho', 'Kang Sang-yoon', 'Lee Yong', 'Kwon Kyung-won', 'Jackson', 'Park Cheol-woo', 'Ahn Joon-soo']
      },
      {
        id: 'gwang', name: 'Gwangju FC', code: 'GWJ', type: 'vleague', league: 'K League 1 (Hàn Quốc)',
        tournaments: ['kleague', 'afc_cl'], rating: 79, icon: '🟡', colors: ['#eab308', '#991b1b'], form: 'W-L-W',
        stars: ['Jasir Asani', 'Beka Mikeltadze', 'Gabriel Tigrão', 'Heo Yool', 'Jeong Ho-yeon', 'Park Tae-jun', 'Choi Kyoung-rok', 'Byun Jun-soo', 'Kim Kyeong-min', 'Lee Min-ki', 'Kim Kyeong-min (GK)']
      },
      {
        id: 'jeju', name: 'Jeju United', code: 'JEJ', type: 'vleague', league: 'K League 1 (Hàn Quốc)',
        tournaments: ['kleague'], rating: 77, icon: '🍊', colors: ['#ea580c', '#18181b'], form: 'W-L-D',
        stars: ['Yuri Jonathan', 'Reis', 'Seo Jin-su', 'Italo', 'Nam Tae-hee', 'Kim Geon-웅', 'An Tae-hyun', 'Lim Chai-min', 'Song Ju-hun', 'Kim Tae-hwan', 'Kim Dong-jun']
      },
      {
        id: 'daej', name: 'Daejeon Hana Citizen', code: 'DHC', type: 'vleague', league: 'K League 1 (Hàn Quốc)',
        tournaments: ['kleague'], rating: 77, icon: '🟣', colors: ['#881337', '#065f46'], form: 'D-W-D',
        stars: ['Vladislavs Gutkovskis', 'Masa', 'Kelvin', 'Kim In-gyun', 'Bobsin', 'Ju Se-jong', 'Lee Soon-min', 'Anton Kryvotsyuk', 'Aaron Calver', 'Kim Moon-hwan', 'Lee Chang-geun']
      },

      // =======================================================================
      // THAI LEAGUE 1 (THÁI LAN - 6 ADDITIONAL CLUBS -> 8 TOTAL)
      // =======================================================================
      {
        id: 'port', name: 'Port FC (Thái Lan)', code: 'PRT', type: 'vleague', league: 'Thai League 1 (Thái Lan)',
        tournaments: ['thaileague', 'afc_cl'], rating: 78, icon: '🦁', colors: ['#ea580c', '#1e3a8a'], form: 'W-W-D',
        stars: ['Bordin Phala', 'Teerasak Poeiphimai', 'Lonsana Doumbouya', 'Willen Mota', 'Felipe Amorim', 'Noboru Shimura', 'Peeradon Chamratsamee', 'Worachit Kanitsribampen', 'Asnawi Mangkualam', 'Isaac Honny', 'Somporn Yos']
      },
      {
        id: 'utd_bkk', name: 'True Bangkok United', code: 'BKU', type: 'vleague', league: 'Thai League 1 (Thái Lan)',
        tournaments: ['thaileague', 'afc_cl'], rating: 78, icon: '🪽', colors: ['#dc2626', '#18181b'], form: 'W-W-D',
        stars: ['Richairo Živković', 'Muhsen Al-Ghassani', 'Bassel Jradi', 'Mahmoud Eid', 'Pokklaw Anan', 'Thitiphan Puangchan', 'Weerathep Pomphan', 'Everton Gonçalves', 'Manuel Bihr', 'Nitipong Selanon', 'Patiwat Khammai']
      },
      {
        id: 'muang', name: 'Muangthong United', code: 'MTU', type: 'vleague', league: 'Thai League 1 (Thái Lan)',
        tournaments: ['thaileague'], rating: 77, icon: '👹', colors: ['#dc2626', '#18181b'], form: 'W-D-L',
        stars: ['Poramet Arjvirai', 'Felicio Brown Forbes', 'Emil Roback', 'Kakana Khamyok', 'Picha Autra', 'Sorawit Panthong', 'Tristan Do', 'Aly Cissokho', 'Abbos Otakhonov', 'John-Patrick Strauß', 'Kittipong Phuthawchueak']
      },
      {
        id: 'ratch', name: 'Ratchaburi FC', code: 'RBM', type: 'vleague', league: 'Thai League 1 (Thái Lan)',
        tournaments: ['thaileague'], rating: 76, icon: '🐉', colors: ['#ea580c', '#1e3a8a'], form: 'W-L-W',
        stars: ['Clément Depres', 'Tana', 'Mohamed Mara', 'Tatsuya Tanaka', 'Jakkit Wachpirom', 'Kritsananon Srisuwan', 'Siwakorn Jakkuprasat', 'Jonathan Khemdee', 'Jirawat Thongsaengphrao', 'Jesse Curran', 'Kampol Pathomakkakul']
      },
      {
        id: 'chiang', name: 'Chiangrai United', code: 'CRU', type: 'vleague', league: 'Thai League 1 (Thái Lan)',
        tournaments: ['thaileague'], rating: 75, icon: '🪲', colors: ['#ea580c', '#18181b'], form: 'D-L-W',
        stars: ['Rodriguinho', 'Carlos Iury', 'Sittichok Kannoo', 'Chotipat Poomkaew', 'Ralph Machado', 'Settasit Suvannaseat', 'Atikun Mheetuam', 'Victor Oliveira', 'Marco Ballini', 'Tanasak Srisai', 'Apirak Woravong']
      },
      {
        id: 'prachuap', name: 'PT Prachuap FC', code: 'PTP', type: 'vleague', league: 'Thai League 1 (Thái Lan)',
        tournaments: ['thaileague'], rating: 75, icon: '🐝', colors: ['#ea580c', '#15803d'], form: 'W-D-D',
        stars: ['Tauã Ferreira', 'Vander Luiz', 'Wanchai Jarunongkran', 'Chrigor', 'Jeong Woo-geun', 'Chatchai Budprom', 'Airton Tirabassi', 'Amirhossein Nemati', 'Jirapan Phasukihan', 'Saharat Kanyaroj', 'Rattanai Songsangchan']
      },

      // =======================================================================
      // CHINESE SUPER LEAGUE (TRUNG QUỐC - 5 ADDITIONAL CLUBS -> 6 TOTAL)
      // =======================================================================
      {
        id: 'shsh', name: 'Shanghai Shenhua', code: 'SHS', type: 'vleague', league: 'Chinese Super League',
        tournaments: ['csl', 'afc_cl'], rating: 80, icon: '🔵', colors: ['#1d4ed8', '#dc2626'], form: 'W-W-W',
        stars: ['André Luis', 'Cephas Malele', 'João Carlos Teixeira', 'Fernandinho', 'Wu Xi', 'Ibrahim Amadou', 'Gao Tianyi', 'Zhu Chenjie', 'Jiang Shenglong', 'Wilson Manafá', 'Bao Yaxiong']
      },
      {
        id: 'sdts', name: 'Shandong Taishan', code: 'SDT', type: 'vleague', league: 'Chinese Super League',
        tournaments: ['csl', 'afc_cl'], rating: 79, icon: '🟠', colors: ['#ea580c', '#1e3a8a'], form: 'W-D-W',
        stars: ['Cryzan', 'Valeri Qazaishvili', 'Zeca', 'Pedro Delgado', 'Li Yuanyi', 'Xie Wenneng', 'Peng Xinli', 'Zheng Zheng', 'Marcel Scalese', 'Liu Yang', 'Wang Dalei']
      },
      {
        id: 'bjga', name: 'Beijing Guoan', code: 'BJG', type: 'vleague', league: 'Chinese Super League',
        tournaments: ['csl'], rating: 79, icon: '🟢', colors: ['#15803d', '#eab308'], form: 'W-W-D',
        stars: ['Fábio Abreu', 'Zhang Yuning', 'Lin Liangming', 'Guga', 'Nico Yennaris (Li Ke)', 'Chi Zhongguo', 'Zhang Xizhe', 'Michael Ngadeu', 'Mamadou Traoré', 'Wang Gang', 'Han Jiaqi']
      },
      {
        id: 'cdrc', name: 'Chengdu Rongcheng', code: 'CDR', type: 'vleague', league: 'Chinese Super League',
        tournaments: ['csl'], rating: 79, icon: '🐼', colors: ['#dc2626', '#eab308'], form: 'W-D-W',
        stars: ['Felipe Silva', 'Rômulo', 'Manuel Palacios', 'Wei Shihao', 'Tim Chow', 'Yahav Gurfinkel', 'Gan Chao', 'Timo Letschert', 'Yang Yiming', 'Tang Miao', 'Jian Tao']
      },
      {
        id: 'zhej', name: 'Zhejiang FC', code: 'ZHJ', type: 'vleague', league: 'Chinese Super League',
        tournaments: ['csl'], rating: 77, icon: '🌿', colors: ['#16a34a', '#065f46'], form: 'D-W-L',
        stars: ['Leonardo', 'Jean Evrard Kouassi', 'Deabeas Owusu-Sekyere', 'Franko Andrijašević', 'Alexander N\'Doumbou', 'Li Tixiang', 'Cheng Jin', 'Lucas Possignolo', 'Sun Guowen', 'Yue Xin', 'Zhao Bo']
      },

      // =======================================================================
      // MALAYSIA SUPER LEAGUE & LIGA 1 INDONESIA (6 ADDITIONAL CLUBS -> 10 TOTAL)
      // =======================================================================
      {
        id: 'persib', name: 'Persib Bandung (Indonesia)', code: 'PSB', type: 'vleague', league: 'Liga 1 Indonesia',
        tournaments: ['msl_idn', 'asean_club'], rating: 77, icon: '🐯', colors: ['#1d4ed8', '#1e3a8a'], form: 'W-W-D',
        stars: ['David da Silva', 'Ciro Alves', 'Tyronne del Pino', 'Marc Klok', 'Beckham Putra', 'Dedi Kusnandar', 'Dimas Drajad', 'Nick Kuipers', 'Gustavo França', 'Edo Febriansah', 'Kevin Ray Mendoza']
      },
      {
        id: 'persija', name: 'Persija Jakarta (Indonesia)', code: 'PSJ', type: 'vleague', league: 'Liga 1 Indonesia',
        tournaments: ['msl_idn'], rating: 76, icon: '🦅', colors: ['#dc2626', '#ea580c'], form: 'W-D-L',
        stars: ['Gustavo Almeida', 'Marko Šimić', 'Ryo Matsumura', 'Maciej Gajos', 'Witan Sulaeman', 'Ramon Bueno', 'Hanif Sjahbandi', 'Rizky Ridho', 'Ondřej Kúdela', 'Firza Andika', 'Carlos Eduardo']
      },
      {
        id: 'perseb', name: 'Persebaya Surabaya (Indonesia)', code: 'PBY', type: 'vleague', league: 'Liga 1 Indonesia',
        tournaments: ['msl_idn'], rating: 76, icon: '🐊', colors: ['#15803d', '#eab308'], form: 'W-W-D',
        stars: ['Bruno Moreira', 'Flávio Silva', 'Francisco Rivera', 'Malik Risaldi', 'Mohammed Rashid', 'Gilson Costa', 'Kasim Botan', 'Slavko Damjanović', 'Kadek Raditya', 'Ardi Idrus', 'Ernando Ari']
      },
      {
        id: 'bali', name: 'Bali United (Indonesia)', code: 'BAL', type: 'vleague', league: 'Liga 1 Indonesia',
        tournaments: ['msl_idn'], rating: 76, icon: '🏝️', colors: ['#dc2626', '#18181b'], form: 'W-D-W',
        stars: ['Everton Nascimento', 'Privat Mbarga', 'Irfan Jaya', 'Mitsuru Maruoka', 'Brandon Wilson', 'Kadek Agung', 'Ricky Fajrin', 'Elias Dolah', 'Bagas Adi', 'Made Andhika', 'Adilson Maringá']
      },
      {
        id: 'tereng', name: 'Terengganu FC (Malaysia)', code: 'TFC_M', type: 'vleague', league: 'Malaysia Super League',
        tournaments: ['msl_idn', 'asean_club'], rating: 76, icon: '🐢', colors: ['#18181b', '#f8fafc'], form: 'W-D-W',
        stars: ['Safawi Rasid', 'Akhyar Rashid', 'Ismaheel Akinade', 'Nelson Bonilla', 'Manuel Ott', 'Nurillo Tukhtasinov', 'Marin Pilj', 'Shahrul Nizam', 'Safwan Mazlan', 'Azam Azmi', 'Suhaimi Husin']
      },
      {
        id: 'sabah', name: 'Sabah FC (Malaysia)', code: 'SAB', type: 'vleague', league: 'Malaysia Super League',
        tournaments: ['msl_idn'], rating: 75, icon: '🦏', colors: ['#dc2626', '#0284c7'], form: 'W-L-W',
        stars: ['Darren Lok', 'Saddil Ramdani', 'João Pedro', 'Miguel Cifuentes', 'Telmo Castanheira', 'Stuart Wilkin', 'Park Tae-su', 'Gabriel Peres', 'Dominic Tan', 'Daniel Ting', 'Damien Lim']
      }      ,
      {
        id: 'nmi_nt', name: 'ĐT Quần đảo Bắc Mariana', code: 'NMI', type: 'nations', league: 'AFC Asian Cup / Châu Á',
        tournaments: ['asian_cup', 'world_cup'], rating: 64, icon: '🇲🇵', colors: ['#0284c7', '#1e3a8a'], form: 'L-D-L',
        stars: ['Jireh Yobech', 'Sunjoon Tenorio', 'Michah Griffin', 'Rintaro Miyajima', 'Ariel Narvaez', 'Markus Toves', 'Mareko Tekopua', 'Jonne Navarro', 'Leland Deleon Guerrero', 'Dev Bachani', 'Merrick Toves']
      },
      {
        id: 'sco_nt', name: 'ĐT Scotland', code: 'SCO', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 80, icon: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', colors: ['#1e3a8a', '#38bdf8'], form: 'W-D-L',
        stars: ['Scott McTominay', 'Andrew Robertson', 'John McGinn', 'Billy Gilmour', 'Ché Adams', 'Ryan Christie', 'Ben Doak', 'John Souttar', 'Grant Hanley', 'Anthony Ralston', 'Craig Gordon']
      },
      {
        id: 'wal_nt', name: 'ĐT Xứ Wales', code: 'WAL', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 79, icon: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', colors: ['#dc2626', '#15803d'], form: 'W-D-W',
        stars: ['Brennan Johnson', 'Harry Wilson', 'Kieffer Moore', 'Sorba Thomas', 'Ethan Ampadu', 'Jordan James', 'Neco Williams', 'Ben Davies', 'Joe Rodon', 'Connor Roberts', 'Danny Ward']
      },
      {
        id: 'irl_nt', name: 'ĐT Cộng hòa Ireland', code: 'IRL', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 78, icon: '🇮🇪', colors: ['#15803d', '#ea580c'], form: 'D-W-L',
        stars: ['Evan Ferguson', 'Sammie Szmodics', 'Chiedozie Ogbene', 'Troy Parrott', 'Josh Cullen', 'Jason Knight', 'Nathan Collins', 'Dara O\'Shea', 'Liam Scales', 'Robbie Brady', 'Caoimhín Kelleher']
      },
      {
        id: 'nir_nt', name: 'ĐT Bắc Ireland', code: 'NIR', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 76, icon: '🇬🇧', colors: ['#15803d', '#1e3a8a'], form: 'W-D-L',
        stars: ['Conor Bradley', 'Isaac Price', 'Dion Charles', 'Shea Charles', 'Trai Hume', 'Paddy McNair', 'Daniel Ballard', 'Eoin Toal', 'Brodie Spencer', 'Alistair McCann', 'Pierce Charles']
      },
      {
        id: 'swe_nt', name: 'ĐT Thụy Điển', code: 'SWE', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 82, icon: '🇸🇪', colors: ['#eab308', '#1d4ed8'], form: 'W-W-D',
        stars: ['Viktor Gyökeres', 'Alexander Isak', 'Dejan Kulusevski', 'Anthony Elanga', 'Sebastian Nanasi', 'Yasin Ayari', 'Lucas Bergvall', 'Victor Lindelöf', 'Isak Hien', 'Gabriel Gudmundsson', 'Viktor Johansson']
      },
      {
        id: 'nor_nt', name: 'ĐT Na Uy', code: 'NOR', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 82, icon: '🇳🇴', colors: ['#dc2626', '#1e3a8a'], form: 'W-W-L',
        stars: ['Erling Haaland', 'Martin Ødegaard', 'Alexander Sørloth', 'Antonio Nusa', 'Jørgen Strand Larsen', 'Sander Berge', 'Morten Thorsby', 'Julian Ryerson', 'Kristoffer Ajer', 'Leo Østigård', 'Ørjan Nyland']
      },
      {
        id: 'fin_nt', name: 'ĐT Phần Lan', code: 'FIN', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 77, icon: '🇫🇮', colors: ['#1d4ed8', '#0284c7'], form: 'L-W-D',
        stars: ['Teemu Pukki', 'Joel Pohjanpalo', 'Benjamin Källman', 'Oliver Antman', 'Glen Kamara', 'Rasmus Schüller', 'Kaan Kairinen', 'Robert Ivanov', 'Arttu Hoskonen', 'Jere Uronen', 'Lukáš Hrádecký']
      },
      {
        id: 'isl_nt', name: 'ĐT Iceland', code: 'ISL', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 77, icon: '🇮🇸', colors: ['#1d4ed8', '#dc2626'], form: 'W-L-D',
        stars: ['Orri Óskarsson', 'Albert Guðmundsson', 'Andri Guðjohnsen', 'Jón Dagur Þorsteinsson', 'Hákon Arnar Haraldsson', 'Jóhann Berg Guðmundsson', 'Arnór Ingvi Traustason', 'Sverrir Ingi Ingason', 'Victor Pálsson', 'Logi Tómasson', 'Hákon Valdimarsson']
      },
      {
        id: 'cze_nt', name: 'ĐT Cộng hòa Séc', code: 'CZE', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 81, icon: '🇨🇿', colors: ['#dc2626', '#1e3a8a'], form: 'W-D-W',
        stars: ['Patrik Schick', 'Adam Hložek', 'Tomáš Souček', 'Pavel Šulc', 'Václav Černý', 'Tomáš Chorý', 'Lukáš Červ', 'Vladimír Coufal', 'Ladislav Krejčí', 'Martin Vitík', 'Matěj Kovář']
      },
      {
        id: 'svk_nt', name: 'ĐT Slovakia', code: 'SVK', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 80, icon: '🇸🇰', colors: ['#1d4ed8', '#dc2626'], form: 'W-D-W',
        stars: ['Stanislav Lobotka', 'Dávid Hancko', 'Milan Škriniar', 'Lukáš Haraslín', 'Ivan Schranz', 'Ondrej Duda', 'Tomáš Suslov', 'Dávid Strelec', 'Peter Pekarík', 'Denis Vavro', 'Martin Dúbravka']
      },
      {
        id: 'hun_nt', name: 'ĐT Hungary', code: 'HUN', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 80, icon: '🇭🇺', colors: ['#dc2626', '#15803d'], form: 'W-D-L',
        stars: ['Dominik Szoboszlai', 'Barnabás Varga', 'Roland Sallai', 'Milos Kerkez', 'Willi Orbán', 'András Schäfer', 'Ádám Nagy', 'Bendegúz Bolla', 'Attila Fiola', 'Márton Dárdai', 'Péter Gulácsi']
      },
      {
        id: 'rou_nt', name: 'ĐT Romania', code: 'ROU', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 80, icon: '🇷🇴', colors: ['#eab308', '#1d4ed8'], form: 'W-W-W',
        stars: ['Dennis Man', 'Răzvan Marin', 'Radu Drăgușin', 'Nicolae Stanciu', 'Valentin Mihăilă', 'Denis Drăguș', 'Ianis Hagi', 'Marius Marin', 'Andrei Rațiu', 'Nicușor Bancu', 'Florin Niță']
      },
      {
        id: 'gre_nt', name: 'ĐT Hy Lạp', code: 'GRE', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 80, icon: '🇬🇷', colors: ['#1d4ed8', '#0284c7'], form: 'W-W-D',
        stars: ['Vangelis Pavlidis', 'Fotis Ioannidis', 'Christos Tzolis', 'Anastasios Bakasetas', 'Georgios Masouras', 'Manolis Siopis', 'Dimitrios Kourbelis', 'Konstantinos Mavropanos', 'Kostas Tsimikas', 'Lazaros Rota', 'Odysseas Vlachodimos']
      },
      {
        id: 'svn_nt', name: 'ĐT Slovenia', code: 'SVN', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 79, icon: '🇸🇮', colors: ['#0284c7', '#15803d'], form: 'W-D-D',
        stars: ['Benjamin Šeško', 'Jan Oblak', 'Andraž Šporar', 'Jaka Bijol', 'Adam Gnezda Čerin', 'Timi Max Elšnik', 'Petar Stojanović', 'Jan Mlakar', 'Vanja Drkušić', 'Erik Janža', 'Žan Karničnik']
      },
      {
        id: 'alb_nt', name: 'ĐT Albania', code: 'ALB', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 78, icon: '🇦🇱', colors: ['#dc2626', '#18181b'], form: 'W-L-D',
        stars: ['Kristjan Asllani', 'Nedim Bajrami', 'Jasir Asani', 'Mirlind Daku', 'Rey Manaj', 'Qazim Laçi', 'Ylber Ramadani', 'Berat Djimsiti', 'Ardian Ismajli', 'Mario Mitaj', 'Thomas Strakosha']
      },
      {
        id: 'geo_nt', name: 'ĐT Georgia', code: 'GEO', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 80, icon: '🇬🇪', colors: ['#dc2626', '#991b1b'], form: 'W-W-L',
        stars: ['Khvicha Kvaratskhelia', 'Georges Mikautadze', 'Giorgi Mamardashvili', 'Giorgi Chakvetadze', 'Zuriko Davitashvili', 'Giorgi Kochorashvili', 'Otar Kiteishvili', 'Guram Kashia', 'Lasha Dvali', 'Otar Kakabadze', 'Saba Goglichidze']
      },
      {
        id: 'mkd_nt', name: 'ĐT Bắc Macedonia', code: 'MKD', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 76, icon: '🇲🇰', colors: ['#dc2626', '#eab308'], form: 'W-W-D',
        stars: ['Eljif Elmas', 'Enis Bardhi', 'Bojan Miovski', 'Ezģan Alioski', 'Darko Churlinov', 'Isnik Alimi', 'Jani Atanasov', 'Visar Musliu', 'Nikola Serafimov', 'GJoko Zajkov', 'Stole Dimitrievski']
      },
      {
        id: 'bih_nt', name: 'ĐT Bosnia & Herzegovina', code: 'BIH', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 77, icon: '🇧🇦', colors: ['#1d4ed8', '#eab308'], form: 'L-D-L',
        stars: ['Edin Džeko', 'Ermedin Demirović', 'Sead Kolašinac', 'Haris Tabaković', 'Esmir Bajraktarević', 'Benjamin Tahirović', 'Armin Gigović', 'Nikola Katić', 'Adrian Leon Barišić', 'Jusuf Gazibegović', 'Nikola Vasilj']
      },
      {
        id: 'mne_nt', name: 'ĐT Montenegro', code: 'MNE', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 76, icon: '🇲🇪', colors: ['#dc2626', '#eab308'], form: 'L-W-L',
        stars: ['Stevan Jovetić', 'Nikola Krstović', 'Adam Marušić', 'Stefan Savić', 'Marko Janković', 'Driton Camaj', 'Vladimir Jovović', 'Igor Vujačić', 'Risto Radunović', 'Marko Vešović', 'Igor Nikić']
      },
      {
        id: 'bul_nt', name: 'ĐT Bulgaria', code: 'BUL', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 75, icon: '🇧🇬', colors: ['#15803d', '#dc2626'], form: 'D-W-D',
        stars: ['Kiril Despodov', 'Ilia Gruev', 'Filip Krastev', 'Georgi Milanov', 'Aleksandar Kolev', 'Radoslav Kirilov', 'Valentin Antov', 'Simeon Petrov', 'Zhivko Atanasov', 'Viktor Popov', 'Dimitar Mitov']
      },
      {
        id: 'isr_nt', name: 'ĐT Israel', code: 'ISR', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 77, icon: '🇮🇱', colors: ['#0284c7', '#1e3a8a'], form: 'D-L-W',
        stars: ['Oscar Gloukh', 'Manor Solomon', 'Liel Abada', 'Tai Baribo', 'Mohammad Abu Fani', 'Dor Peretz', 'Neta Lavi', 'Eli Dasa', 'Raz Shlomo', 'Sean Goldberg', 'Omri Glazer']
      },
      {
        id: 'kos_nt', name: 'ĐT Kosovo', code: 'KOS', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 77, icon: '🇽🇰', colors: ['#1d4ed8', '#eab308'], form: 'W-W-L',
        stars: ['Edon Zhegrova', 'Vedat Muriqi', 'Milot Rashica', 'Amir Rrahmani', 'Florent Muslija', 'Elvis Rexhbeçaj', 'Valon Berisha', 'Mërgim Vojvoda', 'Fidan Aliti', 'Leart Paqarada', 'Arijanet Muric']
      },
      {
        id: 'arm_nt', name: 'ĐT Armenia', code: 'ARM', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 74, icon: '🇦🇲', colors: ['#dc2626', '#eab308'], form: 'W-L-D',
        stars: ['Eduard Spertsyan', 'Lucas Zelarayán', 'Grant-Leon Ranos', 'Vahan Bichakhchyan', 'Ugochukwu Iwu', 'Artak Dashyan', 'Varazdat Haroyan', 'Georgiy Harutyunyan', 'Nair Tiknizyan', 'Kamo Hovhannisyan', 'Ognjen Čančarević']
      },
      {
        id: 'aze_nt', name: 'ĐT Azerbaijan', code: 'AZE', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 73, icon: '🇦🇿', colors: ['#0284c7', '#16a34a'], form: 'L-D-L',
        stars: ['Renat Dadashov', 'Mahir Emreli', 'Toral Bayramov', 'Emin Mahmudov', 'Ramil Sheydayev', 'Aleksey Isayev', 'Elvin Cafarguliyev', 'Bahlul Mustafazada', 'Badavi Huseynov', 'Abbas Huseynov', 'Mehdi Jannatov']
      },
      {
        id: 'kaz_nt', name: 'ĐT Kazakhstan', code: 'KAZ', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 73, icon: '🇰🇿', colors: ['#0284c7', '#eab308'], form: 'L-D-L',
        stars: ['Bakhtiyor Zaynutdinov', 'Abat Aymbetov', 'Maksim Samorodov', 'Askhat Tagybergen', 'Islambek Kuat', 'Ramazan Orazov', 'Nuraly Alip', 'Marat Bystrov', 'Yan Vorogovskiy', 'Aleksandr Marochkin', 'Igor Shatskiy']
      },
      {
        id: 'cyp_nt', name: 'ĐT Đảo Síp', code: 'CYP', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 72, icon: '🇨🇾', colors: ['#ea580c', '#1e3a8a'], form: 'W-L-L',
        stars: ['Ioannis Pittas', 'Grigoris Kastanos', 'Loizos Loizou', 'Marinos Tzionis', 'Charalampos Charalampous', 'Kostakis Artymatas', 'Stelios Andreou', 'Konstantinos Laifis', 'Nikolas Ioannou', 'Anderson Correia', 'Joel Mall']
      },
      {
        id: 'est_nt', name: 'ĐT Estonia', code: 'EST', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 71, icon: '🇪🇪', colors: ['#0284c7', '#18181b'], form: 'W-D-L',
        stars: ['Karol Mets', 'Karl Jakob Hein', 'Henri Anier', 'Alex Matthias Tamm', 'Martin Miller', 'Mattias Käit', 'Rocco Robert Shein', 'Joonas Tamm', 'Maksim Paskotši', 'Michael Schjønning-Larsen', 'Vlasiy Sinyavskiy']
      },
      {
        id: 'lva_nt', name: 'ĐT Latvia', code: 'LVA', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 71, icon: '🇱🇻', colors: ['#7f1d1d', '#991b1b'], form: 'W-L-D',
        stars: ['Vladislavs Gutkovskis', 'Roberts Uldriķis', 'Jānis Ikaunieks', 'Dario Šits', 'Eduards Dašķevičs', 'Kristers Tobers', 'Andrejs Cigaņiks', 'Raivis Jurkovskis', 'Kaspars Dubra', 'Daniels Balodis', 'Rihards Matrevics']
      },
      {
        id: 'ltu_nt', name: 'ĐT Lithuania', code: 'LTU', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 71, icon: '🇱🇹', colors: ['#eab308', '#15803d'], form: 'L-L-W',
        stars: ['Fedor Černych', 'Gvidas Gineitis', 'Armandas Kučys', 'Paulius Golubickas', 'Justas Lasickas', 'Modestas Vorobjovas', 'Vykintas Slivka', 'Edvinas Girdvainis', 'Kipras Kazukolovas', 'Pijus Širvys', 'Edvinas Gertmonas']
      },
      {
        id: 'lux_nt', name: 'ĐT Luxembourg', code: 'LUX', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 73, icon: '🇱🇺', colors: ['#dc2626', '#38bdf8'], form: 'D-D-L',
        stars: ['Gerson Rodrigues', 'Danel Sinani', 'Leandro Barreiro', 'Mathias Olesen', 'Christopher Martins', 'Sébastien Thill', 'Laurent Jans', 'Maxime Chanot', 'Enes Mahmutovic', 'Mica Pinto', 'Anthony Moris']
      },
      {
        id: 'fro_nt', name: 'ĐT Quần đảo Faroe', code: 'FRO', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 70, icon: '🇫🇴', colors: ['#0284c7', '#dc2626'], form: 'W-D-L',
        stars: ['Viljormur Davidsen', 'Jóannes Bjartalíð', 'Meinhard Olsen', 'Hákun Edmundsson', 'Brandur Hendriksson', 'Sølvi Vatnhamar', 'Gunnar Vatnhamar', 'Odmar Færø', 'Andrias Edmundsson', 'Hanus Sørensen', 'Teitur Gestsson']
      },
      {
        id: 'mlt_nt', name: 'ĐT Malta', code: 'MLT', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 70, icon: '🇲🇹', colors: ['#dc2626', '#991b1b'], form: 'W-W-D',
        stars: ['Teddy Teuma', 'odi Jones', 'Matthew Guillaumier', 'Paul Mbong', 'Joseph Mbong', 'Kyrian Nwoko', 'Ryan Camenzuli', 'Steve Borg', 'Enrico Pepe', 'Kurt Shaw', 'Henry Bonello']
      },
      {
        id: 'mda_nt', name: 'ĐT Moldova', code: 'MDA', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 72, icon: '🇲🇩', colors: ['#1d4ed8', '#eab308'], form: 'W-W-D',
        stars: ['Ion Nicolaescu', 'Oleg Reabciuk', 'Vadim Rață', 'Mihail Caimacov', 'Virgiliu Postolachi', 'Nichita Moțpan', 'Artur Crăciun', 'Vladislav Baboglo', 'Victor Mudrac', 'Ioan-Călin Revenco', 'Dumitru Celeadnic']
      },
      {
        id: 'and_nt', name: 'ĐT Andorra', code: 'AND', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 68, icon: '🇦🇩', colors: ['#1d4ed8', '#eab308'], form: 'L-D-L',
        stars: ['Albert Rosas', 'Márcio Vieira', 'Marc Vales', 'Chus Rubio', 'Joan Cervós', 'Marc Pujol', 'Éric Vales', 'Max Llovera', 'Christian García', 'Moisés San Nicolás', 'Iker Álvarez']
      },
      {
        id: 'lie_nt', name: 'ĐT Liechtenstein', code: 'LIE', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 67, icon: '🇱🇮', colors: ['#1e3a8a', '#dc2626'], form: 'D-L-L',
        stars: ['Dennis Salanović', 'Marcel Büchel', 'Nicolas Hasler', 'Sandro Wieser', 'Aron Sele', 'Simon Lüchinger', 'Ferhat Saglam', 'Maximilian Göppel', 'Lars Traber', 'Martin Marxer', 'Benjamin Büchel']
      },
      {
        id: 'smr_nt', name: 'ĐT San Marino', code: 'SMR', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 66, icon: '🇸🇲', colors: ['#38bdf8', '#0284c7'], form: 'W-L-D',
        stars: ['Nicko Sensoli', 'Nicola Nanni', 'Lorenzo Lazzari', 'Alessandro Golinucci', 'Filippo Berardi', 'Matteo Valli Casadei', 'samuele Zannoni', 'Filippo Fabbri', 'Dante Rossi', 'Mirko Palazzi', 'Edoardo Colombo']
      },
      {
        id: 'gib_nt', name: 'ĐT Gibraltar', code: 'GIB', type: 'nations', league: 'UEFA Euro / World Cup',
        tournaments: ['euro', 'world_cup'], rating: 67, icon: '🇬🇮', colors: ['#dc2626', '#991b1b'], form: 'D-D-W',
        stars: ['Liam Walker', 'Tjay De Barr', 'Roy Chipolina', 'Bernardo Lopes', 'Louie Annesley', 'Ethan Britto', 'Kian Ronan', 'Graeme Torrilla', 'Nicholas Pozo', 'Jayce Olivero', 'Bradley Banda']
      },
      {
        id: 'chn_nt', name: 'ĐT Trung Quốc', code: 'CHN', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 76, icon: '🇨🇳', colors: ['#dc2626', '#eab308'], form: 'W-W-L',
        stars: ['Wu Lei', 'Zhang Yuning', 'Behram Abduweli', 'Wei Shihao', 'Fernandinho', 'Wang Shangyuan', 'Li Yuanyi', 'Xie Wenneng', 'Jiang Guangtai', 'Zhu Chenjie', 'Wang Dalei']
      },
      {
        id: 'uae_nt', name: 'ĐT UAE', code: 'UAE', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 77, icon: '🇦🇪', colors: ['#dc2626', '#15803d'], form: 'W-D-W',
        stars: ['Yahya Al-Ghassani', 'Fábio Lima', 'Caio Canedo', 'Harib Abdalla', 'Ali Saleh', 'Tahnoon Al-Zaabi', 'Abdullah Hamad', 'Khalifa Al-Hammadi', 'Kouame Autonne', 'Khaled Al-Dhanhani', 'Khalid Eisa']
      },
      {
        id: 'jor_nt', name: 'ĐT Jordan', code: 'JOR', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 78, icon: '🇯🇴', colors: ['#dc2626', '#18181b'], form: 'W-W-D',
        stars: ['Mousa Al-Tamari', 'Yazan Al-Naimat', 'Ali Olwan', 'Mahmoud Al-Mardi', 'Nizar Al-Rashdan', 'Noor Al-Rawabdeh', 'Ehsan Haddad', 'Yazan Al-Arab', 'Abdallah Nasib', 'Mohammad Abu Hasheesh', 'Yazeed Abulaila']
      },
      {
        id: 'oma_nt', name: 'ĐT Oman', code: 'OMA', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 76, icon: '🇴🇲', colors: ['#dc2626', '#15803d'], form: 'W-L-W',
        stars: ['Muhsen Al-Ghassani', 'Issam Al-Sabhi', 'Abdulrahman Al-Mushaifri', 'Salaah Al-Yahyaei', 'Harib Al-Saadi', 'Jameel Al-Yahmadi', 'Arshad Al-Alawi', 'Ahmed Al-Khamisi', 'Mohammed Al-Musalami', 'Ali Al-Busaidi', 'Ibrahim Al-Mukhaini']
      },
      {
        id: 'bhr_nt', name: 'ĐT Bahrain', code: 'BHR', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 76, icon: '🇧🇭', colors: ['#dc2626', '#991b1b'], form: 'D-W-L',
        stars: ['Mohamed Marhoon', 'Kamil Al-Aswad', 'Mahdi Abduljabbar', 'Ali Madan', 'Abbas Al-Asfoor', 'Moses Atede', 'Sayed Dhiya Saeed', 'Amine Benaddi', 'Waleed Al-Hayam', 'Abdulla Al-Khulasi', 'Ebrahim Lutfalla']
      },
      {
        id: 'syr_nt', name: 'ĐT Syria', code: 'SYR', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 75, icon: '🇸🇾', colors: ['#dc2626', '#18181b'], form: 'W-D-L',
        stars: ['Omar Khribin', 'Pablo Sabbag', 'Ibrahim Hesar', 'Mahmoud Al-Mawas', 'Ezequiel Ham', 'Elmar Abraham', 'Jalil Elías', 'Aiham Ousou', 'Thaer Krouma', 'Moayad Ajan', 'Esteban Glellel']
      },
      {
        id: 'pal_nt', name: 'ĐT Palestine', code: 'PLE', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 75, icon: '🇵🇸', colors: ['#15803d', '#dc2626'], form: 'D-D-L',
        stars: ['Wessam Abou Ali', 'Oday Dabbagh', 'Zaid Qunbar', 'Tamer Seyam', 'Musab Al-Battat', 'Oday Kharoub', 'Ataa Jaber', 'Yaser Hamed', 'Michel Termanini', 'Camilo Saldaña', 'Rami Hamadeh']
      },
      {
        id: 'lbn_nt', name: 'ĐT Lebanon', code: 'LBN', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 73, icon: '🇱🇧', colors: ['#dc2626', '#15803d'], form: 'W-D-L',
        stars: ['Hassan Maatouk', 'Bassel Jradi', 'Omar Bugiel', 'Karim Darwich', 'Nader Matar', 'Walid Shour', 'Jihad Ayoub', 'Kassem El Zein', 'Nour Mansour', 'Hussein Zein', 'Mostafa Matar']
      },
      {
        id: 'kuw_nt', name: 'ĐT Kuwait', code: 'KUW', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 72, icon: '🇰🇼', colors: ['#0284c7', '#15803d'], form: 'D-L-D',
        stars: ['Yousef Nasser', 'Mohammad Daham', 'Shabaib Al-Khaldi', 'Sultan Al-Enezi', 'Redha Hani', 'Athbi Saleh', 'Faisal Zayid', 'Khaled Ebrahim', 'Fahad Al-Hajeri', 'Sami Al-Sanea', 'Sulaiman Abdulghafour']
      },
      {
        id: 'yem_nt', name: 'ĐT Yemen', code: 'YEM', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 70, icon: '🇾🇪', colors: ['#dc2626', '#18181b'], form: 'D-W-L',
        stars: ['Abdulwasea Al-Matari', 'Nasser Al-Gahwashi', 'Ahmed Maher', 'Omar Al-Dahi', 'Osamah Anbar', 'Hamza Hanash', 'Harwan Al-Zubaidi', 'Mudir Al-Radaei', 'Rami Al-Wasmani', 'Al-Khader Al-Douh', 'Abdullah Al-Arashi']
      },
      {
        id: 'ind_nt', name: 'ĐT Ấn Độ', code: 'IND', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 72, icon: '🇮🇳', colors: ['#0284c7', '#ea580c'], form: 'D-D-L',
        stars: ['Lallianzuala Chhangte', 'Manvir Singh', 'Liston Colaco', 'Brandon Fernandes', 'Suresh Singh Wangjam', 'Apuia Ralte', 'Jeakson Singh', 'Sandesh Jhingan', 'Rahul Bheke', 'Anwar Ali', 'Gurpreet Singh Sandhu']
      },
      {
        id: 'kgz_nt', name: 'ĐT Kyrgyzstan', code: 'KGZ', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 74, icon: '🇰🇬', colors: ['#dc2626', '#eab308'], form: 'W-L-L',
        stars: ['Joel Kojo', 'Gulzhigit Alykulov', 'Kai Merk', 'Odilzhon Abdurakhmanov', 'Alimardon Shukurov', 'Eldiyar Zarypbekov', 'Valery Kichin', 'Tamirlan Kozubaev', 'Khristiyan Brauzman', 'Kayrat Zhyrgalbek uulu', 'Erzhan Tokotayev']
      },
      {
        id: 'tjk_nt', name: 'ĐT Tajikistan', code: 'TJK', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 74, icon: '🇹🇯', colors: ['#15803d', '#dc2626'], form: 'W-D-L',
        stars: ['Shahrom Samiev', 'Rustam Soirov', 'Alisher Dzhalilov', 'Parvizdzhon Umarbayev', 'Ehson Panjshanbe', 'Amadoni Kamolov', 'Vahdat Hanonov', 'Zoir Dzhuraboyev', 'Manuchekhr Safarov', 'Akhtam Nazarov', 'Rustam Yatimov']
      },
      {
        id: 'tkm_nt', name: 'ĐT Turkmenistan', code: 'TKM', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 71, icon: '🇹🇲', colors: ['#15803d', '#065f46'], form: 'D-L-W',
        stars: ['Ruslan Mingazow', 'Altymyrat Annadurdyýew', 'Elman Tagaýew', 'Şanazar Tirkişow', 'Ahmet Ataýew', 'Mirza Beknazarow', 'Güýçmyrat Annagulyýew', 'Mekan Saparow', 'Abdy Bäşimow', 'Röwşengeldi Halmämmedow', 'Rasul Çaryýew']
      },
      {
        id: 'afg_nt', name: 'ĐT Afghanistan', code: 'AFG', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 69, icon: '🇦🇫', colors: ['#dc2626', '#15803d'], form: 'W-L-D',
        stars: ['Fareed Sadat', 'Omran Haydary', 'Jabar Sharza', 'Rahmat Akbari', 'Zelfy Nazary', 'Taufee Skandari', 'Sharif Mukhammad', 'Mahboob Hanifi', 'Najim Haidary', 'Habibulla Askar', 'Ovays Azizi']
      },
      {
        id: 'prk_nt', name: 'ĐT CHDCND Triều Tiên', code: 'PRK', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 75, icon: '🇰🇵', colors: ['#dc2626', '#1d4ed8'], form: 'D-D-L',
        stars: ['Han Kwang-song', 'Ri Jo-guk', 'Jong Il-gwan', 'Kang Kuk-chol', 'Paek Chung-song', 'Ri Il-song', 'Choe Ok-chol', 'Jang Kuk-chol', 'Kim Yu-song', 'Kim Pom-hyok', 'Kang Ju-hyok']
      },
      {
        id: 'hkg_nt', name: 'ĐT Hồng Kông', code: 'HKG', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 71, icon: '🇭🇰', colors: ['#dc2626', '#991b1b'], form: 'W-W-W',
        stars: ['Everton Camargo', 'Matt Orr', 'Michael Udebuluzor', 'Juninho', 'Philip Chan Siu Kwan', 'Tan Chun Lok', 'Wu Chun Ming', 'Shinichi Chan', 'Oliver Gerbig', 'Vas Nuñez', 'Yapp Hung Fai']
      },
      {
        id: 'tpe_nt', name: 'ĐT Đài Loan', code: 'TPE', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 69, icon: '🇹🇼', colors: ['#1d4ed8', '#dc2626'], form: 'L-W-L',
        stars: ['Ange Kouamé', 'Yu Yao-hsing', 'Chen Po-liang', 'Wu Yen-shu', 'Miguel Sandberg', 'Wen Chih-hao', 'Emilio Estevez', 'Chen Ting-yang', 'Wang Jian-ming', 'Fong Shao-chi', 'Pan Wen-chieh']
      },
      {
        id: 'mng_nt', name: 'ĐT Mông Cổ', code: 'MNG', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 65, icon: '🇲🇳', colors: ['#dc2626', '#1d4ed8'], form: 'W-L-L',
        stars: ['Dulguun Amaraa', 'Naranbold Nyam-Osor', 'Ganbold Ganbayar', 'Tsend-Ayush Khurelbaatar', 'Gerelt-Od Bat-Orgil', 'Baljinnyam Batbold', 'Munkh-Orgil Orkhon', 'Bilguun Ganbold', 'Davaadelger Oktabri', 'Filip Chinzorig', 'Munkh-Erdene Enkhtaivan']
      },
      {
        id: 'mac_nt', name: 'ĐT Ma Cao', code: 'MAC', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 64, icon: '🇲🇴', colors: ['#15803d', '#065f46'], form: 'L-L-D',
        stars: ['Niki Torrão', 'Leong Ka Hang', 'Pang Chi Hang', 'Lam Ka Seng', 'Cheong Hoi San', 'Ng Wa Keng', 'Filipe Duarte', 'Chan Man', 'Kam Chi Hou', 'Amâncio Goitia', 'Ho Man Fai']
      },
      {
        id: 'gum_nt', name: 'ĐT Guam', code: 'GUM', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 65, icon: '🇬🇺', colors: ['#1d4ed8', '#dc2626'], form: 'L-W-L',
        stars: ['Marcus Lopez', 'Jason Cunliffe', 'John Matkin', 'Oz Rocca', 'Devan Mendiola', 'yle Halehale', 'Isiah Lagutang', 'Shane Healy', 'Travis Nicklaw', 'Nate Lee', 'Dallas Jaye']
      },
      {
        id: 'phi_nt', name: 'ĐT Philippines', code: 'PHI', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asean_cup', 'asian_cup', 'world_cup'], rating: 73, icon: '🇵🇭', colors: ['#1d4ed8', '#dc2626'], form: 'W-D-L',
        stars: ['Gerrit Holtmann', 'Bjørn Martin Kristensen', 'Patrick Reichelt', 'Dylan Demuynck', 'Alex Monis', 'Sandro Reyes', 'Kevin Ingresso', 'Zico Bailey', 'Jefferson Tabinas', 'Amani Aguinaldo', 'Neil Etheridge']
      },
      {
        id: 'sin_nt', name: 'ĐT Singapore', code: 'SGP', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asean_cup', 'asian_cup', 'world_cup'], rating: 72, icon: '🇸🇬', colors: ['#dc2626', '#991b1b'], form: 'W-D-L',
        stars: ['Ikhsan Fandi', 'Shawal Anuar', 'Faris Ramli', 'Glenn Kweh', 'Song Ui-young', 'Hariss Harun', 'Shah Shahiran', 'Kyoga Nakamura', 'Safuwan Baharudin', 'Irfan Fandi', 'Izwan Mahbud']
      },
      {
        id: 'mya_nt', name: 'ĐT Myanmar', code: 'MYA', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asean_cup', 'asian_cup', 'world_cup'], rating: 70, icon: '🇲🇲', colors: ['#dc2626', '#eab308'], form: 'D-W-L',
        stars: ['Maung Maung Lwin', 'Aung Kaung Mann', 'Than Paing', 'Lwin Moe Aung', 'Zaw Win Thein', 'Kyaw Min Oo', 'Wai Lin Aung', 'Hein Phyo Win', 'Soe Moe Kyaw', 'Nanda Kyaw', 'Kyaw Zin Phyo']
      },
      {
        id: 'cam_nt', name: 'ĐT Campuchia', code: 'CAM', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asean_cup', 'asian_cup', 'world_cup'], rating: 70, icon: '🇰🇭', colors: ['#1e3a8a', '#dc2626'], form: 'W-D-L',
        stars: ['Sieng Chanthea', 'Nick Taylor', 'Sa Ty', 'Min Ratanak', 'Lim Pisoth', 'Yudai Ogawa', 'Orn Chanpolin', 'Kan Mo', 'Soeuy Visal', 'Sareth Krya', 'Vireak Dara']
      },
      {
        id: 'lao_nt', name: 'ĐT Lào', code: 'LAO', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asean_cup', 'asian_cup', 'world_cup'], rating: 68, icon: '🇱🇦', colors: ['#dc2626', '#1e3a8a'], form: 'D-L-D',
        stars: ['Bounphachan Bounkong', 'Chony Wenpaserth', 'Peter Phanthavong', 'Phoutthasay Khochalern', 'Damoth Thongkhamsavath', 'Phousomboun Panyavong', 'Anantaza Siphongphan', 'Phetdavanh Somsanid', 'Phoutthavong Sangvilay', 'Xeedee Pomsavanh', 'Xaysavath Souvanhansok']
      },
      {
        id: 'bru_nt', name: 'ĐT Brunei', code: 'BRU', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asean_cup', 'asian_cup', 'world_cup'], rating: 67, icon: '🇧🇳', colors: ['#eab308', '#18181b'], form: 'W-W-L',
        stars: ['Hakeme Yazid Said', 'Adi Said', 'Razimie Ramlli', 'Nazirrudin Ismail', 'Azwan Ali Rahman', 'Hendra Azam Idris', 'Nurikhwan Othman', 'Yura Indera Putera', 'Abdul Mu\'iz Sisa', 'Najib Tarif', 'Haimie Anak Nyaring']
      },
      {
        id: 'tls_nt', name: 'ĐT Đông Timor', code: 'TLS', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asean_cup', 'asian_cup', 'world_cup'], rating: 67, icon: '🇹🇱', colors: ['#dc2626', '#18181b'], form: 'W-D-L',
        stars: ['João Pedro', 'Zenivio', 'Mouzinho', 'Gali Freitas', 'Elias Mesquita', 'Jhon Frith', 'Kornelis Nahak', 'Filomeno Junior', 'Anizo Correia', 'Yohanes Gusmão', 'Junildo Pereira']
      },
      {
        id: 'ban_nt', name: 'ĐT Bangladesh', code: 'BAN', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 68, icon: '🇧🇩', colors: ['#15803d', '#dc2626'], form: 'W-L-D',
        stars: ['Rakib Hossain', 'Shekh Morsalin', 'Foysal Ahmed Fahim', 'Jamal Bhuyan', 'Mohammad Ridoy', 'Sohel Rana', 'Topu Barman', 'Tariq Kazi', 'Isa Faysal', 'Saad Uddin', 'Mitul Marma']
      },
      {
        id: 'mdv_nt', name: 'ĐT Maldives', code: 'MDV', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 68, icon: '🇲🇻', colors: ['#dc2626', '#15803d'], form: 'W-L-W',
        stars: ['Ali Fasir', 'Hamza Mohamed', 'Hassan Naiz', 'Ibrahim Mahudhee', 'Hussain Nihan', 'Aisam Ibrahim', 'Samooh Ali', 'Hussain Sifaau', 'Haisham Hassan', 'Ahnaf Rasheed', 'Hussain Shareef']
      },
      {
        id: 'nep_nt', name: 'ĐT Nepal', code: 'NEP', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 68, icon: '🇳🇵', colors: ['#dc2626', '#1d4ed8'], form: 'W-D-L',
        stars: ['Anjan Bista', 'Gillespye Jung Karki', 'Manish Dangi', 'Ayush Ghalan', 'Laken Limbu', 'Arik Bista', 'Rohit Chand', 'Ananta Tamang', 'Sanish Shrestha', 'Abhishek Limbu', 'Kiran Chemjong']
      },
      {
        id: 'bhu_nt', name: 'ĐT Bhutan', code: 'BHU', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 66, icon: '🇧🇹', colors: ['#ea580c', '#eab308'], form: 'D-L-W',
        stars: ['Chencho Gyeltshen', 'Dawa Tshering', 'Nima Wangdi', 'Tshelthrim Namgyel', 'Kinga Wangchuk', 'Pema Dhendup', 'Tenzin Norbu', 'Yeshi Dorji', 'Sherub Dorji', 'Tenzin Dorji', 'Tshering Dendup']
      },
      {
        id: 'sri_nt', name: 'ĐT Sri Lanka', code: 'SRI', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 67, icon: '🇱🇰', colors: ['#eab308', '#7f1d1d'], form: 'W-D-W',
        stars: ['Oliver Kelaart', 'Wade Dekker', 'Dillon De Silva', 'Leon Perera', 'Adhavan Rajamohan', 'Sam Durrant', 'Claudio Matthias', 'Jack Hingert', 'Jason Thayaparan', 'Harsha Fernando', 'Sujan Perera']
      },
      {
        id: 'pak_nt', name: 'ĐT Pakistan', code: 'PAK', type: 'nations', league: 'AFC Asian Cup / World Cup',
        tournaments: ['asian_cup', 'world_cup'], rating: 66, icon: '🇵🇰', colors: ['#15803d', '#065f46'], form: 'L-D-L',
        stars: ['Otis Khan', 'Fareed Ullah', 'McKeal Abdullah', 'Harun Hamid', 'Rahis Nabi', 'Alamgir Ghazi', 'Easah Suliman', 'Abdullah Iqbal', 'Mamoon Moosa Khan', 'Rao Umar Hayat', 'Yousuf Butt']
      },
      {
        id: 'ecu_nt', name: 'ĐT Ecuador', code: 'ECU', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 83, icon: '🇪🇨', colors: ['#eab308', '#1d4ed8'], form: 'W-W-D',
        stars: ['Enner Valencia', 'Moisés Caicedo', 'Piero Hincapié', 'Willian Pacho', 'Pervis Estupiñán', 'Gonzalo Plata', 'Jeremy Sarmiento', 'Kendry Páez', 'Alan Franco', 'Ángelo Preciado', 'Hernán Galíndez']
      },
      {
        id: 'par_nt', name: 'ĐT Paraguay', code: 'PAR', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 81, icon: '🇵🇾', colors: ['#dc2626', '#1d4ed8'], form: 'W-W-D',
        stars: ['Miguel Almirón', 'Julio Enciso', 'Antonio Sanabria', 'Ramón Sosa', 'Diego Gómez', 'Andrés Cubas', 'Mathías Villasanti', 'Gustavo Gómez', 'Omar Alderete', 'Junior Alonso', 'Roberto Fernández']
      },
      {
        id: 'ven_nt', name: 'ĐT Venezuela', code: 'VEN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 80, icon: '🇻🇪', colors: ['#7f1d1d', '#eab308'], form: 'D-D-L',
        stars: ['Salomón Rondón', 'Yeferson Soteldo', 'Jefferson Savarino', 'Darwin Machís', 'Yangel Herrera', 'José Andrés Martínez', 'Telasco Segovia', 'Jon Aramburu', 'Yordan Osorio', 'Nahuel Ferraresi', 'Rafael Romo']
      },
      {
        id: 'chi_nt', name: 'ĐT Chile', code: 'CHI', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 79, icon: '🇨🇱', colors: ['#dc2626', '#1d4ed8'], form: 'W-D-L',
        stars: ['Eduardo Vargas', 'Arturo Vidal', 'Alexis Sánchez', 'Ben Brereton Díaz', 'Darío Osorio', 'Rodrigo Echeverría', 'Vicente Pizarro', 'Paulo Díaz', 'Guillermo Maripán', 'Gabriel Suazo', 'Brayan Cortés']
      },
      {
        id: 'per_nt', name: 'ĐT Peru', code: 'PER', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 78, icon: '🇵🇪', colors: ['#dc2626', '#991b1b'], form: 'D-L-W',
        stars: ['Paolo Guerrero', 'Gianluca Lapadula', 'Edison Flores', 'Bryan Reyna', 'Wilder Cartagena', 'Sergio Peña', 'Renato Tapia', 'Luis Advíncula', 'Alexander Callens', 'Carlos Zambrano', 'Pedro Gallese']
      },
      {
        id: 'bol_nt', name: 'ĐT Bolivia', code: 'BOL', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 77, icon: '🇧🇴', colors: ['#15803d', '#eab308'], form: 'W-L-D',
        stars: ['Miguel Terceros', 'Carmelo Algarañaz', 'Ramiro Vaca', 'Roberto Fernández', 'Gabriel Villamíl', 'Robson Matheus', 'Lucas Chávez', 'Luis Haquín', 'Marcelo Suárez', 'Diego Medina', 'Guillermo Viscarra']
      },
      {
        id: 'mex_nt', name: 'ĐT Mexico', code: 'MEX', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 82, icon: '🇲🇽', colors: ['#15803d', '#dc2626'], form: 'W-W-L',
        stars: ['Raúl Jiménez', 'Santiago Giménez', 'Edson Álvarez', 'César Huerta', 'Alexis Vega', 'Orbelín Pineda', 'Luis Romo', 'Johan Vásquez', 'César Montes', 'Jesús Gallardo', 'Luis Malagón']
      },
      {
        id: 'can_nt', name: 'ĐT Canada', code: 'CAN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 81, icon: '🇨🇦', colors: ['#dc2626', '#991b1b'], form: 'W-W-D',
        stars: ['Alphonso Davies', 'Jonathan David', 'Cyle Larin', 'Jacob Shaffelburg', 'Stephen Eustáquio', 'Ismaël Koné', 'Ali Ahmed', 'Moïse Bombito', 'Derek Cornelius', 'Alistair Johnston', 'Maxime Crépeau']
      },
      {
        id: 'crc_nt', name: 'ĐT Costa Rica', code: 'CRC', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 77, icon: '🇨🇷', colors: ['#dc2626', '#1e3a8a'], form: 'D-W-L',
        stars: ['Manfred Ugalde', 'Alonso Martínez', 'Warren Madrigal', 'Joel Campbell', 'Brandon Aguilera', 'Jefferson Brenes', 'Ariel Lassiter', 'Francisco Calvo', 'Jeyland Mitchell', 'Juan Pablo Vargas', 'Patrick Sequeira']
      },
      {
        id: 'pan_nt', name: 'ĐT Panama', code: 'PAN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 78, icon: '🇵🇦', colors: ['#dc2626', '#1d4ed8'], form: 'W-D-L',
        stars: ['José Fajardo', 'Adalberto Carrasquilla', 'Yoel Bárcenas', 'Puma Rodríguez', 'Aníbal Godoy', 'Cristian Martínez', 'Michael Amir Murillo', 'José Córdoba', 'Fidel Escobar', 'Éric Davis', 'Orlando Mosquera']
      },
      {
        id: 'jam_nt', name: 'ĐT Jamaica', code: 'JAM', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 77, icon: '🇯🇲', colors: ['#eab308', '#15803d'], form: 'D-W-L',
        stars: ['Michail Antonio', 'Leon Bailey', 'Demarai Gray', 'Bobby De Cordova-Reid', 'Shamar Nicholson', 'Kasey Palmer', 'Joel Latibeaudiere', 'Ethan Pinnock', 'Di\'Shon Bernard', 'Greg Leigh', 'Andre Blake']
      },
      {
        id: 'hon_nt', name: 'ĐT Honduras', code: 'HON', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 75, icon: '🇭🇳', colors: ['#0284c7', '#1d4ed8'], form: 'W-D-L',
        stars: ['Luis Palma', 'Antony Lozano', 'Jorge Álvarez', 'Edwin Rodríguez', 'Kervin Arriaga', 'Deiby Flores', 'Rigoberto Rivas', 'Denil Maldonado', 'Luis Vega', 'Joseph Rosales', 'Edrick Menjívar']
      },
      {
        id: 'slv_nt', name: 'ĐT El Salvador', code: 'SLV', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 72, icon: '🇸🇻', colors: ['#1d4ed8', '#0284c7'], form: 'W-W-L',
        stars: ['Nelson Bonilla', 'Brayan Gil', 'Jairo Henríquez', 'Nathan Ordaz', 'Narciso Orellana', 'Christian Martínez', 'Darwin Cerén', 'Julio Sibrián', 'Jorge Cruz', 'Alexander Larín', 'Mario González']
      },
      {
        id: 'gua_nt', name: 'ĐT Guatemala', code: 'GUA', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 73, icon: '🇬🇹', colors: ['#38bdf8', '#0284c7'], form: 'W-W-L',
        stars: ['Nathaniel Mendez-Laing', 'Rubio Rubin', 'Oscar Santis', 'Alejandro Galindo', 'Óscar Castellanos', 'Marco Domínguez', 'Aaron Herrera', 'Nicolás Samayoa', 'José Pinto', 'José Ardón', 'Nicholas Hagen']
      },
      {
        id: 'tri_nt', name: 'ĐT Trinidad & Tobago', code: 'TRI', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 72, icon: '🇹🇹', colors: ['#dc2626', '#18181b'], form: 'W-D-L',
        stars: ['Levi García', 'Real Gill', 'Ryan Telfer', 'Ajani Fortune', 'Daniel Phillips', 'Andre Rampersad', 'Steffen Yeates', 'Aubrey David', 'Alvin Jones', 'Shannon Gomez', 'Denzil Smith']
      },
      {
        id: 'hti_nt', name: 'ĐT Haiti', code: 'HAI', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 74, icon: '🇭🇹', colors: ['#1d4ed8', '#dc2626'], form: 'W-W-W',
        stars: ['Duckens Nazon', 'Frantzdy Pierrot', 'Fafà Picault', 'Deedson Louicius', 'Danley Jean Jacques', 'Carl Fred Sainté', 'Leverton Pierre', 'Ricardo Adé', 'Jean-Kévin Duverne', 'Carlens Arcus', 'Johny Placide']
      },
      {
        id: 'cur_nt', name: 'ĐT Curaçao', code: 'CUW', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 73, icon: '🇨🇼', colors: ['#1d4ed8', '#eab308'], form: 'W-W-D',
        stars: ['Juninho Bacuna', 'Leandro Bacuna', 'Gervane Kastaneer', 'Rangelo Janga', 'Kenji Gorré', 'Jearl Margaritha', 'Kevin Felida', 'Cuco Martina', 'Sherel Floranus', 'Jurien Gaari', 'Eloy Room']
      },
      {
        id: 'sur_nt', name: 'ĐT Suriname', code: 'SUR', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 73, icon: '🇸🇷', colors: ['#15803d', '#dc2626'], form: 'W-D-L',
        stars: ['Sheraldo Becker', 'Gleofilo Vlijter', 'Virgil Misidjan', 'Immanuel Pherai', 'Denzel Jubitana', 'Kenneth Paal', 'Dion Malone', 'Shaquille Pinas', 'Stefano Denswil', 'Liam van Gelderen', 'Etienne Vaessen']
      },
      {
        id: 'nic_nt', name: 'ĐT Nicaragua', code: 'NCA', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 71, icon: '🇳🇮', colors: ['#1d4ed8', '#0284c7'], form: 'W-L-D',
        stars: ['Ariagner Smith', 'Jaime Moreno', 'Bancy Hernández', 'Widman Talavera', 'Matías Belli Moldskred', 'Barrera', 'Jason Coronel', 'Marvin Fletes', 'Josué Quijano', 'Oscar Acevedo', 'Miguel Rodríguez']
      },
      {
        id: 'cub_nt', name: 'ĐT Cuba', code: 'CUB', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 70, icon: '🇨🇺', colors: ['#1d4ed8', '#dc2626'], form: 'D-D-L',
        stars: ['Luis Paradela', 'Onel Hernández', 'Maykel Reyes', 'Daniel Díaz', 'Karel Espino', 'Yunior Pérez', 'Reydel Sánchez', 'Yosel Piedra', 'Cavafe', 'Orlando Calvo', 'Raiko Arozarena']
      },
      {
        id: 'dom_nt', name: 'ĐT Cộng hòa Dominica', code: 'DOM', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 71, icon: '🇩🇴', colors: ['#1d4ed8', '#dc2626'], form: 'W-W-W',
        stars: ['Junior Firpo', 'Dorny Romero', 'Ronaldo Vásquez', 'Heinz Mörschel', 'Edison Azcona', 'Jean Carlos López', 'Lucas Bretón', 'Luiyi de Lucas', 'Joao Urbáez', 'Michael Sambataro', 'Xavier Valdez']
      },
      {
        id: 'guy_nt', name: 'ĐT Guyana', code: 'GUY', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 69, icon: '🇬🇾', colors: ['#15803d', '#eab308'], form: 'W-L-L',
        stars: ['Omari Glasgow', 'Isaiah Jones', 'Deon Moore', 'Stephen Duke-McKenna', 'Elliot Bonds', 'Nathan Moriah-Welsh', 'Liam Gordon', 'Jalen Jones', 'Reiss Greenidge', 'Colin Nelson', 'Quillan Roberts']
      },
      {
        id: 'ATG_nt', name: 'ĐT Antigua & Barbuda', code: 'ATG', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 67, icon: '🇦🇬', colors: ['#dc2626', '#18181b'], form: 'L-L-D',
        stars: ['TJ Bramble', 'Javorn Stevens', 'Raheem Deterville', 'D\'Andre Bishop', 'Quinton Griffith', 'Dion Pereira', 'Kendukar Challenger', 'Krystian Pearce', 'Vashami Allen', 'Zafique Drew', 'Zaieem Scott']
      },
      {
        id: 'skn_nt', name: 'ĐT Saint Kitts & Nevis', code: 'SKN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 67, icon: '🇰🇳', colors: ['#15803d', '#dc2626'], form: 'W-D-L',
        stars: ['Romaine Sawyers', 'Omari Sterling-James', 'Tiquanny Williams', 'Harry Panayiotou', 'Tyrese Shade', 'Yohannes Mitchum', 'Malahki Krigger', 'Andre Burley', 'Lois Maynard', 'Ordell Flemming', 'Julani Archibald']
      },
      {
        id: 'lca_nt', name: 'ĐT Saint Lucia', code: 'LCA', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 67, icon: '🇱🇨', colors: ['#38bdf8', '#eab308'], form: 'L-W-L',
        stars: ['Caniggia Elva', 'Dominic Poleon', 'Reeco Hackett-Fairchild', 'Ridel Stanislas', 'Lester Joseph', 'Leaus Henville', 'Melvin Doxilly', 'Terell Thomas', 'Kurt Frederick', 'Alvinus Myers', 'Vino Barclett']
      },
      {
        id: 'vin_nt', name: 'ĐT Saint Vincent & Grenadines', code: 'VIN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 67, icon: '🇻🇨', colors: ['#eab308', '#15803d'], form: 'W-W-L',
        stars: ['Oalex Anderson', 'Cornelius Stewart', 'Diel Spring', 'Shakeem Adams', 'Steven Pierre', 'Kennijha Joseph', 'Bishon Richards', 'Tristan Marshall', 'Najima Burgin', 'Jamol Yorke', 'Lemus Christopher']
      },
      {
        id: 'grn_nt', name: 'ĐT Grenada', code: 'GRN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 67, icon: '🇬🇩', colors: ['#dc2626', '#eab308'], form: 'D-W-L',
        stars: ['Regan Charles-Cook', 'Myles Hippolyte', 'Lucas Akins', 'Jermaine Francis', 'Saydrel Lewis', 'Darius Johnson', 'Kayden Harrack', 'Omar Beckles', 'Josh Gabriel', 'Benjamin Ettienne', 'Jason Belfon']
      },
      {
        id: 'brb_nt', name: 'ĐT Barbados', code: 'BRB', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 66, icon: '🇧🇧', colors: ['#1e3a8a', '#eab308'], form: 'W-W-W',
        stars: ['Niall Reid-Stephen', 'Thierry Gale', 'Tajio James', 'Omani Leacock', 'Hadan Holligan', 'Sheran Hoyte', 'Ackeel Applewhaite', 'Andre Applewhaite', 'Ricardio Morris', 'Mario Williams', 'Liam Brathwaite']
      },
      {
        id: 'ber_nt', name: 'ĐT Bermuda', code: 'BER', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 68, icon: '🇧🇲', colors: ['#dc2626', '#1e3a8a'], form: 'W-W-L',
        stars: ['Nahki Wells', 'Kane Crichlow', 'Zeiko Lewis', 'Djair Parfitt-Williams', 'Reggie Lambe', 'Keishon Bean', 'Willie Clemons', 'Dante Leverock', 'Harry Twite', 'Reese Jones', 'Dale Eve']
      },
      {
        id: 'blz_nt', name: 'ĐT Belize', code: 'BLZ', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 66, icon: '🇧🇿', colors: ['#1d4ed8', '#dc2626'], form: 'W-D-W',
        stars: ['Carlos Bernárdez', 'Krisean Lopez', 'Michael Salazar', 'Jordy Polanco', 'Darrel Myvett', 'Nana Mensah', 'Warren Moss', 'Eugene Martínez', 'Deshawon Nembhard', 'Evral Trapp', 'Charles Tillett']
      },
      {
        id: 'pue_nt', name: 'ĐT Puerto Rico', code: 'PUR', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 68, icon: '🇵🇷', colors: ['#dc2626', '#1d4ed8'], form: 'W-L-W',
        stars: ['Leandro Antonetti', 'Wilfredo Rivera', 'Gerald Díaz', 'Ricardo Rivera', 'Jeremy de León', 'Isaac Angking', 'Darren Ríos', 'Nicolas Cardona', 'Rodolfo Sulia', 'Zarek Valentin', 'Joel Serrano']
      },
      {
        id: 'egy_nt', name: 'ĐT Ai Cập', code: 'EGY', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 83, icon: '🇪🇬', colors: ['#dc2626', '#18181b'], form: 'W-W-D',
        stars: ['Mohamed Salah', 'Omar Marmoush', 'Mostafa Mohamed', 'Trézéguet', 'Zizo', 'Emam Ashour', 'Marwan Attia', 'Hamdy Fathy', 'Ramy Rabia', 'Mohamed Abdelmonem', 'Mohamed El Shenawy']
      },
      {
        id: 'nga_nt', name: 'ĐT Nigeria', code: 'NGA', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 84, icon: '🇳🇬', colors: ['#15803d', '#065f46'], form: 'W-D-W',
        stars: ['Victor Osimhen', 'Ademola Lookman', 'Victor Boniface', 'Samuel Chukwueze', 'Moses Simon', 'Alex Iwobi', 'Wilfred Ndidi', 'Frank Onyeka', 'William Troost-Ekong', 'Calvin Bassey', 'Stanley Nwabali']
      },
      {
        id: 'civ_nt', name: 'ĐT Bờ Biển Ngà', code: 'CIV', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 83, icon: '🇨🇮', colors: ['#ea580c', '#15803d'], form: 'W-W-L',
        stars: ['Sébastien Haller', 'Simon Adingra', 'Nicolas Pépé', 'Oumar Diakité', 'Evann Guessand', 'Franck Kessié', 'Seko Fofana', 'Jean-Philippe Krasso', 'Evan Ndicka', 'Odilon Kossounou', 'Yahia Fofana']
      },
      {
        id: 'alg_nt', name: 'ĐT Algeria', code: 'ALG', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 82, icon: '🇩🇿', colors: ['#15803d', '#16a34a'], form: 'W-W-D',
        stars: ['Riyad Mahrez', 'Mohamed Amoura', 'Amine Gouiri', 'Saïd Benrahma', 'Baghdad Bounedjah', 'Ismaël Bennacer', 'Hicham Boudaoui', 'Ramiz Zerrouki', 'Rayan Aït-Nouri', 'Aïssa Mandi', 'Alexis Guendouz']
      },
      {
        id: 'tun_nt', name: 'ĐT Tunisia', code: 'TUN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 80, icon: '🇹🇳', colors: ['#dc2626', '#991b1b'], form: 'W-D-L',
        stars: ['Youssef Msakni', 'Elias Achouri', 'Seifeddine Jaziri', 'Aïssa Laïdouni', 'Ellyes Skhiri', 'Hannibal Mejbri', 'Mohamed Ali Ben Romdhane', 'Montassar Talbi', 'Yassine Meriah', 'Ali Abdi', 'Amanallah Memmiche']
      },
      {
        id: 'cmr_nt', name: 'ĐT Cameroon', code: 'CMR', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 81, icon: '🇨🇲', colors: ['#15803d', '#dc2626'], form: 'W-D-W',
        stars: ['Bryan Mbeumo', 'Vincent Aboubakar', 'Christian Bassogog', 'Georges-Kévin Nkoudou', 'André-Frank Zambo Anguissa', 'Carlos Baleba', 'Martin Hongla', 'Christopher Wooh', 'Michael Ngadeu', 'Nouhou Tolo', 'André Onana']
      },
      {
        id: 'mli_nt', name: 'ĐT Mali', code: 'MLI', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 80, icon: '🇲🇱', colors: ['#15803d', '#eab308'], form: 'W-W-D',
        stars: ['Yves Bissouma', 'Amadou Haidara', 'Mohamed Camara', 'El Bilal Touré', 'Lassine Sinayoko', 'Kamory Doumbia', 'Nene Dorgeles', 'Aliou Dieng', 'Hamari Traoré', 'Sikou Niakhaté', 'Djigui Diarra']
      },
      {
        id: 'gha_nt', name: 'ĐT Ghana', code: 'GHA', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 80, icon: '🇬🇭', colors: ['#eab308', '#dc2626'], form: 'D-L-L',
        stars: ['Mohammed Kudus', 'Antoine Semenyo', 'Iñaki Williams', 'Jordan Ayew', 'Abdul Fatawu', 'Thomas Partey', 'Elisha Owusu', 'Mohammed Salisu', 'Alexander Djiku', 'Tariq Lamptey', 'Lawrence Ati-Zigi']
      },
      {
        id: 'RSA_nt', name: 'ĐT Nam Phi', code: 'RSA', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 79, icon: '🇿🇦', colors: ['#eab308', '#15803d'], form: 'W-W-D',
        stars: ['Percy Tau', 'Lyle Foster', 'Oswin Appollis', 'Iqraam Rayners', 'Themba Zwane', 'Teboho Mokoena', 'Sphephelo Sithole', 'Mothobi Mvala', 'Siyabonga Ngezana', 'Aubrey Modiba', 'Ronwen Williams']
      },
      {
        id: 'cod_nt', name: 'ĐT CHDC Congo', code: 'COD', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 79, icon: '🇨🇩', colors: ['#0284c7', '#eab308'], form: 'W-W-L',
        stars: ['Yoane Wissa', 'Simon Banza', 'Meschak Elia', 'Théo Bongonda', 'Fiston Mayele', 'Chancel Mbemba', 'Charles Pickel', 'Edo Kayembe', 'Samuel Moutoussamy', 'Arthur Masuaku', 'Dimitry Bertaud']
      },
      {
        id: 'bfa_nt', name: 'ĐT Burkina Faso', code: 'BFA', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 78, icon: '🇧🇫', colors: ['#dc2626', '#15803d'], form: 'W-W-L',
        stars: ['Bertrand Traoré', 'Dango Ouattara', 'Lassina Traoré', 'Ousseni Bouda', 'Edmond Tapsoba', 'Gustavo Sangaré', 'Blati Touré', 'Sacha Bansé', 'Issa Kaboré', 'Steeve Yago', 'Hervé Koffi']
      },
      {
        id: 'gab_nt', name: 'ĐT Gabon', code: 'GAB', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 77, icon: '🇬🇦', colors: ['#15803d', '#eab308'], form: 'W-W-L',
        stars: ['Pierre-Emerick Aubameyang', 'Denis Bouanga', 'Jim Allevinah', 'Shavy Babicka', 'Mario Lemina', 'Guélor Kanga', 'Didier Ndong', 'Aaron Appindangoyé', 'Bruno Ecuele Manga', 'Jacques Ekomié', 'Loyce Mbaba']
      },
      {
        id: 'gui_nt', name: 'ĐT Guinea', code: 'GUI', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 78, icon: '🇬🇳', colors: ['#dc2626', '#eab308'], form: 'W-W-L',
        stars: ['Serhou Guirassy', 'Mohamed Bayo', 'François Kamano', 'Morlaye Sylla', 'Aguibou Camara', 'Abdoulaye Touré', 'Mory Konaté', 'Mouctar Diakhaby', 'Saidou Sow', 'Issiaga Sylla', 'Ibrahim Koné']
      },
      {
        id: 'ang_nt', name: 'ĐT Angola', code: 'ANG', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 78, icon: '🇦🇴', colors: ['#dc2626', '#18181b'], form: 'W-W-D',
        stars: ['Gelson Dala', 'Mabululu', 'Zito Luvumbo', 'M\'Bala Nzola', 'Randy Nteka', 'Show', 'Fredy', 'Maestro', 'Kialonda Gaspar', 'Clinton Mata', 'Neblú']
      },
      {
        id: 'zmb_nt', name: 'ĐT Zambia', code: 'ZAM', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 76, icon: '🇿🇲', colors: ['#15803d', '#ea580c'], form: 'W-W-D',
        stars: ['Patson Daka', 'Fashion Sakala', 'Lameck Banda', 'Kennedy Musonda', 'Kings Kangwa', 'Emmanuel Banda', 'Kelvin Kampamba', 'Stoppila Sunzu', 'Frankie Musonda', 'Lubambo Musonda', 'Toaster Nsabata']
      },
      {
        id: 'cpv_nt', name: 'ĐT Cape Verde', code: 'CPV', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 76, icon: '🇨🇻', colors: ['#1d4ed8', '#dc2626'], form: 'W-L-D',
        stars: ['Ryan Mendes', 'Jovane Cabral', 'Garry Rodrigues', 'Dailon Livramento', 'Jamiro Monteiro', 'Kevin Pina', 'Deroy Duarte', 'Logan Costa', 'Roberto Lopes', 'Steven Moreira', 'Bruno Varela']
      },
      {
        id: 'eqg_nt', name: 'ĐT Guinea Xích Đạo', code: 'EQG', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 76, icon: '🇬🇶', colors: ['#dc2626', '#15803d'], form: 'W-W-D',
        stars: ['Emilio Nsue', 'Iban Salvador', 'Dorian Hanza', 'Luis Asué', 'Pedro Obiang', 'Federico Bikoro', 'Pablo Ganet', 'Saúl Coco', 'Esteban Orozco', 'Basilio Ndong', 'Jesús Owono']
      },
      {
        id: 'ben_nt', name: 'ĐT Benin', code: 'BEN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 75, icon: '🇧🇯', colors: ['#eab308', '#15803d'], form: 'W-L-D',
        stars: ['Steve Mounié', 'Jodel Dossou', 'Junior Olaitan', 'Andréas Hountondji', 'Sessi D\'Almeida', 'Hassane Imourane', 'Dokou Dodo', 'Olivier Verdon', 'Cédric Hountondji', 'Mohamed Tijani', 'Marcel Dandjinou']
      },
      {
        id: 'uga_nt', name: 'ĐT Uganda', code: 'UGA', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 75, icon: '🇺🇬', colors: ['#eab308', '#dc2626'], form: 'W-W-L',
        stars: ['Rogers Mato', 'Denis Omedi', 'Travis Mutyaba', 'create Shaban', 'Khalid Aucho', 'Ronald Ssekiganda', 'Allan Okello', 'Bevis Mugabi', 'Halid Lwaliwa', 'Aziz Kayondo', 'Isima Watenga']
      },
      {
        id: 'ken_nt', name: 'ĐT Kenya', code: 'KEN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 74, icon: '🇰🇪', colors: ['#dc2626', '#15803d'], form: 'D-L-D',
        stars: ['Michael Olunga', 'Jonah Ayunga', 'John Avire', 'Richard Odada', 'Teddy Akumu', 'Timothy Ouma', 'Duke Abuya', 'Joseph Okumu', 'Daniel Anyembe', 'Eric Ouma', 'Byrne Omondi']
      },
      {
        id: 'tza_nt', name: 'ĐT Tanzania', code: 'TAN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 74, icon: '🇹🇿', colors: ['#15803d', '#0284c7'], form: 'W-W-L',
        stars: ['Mbwana Samatta', 'Simon Msuva', 'Clement Mzize', 'Feisal Salum', 'Novatus Miroshi', 'Mudathir Yahya', 'Himid Mao', 'Bakari Mwamnyeto', 'Ibrahim Hamad', 'Mohamed Hussein', 'Ally Salim']
      },
      {
        id: 'moz_nt', name: 'ĐT Mozambique', code: 'MOZ', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 74, icon: '🇲🇿', colors: ['#dc2626', '#15803d'], form: 'W-D-L',
        stars: ['Geny Catamo', 'Stanley Ratifo', 'Witi', 'Gildo Vilanculos', 'Guima', 'Alfons Amade', 'Dominguez', 'Reinildo Mandava', 'Mexer', 'Bruno Langa', 'Ernan Siluane']
      },
      {
        id: 'mad_nt', name: 'ĐT Madagascar', code: 'MAD', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 73, icon: '🇲🇬', colors: ['#dc2626', '#15803d'], form: 'D-L-L',
        stars: ['Rayan Raveloson', 'Loïc Lapoussin', 'Njiva Rakotoharimalala', 'Caddy Warren', 'Ibrahim Amada', 'Marco Ilaimaharitra', 'Clément Couturier', 'Thomas Fontaine', 'Jean-Pierre Morgan', 'Romain Métanire', 'Melvin Adrien']
      },
      {
        id: 'zim_nt', name: 'ĐT Zimbabwe', code: 'ZIM', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 74, icon: '🇿🇼', colors: ['#eab308', '#15803d'], form: 'W-W-D',
        stars: ['Khama Billiat', 'Tino Kadewere', 'Walter Musona', 'Tawanda Chirewa', 'Marshall Munetsi', 'Marvelous Nakamba', 'Andy Rinomhota', 'Jordan Zemura', 'Munashe Garananga', 'Teenage Hadebe', 'Washington Arubi']
      },
      {
        id: 'nam_nt', name: 'ĐT Namibia', code: 'NAM', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 73, icon: '🇳🇦', colors: ['#1d4ed8', '#dc2626'], form: 'L-L-D',
        stars: ['Peter Shalulile', 'Deon Hotto', 'Prins Tjiueza', 'Bethuel Muzeu', 'Aprocius Petrus', 'Ngero Katua', 'Moses Shidolo', 'Ryan Nyambe', 'Kennedy Amutenya', 'Riaan Hanamub', 'Lloyd Kazapua']
      },
      {
        id: 'mwi_nt', name: 'ĐT Malawi', code: 'MWI', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 72, icon: '🇲🇼', colors: ['#dc2626', '#18181b'], form: 'L-D-W',
        stars: ['Gabadinho Mhango', 'Chawanangwa Kaonga', 'Lanjesi Nkhoma', 'Patrick Mwaungulu', 'John Banda', 'Chimwemwe Idana', 'Robert Saizi', 'Dennis Chembezi', 'Nickson Mwase', 'Gomezgani Chirwa', 'William Thole']
      },
      {
        id: 'rwa_nt', name: 'ĐT Rwanda', code: 'RWA', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 73, icon: '🇷🇼', colors: ['#0284c7', '#eab308'], form: 'W-L-W',
        stars: ['Innocent Nshuti', 'Gilbert Mugisha', 'Jojea Kwizera', 'Djihad Bizimana', 'Bonheur Mugisha', 'Kevin Muhire', 'Thierry Manzi', 'Ange Mutsinzi', 'Fitina Omborenga', 'Emmanuel Imanishimwe', 'Fiacre Ntwari']
      },
      {
        id: 'bdi_nt', name: 'ĐT Burundi', code: 'BDI', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 72, icon: '🇧🇮', colors: ['#dc2626', '#15803d'], form: 'L-D-L',
        stars: ['Sadio Berahino', 'Bienvenue Kanakimana', 'Mohamed Amissi', 'Sullymani Eldhino', 'Youssouf Ndayishimiye', 'Christophe Nduwarugira', 'Gael Bigirimana', 'Frédéric Nsabiyumva', 'Marco Weymans', 'Omar Moussa', 'Mattéo Nkurunziza']
      },
      {
        id: 'eth_nt', name: 'ĐT Ethiopia', code: 'ETH', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 71, icon: '🇪🇹', colors: ['#15803d', '#eab308'], form: 'L-L-W',
        stars: ['Abubeker Nassir', 'Chernet Gugsa', 'Canaan Markneh', 'Gatoch Panom', 'Surafel Dagnachew', 'Amanuel Yohannes', 'Wogene Gezahegn', 'Yared Bayeh', 'Ramkel James', 'Suleman Hamid', 'Seid Habtamu']
      },
      {
        id: 'sdn_nt', name: 'ĐT Sudan', code: 'SDN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 73, icon: '🇸🇩', colors: ['#dc2626', '#15803d'], form: 'W-D-L',
        stars: ['Mohamed Abdelrahman', 'Saif Terry', 'Abo Eisa', 'Abuaagla Abdalla', 'Walieldin Khedr', 'Abdelrazig Omer', 'Salah Adil', 'Mustafa Karshoum', 'Bakhit Khamis', 'Ramadan Agab', 'Mohamed Mustafa']
      },
      {
        id: 'lby_nt', name: 'ĐT Libya', code: 'LBY', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 73, icon: '🇱🇾', colors: ['#18181b', '#15803d'], form: 'L-W-D',
        stars: ['Ahmed Ekrawa', 'Faisal Al-Badri', 'Omar Al-Khoja', 'Osama Al-Shreimy', 'Daniel Elfadli', 'Moatasem Sabbou', 'Sanad Al-Warfali', 'Ali Youssef', 'Subhi Al-Mabrouk', 'Majdi Artiba', 'Murad Al-Wuheeshi']
      },
      {
        id: 'mrt_nt', name: 'ĐT Mauritania', code: 'MTN', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 74, icon: '🇲🇷', colors: ['#15803d', '#eab308'], form: 'W-L-D',
        stars: ['Aboubakary Koïta', 'Pape Ibnou Ba', 'Sidi Bouna Amar', 'Souleymane Anne', 'Mouhsine Bodda', 'Guessouma Fofana', 'Oumar Ngom', 'Lamine Ba', 'Aly Abeid', 'Ibrahima Keita', 'Babacar Niasse']
      },
      {
        id: 'gmb_nt', name: 'ĐT Gambia', code: 'GAM', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 75, icon: '🇬🇲', colors: ['#dc2626', '#1d4ed8'], form: 'W-D-W',
        stars: ['Yankuba Minteh', 'Musa Barrow', 'Alieu Fadera', 'Ali Sowe', 'Abdoulie Ceesay', 'Ebrima Adams', 'Alasanna Manneh', 'Omar Colley', 'James Gomez', 'Ibou Touray', 'Ebrima Jarju']
      },
      {
        id: 'gnb_nt', name: 'ĐT Guinea-Bissau', code: 'GNB', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 74, icon: '🇬🇼', colors: ['#dc2626', '#eab308'], form: 'D-L-D',
        stars: ['Mama Baldé', 'Beto', 'Franculino Djú', 'Zé Turbo', 'Carlos Mané', 'Alfa Semedo', 'Janio Bikel', 'Dálcio', 'Opa Sanganté', 'Fali Candé', 'Manuel Baldé']
      },
      {
        id: 'sle_nt', name: 'ĐT Sierra Leone', code: 'SLE', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 73, icon: '🇸🇱', colors: ['#15803d', '#0284c7'], form: 'W-L-D',
        stars: ['Augustus Kargbo', 'Amadou Bakayoko', 'Alhassan Koroma', 'Mustapha Bundu', 'Hindolo Mustapha', 'Alusine Koroma', 'Abu Dumbuya', 'Emmanuel Samadia', 'Abdul Kabia', 'Osman Kakay', 'Francis Koroma']
      },
      {
        id: 'lbr_nt', name: 'ĐT Liberia', code: 'LBR', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 71, icon: '🇱🇷', colors: ['#dc2626', '#1d4ed8'], form: 'L-W-L',
        stars: ['Terry Sackor', 'William Gibson', 'Oscar Dorley', 'Nohan Kenneh', 'Murphy Dorley', 'Sheikh Sesay', 'abdulai Bility', 'Sampson Dweh', 'Prince Balde', 'Mark Pabai', 'Abdulai Koulibaly']
      },
      {
        id: 'tog_nt', name: 'ĐT Togo', code: 'TOG', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 74, icon: '🇹🇬', colors: ['#eab308', '#15803d'], form: 'D-L-W',
        stars: ['Kévin Denkey', 'Kodjo Fo-Doh Laba', 'Ihlas Bebou', 'Khaled Narey', 'Karim Dermane', 'Roger Aholou', 'Alaixys Romao', 'Djené Dakonam', 'Kennedy Boateng', 'Youssifou Atte', 'Geoffrey Agbolossou']
      },
      {
        id: 'nig_nt', name: 'ĐT Niger', code: 'NIG', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 72, icon: '🇳🇪', colors: ['#ea580c', '#15803d'], form: 'W-W-D',
        stars: ['Daniel Sosah', 'Victorien Adebayor', 'Boubacar Hainikoye', 'Youssouf Oumarou', 'Ousmane Diabaté', 'Boureima Katkoré', 'Abdoul Moumouni', 'Najeeb Yakubu', 'Oumar Sako', 'Abdel Rahim Alhassane', 'Mahamadou Tanja']
      },
      {
        id: 'cta_nt', name: 'ĐT Cộng hòa Trung Phi', code: 'CTA', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 72, icon: '🇨🇫', colors: ['#1d4ed8', '#eab308'], form: 'L-L-L',
        stars: ['Louis Mafouta', 'Goduine Koyalipou', 'Karl Namnganda', 'Vénuste Baboula', 'Geoffrey Kondogbia', 'Brad Pirioua', 'Solet Bomawoko', 'Amos Youga', 'Flory Yangao', 'freeman Niamathe', 'Dominique Youfeigane']
      },
      {
        id: 'cgo_nt', name: 'ĐT Cộng hòa Congo', code: 'CGO', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 73, icon: '🇨🇬', colors: ['#15803d', '#dc2626'], form: 'D-L-W',
        stars: ['Silvère Ganvoula', 'Mons Bassouamina', 'Prestige Mboungou', 'Chandrel Massanga', 'Antoine Makoumbou', 'Gaius Makouta', 'Nolan Mbemba', 'Bryan Passi', 'Yhoan Andzouana', 'Morgan Poaty', 'Trey Vimalin']
      },
      {
        id: 'cha_nt', name: 'ĐT Chad', code: 'CHA', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 69, icon: '🇹🇩', colors: ['#1e3a8a', '#eab308'], form: 'D-L-D',
        stars: ['Marius Mouandilmadji', 'Casimir Ninga', 'Amine Hiver', 'Mahamat Thiam', 'Éric Mbangossoum', 'Sindou Yeo', 'Charles Tchouplaou', 'Ahmat Abderamane', 'Haroun Tchaouna', 'Wiliam Damba', 'Jourdain Mbaynaissem']
      },
      {
        id: 'bot_nt', name: 'ĐT Botswana', code: 'BOT', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 72, icon: '🇧🇼', colors: ['#38bdf8', '#18181b'], form: 'W-W-D',
        stars: ['Tumisang Orebonye', 'Thabang Sesinyi', 'Kabelo Seakanyeng', 'Gape Mohutsiwa', 'Gilbert Baruti', 'Lebogang Ditsele', 'Thatayaone Ditlhokwe', 'Mosha Gaolaolwe', 'Tebogo Kopelang', 'Kitso Mangolo', 'Goitseone Phoko']
      },
      {
        id: 'lso_nt', name: 'ĐT Lesotho', code: 'LES', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 70, icon: '🇱🇸', colors: ['#1d4ed8', '#15803d'], form: 'L-D-W',
        stars: ['Sera Motebang', 'Jane Thabantšo', 'Neo Mokhachane', 'Tshwarelo Bereng', 'Lehlohonolo Fothoane', 'Tšepo Toloane', 'Thabo Makhele', 'Rethabile Rasethuntša', 'Fusi Matlabe', 'Thabang Malane', 'Sekhoane Moerane']
      },
      {
        id: 'swz_nt', name: 'ĐT Eswatini', code: 'SWZ', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 69, icon: '🇸🇿', colors: ['#1d4ed8', '#eab308'], form: 'W-D-L',
        stars: ['Sabelo Ndzinisa', 'Justice Figuareido', 'Bongwa Matsebula', 'Neliswa Dlamini', 'Sifiso Matse', 'Mzwandile Mabelesa', 'Kwakhe Thwala', 'Lindo Mkhonta', 'Mxolisi Manana', 'Gift Gamedze', 'Xolani Gama']
      },
      {
        id: 'com_nt', name: 'ĐT Comoros', code: 'COM', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 74, icon: '🇰🇲', colors: ['#15803d', '#eab308'], form: 'W-W-D',
        stars: ['Myziane Maolida', 'Rafiki Saïd', 'Faïz Selemani', 'El Fardou Ben Nabouhane', 'Youssouf M\'Changama', 'Zaydou Youssouf', 'Yacine Bourhane', 'Warmed Omari', 'Abdel-Hakim Abdallah', 'Saïd Bakari', 'Yannick Pandor']
      },
      {
        id: 'nzl_nt', name: 'ĐT New Zealand', code: 'NZL', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 77, icon: '🇳🇿', colors: ['#18181b', '#475569'], form: 'W-W-W',
        stars: ['Chris Wood', 'Ben Waine', 'Kosta Barbarouses', 'Elijah Just', 'Marko Stamenic', 'Sarpreet Singh', 'Matthew Garbett', 'Liberato Cacace', 'Michael Boxall', 'Nando Pijnaker', 'Max Crocombe']
      },
      {
        id: 'fij_nt', name: 'ĐT Fiji', code: 'FIJ', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 69, icon: '🇫🇯', colors: ['#38bdf8', '#1e3a8a'], form: 'W-D-W',
        stars: ['Roy Krishna', 'Thomas Dunn', 'Sairusi Nalaubu', 'Nabil Begg', 'Tevita Waranaivalu', 'Setareki Hughes', 'Dave Radrigai', 'Scott Wara', 'Filipe Baravilala', 'Sterling Vasconcellos', 'Isikeli Sevanaia']
      },
      {
        id: 'tah_nt', name: 'ĐT Tahiti', code: 'TAH', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 68, icon: '🇵🇫', colors: ['#dc2626', '#991b1b'], form: 'W-W-L',
        stars: ['Teaonui Tehau', 'Benoît Mathon', 'Roonui Tinirauarii', 'Heimano Bourebare', 'Kavai\'ei Morgant', 'Tauhiti Keck', 'Matatia Paama', 'Tevaitini Teumere', 'Pothin Poma', 'Eddy Kaspard', 'Teave Teamotuaitau']
      },
      {
        id: 'png_nt', name: 'ĐT Papua New Guinea', code: 'PNG', type: 'nations', league: 'FIFA World Cup',
        tournaments: ['world_cup'], rating: 68, icon: '🇵🇬', colors: ['#dc2626', '#18181b'], form: 'D-L-W',
        stars: ['Raymond Gunemba', 'Tommy Semmy', 'Ati Kepo', 'Kolu Kepo', 'Emmanuel Simon', 'Yagi Yasasa', 'Daniel Joe', 'Alwin Komolong', 'Felix Komolong', 'Godfrey Haro', 'Ronald Warisan']
      }
    ];

    // =========================================================================
    // 3. SOUND ENGINE (WEB AUDIO API SYNTHESIZER)
    // =========================================================================
    const SoundFX = {
      ctx: null,
      enabled: true,
      init() {
        if (!this.ctx) {
          const AudioCtx = window.AudioContext || window.webkitAudioContext;
          if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
      },
      tone(freq, duration = 0.08, type = 'sine', gainVal = 0.12) {
        if (!this.enabled) return;
        try {
          this.init();
          if (!this.ctx) return;
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = type;
          osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
          gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start();
          osc.stop(this.ctx.currentTime + duration);
        } catch (e) {}
      },
      click() { this.tone(520, 0.05, 'triangle', 0.1); },
      kick() { this.tone(180, 0.09, 'sine', 0.22); },
      netSwish() { this.tone(320, 0.14, 'sawtooth', 0.08); },
      whistle() {
        this.tone(2600, 0.14, 'square', 0.09);
        setTimeout(() => this.tone(2750, 0.24, 'square', 0.1), 150);
      },
      goal() {
        [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
          setTimeout(() => this.tone(f, 0.18, 'triangle', 0.16), i * 95);
        });
      },
      winExact() {
        [587.33, 739.99, 880, 1174.66].forEach((f, i) => {
          setTimeout(() => this.tone(f, 0.2, 'sine', 0.18), i * 110);
        });
      }
    };

    // =========================================================================
    // 2B. 100% OFFLINE VECTOR TEAM LOGOS & NATIONAL FLAGS ENGINE (338 TEAMS)
    // =========================================================================
    const OFFLINE_LOGO_CACHE = {};

    // Authentic vector flag patterns for National Teams (100% offline SVG Data URI)
    function buildNationalFlagSvgDataUri(team) {
      const code = (team.code || 'FIFA').toUpperCase();
      const c1 = (team.colors && team.colors[0]) || '#dc2626';
      const c2 = (team.colors && team.colors[1]) || '#eab308';
      let innerSvg = '';

      if (code === 'VIE') {
        // Authentic Vietnam Red Flag with Golden 5-Pointed Star
        innerSvg = `
          <rect width="160" height="110" rx="14" fill="#da251d"/>
          <polygon points="80,22 88,48 115,48 93,64 101,90 80,74 59,90 67,64 45,48 72,48" fill="#ffff00"/>
        `;
      } else if (code === 'JPN') {
        innerSvg = `<rect width="160" height="110" rx="14" fill="#ffffff"/><circle cx="80" cy="55" r="30" fill="#bc002d"/>`;
      } else if (code === 'KOR') {
        innerSvg = `<rect width="160" height="110" rx="14" fill="#ffffff"/><circle cx="80" cy="55" r="28" fill="#cd2e3a"/><path d="M52,55 A14,14 0 0,0 80,55 A14,14 0 0,1 108,55 A28,28 0 0,1 52,55 Z" fill="#0047a0"/>`;
      } else if (code === 'THA' || code === 'CRC') {
        innerSvg = `
          <rect width="160" height="110" rx="14" fill="#a51931"/>
          <rect y="18" width="160" height="74" fill="#f4f5f8"/>
          <rect y="36" width="160" height="38" fill="#2d2a4a"/>
        `;
      } else if (code === 'IDN' || code === 'POL' || code === 'MON' || code === 'SGP') {
        innerSvg = `
          <rect width="160" height="110" rx="14" fill="#ffffff"/>
          <rect width="160" height="55" rx="10" fill="#ce1126"/>
        `;
      } else if (code === 'ARG' || code === 'URU') {
        innerSvg = `
          <rect width="160" height="110" rx="14" fill="#74acdf"/>
          <rect y="36" width="160" height="38" fill="#ffffff"/>
          <circle cx="80" cy="55" r="11" fill="#f6b40e"/>
        `;
      } else if (code === 'BRA') {
        innerSvg = `
          <rect width="160" height="110" rx="14" fill="#009c3b"/>
          <polygon points="80,14 144,55 80,96 16,55" fill="#ffdf00"/>
          <circle cx="80" cy="55" r="22" fill="#002776"/>
        `;
      } else if (code === 'FRA' || code === 'ITA' || code === 'BEL' || code === 'IRL' || code === 'MEX' || code === 'NGA' || code === 'CIV' || code === 'SEN' || code === 'MLI' || code === 'GUI' || code === 'ROU' || code === 'CMR') {
        const midColor = (code === 'BEL' || code === 'ROU' || code === 'CMR' || code === 'SEN' || code === 'MLI' || code === 'GUI') ? '#facc15' : '#ffffff';
        innerSvg = `
          <rect width="160" height="110" rx="14" fill="${c1}"/>
          <rect x="53" width="54" height="110" fill="${midColor}"/>
          <rect x="107" width="53" height="110" rx="10" fill="${c2}"/>
        `;
      } else if (code === 'GER' || code === 'ESP' || code === 'NED' || code === 'COL' || code === 'RUS' || code === 'HUN' || code === 'BUL' || code === 'AUT' || code === 'CRO' || code === 'SRB' || code === 'EGY' || code === 'IRQ' || code === 'SYR' || code === 'YEM' || code === 'IRN' || code === 'IND' || code === 'GHA') {
        const midColor = (code === 'ESP' || code === 'COL' || code === 'GER') ? c2 : '#ffffff';
        const botColor = (code === 'GER' || code === 'ESP') ? c1 : c2;
        innerSvg = `
          <rect width="160" height="110" rx="14" fill="${c1}"/>
          <rect y="36" width="160" height="38" fill="${midColor}"/>
          <rect y="74" width="160" height="36" rx="10" fill="${botColor}"/>
        `;
      } else if (code === 'ENG' || code === 'GEO') {
        innerSvg = `
          <rect width="160" height="110" rx="14" fill="#ffffff"/>
          <rect x="68" width="24" height="110" fill="#ce1126"/>
          <rect y="43" width="160" height="24" fill="#ce1126"/>
        `;
      } else if (code === 'SWE' || code === 'DEN' || code === 'NOR' || code === 'FIN' || code === 'ISL' || code === 'SUI') {
        innerSvg = `
          <rect width="160" height="110" rx="14" fill="${c1}"/>
          <rect x="52" width="20" height="110" fill="${c2 === c1 ? '#ffffff' : c2}"/>
          <rect y="45" width="160" height="20" fill="${c2 === c1 ? '#ffffff' : c2}"/>
        `;
      } else {
        // Universal crisp national flag with diagonal/bicolor bands + ISO badge & emoji emblem
        innerSvg = `
          <defs>
            <linearGradient id="fg_${team.id}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="${c1}"/>
              <stop offset="100%" stop-color="${c2}"/>
            </linearGradient>
          </defs>
          <rect width="160" height="110" rx="14" fill="url(#fg_${team.id})"/>
          <path d="M0,78 L160,32 L160,110 L0,110 Z" fill="rgba(0,0,0,0.22)"/>
          <circle cx="80" cy="44" r="21" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.45)" stroke-width="2"/>
          <text x="80" y="51" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-weight="900" font-size="18" fill="#ffffff">${code}</text>
        `;
      }

      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 110">
        ${innerSvg}
        <rect x="2" y="2" width="156" height="106" rx="13" fill="none" stroke="rgba(255,255,255,0.45)" stroke-width="4"/>
        <rect x="44" y="82" width="72" height="22" rx="6" fill="rgba(2,6,23,0.82)" stroke="rgba(255,255,255,0.4)" stroke-width="1.5"/>
        <text x="80" y="97" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-weight="900" font-size="13" fill="#fde047" letter-spacing="1">${code}</text>
      </svg>`;
      return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    }

    // Authentic Heraldic Club Crest SVG Data URI (100% offline, tailored per club with stripes, crown/star & official colors)
    function buildHeraldicCrestSvgDataUri(team) {
      const c1 = (team.colors && team.colors[0]) || '#10b981';
      const c2 = (team.colors && team.colors[1]) || '#0284c7';
      const code = (team.code || team.name.slice(0, 4)).toUpperCase();
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
        <defs>
          <linearGradient id="cg_${team.id}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${c1}"/>
            <stop offset="100%" stop-color="${c2}"/>
          </linearGradient>
          <clipPath id="sc_${team.id}">
            <path d="M60 8 L104 23 L104 61 C104 88 83 106 60 113 C37 106 16 88 16 61 L16 23 Z"/>
          </clipPath>
        </defs>
        <g clip-path="url(#sc_${team.id})">
          <rect width="120" height="120" fill="url(#cg_${team.id})"/>
          <rect x="28" width="16" height="120" fill="${c2}" fill-opacity="0.45"/>
          <rect x="60" width="16" height="120" fill="${c2}" fill-opacity="0.45"/>
          <rect x="92" width="16" height="120" fill="${c2}" fill-opacity="0.45"/>
          <path d="M0 24 L120 24" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
        </g>
        <path d="M60 8 L104 23 L104 61 C104 88 83 106 60 113 C37 106 16 88 16 61 L16 23 Z" fill="none" stroke="#fde047" stroke-width="4.5"/>
        <path d="M60 14 L98 27 L98 60 C98 83 80 99 60 105 C40 99 22 83 22 60 L22 27 Z" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.8"/>
        <circle cx="60" cy="40" r="14" fill="rgba(2,6,23,0.55)" stroke="#fde047" stroke-width="2"/>
        <polygon points="60,29 63,36 71,36 65,41 67,48 60,44 53,48 55,41 49,36 57,36" fill="#fde047"/>
        <rect x="18" y="61" width="84" height="25" rx="6" fill="rgba(2,6,23,0.88)" stroke="#fde047" stroke-width="1.8"/>
        <text x="60" y="78" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-weight="900" font-size="${code.length > 4 ? 13 : 15}" fill="#ffffff" letter-spacing="0.8">${code}</text>
      </svg>`;
      return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    }

    function getTeamLogoUrl(team) {
      if (!team) return '';
      if (!OFFLINE_LOGO_CACHE[team.id]) {
        OFFLINE_LOGO_CACHE[team.id] = team.type === 'nations'
          ? buildNationalFlagSvgDataUri(team)
          : buildHeraldicCrestSvgDataUri(team);
      }
      return OFFLINE_LOGO_CACHE[team.id];
    }

    function getTeamLogoHtml(team, sizeClass = 'w-6 h-6') {
      const url = getTeamLogoUrl(team);
      const isFlag = team.type === 'nations';
      const fitClass = isFlag ? 'object-contain rounded-md drop-shadow' : 'object-contain drop-shadow';
      return `<img src="${url}" alt="${team.name}" class="${sizeClass} ${fitClass} shrink-0" />`;
    }


    // =========================================================================
    // 4. GAME STATE (STRICT PER-TOURNAMENT ISOLATION & BALL-INTO-NET PHYSICS)
    // =========================================================================
    const state = {
      groupFilter: 'all',        // 'all' | 'vleague' | 'clubs' | 'nations'
      activeTournamentId: 'vleague1', // Active strictly-isolated tournament
      roundNumber: 1,
      homeTeam: TEAMS_DB[0],
      awayTeam: TEAMS_DB[1],
      predHome: 2,
      predAway: 1,
      predOutcome: 'home', // 'home' (Chủ thắng) | 'draw' (Hòa) | 'away' (Khách thắng)
      activeGroupFilter: 'ALL',
      focusedTeamId: null,
      focusedGroup: 'A',
      groupFixturesByTourney: {},
      fifaFilter: 'nations',
      fifaPointsMap: {},
      fifaLastDeltaMap: {},
      phase: 'predicting',       // 'predicting' | 'simulating' | 'finished'
      simInterval: null,
      goalPopupTimeout: null,
      speedMultiplier: 1,        // 1 = Chuẩn (1p/Hiệp = 2p trận chính, 30s Hiệp phụ), 4 = 4x, 12 = 12x

      // Live Simulation State
      liveHomeGoals: 0,
      liveAwayGoals: 0,
      targetHomeGoals: 0,
      targetAwayGoals: 0,
      stageIndex: 0,
      isKnockoutMatch: false,
      penHome: null,
      penAway: null,
      standingsByTourney: {},
      inExtraTime: false,
      halfTimeAnnounced: false,
      simMinute: 0,
      simElapsedSec: 0,
      scheduledEvents: [],

      // Ball & Shot-Into-Net Animation State
      ballPos: { x: 0.5, y: 0.5, vx: 0.007, vy: 0.005 },
      ballTrail: [],
      shotAnim: {
        active: false,
        phase: 'none', // 'flying' | 'in_net'
        side: 'home',  // 'home' shoots into right net (x ~ 0.965), 'away' shoots into left net (x ~ 0.035)
        startX: 0.5,
        startY: 0.5,
        targetX: 0.968,
        targetY: 0.5,
        progress: 0,
        netHoldFrames: 0,
        netRipple: 0,
        particles: [],
        scorerName: ''
      },
      players: [],
      goalFlashTimer: 0,

      // Persistent Player Stats
      points: 0,
      streak: 0,
      bestPoints: 0,
      totalMatches: 0,
      exactHits: 0,
      outcomeHits: 0,
      history: []
    };

    function loadSavedStats() {
      try {
        const raw = localStorage.getItem('football_pred_vleague_v3');
        if (raw) {
          const data = JSON.parse(raw);
          state.points = Number(data.points) || 0;
          state.streak = Number(data.streak) || 0;
          state.bestPoints = Number(data.bestPoints) || 0;
          state.totalMatches = Number(data.totalMatches) || 0;
          state.exactHits = Number(data.exactHits) || 0;
          state.outcomeHits = Number(data.outcomeHits) || 0;
        }
      } catch (e) {}
    }

    function saveStats() {
      try {
        localStorage.setItem('football_pred_vleague_v3', JSON.stringify({
          points: state.points,
          streak: state.streak,
          bestPoints: state.bestPoints,
          totalMatches: state.totalMatches,
          exactHits: state.exactHits,
          outcomeHits: state.outcomeHits
        }));
      } catch (e) {}
    }

    // =========================================================================
    // 5. STRICT TOURNAMENT MATCHMAKING & TOURNAMENT UI
    // =========================================================================
    function getActiveTournament() {
      return TOURNAMENTS.find(t => t.id === state.activeTournamentId) || TOURNAMENTS[0];
    }

    function getTeamsInActiveTournament() {
      return TEAMS_DB.filter(team => team.tournaments.includes(state.activeTournamentId));
    }

    function renderTournamentSelectorBar() {
      const visibleTournaments = TOURNAMENTS.filter(t =>
        state.groupFilter === 'all' ||
        t.group === state.groupFilter ||
        (Array.isArray(t.groups) && t.groups.includes(state.groupFilter))
      );

      // Dropdown populate
      const selectEl = document.getElementById('selectLeagueFilter');
      selectEl.innerHTML = TOURNAMENTS.map(t => {
        const count = TEAMS_DB.filter(team => team.tournaments.includes(t.id)).length;
        return `<option value="${t.id}" ${t.id === state.activeTournamentId ? 'selected' : ''}>${t.icon} ${t.name} (${count} đội)</option>`;
      }).join('');

      // Cards Grid populate
      const gridEl = document.getElementById('tournamentCardsGrid');
      gridEl.innerHTML = visibleTournaments.map(t => {
        const count = TEAMS_DB.filter(team => team.tournaments.includes(t.id)).length;
        const isActive = t.id === state.activeTournamentId;
        return `
          <button type="button" data-tourney-id="${t.id}" class="league-pill btn-tap text-left p-2.5 rounded-xl border ${isActive ? 'active font-extrabold' : 'bg-slate-900/85 hover:bg-slate-800/90 text-slate-200 border-white/10'}">
            <div class="flex items-center justify-between gap-1 mb-1">
              <span class="text-base">${t.icon}</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-slate-950/25 text-slate-950 font-black' : 'bg-white/10 text-emerald-300'}">${count} đội</span>
            </div>
            <div class="text-xs font-bold truncate leading-tight">${t.shortName}</div>
          </button>
        `;
      }).join('');

      gridEl.querySelectorAll('[data-tourney-id]').forEach(btn => {
        btn.addEventListener('click', () => {
          SoundFX.click();
          selectTournament(btn.dataset.tourneyId);
        });
      });
    }

    // Initialize FIFA World Ranking points for all 338 teams based on OVR + deterministic offset
    function initFifaWorldPoints() {
      TEAMS_DB.forEach((t, idx) => {
        if (state.fifaPointsMap[t.id] === undefined) {
          // Scale OVR (64..92) to realistic FIFA points (950.00 .. 1895.00)
          const basePts = 880 + (t.rating - 64) * 35.8 + ((idx * 17) % 25) * 0.42;
          state.fifaPointsMap[t.id] = Number(basePts.toFixed(2));
          state.fifaLastDeltaMap[t.id] = 0;
        }
      });
    }

    // Official FIFA World Ranking Points Calculation: P = P_before + I * (W - We)
    function updateFifaWorldPointsAfterMatch(home, away, actualH, actualA, isPenWinHome = null) {
      initFifaWorldPoints();
      const tourney = getActiveTournament();
      // Importance coefficient I (FIFA official scale: League/Qualifier 25, Continental Cup 35-40, World Cup 50-60)
      const baseI = tourney.fifaI || 25;
      const I = state.isKnockoutMatch ? baseI * 1.2 : baseI;

      const pHome = state.fifaPointsMap[home.id] || 1400;
      const pAway = state.fifaPointsMap[away.id] || 1400;
      const dr = pHome - pAway;
      const weHome = 1 / (1 + Math.pow(10, -dr / 600));
      const weAway = 1 - weHome;

      let wHome = 0.5;
      let wAway = 0.5;
      if (actualH > actualA) {
        wHome = 1.0; wAway = 0.0;
      } else if (actualH < actualA) {
        wHome = 0.0; wAway = 1.0;
      } else if (isPenWinHome !== null) {
        // FIFA rule: Penalty shootout win counts as 0.75, shootout loss counts as 0.5
        wHome = isPenWinHome ? 0.75 : 0.5;
        wAway = isPenWinHome ? 0.5 : 0.75;
      }

      const deltaHome = Number((I * (wHome - weHome)).toFixed(2));
      const deltaAway = Number((I * (wAway - weAway)).toFixed(2));

      state.fifaPointsMap[home.id] = Number((pHome + deltaHome).toFixed(2));
      state.fifaPointsMap[away.id] = Number((pAway + deltaAway).toFixed(2));
      state.fifaLastDeltaMap[home.id] = deltaHome;
      state.fifaLastDeltaMap[away.id] = deltaAway;

      renderFifaWorldRankings();
      return { deltaHome, deltaAway };
    }

    function renderFifaWorldRankings() {
      initFifaWorldPoints();
      const tbody = document.getElementById('fifaWorldRankBody');
      if (!tbody) return;
      const q = (document.getElementById('fifaSearchInput')?.value || '').trim().toLowerCase();

      // Compute global rank across all 186 nations first so regional views (FIFA Đông Nam Á / FIFA Châu Á) can show both Regional Rank & Global FIFA Rank
      const allNationsRanked = TEAMS_DB
        .filter(t => t.type === 'nations')
        .map(t => ({ id: t.id, pts: state.fifaPointsMap[t.id] || 1200 }))
        .sort((a, b) => b.pts - a.pts);
      const globalNationRankMap = {};
      allNationsRanked.forEach((n, idx) => { globalNationRankMap[n.id] = idx + 1; });

      const pool = TEAMS_DB.filter(t => {
        if (state.fifaFilter === 'nations') return t.type === 'nations';
        if (state.fifaFilter === 'asean') return t.type === 'nations' && t.tournaments.includes('asean_cup');
        if (state.fifaFilter === 'afc') return t.type === 'nations' && t.tournaments.includes('asian_cup');
        return t.type !== 'nations';
      });

      const ranked = pool
        .map(t => ({
          team: t,
          pts: state.fifaPointsMap[t.id] || 1200,
          delta: state.fifaLastDeltaMap[t.id] || 0,
          worldRank: globalNationRankMap[t.id] || null
        }))
        .sort((a, b) => b.pts - a.pts)
        .map((item, idx) => ({ ...item, rank: idx + 1 }));

      const filtered = ranked.filter(item =>
        !q ||
        item.team.name.toLowerCase().includes(q) ||
        item.team.code.toLowerCase().includes(q) ||
        item.team.league.toLowerCase().includes(q)
      );

      const countLbl = document.getElementById('fifaTotalCountLabel');
      if (countLbl) {
        const labelMap = {
          nations: 'Quốc gia Thế giới (Đủ 186 ĐTQG FIFA)',
          asean: 'Đội tuyển Đông Nam Á (BXH FIFA Đông Nam Á - 11 Quốc gia AFF)',
          afc: 'Đội tuyển Châu Á (BXH FIFA Châu Á - 47 Quốc gia AFC)',
          clubs: 'Câu lạc bộ Thế giới & Châu Á'
        };
        const unitName = labelMap[state.fifaFilter] || 'Đội bóng';
        countLbl.textContent = `Hiển thị đầy đủ: ${filtered.length} / ${ranked.length} ${unitName} • Công thức chuẩn FIFA: P = P_trước + I × (W - We)`;
      }

      tbody.innerHTML = filtered.map(item => {
        const isCurrent = (item.team.id === state.homeTeam.id || item.team.id === state.awayTeam.id);
        let deltaHtml = '<span class="text-slate-500 font-mono">0.0</span>';
        if (item.delta > 0) {
          deltaHtml = `<span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold font-mono">+${item.delta.toFixed(2)} ▲</span>`;
        } else if (item.delta < 0) {
          deltaHtml = `<span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold font-mono">${item.delta.toFixed(2)} ▼</span>`;
        }
        const rankBadgeClass = item.rank <= 3
          ? 'bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded-md'
          : (item.rank <= 10 ? 'bg-sky-500/20 text-sky-300 font-bold px-2 py-0.5 rounded-md' : 'text-slate-400 font-mono px-2');

        return `
          <tr data-fifa-team="${item.team.id}" class="fifa-row cursor-pointer hover:bg-slate-800/70 transition ${isCurrent ? 'bg-sky-500/15 font-bold text-white' : ''}" title="Bấm để đưa ${item.team.name} vào thi đấu">
            <td class="py-2 px-2">
              <div class="flex items-center gap-1.5">
                <span class="${rankBadgeClass}">#${item.rank}</span>
                ${(state.fifaFilter === 'asean' || state.fifaFilter === 'afc') && item.worldRank ? `<span class="text-[10px] text-slate-400 font-mono">(TG #${item.worldRank})</span>` : ''}
              </div>
            </td>
            <td class="py-2 px-2">
              <div class="flex items-center gap-2">
                ${getTeamLogoHtml(item.team, 'w-6 h-5')}
                <span class="font-bold text-white">${item.team.name}</span>
              </div>
            </td>
            <td class="py-2 px-2 font-mono text-xs text-amber-300 font-bold">${item.team.code}</td>
            <td class="py-2 px-2 text-slate-400 hidden sm:table-cell">${item.team.league}</td>
            <td class="py-2 px-2 text-center"><span class="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-bold font-mono">${item.team.rating}</span></td>
            <td class="py-2 px-2 text-right font-black text-sky-300 font-mono text-sm">${item.pts.toFixed(2)}</td>
            <td class="py-2 px-2 text-right">${deltaHtml}</td>
          </tr>
        `;
      }).join('');

      tbody.querySelectorAll('.fifa-row').forEach(row => {
        row.addEventListener('click', () => {
          SoundFX.click();
          const chosen = TEAMS_DB.find(t => t.id === row.dataset.fifaTeam);
          if (!chosen) return;
          if (chosen.type === 'nations') {
            if (state.fifaFilter === 'asean' && chosen.tournaments.includes('asean_cup')) {
              selectTournament('asean_cup');
            } else if (state.fifaFilter === 'afc' && chosen.tournaments.includes('asian_cup')) {
              selectTournament('asian_cup');
            } else if (!chosen.tournaments.includes(state.activeTournamentId)) {
              selectTournament('world_cup');
            }
          }
          const tourney = getActiveTournament();
          ensureTeamInMainGroup4(tourney.id, chosen);
          const tableObj = state.standingsByTourney[tourney.id];
          state.focusedTeamId = chosen.id;
          if (tableObj[chosen.id] && tableObj[chosen.id].group !== 'BXH') {
            state.focusedGroup = tableObj[chosen.id].group;
            state.activeGroupFilter = tableObj[chosen.id].group;
          }
          state.roundNumber++;
          pickRandomMatchInActiveTournament(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    }

    function buildGroupFixturesForGroup(tourneyId, grpLetter) {
      const tableObj = state.standingsByTourney[tourneyId];
      if (!tableObj) return [];
      const members = Object.values(tableObj)
        .filter(r => r.group === grpLetter && r.inMainGroup)
        .sort((a, b) => a.seedOrder - b.seedOrder);

      if (members.length < 4) {
        // Fallback round-robin for 2 or 3 teams
        const list = [];
        for (let i = 0; i < members.length; i++) {
          for (let j = i + 1; j < members.length; j++) {
            list.push({ matchday: list.length + 1, home: members[i].team, away: members[j].team, played: false, score: null });
          }
        }
        return list;
      }

      const [t1, t2, t3, t4] = members.map(m => m.team);
      // Official 4-Team Group Stage 3-Matchday Schedule (6 matches total, every team plays the other 3 teams in the group!)
      return [
        { matchday: 1, home: t1, away: t2, played: false, score: null },
        { matchday: 1, home: t3, away: t4, played: false, score: null },
        { matchday: 2, home: t1, away: t3, played: false, score: null },
        { matchday: 2, home: t2, away: t4, played: false, score: null },
        { matchday: 3, home: t4, away: t1, played: false, score: null },
        { matchday: 3, home: t2, away: t3, played: false, score: null }
      ];
    }

    function ensureTeamInMainGroup4(tourneyId, team) {
      initStandingsForTournament(tourneyId);
      const tourney = TOURNAMENTS.find(t => t.id === tourneyId) || TOURNAMENTS[0];
      if (!tourney.groupCount || tourney.groupCount <= 0) return;

      const tableObj = state.standingsByTourney[tourneyId];
      const entry = tableObj[team.id];
      if (!entry) return;
      if (entry.inMainGroup) return;

      // Swap this team into its group's 4th slot so the user can play a full 4-team group stage with this team!
      const grp = entry.group || 'A';
      const currentMain = Object.values(tableObj)
        .filter(r => r.group === grp && r.inMainGroup)
        .sort((a, b) => a.seedOrder - b.seedOrder);

      if (currentMain.length >= 4) {
        const replaced = currentMain[currentMain.length - 1];
        replaced.inMainGroup = false;
        entry.inMainGroup = true;
        entry.seedOrder = replaced.seedOrder;
      } else {
        entry.inMainGroup = true;
        entry.seedOrder = currentMain.length;
      }
      // Rebuild fixtures for this group
      if (!state.groupFixturesByTourney[tourneyId]) state.groupFixturesByTourney[tourneyId] = {};
      state.groupFixturesByTourney[tourneyId][grp] = buildGroupFixturesForGroup(tourneyId, grp);
    }

    function initStandingsForTournament(tourneyId) {
      if (state.standingsByTourney[tourneyId]) return;
      const tourney = TOURNAMENTS.find(t => t.id === tourneyId) || TOURNAMENTS[0];
      const teams = TEAMS_DB.filter(t => t.tournaments.includes(tourneyId));
      const groupLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
      const numGroups = tourney.groupCount || 0;

      // Sort by OVR rating descending so Pot 1, Pot 2, Pot 3, Pot 4 seeds are distributed evenly across Groups A, B, C, D...
      // Special priority: ensure ĐT Việt Nam ('vie') or Thép Xanh Nam Định ('nmd') is always seeded in the main 4-team Group stage of their tournaments!
      const sortedTeams = [...teams].sort((a, b) => {
        if (a.id === 'vie' && tourneyId === 'world_cup') return -1;
        if (b.id === 'vie' && tourneyId === 'world_cup') return 1;
        return b.rating - a.rating;
      });

      const table = {};
      const groupCounts = {};
      sortedTeams.forEach((t, idx) => {
        let grp = 'BXH';
        let inMainGroup = true;
        let seedOrder = idx;
        if (numGroups > 0) {
          const groupIdx = idx % numGroups;
          grp = groupLetters[groupIdx] || 'A';
          groupCounts[grp] = (groupCounts[grp] || 0) + 1;
          seedOrder = groupCounts[grp] - 1;
          // Each Group A, B, C, D... has 4 official teams in the group table
          inMainGroup = groupCounts[grp] <= 4;
        }
        table[t.id] = {
          team: t,
          group: grp,
          inMainGroup,
          seedOrder,
          played: 0,
          won: 0,
          drawn: 0,
          lost: 0,
          gf: 0,
          ga: 0,
          pts: 0
        };
      });
      state.standingsByTourney[tourneyId] = table;

      // Build official 3-Matchday round-robin fixtures for each group A, B, C, D...
      if (numGroups > 0) {
        state.groupFixturesByTourney[tourneyId] = {};
        for (let g = 0; g < numGroups; g++) {
          const gLetter = groupLetters[g];
          state.groupFixturesByTourney[tourneyId][gLetter] = buildGroupFixturesForGroup(tourneyId, gLetter);
        }
      }
    }

    function renderLeagueStandings() {
      const tourney = getActiveTournament();
      initStandingsForTournament(tourney.id);
      const tableObj = state.standingsByTourney[tourney.id];
      const allRows = Object.values(tableObj);
      const numGroups = tourney.groupCount || 0;
      const groupLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].slice(0, numGroups);

      document.getElementById('standingsCardTitle').textContent = numGroups > 0
        ? `Bảng Đấu (${groupLetters[0]}..${groupLetters[groupLetters.length - 1]})`
        : `BXH ${tourney.shortName}`;

      document.getElementById('standingsFormatPill').textContent = numGroups > 0
        ? `Chia ${numGroups} Bảng (${groupLetters.join(', ')})`
        : `${tourney.totalRounds} Vòng đấu`;

      const filterBar = document.getElementById('groupLetterFilterBar');
      const container = document.getElementById('tournamentGroupsContainer');

      const schedBanner = document.getElementById('groupScheduleBanner');
      if (numGroups > 0) {
        // Determine current active group & focused team
        const homeEntry = tableObj[state.homeTeam.id];
        const currentGrp = (homeEntry && homeEntry.group !== 'BXH') ? homeEntry.group : (groupLetters[0] || 'A');
        state.focusedGroup = currentGrp;
        if (!state.focusedTeamId || !tableObj[state.focusedTeamId] || tableObj[state.focusedTeamId].group !== currentGrp) {
          state.focusedTeamId = state.homeTeam.id;
        }
        const focusTeam = tableObj[state.focusedTeamId]?.team || state.homeTeam;
        const grpFixtures = (state.groupFixturesByTourney[tourney.id] && state.groupFixturesByTourney[tourney.id][currentGrp]) || [];

        if (schedBanner) {
          schedBanner.classList.remove('hidden');
          const focusMatches = grpFixtures.filter(f => f.home.id === focusTeam.id || f.away.id === focusTeam.id);
          schedBanner.innerHTML = `
            <div class="flex items-center justify-between gap-1 pb-1 border-b border-white/10">
              <span class="font-extrabold text-emerald-300 flex items-center gap-1">
                📅 Lịch đấu Bảng ${currentGrp} của <strong class="text-white">${focusTeam.name}</strong>
              </span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold">Đấu lần lượt 3 đội cùng bảng</span>
            </div>
            <div class="grid grid-cols-1 gap-1 pt-0.5">
              ${focusMatches.map((m, idx) => {
                const isCurrentMatch = (!m.played && ((m.home.id === state.homeTeam.id && m.away.id === state.awayTeam.id) || (m.home.id === state.awayTeam.id && m.away.id === state.homeTeam.id)));
                const opp = m.home.id === focusTeam.id ? m.away : m.home;
                const statusBadge = m.played
                  ? `<span class="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">Đã đá: ${m.score}</span>`
                  : (isCurrentMatch
                    ? `<span class="px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-extrabold">⚡ Đang đá</span>`
                    : `<span class="px-1.5 py-0.2 rounded bg-slate-800 text-sky-300 font-semibold">Trận tiếp theo</span>`);
                return `
                  <div class="flex items-center justify-between gap-1.5 px-2 py-1 rounded-lg ${isCurrentMatch ? 'bg-emerald-500/20 border border-emerald-400/40' : 'bg-slate-900/80'}">
                    <span class="font-mono text-[10px] text-slate-400">Lượt ${m.matchday}/3:</span>
                    <span class="font-bold text-white truncate flex-1">vs ${opp.name} (${opp.code})</span>
                    ${statusBadge}
                  </div>
                `;
              }).join('')}
            </div>
          `;
        }

        // Render group filter pills: Tất cả | A | B | C | D ...
        const pills = ['ALL', ...groupLetters];
        filterBar.innerHTML = pills.map(g => {
          const active = state.activeGroupFilter === g;
          return `<button type="button" data-grp="${g}" class="grp-pill px-1.5 py-0.5 rounded text-[10px] font-bold transition ${active ? 'bg-emerald-400 text-slate-950' : 'bg-slate-900 text-slate-300 hover:bg-slate-800'}">${g === 'ALL' ? 'Tất cả' : 'Bảng ' + g}</button>`;
        }).join('');

        filterBar.querySelectorAll('.grp-pill').forEach(btn => {
          btn.addEventListener('click', () => {
            SoundFX.click();
            state.activeGroupFilter = btn.dataset.grp;
            renderLeagueStandings();
          });
        });

        const groupsToShow = state.activeGroupFilter === 'ALL' ? groupLetters : [state.activeGroupFilter];
        container.innerHTML = groupsToShow.map(gLetter => {
          // Ensure current match teams appear if they belong to this group, limit each group table to 4 teams (or 6 if small)
          const grpRows = allRows
            .filter(r => r.group === gLetter && r.inMainGroup)
            .sort((a, b) => {
              if (b.pts !== a.pts) return b.pts - a.pts;
              const gdB = b.gf - b.ga;
              const gdA = a.gf - a.ga;
              if (gdB !== gdA) return gdB - gdA;
              return b.team.rating - a.team.rating;
            });

          return `
            <div class="bg-slate-950/85 rounded-xl p-2.5 border border-white/10">
              <div class="flex items-center justify-between mb-1.5 pb-1 border-b border-white/10">
                <span class="font-extrabold text-xs text-amber-300">🏆 BẢNG ${gLetter} (${tourney.shortName})</span>
                <span class="text-[10px] text-emerald-300">Top 2 vào Vòng Knock-out</span>
              </div>
              <table class="w-full text-left text-[11px]">
                <thead class="text-[9px] text-slate-400 uppercase">
                  <tr>
                    <th class="py-0.5 pr-1">#</th>
                    <th class="py-0.5">Đội bóng</th>
                    <th class="py-0.5 text-center">Tr</th>
                    <th class="py-0.5 text-center">HS</th>
                    <th class="py-0.5 text-right">Đ</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-white/5 text-slate-200">
                  ${grpRows.map((r, idx) => {
                    const gd = r.gf - r.ga;
                    const gdStr = gd > 0 ? `+${gd}` : `${gd}`;
                    const isCurrent = (r.team.id === state.homeTeam.id || r.team.id === state.awayTeam.id);
                    const qualifyBadge = idx < 2 ? 'text-emerald-400 font-bold' : 'text-slate-400';
                    return `
                      <tr class="${isCurrent ? 'bg-emerald-500/20 font-bold text-white' : ''}">
                        <td class="py-1 pr-1 font-mono ${qualifyBadge}">${idx + 1}</td>
                        <td class="py-1 truncate max-w-[135px]">
                          <div class="flex items-center gap-1.5">
                            ${getTeamLogoHtml(r.team, 'w-4 h-4')}
                            <span class="truncate">${r.team.name}</span>
                          </div>
                        </td>
                        <td class="py-1 text-center font-mono">${r.played}</td>
                        <td class="py-1 text-center font-mono text-slate-300">${gdStr}</td>
                        <td class="py-1 text-right font-black text-emerald-400 font-mono">${r.pts}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `;
        }).join('');
      } else {
        // Domestic League Single Table — show next sequential round opponent in schedule banner
        if (schedBanner) {
          if (!state.focusedTeamId || !tableObj[state.focusedTeamId]) {
            state.focusedTeamId = state.homeTeam.id;
          }
          const focusTeam = tableObj[state.focusedTeamId]?.team || state.homeTeam;
          const oppTeam = state.homeTeam.id === focusTeam.id ? state.awayTeam : state.homeTeam;
          schedBanner.classList.remove('hidden');
          schedBanner.innerHTML = `
            <div class="flex items-center justify-between gap-2">
              <span class="font-bold text-emerald-300">📅 Hành trình CLB: <strong class="text-white">${focusTeam.name}</strong></span>
              <span class="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold">Vòng ${state.roundNumber}/${tourney.totalRounds}: vs ${oppTeam.code}</span>
            </div>
          `;
        }
        filterBar.innerHTML = '';
        const rows = allRows.sort((a, b) => {
          if (b.pts !== a.pts) return b.pts - a.pts;
          const gdB = b.gf - b.ga;
          const gdA = a.gf - a.ga;
          if (gdB !== gdA) return gdB - gdA;
          return b.team.rating - a.team.rating;
        });

        container.innerHTML = `
          <table class="w-full text-left text-[11px]">
            <thead class="text-[10px] text-slate-400 uppercase border-b border-white/10">
              <tr>
                <th class="py-1 pr-1">#</th>
                <th class="py-1">Đội bóng</th>
                <th class="py-1 text-center">Tr</th>
                <th class="py-1 text-center">HS</th>
                <th class="py-1 text-right">Đ</th>
              </tr>
            </thead>
            <tbody id="leagueStandingsBody" class="divide-y divide-white/5 text-slate-200">
              ${rows.slice(0, 20).map((r, idx) => {
                const gd = r.gf - r.ga;
                const gdStr = gd > 0 ? `+${gd}` : `${gd}`;
                const isCurrent = (r.team.id === state.homeTeam.id || r.team.id === state.awayTeam.id);
                return `
                  <tr class="${isCurrent ? 'bg-emerald-500/15 font-bold text-white' : ''}">
                    <td class="py-1.5 pr-1 text-slate-400 font-mono">${idx + 1}</td>
                    <td class="py-1.5 truncate max-w-[145px]"><div class="flex items-center gap-1.5">${getTeamLogoHtml(r.team, 'w-4 h-4')}<span class="truncate">${r.team.name}</span></div></td>
                    <td class="py-1.5 text-center font-mono">${r.played}</td>
                    <td class="py-1.5 text-center font-mono text-slate-300">${gdStr}</td>
                    <td class="py-1.5 text-right font-black text-emerald-400 font-mono">${r.pts}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        `;
      }
      renderFifaWorldRankings();
    }

    function updateStageFormatUI() {
      const tourney = getActiveTournament();
      const stages = tourney.stages || ['Vòng 1'];
      const stageSelect = document.getElementById('selectCompetitionStage');
      stageSelect.innerHTML = stages.map((st, idx) => `<option value="${idx}" ${idx === state.stageIndex ? 'selected' : ''}>🏆 ${st}</option>`).join('');

      const currentStageName = stages[state.stageIndex] || stages[0];
      const isKnockout = tourney.knockoutPossible && (
        currentStageName.toLowerCase().includes('knock-out') ||
        currentStageName.toLowerCase().includes('1/16') ||
        currentStageName.toLowerCase().includes('1/8') ||
        currentStageName.toLowerCase().includes('tứ kết') ||
        currentStageName.toLowerCase().includes('bán kết') ||
        currentStageName.toLowerCase().includes('chung kết') ||
        currentStageName.toLowerCase().includes('play-off')
      );
      state.isKnockoutMatch = isKnockout;

      document.getElementById('officialFormatText').textContent = tourney.formatBadge;
      const chkET = document.getElementById('chkExtraTime');
      const statusTag = document.getElementById('stageRuleStatusTag');

      if (tourney.formatType === 'league') {
        // Official Domestic League format: 90 mins only, 3 pts Win, 1 pt Draw, NO Extra Time
        chkET.checked = false;
        statusTag.textContent = 'Đấu Vòng tròn tính điểm (Thắng 3đ, Hòa 1đ • 90 Phút)';
        statusTag.className = 'font-bold text-sky-300';
      } else if (isKnockout) {
        // Official Knockout Stage: Extra time 30s + Penalty Shootout if tied
        chkET.checked = true;
        statusTag.textContent = 'Loại trực tiếp Knock-out (Hiệp phụ 30s + Luân lưu 11m)';
        statusTag.className = 'font-bold text-amber-300';
      } else {
        // Group Stage / League Phase of a Cup competition
        chkET.checked = false;
        statusTag.textContent = 'Vòng bảng / Phân hạng Cúp (Thắng 3đ, Hòa 1đ • Chọn vòng Knock-out để đá Hiệp phụ)';
        statusTag.className = 'font-bold text-emerald-300';
      }
      document.getElementById('badgeMatchType').textContent = currentStageName;
    }

    function selectTournament(tournamentId) {
      state.activeTournamentId = tournamentId;
      const tourney = getActiveTournament();
      // Default Cup tournaments with Knockout to a thrilling stage or Stage 0, users can switch any stage
      state.stageIndex = 0;
      state.activeGroupFilter = 'ALL';
      state.focusedTeamId = null;
      document.getElementById('activeTournamentHeaderBadge').textContent = `${tourney.icon} ${tourney.name}`;
      document.getElementById('currentLeagueDesc').textContent = tourney.desc;
      initStandingsForTournament(tournamentId);
      renderTournamentSelectorBar();
      updateStageFormatUI();
      renderTeamsDirectory(document.getElementById('teamSearchInput').value);
      state.roundNumber++;
      pickRandomMatchInActiveTournament();
    }

    // Pick the NEXT scheduled match inside the active group (so the user plays all 3 opponents in their group sequentially!)
    function pickRandomMatchInActiveTournament(forceNewGroup = false) {
      const tourney = getActiveTournament();
      initStandingsForTournament(tourney.id);
      const tableObj = state.standingsByTourney[tourney.id];
      const pool = getTeamsInActiveTournament();
      if (pool.length < 2) return;

      const numGroups = tourney.groupCount || 0;
      const groupLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].slice(0, numGroups);

      // 1. If tournament has Group Stage (Bảng A, B, C, D...) and we are not in a Knockout round
      if (numGroups > 0 && !state.isKnockoutMatch) {
        // Determine which group and which team we are following
        let currentGrp = state.focusedGroup || 'A';
        if (!groupLetters.includes(currentGrp)) currentGrp = groupLetters[0] || 'A';

        if (forceNewGroup) {
          // If user clicked "Cặp đấu khác cùng giải", cycle to next match or another group
          const curIdx = groupLetters.indexOf(currentGrp);
          currentGrp = groupLetters[(curIdx + 1) % groupLetters.length];
          state.focusedGroup = currentGrp;
          const grpMembers = Object.values(tableObj).filter(r => r.group === currentGrp && r.inMainGroup);
          if (grpMembers.length > 0) state.focusedTeamId = grpMembers[0].team.id;
        }

        if (!state.focusedTeamId || !tableObj[state.focusedTeamId] || tableObj[state.focusedTeamId].group !== currentGrp) {
          // Pick a default focal team in this group (prioritize ĐT Việt Nam or Thép Xanh Nam Định if present in tournament)
          const vnTeam = Object.values(tableObj).find(r => r.inMainGroup && (r.team.id === 'vie' || r.team.id === 'nmd'));
          if (vnTeam && !forceNewGroup) {
            currentGrp = vnTeam.group;
            state.focusedGroup = currentGrp;
            state.focusedTeamId = vnTeam.team.id;
          } else {
            const grpMembers = Object.values(tableObj).filter(r => r.group === currentGrp && r.inMainGroup);
            if (grpMembers.length > 0) state.focusedTeamId = grpMembers[0].team.id;
          }
        }

        const grpFixtures = (state.groupFixturesByTourney[tourney.id] && state.groupFixturesByTourney[tourney.id][currentGrp]) || [];
        // First look for the next unplayed fixture of our focusedTeamId in this group!
        let nextFix = grpFixtures.find(f => !f.played && (f.home.id === state.focusedTeamId || f.away.id === state.focusedTeamId));

        if (!nextFix) {
          // All 3 group matches for focusedTeamId in this group are complete!
          // Check if any other fixture in this group is unplayed, or advance to the Round of 16 / Quarter-final Knockout stage!
          const anyUnplayed = grpFixtures.find(f => !f.played);
          if (anyUnplayed) {
            nextFix = anyUnplayed;
          } else {
            // Group Stage finished! Advance to the first Knock-out stage of this tournament if available
            const stages = tourney.stages || [];
            const koIdx = stages.findIndex(s =>
              s.toLowerCase().includes('1/16') ||
              s.toLowerCase().includes('1/8') ||
              s.toLowerCase().includes('tứ kết') ||
              s.toLowerCase().includes('bán kết')
            );
            if (koIdx !== -1) {
              state.stageIndex = koIdx;
              updateStageFormatUI();
              showPhaseNotice(`🏆 ĐÃ HOÀN THÀNH VÒNG BẢNG! TIẾN VÀO ${stages[koIdx].toUpperCase()}!`);
            } else {
              // Reset group fixtures for a new group campaign
              state.groupFixturesByTourney[tourney.id][currentGrp] = buildGroupFixturesForGroup(tourney.id, currentGrp);
              nextFix = state.groupFixturesByTourney[tourney.id][currentGrp][0];
            }
          }
        }

        if (nextFix && !state.isKnockoutMatch) {
          // Auto-align stage selector label with current Matchday (Lượt 1, Lượt 2, Lượt 3)
          const stages = tourney.stages || [];
          const mdStageIdx = stages.findIndex(s => s.includes(`Lượt ${nextFix.matchday}`));
          if (mdStageIdx !== -1 && state.stageIndex !== mdStageIdx) {
            state.stageIndex = mdStageIdx;
          }
          state.activeGroupFilter = currentGrp;
          setupMatch(nextFix.home, nextFix.away);
          return;
        }
      }

      // 2. For Domestic Leagues (V.League 1, EPL, La Liga, etc.) or Knock-out Rounds:
      // Keep the user's focusedTeamId and pair them against the next opponent they haven't faced yet!
      const focusId = state.focusedTeamId && tableObj[state.focusedTeamId] ? state.focusedTeamId : pool[0].id;
      state.focusedTeamId = focusId;
      const focusTeam = tableObj[focusId].team;
      const recentOppIds = state.history.slice(0, 6).map(h => h.home.id === focusId ? h.away.id : (h.away.id === focusId ? h.home.id : null)).filter(Boolean);
      let candidates = pool.filter(t => t.id !== focusId && !recentOppIds.includes(t.id));
      if (candidates.length === 0) candidates = pool.filter(t => t.id !== focusId);
      const opp = candidates[Math.floor(Math.random() * candidates.length)];

      // Alternate Home / Away each round
      if (state.roundNumber % 2 === 1) {
        setupMatch(focusTeam, opp);
      } else {
        setupMatch(opp, focusTeam);
      }
    }

    function computeWinProbabilities(home, away) {
      const diff = (home.rating + 1.5) - away.rating;
      const homeProb = Math.min(74, Math.max(15, Math.round(40 + diff * 3.2)));
      const drawProb = Math.min(34, Math.max(18, Math.round(27 - Math.abs(diff) * 0.8)));
      const awayProb = Math.max(10, 100 - homeProb - drawProb);
      return { homeProb, drawProb, awayProb };
    }

    function renderSquadBadges(team, containerId, titleId, isHome) {
      document.getElementById(titleId).textContent = `${team.name}`;
      const container = document.getElementById(containerId);
      const badgeColor = isHome
        ? 'bg-emerald-500/10 text-emerald-200 border-emerald-500/25'
        : 'bg-sky-500/10 text-sky-200 border-sky-500/25';
      container.innerHTML = team.stars.map((player, i) => `
        <span class="px-2 py-0.5 rounded-md border text-[10px] font-medium ${badgeColor}">
          ${i === 0 ? '⭐ ' : ''}${player}
        </span>
      `).join('');
    }

    function setupMatch(home, away) {
      clearIntervals();
      state.homeTeam = home;
      state.awayTeam = away;
      state.phase = 'predicting';
      state.liveHomeGoals = 0;
      state.liveAwayGoals = 0;
      state.simMinute = 0;
      state.simElapsedSec = 0;
      state.inExtraTime = false;
      state.halfTimeAnnounced = false;
      state.shotAnim.active = false;
      state.ballTrail = [];

      const tourney = getActiveTournament();

      // Update Overlays & Header
      document.getElementById('resultOverlay').classList.add('hidden');
      document.getElementById('goalCelebrationBanner').classList.add('hidden');
      document.getElementById('phaseNoticeBanner').classList.add('hidden');

      document.getElementById('tournamentName').innerHTML = `
        <span>${tourney.icon}</span>
        <span>${tourney.name}</span>
      `;
      state.penHome = null;
      state.penAway = null;
      updateStageFormatUI();
      renderLeagueStandings();

      // Reset Simulation Timer bar
      document.getElementById('timerStatusText').textContent = `GIẢI ĐẤU: ${tourney.name.toUpperCase()} • GIẢ LẬP 2 PHÚT (1P/HIỆP) + HIỆP PHỤ 30S`;
      document.getElementById('timerStatusText').className = 'text-xs sm:text-sm font-extrabold uppercase tracking-wider text-emerald-300';
      document.getElementById('timerDisplay').textContent = '00:00 / 02:00';
      document.getElementById('timerBar').style.width = '0%';

      // Home UI with Real Team Logo
      const homeCrest = document.getElementById('homeCrest');
      homeCrest.innerHTML = getTeamLogoHtml(home, 'w-12 h-12 sm:w-16 sm:h-16');
      homeCrest.style.background = `linear-gradient(135deg, ${home.colors[0]}33, ${home.colors[1]}55)`;
      document.getElementById('homeLeague').textContent = tourney.shortName;
      document.getElementById('homeName').textContent = home.name;
      document.getElementById('homeRating').textContent = home.rating;
      document.getElementById('homeForm').textContent = home.form;

      // Away UI with Real Team Logo
      const awayCrest = document.getElementById('awayCrest');
      awayCrest.innerHTML = getTeamLogoHtml(away, 'w-12 h-12 sm:w-16 sm:h-16');
      awayCrest.style.background = `linear-gradient(135deg, ${away.colors[0]}33, ${away.colors[1]}55)`;
      document.getElementById('awayLeague').textContent = tourney.shortName;
      document.getElementById('awayName').textContent = away.name;
      document.getElementById('awayRating').textContent = away.rating;
      document.getElementById('awayForm').textContent = away.form;

      // Render Full Squad Players
      renderSquadBadges(home, 'homePlayersList', 'homeSquadTitle', true);
      renderSquadBadges(away, 'awayPlayersList', 'awaySquadTitle', false);

      // Probabilities & Tactical Insight
      const probs = computeWinProbabilities(home, away);
      document.getElementById('winProbText').textContent = `Chủ ${probs.homeProb}% • Hòa ${probs.drawProb}% • Khách ${probs.awayProb}%`;

      const diff = home.rating - away.rating;
      let insight = '';
      if (diff >= 4) {
        insight = `[${tourney.shortName}] ${home.name} (${home.stars[0]}) được đánh giá cao hơn hẳn trên sân nhà.`;
      } else if (diff <= -4) {
        insight = `[${tourney.shortName}] Đội khách ${away.name} (${away.stars[0]}) có dàn sao nhỉnh hơn chủ nhà.`;
      } else {
        insight = `[${tourney.shortName}] Tâm điểm cân tài cân sức giữa ${home.stars[0]} và ${away.stars[0]}.`;
      }
      document.getElementById('tacticalInsight').textContent = insight;

      // Live Scoreboard labels
      document.getElementById('liveHomeLabel').textContent = home.code;
      document.getElementById('liveAwayLabel').textContent = away.code;
      document.getElementById('liveHomeDot').style.backgroundColor = home.colors[0];
      document.getElementById('liveAwayDot').style.backgroundColor = away.colors[0];
      document.getElementById('liveScoreBoard').textContent = '0 - 0';
      document.getElementById('simMinute').textContent = "Chờ khai cuộc (00')";
      document.getElementById('simBadge').textContent = "CHỜ KHÓA TỶ SỐ";
      document.getElementById('simBadge').className = "px-2.5 py-0.5 rounded-md text-xs font-extrabold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";

      document.getElementById('matchEventsFeed').innerHTML = `
        <div class="text-slate-300 flex items-center gap-2">
          <span class="text-emerald-400 font-bold">🎙️ Bình luận viên:</span>
          <span>Trận đấu thuộc khuôn khổ <strong>${tourney.name}</strong> giữa <strong>${home.name}</strong> và <strong>${away.name}</strong> sắp bắt đầu!</span>
        </div>
      `;

      setScoreControlsEnabled(true);
      initPitchPlayers();
      updateScoreDisplay();
      if (window.lucide) lucide.createIcons();
    }

    // =========================================================================
    // 6. TIMERS & CONTROLS MANAGEMENT
    // =========================================================================
    function clearIntervals() {
      if (state.simInterval) {
        clearInterval(state.simInterval);
        state.simInterval = null;
      }
      if (state.goalPopupTimeout) {
        clearTimeout(state.goalPopupTimeout);
        state.goalPopupTimeout = null;
      }
    }

    function formatClockMMSS(seconds) {
      const s = Math.max(0, Math.floor(seconds));
      const mm = String(Math.floor(s / 60)).padStart(2, '0');
      const ss = String(s % 60).padStart(2, '0');
      return `${mm}:${ss}`;
    }

    function setScoreControlsEnabled(enabled) {
      document.querySelectorAll('.score-ctrl').forEach(btn => {
        btn.disabled = !enabled;
        if (enabled) {
          btn.classList.remove('opacity-40', 'cursor-not-allowed');
        } else {
          btn.classList.add('opacity-40', 'cursor-not-allowed');
        }
      });
      const lockBtn = document.getElementById('btnLockPrediction');
      lockBtn.disabled = !enabled;
      if (enabled) {
        lockBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        lockBtn.innerHTML = `<i data-lucide="play" class="w-5 h-5 fill-current"></i><span>CHỐT DỰ ĐOÁN & BẮT ĐẦU ĐÁ</span>`;
      } else {
        lockBtn.classList.add('opacity-50', 'cursor-not-allowed');
        lockBtn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i><span>ĐANG GIẢ LẬP TRÊN SÂN...</span>`;
      }
      if (window.lucide) lucide.createIcons();
    }

    // =========================================================================
    // 7. REALISTIC MATCH SIMULATION & BALL-INTO-NET GOAL ANIMATION
    // =========================================================================
    function generateMatchScore(home, away, scale = 1.0) {
      const diff = (home.rating + 1.2 - away.rating) / 10;
      const lambdaHome = Math.max(0.45, Math.min(2.8, (1.42 + diff) * scale));
      const lambdaAway = Math.max(0.35, Math.min(2.6, (1.22 - diff * 0.85) * scale));

      function sampleGoals(lambda) {
        const L = Math.exp(-lambda);
        let k = 0;
        let p = 1;
        do {
          k++;
          p *= Math.random();
        } while (p > L && k < 6);
        return Math.min(5, k - 1);
      }

      return {
        homeGoals: sampleGoals(lambdaHome),
        awayGoals: sampleGoals(lambdaAway)
      };
    }

    // Trigger Authentic Player-to-Ball Contact -> Power Shot into the Goal Net!
    function launchBallIntoGoalNet(side, scorer, minute, teamName, homeScore, awayScore) {
      // Find the actual striker or midfielder on the pitch matching `scorer` (or pick forward)
      const teamPlayers = state.players.filter(p => p.side === side && p.role !== 'GK');
      const shortScorer = scorer.split(' (')[0].split(' ').slice(-1)[0];
      let shooter = teamPlayers.find(p => p.fullName === scorer || p.name === shortScorer);
      if (!shooter) {
        shooter = teamPlayers[teamPlayers.length - 1] || state.players[0];
      }

      // Position shooter in attacking striking zone and place ball right at shooter's feet!
      const shootSpotX = side === 'home' ? (0.74 + Math.random() * 0.08) : (0.26 - Math.random() * 0.08);
      const shootSpotY = 0.30 + Math.random() * 0.40;
      shooter.x = shootSpotX;
      shooter.y = shootSpotY;
      shooter.touchRing = 1.0;
      state.ballSim.holder = shooter;
      state.ballSim.mode = 'shooting';
      state.ballSim.lastTouchPlayer = shooter;

      const touchEl = document.getElementById('liveTouchBadge');
      if (touchEl) {
        touchEl.textContent = `👟 ${shooter.fullName} chạm bóng & dứt điểm!`;
      }

      SoundFX.kick();

      // Deep inside the left or right goal net pocket
      const targetX = side === 'home' ? 0.968 : 0.032;
      const targetY = 0.42 + Math.random() * 0.16;

      state.shotAnim.active = true;
      state.shotAnim.phase = 'flying';
      state.shotAnim.side = side;
      state.shotAnim.startX = shooter.x + (side === 'home' ? 0.016 : -0.016);
      state.shotAnim.startY = shooter.y;
      state.shotAnim.targetX = targetX;
      state.shotAnim.targetY = targetY;
      state.shotAnim.progress = 0;
      state.shotAnim.netHoldFrames = 0;
      state.shotAnim.netRipple = 0;
      state.shotAnim.scorerName = `${scorer} (${minute}')`;
      state.ballTrail = [];

      // Show "VÀOOOO!" celebration banner right after the ball hits the net (~400ms)
      setTimeout(() => {
        SoundFX.netSwish();
        SoundFX.goal();
        triggerGoalCelebrationPopup(scorer, minute, teamName, homeScore, awayScore);
      }, 380);
    }

    function triggerGoalCelebrationPopup(scorer, minute, teamName, homeScore, awayScore) {
      const banner = document.getElementById('goalCelebrationBanner');
      document.getElementById('goalBannerScorer').textContent = `${scorer} (${minute}')`;
      document.getElementById('goalBannerTeam').textContent = `${teamName} sút tung lưới! • Tỷ số: ${homeScore} - ${awayScore}`;
      banner.classList.remove('hidden');

      if (state.goalPopupTimeout) clearTimeout(state.goalPopupTimeout);
      state.goalPopupTimeout = setTimeout(() => {
        banner.classList.add('hidden');
      }, 2300);
    }

    function showPhaseNotice(text) {
      const notice = document.getElementById('phaseNoticeBanner');
      notice.textContent = text;
      notice.classList.remove('hidden');
      setTimeout(() => {
        notice.classList.add('hidden');
      }, 2500);
    }

    function lockPredictionAndSimulate() {
      if (state.phase !== 'predicting') return;
      clearIntervals();
      state.phase = 'simulating';
      SoundFX.whistle();

      setScoreControlsEnabled(false);

      // Generate regular 90-minute goals
      const simResult = generateMatchScore(state.homeTeam, state.awayTeam, 1.0);
      state.targetHomeGoals = simResult.homeGoals;
      state.targetAwayGoals = simResult.awayGoals;
      state.liveHomeGoals = 0;
      state.liveAwayGoals = 0;
      state.simMinute = 0;
      state.simElapsedSec = 0;
      state.inExtraTime = false;
      state.halfTimeAnnounced = false;
      state.scheduledEvents = [];

      function pickScorer(stars) {
        const weights = stars.map((_, idx) => idx < 4 ? 4 : (idx < 7 ? 2 : 1));
        const totalW = weights.reduce((a, b) => a + b, 0);
        let r = Math.random() * totalW;
        for (let i = 0; i < stars.length; i++) {
          r -= weights[i];
          if (r <= 0) return stars[i];
        }
        return stars[0];
      }

      for (let i = 0; i < state.targetHomeGoals; i++) {
        const min = Math.floor(Math.random() * 86) + 3;
        const scorer = pickScorer(state.homeTeam.stars);
        state.scheduledEvents.push({ minute: min, side: 'home', scorer, triggered: false });
      }
      for (let i = 0; i < state.targetAwayGoals; i++) {
        const min = Math.floor(Math.random() * 86) + 3;
        const scorer = pickScorer(state.awayTeam.stars);
        state.scheduledEvents.push({ minute: min, side: 'away', scorer, triggered: false });
      }
      state.scheduledEvents.sort((a, b) => a.minute - b.minute);

      const tourney = getActiveTournament();
      const feed = document.getElementById('matchEventsFeed');
      feed.innerHTML = `<div class="text-emerald-300 font-semibold">⏱️ 01' [${tourney.shortName}] Hiệp 1 bắt đầu! Bạn dự đoán: ${state.homeTeam.code} ${state.predHome} - ${state.predAway} ${state.awayTeam.code}</div>`;

      document.getElementById('simBadge').textContent = "HIỆP 1 • ĐANG ĐÁ";
      document.getElementById('simBadge').className = "px-2.5 py-0.5 rounded-md text-xs font-extrabold uppercase bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse";
      document.getElementById('timerStatusText').textContent = `🔒 DỰ ĐOÁN (${state.predHome} - ${state.predAway}) • ĐANG ĐÁ HIỆP 1 (1 PHÚT)`;

      // 2 minutes regular time (60s Half 1 + 60s Half 2), 30s Extra Time
      const tickMs = 200;

      state.simInterval = setInterval(() => {
        const dtRealSec = (tickMs / 1000) * state.speedMultiplier;
        state.simElapsedSec += dtRealSec;

        if (!state.inExtraTime) {
          state.simMinute = Math.min(90, (state.simElapsedSec / 120) * 90);
          const pct = Math.min(100, (state.simElapsedSec / 120) * 100);
          document.getElementById('timerBar').style.width = `${pct}%`;
          document.getElementById('timerDisplay').textContent = `${formatClockMMSS(state.simElapsedSec)} / 02:00`;

          if (state.simMinute >= 45 && !state.halfTimeAnnounced) {
            state.halfTimeAnnounced = true;
            SoundFX.whistle();
            document.getElementById('simBadge').textContent = "HIỆP 2 • ĐANG ĐÁ";
            document.getElementById('timerStatusText').textContent = `🔒 DỰ ĐOÁN (${state.predHome} - ${state.predAway}) • ĐANG ĐÁ HIỆP 2 (1 PHÚT)`;
            showPhaseNotice("⏱️ HIỆP 2 BẮT ĐẦU (45' - 90')");
            const htItem = document.createElement('div');
            htItem.className = 'text-sky-300 font-semibold';
            htItem.textContent = `⏸️ 45' Hết Hiệp 1 (01:00). Hai đội bước vào Hiệp 2 với tỷ số ${state.liveHomeGoals} - ${state.liveAwayGoals}.`;
            feed.prepend(htItem);
          }
        } else {
          const etElapsed = state.simElapsedSec - 120;
          state.simMinute = Math.min(120, 90 + (etElapsed / 30) * 30);
          const pct = Math.min(100, (etElapsed / 30) * 100);
          document.getElementById('timerBar').style.width = `${pct}%`;
          document.getElementById('timerDisplay').textContent = `HP ${formatClockMMSS(etElapsed)} / 00:30`;
        }

        const displayMin = Math.floor(state.simMinute);
        document.getElementById('simMinute').textContent = state.inExtraTime
          ? `Hiệp phụ ${displayMin}'`
          : `Phút ${displayMin}'`;

        // Check scheduled goals
        state.scheduledEvents.forEach(ev => {
          if (!ev.triggered && displayMin >= ev.minute) {
            ev.triggered = true;
            if (ev.side === 'home') {
              state.liveHomeGoals++;
            } else {
              state.liveAwayGoals++;
            }
            state.goalFlashTimer = 30;

            document.getElementById('liveScoreBoard').textContent = `${state.liveHomeGoals} - ${state.liveAwayGoals}`;
            const teamName = ev.side === 'home' ? state.homeTeam.name : state.awayTeam.name;

            // Launch ball visibly into the goal net on canvas + "Vàoooo!" banner
            launchBallIntoGoalNet(ev.side, ev.scorer, ev.minute, teamName, state.liveHomeGoals, state.liveAwayGoals);

            // Commentary Feed Entry
            const item = document.createElement('div');
            item.className = 'text-amber-300 font-bold flex items-center gap-1.5 bg-amber-500/10 px-2.5 py-1.5 rounded-lg border border-amber-500/25';
            item.innerHTML = `<span>⚽ ${ev.minute}' <strong>Vàoooo!</strong></span> <span class="text-white">${ev.scorer}</span> <span class="text-slate-300">sút tung lưới (${teamName})</span> <span class="text-emerald-400 ml-auto">[${state.liveHomeGoals} - ${state.liveAwayGoals}]</span>`;
            feed.prepend(item);
          }
        });

        // Check End of Regular Time (90' / 120s)
        if (!state.inExtraTime && state.simElapsedSec >= 120) {
          const allowET = document.getElementById('chkExtraTime').checked;
          if (allowET && state.liveHomeGoals === state.liveAwayGoals) {
            state.inExtraTime = true;
            SoundFX.whistle();
            showPhaseNotice("🔥 HÒA 90 PHÚT! BƯỚC VÀO HIỆP PHỤ (30 GIÂY)");
            document.getElementById('simBadge').textContent = "HIỆP PHỤ (30S)";
            document.getElementById('simBadge').className = "px-2.5 py-0.5 rounded-md text-xs font-extrabold uppercase bg-amber-500/25 text-amber-300 border border-amber-400/50 animate-pulse";
            document.getElementById('timerStatusText').textContent = `⚡ HIỆP PHỤ 30 GIÂY (90' - 120') ĐANG DIỄN RA!`;

            const etSim = generateMatchScore(state.homeTeam, state.awayTeam, 0.35);
            state.targetHomeGoals += etSim.homeGoals;
            state.targetAwayGoals += etSim.awayGoals;

            for (let i = 0; i < etSim.homeGoals; i++) {
              const min = Math.floor(Math.random() * 27) + 92;
              const scorer = pickScorer(state.homeTeam.stars);
              state.scheduledEvents.push({ minute: min, side: 'home', scorer, triggered: false });
            }
            for (let i = 0; i < etSim.awayGoals; i++) {
              const min = Math.floor(Math.random() * 27) + 92;
              const scorer = pickScorer(state.awayTeam.stars);
              state.scheduledEvents.push({ minute: min, side: 'away', scorer, triggered: false });
            }
            state.scheduledEvents.sort((a, b) => a.minute - b.minute);

            const etMsg = document.createElement('div');
            etMsg.className = 'text-amber-300 font-bold';
            etMsg.textContent = `⚡ 90' Hòa ${state.liveHomeGoals}-${state.liveAwayGoals} sau 2 phút chính thức! Hai đội đá thêm 2 Hiệp phụ (30 giây)!`;
            feed.prepend(etMsg);
          } else {
            clearIntervals();
            finishMatch();
          }
        } else if (state.inExtraTime && state.simElapsedSec >= 150) {
          clearIntervals();
          finishMatch();
        }
      }, tickMs);
    }

    function finishMatch() {
      state.phase = 'finished';
      SoundFX.whistle();

      const actualH = state.liveHomeGoals;
      const actualA = state.liveAwayGoals;

      // Official Penalty Shootout (11m) if Knockout Stage is still tied after Extra Time!
      let penNote = '';
      if (state.isKnockoutMatch && actualH === actualA) {
        const penPairs = [[5, 4], [4, 3], [5, 3], [4, 2], [3, 4], [4, 5], [3, 5]];
        const pick = penPairs[Math.floor(Math.random() * penPairs.length)];
        state.penHome = pick[0];
        state.penAway = pick[1];
        penNote = ` (Pen: ${state.penHome}-${state.penAway})`;
        const feed = document.getElementById('matchEventsFeed');
        const penItem = document.createElement('div');
        penItem.className = 'text-amber-300 font-extrabold bg-amber-500/15 px-2.5 py-1.5 rounded-lg border border-amber-400/30';
        const penWinner = state.penHome > state.penAway ? state.homeTeam.name : state.awayTeam.name;
        penItem.innerHTML = `🎯 <strong>LOẠT SÚT LUÂN LƯU 11M:</strong> ${state.homeTeam.code} ${state.penHome} - ${state.penAway} ${state.awayTeam.code} • <strong>${penWinner}</strong> giành chiến thắng nghẹt thở!`;
        feed.prepend(penItem);
      }

      // Update Official Tournament Standings (3 pts Win, 1 pt Draw, 0 pt Loss)
      const tourney = getActiveTournament();
      initStandingsForTournament(tourney.id);
      const stTable = state.standingsByTourney[tourney.id];

      function recordScoreToStandings(teamH, teamA, gH, gA) {
        const rH = stTable[teamH.id];
        const rA = stTable[teamA.id];
        if (!rH || !rA) return;
        rH.played++; rA.played++;
        rH.gf += gH; rH.ga += gA;
        rA.gf += gA; rA.ga += gH;
        if (gH > gA) {
          rH.won++; rH.pts += 3; rA.lost++;
        } else if (gH < gA) {
          rA.won++; rA.pts += 3; rH.lost++;
        } else {
          rH.drawn++; rA.drawn++; rH.pts += 1; rA.pts += 1;
        }
      }

      recordScoreToStandings(state.homeTeam, state.awayTeam, actualH, actualA);

      // If this match is part of a Group Stage (Bảng A, B, C, D...), mark fixture as played AND auto-simulate the companion fixture of the same Matchday in this group!
      if ((tourney.groupCount || 0) > 0 && !state.isKnockoutMatch) {
        const grp = stTable[state.homeTeam.id]?.group || state.focusedGroup;
        const grpFixtures = (state.groupFixturesByTourney[tourney.id] && state.groupFixturesByTourney[tourney.id][grp]) || [];
        const thisFix = grpFixtures.find(f =>
          !f.played &&
          ((f.home.id === state.homeTeam.id && f.away.id === state.awayTeam.id) ||
           (f.home.id === state.awayTeam.id && f.away.id === state.homeTeam.id))
        );
        if (thisFix) {
          thisFix.played = true;
          thisFix.score = thisFix.home.id === state.homeTeam.id ? `${actualH}-${actualA}` : `${actualA}-${actualH}`;

          // Simulate the other 2 teams in the same group on the same Matchday so the 4-team group table stays synchronized!
          const companionFix = grpFixtures.find(f => !f.played && f.matchday === thisFix.matchday);
          if (companionFix) {
            const compSim = generateMatchScore(companionFix.home, companionFix.away, 1.0);
            companionFix.played = true;
            companionFix.score = `${compSim.homeGoals}-${compSim.awayGoals}`;
            recordScoreToStandings(companionFix.home, companionFix.away, compSim.homeGoals, compSim.awayGoals);
            updateFifaWorldPointsAfterMatch(companionFix.home, companionFix.away, compSim.homeGoals, compSim.awayGoals, null);

            const feed = document.getElementById('matchEventsFeed');
            const compItem = document.createElement('div');
            compItem.className = 'text-sky-300 text-[11px] bg-sky-500/10 px-2.5 py-1 rounded-lg border border-sky-500/20';
            compItem.innerHTML = `📊 <strong>Kết quả trận cùng Bảng ${grp} (Lượt ${companionFix.matchday}):</strong> ${companionFix.home.name} <strong>${compSim.homeGoals} - ${compSim.awayGoals}</strong> ${companionFix.away.name}`;
            feed.prepend(compItem);
          }
        }
      }
      renderLeagueStandings();
      const predH = state.predHome;
      const predA = state.predAway;

      const exactHit = (actualH === predH && actualA === predA);
      const actualOutcome = actualH > actualA ? 'home' : (actualH < actualA ? 'away' : 'draw');
      const actualSign = Math.sign(actualH - actualA);
      const predSign = Math.sign(predH - predA);
      const outcomeHit = (actualOutcome === state.predOutcome) || (actualSign === predSign);

      // Compute Official FIFA World Ranking points change (+/-) for both teams
      const isPenWinHome = (state.penHome !== null && state.penAway !== null) ? (state.penHome > state.penAway) : null;
      const fifaDelta = updateFifaWorldPointsAfterMatch(state.homeTeam, state.awayTeam, actualH, actualA, isPenWinHome);
      const diffHit = outcomeHit && ((actualH - actualA) === (predH - predA));

      let basePoints = 0;
      let streakBonus = 0;
      let verdictTitle = '';
      let badgeClass = '';

      state.totalMatches++;

      if (exactHit) {
        basePoints = 150;
        state.streak++;
        state.exactHits++;
        state.outcomeHits++;
        streakBonus = state.streak > 1 ? state.streak * 25 : 0;
        verdictTitle = '🎯 CHÍNH XÁC TUYỆT ĐỐI TỶ SỐ!';
        badgeClass = 'bg-emerald-500/25 text-emerald-300 border-emerald-400/50';
        SoundFX.winExact();
        if (window.confetti) {
          confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        }
      } else if (diffHit) {
        basePoints = 75;
        state.streak++;
        state.outcomeHits++;
        streakBonus = state.streak > 1 ? state.streak * 15 : 0;
        verdictTitle = '🔥 ĐÚNG KẾT QUẢ & HIỆU SỐ BÀN!';
        badgeClass = 'bg-sky-500/25 text-sky-300 border-sky-400/50';
      } else if (outcomeHit) {
        basePoints = 50;
        state.streak++;
        state.outcomeHits++;
        streakBonus = state.streak > 1 ? state.streak * 10 : 0;
        verdictTitle = '✅ ĐÚNG KẾT QUẢ TRẬN ĐẤU!';
        badgeClass = 'bg-indigo-500/25 text-indigo-300 border-indigo-400/50';
      } else {
        basePoints = 0;
        state.streak = 0;
        verdictTitle = '😅 CHƯA CHÍNH XÁC — THỬ LẠI TRẬN SAU!';
        badgeClass = 'bg-rose-500/25 text-rose-300 border-rose-400/50';
      }

      const totalEarned = basePoints + streakBonus;
      state.points += totalEarned;
      if (state.points > state.bestPoints) state.bestPoints = state.points;
      saveStats();
      updateStatsUI();

      state.history.unshift({
        round: state.roundNumber,
        tournament: tourney.shortName,
        home: state.homeTeam,
        away: state.awayTeam,
        pred: `${predH} - ${predA}`,
        actual: `${actualH} - ${actualA}${state.inExtraTime ? ' (HP)' : ''}${penNote}`,
        earned: totalEarned,
        exactHit,
        outcomeHit
      });
      renderHistory();

      document.getElementById('simBadge').textContent = state.inExtraTime ? "KẾT THÚC (SAU HIỆP PHỤ)" : "KẾT THÚC TRẬN (FT)";
      document.getElementById('simBadge').className = "px-2.5 py-0.5 rounded-md text-xs font-extrabold uppercase bg-slate-700 text-slate-200";

      const resultBadge = document.getElementById('resultBadge');
      resultBadge.textContent = verdictTitle;
      resultBadge.className = `px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-1.5 border ${badgeClass}`;

      document.getElementById('resultHeadline').textContent = `${state.homeTeam.name} ${actualH} - ${actualA} ${state.awayTeam.name}${penNote}`;
      const fifaSummary = `Điểm FIFA: ${state.homeTeam.code} ${fifaDelta.deltaHome >= 0 ? '+' : ''}${fifaDelta.deltaHome} | ${state.awayTeam.code} ${fifaDelta.deltaAway >= 0 ? '+' : ''}${fifaDelta.deltaAway}`;
      document.getElementById('resultSubtext').textContent = totalEarned > 0
        ? `[${tourney.shortName}] Bạn đoán ${predH}-${predA} • Nhận +${totalEarned}đ (Chuỗi: ${state.streak}🔥) • ${fifaSummary}`
        : `[${tourney.shortName}] Bạn đoán ${predH}-${predA} • 0đ lượt này • ${fifaSummary}`;

      document.getElementById('resultOverlay').classList.remove('hidden');

      const lockBtn = document.getElementById('btnLockPrediction');
      lockBtn.disabled = false;
      lockBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      lockBtn.innerHTML = `<i data-lucide="play" class="w-5 h-5 fill-current"></i><span>TRẬN TIẾP THEO CÙNG GIẢI</span>`;
      if (window.lucide) lucide.createIcons();
    }

    // =========================================================================
    // 8. HTML5 PITCH CANVAS WITH REAL GOAL NETS & BALL-INTO-NET TRAJECTORY
    // =========================================================================
    const canvas = document.getElementById('pitchCanvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = Math.max(320, rect.width);
      canvas.height = Math.max(220, rect.height || 260);
    }

    // Real-Time 11v11 Player-Ball Touch, Dribbling, Passing & Interception State
    state.ballSim = {
      holder: null,
      targetReceiver: null,
      mode: 'held', // 'held' (at player's feet) | 'passing' (traveling between 2 players) | 'shooting'
      passStartX: 0.5,
      passStartY: 0.5,
      passEndX: 0.5,
      passEndY: 0.5,
      passProgress: 0,
      passSpeed: 0.055,
      holdTimer: 0,
      touchRipples: [], // Expanding rings at exact point of foot-ball contact
      passLine: null,
      lastTouchPlayer: null
    };

    function spawnTouchRipple(nx, ny, color) {
      state.ballSim.touchRipples.push({ x: nx, y: ny, r: 4, maxR: 22, alpha: 0.95, color: color || '#fde047' });
      if (state.ballSim.touchRipples.length > 8) state.ballSim.touchRipples.shift();
    }

    function initPitchPlayers() {
      state.players = [];
      // Full 11v11 tactical 4-3-3 formations for Home (Left->Right) and Away (Right->Left)
      const home433 = [
        { x: 0.075, y: 0.50, role: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF' },
        { x: 0.18,  y: 0.38, role: 'DF' },
        { x: 0.18,  y: 0.62, role: 'DF' },
        { x: 0.20,  y: 0.84, role: 'DF' },
        { x: 0.35,  y: 0.25, role: 'MF' },
        { x: 0.32,  y: 0.50, role: 'MF' },
        { x: 0.35,  y: 0.75, role: 'MF' },
        { x: 0.47,  y: 0.20, role: 'FW' },
        { x: 0.49,  y: 0.50, role: 'FW' },
        { x: 0.47,  y: 0.80, role: 'FW' }
      ];
      const away433 = [
        { x: 0.925, y: 0.50, role: 'GK' },
        { x: 0.80,  y: 0.16, role: 'DF' },
        { x: 0.82,  y: 0.38, role: 'DF' },
        { x: 0.82,  y: 0.62, role: 'DF' },
        { x: 0.80,  y: 0.84, role: 'DF' },
        { x: 0.65,  y: 0.25, role: 'MF' },
        { x: 0.68,  y: 0.50, role: 'MF' },
        { x: 0.65,  y: 0.75, role: 'MF' },
        { x: 0.53,  y: 0.20, role: 'FW' },
        { x: 0.51,  y: 0.50, role: 'FW' },
        { x: 0.53,  y: 0.80, role: 'FW' }
      ];

      // Note: team.stars has attackers at index 0..3, midfielders 4..6, defenders 7..9, GK at 10
      const starOrder = [10, 7, 8, 9, 6, 4, 5, 3, 1, 0, 2];

      home433.forEach((p, idx) => {
        const starIdx = starOrder[idx] !== undefined ? starOrder[idx] : idx;
        const fullName = state.homeTeam.stars[starIdx] || state.homeTeam.stars[0] || `Cầu thủ ${idx + 1}`;
        const shortName = fullName.split(' (')[0].split(' ').slice(-1)[0];
        state.players.push({
          id: `home_${idx}`,
          side: 'home',
          role: p.role,
          baseX: p.x,
          baseY: p.y,
          x: p.x,
          y: p.y,
          vx: 0,
          vy: 0,
          phase: Math.random() * 6.28,
          fullName,
          name: shortName,
          touchRing: 0
        });
      });

      away433.forEach((p, idx) => {
        const starIdx = starOrder[idx] !== undefined ? starOrder[idx] : idx;
        const fullName = state.awayTeam.stars[starIdx] || state.awayTeam.stars[0] || `Cầu thủ ${idx + 1}`;
        const shortName = fullName.split(' (')[0].split(' ').slice(-1)[0];
        state.players.push({
          id: `away_${idx}`,
          side: 'away',
          role: p.role,
          baseX: p.x,
          baseY: p.y,
          x: p.x,
          y: p.y,
          vx: 0,
          vy: 0,
          phase: Math.random() * 6.28,
          fullName,
          name: shortName,
          touchRing: 0
        });
      });

      // Give initial kick-off possession to Home Center Forward (index 9)
      const kickoffPlayer = state.players[9] || state.players[0];
      state.ballSim.holder = kickoffPlayer;
      state.ballSim.targetReceiver = null;
      state.ballSim.mode = 'held';
      state.ballSim.holdTimer = 28;
      state.ballSim.touchRipples = [];
      state.ballSim.passLine = null;
      state.ballPos.x = kickoffPlayer.x + 0.014;
      state.ballPos.y = kickoffPlayer.y;
    }

    function updatePlayersAndBallTouchPhysics() {
      const isSim = state.phase === 'simulating';
      const bs = state.ballSim;

      // If a goal shot is flying into the net, let the shot animation control the ball
      if (state.shotAnim.active) {
        return;
      }

      // 1. Update each player's tactical movement & pressing toward the ball
      let closestOpponentToBall = null;
      let closestOpponentDist = 999;
      const activeSide = bs.holder ? bs.holder.side : (bs.targetReceiver ? bs.targetReceiver.side : 'home');

      state.players.forEach(p => {
        if (p.side !== activeSide && p.role !== 'GK') {
          const d = Math.hypot(p.x - state.ballPos.x, p.y - state.ballPos.y);
          if (d < closestOpponentDist) {
            closestOpponentDist = d;
            closestOpponentToBall = p;
          }
        }
      });

      state.players.forEach(p => {
        p.phase += isSim ? 0.045 : 0.02;
        if (p.touchRing > 0) p.touchRing = Math.max(0, p.touchRing - 0.05);

        if (!isSim) {
          // Gentle warm-up breathing movement before kickoff
          p.x = p.baseX + Math.sin(p.phase) * 0.008;
          p.y = p.baseY + Math.cos(p.phase * 1.2) * 0.012;
          return;
        }

        if (bs.mode === 'held' && bs.holder === p) {
          // Ball carrier dribbles forward toward opponent's goal!
          const dirX = p.side === 'home' ? 1 : -1;
          const targetGoalY = 0.5 + Math.sin(p.phase * 1.5) * 0.18;
          p.x += dirX * 0.0018;
          p.y += (targetGoalY - p.y) * 0.025;
        } else if (bs.mode === 'passing' && bs.targetReceiver === p) {
          // Receiver moves slightly toward the incoming pass to meet the ball
          p.x += (bs.passEndX - p.x) * 0.08;
          p.y += (bs.passEndY - p.y) * 0.08;
        } else if (p === closestOpponentToBall) {
          // Nearest opponent presses the ball carrier to challenge/tackle!
          p.x += (state.ballPos.x - p.x) * 0.042;
          p.y += (state.ballPos.y - p.y) * 0.042;
        } else {
          // Teammates shift dynamically with ball position while keeping formation
          const ballShiftX = (state.ballPos.x - 0.5) * (p.role === 'GK' ? 0.04 : 0.22);
          const desiredX = p.baseX + ballShiftX + Math.sin(p.phase) * 0.018;
          const desiredY = p.baseY + Math.cos(p.phase * 1.3) * 0.028;
          p.x += (desiredX - p.x) * 0.05;
          p.y += (desiredY - p.y) * 0.05;
        }

        // Clamp inside field boundaries
        p.x = Math.max(0.065, Math.min(0.935, p.x));
        p.y = Math.max(0.10, Math.min(0.90, p.y));
      });

      if (!isSim) {
        if (bs.holder) {
          const dirX = bs.holder.side === 'home' ? 0.015 : -0.015;
          state.ballPos.x = bs.holder.x + dirX;
          state.ballPos.y = bs.holder.y + 0.004;
        }
        return;
      }

      // 2. Handle Ball state: either at a player's feet ('held') or being passed between players ('passing')
      if (bs.mode === 'held' && bs.holder) {
        const h = bs.holder;
        const dirX = h.side === 'home' ? 0.016 : -0.016;
        // Ball stays physically glued to the dribbling player's feet with a subtle dribble touch oscillation
        const dribbleTouch = Math.sin(performance.now() * 0.018) * 0.004;
        state.ballPos.x = h.x + dirX + dribbleTouch;
        state.ballPos.y = h.y + Math.cos(performance.now() * 0.015) * 0.005;

        bs.holdTimer--;

        // Check if pressing defender physically touches & tackles the ball!
        if (closestOpponentToBall && closestOpponentDist < 0.028 && bs.holdTimer < 25) {
          bs.holder = closestOpponentToBall;
          bs.holdTimer = 18 + Math.floor(Math.random() * 18);
          closestOpponentToBall.touchRing = 1.0;
          spawnTouchRipple(state.ballPos.x, state.ballPos.y, '#38bdf8');
          const touchEl = document.getElementById('liveTouchBadge');
          if (touchEl) {
            touchEl.textContent = `👟 ${closestOpponentToBall.fullName} (${closestOpponentToBall.side === 'home' ? state.homeTeam.code : state.awayTeam.code}) cắt bóng!`;
          }
          return;
        }

        // When holdTimer expires, player kicks/passes the ball to a teammate (or loses possession on a turnover)
        if (bs.holdTimer <= 0) {
          const turnover = Math.random() < 0.24;
          const candidateSide = turnover ? (h.side === 'home' ? 'away' : 'home') : h.side;
          const candidates = state.players.filter(p => p.side === candidateSide && p !== h && p.role !== 'GK');
          // Prefer forward or nearby teammates
          const nextReceiver = candidates[Math.floor(Math.random() * candidates.length)] || state.players[0];

          bs.mode = 'passing';
          bs.targetReceiver = nextReceiver;
          bs.passStartX = state.ballPos.x;
          bs.passStartY = state.ballPos.y;
          bs.passEndX = nextReceiver.x + (nextReceiver.side === 'home' ? 0.014 : -0.014);
          bs.passEndY = nextReceiver.y;
          bs.passProgress = 0;
          const dist = Math.hypot(bs.passEndX - bs.passStartX, bs.passEndY - bs.passStartY);
          bs.passSpeed = Math.max(0.045, Math.min(0.095, 0.025 / Math.max(0.12, dist)));

          // Visual & audio feedback of player's foot kicking the ball
          h.touchRing = 1.0;
          spawnTouchRipple(state.ballPos.x, state.ballPos.y, '#fde047');
          bs.passLine = { x1: bs.passStartX, y1: bs.passStartY, x2: bs.passEndX, y2: bs.passEndY, alpha: 0.75 };

          const touchEl = document.getElementById('liveTouchBadge');
          if (touchEl) {
            const teamCode = h.side === 'home' ? state.homeTeam.code : state.awayTeam.code;
            touchEl.textContent = `👟 ${h.fullName} (${teamCode}) chuyền bóng cho ${nextReceiver.name}`;
          }
        }
      } else if (bs.mode === 'passing' && bs.targetReceiver) {
        // Update target coordinates dynamically as receiver moves to meet the ball
        bs.passEndX = bs.targetReceiver.x + (bs.targetReceiver.side === 'home' ? 0.014 : -0.014);
        bs.passEndY = bs.targetReceiver.y;

        bs.passProgress += bs.passSpeed;
        const t = Math.min(1, bs.passProgress);
        state.ballPos.x = bs.passStartX + (bs.passEndX - bs.passStartX) * t;
        state.ballPos.y = bs.passStartY + (bs.passEndY - bs.passStartY) * t;

        // Check mid-pass interception if an opponent player physically touches the ball path
        const interceptor = state.players.find(p =>
          p !== bs.holder &&
          p !== bs.targetReceiver &&
          p.side !== (bs.holder ? bs.holder.side : '') &&
          Math.hypot(p.x - state.ballPos.x, p.y - state.ballPos.y) < 0.022
        );

        if (interceptor && t > 0.25 && t < 0.85) {
          bs.mode = 'held';
          bs.holder = interceptor;
          bs.targetReceiver = null;
          bs.holdTimer = 16 + Math.floor(Math.random() * 18);
          interceptor.touchRing = 1.0;
          spawnTouchRipple(state.ballPos.x, state.ballPos.y, '#38bdf8');
          const touchEl = document.getElementById('liveTouchBadge');
          if (touchEl) {
            const teamCode = interceptor.side === 'home' ? state.homeTeam.code : state.awayTeam.code;
            touchEl.textContent = `👟 ${interceptor.fullName} (${teamCode}) chạm bóng cản phá!`;
          }
          return;
        }

        // Ball physically reaches receiver's feet!
        if (t >= 1) {
          bs.mode = 'held';
          bs.holder = bs.targetReceiver;
          bs.targetReceiver.touchRing = 1.0;
          bs.holdTimer = 16 + Math.floor(Math.random() * 20);
          spawnTouchRipple(state.ballPos.x, state.ballPos.y, '#10b981');
          const touchEl = document.getElementById('liveTouchBadge');
          if (touchEl) {
            const teamCode = bs.holder.side === 'home' ? state.homeTeam.code : state.awayTeam.code;
            touchEl.textContent = `👟 ${bs.holder.fullName} (${teamCode}) khống chế bóng`;
          }
          bs.targetReceiver = null;
        }
      }
    }

    // Draw Left & Right Goal Nets with Mesh Grid & Ripple bulge when ball hits net
    function drawGoalNets(w, h, padX, padY, fieldW, fieldH) {
      const goalTop = h * 0.36;
      const goalBottom = h * 0.64;
      const goalH = goalBottom - goalTop;
      const netDepth = padX - 4;

      const leftRipple = (state.shotAnim.active && state.shotAnim.side === 'away' && state.shotAnim.phase === 'in_net')
        ? Math.sin(state.shotAnim.netRipple) * 6 : 0;
      const rightRipple = (state.shotAnim.active && state.shotAnim.side === 'home' && state.shotAnim.phase === 'in_net')
        ? Math.sin(state.shotAnim.netRipple) * 6 : 0;

      function renderNetBox(x0, y0, netW, netH, isLeft, bulge) {
        ctx.save();
        ctx.fillStyle = bulge !== 0 ? 'rgba(250, 204, 21, 0.22)' : 'rgba(255, 255, 255, 0.08)';
        ctx.fillRect(x0 - (isLeft ? bulge : 0), y0, netW + Math.abs(bulge), netH);

        ctx.strokeStyle = bulge !== 0 ? 'rgba(250, 204, 21, 0.75)' : 'rgba(255, 255, 255, 0.28)';
        ctx.lineWidth = 1;
        const cols = 4;
        const rows = 7;
        for (let c = 1; c < cols; c++) {
          const cx = x0 + (netW / cols) * c;
          ctx.beginPath();
          ctx.moveTo(cx, y0);
          ctx.lineTo(cx, y0 + netH);
          ctx.stroke();
        }
        for (let r = 1; r < rows; r++) {
          const ry = y0 + (netH / rows) * r;
          ctx.beginPath();
          ctx.moveTo(x0, ry);
          ctx.lineTo(x0 + netW, ry);
          ctx.stroke();
        }

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2.5;
        ctx.strokeRect(x0 - (isLeft ? bulge * 0.5 : 0), y0, netW + Math.abs(bulge * 0.5), netH);

        const postX = isLeft ? x0 + netW : x0;
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.arc(postX, y0, 3.5, 0, Math.PI * 2);
        ctx.arc(postX, y0 + netH, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      renderNetBox(padX - netDepth, goalTop, netDepth, goalH, true, leftRipple);
      renderNetBox(w - padX, goalTop, netDepth, goalH, false, rightRipple);
    }

    function drawPitch() {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const padX = Math.max(24, w * 0.048);
      const padY = 12;
      const fieldW = w - padX * 2;
      const fieldH = h - padY * 2;

      // Outer stadium apron
      ctx.fillStyle = '#022c22';
      ctx.fillRect(0, 0, w, h);

      // Turf stripes inside field
      const stripeCount = 12;
      const stripeW = fieldW / stripeCount;
      for (let i = 0; i < stripeCount; i++) {
        ctx.fillStyle = i % 2 === 0 ? '#064e3b' : '#065f46';
        ctx.fillRect(padX + i * stripeW, padY, stripeW, fieldH);
      }

      // Goal flash effect
      if (state.goalFlashTimer > 0) {
        ctx.fillStyle = `rgba(250, 204, 21, ${state.goalFlashTimer * 0.015})`;
        ctx.fillRect(0, 0, w, h);
        state.goalFlashTimer--;
      }

      // Pitch boundary & markings
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.42)';
      ctx.lineWidth = 1.6;
      ctx.strokeRect(padX, padY, fieldW, fieldH);

      // Halfway line & center circle
      ctx.beginPath();
      ctx.moveTo(w / 2, padY);
      ctx.lineTo(w / 2, h - padY);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(w / 2, h / 2, Math.min(fieldW, fieldH) * 0.16, 0, Math.PI * 2);
      ctx.stroke();

      // Penalty boxes & 6-yard boxes
      const boxW = fieldW * 0.14;
      const boxH = fieldH * 0.56;
      ctx.strokeRect(padX, (h - boxH) / 2, boxW, boxH);
      ctx.strokeRect(w - padX - boxW, (h - boxH) / 2, boxW, boxH);

      const smallBoxW = fieldW * 0.055;
      const smallBoxH = fieldH * 0.32;
      ctx.strokeRect(padX, (h - smallBoxH) / 2, smallBoxW, smallBoxH);
      ctx.strokeRect(w - padX - smallBoxW, (h - smallBoxH) / 2, smallBoxW, smallBoxH);

      // Draw Protruding Left & Right Goal Nets
      drawGoalNets(w, h, padX, padY, fieldW, fieldH);

      // Step player-ball contact & passing physics
      updatePlayersAndBallTouchPhysics();

      // Draw Pass Trajectory Line when a player passes the ball
      if (state.ballSim.passLine && state.ballSim.passLine.alpha > 0) {
        const pl = state.ballSim.passLine;
        ctx.save();
        ctx.strokeStyle = `rgba(253, 224, 71, ${pl.alpha * 0.45})`;
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(pl.x1 * w, pl.y1 * h);
        ctx.lineTo(pl.x2 * w, pl.y2 * h);
        ctx.stroke();
        ctx.restore();
        pl.alpha -= 0.025;
      }

      // Draw Expanding Touch Ripples where a player's foot touches/kicks the ball
      for (let i = state.ballSim.touchRipples.length - 1; i >= 0; i--) {
        const rp = state.ballSim.touchRipples[i];
        ctx.beginPath();
        ctx.arc(rp.x * w, rp.y * h, rp.r, 0, Math.PI * 2);
        ctx.strokeStyle = rp.color;
        ctx.globalAlpha = Math.max(0, rp.alpha);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.globalAlpha = 1.0;
        rp.r += 0.9;
        rp.alpha -= 0.045;
        if (rp.alpha <= 0) state.ballSim.touchRipples.splice(i, 1);
      }

      // Draw all 22 players (11 Home + 11 Away)
      state.players.forEach(p => {
        const px = Math.max(padX + 8, Math.min(w - padX - 8, p.x * w));
        const py = Math.max(padY + 8, Math.min(h - padY - 8, p.y * h));
        const isBallHolder = (!state.shotAnim.active && state.ballSim.mode === 'held' && state.ballSim.holder === p);

        // Glowing control halo under player currently touching/dribbling the ball
        if (isBallHolder || p.touchRing > 0) {
          ctx.beginPath();
          ctx.arc(px, py, 12 + p.touchRing * 4, 0, Math.PI * 2);
          ctx.fillStyle = isBallHolder ? 'rgba(250, 204, 21, 0.28)' : `rgba(52, 211, 153, ${p.touchRing * 0.35})`;
          ctx.fill();
          ctx.strokeStyle = isBallHolder ? '#facc15' : '#34d399';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Player body circle
        ctx.beginPath();
        ctx.arc(px, py, isBallHolder ? 7.5 : 6.5, 0, Math.PI * 2);
        ctx.fillStyle = p.side === 'home' ? state.homeTeam.colors[0] : state.awayTeam.colors[0];
        ctx.fill();
        ctx.lineWidth = isBallHolder ? 2.5 : 1.8;
        ctx.strokeStyle = isBallHolder ? '#fde047' : '#ffffff';
        ctx.stroke();

        // Player short name label
        if (p.name) {
          ctx.font = isBallHolder ? 'extrabold 9.5px Inter, sans-serif' : 'bold 8.5px Inter, sans-serif';
          ctx.fillStyle = isBallHolder ? '#fde047' : 'rgba(255,255,255,0.88)';
          ctx.textAlign = 'center';
          ctx.fillText(p.name, px, py + 15);
        }
      });

      // Ball physics when a goal shot is flying into the net
      if (state.shotAnim.active) {
        if (state.shotAnim.phase === 'flying') {
          state.shotAnim.progress += 0.085;
          const t = Math.min(1, state.shotAnim.progress);
          const arcY = Math.sin(t * Math.PI) * -0.04;
          state.ballPos.x = state.shotAnim.startX + (state.shotAnim.targetX - state.shotAnim.startX) * t;
          state.ballPos.y = state.shotAnim.startY + (state.shotAnim.targetY - state.shotAnim.startY) * t + arcY;

          state.ballTrail.push({ x: state.ballPos.x * w, y: state.ballPos.y * h });
          if (state.ballTrail.length > 12) state.ballTrail.shift();

          if (t >= 1) {
            state.shotAnim.phase = 'in_net';
            state.shotAnim.netHoldFrames = 65;
            state.shotAnim.netRipple = 0;
            state.shotAnim.particles = [];
            for (let i = 0; i < 18; i++) {
              const angle = Math.random() * Math.PI * 2;
              const spd = 1.2 + Math.random() * 3.2;
              state.shotAnim.particles.push({
                x: state.ballPos.x * w,
                y: state.ballPos.y * h,
                vx: Math.cos(angle) * spd,
                vy: Math.sin(angle) * spd,
                life: 1.0
              });
            }
          }
        } else if (state.shotAnim.phase === 'in_net') {
          state.shotAnim.netRipple += 0.55;
          state.shotAnim.netHoldFrames--;
          state.ballPos.x = state.shotAnim.targetX + Math.sin(state.shotAnim.netRipple) * 0.004;
          state.ballPos.y = state.shotAnim.targetY + Math.cos(state.shotAnim.netRipple) * 0.004;

          if (state.shotAnim.netHoldFrames <= 0) {
            state.shotAnim.active = false;
            state.ballTrail = [];
            // Restart kick-off from center with conceding team's forward
            const kickoffSide = state.shotAnim.side === 'home' ? 'away' : 'home';
            const restartPlayer = state.players.find(p => p.side === kickoffSide && p.role === 'FW') || state.players[0];
            restartPlayer.x = 0.5;
            restartPlayer.y = 0.5;
            state.ballSim.holder = restartPlayer;
            state.ballSim.mode = 'held';
            state.ballSim.holdTimer = 20;
            state.ballPos.x = 0.5;
            state.ballPos.y = 0.5;
          }
        }
      }

      // Draw fire trail behind ball during a shot
      if (state.ballTrail.length > 1) {
        for (let i = 0; i < state.ballTrail.length; i++) {
          const pt = state.ballTrail[i];
          const ratio = (i + 1) / state.ballTrail.length;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 2 + ratio * 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(251, 191, 36, ${ratio * 0.65})`;
          ctx.fill();
        }
      }

      // Draw net impact particles when ball hits the net
      if (state.shotAnim.active && state.shotAnim.phase === 'in_net') {
        state.shotAnim.particles.forEach(pt => {
          pt.x += pt.vx;
          pt.y += pt.vy;
          pt.life -= 0.03;
          if (pt.life > 0) {
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(250, 204, 21, ${pt.life})`;
            ctx.fill();
          }
        });
      }

      // Draw the football right at the player's feet or along the pass/shot trajectory
      const bx = state.ballPos.x * w;
      const by = state.ballPos.y * h;
      ctx.beginPath();
      ctx.arc(bx, by, state.shotAnim.active ? 6.5 : 5.2, 0, Math.PI * 2);
      ctx.fillStyle = state.shotAnim.active ? '#fde047' : '#ffffff';
      ctx.fill();
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = '#0f172a';
      ctx.stroke();

      requestAnimationFrame(drawPitch);
    }

    // =========================================================================
    // 9. UI RENDERING & EVENT HANDLERS
    // =========================================================================
    function syncOutcomeUI() {
      const btnH = document.getElementById('btnOutcomeHome');
      const btnD = document.getElementById('btnOutcomeDraw');
      const btnA = document.getElementById('btnOutcomeAway');
      const lblH = document.getElementById('lblOutcomeHomeTeam');
      const lblA = document.getElementById('lblOutcomeAwayTeam');
      const statusTxt = document.getElementById('selectedOutcomeText');

      if (lblH) lblH.textContent = state.homeTeam.name;
      if (lblA) lblA.textContent = state.awayTeam.name;

      const baseClass = 'outcome-btn score-ctrl btn-tap py-2.5 px-3 rounded-xl border border-white/15 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-extrabold text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition';
      if (btnH) btnH.className = state.predOutcome === 'home'
        ? 'outcome-btn score-ctrl btn-tap py-2.5 px-3 rounded-xl border-2 border-emerald-400 bg-emerald-500/25 text-white font-extrabold text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition shadow-lg'
        : baseClass;
      if (btnD) btnD.className = state.predOutcome === 'draw'
        ? 'outcome-btn score-ctrl btn-tap py-2.5 px-3 rounded-xl border-2 border-amber-400 bg-amber-500/25 text-white font-extrabold text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition shadow-lg'
        : baseClass;
      if (btnA) btnA.className = state.predOutcome === 'away'
        ? 'outcome-btn score-ctrl btn-tap py-2.5 px-3 rounded-xl border-2 border-sky-400 bg-sky-500/25 text-white font-extrabold text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition shadow-lg'
        : baseClass;

      if (statusTxt) {
        const labelMap = {
          home: `Đang chọn: ${state.homeTeam.code} Thắng (+60đ kết quả)`,
          draw: `Đang chọn: Hai đội Hòa (+60đ kết quả)`,
          away: `Đang chọn: ${state.awayTeam.code} Thắng (+60đ kết quả)`
        };
        statusTxt.textContent = labelMap[state.predOutcome] || '';
      }
    }

    function updateScoreDisplay(syncOutcomeFromScore = true) {
      document.getElementById('predHomeScore').textContent = state.predHome;
      document.getElementById('predAwayScore').textContent = state.predAway;
      if (syncOutcomeFromScore) {
        if (state.predHome > state.predAway) state.predOutcome = 'home';
        else if (state.predHome < state.predAway) state.predOutcome = 'away';
        else state.predOutcome = 'draw';
      }
      syncOutcomeUI();
    }

    function updateStatsUI() {
      document.getElementById('statPoints').textContent = state.points.toLocaleString('vi-VN');
      document.getElementById('statStreak').textContent = state.streak;
      document.getElementById('statBest').textContent = state.bestPoints.toLocaleString('vi-VN');
      document.getElementById('statTotalMatches').textContent = state.totalMatches;
      document.getElementById('statExactHits').textContent = state.exactHits;
      document.getElementById('statOutcomeHits').textContent = state.outcomeHits;
    }

    function renderHistory() {
      const container = document.getElementById('historyList');
      document.getElementById('historyCountBadge').textContent = `${state.history.length} trận`;
      if (state.history.length === 0) {
        container.innerHTML = `<div class="text-xs text-slate-400 text-center py-6">Chưa có trận đấu nào. Hãy dự đoán trận đầu tiên!</div>`;
        return;
      }
      container.innerHTML = state.history.slice(0, 12).map(item => {
        const badge = item.exactHit
          ? `<span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px]">Đúng tỷ số +${item.earned}</span>`
          : (item.outcomeHit
            ? `<span class="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-bold text-[10px]">Đúng KQ +${item.earned}</span>`
            : `<span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold text-[10px]">Trượt (0đ)</span>`);

        return `
          <div class="p-2.5 rounded-xl bg-slate-950/80 border border-white/5 flex items-center justify-between gap-2 text-xs">
            <div class="truncate">
              <div class="font-bold text-white truncate flex items-center gap-1.5">${getTeamLogoHtml(item.home, 'w-4 h-4')} <span>${item.home.code}</span> <span class="text-emerald-400">${item.actual}</span> <span>${item.away.code}</span> ${getTeamLogoHtml(item.away, 'w-4 h-4')}</div>
              <div class="text-[10px] text-slate-400">${item.tournament || ''} • Đoán: <span class="text-slate-200 font-semibold">${item.pred}</span></div>
            </div>
            <div class="shrink-0">${badge}</div>
          </div>
        `;
      }).join('');
    }

    function renderTeamsDirectory(filterQuery = '') {
      const container = document.getElementById('teamsDirectoryList');
      const tourney = getActiveTournament();
      const q = filterQuery.trim().toLowerCase();
      const pool = getTeamsInActiveTournament().filter(t =>
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.code.toLowerCase().includes(q) ||
        t.stars.some(s => s.toLowerCase().includes(q))
      );

      document.getElementById('directoryCountTitle').textContent = `${tourney.icon} ${tourney.shortName} (${pool.length} đội)`;

      container.innerHTML = pool.map(t => `
        <button type="button" data-team-id="${t.id}" class="team-dir-btn btn-tap p-2.5 rounded-xl bg-slate-950/80 hover:bg-slate-800/90 border border-white/10 flex items-center gap-2.5 text-left transition">
          ${getTeamLogoHtml(t, 'w-7 h-7')}
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-1">
              <span class="font-bold text-xs text-white truncate">${t.name}</span>
              <span class="text-[10px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-300 shrink-0">OVR ${t.rating}</span>
            </div>
            <div class="text-[10px] text-slate-400 truncate mt-0.5">${t.stars.slice(0, 4).join(', ')}...</div>
          </div>
        </button>
      `).join('');

      container.querySelectorAll('.team-dir-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          SoundFX.click();
          const tourney = getActiveTournament();
          const activeTeams = getTeamsInActiveTournament();
          const chosen = activeTeams.find(t => t.id === btn.dataset.teamId);
          if (!chosen) return;

          ensureTeamInMainGroup4(tourney.id, chosen);
          const tableObj = state.standingsByTourney[tourney.id];
          const entry = tableObj[chosen.id];
          state.focusedTeamId = chosen.id;
          if (entry && entry.group !== 'BXH') {
            state.focusedGroup = entry.group;
            state.activeGroupFilter = entry.group;
          }
          state.roundNumber++;
          pickRandomMatchInActiveTournament(false);
        });
      });
    }

    function populateCustomModalSelects() {
      const tourney = getActiveTournament();
      const pool = getTeamsInActiveTournament();
      document.getElementById('customModalLeagueNote').textContent = `${tourney.icon} Giải đấu hiện tại: ${tourney.name} (${pool.length} đội cùng giải)`;

      const selHome = document.getElementById('selectHomeTeam');
      const selAway = document.getElementById('selectAwayTeam');
      const optionsHtml = pool.map(t => `<option value="${t.id}">${t.iconText || t.icon} ${t.name} (OVR ${t.rating})</option>`).join('');
      selHome.innerHTML = optionsHtml;
      selAway.innerHTML = optionsHtml;
      if (pool.some(t => t.id === state.homeTeam.id)) selHome.value = state.homeTeam.id;
      if (pool.some(t => t.id === state.awayTeam.id)) selAway.value = state.awayTeam.id;
    }

    // =========================================================================
    // 10. BIND CONTROLS ON WINDOW LOAD
    // =========================================================================
    window.addEventListener('load', () => {
      // Prevent browser double-tap / double-click zoom when tapping score buttons rapidly
      document.addEventListener('dblclick', (e) => {
        e.preventDefault();
      }, { passive: false });
      loadSavedStats();
      updateStatsUI();
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Score adjustment buttons
      document.getElementById('btnHomePlus').addEventListener('click', () => {
        if (state.phase !== 'predicting') return;
        SoundFX.click();
        state.predHome = (state.predHome + 1) % 10;
        updateScoreDisplay();
      });
      document.getElementById('btnHomeMinus').addEventListener('click', () => {
        if (state.phase !== 'predicting') return;
        SoundFX.click();
        state.predHome = (state.predHome + 9) % 10;
        updateScoreDisplay();
      });
      document.getElementById('btnAwayPlus').addEventListener('click', () => {
        if (state.phase !== 'predicting') return;
        SoundFX.click();
        state.predAway = (state.predAway + 1) % 10;
        updateScoreDisplay();
      });
      document.getElementById('btnAwayMinus').addEventListener('click', () => {
        if (state.phase !== 'predicting') return;
        SoundFX.click();
        state.predAway = (state.predAway + 9) % 10;
        updateScoreDisplay();
      });

      // Quick presets
      document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (state.phase !== 'predicting') return;
          SoundFX.click();
          const [h, a] = btn.dataset.preset.split('-').map(Number);
          state.predHome = h;
          state.predAway = a;
          updateScoreDisplay(true);
        });
      });

      // Win / Draw / Loss (Thắng / Hòa / Thua) Outcome Buttons
      document.querySelectorAll('.outcome-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (state.phase !== 'predicting') return;
          SoundFX.click();
          const choice = btn.dataset.outcome;
          state.predOutcome = choice;
          if (choice === 'home' && state.predHome <= state.predAway) {
            state.predHome = state.predAway + 1;
          } else if (choice === 'away' && state.predAway <= state.predHome) {
            state.predAway = state.predHome + 1;
          } else if (choice === 'draw' && state.predHome !== state.predAway) {
            state.predAway = state.predHome;
          }
          updateScoreDisplay(false);
        });
      });

      // Jump smoothly to dedicated FIFA World Ranking Section
      const btnJumpFifa = document.getElementById('btnJumpFifaSection');
      if (btnJumpFifa) {
        btnJumpFifa.addEventListener('click', () => {
          SoundFX.click();
          const sec = document.getElementById('fifaWorldRankingSection');
          if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        });
      }

      document.querySelectorAll('.fifa-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          SoundFX.click();
          state.fifaFilter = btn.dataset.fifafilter;
          document.querySelectorAll('.fifa-filter-btn').forEach(b => {
            b.className = b.dataset.fifafilter === state.fifaFilter
              ? 'fifa-filter-btn px-2 py-1 rounded-md font-extrabold bg-sky-400 text-slate-950'
              : 'fifa-filter-btn px-2 py-1 rounded-md font-semibold text-slate-300 hover:text-white';
          });
          renderFifaWorldRankings();
        });
      });

      document.getElementById('fifaSearchInput').addEventListener('input', () => {
        renderFifaWorldRankings();
      });

      // Lock or Next Match button
      document.getElementById('btnLockPrediction').addEventListener('click', () => {
        if (state.phase === 'predicting') {
          lockPredictionAndSimulate();
        } else if (state.phase === 'finished') {
          SoundFX.click();
          state.roundNumber++;
          pickRandomMatchInActiveTournament();
        }
      });

      // Simulation Speed Toggle
      document.getElementById('btnSimSpeed').addEventListener('click', () => {
        SoundFX.click();
        if (state.speedMultiplier === 1) {
          state.speedMultiplier = 4;
          document.getElementById('simSpeedText').textContent = 'Tốc độ: Nhanh 4x';
        } else if (state.speedMultiplier === 4) {
          state.speedMultiplier = 12;
          document.getElementById('simSpeedText').textContent = 'Tốc độ: Siêu tốc 12x';
        } else {
          state.speedMultiplier = 1;
          document.getElementById('simSpeedText').textContent = 'Tốc độ: Chuẩn (1p/Hiệp)';
        }
      });

      document.getElementById('btnNextMatchOverlay').addEventListener('click', () => {
        SoundFX.click();
        state.roundNumber++;
        pickRandomMatchInActiveTournament();
      });

      document.getElementById('btnSkipMatch').addEventListener('click', () => {
        SoundFX.click();
        state.roundNumber++;
        pickRandomMatchInActiveTournament(true);
      });

      // Group Filter Tabs
      document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.addEventListener('click', () => {
          SoundFX.click();
          state.groupFilter = tab.dataset.mode;
          document.querySelectorAll('.mode-tab').forEach(t => {
            t.className = 'mode-tab px-2.5 py-1 rounded-md font-semibold text-slate-300 hover:text-white transition';
          });
          tab.className = 'mode-tab px-2.5 py-1 rounded-md font-bold bg-emerald-500 text-slate-950 transition';

          // Automatically select the first tournament in this group if current isn't in group
          const matching = TOURNAMENTS.filter(t =>
            state.groupFilter === 'all' ||
            t.group === state.groupFilter ||
            (Array.isArray(t.groups) && t.groups.includes(state.groupFilter))
          );
          if (matching.length > 0 && !matching.some(t => t.id === state.activeTournamentId)) {
            selectTournament(matching[0].id);
          } else {
            renderTournamentSelectorBar();
          }
        });
      });

      // League Select Dropdown Filter
      document.getElementById('selectLeagueFilter').addEventListener('change', (e) => {
        SoundFX.click();
        state.groupFilter = 'all';
        document.querySelectorAll('.mode-tab').forEach(t => {
          t.className = t.dataset.mode === 'all'
            ? 'mode-tab px-2.5 py-1 rounded-md font-bold bg-emerald-500 text-slate-950 transition'
            : 'mode-tab px-2.5 py-1 rounded-md font-semibold text-slate-300 hover:text-white transition';
        });
        selectTournament(e.target.value);
      });

      // Directory Search
      document.getElementById('teamSearchInput').addEventListener('input', (e) => {
        renderTeamsDirectory(e.target.value);
      });

      // Sound Toggle
      document.getElementById('btnToggleSound').addEventListener('click', () => {
        SoundFX.enabled = !SoundFX.enabled;
        const icon = document.getElementById('iconSound');
        icon.setAttribute('data-lucide', SoundFX.enabled ? 'volume-2' : 'volume-x');
        icon.className = SoundFX.enabled ? 'w-5 h-5 text-emerald-400' : 'w-5 h-5 text-slate-500';
        if (window.lucide) lucide.createIcons();
        if (SoundFX.enabled) SoundFX.click();
      });

      // Reset stats
      document.getElementById('btnResetStats').addEventListener('click', () => {
        SoundFX.click();
        state.points = 0;
        state.streak = 0;
        state.totalMatches = 0;
        state.exactHits = 0;
        state.outcomeHits = 0;
        state.history = [];
        saveStats();
        updateStatsUI();
        renderHistory();
      });

      // Custom Match Modal
      const modalCustom = document.getElementById('modalCustomMatch');
      document.getElementById('btnOpenCustomMatch').addEventListener('click', () => {
        SoundFX.click();
        populateCustomModalSelects();
        modalCustom.classList.remove('hidden');
      });
      document.getElementById('btnCloseCustomModal').addEventListener('click', () => modalCustom.classList.add('hidden'));
      document.getElementById('btnCancelCustom').addEventListener('click', () => modalCustom.classList.add('hidden'));
      document.getElementById('btnApplyCustomMatch').addEventListener('click', () => {
        SoundFX.click();
        const pool = getTeamsInActiveTournament();
        const hId = document.getElementById('selectHomeTeam').value;
        let aId = document.getElementById('selectAwayTeam').value;
        if (hId === aId) {
          const alt = pool.find(t => t.id !== hId);
          if (alt) aId = alt.id;
        }
        const home = pool.find(t => t.id === hId) || pool[0];
        const away = pool.find(t => t.id === aId) || pool[1];
        modalCustom.classList.add('hidden');
        state.roundNumber++;
        setupMatch(home, away);
      });

      // Rules Modal
      const modalRules = document.getElementById('modalRules');
      document.getElementById('btnOpenRules').addEventListener('click', () => {
        SoundFX.click();
        modalRules.classList.remove('hidden');
      });
      document.getElementById('btnCloseRulesModal').addEventListener('click', () => modalRules.classList.add('hidden'));
      document.getElementById('btnGotItRules').addEventListener('click', () => modalRules.classList.add('hidden'));

      // Keyboard shortcuts
      window.addEventListener('keydown', (e) => {
        if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
        if (state.phase === 'predicting') {
          if (e.key === 'w' || e.key === 'W') { state.predHome = (state.predHome + 1) % 10; updateScoreDisplay(); SoundFX.click(); }
          if (e.key === 's' || e.key === 'S') { state.predHome = (state.predHome + 9) % 10; updateScoreDisplay(); SoundFX.click(); }
          if (e.key === 'ArrowUp') { e.preventDefault(); state.predAway = (state.predAway + 1) % 10; updateScoreDisplay(); SoundFX.click(); }
          if (e.key === 'ArrowDown') { e.preventDefault(); state.predAway = (state.predAway + 9) % 10; updateScoreDisplay(); SoundFX.click(); }
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lockPredictionAndSimulate(); }
        } else if (state.phase === 'finished' && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          state.roundNumber++;
          pickRandomMatchInActiveTournament();
        }
      });

      document.getElementById('selectCompetitionStage').addEventListener('change', (e) => {
        SoundFX.click();
        state.stageIndex = Number(e.target.value) || 0;
        updateStageFormatUI();
      });

      // Initialize with LPBank V.League 1 selected
      initStandingsForTournament(state.activeTournamentId);
      renderTournamentSelectorBar();
      updateStageFormatUI();
      renderTeamsDirectory();
      setupMatch(TEAMS_DB[0], TEAMS_DB[1]);
      requestAnimationFrame(drawPitch);
    });
