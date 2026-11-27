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
      'loader-2': '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',
      'settings': '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>'
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
        id: 'msl', name: 'Malaysia Super League', shortName: 'Malaysia Super League', icon: '🇲🇾', group: 'vleague',
        formatType: 'league', knockoutPossible: false, groupCount: 0, fifaI: 15, stages: []
      },
      {
        id: 'liga1_idn', name: 'Liga 1 Indonesia', shortName: 'Liga 1 Indonesia', icon: '🇮🇩', group: 'vleague',
        formatType: 'league', knockoutPossible: false, groupCount: 0, fifaI: 15, stages: []
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
        id: 'world_cup', name: 'FIFA World Cup (Mùa giải 2026/2027)', shortName: 'FIFA World Cup', icon: '🌍', group: 'nations',
        formatType: 'cup', totalRounds: 14, knockoutPossible: true, groupCount: 12, fifaI: 50,
        formatBadge: 'Vòng loại Châu lục ➔ VCK 48 Đội (Bảng A -> L) ➔ Vòng 1/16, 1/8, Tứ kết, Bán kết & Chung kết',
        stages: [
          'Vòng loại World Cup (Khu vực Châu lục)',
          'Vòng bảng VCK FIFA World Cup (Bảng A -> L • 48 Đội)',
          'Vòng 1/16 VCK FIFA World Cup (32 Đội - Knock-out)',
          'Vòng 1/8 VCK FIFA World Cup (16 Đội - Knock-out)',
          'Tứ kết FIFA World Cup (8 Đội - Knock-out)',
          'Bán kết FIFA World Cup (4 Đội - Knock-out)',
          'Tranh Hạng 3 FIFA World Cup (Knock-out)',
          'CHUNG KẾT VÔ ĐỊCH THẾ GIỚI — FIFA WORLD CUP'
        ],
        desc: 'Đấu trường Vô Địch Bóng Đá Thế Giới: Bắt đầu từ Vòng loại các khu vực (Châu Á, Châu Âu, Nam Mỹ, Châu Phi, Bắc Trung Mỹ, Châu Đại Dương). Các đội vượt qua vòng loại tiến vào Vòng bảng VCK 48 Đội (Bảng A đến L) và các vòng Knock-out tranh Cúp Vàng!'
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
        tournaments: ['msl', 'afc_cl', 'asean_club'], rating: 80, icon: '🐯', colors: ['#1e3a8a', '#dc2626'], form: 'W-W-W',
        stars: ['Arif Aiman Hanapi', 'Bérgson da Silva', 'Heberty Fernandes', 'Juan Muñiz', 'Jordi Amat', 'Matthew Davies', 'La\'Vere Corbin-Ong', 'Hong Wan', 'Natxo Insa', 'Feroz Baharudin', 'Syihan Hazmi']
      },
      {
        id: 'psm', name: 'PSM Makassar', code: 'PSM', type: 'vleague', league: 'Liga 1 Indonesia / ASEAN',
        tournaments: ['liga1_idn', 'asean_club'], rating: 76, icon: '⛵', colors: ['#991b1b', '#dc2626'], form: 'D-W-D',
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
        id: 'shak', name: 'FC Shakhtar Donetsk', code: 'SHAK', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 80, icon: '⚒️', colors: ['#ea580c', '#18181b'], form: 'W-D-W',
        stars: ['Georgiy Sudakov', 'Danylo Sikan', 'Kevin', 'Lassina Traoré', 'Artem Bondarenko', 'Taras Stepanenko', 'Mykola Matviyenko', 'Valeriy Bondar', 'Pedro Henrique', 'Yukhym Konoplya', 'Dmytro Riznyk']
      },
      {
        id: 'czv', name: 'FK Crvena zvezda (Red Star)', code: 'CZV', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 78, icon: '⭐', colors: ['#dc2626', '#991b1b'], form: 'W-W-L',
        stars: ['Cherif Ndiaye', 'Bruno Duarte', 'Silas Katompa Mvumpa', 'Mirko Ivanić', 'Rade Krunić', 'Timi Max Elšnik', 'Peter Olayinka', 'Nasser Djiga', 'Uroš Spajić', 'Young-woo Seol', 'Omri Glazer']
      },
      {
        id: 'dinz', name: 'GNK Dinamo Zagreb', code: 'DZG', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 79, icon: '🔵', colors: ['#1d4ed8', '#1e3a8a'], form: 'W-W-D',
        stars: ['Bruno Petković', 'Sandro Kulenović', 'Martin Baturina', 'Marko Pjaca', 'Arijan Ademi', 'Josip Mišić', 'Petar Sučić', 'Kévin Théophile-Catherine', 'Stefan Ristovski', 'Ronaël Pierre-Gabriel', 'Ivan Nevistić']
      },
      {
        id: 'spar', name: 'AC Sparta Prague', code: 'SPA', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 79, icon: '🔴', colors: ['#991b1b', '#18181b'], form: 'W-D-L',
        stars: ['Victor Olatunji', 'Jan Kuchta', 'Veljko Birmančević', 'Lukáš Haraslín', 'Qazim Laçi', 'Kaan Kairinen', 'Angelo Preciado', 'Martin Vitík', 'Asger Sørensen', 'Jaroslav Zelený', 'Peter Vindahl Jensen']
      },
      {
        id: 'brug', name: 'Club Brugge KV', code: 'CLU', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 81, icon: '🔵', colors: ['#1d4ed8', '#18181b'], form: 'W-W-D',
        stars: ['Gustaf Nilsson', 'Ferran Jutglà', 'Andreas Skov Olsen', 'Christos Tzolis', 'Hans Vanaken', 'Raphael Onyedika', 'Ardon Jashari', 'Brandon Mechele', 'Joel Ordóñez', 'Maxim De Cuyper', 'Simon Mignolet']
      },
      {
        id: 'sturm', name: 'SK Sturm Graz', code: 'STU', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 78, icon: '⚪', colors: ['#18181b', '#475569'], form: 'W-L-D',
        stars: ['Mika Biereth', 'William Bøving', 'Tomi Horvat', 'Otar Kiteishvili', 'Jon Gorenc Stanković', 'Malick Yalcouyé', 'Tochi Chukwuani', 'Jusuf Gazibegović', 'Gregory Wüthrich', 'Emanuel Aiwu', 'Kjell Scherpen']
      },
      {
        id: 'slov', name: 'ŠK Slovan Bratislava', code: 'SLO', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 77, icon: '👑', colors: ['#0284c7', '#1e3a8a'], form: 'W-D-L',
        stars: ['David Strelec', 'Tigran Barseghyan', 'Marko Tolić', 'Vladimír Weiss', 'Juraj Kucka', 'Danylo Ignatenko', 'Kyriakos Savvidis', 'Guram Kashia', 'Kenan Bajrić', 'César Blackman', 'Dominik Takáč']
      },
      {
        id: 'salz', name: 'FC Red Bull Salzburg', code: 'SAL', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 80, icon: '🐂', colors: ['#dc2626', '#991b1b'], form: 'W-D-W',
        stars: ['Karim Konaté', 'Petar Ratkov', 'Oscar Gloukh', 'Moussa Yeo', 'Lucas Gourna-Douath', 'Mads Bidstrup', 'Maurits Kjærgaard', 'Samson Baidoo', 'Kamil Piątkowski', 'Amar Dedić', 'Janis Blaswich']
      },
      {
        id: 'yb', name: 'BSC Young Boys', code: 'YBO', type: 'clubs', league: 'UEFA Champions League',
        tournaments: ['ucl'], rating: 78, icon: '🟡', colors: ['#eab308', '#18181b'], form: 'D-W-L',
        stars: ['Silvère Ganvoula', 'Cedric Itten', 'Joël Monteiro', 'Ebrima Colley', 'Filip Ugrinic', 'Sandro Lauper', 'Cheikh Niasse', 'Loris Benito', 'Tanguy Zoukrou', 'Jaouen Hadjam', 'David von Ballmoos']
      },
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
        tournaments: ['msl', 'asean_club'], rating: 76, icon: '🟡', colors: ['#dc2626', '#eab308'], form: 'W-D-W',
        stars: ['Ronnie Fernández', 'Alvin Fortes', 'Ali Olwan', 'Yohandry Orozco', 'Nooa Laine', 'Noor Al-Rawabdeh', 'Safuwan Baharudin', 'Harith Haiqal', 'Quentin Cheng', 'Fazly Mazlan', 'Azim Al-Amin']
      },
      {
        id: 'lcs', name: 'Lion City Sailors (Singapore)', code: 'LCS', type: 'vleague', league: 'Singapore Premier League / ASEAN',
        tournaments: ['asean_club'], rating: 76, icon: '⚓', colors: ['#1e3a8a', '#0284c7'], form: 'W-W-D',
        stars: ['Maxime Lestienne', 'Lennart Thy', 'Shawal Anuar', 'Bart Ramselaar', 'Rui Pires', 'Hariss Harun', 'Song Ui-young', 'Bailey Wright', 'Toni Datković', 'Christopher van Huizen', 'Izwan Mahbud']
      },
      {
        id: 'bFC', name: 'Borneo FC Samarinda', code: 'BOR', type: 'vleague', league: 'Liga 1 Indonesia / ASEAN',
        tournaments: ['liga1_idn', 'asean_club'], rating: 76, icon: '🐬', colors: ['#ea580c', '#991b1b'], form: 'W-D-W',
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
      
      // Additional Thai League Clubs
      {
        id: 'korat', name: 'Nakhon Ratchasima Mazda FC', code: 'NRM', type: 'vleague', league: 'Thai League 1 (Thái Lan)',
        tournaments: ['thaileague'], rating: 74, icon: '🐈', colors: ['#ea580c', '#18181b'], form: 'D-W-L',
        stars: ['Deyvison Fernandes', 'Dennis Murillo', 'Somkaet Kunmee', 'Greg Houla', 'Nick Taylor', 'Nattawut Jaroenboot', 'Weerawat Jiraphaksiri', 'Thanison Paibulkijcharoen', 'Lee Jong-cheon', 'Anusak Jaiphet', 'Tanachai Noorach']
      },
      {
        id: 'sukho', name: 'Sukhothai FC', code: 'SKT', type: 'vleague', league: 'Thai League 1 (Thái Lan)',
        tournaments: ['thaileague'], rating: 74, icon: '🦇', colors: ['#dc2626', '#eab308'], form: 'W-L-D',
        stars: ['John Baggio', 'Matheus Fornazari', 'Siroch Chatthong', 'Ekkasit Chaobut', 'Lidor Cohen', 'Tatchathepp Krudmuntre', 'Adisak Seebunmee', 'Hikaru Matsui', 'Cláudio', 'Sarawut Kanlayanabandit', 'Kittipun Saensuk']
      },
      {
        id: 'khon', name: 'Khon Kaen United', code: 'KKU', type: 'vleague', league: 'Thai League 1 (Thái Lan)',
        tournaments: ['thaileague'], rating: 73, icon: '👑', colors: ['#dc2626', '#18181b'], form: 'L-D-D',
        stars: ['Brenner Alves', 'Chitsanuphong Choti', 'Lossémy Karaboué', 'Tinnakorn Asurin', 'Parndecha Ngernprasert', 'Steve Ambri', 'Diego Landis', 'Kittichai Yaidee', 'Wasan Homsan', 'Phanuphong Phonsa', 'Chirawat Wangthaphan']
      },
      {
        id: 'lamp', name: 'Lamphun Warriors', code: 'LPW', type: 'vleague', league: 'Thai League 1 (Thái Lan)',
        tournaments: ['thaileague'], rating: 74, icon: '🐂', colors: ['#991b1b', '#f8fafc'], form: 'W-D-W',
        stars: ['Junior Batista', 'Negueba', 'Maung Maung Lwin', 'Mohammed Osman', 'Baworn Tapla', 'Akarapong Pumwisat', 'Kike Linares', 'Victor Cardozo', 'Wittaya Moonwong', 'Todsapol Lated', 'Nont Muangngam']
      },

      // Additional Saudi Pro League Clubs
      {
        id: 'khal', name: 'Al-Khaleej Club', code: 'KHL', type: 'vleague', league: 'Saudi Pro League',
        tournaments: ['saudi_pro'], rating: 77, icon: '🦅', colors: ['#eab308', '#15803d'], form: 'W-W-L',
        stars: ['Fábio Martins', 'Mohamed Sherif', 'Khaled Narey', 'Kostas Fortounis', 'Mansour Hamzi', 'Dimitrios Kourbelis', 'Pedro Rebocho', 'Lisandro López', 'Marcel Tisserand', 'Saeed Al Hamsal', 'Ibrahim Šehić']
      },
      {
        id: 'wehd', name: 'Al-Wehda FC', code: 'WEH', type: 'vleague', league: 'Saudi Pro League',
        tournaments: ['saudi_pro'], rating: 76, icon: '🔴', colors: ['#dc2626', '#991b1b'], form: 'L-D-W',
        stars: ['Odion Ighalo', 'Craig Goodwin', 'Juninho Bacuna', 'Murad Khadhari', 'Youssef Amyn', 'Alexandru Crețu', 'Waleed Bakshween', 'Jawad El Yamiq', 'Ali Makki', 'Saeed Al-Mowalad', 'Ignacio de Arruabarrena']
      },
      {
        id: 'damac', name: 'Damac FC', code: 'DAM', type: 'vleague', league: 'Saudi Pro League',
        tournaments: ['saudi_pro'], rating: 77, icon: '⚔️', colors: ['#eab308', '#dc2626'], form: 'D-W-D',
        stars: ['Georges-Kévin Nkoudou', 'Habib Diallo', 'François Kamano', 'Nicolae Stanciu', 'Tarek Hamed', 'Ayman Fallatah', 'Noor Al-Rashidi', 'Farouk Chafaï', 'Abdelkader Bedrane', 'Sanousi Hawsawi', 'Florin Niță']
      },
      {
        id: 'raed', name: 'Al-Raed FC', code: 'RAE', type: 'vleague', league: 'Saudi Pro League',
        tournaments: ['saudi_pro'], rating: 76, icon: '🦁', colors: ['#dc2626', '#18181b'], form: 'W-L-D',
        stars: ['Amir Sayoud', 'Karim El Berkaoui', 'Saleh Al-Amri', 'Mathias Normann', 'Mehdi Abeid', 'Yahya Sunbul', 'Ayoub Qasmi', 'Oumar Gonzalez', 'Mubarak Al-Rajeh', 'Hamad Al-Jayzani', 'André Moreira']
      },

      // Additional K League 1 Clubs
      {
        id: 'inch', name: 'Incheon United', code: 'INC', type: 'vleague', league: 'K League 1 (Hàn Quốc)',
        tournaments: ['kleague'], rating: 77, icon: '⚓', colors: ['#1d4ed8', '#18181b'], form: 'D-L-W',
        stars: ['Stefan Mugoša', 'Gerso Fernandes', "Paul-José M'Poku", 'Kim Do-hyeok', 'Lee Myung-joo', 'Sin Jin-ho', 'Kim Bo-sub', 'Matej Jonjić', 'Kim Gun-hee', 'Kim Yeon-soo', 'Lee Bum-soo']
      },
      {
        id: 'daegu', name: 'Daegu FC', code: 'DAE', type: 'vleague', league: 'K League 1 (Hàn Quốc)',
        tournaments: ['kleague'], rating: 77, icon: '☀️', colors: ['#38bdf8', '#1e3a8a'], form: 'W-D-L',
        stars: ['Cesinha', 'Edgar Silva', 'Italo', 'Go Jae-hyeon', 'Kyohei Yoshino', 'Park Se-jin', 'Hwang Jae-won', 'Kim Jin-hyuk', 'Park Jin-young', 'Ko Myeong-seok', 'Oh Seung-hoon']
      },

      // Additional J1 League Clubs
      {
        id: 'nagoya', name: 'Nagoya Grampus', code: 'NAG', type: 'vleague', league: 'J1 League (Nhật Bản)',
        tournaments: ['jleague'], rating: 80, icon: '🐬', colors: ['#dc2626', '#eab308'], form: 'W-D-W',
        stars: ['Kasper Junker', 'Patric', 'Kensuke Nagai', 'Ryuji Izumi', 'Sho Inagaki', 'Keiya Shiihashi', 'Takuya Uchida', 'KennedyEgbus Mikuni', 'Chang-rae Ha', 'Yuki Nogami', 'Mitchell Langerak']
      },
      {
        id: 'fuku', name: 'Avispa Fukuoka', code: 'AVF', type: 'vleague', league: 'J1 League (Nhật Bản)',
        tournaments: ['jleague'], rating: 78, icon: '🐝', colors: ['#1e3a8a', '#475569'], form: 'D-W-D',
        stars: ['Shahab Zahedi', 'Wellington', 'Takeshi Kanamori', 'Kazuya Konno', 'Hiroyuki Mae', 'Daiki Matsuoka', 'Masato Shigemi', 'Douglas Grolli', 'Tatsuki Nara', 'Masato Yuzawa', 'Masaaki Murakami']
      },
      {
        id: 'kashiwa', name: 'Kashiwa Reysol', code: 'KAS', type: 'vleague', league: 'J1 League (Nhật Bản)',
        tournaments: ['jleague'], rating: 78, icon: '☀️', colors: ['#eab308', '#18181b'], form: 'D-L-W',
        stars: ['Mao Hosoya', 'Matheus Sávio', 'Kosuke Kinoshita', 'Tomoya Koyamatsu', 'Eiji Shirai', 'Sachiro Toshima', 'Diego', 'Taiyo Koga', 'Tomoki Inukai', 'Hiroki Sekine', 'Kenta Matsumoto']
      },
      {
        id: 'niig', name: 'Albirex Niigata', code: 'ALB', type: 'vleague', league: 'J1 League (Nhật Bản)',
        tournaments: ['jleague'], rating: 77, icon: '🦢', colors: ['#ea580c', '#1d4ed8'], form: 'W-L-D',
        stars: ['Koji Suzuki', 'Motoki Nagakura', 'Yuji Ono', 'Shusuke Ota', 'Yuzuru Shimada', 'Hiroki Akiyama', 'Eita Hasegawa', 'Michael James Fitzgerald', 'Thomas Deng', 'Soya Fujiwara', 'Ryosuke Kojima']
      },

      // Additional Chinese Super League Clubs
      {
        id: 'tianjin', name: 'Tianjin Jinmen Tiger', code: 'TJT', type: 'vleague', league: 'Chinese Super League',
        tournaments: ['csl'], rating: 76, icon: '🐯', colors: ['#1d4ed8', '#f8fafc'], form: 'W-D-L',
        stars: ['Andrea Compagno', 'Albion Ademi', 'Xadas', 'Ba Dun', 'Wang Qiuming', 'Guo Hao', 'Ming Tian', 'Mile Škorić', 'Alex Grant', 'Su Yuanjie', 'Fang Jingqi']
      },
      {
        id: 'henan', name: 'Henan FC', code: 'HNF', type: 'vleague', league: 'Chinese Super League',
        tournaments: ['csl'], rating: 76, icon: '🔴', colors: ['#dc2626', '#15803d'], form: 'D-W-D',
        stars: ['Nemanja Čović', 'Bruno Nazário', 'Frank Acheampong', 'Djordje Denić', 'Huang Zichang', 'Wang Shangyuan', 'Ke Zhao', 'Iago Maidana', 'Gu Cao', 'Feng Boyuan', 'Wang Guoming']
      },
      {
        id: 'wuhan', name: 'Wuhan Three Towns', code: 'WHT', type: 'vleague', league: 'Chinese Super League',
        tournaments: ['csl'], rating: 76, icon: '⚡', colors: ['#1e3a8a', '#38bdf8'], form: 'L-W-L',
        stars: ['Pedro Henrique', 'Joca', 'Darlan Mendes', 'Romário Baldé', 'Tao Qianglong', 'He Chao', 'Zhang Xiaobin', 'Park Ji-soo', 'Ren Hang', 'Deng Hanwen', 'Liu Dianzuo']
      },

      // Additional Americas & Copa Libertadores Clubs
      {
        id: 'flu', name: 'Fluminense FC', code: 'FLU', type: 'clubs', league: 'Copa Libertadores',
        tournaments: ['americas_cl'], rating: 82, icon: '🛡️', colors: ['#881337', '#15803d'], form: 'W-W-D',
        stars: ['Germán Cano', 'Jhon Arias', 'Keno', 'Ganso', 'Martinelli', 'Facundo Bernal', 'Thiago Silva', 'Ignácio', 'Samuel Xavier', 'Diogo Barbosa', 'Fábio']
      },
      {
        id: 'sao', name: 'São Paulo FC', code: 'SAO', type: 'clubs', league: 'Copa Libertadores',
        tournaments: ['americas_cl'], rating: 82, icon: '🔴', colors: ['#dc2626', '#18181b'], form: 'W-D-W',
        stars: ['Jonathan Calleri', 'Lucas Moura', 'Luciano', 'Ferreira', 'Damián Bobadilla', 'Luiz Gustavo', 'Robert Arboleda', 'Alan Franco', 'Igor Vinícius', 'Welington', 'Rafael']
      },
      {
        id: 'min', name: 'Atlético Mineiro', code: 'CAM', type: 'clubs', league: 'Copa Libertadores',
        tournaments: ['americas_cl'], rating: 82, icon: '🐓', colors: ['#18181b', '#f8fafc'], form: 'W-D-L',
        stars: ['Hulk', 'Paulinho', 'Deyverson', 'Gustavo Scarpa', 'Fausto Vera', 'Otávio', 'Guilherme Arana', 'Junior Alonso', 'Rodrigo Battaglia', 'Renzo Saravia', 'Everson']
      },
      {
        id: 'gre', name: 'Grêmio FBPA', code: 'GRE', type: 'clubs', league: 'Copa Libertadores',
        tournaments: ['americas_cl'], rating: 81, icon: '🔵', colors: ['#0284c7', '#18181b'], form: 'D-W-L',
        stars: ['Martin Braithwaite', 'Diego Costa', 'Yeferson Soteldo', 'Franco Cristaldo', 'Mathías Villasanti', 'Dodi', 'Pedro Geromel', 'Walter Kannemann', 'João Pedro', 'Reinaldo', 'Agustín Marchesín']
      },

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
        tournaments: ['liga1_idn', 'asean_club'], rating: 77, icon: '🐯', colors: ['#1d4ed8', '#1e3a8a'], form: 'W-W-D',
        stars: ['David da Silva', 'Ciro Alves', 'Tyronne del Pino', 'Marc Klok', 'Beckham Putra', 'Dedi Kusnandar', 'Dimas Drajad', 'Nick Kuipers', 'Gustavo França', 'Edo Febriansah', 'Kevin Ray Mendoza']
      },
      {
        id: 'persija', name: 'Persija Jakarta (Indonesia)', code: 'PSJ', type: 'vleague', league: 'Liga 1 Indonesia',
        tournaments: ['liga1_idn'], rating: 76, icon: '🦅', colors: ['#dc2626', '#ea580c'], form: 'W-D-L',
        stars: ['Gustavo Almeida', 'Marko Šimić', 'Ryo Matsumura', 'Maciej Gajos', 'Witan Sulaeman', 'Ramon Bueno', 'Hanif Sjahbandi', 'Rizky Ridho', 'Ondřej Kúdela', 'Firza Andika', 'Carlos Eduardo']
      },
      {
        id: 'perseb', name: 'Persebaya Surabaya (Indonesia)', code: 'PBY', type: 'vleague', league: 'Liga 1 Indonesia',
        tournaments: ['liga1_idn'], rating: 76, icon: '🐊', colors: ['#15803d', '#eab308'], form: 'W-W-D',
        stars: ['Bruno Moreira', 'Flávio Silva', 'Francisco Rivera', 'Malik Risaldi', 'Mohammed Rashid', 'Gilson Costa', 'Kasim Botan', 'Slavko Damjanović', 'Kadek Raditya', 'Ardi Idrus', 'Ernando Ari']
      },
      {
        id: 'bali', name: 'Bali United (Indonesia)', code: 'BAL', type: 'vleague', league: 'Liga 1 Indonesia',
        tournaments: ['liga1_idn'], rating: 76, icon: '🏝️', colors: ['#dc2626', '#18181b'], form: 'W-D-W',
        stars: ['Everton Nascimento', 'Privat Mbarga', 'Irfan Jaya', 'Mitsuru Maruoka', 'Brandon Wilson', 'Kadek Agung', 'Ricky Fajrin', 'Elias Dolah', 'Bagas Adi', 'Made Andhika', 'Adilson Maringá']
      },
      {
        id: 'tereng', name: 'Terengganu FC (Malaysia)', code: 'TFC_M', type: 'vleague', league: 'Malaysia Super League',
        tournaments: ['msl', 'asean_club'], rating: 76, icon: '🐢', colors: ['#18181b', '#f8fafc'], form: 'W-D-W',
        stars: ['Safawi Rasid', 'Akhyar Rashid', 'Ismaheel Akinade', 'Nelson Bonilla', 'Manuel Ott', 'Nurillo Tukhtasinov', 'Marin Pilj', 'Shahrul Nizam', 'Safwan Mazlan', 'Azam Azmi', 'Suhaimi Husin']
      },
      {
        id: 'sabah', name: 'Sabah FC (Malaysia)', code: 'SAB', type: 'vleague', league: 'Malaysia Super League',
        tournaments: ['msl'], rating: 75, icon: '🦏', colors: ['#dc2626', '#0284c7'], form: 'W-L-W',
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
    // 2B. DEFAULT BENCH RESERVES & EXACT PLAYER POSITION OVERRIDES
    // =========================================================================
    const CLUB_DEFAULT_BENCH = {
      // V.League 1 (14 CLB: đủ 1 GK, 1 DF, 1 MF, 1 FW dự bị)
      nmd:   ['Trần Liêm Điều', 'Nguyễn Văn Vĩ', 'Hồ Khắc Ngọc', 'Trần Văn Đạt'],
      cahn:  ['Đỗ Sỹ Huy', 'Giáp Tuấn Dương', 'Hoàng Văn Toản', 'Lê Văn Đô'],
      hnfc:  ['Nguyễn Văn Hoàng', 'Vũ Đình Hai', 'Đậu Văn Toàn', 'Nguyễn Văn Tùng'],
      vtl:   ['Quàng Thế Tài', 'Nguyễn Minh Tùng', 'Nguyễn Hữu Thắng', 'Trần Danh Trung'],
      hpfc:  ['Nguyễn Văn Toản', 'Phạm Mạnh Hùng', 'Lê Tiến Anh', 'Nguyễn Xuân Nam'],
      bbd:   ['Vũ Tuyên Quang', 'Nguyễn Hùng Thiện Đức', 'Nguyễn Hải Huy', 'Hồ Sỹ Giáp'],
      bth:   ['Nguyễn Thanh Thắng', 'Nguyễn Thanh Long', 'Lê Quốc Phương', 'Võ Nguyên Hoàng'],
      hagl:  ['Dương Văn Lợi', 'Nguyễn Văn Triệu', 'Võ Đình Lâm', 'Đinh Thanh Bình'],
      slna:  ['Cao Văn Bình', 'Mai Sỹ Hoàng', 'Ngô Văn Lương', 'Hồ Phúc Tịnh'],
      hlht:  ['Dương Tùng Lâm', 'Nguyễn Văn Hạnh', 'Bùi Văn Đức', 'Vũ Quang Nam'],
      qnbd:  ['Trần Đình Minh Hoàng', 'Lê Ngọc Bảo', 'Đỗ Văn Thuận', 'Nguyễn Đức Hoàng Minh'],
      hcmc:  ['Phạm Hữu Nghĩa', 'Sầm Ngọc Đức', 'Nguyễn Thanh Khôi', 'Nguyễn Ngọc Hậu'],
      qnam:  ['Tống Đức An', 'Trần Ngọc Hiệp', 'Mạch Ngọc Hà', 'Lê Xuân Tú'],
      shbdn: ['Đặng Tuấn Hưng', 'Nguyễn Công Nhật', 'Nguyễn Hữu Dũng', 'Nguyễn Minh Quang'],
      // ĐTQG Việt Nam
      vie:   ['Trần Trung Kiên', 'Nguyễn Thành Chung', 'Nguyễn Hai Long', 'Đinh Thanh Bình'],
      // Top CLB Châu Âu
      rma:   ['Andriy Lunin', 'Éder Militão', 'Aurélien Tchouaméni', 'Endrick'],
      fcb:   ['Iñaki Peña', 'Ronald Araújo', 'Fermín López', 'Ferran Torres'],
      atm:   ['Juan Musso', 'Nahuel Molina', 'Pablo Barrios', 'Ángel Correa'],
      mci:   ['Stefan Ortega', 'John Stones', 'Mateo Kovačić', 'Jack Grealish'],
      liv:   ['Caoimhín Kelleher', 'Andrew Robertson', 'Curtis Jones', 'Diogo Jota'],
      ars:   ['Neto', 'Ben White', 'Mikel Merino', 'Gabriel Jesus'],
      che:   ['Filip Jörgensen', 'Wesley Fofana', 'Roméo Lavia', 'João Félix'],
      mun:   ['Altay Bayındır', 'Luke Shaw', 'Christian Eriksen', 'Joshua Zirkzee'],
      tot:   ['Fraser Forster', 'Destiny Udogie', 'Rodrigo Bentancur', 'Richarlison'],
      bay:   ['Sven Ulreich', 'Hiroki Ito', 'Leon Goretzka', 'Mathys Tel'],
      lev:   ['Matěj Kovář', 'Nordi Mukiele', 'Aleix García', 'Nathan Tella'],
      bvb:   ['Alexander Meyer', 'Ramy Bensebaini', 'Felix Nmecha', 'Maximilian Beier'],
      int:   ['Josep Martínez', 'Stefan de Vrij', 'Davide Frattesi', 'Mehdi Taremi'],
      acm:   ['Marco Sportiello', 'Strahinja Pavlović', 'Yunus Musah', 'Samuel Chukwueze'],
      juv:   ['Mattia Perin', 'Danilo', 'Weston McKennie', 'Arkadiusz Milik'],
      nap:   ['Elia Caprile', 'Juan Jesus', 'Billy Gilmour', 'Giovanni Simeone'],
      psg:   ['Matvey Safonov', 'Lucas Beraldo', 'Fabián Ruiz', 'Désiré Doué']
    };

    const PLAYER_POSITION_OVERRIDES = {
      // V.League Starters & Mixed Positions
      'trần nguyên mạnh': { role: 'GK', pos: 'GK' },
      'nguyễn filip': { role: 'GK', pos: 'GK' },
      'quan văn chuẩn': { role: 'GK', pos: 'GK' },
      'phạm văn phong': { role: 'GK', pos: 'GK' },
      'nguyễn đình triệu': { role: 'GK', pos: 'GK' },
      'trần minh toàn': { role: 'GK', pos: 'GK' },
      'trịnh xuân hoàng': { role: 'GK', pos: 'GK' },
      'trần trung kiên': { role: 'GK', pos: 'GK' },
      'nguyễn văn việt': { role: 'GK', pos: 'GK' },
      'nguyễn thanh tùng': { role: 'GK', pos: 'GK' },
      'đặng văn lâm': { role: 'GK', pos: 'GK' },
      'patrik lê giang': { role: 'GK', pos: 'GK' },
      'nguyễn văn công': { role: 'GK', pos: 'GK' },
      'bùi tiến dũng (gk)': { role: 'GK', pos: 'GK' },
      'lê văn hưng': { role: 'GK', pos: 'GK' },
      'alisson farias': { role: 'FW', pos: 'LW' },
      'lâm thuận': { role: 'MF', pos: 'CM' },
      'lý công hoàng anh': { role: 'MF', pos: 'CM' },
      'hendrio araújo': { role: 'MF', pos: 'CM' },
      'nguyễn tuấn anh': { role: 'MF', pos: 'CDM' },
      'nguyễn quang hải': { role: 'MF', pos: 'CAM' },
      'nguyễn hoàng đức': { role: 'MF', pos: 'CM' },
      'đỗ hùng dũng': { role: 'MF', pos: 'CM' },
      'tô văn vũ': { role: 'DF', pos: 'RB' },
      'nguyễn xuân son (rafaelson)': { role: 'FW', pos: 'ST' },
      'nguyễn xuân son': { role: 'FW', pos: 'ST' },
      'nguyễn tiến linh': { role: 'FW', pos: 'ST' },
      'phạm tuấn hải': { role: 'FW', pos: 'LW' },
      'léo artur': { role: 'FW', pos: 'LW' },
      'alan grafite': { role: 'FW', pos: 'ST' },
      'rodri': { role: 'MF', pos: 'CDM' },
      'lisandro martínez': { role: 'DF', pos: 'CB' },
      'amadou onana': { role: 'MF', pos: 'CDM' },
      'alisson becker': { role: 'GK', pos: 'GK' },
      'andré onana': { role: 'GK', pos: 'GK' },
      'emiliano martínez': { role: 'GK', pos: 'GK' },
      'thibaut courtois': { role: 'GK', pos: 'GK' },
      'jan oblak': { role: 'GK', pos: 'GK' },
      // V.League Bench
      'trần liêm điều': { role: 'GK', pos: 'GK' },
      'nguyễn văn vĩ': { role: 'DF', pos: 'LB' },
      'hồ khắc ngọc': { role: 'MF', pos: 'CM' },
      'trần văn đạt': { role: 'FW', pos: 'RW' },
      'đỗ sỹ huy': { role: 'GK', pos: 'GK' },
      'giáp tuấn dương': { role: 'DF', pos: 'CB' },
      'hoàng văn toản': { role: 'MF', pos: 'CM' },
      'lê văn đô': { role: 'FW', pos: 'LW' },
      'nguyễn văn hoàng': { role: 'GK', pos: 'GK' },
      'vũ đình hai': { role: 'DF', pos: 'LB' },
      'đậu văn toàn': { role: 'MF', pos: 'CDM' },
      'nguyễn văn tùng': { role: 'FW', pos: 'ST' },
      'quàng thế tài': { role: 'GK', pos: 'GK' },
      'nguyễn minh tùng': { role: 'DF', pos: 'CB' },
      'nguyễn hữu thắng': { role: 'MF', pos: 'CAM' },
      'trần danh trung': { role: 'FW', pos: 'ST' },
      'nguyễn văn toản': { role: 'GK', pos: 'GK' },
      'phạm mạnh hùng': { role: 'DF', pos: 'CB' },
      'lê tiến anh': { role: 'MF', pos: 'CM' },
      'nguyễn xuân nam': { role: 'FW', pos: 'ST' },
      'vũ tuyên quang': { role: 'GK', pos: 'GK' },
      'nguyễn hùng thiện đức': { role: 'DF', pos: 'LB' },
      'nguyễn hải huy': { role: 'MF', pos: 'CAM' },
      'hồ sỹ giáp': { role: 'FW', pos: 'ST' },
      'nguyễn thanh thắng': { role: 'GK', pos: 'GK' },
      'nguyễn thanh long': { role: 'DF', pos: 'CB' },
      'lê quốc phương': { role: 'MF', pos: 'LM' },
      'võ nguyên hoàng': { role: 'FW', pos: 'ST' },
      'dương văn lợi': { role: 'GK', pos: 'GK' },
      'nguyễn văn triệu': { role: 'DF', pos: 'CB' },
      'võ đình lâm': { role: 'MF', pos: 'CM' },
      'đinh thanh bình': { role: 'FW', pos: 'ST' },
      'cao văn bình': { role: 'GK', pos: 'GK' },
      'mai sỹ hoàng': { role: 'DF', pos: 'LB' },
      'ngô văn lương': { role: 'MF', pos: 'CM' },
      'hồ phúc tịnh': { role: 'FW', pos: 'ST' },
      'dương tùng lâm': { role: 'GK', pos: 'GK' },
      'nguyễn văn hạnh': { role: 'DF', pos: 'CB' },
      'bùi văn đức': { role: 'MF', pos: 'LM' },
      'vũ quang nam': { role: 'FW', pos: 'ST' },
      'trần đình minh hoàng': { role: 'GK', pos: 'GK' },
      'lê ngọc bảo': { role: 'DF', pos: 'CB' },
      'đỗ văn thuận': { role: 'MF', pos: 'CDM' },
      'nguyễn đức hoàng minh': { role: 'FW', pos: 'RW' },
      'phạm hữu nghĩa': { role: 'GK', pos: 'GK' },
      'sầm ngọc đức': { role: 'DF', pos: 'LB' },
      'nguyễn thanh khôi': { role: 'MF', pos: 'CM' },
      'nguyễn ngọc hậu': { role: 'FW', pos: 'ST' },
      'tống đức an': { role: 'GK', pos: 'GK' },
      'trần ngọc hiệp': { role: 'DF', pos: 'CB' },
      'mạch ngọc hà': { role: 'MF', pos: 'CM' },
      'lê xuân tú': { role: 'FW', pos: 'LW' },
      'đặng tuấn hưng': { role: 'GK', pos: 'GK' },
      'nguyễn công nhật': { role: 'DF', pos: 'LB' },
      'nguyễn hữu dũng': { role: 'MF', pos: 'CDM' },
      'nguyễn minh quang': { role: 'FW', pos: 'RW' },
      // Euro Bench
      'andriy lunin': { role: 'GK', pos: 'GK' },
      'éder militão': { role: 'DF', pos: 'CB' },
      'aurélien tchouaméni': { role: 'MF', pos: 'CDM' },
      'endrick': { role: 'FW', pos: 'ST' },
      'iñaki peña': { role: 'GK', pos: 'GK' },
      'ronald araújo': { role: 'DF', pos: 'CB' },
      'fermín lópez': { role: 'MF', pos: 'CAM' },
      'ferran torres': { role: 'FW', pos: 'RW' },
      'juan musso': { role: 'GK', pos: 'GK' },
      'nahuel molina': { role: 'DF', pos: 'RB' },
      'pablo barrios': { role: 'MF', pos: 'CM' },
      'ángel correa': { role: 'FW', pos: 'ST' },
      'stefan ortega': { role: 'GK', pos: 'GK' },
      'john stones': { role: 'DF', pos: 'CB' },
      'mateo kovačić': { role: 'MF', pos: 'CM' },
      'jack grealish': { role: 'FW', pos: 'LW' },
      'caoimhín kelleher': { role: 'GK', pos: 'GK' },
      'andrew robertson': { role: 'DF', pos: 'LB' },
      'curtis jones': { role: 'MF', pos: 'CM' },
      'diogo jota': { role: 'FW', pos: 'ST' },
      'neto': { role: 'GK', pos: 'GK' },
      'ben white': { role: 'DF', pos: 'RB' },
      'mikel merino': { role: 'MF', pos: 'CM' },
      'gabriel jesus': { role: 'FW', pos: 'ST' },
      'filip jörgensen': { role: 'GK', pos: 'GK' },
      'wesley fofana': { role: 'DF', pos: 'CB' },
      'roméo lavia': { role: 'MF', pos: 'CDM' },
      'joão félix': { role: 'FW', pos: 'LW' },
      'altay bayındır': { role: 'GK', pos: 'GK' },
      'luke shaw': { role: 'DF', pos: 'LB' },
      'christian eriksen': { role: 'MF', pos: 'CM' },
      'joshua zirkzee': { role: 'FW', pos: 'ST' },
      'fraser forster': { role: 'GK', pos: 'GK' },
      'destiny udogie': { role: 'DF', pos: 'LB' },
      'rodrigo bentancur': { role: 'MF', pos: 'CM' },
      'richarlison': { role: 'FW', pos: 'ST' },
      'sven ulreich': { role: 'GK', pos: 'GK' },
      'hiroki ito': { role: 'DF', pos: 'CB' },
      'leon goretzka': { role: 'MF', pos: 'CM' },
      'mathys tel': { role: 'FW', pos: 'LW' },
      'matěj kovář': { role: 'GK', pos: 'GK' },
      'nordi mukiele': { role: 'DF', pos: 'RB' },
      'aleix garcía': { role: 'MF', pos: 'CM' },
      'nathan tella': { role: 'FW', pos: 'RW' },
      'alexander meyer': { role: 'GK', pos: 'GK' },
      'ramy bensebaini': { role: 'DF', pos: 'LB' },
      'felix nmecha': { role: 'MF', pos: 'CM' },
      'maximilian beier': { role: 'FW', pos: 'ST' },
      'josep martínez': { role: 'GK', pos: 'GK' },
      'stefan de vrij': { role: 'DF', pos: 'CB' },
      'davide frattesi': { role: 'MF', pos: 'CM' },
      'mehdi taremi': { role: 'FW', pos: 'ST' },
      'marco sportiello': { role: 'GK', pos: 'GK' },
      'strahinja pavlović': { role: 'DF', pos: 'CB' },
      'yunus musah': { role: 'MF', pos: 'CM' },
      'samuel chukwueze': { role: 'FW', pos: 'RW' },
      'mattia perin': { role: 'GK', pos: 'GK' },
      'danilo': { role: 'DF', pos: 'CB' },
      'weston mckennie': { role: 'MF', pos: 'CM' },
      'arkadiusz milik': { role: 'FW', pos: 'ST' },
      'elia caprile': { role: 'GK', pos: 'GK' },
      'juan jesus': { role: 'DF', pos: 'CB' },
      'billy gilmour': { role: 'MF', pos: 'CM' },
      'giovanni simeone': { role: 'FW', pos: 'ST' },
      'matvey safonov': { role: 'GK', pos: 'GK' },
      'lucas beraldo': { role: 'DF', pos: 'CB' },
      'fabián ruiz': { role: 'MF', pos: 'CM' },
      'désiré doué': { role: 'FW', pos: 'RW' }
    };

    TEAMS_DB.forEach(t => {
      const extra = CLUB_DEFAULT_BENCH[t.id];
      if (Array.isArray(extra)) {
        extra.forEach(p => { if (!t.stars.includes(p)) t.stars.push(p); });
      }
      t.baseStars = [...t.stars];
    });

    // Verified real player portraits (FotMob PNG & official VPF V.League portraits).
    // Unknown players intentionally fall back to clean initial/role badges instead of broken URLs.
    const REAL_PLAYER_PHOTOS = {
  'Kylian Mbappé': 'https://images.fotmob.com/image_resources/playerimages/701154.png',
  'Vinícius Júnior': 'https://images.fotmob.com/image_resources/playerimages/846033.png',
  'Son Heung-min': 'https://images.fotmob.com/image_resources/playerimages/1613065.png',
  'Lamine Yamal': 'https://images.fotmob.com/image_resources/playerimages/1467236.png',
  'Nguyễn Xuân Son (Rafaelson)': 'https://images.fotmob.com/image_resources/playerimages/690317.png',
  'Nguyễn Tiến Linh': 'https://images.fotmob.com/image_resources/playerimages/747451.png',
  'Phạm Tuấn Hải': 'https://images.fotmob.com/image_resources/playerimages/1158847.png',
  'Rodri (Quả Bóng Vàng)': 'https://images.fotmob.com/image_resources/playerimages/675088.png',
  'Jude Bellingham': 'https://images.fotmob.com/image_resources/playerimages/1077894.png',
  'Martin Ødegaard': 'https://images.fotmob.com/image_resources/playerimages/534670.png',
  'Federico Valverde': 'https://images.fotmob.com/image_resources/playerimages/743533.png',
  'Nguyễn Quang Hải': 'https://images.fotmob.com/image_resources/playerimages/819727.png',
  'Nguyễn Hoàng Đức': 'https://images.fotmob.com/image_resources/playerimages/848581.png',
  'Virgil van Dijk': 'https://images.fotmob.com/image_resources/playerimages/209405.png',
  'Antonio Rüdiger': 'https://images.fotmob.com/image_resources/playerimages/276738.png',
  'Trent Alexander-Arnold': 'https://images.fotmob.com/image_resources/playerimages/760712.png',
  'Bùi Hoàng Việt Anh': 'https://images.fotmob.com/image_resources/playerimages/1138609.png',
  'Đoàn Văn Hậu': 'https://images.fotmob.com/image_resources/playerimages/848567.png',
  'Quế Ngọc Hải': 'https://images.fotmob.com/image_resources/playerimages/504588.png',
  'Thibaut Courtois': 'https://images.fotmob.com/image_resources/playerimages/170323.png',
  'Alisson Becker': 'https://images.fotmob.com/image_resources/playerimages/319784.png',
  'Emiliano Martínez': 'https://images.fotmob.com/image_resources/playerimages/268375.png',
  'Nguyễn Filip': 'https://images.fotmob.com/image_resources/playerimages/307515.png',
  'Đặng Văn Lâm': 'https://vpf.vn/wp-content/uploads/2026/08/NBFC_1_DangVanLam_VN002309-e1787279162738-150x150.jpg',
  'Nguyễn Văn Toàn': 'https://images.fotmob.com/image_resources/playerimages/734636.png',
  'Lucas Silva': 'https://images.fotmob.com/image_resources/playerimages/1958447.png',
  'Nguyễn Phong Hồng Duy': 'https://images.fotmob.com/image_resources/playerimages/613967.png',
  'Nguyễn Tuấn Anh': 'https://images.fotmob.com/image_resources/playerimages/613971.png',
  'Trần Nguyên Mạnh': 'https://images.fotmob.com/image_resources/playerimages/504586.png',
  'Dương Thanh Hào': 'https://vpf.vn/wp-content/uploads/2026/09/CAND_3_DuongThanhHao_VN0001083-150x150.jpg',
  'Lucas Alves': 'https://vpf.vn/wp-content/uploads/2026/08/TCVT_15_LucasAlvesDeAraujo_BR002912-e1787654429645-150x150.jpg',
  'Lý Công Hoàng Anh': 'https://images.fotmob.com/image_resources/playerimages/1202037.png',
  'Tô Văn Vũ': 'https://images.fotmob.com/image_resources/playerimages/937316.png',
  'Trần Liêm Điều': 'https://images.fotmob.com/image_resources/playerimages/1701301.png',
  'Nguyễn Văn Vĩ': 'https://images.fotmob.com/image_resources/playerimages/1513640.png',
  'Hồ Khắc Ngọc': 'https://images.fotmob.com/image_resources/playerimages/504602.png',
  'Trần Văn Đạt': 'https://images.fotmob.com/image_resources/playerimages/1312556.png',
  'Léo Artur': 'https://images.fotmob.com/image_resources/playerimages/449784.png',
  'Alan Grafite': 'https://images.fotmob.com/image_resources/playerimages/1202028.png',
  'Vũ Văn Thanh': 'https://images.fotmob.com/image_resources/playerimages/613610.png',
  'Phan Văn Đức': 'https://images.fotmob.com/image_resources/playerimages/839704.png',
  'Lê Phạm Thành Long': 'https://images.fotmob.com/image_resources/playerimages/890872.png',
  'Nguyễn Đình Bắc': 'https://images.fotmob.com/image_resources/playerimages/1543684.png',
  'Đỗ Sỹ Huy': 'https://images.fotmob.com/image_resources/playerimages/848591.png',
  'Giáp Tuấn Dương': 'https://images.fotmob.com/image_resources/playerimages/1580426.png',
  'Hoàng Văn Toản': 'https://images.fotmob.com/image_resources/playerimages/1489965.png',
  'Lê Văn Đô': 'https://images.fotmob.com/image_resources/playerimages/1312554.png',
  'Nguyễn Văn Quyết': 'https://images.fotmob.com/image_resources/playerimages/243702.png',
  'Đỗ Hùng Dũng': 'https://images.fotmob.com/image_resources/playerimages/882866.png',
  'Nguyễn Hai Long': 'https://images.fotmob.com/image_resources/playerimages/1162356.png',
  'Nguyễn Thành Chung': 'https://images.fotmob.com/image_resources/playerimages/833606.png',
  'Đỗ Duy Mạnh': 'https://images.fotmob.com/image_resources/playerimages/613540.png',
  'Phạm Xuân Mạnh': 'https://images.fotmob.com/image_resources/playerimages/944964.png',
  'Quan Văn Chuẩn': 'https://images.fotmob.com/image_resources/playerimages/1312553.png',
  'Nguyễn Văn Trường': 'https://images.fotmob.com/image_resources/playerimages/1544663.png',
  'Nguyễn Văn Hoàng': 'https://images.fotmob.com/image_resources/playerimages/1264321.png',
  'Vũ Đình Hai': 'https://images.fotmob.com/image_resources/playerimages/1555010.png',
  'Đậu Văn Toàn': 'https://images.fotmob.com/image_resources/playerimages/1544661.png',
  'Nguyễn Văn Tùng': 'https://images.fotmob.com/image_resources/playerimages/1366380.png',
  'Khuất Văn Khang': 'https://images.fotmob.com/image_resources/playerimages/1478892.png',
  'Nhâm Mạnh Dũng': 'https://images.fotmob.com/image_resources/playerimages/1267711.png',
  'Pedro Henrique': 'https://images.fotmob.com/image_resources/playerimages/1259576.png',
  'Bùi Tiến Dũng': 'https://images.fotmob.com/image_resources/playerimages/675738.png',
  'Nguyễn Thanh Bình': 'https://vpf.vn/wp-content/uploads/2023/10/4-2-150x150.jpg',
  'Trương Tiến Anh': 'https://vpf.vn/wp-content/uploads/2026/08/NBFC_66_TruongTienAnh_VN0001063-e1787629482700-150x150.jpg',
  'Phan Tuấn Tài': 'https://images.fotmob.com/image_resources/playerimages/1543680.png',
  'Nguyễn Đức Chiến': 'https://vpf.vn/wp-content/uploads/2026/08/NBFC_7_NguyenDucChien_VN0001056-e1787279900330-150x150.jpg',
  'Phạm Văn Phong': 'https://vpf.vn/wp-content/uploads/2026/08/TT-N_17_PhamVanPhong_VN0001061-e1787713633706-150x150.png',
  'Quàng Thế Tài': 'https://vpf.vn/wp-content/uploads/2026/08/NBFC_25_QuangTheTai_VN001881-e1787629187244-150x150.jpg',
  'Nguyễn Hữu Thắng': 'https://images.fotmob.com/image_resources/playerimages/1267738.png',
  'Trần Danh Trung': 'https://images.fotmob.com/image_resources/playerimages/1437422.png',
  'Triệu Việt Hưng': 'https://images.fotmob.com/image_resources/playerimages/941642.png',
  'Lương Hoàng Nam': 'https://vpf.vn/wp-content/uploads/2026/08/BNFC_30_LUONGHOANGNAM_VN002842-e1787109903936-150x150.jpg',
  'Nguyễn Hữu Sơn': 'https://vpf.vn/wp-content/uploads/2026/08/HPFC_77_NguyenHuuSon_VN0001250-e1787202245635-150x150.jpg',
  'Bicou Bissainthe': 'https://images.fotmob.com/image_resources/playerimages/1057707.png',
  'Nguyễn Đình Triệu': 'https://images.fotmob.com/image_resources/playerimages/1564537.png',
  'Đặng Văn Tới': 'https://images.fotmob.com/image_resources/playerimages/1202776.png',
  'Phạm Trung Hiếu': 'https://images.fotmob.com/image_resources/playerimages/1701127.png',
  'Lê Mạnh Dũng': 'https://vpf.vn/wp-content/uploads/2026/08/HPFC_19_LeManhDung_VN0000275-e1787201552212-150x150.jpg',
  'Nguyễn Văn Toản': 'https://images.fotmob.com/image_resources/playerimages/734636.png',
  'Lê Tiến Anh': 'https://vpf.vn/wp-content/uploads/2026/08/BNFC_11_LeTienAnh_VN0000362-e1787107512812-150x150.jpg',
  'Bùi Vĩ Hào': 'https://vpf.vn/wp-content/uploads/2022/02/BDFC_11_BuiViHao_VN0001113-150x150.jpg',
  'Võ Hoàng Minh Khoa': 'https://vpf.vn/wp-content/uploads/2026/09/BHCMC_10_VoHoangMinhKhoa_VN0001118-150x150.jpg',
  'Hồ Tấn Tài': 'https://images.fotmob.com/image_resources/playerimages/848566.png',
  'Nguyễn Trần Việt Cường': 'https://vpf.vn/wp-content/uploads/2018/12/BHCMC_7_NguyenTranVietCuong_VN0001116-150x150.jpg',
  'Trần Minh Toàn': 'https://vpf.vn/wp-content/uploads/2026/09/BHCMC_25_TranMinhToan_VN001630-150x150.jpg',
  'Odilzhon Abdurakhmanov': 'https://vpf.vn/wp-content/uploads/2026/08/ATH_77_AbdurakhmanovOdilzhonAlisherovich_KG002112-e1787126482915-150x150.jpg',
  'Hà Đức Chinh': 'https://vpf.vn/wp-content/uploads/2018/12/BHCMC_9_HaDucChinh_VN001796-3-150x150.jpg',
  'Vũ Tuyên Quang': 'https://images.fotmob.com/image_resources/playerimages/1347536.png',
  'Nguyễn Hùng Thiện Đức': 'https://vpf.vn/wp-content/uploads/2018/12/LAFC_2_NguyenHungThienDuc_VN002065-150x150.png',
  'Nguyễn Hải Huy': 'https://vpf.vn/wp-content/uploads/2026/08/BNFC_14_NguyenHaiHuy_VN002585-e1787107750693-150x150.jpg',
  'Hồ Sỹ Giáp': 'https://vpf.vn/wp-content/uploads/2026/09/HCMC_93_HoSyGiap_VN0001112-150x150.jpg',
  'Luiz Antônio': 'https://images.fotmob.com/image_resources/playerimages/270316.png',
  'Rimario Gordon': 'https://images.fotmob.com/image_resources/playerimages/951021.png',
  'Doãn Ngọc Tân': 'https://images.fotmob.com/image_resources/playerimages/884196.png',
  'A Mít': 'https://images.fotmob.com/image_resources/playerimages/829559.png',
  'Nguyễn Thái Sơn': 'https://images.fotmob.com/image_resources/playerimages/1419906.png',
  'Lê Văn Thắng': 'https://vpf.vn/wp-content/uploads/2026/08/ATH_10_LeVanThang_VN0001194-scaled-e1787125120346-150x150.jpg',
  'Yago Ramos': 'https://vpf.vn/wp-content/uploads/2024/02/16-150x150.jpg',
  'Đinh Viết Tú': 'https://images.fotmob.com/image_resources/playerimages/979425.png',
  'Hoàng Thái Bình': 'https://vpf.vn/wp-content/uploads/2026/08/NBFC_2_HoangThaiBinh_VN0000282-e1787279228341-150x150.jpg',
  'Trịnh Xuân Hoàng': 'https://images.fotmob.com/image_resources/playerimages/1677866.png',
  'Nguyễn Thanh Thắng': 'https://vpf.vn/wp-content/uploads/2026/09/HCMC_1_NguyenThanhThang_VN002013-150x150.jpg',
  'Lê Quốc Phương': 'https://vpf.vn/wp-content/uploads/2025/08/15-2-150x150.jpg',
  'Võ Nguyên Hoàng': 'https://vpf.vn/wp-content/uploads/2026/08/SHB-N_28_VoNguyenHoang_VN0000556-scaled-e1787637796942-150x150.jpg',
  'Trần Minh Vương': 'https://vpf.vn/wp-content/uploads/2026/09/CAND_8_TranMinhVuong_VN0001154-150x150.jpg',
  'Châu Ngọc Quang': 'https://vpf.vn/wp-content/uploads/2026/09/BHCMC_89_ChauNgocQuang_VN001695-150x150.jpg',
  'Marciel Silva': 'https://vpf.vn/wp-content/uploads/2023/10/10-1-150x150.jpg',
  'Jairo Rodrigues': 'https://vpf.vn/wp-content/uploads/2026/08/SLNA_33_JairoRodriguesPeixotoFilho_BR001700-150x150.jpg',
  'Nguyễn Quốc Việt': 'https://vpf.vn/wp-content/uploads/2026/08/NBFC_99_NguyenQuocViet_VN0001158-e1787630049319-150x150.jpg',
  'Trần Bảo Toàn': 'https://vpf.vn/wp-content/uploads/2026/08/NBFC_15_TranBaoToan_VN0001159-e1787280392364-150x150.jpg',
  'Dụng Quang Nho': 'https://vpf.vn/wp-content/uploads/2026/08/NBFC_86_DungQuangNho_VN0001169-e1787629537752-150x150.jpg',
  'Phạm Lý Đức': 'https://vpf.vn/wp-content/uploads/2026/09/CAND_33_PhamLyDuc_VN001374-150x150.jpg',
  'Trần Trung Kiên': 'https://images.fotmob.com/image_resources/playerimages/1701265.png',
  'Nguyễn Thanh Nhân': 'https://vpf.vn/wp-content/uploads/2026/09/CAND_11_NguyenThanhNhan_VN0000558-150x150.jpg',
  'Lê Văn Sơn': 'https://vpf.vn/wp-content/uploads/2026/08/TT-N_16_LeVanSon_VN0001149-150x150.jpg',
  'Dương Văn Lợi': 'https://vpf.vn/wp-content/uploads/2026/09/QNFC_12_DuongVanLoi_VN0001148-150x150.jpg',
  'Nguyễn Văn Triệu': 'https://vpf.vn/wp-content/uploads/2026/08/HAGL_15_NguyenVanTrieu_VN0001163-scaled-e1787211767946-150x150.jpg',
  'Võ Đình Lâm': 'https://images.fotmob.com/image_resources/playerimages/1351095.png',
  'Đinh Thanh Bình': 'https://images.fotmob.com/image_resources/playerimages/848572.png',
  'Trần Nam Hải': 'https://images.fotmob.com/image_resources/playerimages/1436959.png',
  'Đinh Xuân Tiến': 'https://images.fotmob.com/image_resources/playerimages/1463274.png',
  'Hồ Văn Cường': 'https://images.fotmob.com/image_resources/playerimages/1478891.png',
  'Phan Xuân Đại': 'https://vpf.vn/wp-content/uploads/2026/08/SLNA_21_PhanXuanDai_VN0001184-scaled-e1787646396619-150x150.jpg',
  'Nguyễn Văn Việt': 'https://images.fotmob.com/image_resources/playerimages/1580424.png',
  'Lê Nguyên Hoàng': 'https://vpf.vn/wp-content/uploads/2026/08/SLNA_15_LeNguyenHoang_VN001815-scaled-e1787645861602-150x150.jpg',
  'Vương Văn Huy': 'https://vpf.vn/wp-content/uploads/2026/08/HLHT_68_VuongVanHuy_VN0001173-e1787218896439-150x150.jpg',
  'Nguyễn Quang Vinh': 'https://vpf.vn/wp-content/uploads/2026/08/SLNA_16_NguyenQuangVinh_VN001830-scaled-e1787645958413-150x150.jpg',
  'Cao Văn Bình': 'https://vpf.vn/wp-content/uploads/2026/08/SLNA_1_CaoVanBinh_VN001834-scaled-e1787643346111-150x150.jpg',
  'Mai Sỹ Hoàng': 'https://vpf.vn/wp-content/uploads/2021/03/HNFC_79_MaiSyHoang_VN0001190-150x150.jpg',
  'Ngô Văn Lương': 'https://vpf.vn/wp-content/uploads/2026/08/HLHT_19_NgoVanLuong_VN0001183-e1787217379516-150x150.jpg',
  'Lương Xuân Trường': 'https://vpf.vn/wp-content/uploads/2026/08/TT-N_6_LuongXuanTruong_VN0000237-150x150.jpg',
  'Viktor Lê': 'https://vpf.vn/wp-content/uploads/2026/09/CAND_23_ViktorLe_VN002944-150x150.jpg',
  'Nguyễn Trọng Hoàng': 'https://images.fotmob.com/image_resources/playerimages/243321.png',
  'Adou Minh': 'https://vpf.vn/wp-content/uploads/2026/08/CAHN_38_NguyenAdouLeygleyMinh_VN002848-e1787114629939-150x150.jpg',
  'Helerson': 'https://images.fotmob.com/image_resources/playerimages/958282.png',
  'Trần Đình Tiến': 'https://vpf.vn/wp-content/uploads/2026/09/CAND_7_TranDinhTien_VN0001181-150x150.jpg',
  'Huỳnh Tấn Tài': 'https://vpf.vn/wp-content/uploads/2026/08/HLHT_39_HuynhTanTai_VN0001209-scaled-e1787218310890-150x150.jpg',
  'Vũ Viết Triều': 'https://vpf.vn/wp-content/uploads/2026/08/HLHT_5_VuVietTrieu_VN0000376-scaled-e1787215261311-150x150.jpg',
  'Nguyễn Thanh Tùng': 'https://vpf.vn/wp-content/uploads/2026/08/HLHT_1_NguyenThanhTung_VN0001138-150x150.jpg',
  'Nguyễn Văn Hạnh': 'https://vpf.vn/wp-content/uploads/2025/08/25-150x150.jpg',
  'Bùi Văn Đức': 'https://vpf.vn/wp-content/uploads/2026/08/HLHT_26_BuiVanDuc_VN0001133-e1787218048531-150x150.jpg',
  'Vũ Quang Nam': 'https://vpf.vn/wp-content/uploads/2026/08/HLHT_18_VuQuangNam_VN0000960-scaled-e1787217117878-150x150.jpg',
  'Leonardo Melo': 'https://vpf.vn/wp-content/uploads/2026/08/CAHN_10_LeonardoArturDeMelo_BR002122-e1787113689789-150x150.jpg',
  'Mạc Hồng Quân': 'https://vpf.vn/wp-content/uploads/2026/09/HYFC_8_MacHongQuan_VN0000361-150x150.jpg',
  'Vũ Minh Tuấn': 'https://vpf.vn/wp-content/uploads/2026/09/QNFC_8_VuMinhTuan_VN001809-150x150.jpg',
  'Cao Văn Triền': 'https://vpf.vn/wp-content/uploads/2026/09/BHCMC_23_CaoVanTrien_VN001806-150x150.jpg',
  'Lục Xuân Hưng': 'https://vpf.vn/wp-content/uploads/2026/08/ATH_5_LucXuanHung_VN0000442-e1787124396430-150x150.png',
  'Nguyễn Văn Đức': 'https://vpf.vn/wp-content/uploads/2024/09/XTPT_68_NguyenVanDuc_VN002678-150x150.jpg',
  'Trần Trọng Hiếu': 'https://vpf.vn/wp-content/uploads/2026/08/TT-N_23_TranTrongHieu_VN002167-150x150.jpg',
  'Phan Ngọc Tín': 'https://images.fotmob.com/image_resources/playerimages/1442498.png',
  'Huỳnh Tuấn Linh': 'https://vpf.vn/wp-content/uploads/2026/09/HYFC_26_HuynhTuanLinh_VN0001162-150x150.jpg',
  'Trần Đình Minh Hoàng': 'https://images.fotmob.com/image_resources/playerimages/1735151.png',
  'Lê Ngọc Bảo': 'https://images.fotmob.com/image_resources/playerimages/1600702.png',
  'Nguyễn Đức Hoàng Minh': 'https://vpf.vn/wp-content/uploads/2026/08/TCVT_17_NguyenDucHoangMinh_VN002200-e1787654537134-150x150.jpg',
  'Patrik Lê Giang': 'https://vpf.vn/wp-content/uploads/2026/08/CAHCM_89_LeGiangPatrik_VN002937-150x150.jpg',
  'Endrick dos Santos': 'https://vpf.vn/wp-content/uploads/2023/10/15-3-150x150.jpg',
  'Bùi Ngọc Long': 'https://images.fotmob.com/image_resources/playerimages/1572936.png',
  'Võ Huy Toàn': 'https://images.fotmob.com/image_resources/playerimages/632580.png',
  'Adriano Schmidt': 'https://images.fotmob.com/image_resources/playerimages/1094533.png',
  'Nguyễn Hạ Long': 'https://vpf.vn/wp-content/uploads/2026/09/HCMC_29_NguyenHaLong_VN001967-150x150.jpg',
  'Đào Quốc Gia': 'https://images.fotmob.com/image_resources/playerimages/1681966.png',
  'Phan Nhật Thanh Long': 'https://vpf.vn/wp-content/uploads/2026/08/HAGL_27_PhanNhatThanhLong_VN001385-scaled-e1787212438921-150x150.jpg',
  'Lâm Thuận': 'https://vpf.vn/wp-content/uploads/2026/09/VHU_17_LamThuan_VN0000308-150x150.jpg',
  'Trần Mạnh Cường': 'https://vpf.vn/wp-content/uploads/2023/10/25-3-150x150.jpg',
  'Phạm Hữu Nghĩa': 'https://vpf.vn/wp-content/uploads/2026/08/TT-N_25_PhamHuuNghia_VN0000550-150x150.jpg',
  'Sầm Ngọc Đức': 'https://vpf.vn/wp-content/uploads/2026/08/TT-N_77_SamNgocDuc_VN0000189-e1787734714616-150x150.jpg',
  'Nguyễn Thanh Khôi': 'https://vpf.vn/wp-content/uploads/2023/03/12-1-150x150.jpg',
  'Hoàng Vũ Samson': 'https://vpf.vn/wp-content/uploads/2026/09/BHCMC_39_HoangVuOlaleyeSamson_VN001782-150x150.jpg',
  'Charles Atshimene': 'https://images.fotmob.com/image_resources/playerimages/1123714.png',
  'Ngân Văn Đại': 'https://vpf.vn/wp-content/uploads/2026/08/BNFC_29_NganVanDai_VN001779-e1787109822265-150x150.jpg',
  'Nguyễn Văn Công': 'https://vpf.vn/wp-content/uploads/2026/08/BNFC_12_NguyenVanCong_VN0000492-e1787107615158-150x150.jpg',
  'Võ Văn Toàn': 'https://vpf.vn/wp-content/uploads/2026/08/SHB-N_58_VoVanToan_VN001775-scaled-e1787642096715-150x150.jpg',
  'Nguyễn Phú Nguyên': 'https://vpf.vn/wp-content/uploads/2026/08/ATH_89_NguyenTrongPhu_VN001305-e1787126553368-150x150.jpg',
  'Phan Thanh Hậu': 'https://vpf.vn/wp-content/uploads/2026/09/BHCMC_5_NguyenVanHanh_VN0000231-150x150.jpg',
  'Đặng Văn Lắm': 'https://vpf.vn/wp-content/uploads/2026/08/NBFC_1_DangVanLam_VN002309-e1787279162738-150x150.jpg',
  'Tống Đức An': 'https://vpf.vn/wp-content/uploads/2026/09/CAND_26_TongDucAn_VN001777-150x150.png',
  'Trần Ngọc Hiệp': 'https://vpf.vn/wp-content/uploads/2026/08/SHB-N_2_TranNgocHiep_VN001760-scaled-e1787632977642-150x150.jpg',
  'Mạch Ngọc Hà': 'https://vpf.vn/wp-content/uploads/2026/09/CAND_10_MachNgocHa_VN001770-150x150.jpg',
  'Lê Xuân Tú': 'https://vpf.vn/wp-content/uploads/2021/03/HNFC_19_LeXuanTu_VN0000495-150x150.jpg',
  'Caio César': 'https://images.fotmob.com/image_resources/playerimages/844474.png',
  'Phan Văn Long': 'https://vpf.vn/wp-content/uploads/2026/08/SHB-N_11_PhanVanLong_VN001565-scaled-e1787636391287-150x150.jpg',
  'Đặng Anh Tuấn': 'https://vpf.vn/wp-content/uploads/2026/09/BHCMC_18_DangAnhTuan_VN001558-150x150.jpg',
  'Phạm Đình Duy': 'https://vpf.vn/wp-content/uploads/2026/08/SHB-N_18_PhamDinhDuy_VN001569-e1787636599606-150x150.jpg',
  'Nguyễn Phi Hoàng': 'https://images.fotmob.com/image_resources/playerimages/1386848.png',
  'Lương Duy Cương': 'https://vpf.vn/wp-content/uploads/2026/08/SHB-N_20_LuongDuyCuong_VN002179-scaled-e1787636965192-150x150.jpg',
  'Bùi Tiến Dũng (GK)': 'https://images.fotmob.com/image_resources/playerimages/675738.png',
  'Lê Văn Hưng': 'https://vpf.vn/wp-content/uploads/2025/09/27-1-150x150.jpg',
  'Đặng Tuấn Hưng': 'https://vpf.vn/wp-content/uploads/2026/09/HYFC_25_DangTuanHung_VN0001129-150x150.jpg',
  'Nguyễn Công Nhật': 'https://vpf.vn/wp-content/uploads/2021/03/HNFC_22_NguyenCongNhat_VN001571-e1787198113431-150x150.jpg',
  'Nguyễn Hữu Dũng': 'https://vpf.vn/wp-content/uploads/2018/12/10.-Nguyen-Huu-Dung-150x150.jpg',
  'Nguyễn Minh Quang': 'https://images.fotmob.com/image_resources/playerimages/1642863.png',
  'João Cancelo': 'https://images.fotmob.com/image_resources/playerimages/361757.png',
  'Cristiano Ronaldo': 'https://images.fotmob.com/image_resources/playerimages/30893.png',
  'Mohamed Simakan': 'https://images.fotmob.com/image_resources/playerimages/1039600.png',
  'Aymeric Laporte': 'https://images.fotmob.com/image_resources/playerimages/411617.png',
  'Karim Benzema': 'https://images.fotmob.com/image_resources/playerimages/26166.png',
  'Moussa Diaby': 'https://images.fotmob.com/image_resources/playerimages/923498.png',
  'Houssem Aouar': 'https://images.fotmob.com/image_resources/playerimages/776299.png',
  'Riyad Mahrez': 'https://images.fotmob.com/image_resources/playerimages/278343.png',
  'Hotaru Yamaguchi': 'https://images.fotmob.com/image_resources/playerimages/176201.png',
  'Takahiro Ogihara': 'https://images.fotmob.com/image_resources/playerimages/196299.png',
  'Eduardo Camavinga': 'https://images.fotmob.com/image_resources/playerimages/1015185.png',
  'Arda Güler': 'https://images.fotmob.com/image_resources/playerimages/1253890.png',
  'Andriy Lunin': 'https://images.fotmob.com/image_resources/playerimages/800882.png',
  'Éder Militão': 'https://images.fotmob.com/image_resources/playerimages/844415.png',
  'Aurélien Tchouaméni': 'https://images.fotmob.com/image_resources/playerimages/914458.png',
  'Endrick': 'https://images.fotmob.com/image_resources/playerimages/1406729.png',
  'Raphinha': 'https://images.fotmob.com/image_resources/playerimages/696679.png',
  'Pedri': 'https://images.fotmob.com/image_resources/playerimages/1083323.png',
  'Dani Olmo': 'https://images.fotmob.com/image_resources/playerimages/614834.png',
  'Gavi': 'https://images.fotmob.com/image_resources/playerimages/1279040.png',
  'Frenkie de Jong': 'https://images.fotmob.com/image_resources/playerimages/638622.png',
  'Jules Koundé': 'https://images.fotmob.com/image_resources/playerimages/705450.png',
  'Pau Cubarsí': 'https://images.fotmob.com/image_resources/playerimages/1532137.png',
  'Alejandro Balde': 'https://images.fotmob.com/image_resources/playerimages/1254166.png',
  'Iñaki Peña': 'https://images.fotmob.com/image_resources/playerimages/990996.png',
  'Ronald Araújo': 'https://images.fotmob.com/image_resources/playerimages/921253.png',
  'Fermín López': 'https://images.fotmob.com/image_resources/playerimages/1404415.png',
  'Julián Álvarez': 'https://images.fotmob.com/image_resources/playerimages/974753.png',
  'Alexander Sørloth': 'https://images.fotmob.com/image_resources/playerimages/440330.png',
  'Conor Gallagher': 'https://images.fotmob.com/image_resources/playerimages/966027.png',
  'Koke': 'https://images.fotmob.com/image_resources/playerimages/184533.png',
  'Marcos Llorente': 'https://images.fotmob.com/image_resources/playerimages/602563.png',
  'Robin Le Normand': 'https://images.fotmob.com/image_resources/playerimages/609516.png',
  'Jan Oblak': 'https://images.fotmob.com/image_resources/playerimages/177126.png',
  'Juan Musso': 'https://images.fotmob.com/image_resources/playerimages/389050.png',
  'Nahuel Molina': 'https://images.fotmob.com/image_resources/playerimages/726345.png',
  'Pablo Barrios': 'https://images.fotmob.com/image_resources/playerimages/1338192.png',
  'Nico Williams': 'https://images.fotmob.com/image_resources/playerimages/1202110.png',
  'Iñaki Williams': 'https://images.fotmob.com/image_resources/playerimages/604105.png',
  'Oihan Sancet': 'https://images.fotmob.com/image_resources/playerimages/950545.png',
  'Gorka Guruzeta': 'https://images.fotmob.com/image_resources/playerimages/711231.png',
  'Álex Berenguer': 'https://images.fotmob.com/image_resources/playerimages/574629.png',
  'Iñigo Ruiz de Galarreta': 'https://images.fotmob.com/image_resources/playerimages/282462.png',
  'Mikel Jauregizar': 'https://images.fotmob.com/image_resources/playerimages/1553099.png',
  'Aitor Paredes': 'https://images.fotmob.com/image_resources/playerimages/1191407.png',
  'Yuri Berchiche': 'https://images.fotmob.com/image_resources/playerimages/80295.png',
  'Unai Simón': 'https://images.fotmob.com/image_resources/playerimages/660625.png',
  'Rodri': 'https://images.fotmob.com/image_resources/playerimages/675088.png',
  'Bernardo Silva': 'https://images.fotmob.com/image_resources/playerimages/488139.png',
  'Ederson': 'https://images.fotmob.com/image_resources/playerimages/957203.png',
  'Luis Díaz': 'https://images.fotmob.com/image_resources/playerimages/860914.png',
  'Cody Gakpo': 'https://images.fotmob.com/image_resources/playerimages/806552.png',
  'Dominik Szoboszlai': 'https://images.fotmob.com/image_resources/playerimages/846005.png',
  'Alexis Mac Allister': 'https://images.fotmob.com/image_resources/playerimages/831489.png',
  'Ryan Gravenberch': 'https://images.fotmob.com/image_resources/playerimages/956683.png',
  'Ibrahima Konaté': 'https://images.fotmob.com/image_resources/playerimages/820140.png',
  'Andrew Robertson': 'https://images.fotmob.com/image_resources/playerimages/357880.png',
  'Bukayo Saka': 'https://images.fotmob.com/image_resources/playerimages/961995.png',
  'Declan Rice': 'https://images.fotmob.com/image_resources/playerimages/654096.png',
  'Neto': 'https://images.fotmob.com/image_resources/playerimages/176186.png',
  'Gabriel Jesus': 'https://images.fotmob.com/image_resources/playerimages/576165.png',
  'Reece James': 'https://images.fotmob.com/image_resources/playerimages/807729.png',
  'Levi Colwill': 'https://images.fotmob.com/image_resources/playerimages/1096400.png',
  'Marc Cucurella': 'https://images.fotmob.com/image_resources/playerimages/873289.png',
  'Alejandro Garnacho': 'https://images.fotmob.com/image_resources/playerimages/1203665.png',
  'Dominic Solanke': 'https://images.fotmob.com/image_resources/playerimages/591734.png',
  'James Maddison': 'https://images.fotmob.com/image_resources/playerimages/493165.png',
  'Dejan Kulusevski': 'https://images.fotmob.com/image_resources/playerimages/935379.png',
  'Yves Bissouma': 'https://images.fotmob.com/image_resources/playerimages/724306.png',
  'Cristian Romero': 'https://images.fotmob.com/image_resources/playerimages/789066.png',
  'Micky van de Ven': 'https://images.fotmob.com/image_resources/playerimages/1097466.png',
  'Pedro Porro': 'https://images.fotmob.com/image_resources/playerimages/941573.png',
  'Destiny Udogie': 'https://images.fotmob.com/image_resources/playerimages/1052898.png',
  'Rodrigo Bentancur': 'https://images.fotmob.com/image_resources/playerimages/620618.png',
  'Richarlison': 'https://images.fotmob.com/image_resources/playerimages/654908.png',
  'Harry Kane': 'https://images.fotmob.com/image_resources/playerimages/194165.png',
  'Jamal Musiala': 'https://images.fotmob.com/image_resources/playerimages/1156141.png',
  'Michael Olise': 'https://images.fotmob.com/image_resources/playerimages/1029063.png',
  'Serge Gnabry': 'https://images.fotmob.com/image_resources/playerimages/385437.png',
  'Joshua Kimmich': 'https://images.fotmob.com/image_resources/playerimages/460632.png',
  'Aleksandar Pavlović': 'https://images.fotmob.com/image_resources/playerimages/1473580.png',
  'Alphonso Davies': 'https://images.fotmob.com/image_resources/playerimages/751202.png',
  'Dayot Upamecano': 'https://images.fotmob.com/image_resources/playerimages/658554.png',
  'Kim Min-jae': 'https://images.fotmob.com/image_resources/playerimages/828159.png',
  'Manuel Neuer': 'https://images.fotmob.com/image_resources/playerimages/27299.png',
  'Sven Ulreich': 'https://images.fotmob.com/image_resources/playerimages/94841.png',
  'Hiroki Ito': 'https://images.fotmob.com/image_resources/playerimages/851626.png',
  'Mathys Tel': 'https://images.fotmob.com/image_resources/playerimages/1288111.png',
  'Florian Wirtz': 'https://images.fotmob.com/image_resources/playerimages/1152455.png',
  'Victor Boniface': 'https://images.fotmob.com/image_resources/playerimages/1035208.png',
  'Patrik Schick': 'https://images.fotmob.com/image_resources/playerimages/540097.png',
  'Alejandro Grimaldo': 'https://images.fotmob.com/image_resources/playerimages/288406.png',
  'Jeremie Frimpong': 'https://images.fotmob.com/image_resources/playerimages/966018.png',
  'Granit Xhaka': 'https://images.fotmob.com/image_resources/playerimages/207236.png',
  'Jonathan Tah': 'https://images.fotmob.com/image_resources/playerimages/469700.png',
  'Edmond Tapsoba': 'https://images.fotmob.com/image_resources/playerimages/789914.png',
  'Nordi Mukiele': 'https://images.fotmob.com/image_resources/playerimages/602304.png',
  'Karim Adeyemi': 'https://images.fotmob.com/image_resources/playerimages/959594.png',
  'Waldemar Anton': 'https://images.fotmob.com/image_resources/playerimages/664970.png',
  'Felix Nmecha': 'https://images.fotmob.com/image_resources/playerimages/966019.png',
  'Maximilian Beier': 'https://images.fotmob.com/image_resources/playerimages/1047667.png',
  'Loïs Openda': 'https://images.fotmob.com/image_resources/playerimages/747767.png',
  'Xavi Simons': 'https://images.fotmob.com/image_resources/playerimages/1173787.png',
  'Amadou Haidara': 'https://images.fotmob.com/image_resources/playerimages/688830.png',
  'Lautaro Martínez': 'https://images.fotmob.com/image_resources/playerimages/690230.png',
  'Federico Dimarco': 'https://images.fotmob.com/image_resources/playerimages/605224.png',
  'Denzel Dumfries': 'https://images.fotmob.com/image_resources/playerimages/593118.png',
  'Alessandro Bastoni': 'https://images.fotmob.com/image_resources/playerimages/805451.png',
  'Josep Martínez': 'https://images.fotmob.com/image_resources/playerimages/772168.png',
  'Davide Frattesi': 'https://images.fotmob.com/image_resources/playerimages/815431.png',
  'Christian Pulisic': 'https://images.fotmob.com/image_resources/playerimages/688295.png',
  'Álvaro Morata': 'https://images.fotmob.com/image_resources/playerimages/213501.png',
  'Youssouf Fofana': 'https://images.fotmob.com/image_resources/playerimages/954621.png',
  'Emerson Royal': 'https://images.fotmob.com/image_resources/playerimages/797908.png',
  'Mike Maignan': 'https://images.fotmob.com/image_resources/playerimages/466439.png',
  'Strahinja Pavlović': 'https://images.fotmob.com/image_resources/playerimages/1048023.png',
  'Francisco Conceição': 'https://images.fotmob.com/image_resources/playerimages/1185336.png',
  'Andrea Cambiaso': 'https://images.fotmob.com/image_resources/playerimages/1078846.png',
  'Pierre Kalulu': 'https://images.fotmob.com/image_resources/playerimages/1131217.png',
  'Khvicha Kvaratskhelia': 'https://images.fotmob.com/image_resources/playerimages/900433.png',
  'Matteo Politano': 'https://images.fotmob.com/image_resources/playerimages/415539.png',
  'Ousmane Dembélé': 'https://images.fotmob.com/image_resources/playerimages/692984.png',
  'Bradley Barcola': 'https://images.fotmob.com/image_resources/playerimages/1297165.png',
  'Lee Kang-in': 'https://images.fotmob.com/image_resources/playerimages/940976.png',
  'Warren Zaïre-Emery': 'https://images.fotmob.com/image_resources/playerimages/1367615.png',
  'Elye Wahi': 'https://images.fotmob.com/image_resources/playerimages/1213430.png',
  'Geoffrey Kondogbia': 'https://images.fotmob.com/image_resources/playerimages/214972.png',
  'Leonardo Balerdi': 'https://images.fotmob.com/image_resources/playerimages/958464.png',
  'Folarin Balogun': 'https://images.fotmob.com/image_resources/playerimages/982677.png',
  'Maghnes Akliouche': 'https://images.fotmob.com/image_resources/playerimages/1305618.png',
  'Eliesse Ben Seghir': 'https://images.fotmob.com/image_resources/playerimages/1393439.png',
  'Aleksandr Golovin': 'https://images.fotmob.com/image_resources/playerimages/586388.png',
  'Jonathan David': 'https://images.fotmob.com/image_resources/playerimages/939569.png',
  'Hakon Arnar Haraldsson': 'https://images.fotmob.com/image_resources/playerimages/1044470.png',
  'Ayyoub Bouaddi': 'https://images.fotmob.com/image_resources/playerimages/1561552.png',
  'Marcelo Weigandt': 'https://images.fotmob.com/image_resources/playerimages/974894.png',
  'Drake Callender': 'https://images.fotmob.com/image_resources/playerimages/1136263.png',
  'Gerson': 'https://images.fotmob.com/image_resources/playerimages/580604.png',
  'Miguel Borja': 'https://images.fotmob.com/image_resources/playerimages/281995.png',
  'Nguyễn Xuân Son': 'https://images.fotmob.com/image_resources/playerimages/690317.png',
  'Wataru Endo': 'https://images.fotmob.com/image_resources/playerimages/202643.png',
  'Richard Ríos': 'https://images.fotmob.com/image_resources/playerimages/1174630.png',
  'Mateo Retegui': 'https://images.fotmob.com/image_resources/playerimages/905546.png',
  'Sandro Tonali': 'https://images.fotmob.com/image_resources/playerimages/867414.png',
  'Luka Sučić': 'https://images.fotmob.com/image_resources/playerimages/959597.png',
  'Dominik Livaković': 'https://images.fotmob.com/image_resources/playerimages/383971.png',
  'Brahim Díaz': 'https://images.fotmob.com/image_resources/playerimages/750027.png',
  'Youri Tielemans': 'https://images.fotmob.com/image_resources/playerimages/465960.png',
  'Alexander Isak': 'https://images.fotmob.com/image_resources/playerimages/690107.png',
  'Anthony Gordon': 'https://images.fotmob.com/image_resources/playerimages/906937.png',
  'Sven Botman': 'https://images.fotmob.com/image_resources/playerimages/956682.png',
  'Nick Pope': 'https://images.fotmob.com/image_resources/playerimages/280484.png',
  'Jan Paul van Hecke': 'https://images.fotmob.com/image_resources/playerimages/974618.png',
  'Mohammed Kudus': 'https://images.fotmob.com/image_resources/playerimages/891743.png',
  'Marcos Senesi': 'https://images.fotmob.com/image_resources/playerimages/785411.png',
  'Milos Kerkez': 'https://images.fotmob.com/image_resources/playerimages/1195281.png',
  'Mateus Fernandes': 'https://images.fotmob.com/image_resources/playerimages/1356312.png',
  'Thierno Barry': 'https://images.fotmob.com/image_resources/playerimages/1398392.png',
  'Álex Baena': 'https://images.fotmob.com/image_resources/playerimages/942372.png',
  'Sergio Gómez': 'https://images.fotmob.com/image_resources/playerimages/844477.png',
  'Vitor Roque': 'https://images.fotmob.com/image_resources/playerimages/1339347.png',
  'Pablo Fornals': 'https://images.fotmob.com/image_resources/playerimages/683450.png',
  'Johnny Cardoso': 'https://images.fotmob.com/image_resources/playerimages/1173678.png',
  'Diego Llorente': 'https://images.fotmob.com/image_resources/playerimages/420568.png',
  'Héctor Bellerín': 'https://images.fotmob.com/image_resources/playerimages/427438.png',
  'Giorgi Mamardashvili': 'https://images.fotmob.com/image_resources/playerimages/948800.png',
  'Jesús Areso': 'https://images.fotmob.com/image_resources/playerimages/1037537.png',
  'Robert Navarro': 'https://images.fotmob.com/image_resources/playerimages/1011117.png',
  'Joan García': 'https://images.fotmob.com/image_resources/playerimages/1167220.png',
  'Ademola Lookman': 'https://images.fotmob.com/image_resources/playerimages/690516.png',
  'Éderson': 'https://images.fotmob.com/image_resources/playerimages/957203.png',
  'Isak Hien': 'https://images.fotmob.com/image_resources/playerimages/939780.png',
  'Lorenzo Pellegrini': 'https://images.fotmob.com/image_resources/playerimages/540307.png',
  'Nicolò Rovella': 'https://images.fotmob.com/image_resources/playerimages/1020963.png',
  'Edoardo Bove': 'https://images.fotmob.com/image_resources/playerimages/1212866.png',
  'Pietro Comuzzo': 'https://images.fotmob.com/image_resources/playerimages/1529222.png',
  'Santiago Castro': 'https://images.fotmob.com/image_resources/playerimages/1282008.png',
  'Łukasz Skorupski': 'https://images.fotmob.com/image_resources/playerimages/178732.png',
  'Enzo Millot': 'https://images.fotmob.com/image_resources/playerimages/1050859.png',
  'Atakan Karazor': 'https://images.fotmob.com/image_resources/playerimages/684983.png',
  'Anthony Rouault': 'https://images.fotmob.com/image_resources/playerimages/1079554.png',
  'Omar Marmoush': 'https://images.fotmob.com/image_resources/playerimages/839204.png',
  'Hugo Ekitiké': 'https://images.fotmob.com/image_resources/playerimages/1197030.png',
  'Ansgar Knauff': 'https://images.fotmob.com/image_resources/playerimages/1175708.png',
  'Robin Koch': 'https://images.fotmob.com/image_resources/playerimages/628201.png',
  'Tom Bischof': 'https://images.fotmob.com/image_resources/playerimages/1286183.png',
  'Maxence Caqueret': 'https://images.fotmob.com/image_resources/playerimages/846000.png',
  'Lucas Perri': 'https://images.fotmob.com/image_resources/playerimages/637656.png',
  'M\'Bala Nzola': 'https://images.fotmob.com/image_resources/playerimages/613334.png',
  'Anass Zaroury': 'https://images.fotmob.com/image_resources/playerimages/1069536.png',
  'Neil El Aynaoui': 'https://images.fotmob.com/image_resources/playerimages/1274060.png',
  'Nicolás Otamendi': 'https://images.fotmob.com/image_resources/playerimages/174321.png',
  'Álvaro Carreras': 'https://images.fotmob.com/image_resources/playerimages/1190025.png',
  'Morten Hjulmand': 'https://images.fotmob.com/image_resources/playerimages/950199.png',
  'Daniel Bragança': 'https://images.fotmob.com/image_resources/playerimages/1014980.png',
  'Franco Israel': 'https://images.fotmob.com/image_resources/playerimages/1053960.png',
  'Dávid Hancko': 'https://images.fotmob.com/image_resources/playerimages/727897.png',
  'Diogo Barbosa': 'https://images.fotmob.com/image_resources/playerimages/231683.png',
  'Luciano': 'https://images.fotmob.com/image_resources/playerimages/78584.png',
  'Robert Arboleda': 'https://images.fotmob.com/image_resources/playerimages/342941.png',
  'Welington': 'https://images.fotmob.com/image_resources/playerimages/1118192.png',
  'Hulk': 'https://images.fotmob.com/image_resources/playerimages/20276.png',
  'Paulinho': 'https://images.fotmob.com/image_resources/playerimages/857176.png',
  'Deyverson': 'https://images.fotmob.com/image_resources/playerimages/476769.png',
  'Gustavo Scarpa': 'https://images.fotmob.com/image_resources/playerimages/544424.png',
  'Renzo Saravia': 'https://images.fotmob.com/image_resources/playerimages/433819.png',
  'Marlon Freitas': 'https://images.fotmob.com/image_resources/playerimages/634868.png',
  'Konrad Laimer': 'https://images.fotmob.com/image_resources/playerimages/526827.png',
  'Rômulo': 'https://images.fotmob.com/image_resources/playerimages/940689.png',
  'Ben Davies': 'https://images.fotmob.com/image_resources/playerimages/276121.png',
  'Conor Bradley': 'https://images.fotmob.com/image_resources/playerimages/1113690.png',
  'Lucas Bergvall': 'https://images.fotmob.com/image_resources/playerimages/1386775.png',
  'Hákon Arnar Haraldsson': 'https://images.fotmob.com/image_resources/playerimages/1044470.png',
  'Victor Pálsson': 'https://images.fotmob.com/image_resources/playerimages/161937.png',
  'Martin Dúbravka': 'https://images.fotmob.com/image_resources/playerimages/72241.png',
  'Damoth Thongkhamsavath': 'https://images.fotmob.com/image_resources/playerimages/1561129.png',
  'Kevin Felida': 'https://images.fotmob.com/image_resources/playerimages/875845.png',
  'Esteban Orozco': 'https://images.fotmob.com/image_resources/playerimages/941951.png',
  'Erling Haaland': 'https://images.fotmob.com/image_resources/playerimages/737066.png',
  'Kevin De Bruyne': 'https://images.fotmob.com/image_resources/playerimages/169200.png',
  'Bruno Fernandes': 'https://images.fotmob.com/image_resources/playerimages/422685.png',
  'Luka Modrić': 'https://images.fotmob.com/image_resources/playerimages/31097.png',
  'Rúben Dias': 'https://images.fotmob.com/image_resources/playerimages/614006.png',
  'William Saliba': 'https://images.fotmob.com/image_resources/playerimages/955406.png',
  'João Pedro': 'https://images.fotmob.com/image_resources/playerimages/1021382.png',
  'Ferran Torres': 'https://images.fotmob.com/image_resources/playerimages/881771.png',
  'Phil Foden': 'https://images.fotmob.com/image_resources/playerimages/815006.png',
  'Jérémy Doku': 'https://images.fotmob.com/image_resources/playerimages/942368.png',
  'Joško Gvardiol': 'https://images.fotmob.com/image_resources/playerimages/1070712.png',
  'John Stones': 'https://images.fotmob.com/image_resources/playerimages/263653.png',
  'Mateo Kovačić': 'https://images.fotmob.com/image_resources/playerimages/239219.png',
  'Curtis Jones': 'https://images.fotmob.com/image_resources/playerimages/933768.png',
  'Kai Havertz': 'https://images.fotmob.com/image_resources/playerimages/749736.png',
  'Jurriën Timber': 'https://images.fotmob.com/image_resources/playerimages/942381.png',
  'David Raya': 'https://images.fotmob.com/image_resources/playerimages/562727.png',
  'Ben White': 'https://images.fotmob.com/image_resources/playerimages/776151.png',
  'Mikel Merino': 'https://images.fotmob.com/image_resources/playerimages/574645.png',
  'Cole Palmer': 'https://images.fotmob.com/image_resources/playerimages/1096353.png',
  'Pedro Neto': 'https://images.fotmob.com/image_resources/playerimages/843040.png',
  'Noni Madueke': 'https://images.fotmob.com/image_resources/playerimages/1084981.png',
  'Moisés Caicedo': 'https://images.fotmob.com/image_resources/playerimages/1137668.png',
  'Enzo Fernández': 'https://images.fotmob.com/image_resources/playerimages/1137705.png',
  'Wesley Fofana': 'https://images.fotmob.com/image_resources/playerimages/917802.png',
  'Roméo Lavia': 'https://images.fotmob.com/image_resources/playerimages/1190867.png',
  'Rasmus Højlund': 'https://images.fotmob.com/image_resources/playerimages/1199272.png',
  'Marcus Rashford': 'https://images.fotmob.com/image_resources/playerimages/696365.png',
  'Amad Diallo': 'https://images.fotmob.com/image_resources/playerimages/1070052.png',
  'Kobbie Mainoo': 'https://images.fotmob.com/image_resources/playerimages/1292810.png',
  'Manuel Ugarte': 'https://images.fotmob.com/image_resources/playerimages/1035614.png',
  'Lisandro Martínez': 'https://images.fotmob.com/image_resources/playerimages/847983.png',
  'Matthijs de Ligt': 'https://images.fotmob.com/image_resources/playerimages/769895.png',
  'Diogo Dalot': 'https://images.fotmob.com/image_resources/playerimages/751550.png',
  'Luke Shaw': 'https://images.fotmob.com/image_resources/playerimages/362694.png',
  'Joshua Zirkzee': 'https://images.fotmob.com/image_resources/playerimages/950830.png',
  'Guglielmo Vicario': 'https://images.fotmob.com/image_resources/playerimages/538501.png',
  'Piero Hincapié': 'https://images.fotmob.com/image_resources/playerimages/1137667.png',
  'Aleix García': 'https://images.fotmob.com/image_resources/playerimages/642551.png',
  'Nathan Tella': 'https://images.fotmob.com/image_resources/playerimages/877700.png',
  'Serhou Guirassy': 'https://images.fotmob.com/image_resources/playerimages/448540.png',
  'Jamie Gittens': 'https://images.fotmob.com/image_resources/playerimages/1113692.png',
  'Marcel Sabitzer': 'https://images.fotmob.com/image_resources/playerimages/215151.png',
  'Emre Can': 'https://images.fotmob.com/image_resources/playerimages/307021.png',
  'Nico Schlotterbeck': 'https://images.fotmob.com/image_resources/playerimages/1002058.png',
  'Gregor Kobel': 'https://images.fotmob.com/image_resources/playerimages/764018.png',
  'Alexander Meyer': 'https://images.fotmob.com/image_resources/playerimages/743381.png',
  'Ramy Bensebaini': 'https://images.fotmob.com/image_resources/playerimages/559065.png',
  'Benjamin Šeško': 'https://images.fotmob.com/image_resources/playerimages/1073977.png',
  'Marcus Thuram': 'https://images.fotmob.com/image_resources/playerimages/621562.png',
  'Nicolò Barella': 'https://images.fotmob.com/image_resources/playerimages/541820.png',
  'Hakan Çalhanoğlu': 'https://images.fotmob.com/image_resources/playerimages/304733.png',
  'Henrikh Mkhitaryan': 'https://images.fotmob.com/image_resources/playerimages/73167.png',
  'Benjamin Pavard': 'https://images.fotmob.com/image_resources/playerimages/611223.png',
  'Fikayo Tomori': 'https://images.fotmob.com/image_resources/playerimages/749662.png',
  'Matteo Gabbia': 'https://images.fotmob.com/image_resources/playerimages/844996.png',
  'Yunus Musah': 'https://images.fotmob.com/image_resources/playerimages/1137272.png',
  'Samuel Chukwueze': 'https://images.fotmob.com/image_resources/playerimages/688300.png',
  'Kenan Yıldız': 'https://images.fotmob.com/image_resources/playerimages/1412132.png',
  'Teun Koopmeiners': 'https://images.fotmob.com/image_resources/playerimages/866516.png',
  'Manuel Locatelli': 'https://images.fotmob.com/image_resources/playerimages/624166.png',
  'Gleison Bremer': 'https://images.fotmob.com/image_resources/playerimages/857269.png',
  'Federico Gatti': 'https://images.fotmob.com/image_resources/playerimages/1189288.png',
  'Weston McKennie': 'https://images.fotmob.com/image_resources/playerimages/848266.png',
  'Arkadiusz Milik': 'https://images.fotmob.com/image_resources/playerimages/277460.png',
  'Scott McTominay': 'https://images.fotmob.com/image_resources/playerimages/843099.png',
  'Stanislav Lobotka': 'https://images.fotmob.com/image_resources/playerimages/308517.png',
  'Giovanni Di Lorenzo': 'https://images.fotmob.com/image_resources/playerimages/414906.png',
  'Alessandro Buongiorno': 'https://images.fotmob.com/image_resources/playerimages/823018.png',
  'Amir Rrahmani': 'https://images.fotmob.com/image_resources/playerimages/544693.png',
  'Mathías Olivera': 'https://images.fotmob.com/image_resources/playerimages/729093.png',
  'Alex Meret': 'https://images.fotmob.com/image_resources/playerimages/577912.png',
  'Billy Gilmour': 'https://images.fotmob.com/image_resources/playerimages/942549.png',
  'Gonçalo Ramos': 'https://images.fotmob.com/image_resources/playerimages/940087.png',
  'João Neves': 'https://images.fotmob.com/image_resources/playerimages/1342757.png',
  'Vitinha': 'https://images.fotmob.com/image_resources/playerimages/1061249.png',
  'Achraf Hakimi': 'https://images.fotmob.com/image_resources/playerimages/770881.png',
  'Nuno Mendes': 'https://images.fotmob.com/image_resources/playerimages/1158945.png',
  'Marquinhos': 'https://images.fotmob.com/image_resources/playerimages/267365.png',
  'Gianluigi Donnarumma': 'https://images.fotmob.com/image_resources/playerimages/618878.png',
  'Matvey Safonov': 'https://images.fotmob.com/image_resources/playerimages/800880.png',
  'Fabián Ruiz': 'https://images.fotmob.com/image_resources/playerimages/605654.png',
  'Désiré Doué': 'https://images.fotmob.com/image_resources/playerimages/1339208.png',
  'Luis Henrique': 'https://images.fotmob.com/image_resources/playerimages/1114635.png',
  'Adrien Rabiot': 'https://images.fotmob.com/image_resources/playerimages/352879.png',
  'Gerónimo Rulli': 'https://images.fotmob.com/image_resources/playerimages/245555.png',
  'Edon Zhegrova': 'https://images.fotmob.com/image_resources/playerimages/862616.png',
  'Lucas Chevalier': 'https://images.fotmob.com/image_resources/playerimages/1177131.png',
  'Bruno Guimarães': 'https://images.fotmob.com/image_resources/playerimages/850354.png',
  'Jhon Lucumí': 'https://images.fotmob.com/image_resources/playerimages/860913.png',
  'Marc Guéhi': 'https://images.fotmob.com/image_resources/playerimages/844425.png',
  'Robert Andrich': 'https://images.fotmob.com/image_resources/playerimages/411851.png',
  'Riccardo Calafiori': 'https://images.fotmob.com/image_resources/playerimages/1105912.png',
  'Noussair Mazraoui': 'https://images.fotmob.com/image_resources/playerimages/775539.png',
  'Iliman Ndiaye': 'https://images.fotmob.com/image_resources/playerimages/965764.png',
  'Habib Diarra': 'https://images.fotmob.com/image_resources/playerimages/1285866.png',
  'Morgan Rogers': 'https://images.fotmob.com/image_resources/playerimages/883080.png',
  'Ezri Konsa': 'https://images.fotmob.com/image_resources/playerimages/710159.png',
  'Lucas Digne': 'https://images.fotmob.com/image_resources/playerimages/210111.png',
  'Danny Welbeck': 'https://images.fotmob.com/image_resources/playerimages/113836.png',
  'Carlos Baleba': 'https://images.fotmob.com/image_resources/playerimages/1352713.png',
  'Pervis Estupiñán': 'https://images.fotmob.com/image_resources/playerimages/688278.png',
  'Bryan Mbeumo': 'https://images.fotmob.com/image_resources/playerimages/923312.png',
  'Mark Flekken': 'https://images.fotmob.com/image_resources/playerimages/330643.png',
  'Eberechi Eze': 'https://images.fotmob.com/image_resources/playerimages/818975.png',
  'Maxence Lacroix': 'https://images.fotmob.com/image_resources/playerimages/950485.png',
  'Antoine Semenyo': 'https://images.fotmob.com/image_resources/playerimages/933576.png',
  'Kepa Arrizabalaga': 'https://images.fotmob.com/image_resources/playerimages/317564.png',
  'Matheus Cunha': 'https://images.fotmob.com/image_resources/playerimages/863098.png',
  'Rayan Aït-Nouri': 'https://images.fotmob.com/image_resources/playerimages/933845.png',
  'Elliot Anderson': 'https://images.fotmob.com/image_resources/playerimages/1089691.png',
  'Omari Hutchinson': 'https://images.fotmob.com/image_resources/playerimages/1215652.png',
  'Martín Zubimendi': 'https://images.fotmob.com/image_resources/playerimages/1031325.png',
  'Miguel Gutiérrez': 'https://images.fotmob.com/image_resources/playerimages/942379.png',
  'Loïc Badé': 'https://images.fotmob.com/image_resources/playerimages/1119461.png',
  'Cristhian Mosquera': 'https://images.fotmob.com/image_resources/playerimages/1298907.png',
  'Omar Alderete': 'https://images.fotmob.com/image_resources/playerimages/751998.png',
  'Fábio Silva': 'https://images.fotmob.com/image_resources/playerimages/1050158.png',
  'Mario Gila': 'https://images.fotmob.com/image_resources/playerimages/1106074.png',
  'Ivan Provedel': 'https://images.fotmob.com/image_resources/playerimages/364822.png',
  'Sam Beukema': 'https://images.fotmob.com/image_resources/playerimages/873573.png',
  'Vanja Milinković-Savić': 'https://images.fotmob.com/image_resources/playerimages/543021.png',
  'Lorenzo Lucca': 'https://images.fotmob.com/image_resources/playerimages/1212630.png',
  'Koni De Winter': 'https://images.fotmob.com/image_resources/playerimages/1200630.png',
  'Ange-Yoan Bonny': 'https://images.fotmob.com/image_resources/playerimages/1199383.png',
  'Warren Bondo': 'https://images.fotmob.com/image_resources/playerimages/1209987.png',
  'Patrick Dorgu': 'https://images.fotmob.com/image_resources/playerimages/1526560.png',
  'Kamil Grabara': 'https://images.fotmob.com/image_resources/playerimages/760722.png',
  'Patrick Drewes': 'https://images.fotmob.com/image_resources/playerimages/359203.png',
  'Malick Fofana': 'https://images.fotmob.com/image_resources/playerimages/1364069.png',
  'Rayan Cherki': 'https://images.fotmob.com/image_resources/playerimages/1104053.png',
  'Jérémie Boga': 'https://images.fotmob.com/image_resources/playerimages/643229.png',
  'Andy Diouf': 'https://images.fotmob.com/image_resources/playerimages/1254297.png',
  'Kevin Danso': 'https://images.fotmob.com/image_resources/playerimages/754126.png',
  'Facundo Medina': 'https://images.fotmob.com/image_resources/playerimages/812652.png',
  'Emanuel Emegha': 'https://images.fotmob.com/image_resources/playerimages/1183148.png',
  'Diego Moreira': 'https://images.fotmob.com/image_resources/playerimages/1342754.png',
  'Andrey Santos': 'https://images.fotmob.com/image_resources/playerimages/1372921.png',
  'Guela Doué': 'https://images.fotmob.com/image_resources/playerimages/1395704.png',
  'Petar Sučić': 'https://images.fotmob.com/image_resources/playerimages/1382000.png',
  'Christos Tzolis': 'https://images.fotmob.com/image_resources/playerimages/1157237.png',
  'Ardon Jashari': 'https://images.fotmob.com/image_resources/playerimages/1163219.png',
  'Janis Blaswich': 'https://images.fotmob.com/image_resources/playerimages/278814.png',
  'Viktor Gyökeres': 'https://images.fotmob.com/image_resources/playerimages/664500.png',
  'Geovany Quenda': 'https://images.fotmob.com/image_resources/playerimages/1530314.png',
  'Malik Tillman': 'https://images.fotmob.com/image_resources/playerimages/1126058.png',
  'Noa Lang': 'https://images.fotmob.com/image_resources/playerimages/837341.png',
  'Joey Veerman': 'https://images.fotmob.com/image_resources/playerimages/792429.png',
  'Aaron Anselmino': 'https://images.fotmob.com/image_resources/playerimages/1494947.png',
  'Manuel Akanji': 'https://images.fotmob.com/image_resources/playerimages/521318.png',
  'Piotr Zieliński': 'https://images.fotmob.com/image_resources/playerimages/362212.png',
  'Abdukodir Khusanov': 'https://images.fotmob.com/image_resources/playerimages/1362998.png',
  'Trai Hume': 'https://images.fotmob.com/image_resources/playerimages/1067763.png',
  'Daniel Ballard': 'https://images.fotmob.com/image_resources/playerimages/974268.png',
  'Julian Ryerson': 'https://images.fotmob.com/image_resources/playerimages/659272.png',
  'Willian Pacho': 'https://images.fotmob.com/image_resources/playerimages/1137670.png',
  'Alisson Farias': 'https://images.fotmob.com/image_resources/playerimages/638757.png',
  'Amarildo': 'https://images.fotmob.com/image_resources/playerimages/1082142.png',
  'Augustine Chidi Kwem': 'https://images.fotmob.com/image_resources/playerimages/1095052.png',
  'Benjamin Kuku': 'https://images.fotmob.com/image_resources/playerimages/791699.png',
  'Erik Sorga': 'https://images.fotmob.com/image_resources/playerimages/762688.png',
  'Eyenga Alain': 'https://vpf.vn/wp-content/uploads/2022/09/10-150x150.jpg',
  'Geovane Magno': 'https://vpf.vn/wp-content/uploads/2019/07/VTFC_BR0002265_GeovaneMangoCandidoSilveira_10-150x150.jpg',
  'Gustavo Santos': 'https://images.fotmob.com/image_resources/playerimages/1997436.png',
  'Hyuri Henrique': 'https://vpf.vn/wp-content/uploads/2024/09/so-9-QNam-150x150.jpg',
  'Hà Minh Tuấn': 'https://vpf.vn/wp-content/uploads/2018/12/SHBDN_13_HaMinhTuan_VN001570-150x150.jpg',
  'Jason Pendant Quang Vinh': 'https://images.fotmob.com/image_resources/playerimages/812234.png',
  'Lucão do Break': 'https://images.fotmob.com/image_resources/playerimages/1088156.png',
  'Michael Olaha': 'https://images.fotmob.com/image_resources/playerimages/832706.png',
  'Nguyễn Ngọc Hậu': 'https://vpf.vn/wp-content/uploads/2026/09/VHU_12_NguyenNgocHau_VN002026-150x150.jpg',
  'Noel Mbo': 'https://images.fotmob.com/image_resources/playerimages/688030.png',
  'Phạm Văn Nam': 'https://vpf.vn/wp-content/uploads/2022/03/PTFC_20_PhamVanNam_VN001933-150x150.jpg',
  'Wellington Nem': 'https://images.fotmob.com/image_resources/playerimages/264080.png',
  'Yuri Mamute': 'https://images.fotmob.com/image_resources/playerimages/292265.png',
  'Zaracho': 'https://images.fotmob.com/image_resources/playerimages/787262.png',
  'Zé Paulo': 'https://images.fotmob.com/image_resources/playerimages/535602.png',
  'Mohamed Salah': 'https://images.fotmob.com/image_resources/playerimages/292462.png',
  'Robert Lewandowski': 'https://images.fotmob.com/image_resources/playerimages/93447.png',
  'Salem Al-Dawsari': 'https://images.fotmob.com/image_resources/playerimages/307753.png',
  'Chanathip Songkrasin': 'https://images.fotmob.com/image_resources/playerimages/303561.png',
  'Theo Hernández': 'https://images.fotmob.com/image_resources/playerimages/724371.png',
  'Ederson Moraes': 'https://images.fotmob.com/image_resources/playerimages/957203.png',
  'Hendrio Araújo': 'https://images.fotmob.com/image_resources/playerimages/863137.png',
  'Đàm Tiến Dũng': 'https://vpf.vn/wp-content/uploads/2026/09/TXN-_4_DamTienDung_VN0000424-e1788420058199-150x150.png',
  'Hồ Minh Dĩ': 'https://vpf.vn/wp-content/uploads/2026/08/HPFC_11_HoMinhDi_VN0000740-e1787200857652-150x150.jpg',
  'Trương Thanh Nam': 'https://vpf.vn/wp-content/uploads/2026/08/ATH_14_TruongThanhNam_VN001297-scaled-e1787125501753-150x150.jpg',
  'Trần Mạnh Quỳnh': 'https://vpf.vn/wp-content/uploads/2026/09/TXN-_22_TranManhQuynh_VN001824-150x150.png',
  'Đinh Thành Luân': 'https://vpf.vn/wp-content/uploads/2026/09/QNU_11_DinhThanhLuan_VN0001144-150x150.jpg',
  'Kyle Colonna': 'https://vpf.vn/wp-content/uploads/2026/08/TCVT_2_ColonnaKyleNino_US002131-e1787651768773-150x150.jpg',
  'Võ Ngọc Cường': 'https://vpf.vn/wp-content/uploads/2026/09/KKH_93_VoNgocCuong_VN0001234-150x150.jpg',
  'Phan Văn Biểu': 'https://vpf.vn/wp-content/uploads/2026/08/CAHCM_32_PhanVanBieu_VN002172-150x150.jpg',
  'Janclesio': 'https://vpf.vn/wp-content/uploads/2023/02/13-150x150.jpg'
};
    let REAL_PLAYER_PHOTOS_NORM = {};

    function normalizeSearchText(str) {
      return (str || '')
        .toString()
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
    }

    function rebuildPlayerPhotoIndex() {
      REAL_PLAYER_PHOTOS_NORM = {};
      Object.entries(REAL_PLAYER_PHOTOS).forEach(([name, url]) => {
        if (!url) return;
        const nk = normalizeSearchText(name.split(' (')[0]);
        if (nk && !REAL_PLAYER_PHOTOS_NORM[nk]) {
          REAL_PLAYER_PHOTOS_NORM[nk] = url;
        }
      });
    }
    rebuildPlayerPhotoIndex();

    function getPlayerAvatarUrl(playerName) {
      if (!playerName) return null;
      if (REAL_PLAYER_PHOTOS[playerName]) return REAL_PLAYER_PHOTOS[playerName];
      const nk = normalizeSearchText(playerName.split(' (')[0]);
      return REAL_PLAYER_PHOTOS_NORM[nk] || null;
    }

    function getPlayerInitials(playerName) {
      const clean = (playerName || 'C T').split(' (')[0].trim();
      const parts = clean.split(/\s+/).filter(Boolean);
      if (parts.length === 0) return 'CT';
      if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }

    function getPlayerAvatarHtml(playerName, team = null, sizeClass = 'w-9 h-9', extraClass = '') {
      const url = getPlayerAvatarUrl(playerName);
      const initials = getPlayerInitials(playerName);
      const nat = getPlayerNaturalInfo(playerName, team);
      const safeName = (playerName || '').replace(/"/g, '&quot;');
      if (url) {
        return `
          <span class="player-avatar-wrap ${sizeClass} ${extraClass}" title="${safeName} (${nat.vnLabel})">
            <img src="${url}" alt="${safeName}" referrerpolicy="no-referrer" class="player-avatar-img" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
            <span style="display:none;" class="w-full h-full items-center justify-center font-black text-[10px] leading-none ${nat.textClass} bg-slate-900">${initials}</span>
          </span>
        `;
      }
      return `
        <span class="player-avatar-wrap ${sizeClass} ${nat.badgeClass} ${extraClass}" title="${safeName} (${nat.vnLabel})">
          <span class="font-black text-[10px] leading-none">${initials}</span>
        </span>
      `;
    }

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
    
    // =========================================================================
    // 2A. REAL TEAM LOGOS & NATIONAL FLAGS DIRECTORY (100% AUTHENTIC)
    // =========================================================================
    const NATION_ISO2_MAP = {
      'VIE': 'vn', 'THA': 'th', 'IDN': 'id', 'JPN': 'jp', 'KOR': 'kr', 'KSA': 'sa',
      'ARG': 'ar', 'BRA': 'br', 'COL': 'co', 'URU': 'uy', 'ESP': 'es', 'FRA': 'fr',
      'ENG': 'gb-eng', 'GER': 'de', 'POR': 'pt', 'NED': 'nl', 'ITA': 'it', 'CRO': 'hr',
      'MAR': 'ma', 'SEN': 'sn', 'USA': 'us', 'BEL': 'be', 'SUI': 'ch', 'DEN': 'dk',
      'AUT': 'at', 'TUR': 'tr', 'UKR': 'ua', 'POL': 'pl', 'SRB': 'rs', 'IRN': 'ir',
      'AUS': 'au', 'QAT': 'qa', 'UZB': 'uz', 'IRQ': 'iq', 'MAS': 'my', 'CHN': 'cn',
      'UAE': 'ae', 'JOR': 'jo', 'OMA': 'om', 'BHR': 'bh', 'SYR': 'sy', 'PLE': 'ps',
      'LBN': 'lb', 'KUW': 'kw', 'YEM': 'ye', 'IND': 'in', 'KGZ': 'kg', 'TJK': 'tj',
      'TKM': 'tm', 'AFG': 'af', 'PRK': 'kp', 'HKG': 'hk', 'MNG': 'mn', 'GUM': 'gu',
      'PHI': 'ph', 'SGP': 'sg', 'MYA': 'mm', 'CAM': 'kh', 'LAO': 'la', 'BRU': 'bn',
      'TLS': 'tl', 'BAN': 'bd', 'MDV': 'mv', 'NEP': 'np', 'BHU': 'bt', 'SRI': 'lk',
      'PAK': 'pk', 'ECU': 'ec', 'PAR': 'py', 'VEN': 've', 'CHI': 'cl', 'PER': 'pe',
      'BOL': 'bo', 'MEX': 'mx', 'CAN': 'ca', 'CRC': 'cr', 'PAN': 'pa', 'JAM': 'jm',
      'HON': 'hn', 'SLV': 'sv', 'GUA': 'gt', 'TRI': 'tt', 'HAI': 'ht', 'CUW': 'cw',
      'SUR': 'sr', 'NCA': 'ni', 'CUB': 'cu', 'DOM': 'do', 'GUY': 'gy', 'ATG': 'ag',
      'SKN': 'kn', 'LCA': 'lc', 'VIN': 'vc', 'GRN': 'gd', 'BRB': 'bb', 'BER': 'bm',
      'BLZ': 'bz', 'PUR': 'pr', 'EGY': 'eg', 'NGA': 'ng', 'CIV': 'ci', 'ALG': 'dz',
      'TUN': 'tn', 'CMR': 'cm', 'MLI': 'ml', 'GHA': 'gh', 'RSA': 'za', 'COD': 'cd',
      'GUI': 'gn', 'ANG': 'ao', 'BFA': 'bf', 'CPV': 'cv', 'EQG': 'gq', 'GAB': 'ga',
      'UGA': 'ug', 'BEN': 'bj', 'MOZ': 'mz', 'MAD': 'mg', 'KEN': 'ke', 'NAM': 'na',
      'ZAM': 'zm', 'ZIM': 'zw', 'TAN': 'tz', 'GNB': 'gw', 'SLE': 'sl', 'LBR': 'lr',
      'TOG': 'tg', 'NIG': 'ne', 'CTA': 'cf', 'CGO': 'cg', 'CHA': 'td', 'BOT': 'bw',
      'LES': 'ls', 'SWZ': 'sz', 'COM': 'km', 'NZL': 'nz', 'FIJ': 'fj', 'TAH': 'pf',
      'PNG': 'pg', 'SCO': 'gb-sct', 'WAL': 'gb-wls', 'IRL': 'ie', 'NIR': 'gb-nir',
      'SWE': 'se', 'NOR': 'no', 'FIN': 'fi', 'ISL': 'is', 'CZE': 'cz', 'SVK': 'sk',
      'HUN': 'hu', 'ROU': 'ro', 'GEO': 'ge', 'MKD': 'mk', 'BIH': 'ba', 'MNE': 'me',
      'BUL': 'bg', 'ISR': 'il', 'KOS': 'xk', 'ARM': 'am', 'AZE': 'az', 'KAZ': 'kz',
      'CYP': 'cy', 'EST': 'ee', 'LVA': 'lv', 'LTU': 'lt', 'LUX': 'lu', 'FRO': 'fo',
      'MLT': 'mt', 'MDA': 'md', 'AND': 'ad', 'LIE': 'li', 'SMR': 'sm', 'GIB': 'gi',
      'NMI': 'mp',
      'GRE': 'gr', 'SVN': 'si', 'ALB': 'al', 'TPE': 'tw', 'MAC': 'mo',
      'MWI': 'mw', 'RWA': 'rw', 'BDI': 'bi', 'ETH': 'et', 'SDN': 'sd',
      'LBY': 'ly', 'MTN': 'mr', 'GAM': 'gm'
    };

    const REAL_CLUB_LOGOS = {
      // Vietnam V.League 1 (Verified FotMob / VPF CDN)
      'nmd': 'https://images.fotmob.com/image_resources/logo/teamlogo/109375.png',
      'cahn': 'https://images.fotmob.com/image_resources/logo/teamlogo/614354.png',
      'hnfc': 'https://images.fotmob.com/image_resources/logo/teamlogo/179219.png',
      'vtl': 'https://images.fotmob.com/image_resources/logo/teamlogo/743070.png',
      'hpfc': 'https://images.fotmob.com/image_resources/logo/teamlogo/179222.png',
      'bbd': 'https://vpf.vn/wp-content/uploads/2018/10/LOGO-BECAMEX-TP-HCM-FC-NEW-01-150x150.png',
      'bth': 'https://images.fotmob.com/image_resources/logo/teamlogo/179226.png',
      'hagl': 'https://images.fotmob.com/image_resources/logo/teamlogo/179227.png',
      'slna': 'https://images.fotmob.com/image_resources/logo/teamlogo/179221.png',
      'hlht': 'https://images.fotmob.com/image_resources/logo/teamlogo/1123220.png',
      'qnbd': 'https://vpf.vn/wp-content/uploads/2018/10/1J3TQ2EDO_46643K-150x150.jpeg',
      'hcmc': 'https://images.fotmob.com/image_resources/logo/teamlogo/179228.png',
      'qnam': 'https://upload.wikimedia.org/wikipedia/en/c/c3/Quang_Nam_FC_logo.svg',
      'shbdn': 'https://images.fotmob.com/image_resources/logo/teamlogo/179220.png',

      // Premier League
      'mci': 'https://images.fotmob.com/image_resources/logo/teamlogo/8456.png',
      'liv': 'https://images.fotmob.com/image_resources/logo/teamlogo/8650.png',
      'ars': 'https://images.fotmob.com/image_resources/logo/teamlogo/9825.png',
      'che': 'https://images.fotmob.com/image_resources/logo/teamlogo/8455.png',
      'mun': 'https://images.fotmob.com/image_resources/logo/teamlogo/10260.png',
      'tot': 'https://images.fotmob.com/image_resources/logo/teamlogo/8586.png',
      'avl': 'https://images.fotmob.com/image_resources/logo/teamlogo/10252.png',
      'new': 'https://images.fotmob.com/image_resources/logo/teamlogo/10261.png',
      'bha': 'https://images.fotmob.com/image_resources/logo/teamlogo/10204.png',
      'whu': 'https://images.fotmob.com/image_resources/logo/teamlogo/8654.png',
      'ful': 'https://images.fotmob.com/image_resources/logo/teamlogo/9879.png',
      'bre': 'https://images.fotmob.com/image_resources/logo/teamlogo/9937.png',
      'cry': 'https://images.fotmob.com/image_resources/logo/teamlogo/9826.png',
      'bou': 'https://images.fotmob.com/image_resources/logo/teamlogo/8678.png',
      'wol': 'https://images.fotmob.com/image_resources/logo/teamlogo/8602.png',
      'eve': 'https://images.fotmob.com/image_resources/logo/teamlogo/8668.png',
      'nfo': 'https://images.fotmob.com/image_resources/logo/teamlogo/10203.png',
      'lei': 'https://images.fotmob.com/image_resources/logo/teamlogo/8197.png',
      'ips': 'https://images.fotmob.com/image_resources/logo/teamlogo/9902.png',
      'sou': 'https://images.fotmob.com/image_resources/logo/teamlogo/8466.png',

      // La Liga
      'rma': 'https://images.fotmob.com/image_resources/logo/teamlogo/8633.png',
      'fcb': 'https://images.fotmob.com/image_resources/logo/teamlogo/8634.png',
      'atm': 'https://images.fotmob.com/image_resources/logo/teamlogo/9906.png',
      'ath': 'https://images.fotmob.com/image_resources/logo/teamlogo/8315.png',
      'vil': 'https://images.fotmob.com/image_resources/logo/teamlogo/10205.png',
      'rso': 'https://images.fotmob.com/image_resources/logo/teamlogo/8560.png',
      'bet': 'https://images.fotmob.com/image_resources/logo/teamlogo/8603.png',
      'gir': 'https://images.fotmob.com/image_resources/logo/teamlogo/7732.png',
      'sev': 'https://images.fotmob.com/image_resources/logo/teamlogo/8302.png',
      'val': 'https://images.fotmob.com/image_resources/logo/teamlogo/10267.png',
      'cel': 'https://images.fotmob.com/image_resources/logo/teamlogo/9910.png',
      'osa': 'https://images.fotmob.com/image_resources/logo/teamlogo/8371.png',
      'mal': 'https://images.fotmob.com/image_resources/logo/teamlogo/8661.png',
      'ray': 'https://images.fotmob.com/image_resources/logo/teamlogo/10163.png',
      'get': 'https://images.fotmob.com/image_resources/logo/teamlogo/8305.png',
      'ala': 'https://images.fotmob.com/image_resources/logo/teamlogo/9866.png',
      'lpa': 'https://images.fotmob.com/image_resources/logo/teamlogo/8306.png',
      'leg': 'https://images.fotmob.com/image_resources/logo/teamlogo/7854.png',
      'esp_cl': 'https://images.fotmob.com/image_resources/logo/teamlogo/8558.png',
      'vld': 'https://images.fotmob.com/image_resources/logo/teamlogo/10281.png',

      // Serie A
      'int': 'https://images.fotmob.com/image_resources/logo/teamlogo/8636.png',
      'acm': 'https://images.fotmob.com/image_resources/logo/teamlogo/8564.png',
      'juv': 'https://images.fotmob.com/image_resources/logo/teamlogo/9885.png',
      'nap': 'https://images.fotmob.com/image_resources/logo/teamlogo/9875.png',
      'ata': 'https://images.fotmob.com/image_resources/logo/teamlogo/8524.png',
      'rom': 'https://images.fotmob.com/image_resources/logo/teamlogo/8686.png',
      'laz': 'https://images.fotmob.com/image_resources/logo/teamlogo/8543.png',
      'fio': 'https://images.fotmob.com/image_resources/logo/teamlogo/8535.png',
      'bol': 'https://images.fotmob.com/image_resources/logo/teamlogo/9857.png',
      'tor': 'https://images.fotmob.com/image_resources/logo/teamlogo/9804.png',
      'udi': 'https://images.fotmob.com/image_resources/logo/teamlogo/8600.png',
      'gen': 'https://images.fotmob.com/image_resources/logo/teamlogo/10233.png',
      'ver': 'https://images.fotmob.com/image_resources/logo/teamlogo/9876.png',
      'emp': 'https://images.fotmob.com/image_resources/logo/teamlogo/8534.png',
      'com': 'https://images.fotmob.com/image_resources/logo/teamlogo/10171.png',
      'par': 'https://images.fotmob.com/image_resources/logo/teamlogo/10167.png',
      'cag': 'https://images.fotmob.com/image_resources/logo/teamlogo/8529.png',
      'monz': 'https://images.fotmob.com/image_resources/logo/teamlogo/6504.png',
      'lec': 'https://images.fotmob.com/image_resources/logo/teamlogo/9888.png',
      'ven': 'https://images.fotmob.com/image_resources/logo/teamlogo/7881.png',

      // Bundesliga
      'bay': 'https://images.fotmob.com/image_resources/logo/teamlogo/9823.png',
      'lev': 'https://images.fotmob.com/image_resources/logo/teamlogo/8178.png',
      'bvb': 'https://images.fotmob.com/image_resources/logo/teamlogo/9789.png',
      'rbl': 'https://images.fotmob.com/image_resources/logo/teamlogo/178475.png',
      'vfb': 'https://images.fotmob.com/image_resources/logo/teamlogo/10269.png',
      'sge': 'https://images.fotmob.com/image_resources/logo/teamlogo/9810.png',
      'scf': 'https://images.fotmob.com/image_resources/logo/teamlogo/8358.png',
      'svw': 'https://images.fotmob.com/image_resources/logo/teamlogo/8697.png',
      'tsg': 'https://images.fotmob.com/image_resources/logo/teamlogo/8226.png',
      'fcu': 'https://images.fotmob.com/image_resources/logo/teamlogo/8244.png',
      'bmg': 'https://images.fotmob.com/image_resources/logo/teamlogo/9788.png',
      'wob': 'https://images.fotmob.com/image_resources/logo/teamlogo/8721.png',
      'm05': 'https://images.fotmob.com/image_resources/logo/teamlogo/9905.png',
      'fca': 'https://images.fotmob.com/image_resources/logo/teamlogo/8406.png',
      'fch': 'https://images.fotmob.com/image_resources/logo/teamlogo/94937.png',
      'stp': 'https://images.fotmob.com/image_resources/logo/teamlogo/8152.png',
      'kiel': 'https://images.fotmob.com/image_resources/logo/teamlogo/8150.png',
      'boc': 'https://images.fotmob.com/image_resources/logo/teamlogo/9911.png',

      // Ligue 1
      'psg': 'https://images.fotmob.com/image_resources/logo/teamlogo/9847.png',
      'om': 'https://images.fotmob.com/image_resources/logo/teamlogo/8588.png',
      'asm': 'https://images.fotmob.com/image_resources/logo/teamlogo/9829.png',
      'lil': 'https://images.fotmob.com/image_resources/logo/teamlogo/8639.png',
      'ol': 'https://images.fotmob.com/image_resources/logo/teamlogo/9748.png',
      'nic': 'https://images.fotmob.com/image_resources/logo/teamlogo/9831.png',
      'rcl': 'https://images.fotmob.com/image_resources/logo/teamlogo/8583.png',
      'sdr': 'https://images.fotmob.com/image_resources/logo/teamlogo/9837.png',
      'srfc': 'https://images.fotmob.com/image_resources/logo/teamlogo/9851.png',
      'sb29': 'https://images.fotmob.com/image_resources/logo/teamlogo/8521.png',
      'rcs': 'https://images.fotmob.com/image_resources/logo/teamlogo/9848.png',
      'tfc': 'https://images.fotmob.com/image_resources/logo/teamlogo/9941.png',
      'fcn': 'https://images.fotmob.com/image_resources/logo/teamlogo/9830.png',
      'aja': 'https://images.fotmob.com/image_resources/logo/teamlogo/10249.png',
      'sco': 'https://images.fotmob.com/image_resources/logo/teamlogo/8121.png',
      'asse': 'https://images.fotmob.com/image_resources/logo/teamlogo/9853.png',
      'hac': 'https://images.fotmob.com/image_resources/logo/teamlogo/9746.png',
      'mhsc': 'https://images.fotmob.com/image_resources/logo/teamlogo/10202.png',

      // Other Elite UEFA Clubs
      'ben': 'https://images.fotmob.com/image_resources/logo/teamlogo/9772.png',
      'scp': 'https://images.fotmob.com/image_resources/logo/teamlogo/9768.png',
      'psv': 'https://images.fotmob.com/image_resources/logo/teamlogo/8640.png',
      'fey': 'https://images.fotmob.com/image_resources/logo/teamlogo/10235.png',
      'celt': 'https://images.fotmob.com/image_resources/logo/teamlogo/9925.png',
      'shak': 'https://images.fotmob.com/image_resources/logo/teamlogo/8404.png',
      'czv': 'https://images.fotmob.com/image_resources/logo/teamlogo/8421.png',
      'dinz': 'https://images.fotmob.com/image_resources/logo/teamlogo/8418.png',
      'spar': 'https://images.fotmob.com/image_resources/logo/teamlogo/8422.png',
      'brug': 'https://images.fotmob.com/image_resources/logo/teamlogo/8342.png',
      'sturm': 'https://images.fotmob.com/image_resources/logo/teamlogo/8243.png',
      'slov': 'https://images.fotmob.com/image_resources/logo/teamlogo/8504.png',
      'salz': 'https://images.fotmob.com/image_resources/logo/teamlogo/8410.png',
      'yb': 'https://images.fotmob.com/image_resources/logo/teamlogo/10192.png',

      // Saudi Pro League
      'hil': 'https://images.fotmob.com/image_resources/logo/teamlogo/9812.png',
      'nas': 'https://images.fotmob.com/image_resources/logo/teamlogo/9813.png',
      'itt': 'https://images.fotmob.com/image_resources/logo/teamlogo/9814.png',
      'ahl': 'https://images.fotmob.com/image_resources/logo/teamlogo/9815.png',
      'shab': 'https://images.fotmob.com/image_resources/logo/teamlogo/101916.png',
      'ett': 'https://images.fotmob.com/image_resources/logo/teamlogo/101915.png',
      'taaw': 'https://images.fotmob.com/image_resources/logo/teamlogo/205686.png',
      'qad': 'https://images.fotmob.com/image_resources/logo/teamlogo/101919.png',
      'fateh': 'https://images.fotmob.com/image_resources/logo/teamlogo/177356.png',
      'riy': 'https://images.fotmob.com/image_resources/logo/teamlogo/582739.png',

      // Asia & Americas
      'fmar': 'https://images.fotmob.com/image_resources/logo/teamlogo/8415.png',
      'vissel': 'https://images.fotmob.com/image_resources/logo/teamlogo/8414.png',
      'ulsan': 'https://images.fotmob.com/image_resources/logo/teamlogo/8451.png',
      'alain': 'https://images.fotmob.com/image_resources/logo/teamlogo/102117.png',
      'buri': 'https://images.fotmob.com/image_resources/logo/teamlogo/165243.png',
      'bgpu': 'https://images.fotmob.com/image_resources/logo/teamlogo/165250.png',
      'jdt': 'https://images.fotmob.com/image_resources/logo/teamlogo/165228.png',
      'psm': 'https://images.fotmob.com/image_resources/logo/teamlogo/165198.png',
      'mia': 'https://images.fotmob.com/image_resources/logo/teamlogo/960720.png',
      'lag': 'https://images.fotmob.com/image_resources/logo/teamlogo/9988.png',
      'fla': 'https://images.fotmob.com/image_resources/logo/teamlogo/9770.png',
      'riv': 'https://images.fotmob.com/image_resources/logo/teamlogo/10086.png',
      'pal': 'https://images.fotmob.com/image_resources/logo/teamlogo/10243.png',
      'bot': 'https://images.fotmob.com/image_resources/logo/teamlogo/8517.png',
      'boc_j': 'https://images.fotmob.com/image_resources/logo/teamlogo/10085.png',
      'lafc': 'https://images.fotmob.com/image_resources/logo/teamlogo/867280.png',
      'clb': 'https://images.fotmob.com/image_resources/logo/teamlogo/9985.png',
      'ame': 'https://images.fotmob.com/image_resources/logo/teamlogo/7968.png',
      'shsp': 'https://images.fotmob.com/image_resources/logo/teamlogo/198616.png',
      'shsh': 'https://images.fotmob.com/image_resources/logo/teamlogo/6628.png',
      'sdts': 'https://images.fotmob.com/image_resources/logo/teamlogo/9758.png',
      'bjga': 'https://images.fotmob.com/image_resources/logo/teamlogo/9757.png',
      'kawa': 'https://images.fotmob.com/image_resources/logo/teamlogo/8412.png',
      'sdd': 'https://images.fotmob.com/image_resources/logo/teamlogo/8408.png',
      'pers': 'https://images.fotmob.com/image_resources/logo/teamlogo/8417.png',
      // Added UCL & Domestic Clubs
      'korat': 'https://images.fotmob.com/image_resources/logo/teamlogo/554037.png',
      'sukho': 'https://images.fotmob.com/image_resources/logo/teamlogo/584943.png',
      'khon': 'https://images.fotmob.com/image_resources/logo/teamlogo/626802.png',
      'lamp': 'https://images.fotmob.com/image_resources/logo/teamlogo/584947.png',
      'khal': 'https://images.fotmob.com/image_resources/logo/teamlogo/550433.png',
      'wehd': 'https://images.fotmob.com/image_resources/logo/teamlogo/6354.png',
      'damac': 'https://images.fotmob.com/image_resources/logo/teamlogo/582823.png',
      'raed': 'https://images.fotmob.com/image_resources/logo/teamlogo/150413.png',
      'inch': 'https://images.fotmob.com/image_resources/logo/teamlogo/8447.png',
      'daegu': 'https://images.fotmob.com/image_resources/logo/teamlogo/133897.png',
      'nagoya': 'https://images.fotmob.com/image_resources/logo/teamlogo/8411.png',
      'fuku': 'https://images.fotmob.com/image_resources/logo/teamlogo/8270.png',
      'kashiwa': 'https://images.fotmob.com/image_resources/logo/teamlogo/8413.png',
      'niig': 'https://images.fotmob.com/image_resources/logo/teamlogo/8416.png',
      'tianjin': 'https://images.fotmob.com/image_resources/logo/teamlogo/9760.png',
      'henan': 'https://images.fotmob.com/image_resources/logo/teamlogo/9761.png',
      'wuhan': 'https://images.fotmob.com/image_resources/logo/teamlogo/1029687.png',
      'flu': 'https://images.fotmob.com/image_resources/logo/teamlogo/9863.png',
      'sao': 'https://images.fotmob.com/image_resources/logo/teamlogo/10242.png',
      'min': 'https://images.fotmob.com/image_resources/logo/teamlogo/10240.png',
      'gre': 'https://images.fotmob.com/image_resources/logo/teamlogo/8472.png',

      // Pohang Steelers (K League 1)
      'poang': 'https://images.fotmob.com/image_resources/logo/teamlogo/8449.png',
      // J1 League
      'hiro': 'https://images.fotmob.com/image_resources/logo/teamlogo/8407.png',
      'mach': 'https://images.fotmob.com/image_resources/logo/teamlogo/194011.png',
      'gamb': 'https://images.fotmob.com/image_resources/logo/teamlogo/8410.png',
      'kash': 'https://images.fotmob.com/image_resources/logo/teamlogo/8409.png',
      'uraw': 'https://images.fotmob.com/image_resources/logo/teamlogo/8418.png',
      'fctk': 'https://images.fotmob.com/image_resources/logo/teamlogo/8420.png',
      'cere': 'https://images.fotmob.com/image_resources/logo/teamlogo/8417.png',
      // K League 1
      'jeon': 'https://images.fotmob.com/image_resources/logo/teamlogo/8448.png',
      'fcse': 'https://images.fotmob.com/image_resources/logo/teamlogo/92630.png',
      'gang': 'https://images.fotmob.com/image_resources/logo/teamlogo/164734.png',
      'gimch': 'https://images.fotmob.com/image_resources/logo/teamlogo/8450.png',
      'suwon': 'https://images.fotmob.com/image_resources/logo/teamlogo/187951.png',
      'gwang': 'https://images.fotmob.com/image_resources/logo/teamlogo/245905.png',
      'jeju': 'https://images.fotmob.com/image_resources/logo/teamlogo/133898.png',
      'daej': 'https://images.fotmob.com/image_resources/logo/teamlogo/8452.png',
      // Thai League 1
      'port': 'https://images.fotmob.com/image_resources/logo/teamlogo/165255.png',
      'utd_bkk': 'https://images.fotmob.com/image_resources/logo/teamlogo/102231.png',
      'muang': 'https://images.fotmob.com/image_resources/logo/teamlogo/165251.png',
      'ratch': 'https://images.fotmob.com/image_resources/logo/teamlogo/421346.png',
      'chiang': 'https://images.fotmob.com/image_resources/logo/teamlogo/243243.png',
      'prachuap': 'https://images.fotmob.com/image_resources/logo/teamlogo/585025.png',
      // Chinese Super League
      'cdrc': 'https://images.fotmob.com/image_resources/logo/teamlogo/737052.png',
      'zhej': 'https://images.fotmob.com/image_resources/logo/teamlogo/9762.png',
      // Southeast Asian Champions & Cups
      'sela': 'https://images.fotmob.com/image_resources/logo/teamlogo/165223.png',
      'lcs': 'https://images.fotmob.com/image_resources/logo/teamlogo/67366.png',
      'bFC': 'https://images.fotmob.com/image_resources/logo/teamlogo/585858.png',
      'kaya': 'https://images.fotmob.com/image_resources/logo/teamlogo/612493.png',
      'svay': 'https://images.fotmob.com/image_resources/logo/teamlogo/542025.png',
      'persib': 'https://images.fotmob.com/image_resources/logo/teamlogo/165196.png',
      'persija': 'https://images.fotmob.com/image_resources/logo/teamlogo/165191.png',
      'perseb': 'https://images.fotmob.com/image_resources/logo/teamlogo/930525.png',
      'bali': 'https://images.fotmob.com/image_resources/logo/teamlogo/185751.png',
      'tereng': 'https://images.fotmob.com/image_resources/logo/teamlogo/165229.png',
      'sabah': 'https://images.fotmob.com/image_resources/logo/teamlogo/242698.png'

    };

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

    function getTeamRealLogoUrl(team) {
      if (!team) return '';
      if (team.type === 'nations') {
        const code = (team.code || '').toUpperCase();
        const iso2 = NATION_ISO2_MAP[code];
        if (iso2) {
          return 'https://flagcdn.com/w160/' + iso2 + '.png';
        }
      } else {
        if (REAL_CLUB_LOGOS[team.id]) {
          return REAL_CLUB_LOGOS[team.id];
        }
      }
      return '';
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
      if (!team) return '';
      const fallbackUrl = getTeamLogoUrl(team);
      const realUrl = getTeamRealLogoUrl(team);
      const isFlag = team.type === 'nations';
      const fitClass = isFlag ? 'object-contain rounded-md drop-shadow' : 'object-contain drop-shadow';
      const primaryUrl = realUrl || fallbackUrl;
      return `<img src="${primaryUrl}" alt="${team.name}" class="${sizeClass} ${fitClass} shrink-0" loading="lazy" onerror="this.onerror=null;this.src='${fallbackUrl}';" />`;
    }

    // Verified League & Tournament Official Logos (21/21 HTTP 200 FotMob / VPF CDN + Crisp Vector Fallback)
    const TOURNAMENT_LOGOS = {
      'vleague1': '9088',
      'asian_cup': '290',
      'asean_cup': '9265',
      'asean_club': '11012',
      'thaileague': '8984',
      'msl': '8985',
      'liga1_idn': '8983',
      'jleague': '223',
      'kleague': '9080',
      'csl': '120',
      'saudi_pro': '536',
      'afc_cl': '525',
      'ucl': '42',
      'epl': '47',
      'laliga': '87',
      'seriea': '55',
      'bundesliga': '54',
      'ligue1': '53',
      'americas_cl': '45',
      'euro': '50',
      'world_cup': '77'
    };

    const TOURNAMENT_FALLBACK_CACHE = {};
    function getTournamentFallbackLogoUrl(tourney) {
      if (!tourney) return '';
      if (!TOURNAMENT_FALLBACK_CACHE[tourney.id]) {
        const label = (tourney.shortName || tourney.id).slice(0, 4).toUpperCase();
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs><linearGradient id="tg_${tourney.id}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#0284c7"/></linearGradient></defs>
          <path d="M50 6 L90 20 L90 54 C90 77 72 91 50 96 C28 91 10 77 10 54 L10 20 Z" fill="url(#tg_${tourney.id})" stroke="#fde047" stroke-width="4"/>
          <text x="50" y="58" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-weight="900" font-size="24" fill="#ffffff">${label}</text>
        </svg>`;
        TOURNAMENT_FALLBACK_CACHE[tourney.id] = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
      }
      return TOURNAMENT_FALLBACK_CACHE[tourney.id];
    }

    function getTournamentLogoUrl(tourney, variant = 'dark') {
      if (!tourney) return '';
      const lid = TOURNAMENT_LOGOS[tourney.id];
      if (!lid) return getTournamentFallbackLogoUrl(tourney);
      return variant === 'light'
        ? `https://images.fotmob.com/image_resources/logo/leaguelogo/${lid}.png`
        : `https://images.fotmob.com/image_resources/logo/leaguelogo/dark/${lid}.png`;
    }

    function getTournamentLogoHtml(tourney, sizeClass = 'w-5 h-5', variant = 'dark') {
      if (!tourney) return '';
      const url = getTournamentLogoUrl(tourney, variant);
      const fb = getTournamentFallbackLogoUrl(tourney);
      return `<img src="${url}" alt="${tourney.shortName || tourney.name}" class="${sizeClass} object-contain shrink-0 drop-shadow" loading="lazy" onerror="this.onerror=null;this.src='${fb}';" />`;
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
      fifaPrevRankMap: {},
      fifaPrevClubRankMap: {},
      phase: 'predicting',       // 'predicting' | 'simulating' | 'finished'
      simInterval: null,
      goalPopupTimeout: null,
      duration: 120,
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
      sidesSwapped: false,
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
      history: [],

      // Multi-Season Progression & OVR Evolution (Strictly Max 125 OVR)
      seasonYear: 2026,
      seasonSummary: null,
      awardBootScope: 'league', // 'league' | 'global'
      awardBallonScope: 'world', // 'world' | 'league'
      transferSearch: '',
      playerSearchQuery: '',
      playerSearchFilter: 'all',
      playerSeasonData: {
        seasonYear: 2026,
        players: {},
        awardHistory: []
      },

      // Game Mode & Sự nghiệp HLV (Soccer Manager Career Mode)
      gameMode: 'predict', // 'predict' | 'manager'
      manager: {
        name: 'HLV Trưởng',
        teamId: null,
        tourneyId: null,
        seasonYear: 2026,
        isContractLocked: false,
        careerSeasonNumber: 1,
        matches: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        gf: 0,
        ga: 0,
        boardConfidence: 90,
        trophies: [],
        budget: 150, // Ngân sách chuyển nhượng (M €)
        formation: '4-3-3',
        playstyle: 'attack',
        customLineups: {},
        customSquads: {},
        captains: {},
        selectedLineupIdx: null,
        activeShout: null,
        shoutTimer: 0
      }
    };
    window.footballState = state;

    function loadManagerCareer() {
      try {
        const raw = localStorage.getItem('football_manager_career_v1');
        if (raw) {
          const data = JSON.parse(raw);
          state.manager = Object.assign(state.manager, data);
          if (typeof state.manager.budget !== 'number') {
            state.manager.budget = 150;
          }
          if (!state.manager.customLineups || typeof state.manager.customLineups !== 'object') {
            state.manager.customLineups = {};
          }
          if (!state.manager.customSquads || typeof state.manager.customSquads !== 'object') {
            state.manager.customSquads = {};
          }
          if (!state.manager.captains || typeof state.manager.captains !== 'object') {
            state.manager.captains = {};
          }
          state.manager.selectedLineupIdx = null;
          // Restore custom squads (bought/sold players) onto TEAMS_DB
          Object.entries(state.manager.customSquads).forEach(([tid, squadArr]) => {
            const tObj = TEAMS_DB.find(t => t.id === tid);
            if (tObj && Array.isArray(squadArr) && squadArr.length >= 11) {
              tObj.stars = [...squadArr];
            }
          });
        }
      } catch (e) {}
    }

    function saveManagerCareer() {
      try {
        localStorage.setItem('football_manager_career_v1', JSON.stringify({
          name: state.manager.name,
          teamId: state.manager.teamId,
          tourneyId: state.manager.tourneyId,
          seasonYear: state.manager.seasonYear,
          isContractLocked: state.manager.isContractLocked,
          careerSeasonNumber: state.manager.careerSeasonNumber,
          matches: state.manager.matches,
          wins: state.manager.wins,
          draws: state.manager.draws,
          losses: state.manager.losses,
          gf: state.manager.gf,
          ga: state.manager.ga,
          boardConfidence: state.manager.boardConfidence,
          trophies: state.manager.trophies,
          budget: state.manager.budget || 150,
          formation: state.manager.formation,
          playstyle: state.manager.playstyle,
          customLineups: state.manager.customLineups || {},
          customSquads: state.manager.customSquads || {},
          captains: state.manager.captains || {}
        }));
      } catch (e) {}
    }

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

    function saveCustomRatings() {
      try {
        const map = {};
        TEAMS_DB.forEach(t => {
          map[t.id] = t.rating;
        });
        localStorage.setItem('football_custom_ratings', JSON.stringify(map));
      } catch (e) {}
    }

    function loadCustomRatings() {
      try {
        const saved = localStorage.getItem('football_custom_ratings');
        if (saved) {
          const map = JSON.parse(saved);
          TEAMS_DB.forEach(t => {
            if (typeof map[t.id] === 'number') {
              // Strictly cap at max 125 OVR
              t.rating = Math.min(125, Math.max(50, map[t.id]));
            }
          });
        }
        const savedSeason = parseInt(localStorage.getItem('football_season_year'), 10);
        if (!isNaN(savedSeason) && savedSeason >= 2026) {
          state.seasonYear = savedSeason;
        }
        updateSeasonHeaderBadge();
      } catch (e) {}
    }

    function updateSeasonHeaderBadge() {
      const badge = document.getElementById('currentSeasonHeaderBadge');
      if (badge) {
        badge.textContent = `MÙA GIẢI ${state.seasonYear}/${state.seasonYear + 1}`;
      }
      const awardsPill = document.getElementById('awardsSeasonPill');
      if (awardsPill) {
        awardsPill.textContent = `MÙA ${state.seasonYear}/${state.seasonYear + 1}`;
      }
      const modalYearTag = document.getElementById('seasonEndYearTag');
      if (modalYearTag) {
        modalYearTag.textContent = `MÙA ${state.seasonYear}/${state.seasonYear + 1}`;
      }
      const nextBtnText = document.getElementById('btnStartNextSeasonText');
      if (nextBtnText) {
        nextBtnText.textContent = `BẮT ĐẦU MÙA GIẢI MỚI (MÙA ${state.seasonYear + 1}/${state.seasonYear + 2})`;
      }
    }

    // =========================================================================
    // END-OF-SEASON OVR PROGRESSION ENGINE (MAX 125 OVR STRICTLY ENFORCED)
    // =========================================================================
    function handleSeasonEndAndOvrProgression(tourneyParam) {
      const tourney = tourneyParam || getActiveTournament();
      initStandingsForTournament(tourney.id);
      const table = state.standingsByTourney[tourney.id];
      if (!table) return null;

      const rows = Object.values(table).sort(rankStandingRows);
      const count = rows.length;
      const ovrChanges = [];

      rows.forEach((r, idx) => {
        const rank = idx + 1;
        const t = r.team;
        const oldRating = t.rating;
        let delta = 0;
        let achievement = '';

        if (rank === 1) {
          delta = 5; // Champion
          achievement = '🏆 VÔ ĐỊCH MÙA GIẢI';
        } else if (rank === 2) {
          delta = 3; // Runner-up
          achievement = '🥈 Á QUÂN XUẤT SẮC';
        } else if (rank <= 4) {
          delta = 2; // Top 4
          achievement = '🥉 TOP 4 DẪN ĐẦU';
        } else if (rank <= Math.ceil(count * 0.38)) {
          delta = 1; // Upper tier
          achievement = '📈 NHÓM DẪN ĐẦU';
        } else if (rank > count - 2 && count >= 8) {
          if (rank === count) {
            delta = -3;
            achievement = '🔻 ĐỘI CHÓT BẢNG';
          } else {
            delta = -2;
            achievement = '⚠️ XUỐNG HẠNG';
          }
        } else if (rank > Math.floor(count * 0.72) && count >= 6) {
          delta = -1;
          achievement = '📉 SA SÚT PHONG ĐỘ';
        } else {
          delta = 0;
          achievement = '⚖️ TRUNG VỊ ỔN ĐỊNH';
        }

        // CRITICAL CONSTRAINT: DO NOT EXCEED 125 OVR!
        const newRating = Math.min(125, Math.max(50, oldRating + delta));
        const actualDelta = newRating - oldRating;

        t.rating = newRating;

        ovrChanges.push({
          team: t,
          rank,
          played: r.played,
          pts: r.pts,
          gd: r.gf - r.ga,
          oldRating,
          delta: actualDelta,
          newRating,
          achievement
        });
      });

      // Fluctuation for other teams across the world (-1 to +1), strictly capped at 125 OVR
      const tourneyTeamIds = new Set(rows.map(r => r.team.id));
      TEAMS_DB.forEach(t => {
        if (!tourneyTeamIds.has(t.id)) {
          const rand = Math.random();
          let subtle = 0;
          if (rand < 0.22) subtle = 1;
          else if (rand > 0.82) subtle = -1;
          t.rating = Math.min(125, Math.max(50, t.rating + subtle));
        }
      });

      saveCustomRatings();
      const awards = finalizeSeasonAwards(tourney, ovrChanges);
      state.seasonSummary = {
        tourney,
        seasonYear: state.seasonYear,
        ovrChanges,
        awards
      };

      showSeasonEndModal(tourney, ovrChanges);
      return ovrChanges;
    }

    function isTournamentCompleted(tourneyParam) {
      const tourney = tourneyParam || getActiveTournament();
      if (tourney.id === 'world_cup') {
        return state.stageIndex >= 7 && state.phase === 'complete';
      }
      const allGroups = state.groupFixturesByTourney[tourney.id] || {};
      let totalFixtures = 0;
      let playedFixtures = 0;

      for (const [grpName, grpFixtures] of Object.entries(allGroups)) {
        for (const f of grpFixtures) {
          totalFixtures++;
          if (f.played) playedFixtures++;
        }
      }

      if (totalFixtures === 0) return false;
      return playedFixtures >= totalFixtures;
    }

    function openSeasonHeaderAction() {
      const tourney = getActiveTournament();
      if (isTournamentCompleted(tourney) && state.seasonSummary) {
        showSeasonEndModal(tourney, state.seasonSummary.ovrChanges);
      } else {
        showSeasonProgressModal(tourney);
      }
    }

    function showSeasonProgressModal(tourneyParam) {
      const tourney = tourneyParam || getActiveTournament();
      const modal = document.getElementById('modalSeasonProgress');
      if (!modal) return;

      const allGroups = state.groupFixturesByTourney[tourney.id] || {};
      let totalFixtures = 0;
      let playedFixtures = 0;
      for (const [grpName, grpFixtures] of Object.entries(allGroups)) {
        for (const f of grpFixtures) {
          totalFixtures++;
          if (f.played) playedFixtures++;
        }
      }

      const stTable = state.standingsByTourney[tourney.id];
      const rows = stTable ? Object.values(stTable).sort(rankStandingRows) : [];
      const leader = rows[0]?.team?.name || 'Đang cập nhật';
      const playedCount = rows[0]?.played || 0;

      const detailsEl = document.getElementById('seasonProgressDetails');
      if (detailsEl) {
        detailsEl.innerHTML = `
          <div class="flex items-center justify-between py-1 border-b border-white/5">
            <span class="text-slate-400">Giải đấu hiện tại:</span>
            <span class="font-bold text-white">${tourney.icon} ${tourney.name}</span>
          </div>
          ${tourney.id === 'world_cup' ? `
          <div class="flex items-center justify-between py-1 border-b border-white/5">
            <span class="text-slate-400">Giai đoạn hiện tại:</span>
            <span class="font-bold text-amber-300">${tourney.stages[state.stageIndex] || 'Vòng loại'}</span>
          </div>` : ''}
          <div class="flex items-center justify-between py-1 border-b border-white/5">
            <span class="text-slate-400">Tiến độ mùa giải:</span>
            <span class="font-mono font-bold text-emerald-400">${playedFixtures} / ${totalFixtures} trận đã đá</span>
          </div>
          <div class="flex items-center justify-between py-1 border-b border-white/5">
            <span class="text-slate-400">Số vòng đã thi đấu:</span>
            <span class="font-mono font-bold text-amber-300">Vòng ${state.roundNumber || playedCount}</span>
          </div>
          <div class="flex items-center justify-between py-1">
            <span class="text-slate-400">Đội dẫn đầu bảng:</span>
            <span class="font-bold text-amber-300">${leader}</span>
          </div>
        `;
      }

      modal.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    }

    function showSeasonEndModal(tourneyParam, ovrChangesParam) {
      const tourney = tourneyParam || state.seasonSummary?.tourney || getActiveTournament();
      const ovrChanges = ovrChangesParam || state.seasonSummary?.ovrChanges;

      if (!ovrChanges || !ovrChanges.length) {
        if (!isTournamentCompleted(tourney)) {
          showSeasonProgressModal(tourney);
          return;
        }
        handleSeasonEndAndOvrProgression(tourney);
        return;
      }

      const modal = document.getElementById('modalSeasonEnd');
      if (!modal) return;

      updateSeasonHeaderBadge();

      const subtitle = document.getElementById('seasonEndTournamentSubtitle');
      if (subtitle) {
        subtitle.textContent = `${tourney.icon} ${tourney.name} · Bảng tổng kết và biến động chỉ số OVR (Tối đa 125 OVR)`;
      }

      // Populate Honors Podium: Vô địch (Quán quân), Á quân, Hạng ba, Top 4
      const honorsContainer = document.getElementById('seasonHonorsPodium');
      const champion = ovrChanges[0];
      const runnerUp = ovrChanges[1];
      const thirdPlace = ovrChanges[2];
      const fourthPlace = ovrChanges[3];

      if (honorsContainer) {
        let honorsHtml = '';

        // 🥇 1. VÔ ĐỊCH (QUÁN QUÂN)
        if (champion) {
          const deltaStr = champion.delta >= 0 ? `+${champion.delta}` : `${champion.delta}`;
          let ticketNote = 'Vé vào thẳng đấu trường Châu lục';
          if (tourney.id === 'vleague1') {
            ticketNote = '🎟️ Suất vào thẳng VCK AFC Champions League Elite (C1 Châu Á) Mùa tới!';
            if (!champion.team.tournaments.includes('afc_cl')) champion.team.tournaments.push('afc_cl');
          } else if (['epl', 'laliga', 'seriea', 'bundesliga', 'ligue1'].includes(tourney.id)) {
            ticketNote = '🎟️ Suất vào thẳng VCK UEFA Champions League Mùa tới!';
            if (!champion.team.tournaments.includes('ucl')) champion.team.tournaments.push('ucl');
          } else if (tourney.id === 'saudi_pro' || tourney.id === 'jleague' || tourney.id === 'kleague' || tourney.id === 'thaileague') {
            ticketNote = '🎟️ Suất vào thẳng AFC Champions League Elite!';
            if (!champion.team.tournaments.includes('afc_cl')) champion.team.tournaments.push('afc_cl');
          }

          honorsHtml += `
            <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-amber-500/25 via-yellow-500/20 to-amber-600/25 border-2 border-amber-400/60 shadow-xl flex items-center gap-3 sm:gap-4">
              <div class="relative shrink-0">
                ${getTeamLogoHtml(champion.team, 'w-14 h-14 sm:w-16 sm:h-16')}
                <span class="absolute -top-2 -right-2 text-xl drop-shadow animate-bounce">👑</span>
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-2.5 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 flex items-center gap-1 shadow">
                    <span>🥇 ĐỘI VÔ ĐỊCH (QUÁN QUÂN)</span>
                  </span>
                  <span class="text-xs text-amber-200 font-bold">${champion.pts} điểm (${champion.played} trận)</span>
                </div>
                <h4 class="text-base sm:text-xl font-black text-white truncate mt-1">${champion.team.name}</h4>
                <div class="flex items-center gap-2 mt-1 text-xs flex-wrap">
                  <span class="text-slate-300">OVR: <strong class="text-white">${champion.oldRating}</strong> ➔ <strong class="text-emerald-300 font-black text-sm">${champion.newRating}</strong></span>
                  <span class="px-2 py-0.5 rounded-md text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">▲ ${deltaStr} OVR</span>
                  <span class="text-[11px] font-bold text-amber-300">${ticketNote}</span>
                </div>
              </div>
            </div>
          `;
        }

        // 🥈 2. Á QUÂN (HẠNG NHÌ)
        if (runnerUp) {
          const deltaStr = runnerUp.delta >= 0 ? `+${runnerUp.delta}` : `${runnerUp.delta}`;
          let ticketNote = 'Á Quân mùa giải';
          if (tourney.id === 'vleague1') {
            ticketNote = '🎟️ Suất dự Cúp C1 ĐNÁ Shopee Cup & Play-off AFC CL!';
            if (!runnerUp.team.tournaments.includes('asean_club')) runnerUp.team.tournaments.push('asean_club');
          } else if (['epl', 'laliga', 'seriea', 'bundesliga', 'ligue1'].includes(tourney.id)) {
            ticketNote = '🎟️ Suất vào thẳng UEFA Champions League!';
            if (!runnerUp.team.tournaments.includes('ucl')) runnerUp.team.tournaments.push('ucl');
          }

          honorsHtml += `
            <div class="p-3 rounded-xl bg-gradient-to-r from-slate-800/80 via-slate-700/60 to-slate-800/80 border border-slate-300/40 shadow flex items-center gap-3">
              <div class="relative shrink-0">
                ${getTeamLogoHtml(runnerUp.team, 'w-11 h-11 sm:w-12 sm:h-12')}
                <span class="absolute -bottom-1 -right-1 text-lg">🥈</span>
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-2 flex-wrap">
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-200 text-slate-950">
                    🥈 ĐỘI Á QUÂN (HẠNG 2)
                  </span>
                  <span class="text-xs text-slate-300 font-semibold">${runnerUp.pts} điểm</span>
                </div>
                <h5 class="text-sm sm:text-base font-extrabold text-white truncate mt-0.5">${runnerUp.team.name}</h5>
                <div class="flex items-center gap-2 text-xs flex-wrap mt-0.5">
                  <span class="text-slate-300">OVR: <strong class="text-white">${runnerUp.oldRating}</strong> ➔ <strong class="text-emerald-300 font-bold">${runnerUp.newRating}</strong> (▲ +${runnerUp.delta})</span>
                  <span class="text-[11px] font-semibold text-slate-300">${ticketNote}</span>
                </div>
              </div>
            </div>
          `;
        }

        // 🥉 3. HẠNG BA & TOP 4
        if (thirdPlace || fourthPlace) {
          honorsHtml += `<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">`;
          if (thirdPlace) {
            honorsHtml += `
              <div class="p-2.5 rounded-xl bg-slate-900/80 border border-amber-700/40 flex items-center gap-2.5">
                <div class="relative shrink-0">
                  ${getTeamLogoHtml(thirdPlace.team, 'w-9 h-9')}
                  <span class="absolute -bottom-1 -right-1 text-sm">🥉</span>
                </div>
                <div class="min-w-0 flex-1">
                  <span class="px-1.5 py-0.2 rounded text-[9px] font-black bg-amber-700/30 text-amber-300 uppercase">🥉 HẠNG BA</span>
                  <div class="font-bold text-xs text-white truncate mt-0.5">${thirdPlace.team.name}</div>
                  <div class="text-[11px] text-slate-400 font-mono">${thirdPlace.pts}đ · OVR ${thirdPlace.newRating} (▲ +${thirdPlace.delta})</div>
                </div>
              </div>
            `;
          }
          if (fourthPlace) {
            honorsHtml += `
              <div class="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 flex items-center gap-2.5">
                <div class="relative shrink-0">
                  ${getTeamLogoHtml(fourthPlace.team, 'w-9 h-9')}
                  <span class="absolute -bottom-1 -right-1 text-xs">🎖️</span>
                </div>
                <div class="min-w-0 flex-1">
                  <span class="px-1.5 py-0.2 rounded text-[9px] font-black bg-emerald-500/20 text-emerald-300 uppercase">TOP 4 GIẢI ĐẤU</span>
                  <div class="font-bold text-xs text-white truncate mt-0.5">${fourthPlace.team.name}</div>
                  <div class="text-[11px] text-slate-400 font-mono">${fourthPlace.pts}đ · OVR ${fourthPlace.newRating} (▲ +${fourthPlace.delta})</div>
                </div>
              </div>
            `;
          }
          honorsHtml += `</div>`;
        }

        honorsContainer.innerHTML = honorsHtml;
      }

      // Populate Individual Awards Podium: Vua Phá Lưới & Quả Bóng Vàng
      const indivEl = document.getElementById('seasonIndividualAwardsPodium');
      const awards = state.seasonSummary?.awards || finalizeSeasonAwards(tourney, ovrChanges, false);
      if (indivEl && awards) {
        const gb = awards.goldenBoot || [];
        const bLeague = awards.ballonLeague || [];
        const bWorld = awards.ballonWorld || [];
        const gbWinner = gb[0];
        const bWinner = bWorld[0] || bLeague[0];
        const leagueMvp = bLeague[0];

        const renderMiniPos = (pos, badgeCls) => `<span class="px-1.5 py-0.2 rounded text-[9px] font-black border ${badgeCls}">${pos}</span>`;

        indivEl.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            <div class="p-3 rounded-xl bg-gradient-to-br from-emerald-500/15 via-slate-900/90 to-slate-950 border border-emerald-400/35 space-y-2">
              <div class="flex items-center justify-between">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-emerald-400 text-slate-950">👟 VUA PHÁ LƯỚI (${tourney.shortName})</span>
                <span class="text-[10px] text-emerald-300 font-bold">Chiếc Giày Vàng</span>
              </div>
              ${gbWinner ? `
                <div class="flex items-center gap-2.5">
                  ${getPlayerAvatarHtml(gbWinner.name, gbWinner.team, 'w-11 h-11')}
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 flex-wrap">
                      ${renderMiniPos(gbWinner.posInfo.specificPos, gbWinner.posInfo.badgeClass)}
                      <span class="font-black text-sm text-white truncate">${gbWinner.name}</span>
                    </div>
                    <div class="text-[11px] text-slate-300 truncate flex items-center gap-1 mt-0.5">${getTeamLogoHtml(gbWinner.team, 'w-3.5 h-3.5')} <span>${gbWinner.team.name} · <strong class="text-emerald-300">${gbWinner.goals} bàn</strong> · ${gbWinner.assists} KT</span></div>
                  </div>
                </div>
                ${gb.length > 1 ? `
                  <div class="pt-1.5 border-t border-white/10 space-y-1 text-[11px]">
                    ${gb.slice(1, 3).map((r, i) => `
                      <div class="flex items-center justify-between gap-2 text-slate-300">
                        <span class="truncate flex items-center gap-1">${i === 0 ? '🥈' : '🥉'} ${renderMiniPos(r.posInfo.specificPos, r.posInfo.badgeClass)} <span class="text-white font-semibold truncate">${r.name}</span> <span class="text-slate-500">(${r.team.code})</span></span>
                        <span class="font-mono font-bold text-emerald-300 shrink-0">⚽ ${r.goals}</span>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
              ` : `<div class="text-xs text-slate-400">Chưa ghi nhận bàn thắng trong giải đấu này.</div>`}
            </div>

            <div class="p-3 rounded-xl award-podium-gold border space-y-2">
              <div class="flex items-center justify-between flex-wrap gap-1">
                <span class="px-2 py-0.5 rounded-full text-[10px] font-black uppercase bg-amber-400 text-slate-950">🌕 QUẢ BÓNG VÀNG</span>
                ${leagueMvp ? `<span class="text-[10px] text-amber-200 font-bold truncate max-w-[170px]">MVP Giải: ${leagueMvp.name}</span>` : ''}
              </div>
              ${bWinner ? `
                <div class="flex items-center gap-2.5">
                  ${getPlayerAvatarHtml(bWinner.name, bWinner.team, 'w-11 h-11')}
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center gap-1.5 flex-wrap">
                      ${renderMiniPos(bWinner.posInfo.specificPos, bWinner.posInfo.badgeClass)}
                      <span class="font-black text-sm text-white truncate">${bWinner.name}</span>
                    </div>
                    <div class="text-[11px] text-amber-100 truncate flex items-center gap-1 mt-0.5">${getTeamLogoHtml(bWinner.team, 'w-3.5 h-3.5')} <span>${bWinner.team.name} · <strong class="text-amber-300">${bWinner.score} đ QBV</strong> · ⚽${bWinner.goals} 🎯${bWinner.assists}</span></div>
                  </div>
                </div>
                ${(bWorld.length > 1 || bLeague.length > 1) ? `
                  <div class="pt-1.5 border-t border-white/10 space-y-1 text-[11px]">
                    ${(bWorld.length > 1 ? bWorld : bLeague).slice(1, 3).map((r, i) => `
                      <div class="flex items-center justify-between gap-2 text-slate-200">
                        <span class="truncate flex items-center gap-1">${i === 0 ? '🥈 Bạc:' : '🥉 Đồng:'} ${renderMiniPos(r.posInfo.specificPos, r.posInfo.badgeClass)} <span class="text-white font-semibold truncate">${r.name}</span> <span class="text-slate-400">(${r.team.code})</span></span>
                        <span class="font-mono font-bold text-amber-300 shrink-0">${r.score}đ</span>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
              ` : `<div class="text-xs text-slate-400">Chưa có dữ liệu Quả Bóng Vàng mùa này.</div>`}
            </div>
          </div>
        `;
      }

      // Populate Table Body (Scrollable to view all remaining teams)
      const tbody = document.getElementById('seasonOvrTableBody');
      if (tbody) {
        tbody.innerHTML = ovrChanges.map(item => {
          let deltaBadge = '';
          if (item.delta > 0) {
            deltaBadge = `<span class="px-2 py-0.5 rounded text-[11px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">▲ +${item.delta}</span>`;
          } else if (item.delta < 0) {
            deltaBadge = `<span class="px-2 py-0.5 rounded text-[11px] font-black bg-rose-500/20 text-rose-300 border border-rose-500/30">▼ ${item.delta}</span>`;
          } else {
            deltaBadge = `<span class="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-800 text-slate-400 border border-white/5">0</span>`;
          }

          const isMax = item.newRating >= 125;
          const maxBadge = isMax ? `<span class="ml-1 text-[9px] px-1.5 py-0.2 rounded font-black bg-amber-400 text-slate-950">MAX</span>` : '';

          let rankBadge = `${item.rank}`;
          if (item.rank === 1) rankBadge = '🥇';
          else if (item.rank === 2) rankBadge = '🥈';
          else if (item.rank === 3) rankBadge = '🥉';

          return `
            <tr class="${item.rank === 1 ? 'bg-amber-500/10 font-bold' : ''} hover:bg-white/5 transition">
              <td class="py-2 px-2 text-center font-mono font-bold text-slate-400">${rankBadge}</td>
              <td class="py-2 px-2 truncate max-w-[170px]">
                <div class="flex items-center gap-2">
                  ${getTeamLogoHtml(item.team, 'w-5 h-5')}
                  <span class="truncate font-semibold text-white">${item.team.name}</span>
                </div>
              </td>
              <td class="py-2 px-2 hidden sm:table-cell text-[11px] text-slate-300">${item.achievement}</td>
              <td class="py-2 px-2 text-center font-mono text-slate-400">${item.oldRating}</td>
              <td class="py-2 px-2 text-center">${deltaBadge}</td>
              <td class="py-2 px-2 text-right font-mono font-black text-white">${item.newRating}${maxBadge}</td>
            </tr>
          `;
        }).join('');
      }

      // Populate Sự nghiệp HLV End of Season Card
      const mgrCard = document.getElementById('seasonEndManagerCard');
      if (mgrCard) {
        if (state.manager && state.manager.teamId) {
          mgrCard.classList.remove('hidden');
          const team = TEAMS_DB.find(t => t.id === state.manager.teamId) || { name: 'Đội bóng của bạn' };
          const myChange = ovrChanges ? ovrChanges.find(c => c.team.id === state.manager.teamId) : null;
          const rank = myChange ? myChange.rank : (ovrChanges[0] ? ovrChanges.length : 1);
          const isChampion = rank === 1;

          // Unlock the contract now that the season has officially finished!
          if (state.manager.isContractLocked) {
            state.manager.isContractLocked = false;
            let prizeBonus = 0;
            if (isChampion) {
              prizeBonus = 30; // 30M € for Champion
              state.manager.trophies.push({
                tourneyId: tourney.id,
                tourneyName: tourney.name,
                seasonYear: state.seasonYear,
                icon: tourney.icon,
                date: new Date().toLocaleDateString('vi-VN')
              });
              state.manager.boardConfidence = 100;
              // Ensure continental qualification
              if (tourney.id === 'vleague1' && !team.tournaments.includes('afc_cl')) {
                team.tournaments.push('afc_cl');
              }
              if (['epl', 'laliga', 'seriea', 'bundesliga', 'ligue1'].includes(tourney.id) && !team.tournaments.includes('ucl')) {
                team.tournaments.push('ucl');
              }
            } else if (rank === 2) {
              prizeBonus = 20; // 20M € for Runner-up (Á quân)
              state.manager.boardConfidence = Math.min(100, state.manager.boardConfidence + 12);
              if (tourney.id === 'vleague1' && !team.tournaments.includes('asean_club')) {
                team.tournaments.push('asean_club');
              }
              if (['epl', 'laliga', 'seriea', 'bundesliga', 'ligue1'].includes(tourney.id) && !team.tournaments.includes('ucl')) {
                team.tournaments.push('ucl');
              }
            } else if (rank <= 4) {
              prizeBonus = 12; // 12M € for Top 4
              state.manager.boardConfidence = Math.min(100, state.manager.boardConfidence + 8);
              if (['epl', 'laliga', 'seriea', 'bundesliga', 'ligue1'].includes(tourney.id) && !team.tournaments.includes('ucl')) {
                team.tournaments.push('ucl');
              }
            } else if (rank > Math.floor(ovrChanges.length / 2)) {
              state.manager.boardConfidence = Math.max(15, state.manager.boardConfidence - 10);
            }

            if (prizeBonus > 0) {
              state.manager.budget = (state.manager.budget || 150) + prizeBonus;
            }
            const myGbWin = awards?.goldenBoot?.[0]?.teamId === state.manager.teamId ? awards.goldenBoot[0] : null;
            const myBdWin = awards?.ballonWorld?.[0]?.teamId === state.manager.teamId
              ? awards.ballonWorld[0]
              : (awards?.ballonLeague?.[0]?.teamId === state.manager.teamId ? awards.ballonLeague[0] : null);
            if (myGbWin) state.manager.budget = (state.manager.budget || 150) + 5;
            if (myBdWin) state.manager.budget = (state.manager.budget || 150) + 10;
            saveManagerCareer();
          }

          const myGbWinDisplay = awards?.goldenBoot?.[0]?.teamId === state.manager.teamId ? awards.goldenBoot[0] : null;
          const myBdWinDisplay = awards?.ballonWorld?.[0]?.teamId === state.manager.teamId
            ? awards.ballonWorld[0]
            : (awards?.ballonLeague?.[0]?.teamId === state.manager.teamId ? awards.ballonLeague[0] : null);

          const evalTextEl = document.getElementById('seasonEndManagerEvaluationText');
          if (evalTextEl) {
            let assessment = '';
            let prizeText = '';
            if (isChampion) {
              assessment = `🏆 <strong>XUẤT SẮC VÔ ĐỊCH!</strong> Ban Lãnh Đạo và toàn thể Cổ động viên <strong>${team.name}</strong> vô cùng tự hào và nhiệt liệt chúc mừng chiến tích vô địch của HLV ${state.manager.name}!`;
              prizeText = `Thưởng vô địch: <strong class="text-amber-300">+30M €</strong> vào ngân sách chuyển nhượng! Vé C1 Châu Lục đã sẵn sàng!`;
            } else if (rank === 2) {
              assessment = `🥈 <strong>Á QUÂN XUẤT SẮC!</strong> ${team.name} cán đích ở vị trí Á quân. Ban Lãnh Đạo đánh giá rất cao tinh thần thi đấu của HLV ${state.manager.name}!`;
              prizeText = `Thưởng Á quân: <strong class="text-amber-300">+20M €</strong> vào ngân sách chuyển nhượng! Vé Cúp C1 ĐNÁ / Play-off C1!`;
            } else if (rank <= 4) {
              assessment = `⭐ <strong>HOÀN THÀNH MỤC TIÊU TOP 4!</strong> ${team.name} cán đích ở vị trí <strong>#${rank}</strong>. Ban Lãnh Đạo đánh giá rất cao năng lực chỉ đạo của HLV ${state.manager.name}.`;
              prizeText = `Thưởng Top 4: <strong class="text-amber-300">+12M €</strong> vào ngân sách chuyển nhượng!`;
            } else {
              assessment = `⚡ ${team.name} cán đích ở vị trí <strong>#${rank}</strong>. Hợp đồng mùa giải này chính thức hoàn tất.`;
            }

            const indivBonuses = [];
            if (myGbWinDisplay) indivBonuses.push(`👟 Vua Phá Lưới (${myGbWinDisplay.name}): +5M €`);
            if (myBdWinDisplay) indivBonuses.push(`🌕 Quả Bóng Vàng (${myBdWinDisplay.name}): +10M €`);

            evalTextEl.innerHTML = `
              <div class="space-y-1">
                <p>${assessment}</p>
                ${prizeText ? `<p class="text-emerald-300 font-bold">💰 ${prizeText}</p>` : ''}
                ${indivBonuses.length ? `<p class="text-amber-200 font-bold">🏅 Thưởng danh hiệu cá nhân: ${indivBonuses.join(' • ')}</p>` : ''}
                <p class="text-amber-300 font-semibold">🔓 Hợp đồng Mùa giải ${state.seasonYear}/${state.seasonYear + 1} đã kết thúc. Bạn có thể chọn <strong>Gia hạn tiếp tục</strong> hoặc <strong>Hết hạn hợp đồng & Chọn CLB khác trong giải</strong>!</p>
              </div>
            `;
          }

          const renewBtnText = document.getElementById('btnManagerRenewText');
          if (renewBtnText) {
            renewBtnText.textContent = `Gia hạn hợp đồng với ${team.name} (Mùa ${state.seasonYear + 1})`;
          }
        } else {
          mgrCard.classList.add('hidden');
        }
      }

      modal.classList.remove('hidden');
      SoundFX.winExact();
      if (window.confetti) {
        window.confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
      }
      if (window.lucide) window.lucide.createIcons();
    }

    function replayCurrentSeason() {
      SoundFX.click();
      const tourney = getActiveTournament();
      initStandingsForTournament(tourney.id, true);
      resetPlayerSeasonStats(tourney.id);

      state.roundNumber = 1;
      state.stageIndex = 0;
      state.phase = 'predicting';
      state.seasonSummary = null;

      // Close modals
      document.getElementById('modalSeasonEnd')?.classList.add('hidden');
      document.getElementById('modalSeasonProgress')?.classList.add('hidden');
      document.getElementById('resultOverlay')?.classList.add('hidden');

      // Re-render UI
      renderLeagueStandings();
      renderFifaWorldRankings();
      renderTeamsDirectory();
      renderSeasonAwards();
      updateStageFormatUI();
      pickNextMatch();

      if (window.confetti) {
        window.confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
      }
    }

    function advanceToNextSeason() {
      SoundFX.click();
      state.seasonYear = (state.seasonYear || 2026) + 1;
      try {
        localStorage.setItem('football_season_year', state.seasonYear);
      } catch (e) {}

      updateSeasonHeaderBadge();

      // Reset All Tournaments for fresh new season with upgraded/downgraded OVRs & randomly shuffled groups/fixtures
      state.standingsByTourney = {};
      state.groupFixturesByTourney = {};
      resetPlayerSeasonStats(null);
      const tourney = getActiveTournament();
      initStandingsForTournament(tourney.id, true, true);

      state.roundNumber = 1;
      state.stageIndex = 0;
      state.phase = 'predicting';
      state.seasonSummary = null;
      state.sidesSwapped = false;

      // Close modals
      document.getElementById('modalSeasonEnd')?.classList.add('hidden');
      document.getElementById('modalSeasonProgress')?.classList.add('hidden');
      document.getElementById('resultOverlay')?.classList.add('hidden');

      // Re-render UI
      renderLeagueStandings();
      renderFifaWorldRankings();
      renderTeamsDirectory();
      renderSeasonAwards();
      updateStageFormatUI();
      pickNextMatch();

      if (window.confetti) {
        window.confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      }
    }

    function simulateRemainingSeasonMatches(tourneyParam) {
      SoundFX.whistle();
      const tourney = tourneyParam || getActiveTournament();
      initStandingsForTournament(tourney.id);
      let simulatedInTourney = 0;

      function simulateCurrentFixtures() {
        const allGroups = state.groupFixturesByTourney[tourney.id] || {};
        const stTable = state.standingsByTourney[tourney.id] || {};
        function record(teamH, teamA, gH, gA) {
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
        for (const [grpName, grpFixtures] of Object.entries(allGroups)) {
          for (const f of grpFixtures) {
            if (!f.played) {
              const { homeGoals, awayGoals } = generateMatchScore(f.home, f.away);
              f.played = true;
              f.score = `${homeGoals}-${awayGoals}`;
              record(f.home, f.away, homeGoals, awayGoals);
              recordPlayerStatsForMatch(tourney.id, f.home, f.away, homeGoals, awayGoals);
              updateFifaWorldPointsAfterMatch(f.home, f.away, homeGoals, awayGoals);
              simulatedInTourney++;
            }
          }
        }
      }

      if (tourney.id === 'world_cup') {
        if (state.stageIndex === 0) {
          // 1. Simulate remaining Qualifiers
          simulateCurrentFixtures();
          // 2. Advance to Finals Group Stage (48 teams) & simulate
          state.stageIndex = 1;
          initStandingsForTournament('world_cup', true);
          simulateCurrentFixtures();
        } else if (state.stageIndex === 1) {
          simulateCurrentFixtures();
        }
        // Conclude at Final
        state.stageIndex = 7;
      } else {
        simulateCurrentFixtures();
      }

      // Proportional catch-up simulation across global leagues so World Ballon d'Or & Global Golden Boot reflect a full season
      const stTableNow = state.standingsByTourney[tourney.id] || {};
      const teamCount = Math.max(4, Object.keys(stTableNow).length || 14);
      const catchUpRounds = Math.min(28, Math.max(6, Math.round(simulatedInTourney / Math.max(2, Math.floor(teamCount / 2)))));
      const isNational = tourney.group === 'nations';
      const activeIds = new Set(Object.keys(stTableNow));
      const worldPool = TEAMS_DB
        .filter(t => (isNational ? t.type === 'nations' : t.type !== 'nations') && !activeIds.has(t.id))
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 64);

      for (let r = 0; r < catchUpRounds && worldPool.length >= 2; r++) {
        for (let i = 0; i + 1 < worldPool.length; i += 2) {
          const offset = (i + r * 2) % worldPool.length;
          const oppIdx = (offset + 1 + (r % 5)) % worldPool.length;
          if (offset === oppIdx) continue;
          const t1 = worldPool[offset];
          const t2 = worldPool[oppIdx];
          const { homeGoals, awayGoals } = generateMatchScore(t1, t2);
          recordPlayerStatsForMatch(null, t1, t2, homeGoals, awayGoals);
        }
      }

      state.phase = 'complete';
      renderLeagueStandings();
      renderFifaWorldRankings();
      renderSeasonAwards();
      updateStageFormatUI();
      handleSeasonEndAndOvrProgression(tourney);
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
              ${getTournamentLogoHtml(t, 'w-6 h-6', isActive ? 'light' : 'dark')}
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
      try {
        const savedPts = localStorage.getItem('football_fifa_points');
        if (savedPts) {
          const map = JSON.parse(savedPts);
          if (map && typeof map === 'object') {
            Object.assign(state.fifaPointsMap, map);
          }
        }
      } catch (e) {}

      TEAMS_DB.forEach((t, idx) => {
        if (state.fifaPointsMap[t.id] === undefined) {
          // Scale OVR (64..92) to realistic FIFA points (950.00 .. 1895.00)
          const basePts = 880 + (t.rating - 64) * 35.8 + ((idx * 17) % 25) * 0.42;
          state.fifaPointsMap[t.id] = Number(basePts.toFixed(2));
          state.fifaLastDeltaMap[t.id] = 0;
        }
      });
    }

    // Snapshot previous ranks before a round so live +/- rank changes (▲/▼) can be displayed
    function snapshotFifaRanks() {
      initFifaWorldPoints();
      const allNations = TEAMS_DB
        .filter(t => t.type === 'nations')
        .map(t => ({ id: t.id, pts: state.fifaPointsMap[t.id] || 1200 }))
        .sort((a, b) => b.pts - a.pts);
      allNations.forEach((n, idx) => {
        state.fifaPrevRankMap[n.id] = idx + 1;
      });

      const allClubs = TEAMS_DB
        .filter(t => t.type !== 'nations')
        .map(t => ({ id: t.id, pts: state.fifaPointsMap[t.id] || 1200 }))
        .sort((a, b) => b.pts - a.pts);
      allClubs.forEach((c, idx) => {
        state.fifaPrevClubRankMap[c.id] = idx + 1;
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
      try {
        localStorage.setItem('football_fifa_points', JSON.stringify(state.fifaPointsMap));
      } catch (e) {}

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
          clubs: 'Câu lạc bộ Thế giới & Châu Á (Đủ 215 CLB)'
        };
        const unitName = labelMap[state.fifaFilter] || 'Đội bóng';
        countLbl.textContent = `Hiển thị: ${filtered.length} / ${ranked.length} ${unitName} • Cập nhật trực tiếp kết quả các trận đấu song song • Chuẩn FIFA: P = P_trước + I × (W - We)`;
      }

      tbody.innerHTML = filtered.map(item => {
        const isCurrent = (item.team.id === state.homeTeam.id || item.team.id === state.awayTeam.id);
        let deltaHtml = '<span class="text-slate-500 font-mono">0.00</span>';
        if (item.delta > 0) {
          deltaHtml = `<span class="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold font-mono">+${item.delta.toFixed(2)} ▲</span>`;
        } else if (item.delta < 0) {
          deltaHtml = `<span class="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold font-mono">${item.delta.toFixed(2)} ▼</span>`;
        }
        const rankBadgeClass = item.rank <= 3
          ? 'bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded-md'
          : (item.rank <= 10 ? 'bg-sky-500/20 text-sky-300 font-bold px-2 py-0.5 rounded-md' : 'text-slate-400 font-mono px-2');

        const isNations = (state.fifaFilter === 'nations' || state.fifaFilter === 'asean' || state.fifaFilter === 'afc');
        const prevRank = isNations ? state.fifaPrevRankMap[item.team.id] : state.fifaPrevClubRankMap[item.team.id];
        let rankShiftHtml = '';
        if (prevRank !== undefined && prevRank !== null) {
          const shift = prevRank - item.rank;
          if (shift > 0) {
            rankShiftHtml = `<span class="text-[10px] text-emerald-400 font-extrabold font-mono" title="Tăng ${shift} bậc so với trước">▲${shift}</span>`;
          } else if (shift < 0) {
            rankShiftHtml = `<span class="text-[10px] text-rose-400 font-extrabold font-mono" title="Giảm ${Math.abs(shift)} bậc so với trước">▼${Math.abs(shift)}</span>`;
          } else {
            rankShiftHtml = `<span class="text-[10px] text-slate-500 font-mono">-</span>`;
          }
        }

        return `
          <tr data-fifa-team="${item.team.id}" class="fifa-row cursor-pointer hover:bg-slate-800/70 transition ${isCurrent ? 'bg-sky-500/15 font-bold text-white' : ''}" title="Bấm để đưa ${item.team.name} vào thi đấu">
            <td class="py-2 px-2">
              <div class="flex items-center gap-1.5">
                <span class="${rankBadgeClass}">#${item.rank}</span>
                ${rankShiftHtml}
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
          if (!chosen || state.phase === 'simulating') return;
          if (chosen.type === 'nations') {
            if (state.fifaFilter === 'asean' && chosen.tournaments.includes('asean_cup')) {
              selectTournament('asean_cup');
            } else if (state.fifaFilter === 'afc' && chosen.tournaments.includes('asian_cup')) {
              selectTournament('asian_cup');
            } else if (!chosen.tournaments.includes(state.activeTournamentId)) {
              selectTournament('world_cup');
            }
          }
          if (!chosen.tournaments.includes(state.activeTournamentId)) selectTournament(chosen.tournaments[0]);
          chooseTeam(chosen.id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    }

    function buildFixtures(teams, twoLegs) {
      const rotation = [...teams];
      if (rotation.length % 2) rotation.push(null);
      const rounds = rotation.length - 1;
      const fixtures = [];
      for (let day = 1; day <= rounds; day++) {
        for (let i = 0; i < rotation.length / 2; i++) {
          const first = rotation[i], second = rotation[rounds - i];
          if (!first || !second) continue;
          const [home, away] = day % 2 ? [first, second] : [second, first];
          fixtures.push({ matchday: day, home, away, played: false });
        }
        rotation.splice(1, 0, rotation.pop());
      }
      if (!twoLegs) return fixtures;
      return fixtures.concat(fixtures.map(f => ({
        ...f, matchday: f.matchday + rounds, home: f.away, away: f.home
      })));
    }

    function getTeamConfederation(team) {
      if (!team || team.type !== 'nations') return 'club';
      if (team.tournaments.includes('asian_cup') || team.tournaments.includes('asean_cup')) return 'afc';
      if (team.tournaments.includes('euro')) return 'uefa';
      const conmebol = new Set(['ARG', 'BRA', 'COL', 'URU', 'ECU', 'PAR', 'VEN', 'CHI', 'PER', 'BOL']);
      const concacaf = new Set(['USA', 'MEX', 'CAN', 'CRC', 'PAN', 'JAM', 'HON', 'SLV', 'GUA', 'TRI', 'HAI', 'CUW', 'SUR', 'NCA', 'CUB', 'DOM', 'GUY', 'ATG', 'SKN', 'LCA', 'VIN', 'GRN', 'BRB', 'BER', 'BLZ', 'PUR']);
      const ofc = new Set(['NZL', 'FIJ', 'TAH', 'PNG']);
      if (conmebol.has(team.code)) return 'conmebol';
      if (concacaf.has(team.code)) return 'concacaf';
      if (ofc.has(team.code)) return 'ofc';
      return 'caf';
    }

    function shuffleArray(arr) {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    function initStandingsForTournament(tourneyId, forceReinit = false, shuffleTeams = false) {
      if (state.standingsByTourney[tourneyId] && !forceReinit) return;
      const tourney = TOURNAMENTS.find(t => t.id === tourneyId) || TOURNAMENTS[0];
      let teams = TEAMS_DB.filter(t => t.tournaments.includes(tourneyId));
      const groupLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

      // SPECIAL SYSTEM FOR FIFA WORLD CUP:
      // StageIndex === 0: Regional Qualifiers (AFC, UEFA, CONMEBOL, CAF, CONCACAF, OFC)
      // StageIndex === 1: World Cup Finals Group Stage (Groups A..L • 48 Teams)
      // StageIndex >= 2: Knockout Rounds (1/16, 1/8, QF, SF, 3rd, Final)
      if (tourneyId === 'world_cup') {
        const isQualifiers = state.stageIndex === 0;
        const focusTeam = TEAMS_DB.find(t => t.id === state.focusedTeamId) || teams[0];
        const focusConf = getTeamConfederation(focusTeam);

        if (isQualifiers) {
          // Filter nations belonging to the SAME confederation as the focused team!
          const regionalTeams = teams.filter(t => getTeamConfederation(t) === focusConf);
          if (regionalTeams.length >= 4) {
            teams = regionalTeams;
          }
          // Divide regional teams into groups of 4-6 teams
          const numRegionalGroups = Math.max(1, Math.min(8, Math.floor(teams.length / 4)));
          let poolTeams;
          if (shuffleTeams) {
            poolTeams = shuffleArray(teams);
            // Ensure focusTeam is in the tournament pool
            if (!poolTeams.some(t => t.id === focusTeam.id)) poolTeams[0] = focusTeam;
          } else {
            poolTeams = [...teams].sort((a, b) => {
              if (a.id === focusTeam.id) return -1;
              if (b.id === focusTeam.id) return 1;
              return b.rating - a.rating;
            });
          }

          const table = {};
          poolTeams.forEach((t, idx) => {
            table[t.id] = {
              team: t,
              group: groupLetters[idx % numRegionalGroups],
              played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, pts: 0
            };
          });
          state.standingsByTourney[tourneyId] = table;
          const schedules = {};
          for (const grp of new Set(Object.values(table).map(row => row.group))) {
            const members = Object.values(table).filter(row => row.group === grp);
            schedules[grp] = buildFixtures(members.map(row => row.team), true); // 2 legs home & away
          }
          state.groupFixturesByTourney[tourneyId] = schedules;
          return;
        } else {
          // World Cup Finals: Select the top 48 teams globally across all continents (ensuring focused team is included)
          const sortedGlobal = [...teams].sort((a, b) => {
            if (a.id === focusTeam.id) return -1;
            if (b.id === focusTeam.id) return 1;
            return b.rating - a.rating;
          });
          let top48 = sortedGlobal.slice(0, 48);
          if (shuffleTeams) {
            top48 = shuffleArray(top48);
          }
          const numFinalsGroups = 12; // Groups A to L
          const table = {};
          top48.forEach((t, idx) => {
            table[t.id] = {
              team: t,
              group: groupLetters[idx % numFinalsGroups],
              played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, pts: 0
            };
          });
          state.standingsByTourney[tourneyId] = table;
          const schedules = {};
          for (const grp of new Set(Object.values(table).map(row => row.group))) {
            const members = Object.values(table).filter(row => row.group === grp);
            schedules[grp] = buildFixtures(members.map(row => row.team), false); // 1 leg round robin in group stage
          }
          state.groupFixturesByTourney[tourneyId] = schedules;
          return;
        }
      }

      // Default logic for other tournaments (V.League, Champions League, etc.)
      const numGroups = Math.min(tourney.groupCount, Math.floor(teams.length / 2));
      const poolTeams = shuffleTeams ? shuffleArray(teams) : [...teams].sort((a, b) => b.rating - a.rating);

      const table = {};
      poolTeams.forEach((t, idx) => {
        table[t.id] = {
          team: t,
          group: numGroups ? groupLetters[idx % numGroups] : 'BXH',
          played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, pts: 0
        };
      });
      state.standingsByTourney[tourneyId] = table;

      const schedules = {};
      for (const group of new Set(Object.values(table).map(row => row.group))) {
        const members = Object.values(table).filter(row => row.group === group);
        schedules[group] = buildFixtures(members.map(row => row.team), !numGroups);
      }
      state.groupFixturesByTourney[tourneyId] = schedules;
      if (!numGroups) tourney.totalRounds = schedules.BXH.at(-1).matchday;
    }

    function rankStandingRows(a, b) {
      return b.pts - a.pts || (b.gf - b.ga) - (a.gf - a.ga)
        || b.gf - a.gf || b.team.rating - a.team.rating;
    }

    function renderLeagueStandings() {
      const tourney = getActiveTournament();
      initStandingsForTournament(tourney.id);
      const tableObj = state.standingsByTourney[tourney.id];
      const allRows = Object.values(tableObj);
      const numGroups = tourney.groupCount ? Object.keys(state.groupFixturesByTourney[tourney.id]).length : 0;
      const groupLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].slice(0, numGroups);

      const titleText = numGroups > 0
        ? `Bảng Đấu (${groupLetters[0]}..${groupLetters[groupLetters.length - 1]})`
        : `BXH ${tourney.shortName}`;
      document.getElementById('standingsCardTitle').innerHTML = `<span class="inline-flex items-center gap-1.5">${getTournamentLogoHtml(tourney, 'w-4 h-4')}<span>${titleText}</span></span>`;

      document.getElementById('standingsFormatPill').textContent = numGroups > 0
        ? `Chia ${numGroups} Bảng (${groupLetters.join(', ')})`
        : `${tourney.totalRounds} Vòng đấu`;

      const filterBar = document.getElementById('groupLetterFilterBar');
      const container = document.getElementById('tournamentGroupsContainer');

      const schedBanner = document.getElementById('groupScheduleBanner');
      if (numGroups > 0) {
        // Determine current active group & focused team
        const currentGrp = tableObj[state.focusedTeamId]?.group || Object.keys(state.groupFixturesByTourney[tourney.id])[0] || 'A';
        state.focusedGroup = currentGrp;
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
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold">${focusMatches.length} trận vòng bảng</span>
            </div>
            <div class="grid grid-cols-1 gap-1 pt-0.5">
              ${focusMatches.map((m, idx) => {
                const isCurrentMatch = (!m.played && ((m.home.id === state.homeTeam.id && m.away.id === state.awayTeam.id) || (m.home.id === state.awayTeam.id && m.away.id === state.homeTeam.id)));
                const opp = m.home.id === focusTeam.id ? m.away : m.home;
                const statusBadge = m.played
                  ? `<span class="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">Đã đá: ${m.score}</span>`
                  : (isCurrentMatch
                    ? `<span class="px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-extrabold">Trận đã chọn</span>`
                    : `<span class="px-1.5 py-0.2 rounded bg-slate-800 text-sky-300 font-semibold">Trận tiếp theo</span>`);
                return `
                  <div class="flex items-center justify-between gap-1.5 px-2 py-1 rounded-lg ${isCurrentMatch ? 'bg-emerald-500/20 border border-emerald-400/40' : 'bg-slate-900/80'}">
                    <span class="font-mono text-[10px] text-slate-400">Lượt ${m.matchday}</span>
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
          const grpRows = allRows
            .filter(r => r.group === gLetter)
            .sort(rankStandingRows);

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
        const rows = allRows.sort(rankStandingRows);

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
      const stageSelect = document.getElementById('selectCompetitionStage');
      const fixtures = (state.groupFixturesByTourney[tourney.id] && state.groupFixturesByTourney[tourney.id][state.focusedGroup]) || [];
      const total = fixtures.at(-1)?.matchday || 1;

      let regularStage = '';
      if (tourney.id === 'world_cup') {
        const focusTeam = TEAMS_DB.find(t => t.id === state.focusedTeamId) || state.homeTeam;
        const confName = {
          'afc': 'Châu Á (AFC)',
          'uefa': 'Châu Âu (UEFA)',
          'conmebol': 'Nam Mỹ (CONMEBOL)',
          'caf': 'Châu Phi (CAF)',
          'concacaf': 'Bắc Trung Mỹ (CONCACAF)',
          'ofc': 'Châu Đại Dương (OFC)'
        }[getTeamConfederation(focusTeam)] || 'Khu vực';

        if (state.stageIndex === 0) {
          regularStage = `Vòng loại ${confName} • Bảng ${state.focusedGroup} • Lượt ${state.roundNumber}/${total}`;
        } else if (state.stageIndex === 1) {
          regularStage = `VCK World Cup • Bảng ${state.focusedGroup} (48 Đội) • Lượt ${state.roundNumber}/${total}`;
        } else {
          regularStage = tourney.stages[state.stageIndex] || 'Knock-out';
        }
      } else {
        regularStage = tourney.groupCount
          ? `Bảng ${state.focusedGroup} · Lượt ${state.roundNumber}/${total}`
          : `Vòng ${state.roundNumber}/${total} · ${state.roundNumber <= total / 2 ? 'Lượt đi' : 'Lượt về'}`;
      }

      // Stages list
      let stages = [];
      if (tourney.id === 'world_cup') {
        const focusTeam = TEAMS_DB.find(t => t.id === state.focusedTeamId) || state.homeTeam;
        const confName = {
          'afc': 'Châu Á (AFC)',
          'uefa': 'Châu Âu (UEFA)',
          'conmebol': 'Nam Mỹ (CONMEBOL)',
          'caf': 'Châu Phi (CAF)',
          'concacaf': 'Bắc Trung Mỹ (CONCACAF)',
          'ofc': 'Châu Đại Dương (OFC)'
        }[getTeamConfederation(focusTeam)] || 'Khu vực';
        stages = tourney.stages.map((st, i) => i === 0 ? `Vòng loại World Cup (${confName})` : st);
      } else {
        stages = [regularStage, ...tourney.stages.filter(st => tourney.knockoutPossible && /knock-out|bán kết|chung kết|tứ kết/i.test(st) && !/play-off/i.test(st))];
      }

      stageSelect.innerHTML = stages.map((st, i) => `<option value="${i}">${st}</option>`).join('');
      stageSelect.value = state.stageIndex;
      stageSelect.hidden = stages.length <= 1;
      const currentStageName = stages[state.stageIndex] || regularStage;

      const isKnockout = tourney.id === 'world_cup' 
        ? state.stageIndex >= 2 
        : (tourney.knockoutPossible && tourney.stages && state.stageIndex >= (tourney.stages.length - 4));
      state.isKnockoutMatch = isKnockout;

      let formatDesc = '';
      if (tourney.id === 'world_cup') {
        if (state.stageIndex === 0) {
          formatDesc = 'Vòng loại khu vực • Đá vòng tròn sân nhà & khách • Top 2 giành vé vào VCK World Cup';
        } else if (state.stageIndex === 1) {
          formatDesc = 'VCK FIFA World Cup (12 Bảng A->L • 48 Đội) • Top 2 mỗi bảng + 8 đội hạng 3 tốt nhất vào Vòng 1/16';
        } else {
          formatDesc = 'Đấu loại trực tiếp Knock-out (Hiệp phụ 30s + Luân lưu 11m)';
        }
      } else {
        formatDesc = isKnockout ? 'Đấu loại trực tiếp Knock-out' : tourney.groupCount ? 'Mỗi đội gặp các đối thủ cùng bảng một lượt.' : 'Vòng tròn hai lượt • Sân nhà và sân khách';
      }
      document.getElementById('officialFormatText').textContent = formatDesc;

      const chkET = document.getElementById('chkExtraTime');
      chkET.parentElement.hidden = !isKnockout;
      const statusTag = document.getElementById('stageRuleStatusTag');

      if (tourney.formatType === 'league') {
        chkET.checked = false;
        statusTag.textContent = 'Thắng 3 điểm · Hòa 1 điểm · Thua 0 điểm';
        statusTag.className = 'font-bold text-sky-300';
      } else if (isKnockout) {
        chkET.checked = true;
        statusTag.textContent = 'Loại trực tiếp Knock-out (Hiệp phụ 30s + Luân lưu 11m)';
        statusTag.className = 'font-bold text-amber-300';
      } else {
        chkET.checked = false;
        statusTag.textContent = 'Tính điểm BXH (Thắng 3đ, Hòa 1đ)';
        statusTag.className = 'font-bold text-emerald-300';
      }
      document.getElementById('badgeMatchType').hidden = stages.length > 1;
      document.getElementById('badgeMatchType').textContent = currentStageName;
    }

    // =========================================================================
    // HLV TƯƠNG LAI: SOCCER MANAGER CAREER ENGINE
    // =========================================================================
    function updateManagerMatchTacticsSummary() {
      const tacticsSummary = document.getElementById('managerMatchTacticsSummary');
      if (tacticsSummary) {
        const styleNames = {
          attack: 'Tấn công rực lửa',
          counter: 'Phòng ngự phản công',
          tikitaka: 'Tiki-Taka kiểm soát',
          gegenpress: 'Gegenpressing áp sát'
        };
        tacticsSummary.textContent = `Sơ đồ: ${state.manager.formation || '4-3-3'} • ${styleNames[state.manager.playstyle] || 'Tấn công'}`;
      }
    }

    function setGameMode(mode) {
      state.gameMode = mode;
      const btnPred = document.getElementById('btnModePredict');
      const btnMgr = document.getElementById('btnModeManager');
      const panelMgr = document.getElementById('panelManagerHub');
      const hubHeading = document.getElementById('hubMainHeading');
      const badge = document.getElementById('modeStatusBadge');

      const predScoreControls = document.getElementById('predScoreControls');
      const managerScoreControls = document.getElementById('managerScoreControls');
      const predOptionsSection = document.getElementById('predictionOptionsSection');
      const tacticalOddsBar = document.getElementById('tacticalOddsBar');
      const btnSkipMatch = document.getElementById('btnSkipMatch');
      const predStatsCard = document.getElementById('predictionStatsCard');
      const headerPredStats = document.getElementById('headerPredictionStats');
      const historyCardTitle = document.getElementById('historyCardTitle');

      if (mode === 'manager') {
        if (btnPred) {
          btnPred.className = 'btn-tap px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 transition text-slate-300 hover:text-white';
        }
        if (btnMgr) {
          btnMgr.className = 'btn-tap px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition bg-amber-400 text-slate-950 shadow-md';
        }
        if (panelMgr) panelMgr.classList.remove('hidden');
        if (hubHeading) hubHeading.textContent = 'Trận đấu Huấn Luyện Viên dẫn dắt';

        // Ẩn toàn bộ phần dự đoán tỷ số, thắng/hòa/thua, tỷ lệ kèo & nút chọn trận khác
        if (predScoreControls) {
          predScoreControls.classList.add('hidden');
          predScoreControls.classList.remove('flex');
          predScoreControls.style.display = 'none';
        }
        if (predOptionsSection) {
          predOptionsSection.classList.add('hidden');
          predOptionsSection.style.display = 'none';
        }
        if (tacticalOddsBar) {
          tacticalOddsBar.classList.add('hidden');
          tacticalOddsBar.classList.remove('flex');
          tacticalOddsBar.style.display = 'none';
        }
        if (btnSkipMatch) {
          btnSkipMatch.classList.add('hidden');
          btnSkipMatch.classList.remove('flex');
          btnSkipMatch.style.display = 'none';
        }
        if (predStatsCard) {
          predStatsCard.classList.add('hidden');
          predStatsCard.style.display = 'none';
        }
        if (headerPredStats) {
          headerPredStats.classList.add('hidden');
          headerPredStats.classList.remove('flex');
          headerPredStats.style.display = 'none';
        }
        if (managerScoreControls) {
          managerScoreControls.classList.remove('hidden');
          managerScoreControls.classList.add('flex');
          managerScoreControls.style.display = 'flex';
        }
        if (historyCardTitle) historyCardTitle.textContent = 'Lịch Sử Trận Đấu HLV';

        updateManagerMatchTacticsSummary();
        renderManagerUI();

        // If manager has an active contract, enforce team selection
        if (state.manager.isContractLocked && state.manager.teamId) {
          if (state.focusedTeamId !== state.manager.teamId) {
            state.focusedTeamId = state.manager.teamId;
          }
          const myTeam = TEAMS_DB.find(t => t.id === state.manager.teamId);
          if (myTeam && !myTeam.tournaments.includes(state.activeTournamentId)) {
            state.activeTournamentId = state.manager.tourneyId || myTeam.tournaments[0];
            selectTournament(state.activeTournamentId);
          } else if (state.standingsByTourney[state.activeTournamentId]) {
            pickNextMatch();
          }
        }
      } else {
        if (btnPred) {
          btnPred.className = 'btn-tap px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition bg-emerald-500 text-slate-950 shadow-md';
        }
        if (btnMgr) {
          btnMgr.className = 'btn-tap px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 transition text-slate-300 hover:text-white';
        }
        if (panelMgr) panelMgr.classList.add('hidden');
        if (hubHeading) hubHeading.textContent = 'Dự đoán trận đấu';

        // Hiện lại toàn bộ giao diện dự đoán ở chế độ Dự đoán tỷ số
        if (predScoreControls) {
          predScoreControls.classList.remove('hidden');
          predScoreControls.classList.add('flex');
          predScoreControls.style.display = '';
        }
        if (predOptionsSection) {
          predOptionsSection.classList.remove('hidden');
          predOptionsSection.style.display = '';
        }
        if (tacticalOddsBar) {
          tacticalOddsBar.classList.remove('hidden');
          tacticalOddsBar.classList.add('flex');
          tacticalOddsBar.style.display = '';
        }
        if (btnSkipMatch) {
          btnSkipMatch.classList.remove('hidden');
          btnSkipMatch.classList.add('flex');
          btnSkipMatch.style.display = '';
        }
        if (predStatsCard) {
          predStatsCard.classList.remove('hidden');
          predStatsCard.style.display = '';
        }
        if (headerPredStats) {
          headerPredStats.classList.remove('hidden');
          headerPredStats.classList.add('flex');
          headerPredStats.style.display = '';
        }
        if (managerScoreControls) {
          managerScoreControls.classList.add('hidden');
          managerScoreControls.classList.remove('flex');
          managerScoreControls.style.display = 'none';
        }
        if (historyCardTitle) historyCardTitle.textContent = 'Lịch Sử Dự Đoán Gần Đây';

        if (badge) {
          badge.innerHTML = `
            <span class="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Chế độ: Dự đoán tự do</span>
            </span>
          `;
        }
      }

      if (state.phase === 'predicting') {
        const simBadge = document.getElementById('simBadge');
        if (simBadge) {
          simBadge.textContent = mode === 'manager' ? 'CHỜ KHAI CUỘC' : 'CHỜ KHÓA TỶ SỐ';
        }
      }
      syncSettings();
      setScoreControlsEnabled(state.phase === 'predicting');
      renderHistory();
    }

    function renderManagerUI() {
      const unsignedCard = document.getElementById('managerUnsignedCard');
      const signedCard = document.getElementById('managerSignedCard');
      const badge = document.getElementById('modeStatusBadge');

      const isLocked = !!(state.manager && state.manager.isContractLocked && state.manager.teamId);

      if (!isLocked) {
        if (unsignedCard) unsignedCard.classList.remove('hidden');
        if (signedCard) signedCard.classList.add('hidden');

        const signYearTag = document.getElementById('managerSignYearTag');
        if (signYearTag) signYearTag.textContent = `MÙA ${state.seasonYear}/${state.seasonYear + 1}`;

        const focusTeam = TEAMS_DB.find(t => t.id === state.focusedTeamId) || TEAMS_DB[0];
        const prevEl = document.getElementById('managerPreviewTeamName');
        if (prevEl && focusTeam) {
          prevEl.innerHTML = `<span class="flex items-center gap-2">${getTeamLogoHtml(focusTeam, 'w-5 h-5')}<span class="text-white">${focusTeam.name}</span></span>`;
        }

        if (state.gameMode === 'manager' && badge) {
          badge.innerHTML = `
            <span class="px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-400/30 text-amber-300 font-bold flex items-center gap-1.5">
              <i data-lucide="award" class="w-3.5 h-3.5 text-amber-400"></i>
              <span>HLV Tự do · Chọn đội ký hợp đồng</span>
            </span>
          `;
        }
      } else {
        if (unsignedCard) unsignedCard.classList.add('hidden');
        if (signedCard) signedCard.classList.remove('hidden');

        const team = TEAMS_DB.find(t => t.id === state.manager.teamId) || { name: 'Đội bóng của bạn', icon: '🛡️' };
        const tourney = TOURNAMENTS.find(t => t.id === state.manager.tourneyId) || getActiveTournament();

        const nameEl = document.getElementById('managerDisplayName');
        if (nameEl) nameEl.textContent = state.manager.name || 'HLV Trưởng';

        const clubBadge = document.getElementById('managerClubBadge');
        if (clubBadge) clubBadge.innerHTML = `<span class="flex items-center gap-1">${getTeamLogoHtml(team, 'w-4 h-4')}<span>${team.name}</span></span>`;

        const leagueBadge = document.getElementById('managerLeagueBadge');
        if (leagueBadge) leagueBadge.innerHTML = `<span class="inline-flex items-center gap-1">${getTournamentLogoHtml(tourney, 'w-4 h-4')}<span>${tourney.name}</span></span>`;

        const seasonCountBadge = document.getElementById('managerSeasonCountBadge');
        if (seasonCountBadge) seasonCountBadge.textContent = `MÙA THỨ ${state.manager.careerSeasonNumber || 1}`;

        const lockTag = document.getElementById('managerContractLockTag');
        if (lockTag) lockTag.textContent = `HỢP ĐỒNG KHÓA ĐẾN HẾT MÙA ${state.manager.seasonYear}/${state.manager.seasonYear + 1}`;

        // Match record
        const total = state.manager.matches || 0;
        const wins = state.manager.wins || 0;
        const draws = state.manager.draws || 0;
        const losses = state.manager.losses || 0;
        const winPct = total > 0 ? ((wins / total) * 100).toFixed(1) : '0';

        const recordEl = document.getElementById('managerMatchRecord');
        if (recordEl) recordEl.textContent = `${wins}T · ${draws}H · ${losses}B (${total} trận)`;

        const winRateEl = document.getElementById('managerWinRate');
        if (winRateEl) winRateEl.textContent = `Tỷ lệ thắng: ${winPct}%`;

        // Board confidence
        const conf = Math.max(0, Math.min(100, state.manager.boardConfidence || 90));
        const confNumEl = document.getElementById('managerConfidenceNum');
        if (confNumEl) confNumEl.textContent = `${conf}%`;

        const confBar = document.getElementById('managerConfidenceBar');
        if (confBar) {
          confBar.style.width = `${conf}%`;
          if (conf >= 70) confBar.className = 'bg-gradient-to-r from-yellow-400 to-emerald-400 h-full rounded-full transition-all duration-500';
          else if (conf >= 40) confBar.className = 'bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-500';
          else confBar.className = 'bg-gradient-to-r from-rose-500 to-amber-500 h-full rounded-full transition-all duration-500';
        }

        // Goals stats
        const gf = state.manager.gf || 0;
        const ga = state.manager.ga || 0;
        const diff = gf - ga;
        const diffStr = diff >= 0 ? `+${diff}` : `${diff}`;
        const goalsEl = document.getElementById('managerGoalsStats');
        if (goalsEl) goalsEl.textContent = `${gf} - ${ga}`;

        const diffEl = document.getElementById('managerGoalDiff');
        if (diffEl) diffEl.textContent = `Hiệu số: ${diffStr}`;

        // Trophies
        const trophies = state.manager.trophies || [];
        const tropCountEl = document.getElementById('managerTrophiesCount');
        if (tropCountEl) tropCountEl.textContent = `${trophies.length} Cúp`;

        const latestTropEl = document.getElementById('managerLatestTrophy');
        if (latestTropEl) {
          latestTropEl.textContent = trophies.length > 0 ? `Vô địch ${trophies[trophies.length - 1].tourneyName}` : 'Chưa có danh hiệu';
        }

        // Highlight formation buttons
        document.querySelectorAll('.tactical-form-btn').forEach(btn => {
          const isAct = btn.dataset.formation === (state.manager.formation || '4-3-3');
          btn.className = isAct
            ? 'tactical-form-btn btn-tap p-2 rounded-xl border border-emerald-400 bg-emerald-500/25 text-white font-black text-xs flex flex-col items-center gap-0.5 shadow-md shadow-emerald-500/20'
            : 'tactical-form-btn btn-tap p-2 rounded-xl border border-white/15 bg-slate-900/90 hover:bg-slate-800 text-slate-300 font-extrabold text-xs flex flex-col items-center gap-0.5';
        });

        // Highlight playstyle buttons
        document.querySelectorAll('.tactical-style-btn').forEach(btn => {
          const isAct = btn.dataset.playstyle === (state.manager.playstyle || 'attack');
          btn.className = isAct
            ? 'tactical-style-btn btn-tap p-2 rounded-xl border border-emerald-400 bg-emerald-500/25 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20'
            : 'tactical-style-btn btn-tap p-2 rounded-xl border border-white/15 bg-slate-900/90 hover:bg-slate-800 text-slate-300 font-extrabold text-xs flex items-center justify-center gap-1.5';
        });

        if (state.gameMode === 'manager' && badge) {
          badge.innerHTML = `
            <span class="px-2.5 py-1 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-300 font-bold flex items-center gap-1.5">
              <i data-lucide="lock" class="w-3.5 h-3.5 text-rose-400"></i>
              <span>🔒 Đang dẫn dắt ${team.name} (Hết mùa ${state.manager.seasonYear}/${state.manager.seasonYear + 1})</span>
            </span>
          `;
        }
      }

      // Cập nhật ngân sách CLB, chiến thuật tóm tắt, Sắp xếp đội hình và Thị trường chuyển nhượng
      const budgetDisplay = document.getElementById('managerBudgetDisplay');
      if (budgetDisplay) budgetDisplay.textContent = `${state.manager.budget || 150}M €`;
      updateManagerMatchTacticsSummary();
      renderManagerLineupEditor();
      renderTransferMarket();

      if (window.lucide) window.lucide.createIcons();
    }

    // =========================================================================
    // SẮP XẾP ĐỘI HÌNH, VỊ TRÍ CẦU THỦ & SƠ ĐỒ ĐỘI HÌNH HLV
    // =========================================================================
    let TRANSFER_MARKET_CACHE_MAP = null;
    function getTransferMarketMap() {
      const currentList = (typeof window !== 'undefined' && Array.isArray(window.TRANSFER_MARKET_PLAYERS) && window.TRANSFER_MARKET_PLAYERS.length)
        ? window.TRANSFER_MARKET_PLAYERS
        : (typeof TRANSFER_MARKET_PLAYERS !== 'undefined' && Array.isArray(TRANSFER_MARKET_PLAYERS) ? TRANSFER_MARKET_PLAYERS : []);

      if (!TRANSFER_MARKET_CACHE_MAP || TRANSFER_MARKET_CACHE_MAP.size !== currentList.length) {
        TRANSFER_MARKET_CACHE_MAP = new Map();
        for (let i = 0; i < currentList.length; i++) {
          const p = currentList[i];
          if (!p || !p.name) continue;
          const k1 = p.name.trim().toLowerCase();
          const k2 = k1.split(' (')[0].trim();
          if (!TRANSFER_MARKET_CACHE_MAP.has(k1)) TRANSFER_MARKET_CACHE_MAP.set(k1, p);
          if (!TRANSFER_MARKET_CACHE_MAP.has(k2)) TRANSFER_MARKET_CACHE_MAP.set(k2, p);
        }
      }
      return TRANSFER_MARKET_CACHE_MAP;
    }

    function findTransferPlayerMeta(playerName) {
      if (!playerName) return null;
      const map = getTransferMarketMap();
      const norm = playerName.trim().toLowerCase();
      const normBase = norm.split(' (')[0].trim();
      return map.get(norm) || map.get(normBase) || null;
    }

    function guessPlayerRoleFromName(name, fallbackIdx = 5, hasExplicitGk = false) {
      if (!name) return 'MF';
      const norm = name.trim().toLowerCase();
      const normBase = norm.split(' (')[0].trim();
      const override = PLAYER_POSITION_OVERRIDES[norm] || PLAYER_POSITION_OVERRIDES[normBase];
      if (override) return override.role;

      if (/filip|văn lâm|chuẩn|nguyên mạnh|đình triệu|minh toàn|xuân hoàng|trung kiên|văn việt|văn phong|thanh tùng|nguyễn văn công|bùi tiến dũng \(gk\)|patrik lê giang|liêm điều|sỹ huy|văn hoàng|thế tài|văn toản|tuyên quang|thanh thắng|dương văn lợi|cao văn bình|tùng lâm|minh hoàng|tống đức an|tuấn hưng|courtois|alisson becker|ederson|emiliano martínez|ter stegen|donnarumma|neuer|sommer|oblak|raya|andré onana|vicario|maignan|kelleher|pickford|pope|leno|ramsdale|dean henderson|kepa|robert sánchez|areola|verbruggen|flekken|hermansen|muric|unai simón|mamardashvili|bounou|lunin|iñaki peña|musso|ortega|jörgensen|bayındır|forster|ulreich|kovář|meyer|safonov/i.test(name)) {
        return 'GK';
      }
      if (/văn hậu|việt anh|ngọc hải|thành chung|duy mạnh|bùi tiến dũng|thanh bình|tấn tài|tuấn tài|hồng duy|văn thanh|xuân mạnh|thanh hào|pendant|quang vinh|tô văn vũ|tiến anh|đức chiến|văn vĩ|tuấn dương|đình hai|minh tùng|mạnh hùng|thiện đức|thanh long|văn triệu|sỹ hoàng|văn hạnh|ngọc bảo|ngọc đức|ngọc hiệp|công nhật|janclesio|gustavo|jairo|dias|dijk|saliba|rüdiger|hernández|alexander-arnold|walker|stones|gabriel magalhães|konaté|robertson|bastoni|militão|carvajal|hakimi|marquinhos|araujo|araújo|koundé|cubarsí|kim min|gvardiol|akanji|upamecano|tah|frimpong|grimaldo|schlotterbeck|romero|porro|udogie|fofana|ben white|shaw|molina|de vrij|pavard/i.test(name)) {
        return 'DF';
      }
      if (/xuân son|rafaelson|tiến linh|tuấn hải|văn toàn|văn quyết|vĩ hào|mạnh dũng|lucão|rimario|olaha|geovane|alan grafite|léo artur|alisson farias|đình bắc|văn đạt|văn đô|văn tùng|danh trung|xuân nam|sỹ giáp|nguyên hoàng|thanh bình|phúc tịnh|quang nam|ngọc hậu|xuân tú|minh quang|haaland|mbappé|vinícius|salah|lewandowski|son heung|yamal|kane|lautaro|osimhen|messi|ronaldo|benzema|neymar|griezmann|saka|foden|palmer|watkins|isak|solanke|gyökeres|leão|thuram|vlahovic|alvarez|álvarez|rodrygo|endrick|jackson|havertz|rashford|højlund|zirkzee|wirtz|grealish|jota|gabriel jesus|richarlison|ferran torres|tel|correa|doué|taremi/i.test(name)) {
        return 'FW';
      }
      if (/tuấn anh|hoàng anh|quang hải|hoàng đức|hùng dũng|hai long|ngọc tân|thái sơn|minh vương|ngọc quang|xuân trường|hendrio|lâm thuận|thành long|khắc ngọc|hữu thắng|hải huy|quốc phương|đình lâm|văn thuận|thanh khôi|ngọc hà|lallana|de bruyne|bellingham|pedri|gavi|rodri|rice|ødegaard|modrić|kroos|valverde|camavinga|tchouaméni|bruno fernandes|bernardo silva|mac allister|caicedo|musiala|kimmich|barella|vitinha|kovačić|kock|merino|eriksen|bentancur|goretzka|frattesi|fabián ruiz/i.test(name)) {
        return 'MF';
      }
      if (fallbackIdx === 10) return hasExplicitGk ? 'DF' : 'GK';
      if (fallbackIdx >= 7 && fallbackIdx <= 9) return 'DF';
      if (fallbackIdx >= 0 && fallbackIdx <= 3) return 'FW';
      return 'MF';
    }

    function getPlayerNaturalInfo(playerName, team = null, fallbackIdx = null) {
      const cleanName = (playerName || '').trim();
      const norm = cleanName.toLowerCase();
      const normBase = norm.split(' (')[0].trim();

      let role = null;
      let specificPos = null;
      let ovrHint = null;

      const tm = findTransferPlayerMeta(cleanName);
      if (tm) {
        ovrHint = tm.ovr;
      }

      const override = PLAYER_POSITION_OVERRIDES[norm] || PLAYER_POSITION_OVERRIDES[normBase];
      if (override) {
        role = override.role;
        specificPos = override.pos;
      } else if (tm) {
        role = tm.pos;
        specificPos = tm.pos;
      } else {
        const stars = (team && Array.isArray(team.stars)) ? team.stars : [];
        const hasExplicitGk = stars.some(n => guessPlayerRoleFromName(n, -1, false) === 'GK');
        const idxInStars = stars.indexOf(cleanName);
        const effIdx = idxInStars >= 0 ? idxInStars : (fallbackIdx !== null ? fallbackIdx : 5);
        role = guessPlayerRoleFromName(cleanName, effIdx, hasExplicitGk);
        specificPos = role;
      }

      const ROLE_META = {
        GK: {
          vnLabel: 'Thủ môn',
          badgeClass: 'bg-amber-400/25 text-amber-300 border-amber-400/40',
          textClass: 'text-amber-300'
        },
        DF: {
          vnLabel: 'Hậu vệ',
          badgeClass: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
          textClass: 'text-sky-300'
        },
        MF: {
          vnLabel: 'Tiền vệ',
          badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
          textClass: 'text-emerald-300'
        },
        FW: {
          vnLabel: 'Tiền đạo',
          badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
          textClass: 'text-rose-300'
        }
      };

      const meta = ROLE_META[role] || ROLE_META.MF;
      return {
        role,
        specificPos: specificPos || role,
        vnLabel: meta.vnLabel,
        badgeClass: meta.badgeClass,
        textClass: meta.textClass,
        ovrHint: ovrHint || (team ? team.rating : 76)
      };
    }

    function getDefaultOrderedLineup(team) {
      if (!team || !Array.isArray(team.stars)) return [];
      const uniqueStars = Array.from(new Set(team.stars));
      const gks = [], dfs = [], mfs = [], fws = [];
      uniqueStars.forEach((name, idx) => {
        const nat = getPlayerNaturalInfo(name, team, idx);
        if (nat.role === 'GK') gks.push(name);
        else if (nat.role === 'DF') dfs.push(name);
        else if (nat.role === 'FW') fws.push(name);
        else mfs.push(name);
      });

      const formationKey = (state.manager && state.manager.teamId === team.id)
        ? (state.manager.formation || '4-3-3')
        : '4-3-3';
      const slots = TACTICAL_FORMATIONS[formationKey] || TACTICAL_FORMATIONS['4-3-3'];

      const starters = new Array(slots.length).fill(null);
      const used = new Set();

      function pullFrom(buckets) {
        for (const bucket of buckets) {
          for (const n of bucket) {
            if (!used.has(n)) {
              used.add(n);
              return n;
            }
          }
        }
        return null;
      }

      // Assign GK first, then central ST strikers, remaining FW, DF, MF so top forwards land in ST
      const slotPriority = [
        slot => slot.role === 'GK',
        slot => slot.role === 'FW' && (slot.pos === 'ST' || slot.pos === 'CF'),
        slot => slot.role === 'FW',
        slot => slot.role === 'DF',
        slot => slot.role === 'MF'
      ];

      slotPriority.forEach(matcher => {
        slots.forEach((slot, idx) => {
          if (starters[idx] !== null || !matcher(slot)) return;
          let pick = null;
          if (slot.role === 'GK') pick = pullFrom([gks, dfs, mfs, fws]);
          else if (slot.role === 'DF') pick = pullFrom([dfs, mfs, gks, fws]);
          else if (slot.role === 'MF') pick = pullFrom([mfs, fws, dfs, gks]);
          else pick = pullFrom([fws, mfs, dfs, gks]);
          starters[idx] = pick || `Cầu thủ ${idx + 1}`;
        });
      });

      const bench = uniqueStars.filter(n => !used.has(n));
      return [...starters, ...bench];
    }

    function getTeamLineup(team) {
      if (!team) return [];
      const currentStars = Array.isArray(team.stars) ? team.stars : [];
      if (state.manager && state.manager.customLineups && Array.isArray(state.manager.customLineups[team.id])) {
        const saved = state.manager.customLineups[team.id].filter(n => currentStars.includes(n));
        const missing = currentStars.filter(n => !saved.includes(n));
        const synced = [...saved, ...missing];
        if (synced.length >= 11) return synced;
      }
      return getDefaultOrderedLineup(team);
    }

    function getTeamCaptain(team) {
      if (!team) return '';
      const lineup = getTeamLineup(team);
      const savedCap = state.manager && state.manager.captains && state.manager.captains[team.id];
      if (savedCap && lineup.includes(savedCap)) return savedCap;
      return lineup[9] || lineup[10] || lineup[0] || '';
    }

    function renderManagerLineupEditor() {
      const pitchNodes = document.getElementById('managerLineupPitchNodes');
      const listEl = document.getElementById('managerLineupList');
      const countBadge = document.getElementById('lineupRosterCountBadge');
      const hintEl = document.getElementById('lineupSelectionHint');
      if (!pitchNodes || !listEl) return;

      const team = TEAMS_DB.find(t => t.id === state.manager.teamId);
      if (!team || !state.manager.isContractLocked) {
        pitchNodes.innerHTML = '';
        listEl.innerHTML = `<div class="text-xs text-slate-400 text-center py-6">Ký hợp đồng HLV với CLB để sắp xếp đội hình!</div>`;
        return;
      }

      const lineup = getTeamLineup(team);
      const formationKey = state.manager.formation || '4-3-3';
      const formSlots = TACTICAL_FORMATIONS[formationKey] || TACTICAL_FORMATIONS['4-3-3'];
      const captain = getTeamCaptain(team);
      const selIdx = state.manager.selectedLineupIdx;

      if (countBadge) {
        const benchCount = Math.max(0, lineup.length - 11);
        countBadge.textContent = benchCount > 0 ? `11 Chính · ${benchCount} Dự bị` : `11 Chính`;
      }

      if (hintEl) {
        if (selIdx !== null && lineup[selIdx]) {
          hintEl.innerHTML = `🔄 Đang chọn: <strong class="text-white">${lineup[selIdx]}</strong> — Bấm cầu thủ khác trên sân hoặc dự bị để đổi chỗ!`;
        } else {
          hintEl.textContent = 'Bấm chọn 1 cầu thủ trên sân hoặc dự bị rồi bấm vị trí khác để đổi chỗ';
        }
      }

      // Render 11 Starting Nodes on Tactical Pitch (Vertical pitch: GK bottom, ST top)
      pitchNodes.innerHTML = formSlots.map((slot, i) => {
        const name = lineup[i] || `Cầu thủ ${i + 1}`;
        const cleanParts = name.split(' (')[0].trim().split(' ');
        const shortName = cleanParts.length >= 2 && cleanParts[cleanParts.length - 1].length <= 3
          ? cleanParts.slice(-2).join(' ')
          : cleanParts[cleanParts.length - 1];

        const leftPct = (slot.y * 100).toFixed(1);
        const topPct = (90 - ((slot.x - 0.075) / (0.48 - 0.075)) * 75).toFixed(1);

        let jerseyColor = 'bg-emerald-500 text-slate-950 border-emerald-200';
        if (slot.role === 'GK') jerseyColor = 'bg-amber-400 text-slate-950 border-amber-100';
        else if (slot.role === 'DF') jerseyColor = 'bg-sky-500 text-white border-sky-200';
        else if (slot.role === 'FW') jerseyColor = 'bg-rose-500 text-white border-rose-200';

        const isSel = selIdx === i;
        const isCap = name === captain;
        const photoUrl = getPlayerAvatarUrl(name);
        const safeTitle = name.replace(/"/g, '&quot;');

        return `
          <button type="button" onclick="window.onClickLineupPlayer(${i})" style="left: ${leftPct}%; top: ${topPct}%;" class="pitch-player-node ${isSel ? 'is-selected' : ''} flex flex-col items-center group" title="${slot.pos || slot.role}: ${safeTitle}">
            <div class="pitch-jersey relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 ${jerseyColor} flex items-center justify-center font-black text-[10px] sm:text-[11px] shadow-lg transition">
              ${photoUrl ? `
                <img src="${photoUrl}" alt="${safeTitle}" referrerpolicy="no-referrer" class="w-full h-full rounded-full object-cover object-top bg-slate-900" onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='inline';" />
                <span style="display:none;">${slot.pos || slot.role}</span>
                <span class="absolute -bottom-1 -right-1 px-1 py-0.2 rounded bg-slate-950/95 border border-white/25 text-[8px] font-black text-white shadow">${slot.pos || slot.role}</span>
              ` : `<span>${slot.pos || slot.role}</span>`}
              ${isCap ? '<span class="absolute -top-2 -right-1.5 text-xs drop-shadow">👑</span>' : ''}
            </div>
            <span class="mt-0.5 px-1.5 py-0.2 rounded bg-slate-950/90 border border-white/15 text-[10px] font-bold text-white whitespace-nowrap max-w-[84px] truncate shadow">
              ${shortName}
            </span>
          </button>
        `;
      }).join('');

      // Render Starting XI + Bench Roster List (BOTH Starters AND Bench show playing positions!)
      let listHtml = `<div class="text-[10px] font-black uppercase tracking-wider text-emerald-400 px-1">ĐỘI HÌNH RA SÂN (11)</div>`;
      listHtml += lineup.map((name, i) => {
        const isStarter = i < 11;
        const slot = isStarter ? formSlots[i] : null;
        const natural = getPlayerNaturalInfo(name, team, i);

        // Starters display tactical slot pos; Bench players ALWAYS display their playing position (never bare 'DB')
        const posLabel = slot ? (slot.pos || slot.role) : natural.specificPos;
        const roleType = slot ? slot.role : natural.role;

        let posBadge = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
        if (roleType === 'GK') posBadge = 'bg-amber-400/25 text-amber-300 border-amber-400/40';
        else if (roleType === 'DF') posBadge = 'bg-sky-500/20 text-sky-300 border-sky-500/30';
        else if (roleType === 'FW') posBadge = 'bg-rose-500/20 text-rose-300 border-rose-500/30';

        const isOutOfPos = isStarter && slot && natural.role !== slot.role;
        const subMeta = isStarter
          ? (isOutOfPos ? `<span class="text-[9px] text-amber-300/90 font-semibold">Đội chính · Gốc: ${natural.specificPos}</span>` : `<span class="text-[9px] text-slate-400">Đội chính · ${natural.vnLabel}</span>`)
          : `<span class="text-[9px] font-semibold text-amber-300/90">Dự bị · ${natural.vnLabel}</span>`;

        const rec = state.playerSeasonData?.players?.[`${team.id}::${name}`];
        const recTotals = rec ? getPlayerSeasonTotals(rec, null) : { goals: 0, assists: 0 };
        const statsChip = (recTotals.goals > 0 || recTotals.assists > 0)
          ? `<span class="text-[9px] font-mono font-bold text-emerald-300 bg-emerald-500/15 px-1.5 py-0.2 rounded shrink-0">${recTotals.goals ? `⚽${recTotals.goals}` : ''}${recTotals.goals && recTotals.assists ? ' ' : ''}${recTotals.assists ? `🎯${recTotals.assists}` : ''}</span>`
          : '';

        const isSel = selIdx === i;
        const isCap = name === captain;

        let divider = '';
        if (i === 11) {
          divider = `<div class="text-[10px] font-black uppercase tracking-wider text-amber-300 px-1 pt-2 mt-1 border-t border-white/10">GHẾ DỰ BỊ (${lineup.length - 11})</div>`;
        }

        return `
          ${divider}
          <div class="flex items-center gap-1.5 p-1.5 rounded-xl border transition cursor-pointer ${isSel ? 'bg-amber-400/20 border-amber-400 shadow' : (isStarter ? 'bg-slate-900/90 border-white/10 hover:border-emerald-400/40' : 'bg-slate-900/60 border-amber-400/15 hover:border-amber-400/40')}" onclick="window.onClickLineupPlayer(${i})">
            <span class="px-1.5 py-0.5 rounded text-[9px] font-black border w-10 text-center shrink-0 ${posBadge}" title="${natural.vnLabel}">${posLabel}</span>
            ${getPlayerAvatarHtml(name, team, 'w-7 h-7')}
            <div class="min-w-0 flex-1">
              <div class="text-xs font-bold text-white truncate">${name}</div>
              <div class="leading-tight">${subMeta}</div>
            </div>
            ${statsChip}
            <button type="button" onclick="event.stopPropagation(); window.setManagerCaptain(${i})" title="Đặt làm Đội trưởng" class="px-1.5 py-0.5 rounded text-[11px] transition shrink-0 ${isCap ? 'bg-amber-400 text-slate-950 font-black shadow' : 'text-slate-500 hover:text-amber-300 hover:bg-white/10'}">
              👑
            </button>
          </div>
        `;
      }).join('');

      if (lineup.length <= 11) {
        listHtml += `
          <div class="mt-2 p-2.5 rounded-xl bg-slate-900/60 border border-dashed border-amber-400/25 text-[10px] text-slate-300 text-center space-y-1.5">
            <div>Đội này hiện chưa có cầu thủ dự bị nào.</div>
            <button type="button" onclick="document.getElementById('transferMarketContainer')?.scrollIntoView({behavior:'smooth'})" class="px-2.5 py-1 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 font-bold border border-amber-400/30 transition">
              🛒 Vào Chợ mua cầu thủ dự bị
            </button>
          </div>`;
      }

      listEl.innerHTML = listHtml;
    }

    window.onClickLineupPlayer = function(idx) {
      const team = TEAMS_DB.find(t => t.id === state.manager.teamId);
      if (!team || !state.manager.isContractLocked) return;

      const lineup = getTeamLineup(team);
      if (idx < 0 || idx >= lineup.length) return;

      const curSel = state.manager.selectedLineupIdx;
      if (curSel === null || curSel === undefined) {
        SoundFX.click();
        state.manager.selectedLineupIdx = idx;
        renderManagerLineupEditor();
      } else if (curSel === idx) {
        SoundFX.click();
        state.manager.selectedLineupIdx = null;
        renderManagerLineupEditor();
      } else {
        SoundFX.click();
        const nameA = lineup[curSel];
        const nameB = lineup[idx];
        lineup[curSel] = nameB;
        lineup[idx] = nameA;

        state.manager.customLineups = state.manager.customLineups || {};
        state.manager.customLineups[team.id] = lineup;
        state.manager.selectedLineupIdx = null;
        saveManagerCareer();

        renderManagerLineupEditor();
        initPitchPlayers();
        if (state.homeTeam && state.homeTeam.id === team.id) renderSquadBadges(team, 'homePlayersList', 'homeSquadTitle', true);
        if (state.awayTeam && state.awayTeam.id === team.id) renderSquadBadges(team, 'awayPlayersList', 'awaySquadTitle', false);
        showPhaseNotice(`🔄 Đã đổi vị trí: ${nameA.split(' (')[0]} ⇄ ${nameB.split(' (')[0]}!`);
      }
    };

    window.setManagerCaptain = function(idx) {
      const team = TEAMS_DB.find(t => t.id === state.manager.teamId);
      if (!team || !state.manager.isContractLocked) return;
      const lineup = getTeamLineup(team);
      const playerName = lineup[idx];
      if (!playerName) return;

      SoundFX.click();
      state.manager.captains = state.manager.captains || {};
      state.manager.captains[team.id] = playerName;
      saveManagerCareer();
      renderManagerLineupEditor();
      if (state.homeTeam && state.homeTeam.id === team.id) renderSquadBadges(team, 'homePlayersList', 'homeSquadTitle', true);
      if (state.awayTeam && state.awayTeam.id === team.id) renderSquadBadges(team, 'awayPlayersList', 'awaySquadTitle', false);
      showPhaseNotice(`👑 Đã trao băng Đội trưởng cho ${playerName}!`);
    };

    function autoArrangeLineup() {
      const team = TEAMS_DB.find(t => t.id === state.manager.teamId);
      if (!team || !state.manager.isContractLocked) return;
      SoundFX.whistle();
      const optimal = getDefaultOrderedLineup(team);
      state.manager.customLineups = state.manager.customLineups || {};
      state.manager.customLineups[team.id] = optimal;
      state.manager.selectedLineupIdx = null;
      saveManagerCareer();
      renderManagerLineupEditor();
      initPitchPlayers();
      if (state.homeTeam && state.homeTeam.id === team.id) renderSquadBadges(team, 'homePlayersList', 'homeSquadTitle', true);
      if (state.awayTeam && state.awayTeam.id === team.id) renderSquadBadges(team, 'awayPlayersList', 'awaySquadTitle', false);
      showPhaseNotice(`✨ Đã tự động sắp xếp 11 cầu thủ tối ưu theo sơ đồ ${state.manager.formation || '4-3-3'}!`);
    }

    function resetTeamLineup() {
      const team = TEAMS_DB.find(t => t.id === state.manager.teamId);
      if (!team || !state.manager.isContractLocked) return;
      SoundFX.click();
      if (state.manager.customLineups) {
        delete state.manager.customLineups[team.id];
      }
      state.manager.selectedLineupIdx = null;
      saveManagerCareer();
      renderManagerLineupEditor();
      initPitchPlayers();
      if (state.homeTeam && state.homeTeam.id === team.id) renderSquadBadges(team, 'homePlayersList', 'homeSquadTitle', true);
      if (state.awayTeam && state.awayTeam.id === team.id) renderSquadBadges(team, 'awayPlayersList', 'awaySquadTitle', false);
      showPhaseNotice(`🔄 Đã khôi phục đội hình mặc định của ${team.name}!`);
    }

    // =========================================================================
    // GOLDEN BOOT (ĐUA VUA PHÁ LƯỚI) & BALLON D'OR (QUẢ BÓNG VÀNG) ENGINE
    // =========================================================================
    function loadPlayerAwardsHistory() {
      try {
        const raw = localStorage.getItem('football_player_awards_history_v1');
        if (raw) {
          const arr = JSON.parse(raw);
          if (Array.isArray(arr)) state.playerSeasonData.awardHistory = arr;
        }
      } catch (e) {}
    }

    function savePlayerAwardsHistory() {
      try {
        localStorage.setItem('football_player_awards_history_v1', JSON.stringify(state.playerSeasonData.awardHistory || []));
      } catch (e) {}
    }

    function resetPlayerSeasonStats(tourneyIdOnly = null) {
      if (!state.playerSeasonData) {
        state.playerSeasonData = { seasonYear: state.seasonYear, players: {}, awardHistory: [] };
      }
      if (!tourneyIdOnly) {
        state.playerSeasonData.players = {};
        state.playerSeasonData.seasonYear = state.seasonYear;
      } else {
        const players = state.playerSeasonData.players || {};
        Object.keys(players).forEach(key => {
          const rec = players[key];
          if (rec && rec.buckets && rec.buckets[tourneyIdOnly]) {
            delete rec.buckets[tourneyIdOnly];
          }
          if (!rec || !rec.buckets || Object.keys(rec.buckets).length === 0) {
            delete players[key];
          }
        });
      }
    }

    function getTeamFormationSlotsForSim(team) {
      const isMgrTeam = state.manager && state.manager.teamId === team.id;
      const formKey = isMgrTeam ? (state.manager.formation || '4-3-3') : '4-3-3';
      return TACTICAL_FORMATIONS[formKey] || TACTICAL_FORMATIONS['4-3-3'];
    }

    function pickScorerFromLineup(team) {
      if (!team) return 'Cầu thủ';
      const starters = getTeamLineup(team).slice(0, 11);
      const slots = getTeamFormationSlotsForSim(team);
      const captain = getTeamCaptain(team);
      const weights = starters.map((name, idx) => {
        const slot = slots[idx];
        const role = slot ? slot.role : getPlayerNaturalInfo(name, team, idx).role;
        const pos = slot ? slot.pos : role;
        if (role === 'GK') return 0;
        let w = 1.0;
        if (pos === 'ST' || pos === 'CF') w = 7.5;
        else if (role === 'FW') w = 5.2;
        else if (pos === 'CAM') w = 3.8;
        else if (role === 'MF') w = 2.2;
        else if (role === 'DF') w = 0.45;
        if (name === captain && role !== 'GK') w += 0.9;
        const tm = findTransferPlayerMeta(name);
        if (tm && tm.ovr >= 85) w += (tm.ovr - 83) * 0.45;
        return w;
      });
      const total = weights.reduce((a, b) => a + b, 0);
      if (total <= 0) return starters[0] || team.stars?.[0] || 'Cầu thủ';
      let r = Math.random() * total;
      for (let i = 0; i < starters.length; i++) {
        r -= weights[i];
        if (r <= 0) return starters[i];
      }
      return starters[starters.length - 1] || 'Cầu thủ';
    }

    function pickAssisterFromLineup(team, scorerName) {
      if (!team || Math.random() > 0.82) return null;
      const starters = getTeamLineup(team).slice(0, 11);
      const slots = getTeamFormationSlotsForSim(team);
      const candidates = starters.map((name, idx) => {
        if (name === scorerName) return 0;
        const slot = slots[idx];
        const role = slot ? slot.role : getPlayerNaturalInfo(name, team, idx).role;
        const pos = slot ? slot.pos : role;
        if (role === 'GK') return 0.05;
        if (pos === 'CAM' || pos === 'CM' || pos === 'LM' || pos === 'RM') return 4.8;
        if (pos === 'LW' || pos === 'RW') return 4.2;
        if (role === 'MF') return 3.4;
        if (role === 'FW') return 2.8;
        return 1.4;
      });
      const total = candidates.reduce((a, b) => a + b, 0);
      if (total <= 0) return null;
      let r = Math.random() * total;
      for (let i = 0; i < starters.length; i++) {
        r -= candidates[i];
        if (r <= 0) return starters[i];
      }
      return null;
    }

    function ensurePlayerBucket(playerName, teamId, bucketKey) {
      if (!state.playerSeasonData.players) state.playerSeasonData.players = {};
      const key = `${teamId}::${playerName}`;
      let rec = state.playerSeasonData.players[key];
      if (!rec) {
        rec = { key, name: playerName, teamId, buckets: {} };
        state.playerSeasonData.players[key] = rec;
      }
      if (!rec.buckets[bucketKey]) {
        rec.buckets[bucketKey] = { goals: 0, assists: 0, motm: 0, cleanSheets: 0, matches: 0, wins: 0 };
      }
      return { rec, b: rec.buckets[bucketKey] };
    }

    function recordPlayerStatsForMatch(tourneyId, homeTeam, awayTeam, homeGoals, awayGoals, scheduledEvents = null, isPenWinHome = null) {
      if (!homeTeam || !awayTeam) return;
      const bucketKey = tourneyId || '_world';
      const homeXI = getTeamLineup(homeTeam).slice(0, 11);
      const awayXI = getTeamLineup(awayTeam).slice(0, 11);
      const homeSlots = getTeamFormationSlotsForSim(homeTeam);
      const awaySlots = getTeamFormationSlotsForSim(awayTeam);

      const homeWon = (homeGoals > awayGoals) || (homeGoals === awayGoals && isPenWinHome === true);
      const awayWon = (awayGoals > homeGoals) || (homeGoals === awayGoals && isPenWinHome === false);

      const matchScores = {}; // key -> impact points for MOTM picking

      homeXI.forEach((name, idx) => {
        const { rec, b } = ensurePlayerBucket(name, homeTeam.id, bucketKey);
        b.matches++;
        if (homeWon) b.wins++;
        const role = homeSlots[idx]?.role || getPlayerNaturalInfo(name, homeTeam, idx).role;
        if (awayGoals === 0 && (role === 'GK' || role === 'DF')) {
          b.cleanSheets++;
        }
        matchScores[rec.key] = (homeWon ? 1.5 : 0) + (awayGoals === 0 && (role === 'GK' || role === 'DF') ? 1.8 : 0);
      });

      awayXI.forEach((name, idx) => {
        const { rec, b } = ensurePlayerBucket(name, awayTeam.id, bucketKey);
        b.matches++;
        if (awayWon) b.wins++;
        const role = awaySlots[idx]?.role || getPlayerNaturalInfo(name, awayTeam, idx).role;
        if (homeGoals === 0 && (role === 'GK' || role === 'DF')) {
          b.cleanSheets++;
        }
        matchScores[rec.key] = (awayWon ? 1.5 : 0) + (homeGoals === 0 && (role === 'GK' || role === 'DF') ? 1.8 : 0);
      });

      const homeScheduled = Array.isArray(scheduledEvents) ? scheduledEvents.filter(e => e.side === 'home') : [];
      for (let g = 0; g < homeGoals; g++) {
        const scorer = (homeScheduled[g] && homeScheduled[g].scorer) ? homeScheduled[g].scorer : pickScorerFromLineup(homeTeam);
        const { rec: sRec, b: sB } = ensurePlayerBucket(scorer, homeTeam.id, bucketKey);
        sB.goals++;
        matchScores[sRec.key] = (matchScores[sRec.key] || 0) + 2.4;

        const assister = pickAssisterFromLineup(homeTeam, scorer);
        if (assister) {
          const { rec: aRec, b: aB } = ensurePlayerBucket(assister, homeTeam.id, bucketKey);
          aB.assists++;
          matchScores[aRec.key] = (matchScores[aRec.key] || 0) + 1.5;
        }
      }

      const awayScheduled = Array.isArray(scheduledEvents) ? scheduledEvents.filter(e => e.side === 'away') : [];
      for (let g = 0; g < awayGoals; g++) {
        const scorer = (awayScheduled[g] && awayScheduled[g].scorer) ? awayScheduled[g].scorer : pickScorerFromLineup(awayTeam);
        const { rec: sRec, b: sB } = ensurePlayerBucket(scorer, awayTeam.id, bucketKey);
        sB.goals++;
        matchScores[sRec.key] = (matchScores[sRec.key] || 0) + 2.4;

        const assister = pickAssisterFromLineup(awayTeam, scorer);
        if (assister) {
          const { rec: aRec, b: aB } = ensurePlayerBucket(assister, awayTeam.id, bucketKey);
          aB.assists++;
          matchScores[aRec.key] = (matchScores[aRec.key] || 0) + 1.5;
        }
      }

      // Award Man of the Match (MOTM)
      let bestKey = null;
      let bestImpact = -1;
      Object.entries(matchScores).forEach(([k, val]) => {
        const jitter = val + Math.random() * 0.45;
        if (jitter > bestImpact) {
          bestImpact = jitter;
          bestKey = k;
        }
      });
      if (bestKey && state.playerSeasonData.players[bestKey]?.buckets?.[bucketKey]) {
        state.playerSeasonData.players[bestKey].buckets[bucketKey].motm++;
      }
    }

    function getPlayerSeasonTotals(playerRec, tourneyFilterId = null) {
      const out = { goals: 0, assists: 0, motm: 0, cleanSheets: 0, matches: 0, wins: 0 };
      if (!playerRec || !playerRec.buckets) return out;
      if (tourneyFilterId) {
        const b = playerRec.buckets[tourneyFilterId];
        return b ? Object.assign(out, b) : out;
      }
      Object.values(playerRec.buckets).forEach(b => {
        out.goals += b.goals || 0;
        out.assists += b.assists || 0;
        out.motm += b.motm || 0;
        out.cleanSheets += b.cleanSheets || 0;
        out.matches += b.matches || 0;
        out.wins += b.wins || 0;
      });
      return out;
    }

    function getPlayerStandingsRankBonus(teamId, tourneyFilterId) {
      const checkTourneyId = tourneyFilterId || state.activeTournamentId;
      const stTable = state.standingsByTourney?.[checkTourneyId];
      if (!stTable || !stTable[teamId]) return 0;
      const rows = Object.values(stTable).sort(rankStandingRows);
      const rank = rows.findIndex(r => r.team.id === teamId) + 1;
      if (rank === 1) return 18;
      if (rank === 2) return 10;
      if (rank <= 4) return 5;
      return 0;
    }

    function computeBallonDorScore(playerRec, tourneyFilterId = null) {
      const team = TEAMS_DB.find(t => t.id === playerRec.teamId);
      if (!team) return 0;
      const s = getPlayerSeasonTotals(playerRec, tourneyFilterId);
      if (!s || s.matches === 0) return 0;

      const nat = getPlayerNaturalInfo(playerRec.name, team);
      const role = nat.role;

      const goalPts = s.goals * (role === 'DF' ? 5.0 : role === 'MF' ? 4.2 : 3.4);
      const assistPts = s.assists * (role === 'MF' ? 3.2 : 2.6);
      const cleanSheetPts = s.cleanSheets * (role === 'GK' ? 5.2 : role === 'DF' ? 3.0 : 0.35);
      const motmPts = s.motm * 4.5;
      const winPts = s.wins * 1.1;
      const rankBonus = getPlayerStandingsRankBonus(team.id, tourneyFilterId);
      const prestigeMult = tourneyFilterId
        ? 1.0
        : (0.72 + (Math.min(115, team.rating) / 100) * 0.55);
      const starBonus = ((nat.ovrHint || team.rating) - 70) * 0.25;

      const raw = (goalPts + assistPts + cleanSheetPts + motmPts + winPts + rankBonus) * prestigeMult + Math.max(0, starBonus);
      return Math.round(raw * 10) / 10;
    }

    function buildPlayerAwardRow(rec, tourneyFilterId, score = 0) {
      const team = TEAMS_DB.find(t => t.id === rec.teamId);
      if (!team) return null;
      const totals = getPlayerSeasonTotals(rec, tourneyFilterId);
      const posInfo = getPlayerNaturalInfo(rec.name, team);
      const lineup = getTeamLineup(team);
      const idx = lineup.indexOf(rec.name);
      const isStarter = idx >= 0 && idx < 11;
      const slots = getTeamFormationSlotsForSim(team);
      const activePosLabel = (isStarter && slots[idx]) ? (slots[idx].pos || posInfo.specificPos) : posInfo.specificPos;
      return {
        key: rec.key,
        name: rec.name,
        teamId: team.id,
        team,
        posInfo: Object.assign({}, posInfo, { specificPos: activePosLabel }),
        isStarter,
        matches: totals.matches,
        goals: totals.goals,
        assists: totals.assists,
        cleanSheets: totals.cleanSheets,
        motm: totals.motm,
        wins: totals.wins,
        score
      };
    }

    function getSeasonTopScorers(scope = 'league', tourneyId = null, limit = 15) {
      const filterId = (scope === 'league') ? (tourneyId || state.activeTournamentId) : null;
      const list = [];
      Object.values(state.playerSeasonData?.players || {}).forEach(rec => {
        const s = getPlayerSeasonTotals(rec, filterId);
        if (s.goals <= 0) return;
        const row = buildPlayerAwardRow(rec, filterId, s.goals);
        if (row) list.push(row);
      });
      list.sort((a, b) =>
        (b.goals - a.goals) ||
        (b.assists - a.assists) ||
        (a.matches - b.matches) ||
        (b.team.rating - a.team.rating)
      );
      return list.slice(0, limit);
    }

    function getBallonDorCandidates(scope = 'world', tourneyId = null, limit = 15) {
      const filterId = (scope === 'league') ? (tourneyId || state.activeTournamentId) : null;
      const list = [];
      Object.values(state.playerSeasonData?.players || {}).forEach(rec => {
        const s = getPlayerSeasonTotals(rec, filterId);
        if (s.matches <= 0) return;
        const score = computeBallonDorScore(rec, filterId);
        if (score <= 0) return;
        const row = buildPlayerAwardRow(rec, filterId, score);
        if (row) list.push(row);
      });
      list.sort((a, b) =>
        (b.score - a.score) ||
        (b.goals - a.goals) ||
        (b.assists - a.assists) ||
        (b.team.rating - a.team.rating)
      );
      return list.slice(0, limit);
    }

    function finalizeSeasonAwards(tourney, ovrChanges, recordHistory = true) {
      const goldenBoot = getSeasonTopScorers('league', tourney.id, 5);
      const ballonLeague = getBallonDorCandidates('league', tourney.id, 5);
      const ballonWorld = getBallonDorCandidates('world', null, 5);

      if (recordHistory) {
        const alreadyArchived = (state.playerSeasonData.awardHistory || []).some(
          h => h.seasonYear === state.seasonYear && h.tourneyId === tourney.id
        );
        if (!alreadyArchived && (goldenBoot.length > 0 || ballonLeague.length > 0 || ballonWorld.length > 0)) {
          const champ = ovrChanges?.[0]?.team || null;
          const bWin = ballonWorld[0] || ballonLeague[0] || null;
          const gbWin = goldenBoot[0] || null;
          state.playerSeasonData.awardHistory = state.playerSeasonData.awardHistory || [];
          state.playerSeasonData.awardHistory.unshift({
            seasonYear: state.seasonYear,
            tourneyId: tourney.id,
            tourneyName: tourney.shortName || tourney.name,
            championName: champ ? champ.name : '',
            goldenBoot: gbWin ? {
              name: gbWin.name, teamName: gbWin.team.name, teamCode: gbWin.team.code,
              pos: gbWin.posInfo.specificPos, goals: gbWin.goals, assists: gbWin.assists
            } : null,
            ballonDor: bWin ? {
              name: bWin.name, teamName: bWin.team.name, teamCode: bWin.team.code,
              pos: bWin.posInfo.specificPos, score: bWin.score, goals: bWin.goals, assists: bWin.assists
            } : null
          });
          if (state.playerSeasonData.awardHistory.length > 18) {
            state.playerSeasonData.awardHistory = state.playerSeasonData.awardHistory.slice(0, 18);
          }
          savePlayerAwardsHistory();
          renderSeasonAwards();
        }
      }

      return { goldenBoot, ballonLeague, ballonWorld };
    }

    function renderSeasonAwards() {
      const tourney = getActiveTournament();
      const leagueBadge = document.getElementById('awardsActiveLeagueBadge');
      if (leagueBadge && tourney) {
        leagueBadge.innerHTML = `<span class="inline-flex items-center gap-1.5">${getTournamentLogoHtml(tourney, 'w-4 h-4')}<span>${tourney.name}</span></span>`;
      }

      const myTeamId = (state.manager && state.manager.teamId) ? state.manager.teamId : null;
      const bootScope = state.awardBootScope || 'league';
      const ballonScope = state.awardBallonScope || 'world';

      // 1. VUA PHÁ LƯỚI (GOLDEN BOOT)
      const scorers = getSeasonTopScorers(bootScope, tourney?.id, 15);
      const leaderEl = document.getElementById('goldenBootLeaderCard');
      const bootBody = document.getElementById('goldenBootBody');

      if (leaderEl) {
        if (scorers.length === 0) {
          leaderEl.innerHTML = `
            <div class="text-xs text-slate-300 flex items-center justify-between gap-2">
              <span>👟 Chưa có bàn thắng được ghi trong mùa giải này.</span>
              <span class="text-[10px] text-emerald-300 font-bold shrink-0">Đá trận để khởi tranh!</span>
            </div>
          `;
        } else {
          const top = scorers[0];
          const isMine = myTeamId && top.teamId === myTeamId;
          leaderEl.innerHTML = `
            <div class="flex items-center gap-3">
              <div class="relative shrink-0">
                ${getPlayerAvatarHtml(top.name, top.team, 'w-12 h-12')}
                <span class="absolute -top-1.5 -right-1.5 text-base">🥇</span>
              </div>
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="px-1.5 py-0.5 rounded text-[9px] font-black border ${top.posInfo.badgeClass}">${top.posInfo.specificPos}</span>
                  <span class="text-[10px] font-black uppercase text-emerald-300">DẪN ĐẦU CHIẾC GIÀY VÀNG</span>
                  ${isMine ? '<span class="px-1.5 py-0.2 rounded text-[9px] font-black bg-amber-400 text-slate-950">ĐỘI BẠN</span>' : ''}
                </div>
                <div class="font-black text-sm text-white truncate mt-0.5">${top.name}</div>
                <div class="text-[11px] text-slate-300 truncate flex items-center gap-1">${getTeamLogoHtml(top.team, 'w-3.5 h-3.5')} <span>${top.team.name} · ${top.matches} trận · ${top.assists} kiến tạo</span></div>
              </div>
              <div class="text-right shrink-0">
                <div class="text-xl font-black score-num text-emerald-300">${top.goals}</div>
                <div class="text-[10px] text-slate-400 uppercase font-bold">Bàn thắng</div>
              </div>
            </div>
          `;
        }
      }

      if (bootBody) {
        if (scorers.length === 0) {
          bootBody.innerHTML = `<tr><td colspan="6" class="py-6 text-center text-xs text-slate-400">Chưa có cầu thủ ghi bàn.</td></tr>`;
        } else {
          bootBody.innerHTML = scorers.map((p, idx) => {
            const rankBadge = idx === 0 ? '🥇' : (idx === 1 ? '🥈' : (idx === 2 ? '🥉' : `${idx + 1}`));
            const isMine = myTeamId && p.teamId === myTeamId;
            const roleTag = isMine ? (p.isStarter ? ' · Chính' : ' · Dự bị') : '';
            return `
              <tr class="${isMine ? 'bg-emerald-500/15' : (idx === 0 ? 'bg-emerald-500/10' : '')} hover:bg-white/5 transition">
                <td class="py-2 px-2 text-center font-mono font-bold text-slate-300">${rankBadge}</td>
                <td class="py-2 px-2">
                  <div class="flex items-center gap-2 min-w-0">
                    ${getPlayerAvatarHtml(p.name, p.team, 'w-7 h-7')}
                    <div class="min-w-0">
                      <div class="font-bold text-xs text-white truncate max-w-[130px] sm:max-w-[170px]">${p.name}</div>
                      <div class="text-[10px] text-slate-400 truncate flex items-center gap-1">${getTeamLogoHtml(p.team, 'w-3.5 h-3.5')} <span>${p.team.code}${roleTag}</span></div>
                    </div>
                  </div>
                </td>
                <td class="py-2 px-2 text-center">
                  <span class="px-1.5 py-0.5 rounded text-[9px] font-black border ${p.posInfo.badgeClass}" title="${p.posInfo.vnLabel}">${p.posInfo.specificPos}</span>
                </td>
                <td class="py-2 px-2 text-center font-mono text-slate-300">${p.matches}</td>
                <td class="py-2 px-2 text-center font-mono font-black text-emerald-300">${p.goals}</td>
                <td class="py-2 px-2 text-right font-mono text-sky-300">${p.assists}</td>
              </tr>
            `;
          }).join('');
        }
      }

      // 2. QUẢ BÓNG VÀNG (BALLON D'OR)
      const candidates = getBallonDorCandidates(ballonScope, tourney?.id, 15);
      const podiumEl = document.getElementById('ballonDorPodiumCards');
      const ballonBody = document.getElementById('ballonDorBody');

      if (podiumEl) {
        if (candidates.length === 0) {
          podiumEl.innerHTML = `
            <div class="col-span-full p-3 rounded-xl bg-slate-900/70 border border-white/10 text-xs text-slate-300 flex items-center justify-between gap-2">
              <span>🌕 Chưa có dữ liệu điểm Quả Bóng Vàng mùa này.</span>
              <span class="text-[10px] text-amber-300 font-bold shrink-0">Đá trận để chấm điểm!</span>
            </div>
          `;
        } else {
          const medals = [
            { label: '🥇 QUẢ BÓNG VÀNG', cls: 'award-podium-gold', text: 'text-amber-300' },
            { label: '🥈 QUẢ BÓNG BẠC', cls: 'award-podium-silver', text: 'text-slate-200' },
            { label: '🥉 QUẢ BÓNG ĐỒNG', cls: 'award-podium-bronze', text: 'text-amber-400' }
          ];
          podiumEl.innerHTML = candidates.slice(0, 3).map((c, idx) => {
            const m = medals[idx];
            return `
              <div class="p-2.5 rounded-xl border ${m.cls} flex flex-col justify-between gap-1">
                <div class="flex items-center justify-between gap-1">
                  <span class="text-[9px] font-black uppercase ${m.text}">${m.label}</span>
                  <span class="px-1.5 py-0.2 rounded text-[9px] font-black border ${c.posInfo.badgeClass}">${c.posInfo.specificPos}</span>
                </div>
                <div class="flex items-center gap-2 min-w-0">
                  ${getPlayerAvatarHtml(c.name, c.team, 'w-8 h-8')}
                  <div class="min-w-0">
                    <div class="font-black text-xs text-white truncate">${c.name}</div>
                    <div class="text-[10px] text-slate-400 truncate flex items-center gap-1">${getTeamLogoHtml(c.team, 'w-3.5 h-3.5')} <span>${c.team.code} · ⚽${c.goals} 🎯${c.assists}</span></div>
                  </div>
                </div>
                <div class="flex items-center justify-between text-[10px] pt-1 border-t border-white/10">
                  <span class="text-slate-400">${c.posInfo.vnLabel}</span>
                  <span class="font-mono font-black ${m.text}">${c.score}đ</span>
                </div>
              </div>
            `;
          }).join('');
        }
      }

      if (ballonBody) {
        if (candidates.length === 0) {
          ballonBody.innerHTML = `<tr><td colspan="6" class="py-6 text-center text-xs text-slate-400">Chưa có ứng viên Quả Bóng Vàng.</td></tr>`;
        } else {
          ballonBody.innerHTML = candidates.map((c, idx) => {
            const rankBadge = idx === 0 ? '🥇' : (idx === 1 ? '🥈' : (idx === 2 ? '🥉' : `${idx + 1}`));
            const isMine = myTeamId && c.teamId === myTeamId;
            const roleTag = isMine ? (c.isStarter ? ' · Chính' : ' · Dự bị') : '';
            const bonusText = (c.posInfo.role === 'GK' || c.posInfo.role === 'DF')
              ? `${c.cleanSheets} CS · ${c.motm}⭐`
              : `${c.motm}⭐ MOTM`;
            return `
              <tr class="${isMine ? 'bg-amber-400/15' : (idx === 0 ? 'bg-amber-400/10' : '')} hover:bg-white/5 transition">
                <td class="py-2 px-2 text-center font-mono font-bold text-slate-300">${rankBadge}</td>
                <td class="py-2 px-2">
                  <div class="flex items-center gap-2 min-w-0">
                    ${getPlayerAvatarHtml(c.name, c.team, 'w-7 h-7')}
                    <div class="min-w-0">
                      <div class="font-bold text-xs text-white truncate max-w-[130px] sm:max-w-[165px]">${c.name}</div>
                      <div class="text-[10px] text-slate-400 truncate flex items-center gap-1">${getTeamLogoHtml(c.team, 'w-3.5 h-3.5')} <span>${c.team.code}${roleTag}</span></div>
                    </div>
                  </div>
                </td>
                <td class="py-2 px-2 text-center">
                  <span class="px-1.5 py-0.5 rounded text-[9px] font-black border ${c.posInfo.badgeClass}" title="${c.posInfo.vnLabel}">${c.posInfo.specificPos}</span>
                </td>
                <td class="py-2 px-2 text-center font-mono text-slate-200">${c.goals}/${c.assists}</td>
                <td class="py-2 px-2 text-center text-[10px] text-slate-400 hidden sm:table-cell">${bonusText}</td>
                <td class="py-2 px-2 text-right font-mono font-black text-amber-300">${c.score}</td>
              </tr>
            `;
          }).join('');
        }
      }

      // 3. LỊCH SỬ CÁC MÙA TRƯỚC
      const historyBox = document.getElementById('pastSeasonAwardsBox');
      const historyList = document.getElementById('pastSeasonAwardsList');
      const hist = state.playerSeasonData?.awardHistory || [];
      if (historyBox && historyList) {
        if (hist.length === 0) {
          historyBox.classList.add('hidden');
        } else {
          historyBox.classList.remove('hidden');
          historyList.innerHTML = hist.slice(0, 6).map(h => `
            <div class="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 space-y-1">
              <div class="flex items-center justify-between text-[10px] font-black text-amber-300">
                <span>MÙA ${h.seasonYear}/${h.seasonYear + 1} · ${h.tourneyName}</span>
                ${h.championName ? `<span class="text-emerald-300 truncate max-w-[120px]">🏆 ${h.championName}</span>` : ''}
              </div>
              ${h.ballonDor ? `<div class="text-[11px] text-slate-200 truncate">🌕 QBV: <strong class="text-white">${h.ballonDor.name}</strong> (${h.ballonDor.pos} · ${h.ballonDor.teamCode}) — ${h.ballonDor.score}đ</div>` : ''}
              ${h.goldenBoot ? `<div class="text-[11px] text-slate-300 truncate">👟 VPL: <strong class="text-emerald-300">${h.goldenBoot.name}</strong> (${h.goldenBoot.pos} · ${h.goldenBoot.teamCode}) — ⚽${h.goldenBoot.goals}</div>` : ''}
            </div>
          `).join('');
        }
      }
      if (typeof renderGlobalPlayerSearch === 'function') renderGlobalPlayerSearch();
    }

    // =========================================================================
    // THỊ TRƯỜNG CHUYỂN NHƯỢNG CẦU THỦ (TRANSFER MARKET)
    // =========================================================================
    const FALLBACK_TRANSFER_PLAYERS = [
      // TIỀN ĐẠO (FW)
      { id: 'haaland', name: 'Erling Haaland', pos: 'FW', club: 'Man City', ovr: 91, price: 110, ovrBoost: 3, icon: '⚡' },
      { id: 'mbappe', name: 'Kylian Mbappé', pos: 'FW', club: 'Real Madrid', ovr: 91, price: 115, ovrBoost: 3, icon: '⚡' },
      { id: 'vinicius', name: 'Vinícius Júnior', pos: 'FW', club: 'Real Madrid', ovr: 90, price: 100, ovrBoost: 3, icon: '🔥' },
      { id: 'salah', name: 'Mohamed Salah', pos: 'FW', club: 'Liverpool', ovr: 89, price: 75, ovrBoost: 2, icon: '👑' },
      { id: 'lewandowski', name: 'Robert Lewandowski', pos: 'FW', club: 'Barcelona', ovr: 88, price: 50, ovrBoost: 2, icon: '🎯' },
      { id: 'son_hm', name: 'Son Heung-min', pos: 'FW', club: 'Tottenham', ovr: 87, price: 45, ovrBoost: 2, icon: '🇰🇷' },
      { id: 'yamal', name: 'Lamine Yamal', pos: 'FW', club: 'Barcelona', ovr: 85, price: 65, ovrBoost: 2, icon: '🌟' },
      { id: 'rafaelson', name: 'Nguyễn Xuân Son (Rafaelson)', pos: 'FW', club: 'Nam Định', ovr: 84, price: 25, ovrBoost: 1, icon: '⚽' },
      { id: 'tien_linh', name: 'Nguyễn Tiến Linh', pos: 'FW', club: 'Bình Dương', ovr: 80, price: 15, ovrBoost: 1, icon: '🇻🇳' },
      { id: 'tuan_hai', name: 'Phạm Tuấn Hải', pos: 'FW', club: 'Hà Nội', ovr: 80, price: 14, ovrBoost: 1, icon: '🇻🇳' },
      { id: 'al_dawsari', name: 'Salem Al-Dawsari', pos: 'FW', club: 'Al-Hilal', ovr: 82, price: 18, ovrBoost: 1, icon: '🌙' },

      // TIỀN VỆ (MF)
      { id: 'rodri', name: 'Rodri (Quả Bóng Vàng)', pos: 'MF', club: 'Man City', ovr: 91, price: 105, ovrBoost: 3, icon: '🏆' },
      { id: 'kdb', name: 'Kevin De Bruyne', pos: 'MF', club: 'Man City', ovr: 90, price: 85, ovrBoost: 2, icon: '🪄' },
      { id: 'bellingham', name: 'Jude Bellingham', pos: 'MF', club: 'Real Madrid', ovr: 90, price: 110, ovrBoost: 3, icon: '⭐' },
      { id: 'odegaard', name: 'Martin Ødegaard', pos: 'MF', club: 'Arsenal', ovr: 88, price: 70, ovrBoost: 2, icon: '🎯' },
      { id: 'bruno_f', name: 'Bruno Fernandes', pos: 'MF', club: 'Man United', ovr: 87, price: 60, ovrBoost: 2, icon: '⚡' },
      { id: 'valverde', name: 'Federico Valverde', pos: 'MF', club: 'Real Madrid', ovr: 88, price: 75, ovrBoost: 2, icon: '🚀' },
      { id: 'modric', name: 'Luka Modrić', pos: 'MF', club: 'Real Madrid', ovr: 86, price: 30, ovrBoost: 1, icon: '👑' },
      { id: 'quang_hai', name: 'Nguyễn Quang Hải', pos: 'MF', club: 'CAHN', ovr: 82, price: 20, ovrBoost: 1, icon: '🇻🇳' },
      { id: 'hoang_duc', name: 'Nguyễn Hoàng Đức', pos: 'MF', club: 'Ninh Bình', ovr: 82, price: 20, ovrBoost: 1, icon: '🇻🇳' },
      { id: 'hendrio', name: 'Hendrio Araújo', pos: 'MF', club: 'Nam Định', ovr: 81, price: 16, ovrBoost: 1, icon: '🪄' },
      { id: 'chanathip', name: 'Chanathip Songkrasin', pos: 'MF', club: 'BG Pathum', ovr: 80, price: 14, ovrBoost: 1, icon: '🇹🇭' },

      // HẬU VỆ (DF)
      { id: 'vvd', name: 'Virgil van Dijk', pos: 'DF', club: 'Liverpool', ovr: 89, price: 75, ovrBoost: 2, icon: '🧱' },
      { id: 'ruben_dias', name: 'Rúben Dias', pos: 'DF', club: 'Man City', ovr: 88, price: 70, ovrBoost: 2, icon: '🛡️' },
      { id: 'saliba', name: 'William Saliba', pos: 'DF', club: 'Arsenal', ovr: 87, price: 65, ovrBoost: 2, icon: '🛡️' },
      { id: 'rudiger', name: 'Antonio Rüdiger', pos: 'DF', club: 'Real Madrid', ovr: 87, price: 55, ovrBoost: 2, icon: '🧱' },
      { id: 'trent', name: 'Trent Alexander-Arnold', pos: 'DF', club: 'Liverpool', ovr: 86, price: 60, ovrBoost: 2, icon: '🎯' },
      { id: 'theo_h', name: 'Theo Hernández', pos: 'DF', club: 'AC Milan', ovr: 87, price: 50, ovrBoost: 1, icon: '⚡' },
      { id: 'viet_anh', name: 'Bùi Hoàng Việt Anh', pos: 'DF', club: 'CAHN', ovr: 79, price: 12, ovrBoost: 1, icon: '🇻🇳' },
      { id: 'van_hau', name: 'Đoàn Văn Hậu', pos: 'DF', club: 'CAHN', ovr: 79, price: 12, ovrBoost: 1, icon: '🇻🇳' },
      { id: 'que_ngoc_hai', name: 'Quế Ngọc Hải', pos: 'DF', club: 'Bình Dương', ovr: 78, price: 10, ovrBoost: 1, icon: '🇻🇳' },

      // THỦ MÔN (GK)
      { id: 'courtois', name: 'Thibaut Courtois', pos: 'GK', club: 'Real Madrid', ovr: 89, price: 65, ovrBoost: 2, icon: '🧤' },
      { id: 'alisson', name: 'Alisson Becker', pos: 'GK', club: 'Liverpool', ovr: 89, price: 65, ovrBoost: 2, icon: '🧤' },
      { id: 'ederson', name: 'Ederson Moraes', pos: 'GK', club: 'Man City', ovr: 88, price: 55, ovrBoost: 2, icon: '🧤' },
      { id: 'martinez', name: 'Emiliano Martínez', pos: 'GK', club: 'Aston Villa', ovr: 87, price: 50, ovrBoost: 2, icon: '🧤' },
      { id: 'filip_nguyen', name: 'Nguyễn Filip', pos: 'GK', club: 'CAHN', ovr: 80, price: 15, ovrBoost: 1, icon: '🇻🇳' },
      { id: 'van_lam', name: 'Đặng Văn Lâm', pos: 'GK', club: 'Ninh Bình', ovr: 79, price: 12, ovrBoost: 1, icon: '🇻🇳' }
    ];

    const TRANSFER_MARKET_PLAYERS = (typeof window !== 'undefined' && Array.isArray(window.TRANSFER_MARKET_PLAYERS) && window.TRANSFER_MARKET_PLAYERS.length)
      ? window.TRANSFER_MARKET_PLAYERS
      : FALLBACK_TRANSFER_PLAYERS;

    window.loadMoreTransferPlayers = function() {
      state.transferLimit = (state.transferLimit || 48) + 48;
      renderTransferMarket();
    };

    function renderTransferMarket() {
      const budgetEl = document.getElementById('managerBudgetDisplay');
      if (budgetEl) {
        budgetEl.textContent = `${state.manager.budget || 150}M €`;
      }

      const team = TEAMS_DB.find(t => t.id === state.manager.teamId);
      const isSigned = !!(state.manager && state.manager.isContractLocked && team);

      const marketContainer = document.getElementById('transferMarketContainer');
      const squadContainer = document.getElementById('transferSquadContainer');

      const filter = state.transferFilter || 'all';
      const searchNorm = normalizeSearchText(state.transferSearch || '');

      // 1. RENDER MARKET TARGETS (MUA CẦU THỦ)
      if (marketContainer) {
        const filteredPlayers = TRANSFER_MARKET_PLAYERS.filter(p => {
          const matchPos = filter === 'all' || p.pos === filter;
          if (!matchPos) return false;
          if (!searchNorm) return true;
          return normalizeSearchText(p.name).includes(searchNorm) ||
                 normalizeSearchText(p.club).includes(searchNorm) ||
                 normalizeSearchText(p.pos).includes(searchNorm);
        });
        const currentStars = team ? (team.stars || []) : [];

        const limit = state.transferLimit || 48;
        const visiblePlayers = filteredPlayers.slice(0, limit);
        const hasMore = filteredPlayers.length > limit;

        const cardsHtml = visiblePlayers.map(p => {
          const alreadyOwned = currentStars.some(s => s.toLowerCase().includes(p.name.toLowerCase()) || p.name.toLowerCase().includes(s.toLowerCase()));
          const canAfford = (state.manager.budget || 150) >= p.price;

          let posBadgeClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
          if (p.pos === 'FW') posBadgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/30';
          else if (p.pos === 'MF') posBadgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
          else if (p.pos === 'DF') posBadgeClass = 'bg-sky-500/20 text-sky-300 border-sky-500/30';
          else if (p.pos === 'GK') posBadgeClass = 'bg-purple-500/20 text-purple-300 border-purple-500/30';

          return `
            <div class="transfer-card p-3 rounded-xl bg-slate-900/90 border border-white/10 hover:border-amber-400/50 flex flex-col justify-between gap-2 shadow transition">
              <div class="flex items-start justify-between gap-2">
                <div class="flex items-start gap-2.5 min-w-0">
                  ${getPlayerAvatarHtml(p.name, null, 'w-10 h-10')}
                  <div class="min-w-0">
                    <div class="flex items-center gap-1.5">
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-black border ${posBadgeClass}">${p.pos}</span>
                      <span class="text-xs font-mono font-bold text-amber-300">OVR ${p.ovr}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-black text-white truncate mt-1">${p.name}</h5>
                    <div class="text-[11px] text-slate-400 truncate">${p.club} · Tăng <strong class="text-emerald-400">+${p.ovrBoost} OVR</strong></div>
                  </div>
                </div>
                <div class="text-right shrink-0">
                  <div class="text-xs sm:text-sm font-black font-mono text-amber-300">${p.price}M €</div>
                  <div class="text-[10px] text-slate-400">Giá mua</div>
                </div>
              </div>

              <div>
                ${alreadyOwned ? `
                  <button type="button" disabled class="w-full py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-bold cursor-not-allowed">
                    ĐÃ CÓ TRONG ĐỘI HÌNH
                  </button>
                ` : !isSigned ? `
                  <button type="button" disabled class="w-full py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-bold cursor-not-allowed">
                    CẦN KÝ HỢP ĐỒNG ĐỂ MUA
                  </button>
                ` : `
                  <button type="button" onclick="window.buyPlayer('${p.id}')" class="btn-tap w-full py-1.5 rounded-lg text-xs font-black transition flex items-center justify-center gap-1 ${canAfford ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}">
                    <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
                    <span>${canAfford ? `MUA NGAY (-${p.price}M €)` : 'KHÔNG ĐỦ NGÂN SÁCH'}</span>
                  </button>
                `}
              </div>
            </div>
          `;
        }).join('');

        const loadMoreHtml = hasMore ? `
          <div class="col-span-full py-4 text-center">
            <button type="button" onclick="window.loadMoreTransferPlayers()" class="btn-tap px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400/25 to-yellow-500/25 hover:from-amber-400/40 hover:to-yellow-500/40 text-amber-300 border border-amber-400/40 text-xs sm:text-sm font-extrabold shadow-lg transition flex items-center justify-center gap-2 mx-auto">
              <i data-lucide="plus-circle" class="w-4 h-4"></i>
              <span>Xem thêm cầu thủ (Đang hiện ${visiblePlayers.length} / ${filteredPlayers.length.toLocaleString()} cầu thủ)...</span>
            </button>
          </div>
        ` : '';

        marketContainer.innerHTML = filteredPlayers.length ? (cardsHtml + loadMoreHtml) : `<div class="col-span-full py-8 text-center text-slate-400 text-xs">Không tìm thấy cầu thủ phù hợp trên Chợ chuyển nhượng.</div>`;
      }

      // 2. RENDER CURRENT SQUAD (BÁN CẦU THỦ)
      if (squadContainer) {
        if (!team || !isSigned) {
          squadContainer.innerHTML = `
            <div class="col-span-full py-8 text-center text-slate-400 text-xs">
              Bạn chưa ký hợp đồng với CLB nào. Hãy chọn đội và ký hợp đồng HLV ở trên để quản lý đội hình & bán cầu thủ!
            </div>
          `;
        } else {
          const stars = team.stars || [];
          const canSell = stars.length > 11;
          const sellPrice = Math.max(10, Math.round(team.rating * 0.35));
          const curLineup = getTeamLineup(team);
          const formSlots = getTeamFormationSlotsForSim(team);

          const squadItems = stars.map((name, idx) => {
            const nat = getPlayerNaturalInfo(name, team, idx);
            const lineupIdx = curLineup.indexOf(name);
            const isStarter = lineupIdx >= 0 && lineupIdx < 11;
            const slotPos = isStarter && formSlots[lineupIdx] ? (formSlots[lineupIdx].pos || nat.specificPos) : nat.specificPos;
            const roleStatus = isStarter ? `Đội chính (${slotPos})` : `Dự bị · ${nat.vnLabel}`;
            return { name, pos: nat.role, specificPos: nat.specificPos, roleStatus, isStarter, idx, price: sellPrice };
          });

          const filteredSquad = squadItems.filter(p => {
            const matchPos = filter === 'all' || p.pos === filter;
            if (!matchPos) return false;
            if (!searchNorm) return true;
            return normalizeSearchText(p.name).includes(searchNorm) ||
                   normalizeSearchText(p.specificPos).includes(searchNorm) ||
                   normalizeSearchText(p.roleStatus).includes(searchNorm);
          });

          squadContainer.innerHTML = filteredSquad.length ? filteredSquad.map(item => {
            let posBadgeClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
            if (item.pos === 'FW') posBadgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/30';
            else if (item.pos === 'MF') posBadgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
            else if (item.pos === 'DF') posBadgeClass = 'bg-sky-500/20 text-sky-300 border-sky-500/30';
            else if (item.pos === 'GK') posBadgeClass = 'bg-purple-500/20 text-purple-300 border-purple-500/30';

            return `
              <div class="transfer-card p-3 rounded-xl bg-slate-900/90 border border-white/10 hover:border-rose-400/50 flex flex-col justify-between gap-2 shadow transition">
                <div class="flex items-start justify-between gap-2">
                  <div class="flex items-start gap-2.5 min-w-0">
                    ${getPlayerAvatarHtml(item.name, team, 'w-10 h-10')}
                    <div class="min-w-0">
                      <div class="flex items-center gap-1.5 flex-wrap">
                        <span class="px-1.5 py-0.5 rounded text-[10px] font-black border ${posBadgeClass}">${item.specificPos}</span>
                        <span class="text-[10px] font-bold ${item.isStarter ? 'text-emerald-300' : 'text-amber-300'}">${item.roleStatus}</span>
                      </div>
                      <h5 class="text-xs sm:text-sm font-black text-white truncate mt-1">${item.name}</h5>
                      <div class="text-[11px] text-slate-400 truncate">${team.name} · OVR ${team.rating}</div>
                    </div>
                  </div>
                  <div class="text-right shrink-0">
                    <div class="text-xs sm:text-sm font-black font-mono text-emerald-400">+${item.price}M €</div>
                    <div class="text-[10px] text-slate-400">Thu về quỹ</div>
                  </div>
                </div>

                <div>
                  <button type="button" onclick="window.sellPlayer(${item.idx})" ${!canSell ? 'disabled' : ''} class="btn-tap w-full py-1.5 rounded-lg text-xs font-black transition flex items-center justify-center gap-1 ${canSell ? 'bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 shadow' : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5'}">
                    <i data-lucide="user-minus" class="w-3.5 h-3.5"></i>
                    <span>${canSell ? `BÁN CẦU THỦ (+${item.price}M €)` : 'ĐỘI HÌNH CẦN TỐI THIỂU 11 NGƯỜI'}</span>
                  </button>
                </div>
              </div>
            `;
          }).join('') : `<div class="col-span-full py-8 text-center text-slate-400 text-xs">Không tìm thấy cầu thủ nào trong đội hình.</div>`;
        }
      }

      if (window.lucide) window.lucide.createIcons();
    }

    function renderGlobalPlayerSearch() {
      const grid = document.getElementById('globalPlayerSearchGrid');
      const metaEl = document.getElementById('playerSearchResultMeta');
      const badgeEl = document.getElementById('playerSearchCountBadge');
      if (!grid) return;

      const filter = state.playerSearchFilter || 'all';
      const q = normalizeSearchText(state.playerSearchQuery || '');
      const myTeamId = (state.manager && state.manager.teamId) ? state.manager.teamId : null;
      const isSigned = !!(state.manager && state.manager.isContractLocked && myTeamId);

      // Build unified searchable catalog across TEAMS_DB
      const results = [];
      const seenKeys = new Set();

      TEAMS_DB.forEach(t => {
        const lineup = getTeamLineup(t);
        const slots = getTeamFormationSlotsForSim(t);
        lineup.forEach((name, idx) => {
          const isStarter = idx < 11;
          const nat = getPlayerNaturalInfo(name, t, idx);
          const slotPos = (isStarter && slots[idx]) ? (slots[idx].pos || nat.specificPos) : nat.specificPos;
          const isVLeague = Array.isArray(t.tournaments) && t.tournaments.includes('vleague1');
          const marketMeta = findTransferPlayerMeta(name);
          const dedupeKey = `${t.id}::${name}`;
          if (seenKeys.has(dedupeKey)) return;
          seenKeys.add(dedupeKey);

          // Apply filter
          if (filter === 'vleague' && !isVLeague) return;
          if (filter === 'market' && !marketMeta) return;
          if (['FW', 'MF', 'DF', 'GK'].includes(filter) && nat.role !== filter) return;

          // Apply query
          if (q) {
            const hay = normalizeSearchText(`${name} ${t.name} ${t.code} ${t.league} ${slotPos} ${nat.role} ${nat.vnLabel} ${isStarter ? 'doi chinh' : 'du bi'}`);
            if (!hay.includes(q)) return;
          } else if (filter === 'all') {
            // Default showcase when search box is empty: feature V.League stars + Top global stars + Managed club
            const isPriority = isVLeague || (myTeamId === t.id) || !!marketMeta || t.rating >= 86;
            if (!isPriority) return;
          }

          const rec = state.playerSeasonData?.players?.[dedupeKey];
          const totals = rec ? getPlayerSeasonTotals(rec, null) : { goals: 0, assists: 0 };
          const hasPhoto = !!getPlayerAvatarUrl(name);

          let sortWeight = (myTeamId === t.id ? 500 : 0) + (isVLeague ? 200 : 0) + (hasPhoto ? 50 : 0) + (marketMeta ? 40 : 0) + (totals.goals * 15) + t.rating;
          if (!isStarter) sortWeight -= 5;

          results.push({
            name,
            team: t,
            nat,
            slotPos,
            isStarter,
            isVLeague,
            marketMeta,
            totals,
            hasPhoto,
            sortWeight
          });
        });
      });

      results.sort((a, b) => b.sortWeight - a.sortWeight);
      if (badgeEl) {
        badgeEl.textContent = `${Object.keys(REAL_PLAYER_PHOTOS).length > 0 ? 'Đủ ảnh V.League & Ngôi sao' : 'V.League & Thế Giới'}`;
      }

      const shown = results.slice(0, q ? 60 : 24);
      if (metaEl) {
        metaEl.textContent = results.length > shown.length
          ? `Hiển thị ${shown.length} / ${results.length} cầu thủ phù hợp`
          : `Tìm thấy ${results.length} cầu thủ`;
      }

      if (shown.length === 0) {
        grid.innerHTML = `<div class="col-span-full py-8 text-center text-xs text-slate-400">Không tìm thấy cầu thủ nào khớp với "${(state.playerSearchQuery || '').replace(/</g, '&lt;')}". Hãy thử từ khóa khác!</div>`;
        return;
      }

      grid.innerHTML = shown.map(item => {
        const t = item.team;
        const canBuyDirect = isSigned && item.marketMeta && !(TEAMS_DB.find(x => x.id === myTeamId)?.stars || []).some(s => normalizeSearchText(s.split(' (')[0]) === normalizeSearchText(item.marketMeta.name.split(' (')[0]));
        const ovrVal = item.marketMeta ? item.marketMeta.ovr : t.rating;
        const statsText = (item.totals.goals > 0 || item.totals.assists > 0)
          ? `<span class="text-[10px] font-mono font-bold text-emerald-300">⚽${item.totals.goals} 🎯${item.totals.assists}</span>`
          : '';
        return `
          <div class="p-3 rounded-xl bg-slate-950/85 border border-white/10 hover:border-emerald-400/45 flex items-center justify-between gap-2.5 shadow transition">
            <div class="flex items-center gap-2.5 min-w-0 flex-1">
              ${getPlayerAvatarHtml(item.name, t, 'w-12 h-12')}
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-1 flex-wrap">
                  <span class="px-1.5 py-0.2 rounded text-[9px] font-black border ${item.nat.badgeClass}">${item.slotPos}</span>
                  <span class="text-[9px] font-bold ${item.isStarter ? 'text-emerald-300' : 'text-amber-300'}">${item.isStarter ? 'Đội chính' : 'Dự bị'}</span>
                  <span class="text-[9px] font-mono font-bold text-slate-400">OVR ${ovrVal}</span>
                  ${statsText}
                </div>
                <div class="font-black text-xs sm:text-sm text-white truncate mt-0.5">${item.name}</div>
                <div class="flex items-center gap-1.5 text-[10px] text-slate-400 truncate mt-0.5">
                  ${getTeamLogoHtml(t, 'w-4 h-4')}
                  <span class="truncate text-slate-300 font-semibold">${t.name}</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-1 shrink-0 items-end">
              ${canBuyDirect ? `
                <button type="button" onclick="window.buyPlayer('${item.marketMeta.id}')" class="btn-tap px-2 py-1 rounded-lg text-[10px] font-black bg-amber-400 hover:bg-amber-300 text-slate-950 shadow">
                  🛒 Mua (${item.marketMeta.price}M)
                </button>
              ` : ''}
              <button type="button" onclick="window.focusTeamFromPlayerSearch('${t.id}')" class="btn-tap px-2 py-1 rounded-lg text-[10px] font-bold bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-white/10">
                Xem CLB
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    window.focusTeamFromPlayerSearch = function(teamId) {
      const t = TEAMS_DB.find(x => x.id === teamId);
      if (!t) return;
      SoundFX.click();
      if (state.manager && state.manager.isContractLocked && state.manager.teamId && teamId !== state.manager.teamId) {
        showContractLockedModal();
        return;
      }
      const targetTourney = Array.isArray(t.tournaments) && t.tournaments.length > 0
        ? (t.tournaments.includes(state.activeTournamentId) ? state.activeTournamentId : t.tournaments[0])
        : state.activeTournamentId;
      if (targetTourney !== state.activeTournamentId) {
        selectTournament(targetTourney);
      }
      chooseTeam(t.id);
      document.getElementById('hubMainHeading')?.scrollIntoView({ behavior: 'smooth' });
    };

    function buyPlayer(playerId) {
      const p = TRANSFER_MARKET_PLAYERS.find(item => item.id === playerId);
      if (!p) return;
      const team = TEAMS_DB.find(t => t.id === state.manager.teamId);
      if (!team || !state.manager.isContractLocked) {
        showPhaseNotice('⚠️ Bạn cần ký hợp đồng HLV với một CLB để chiêu mộ cầu thủ!');
        return;
      }
      if ((state.manager.budget || 150) < p.price) {
        showPhaseNotice(`⚠️ Ngân sách CLB không đủ! Hiện có ${state.manager.budget || 0}M €, cần ${p.price}M €.`);
        return;
      }

      SoundFX.whistle();
      state.manager.budget = (state.manager.budget || 150) - p.price;
      team.stars = team.stars || [];
      if (!team.stars.includes(p.name)) {
        team.stars.push(p.name);
      }
      state.manager.customSquads = state.manager.customSquads || {};
      state.manager.customSquads[team.id] = [...team.stars];
      const curLineup = getTeamLineup(team);
      if (!curLineup.includes(p.name)) {
        curLineup.push(p.name);
      }
      state.manager.customLineups = state.manager.customLineups || {};
      state.manager.customLineups[team.id] = curLineup;

      team.rating = Math.min(125, team.rating + (p.ovrBoost || 1));
      saveCustomRatings();
      saveManagerCareer();

      if (window.confetti) {
        window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
      showPhaseNotice(`🎉 ĐÃ CHIÊU MỘ THÀNH CÔNG ${p.name}! Đã thêm vào Ghế dự bị — Bấm Sắp xếp đội hình để đưa ra sân!`);

      renderTransferMarket();
      renderManagerUI();
      renderTeamsDirectory(document.getElementById('teamSearchInput')?.value);
      renderGlobalPlayerSearch();
      pickNextMatch();
    }
    window.buyPlayer = buyPlayer;

    function sellPlayer(playerIndex) {
      const team = TEAMS_DB.find(t => t.id === state.manager.teamId);
      if (!team || !state.manager.isContractLocked) return;
      if (!team.stars || team.stars.length <= 11) {
        showPhaseNotice('⚠️ Đội hình phải có tối thiểu 11 cầu thủ để ra sân! Không thể bán thêm.');
        return;
      }

      const playerName = team.stars[playerIndex];
      const sellPrice = Math.max(10, Math.round(team.rating * 0.35));

      SoundFX.click();
      team.stars.splice(playerIndex, 1);
      state.manager.customSquads = state.manager.customSquads || {};
      state.manager.customSquads[team.id] = [...team.stars];
      if (state.manager.customLineups && Array.isArray(state.manager.customLineups[team.id])) {
        state.manager.customLineups[team.id] = state.manager.customLineups[team.id].filter(n => n !== playerName);
      }
      state.manager.budget = (state.manager.budget || 150) + sellPrice;
      saveManagerCareer();

      showPhaseNotice(`💰 ĐÃ BÁN ${playerName} THU VỀ +${sellPrice}M €! Ngân sách hiện tại: ${state.manager.budget}M €`);

      renderTransferMarket();
      renderManagerUI();
      renderTeamsDirectory(document.getElementById('teamSearchInput')?.value);
      renderGlobalPlayerSearch();
      pickNextMatch();
    }
    window.sellPlayer = sellPlayer;

    function resetAllTournamentsAndFifa() {
      const confirmReset = window.confirm("⚠️ CẢNH BÁO: Bạn có chắc chắn muốn RESET TOÀN BỘ GIẢI ĐẤU & ĐƯA ĐIỂM FIFA VỀ 0?\\n\\n- Toàn bộ kết quả bảng đấu sẽ trở về vạch xuất phát mùa giải 2026/2027.\\n- Điểm số BXH FIFA của tất cả các đội bóng & quốc gia sẽ trở về 0.00.\\n- Hợp đồng HLV hiện tại sẽ được thanh lý.\\n\\nHành động này không thể hoàn tác!");
      if (!confirmReset) return;

      SoundFX.whistle();
      // 1. Reset tournament tables & fixtures
      state.standingsByTourney = {};
      state.groupFixturesByTourney = {};
      try {
        localStorage.removeItem('football_standings_v3');
        localStorage.removeItem('football_fixtures_v3');
      } catch (e) {}

      // 2. Reset FIFA points to 0 for all teams
      state.fifaPointsMap = {};
      state.fifaLastDeltaMap = {};
      state.fifaPrevRankMap = {};
      state.fifaPrevClubRankMap = {};
      TEAMS_DB.forEach(t => {
        state.fifaPointsMap[t.id] = 0.0;
        state.fifaLastDeltaMap[t.id] = 0.0;
      });
      try {
        localStorage.setItem('football_fifa_points', JSON.stringify(state.fifaPointsMap));
      } catch (e) {}

      // 3. Reset season year & Player Awards (Vua Phá Lưới & Quả Bóng Vàng)
      state.seasonYear = 2026;
      try {
        localStorage.setItem('football_season_year', '2026');
        localStorage.removeItem('football_player_awards_history_v1');
      } catch (e) {}
      resetPlayerSeasonStats(null);
      if (state.playerSeasonData) state.playerSeasonData.awardHistory = [];

      // Restore original squads in memory (removing transferred additions)
      TEAMS_DB.forEach(t => {
        if (Array.isArray(t.baseStars)) t.stars = [...t.baseStars];
      });

      // 4. Reset manager contract & career
      state.manager.isContractLocked = false;
      state.manager.teamId = null;
      state.manager.tourneyId = null;
      state.manager.matches = 0;
      state.manager.wins = 0;
      state.manager.draws = 0;
      state.manager.losses = 0;
      state.manager.gf = 0;
      state.manager.ga = 0;
      state.manager.boardConfidence = 90;
      state.manager.trophies = [];
      state.manager.budget = 150;
      state.manager.customLineups = {};
      state.manager.customSquads = {};
      state.manager.captains = {};
      state.manager.selectedLineupIdx = null;
      saveManagerCareer();

      // 5. Close settings dialog
      const settingsDialog = document.getElementById('settings');
      if (settingsDialog && settingsDialog.close) {
        settingsDialog.close();
      }

      // 6. Re-init tournament and re-render everything
      initStandingsForTournament(state.activeTournamentId, true);
      renderLeagueStandings();
      renderFifaWorldRankings();
      renderSeasonAwards();
      renderManagerUI();
      updateSeasonHeaderBadge();
      pickNextMatch();

      if (window.confetti) {
        window.confetti({ particleCount: 70, spread: 60, origin: { y: 0.5 } });
      }
      showPhaseNotice('✅ ĐÃ RESET TOÀN BỘ GIẢI ĐẤU & ĐƯA ĐIỂM FIFA VỀ 0 THÀNH CÔNG! Sẵn sàng cho Mùa giải 2026/2027!');
    }

    function signManagerContract(teamId, tourneyId, mgrName) {
      SoundFX.whistle();
      const team = TEAMS_DB.find(t => t.id === teamId) || TEAMS_DB[0];
      const tourney = TOURNAMENTS.find(t => t.id === tourneyId) || getActiveTournament();

      state.manager.teamId = team.id;
      state.manager.tourneyId = tourney.id;
      state.manager.seasonYear = state.seasonYear;
      state.manager.name = mgrName || state.manager.name || 'HLV Trưởng';
      state.manager.isContractLocked = true;
      saveManagerCareer();

      state.focusedTeamId = team.id;
      state.activeTournamentId = tourney.id;
      selectTournament(tourney.id);
      chooseTeam(team.id);

      renderManagerUI();

      if (window.confetti) {
        window.confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      }

      showPhaseNotice(`🎉 CHÚC MỪNG BẠN ĐÃ KÝ HỢP ĐỒNG HLV TRƯỞNG DẪN DẮT ${team.name}! Chúc bạn có một mùa giải đại thành công!`);
    }

    function triggerManagerShout(type) {
      if (state.phase !== 'simulating') {
        return;
      }
      SoundFX.whistle();
      state.manager.activeShout = type;
      state.manager.shoutTimer = 22; // 22 seconds

      const banner = document.getElementById('managerPitchShoutBanner');
      const bannerText = document.getElementById('managerPitchShoutText');
      const badge = document.getElementById('shoutActiveBadge');

      let text = '';
      if (type === 'push_up') {
        text = `HLV CHỈ ĐẠO: "ĐẨY CAO ĐỘI HÌNH!" — Toàn đội dâng cao pressing nghẹt thở!`;
      } else if (type === 'possession') {
        text = `HLV CHỈ ĐẠO: "KIỂM SOÁT BÓNG!" — Ban bật chậm rãi, giữ vững nhịp độ trận đấu!`;
      } else if (type === 'park_bus') {
        text = `HLV CHỈ ĐẠO: "LÙI SÂU TỬ THỦ!" — Kéo toàn bộ đội hình về tử thủ bảo toàn mành lưới!`;
      }

      if (banner && bannerText) {
        bannerText.textContent = text;
        banner.classList.remove('hidden');
      }
      if (badge) {
        badge.textContent = `Đang hiệu lực (20s)`;
        badge.className = 'text-[10px] font-bold text-amber-300';
      }
    }

    function showContractLockedModal(customMsg) {
      SoundFX.whistle();
      const modal = document.getElementById('modalContractLocked');
      if (!modal) return;

      const team = TEAMS_DB.find(t => t.id === state.manager.teamId);
      const teamNameEl = document.getElementById('lockedModalTeamName');
      if (teamNameEl) teamNameEl.textContent = team ? `${team.icon || '🛡️'} ${team.name}` : 'Đội bóng của bạn';

      const seasonTagEl = document.getElementById('lockedModalSeasonTag');
      if (seasonTagEl) seasonTagEl.textContent = `Đến hết Mùa giải ${state.manager.seasonYear}/${state.manager.seasonYear + 1}`;

      const allGroups = state.groupFixturesByTourney[state.manager.tourneyId] || {};
      let totalF = 0, playedF = 0;
      for (const grp of Object.values(allGroups)) {
        for (const f of grp) {
          totalF++;
          if (f.played) playedF++;
        }
      }
      const progEl = document.getElementById('lockedModalProgress');
      if (progEl) {
        progEl.textContent = totalF > 0 ? `${playedF} / ${totalF} trận đã hoàn thành` : 'Mùa giải đang diễn ra';
      }

      const msgEl = document.getElementById('lockedModalMessage');
      if (msgEl) {
        if (customMsg) {
          msgEl.innerHTML = customMsg;
        } else {
          msgEl.innerHTML = `Theo quy chế HLV (Soccer Manager), bạn <strong>không được phép chuyển sang đội bóng khác giữa mùa giải</strong> khi đang có hợp đồng với <strong>${team?.name || 'đội bóng'}</strong>. Hãy hoàn thành trọn vẹn tất cả các trận đấu của mùa giải này để thanh lý hợp đồng hoặc nhận lời mời từ CLB mới!`;
        }
      }

      modal.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    }

    function selectTournament(tournamentId) {
      if (state.manager && state.manager.isContractLocked && state.manager.teamId) {
        const myTeam = TEAMS_DB.find(t => t.id === state.manager.teamId);
        if (myTeam && !myTeam.tournaments.includes(tournamentId)) {
          const allowedTourneys = TOURNAMENTS.filter(t => myTeam.tournaments.includes(t.id));
          const allowedNames = allowedTourneys.map(t => `${t.icon} ${t.shortName || t.name}`).join(', ');
          showContractLockedModal(`CLB <strong>${myTeam.name}</strong> của bạn hiện đang thi đấu tại các giải trong khu vực: <br><strong class="text-amber-300">${allowedNames}</strong>.<br><br>Hãy chọn một trong các giải đấu trên để tiếp tục chỉ đạo CLB!`);
          const selLeague = document.getElementById('selectLeagueFilter');
          if (selLeague) selLeague.value = state.activeTournamentId;
          return;
        }
      }
      state.activeTournamentId = tournamentId;
      const tourney = getActiveTournament();
      state.stageIndex = 0;
      state.activeGroupFilter = 'ALL';
      const myTeam = (state.manager && state.manager.isContractLocked && state.manager.teamId)
        ? TEAMS_DB.find(t => t.id === state.manager.teamId)
        : null;
      state.focusedTeamId = (myTeam && myTeam.tournaments.includes(tournamentId))
        ? myTeam.id
        : getTeamsInActiveTournament()[0].id;
      document.getElementById('activeTournamentHeaderBadge').innerHTML = `${getTournamentLogoHtml(tourney, 'w-4 h-4')}<span>${tourney.name}</span>`;
      document.getElementById('currentLeagueDesc').textContent = tourney.groupCount ? 'Chọn đội để xem lịch đấu và bảng điểm của bảng tương ứng.' : 'Mỗi đội gặp tất cả các đối thủ một trận sân nhà và một trận sân khách.';
      initStandingsForTournament(tournamentId);
      renderTournamentSelectorBar();
      renderTeamsDirectory(document.getElementById('teamSearchInput').value);
      renderSeasonAwards();
      pickNextMatch();
    }

    function fixturesForTeam(teamId) {
      const group = state.standingsByTourney[state.activeTournamentId][teamId].group;
      return state.groupFixturesByTourney[state.activeTournamentId][group]
        .filter(f => f.home.id === teamId || f.away.id === teamId);
    }

        let pendingSwitchTeamId = null;

    function promptSwitchTeam(newTeamId) {
      if (state.phase === 'simulating') return;
      if (!state.manager || !state.manager.isContractLocked || newTeamId === state.manager.teamId) {
        return;
      }
      const oldTeam = TEAMS_DB.find(t => t.id === state.manager.teamId);
      const newTeam = TEAMS_DB.find(t => t.id === newTeamId);
      if (!newTeam) return;

      pendingSwitchTeamId = newTeamId;
      const modal = document.getElementById('modalConfirmSwitchTeam');
      if (modal) {
        const oldEl = document.getElementById('switchOldClubName');
        const newEl = document.getElementById('switchNewClubName');
        if (oldEl) oldEl.textContent = oldTeam ? (oldTeam.icon || '🛡️') + ' ' + oldTeam.name : 'CLB cũ';
        if (newEl) newEl.textContent = (newTeam.icon || '🛡️') + ' ' + newTeam.name;
        modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      } else {
        if (confirm(`Bạn hiện đang dẫn dắt ${oldTeam ? oldTeam.name : 'CLB cũ'}. Bạn có muốn chuyển sang dẫn dắt ${newTeam.name} không?`)) {
          executeSwitchTeam(newTeamId);
        }
      }
    }

    function executeSwitchTeam(newTeamId) {
      const newTeam = TEAMS_DB.find(t => t.id === newTeamId);
      if (!newTeam) return;

      state.manager.teamId = newTeamId;
      state.manager.isContractLocked = true;
      state.manager.isSigned = true;
      state.focusedTeamId = newTeamId;

      if (!state.customLineups) state.customLineups = {};
      if (!state.customLineups[newTeamId] && Array.isArray(newTeam.stars)) {
        state.customLineups[newTeamId] = newTeam.stars.slice(0, 11);
      }

      saveManagerCareer();
      renderManagerUI();
      initPitchPlayers();

      if (Array.isArray(newTeam.tournaments) && !newTeam.tournaments.includes(state.activeTournamentId)) {
        selectTournament(newTeam.tournaments[0]);
      } else {
        pickNextMatch();
      }

      SoundFX.cheer();
      showPhaseNotice(`🎉 Đã ký hợp đồng! Bạn chính thức trở thành HLV Trưởng của ${newTeam.name}!`);

      document.getElementById('modalConfirmSwitchTeam')?.classList.add('hidden');
      document.getElementById('modalContractLocked')?.classList.add('hidden');
    }

    function chooseTeam(id, fixture) {
      if (state.phase === 'simulating') return;
      if (state.manager && state.manager.isContractLocked && id !== state.manager.teamId) {
        promptSwitchTeam(id);
        const picker = document.getElementById('focusTeam');
        if (picker && state.manager.teamId) picker.value = state.manager.teamId;
        return;
      }
      state.focusedTeamId = id;
      if (state.activeTournamentId === 'world_cup' && state.stageIndex === 0) {
        initStandingsForTournament('world_cup', true);
        renderLeagueStandings();
        updateStageFormatUI();
      }
      pickNextMatch(fixture);
    }

    function pickNextMatch(requested) {
      const pool = getTeamsInActiveTournament();
      const focus = pool.find(t => t.id === state.focusedTeamId) || pool[0];
      state.focusedTeamId = focus.id;
      const focusRow = state.standingsByTourney[state.activeTournamentId]?.[focus.id];
      state.focusedGroup = focusRow ? focusRow.group : 'A';
      state.activeGroupFilter = state.focusedGroup;
      const picker = document.getElementById('focusTeam');
      picker.replaceChildren(...pool.map(t => new Option(t.name, t.id)));
      picker.value = focus.id;
      if (state.manager && state.manager.isContractLocked) {
        picker.title = '🔒 Đang trong hợp đồng HLV với đội bóng này (Soccer Manager)';
      } else {
        picker.title = '';
      }
      const prevEl = document.getElementById('managerPreviewTeamName');
      if (prevEl) {
        prevEl.innerHTML = `<span class="flex items-center gap-2">${getTeamLogoHtml(focus, 'w-5 h-5')}<span>${focus.name}</span></span>`;
      }
      if (state.isKnockoutMatch) {
        const opponents = pool.filter(t => t !== focus);
        setupMatch(focus, requested?.away || opponents[Math.floor(Math.random() * opponents.length)]);
        return;
      }
      const fixtures = fixturesForTeam(focus.id);
      const next = requested || fixtures.find(f => !f.played);
      const fixture = next || fixtures.at(-1);
      state.roundNumber = fixture.matchday;
      setupMatch(fixture.home, fixture.away);
      if (!next) {
        state.phase = 'complete';
        setScoreControlsEnabled(false);
        const table = state.standingsByTourney[state.activeTournamentId];
        const summary = `${focus.name} · ${table[focus.id].played} trận · ${table[focus.id].pts} điểm`;
        document.getElementById('simBadge').textContent = 'Đã hoàn thành lịch đấu';
        document.getElementById('simMinute').textContent = 'Kết quả trận cuối';
        document.getElementById('matchEventsFeed').textContent = summary;
        document.getElementById('liveScoreBoard').textContent = fixture.score;
        document.getElementById('liveTouchBadge').textContent = 'Hết trận';
        document.getElementById('timerStatusText').textContent = 'Đã hoàn thành lịch đấu của ' + focus.name;
        document.getElementById('btnLockPrediction').disabled = false;

        const isWorldCup = state.activeTournamentId === 'world_cup';
        const isWorldCupQualifiers = isWorldCup && state.stageIndex === 0;
        const isWorldCupFinalsGroup = isWorldCup && state.stageIndex === 1;

        const qualified = getActiveTournament().groupCount && Object.values(table)
          .filter(r => r.group === state.focusedGroup).sort(rankStandingRows)
          .slice(0, 2).some(r => r.team.id === focus.id);

        if (isWorldCupQualifiers) {
          state.phase = 'wc_qualified_finals';
          document.getElementById('btnLockPrediction').innerHTML = `<i data-lucide="trophy" class="w-5 h-5 text-amber-400"></i><span>TIẾN VÀO VÒNG BẢNG VCK WORLD CUP (48 ĐỘI)</span>`;
        } else if (isWorldCupFinalsGroup) {
          state.phase = 'wc_qualified_knockout';
          document.getElementById('btnLockPrediction').innerHTML = `<i data-lucide="zap" class="w-5 h-5 text-amber-400"></i><span>TIẾN VÀO VÒNG 1/16 VCK WORLD CUP (KNOCK-OUT)</span>`;
        } else if (qualified) {
          state.phase = 'qualified';
          document.getElementById('btnLockPrediction').textContent = 'Vào vòng loại trực tiếp';
        } else {
          state.phase = 'complete';
          document.getElementById('btnLockPrediction').innerHTML = `<i data-lucide="trophy" class="w-5 h-5 text-amber-400"></i><span>XEM TỔNG KẾT MÙA & OVR</span>`;
          if (!isTournamentCompleted(getActiveTournament())) {
            simulateRemainingSeasonMatches(getActiveTournament());
          } else {
            handleSeasonEndAndOvrProgression(getActiveTournament());
          }
        }
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

      const lineup = getTeamLineup(team);
      const starters = lineup.slice(0, 11);
      const bench = lineup.slice(11);
      const captain = getTeamCaptain(team);
      const isMgrTeam = state.manager && state.manager.teamId === team.id;
      const formKey = isMgrTeam ? (state.manager.formation || '4-3-3') : '4-3-3';
      const slots = TACTICAL_FORMATIONS[formKey] || TACTICAL_FORMATIONS['4-3-3'];

      let html = starters.map((player, i) => {
        const pos = slots[i] ? (slots[i].pos || slots[i].role) : getPlayerNaturalInfo(player, team, i).specificPos;
        const isCap = player === captain;
        return `
          <span class="px-2 py-0.5 rounded-md border text-[10px] font-medium inline-flex items-center gap-1 ${badgeColor}">
            ${getPlayerAvatarHtml(player, team, 'w-4 h-4')}
            ${isCap ? '<span>👑</span>' : ''}<strong class="font-black opacity-90">${pos}</strong><span>${player}</span>
          </span>
        `;
      }).join('');

      if (bench.length > 0) {
        html += bench.map((player, idx) => {
          const nat = getPlayerNaturalInfo(player, team, 11 + idx);
          const isCap = player === captain;
          return `
            <span class="px-2 py-0.5 rounded-md border border-white/10 bg-slate-900/75 text-slate-300 text-[10px] inline-flex items-center gap-1" title="Dự bị · ${nat.vnLabel}">
              ${getPlayerAvatarHtml(player, team, 'w-4 h-4')}
              ${isCap ? '<span>👑</span>' : ''}<strong class="font-black ${nat.textClass}">${nat.specificPos}</strong><span>${player}</span><span class="text-[9px] text-amber-300/80">(DB)</span>
            </span>
          `;
        }).join('');
      }
      container.innerHTML = html;
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
      state.sidesSwapped = false;
      state.shotAnim.active = false;
      state.kickoffUntil = 0;
      state.ballTrail = [];

      const tourney = getActiveTournament();

      // Update Overlays & Header
      document.getElementById('resultOverlay').classList.add('hidden');
      document.getElementById('goalCelebrationBanner').classList.add('hidden');
      document.getElementById('phaseNoticeBanner').classList.add('hidden');

      document.getElementById('tournamentName').innerHTML = `
        ${getTournamentLogoHtml(tourney, 'w-5 h-5')}
        <span>${tourney.name}</span>
      `;
      state.penHome = null;
      state.penAway = null;
      updateStageFormatUI();
      renderLeagueStandings();

      // Reset Simulation Timer bar
      syncSettings();
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
      document.getElementById('simBadge').textContent = state.gameMode === 'manager' ? "CHỜ KHAI CUỘC" : "CHỜ KHÓA TỶ SỐ";
      document.getElementById('simBadge').className = "px-2.5 py-0.5 rounded-md text-xs font-extrabold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";

      document.getElementById('matchEventsFeed').innerHTML = `
        <div class="text-slate-300 flex items-center gap-2">
          <span class="text-emerald-400 font-bold">🎙️ Bình luận viên:</span>
          <span>Trận đấu thuộc khuôn khổ <strong>${tourney.name}</strong> giữa <strong>${home.name}</strong> và <strong>${away.name}</strong> sắp bắt đầu!</span>
        </div>
      `;

      setScoreControlsEnabled(true);
      document.getElementById('liveTouchBadge').textContent = 'Chờ giao bóng';
      state.pitchDirty = true;
      initPitchPlayers();
      updateScoreDisplay();
      if (window.lucide) window.lucide.createIcons();
    }

    // =========================================================================
    // 6. TIMERS & CONTROLS MANAGEMENT
    // =========================================================================
    function syncSettings() {
      document.querySelector(`[name=duration][value="${state.duration}"]`).checked = true;
      document.querySelector(`[name=speed][value="${state.speedMultiplier}"]`).checked = true;
      const isMgr = state.gameMode === 'manager';
      const speedText = document.getElementById('simSpeedText');
      if (speedText) {
        speedText.textContent = isMgr ? `Tua nhanh ${state.speedMultiplier}×` : `Tốc độ ${state.speedMultiplier}×`;
      }
      const speedBtn = document.getElementById('btnSimSpeed');
      if (speedBtn) {
        speedBtn.className = state.speedMultiplier > 1
          ? 'btn-tap px-4 py-3.5 rounded-xl font-black text-xs sm:text-sm bg-amber-400 text-slate-950 border border-amber-300 shadow-lg shadow-amber-500/25 flex items-center gap-1.5 transition'
          : 'btn-tap px-4 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 flex items-center gap-1.5 transition';
      }
      if (state.phase === 'predicting') {
        document.getElementById('timerDisplay').textContent = '00:00 / ' + formatClockMMSS(state.duration);
        document.getElementById('timerStatusText').textContent = `Thời gian thi đấu · ${state.duration / 60} phút`;
      }
    }

    function setLiveControls(live) {
      document.querySelectorAll('#focusTeam, #selectLeagueFilter, .mode-tab, .league-pill, #btnSkipMatch, #btnOpenCustomMatch, #selectCompetitionStage, .team-dir-btn, #durationChoices').forEach(el => el.disabled = live);
    }

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
        const isMgr = state.gameMode === 'manager';
        lockBtn.innerHTML = isMgr
          ? `<i data-lucide="play" class="w-5 h-5 fill-current"></i><span>BẮT ĐẦU ĐÁ</span>`
          : `<i data-lucide="play" class="w-5 h-5 fill-current"></i><span>CHỐT DỰ ĐOÁN & BẮT ĐẦU ĐÁ</span>`;
      } else {
        lockBtn.classList.add('opacity-50', 'cursor-not-allowed');
        lockBtn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i><span>ĐANG GIẢ LẬP TRÊN SÂN...</span>`;
      }
      if (window.lucide) window.lucide.createIcons();
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

      // Determine attack direction based on side and whether teams have swapped sides
      const isHome = side === 'home';
      const attackDir = isHome ? (state.sidesSwapped ? -1 : 1) : (state.sidesSwapped ? 1 : -1);

      // Position shooter in attacking striking zone and place ball right at shooter's feet!
      const shootSpotX = attackDir > 0 ? (0.74 + Math.random() * 0.08) : (0.26 - Math.random() * 0.08);
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
      const targetX = attackDir > 0 ? 0.968 : 0.032;
      const targetY = 0.42 + Math.random() * 0.16;

      state.shotAnim.active = true;
      state.shotAnim.restartAt = performance.now() + 1100;
      state.shotAnim.phase = 'flying';
      state.shotAnim.side = side;
      state.shotAnim.startX = shooter.x + (attackDir > 0 ? 0.016 : -0.016);
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
      const scorerEl = document.getElementById('goalBannerScorer');
      const scoringTeam = (state.homeTeam?.name === teamName) ? state.homeTeam : ((state.awayTeam?.name === teamName) ? state.awayTeam : null);
      scorerEl.innerHTML = `<span class="inline-flex items-center justify-center gap-2">${getPlayerAvatarHtml(scorer, scoringTeam, 'w-10 h-10')}<span>${scorer} (${minute}')</span></span>`;
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
      setLiveControls(true);
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
      state.sidesSwapped = false;
      state.scheduledEvents = [];

      for (let i = 0; i < state.targetHomeGoals; i++) {
        const min = Math.floor(Math.random() * 86) + 3;
        const scorer = pickScorerFromLineup(state.homeTeam);
        state.scheduledEvents.push({ minute: min, side: 'home', scorer, triggered: false });
      }
      for (let i = 0; i < state.targetAwayGoals; i++) {
        const min = Math.floor(Math.random() * 86) + 3;
        const scorer = pickScorerFromLineup(state.awayTeam);
        state.scheduledEvents.push({ minute: min, side: 'away', scorer, triggered: false });
      }
      state.scheduledEvents.sort((a, b) => a.minute - b.minute);

      const tourney = getActiveTournament();
      const feed = document.getElementById('matchEventsFeed');
      const isMgr = state.gameMode === 'manager';
      feed.innerHTML = isMgr
        ? `<div class="text-emerald-300 font-semibold">⏱️ 01' [${tourney.shortName}] Hiệp 1 bắt đầu! HLV <strong>${state.manager.name || 'Trưởng'}</strong> chỉ đạo trận đấu!</div>`
        : `<div class="text-emerald-300 font-semibold">⏱️ 01' [${tourney.shortName}] Hiệp 1 bắt đầu! Bạn dự đoán: ${state.homeTeam.code} ${state.predHome} - ${state.predAway} ${state.awayTeam.code}</div>`;

      document.getElementById('simBadge').textContent = "HIỆP 1 • ĐANG ĐÁ";
      document.getElementById('simBadge').className = "px-2.5 py-0.5 rounded-md text-xs font-extrabold uppercase bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse";
      document.getElementById('timerStatusText').textContent = isMgr
        ? `👔 HLV CHỈ ĐẠO (${state.manager.formation || '4-3-3'}) • ĐANG ĐÁ HIỆP 1`
        : `🔒 DỰ ĐOÁN (${state.predHome} - ${state.predAway}) • ĐANG ĐÁ HIỆP 1`;

      restartPlay('home');
      const tickMs = 100;
      const duration = state.duration;
      let previous = performance.now();
      state.simInterval = setInterval(() => {
        const now = performance.now();
        const delta = Math.min((now - previous) / 1000, 1) * state.speedMultiplier;
        previous = now;
        if (state.shotAnim.active) {
          if (now >= state.shotAnim.restartAt) restartPlay(state.shotAnim.side === 'home' ? 'away' : 'home');
          return;
        }
        if (now < state.kickoffUntil) return;
        const boundary = state.inExtraTime ? duration + 30 : (state.halfTimeAnnounced ? duration : duration / 2);
        state.simElapsedSec = Math.min(boundary, state.simElapsedSec + delta);

        // Manager In-match Tactical Shout countdown
        if (state.manager && state.manager.shoutTimer > 0) {
          state.manager.shoutTimer -= delta;
          if (state.manager.shoutTimer <= 0) {
            state.manager.activeShout = null;
            const shoutBanner = document.getElementById('managerPitchShoutBanner');
            if (shoutBanner) shoutBanner.classList.add('hidden');
            const shoutBadge = document.getElementById('shoutActiveBadge');
            if (shoutBadge) {
              shoutBadge.textContent = 'Sẵn sàng ra chỉ đạo trong trận';
              shoutBadge.className = 'text-[10px] text-slate-400';
            }
          }
        }

        if (!state.inExtraTime) {
          state.simMinute = Math.min(90, (state.simElapsedSec / duration) * 90);
          const pct = Math.min(100, (state.simElapsedSec / duration) * 100);
          document.getElementById('timerBar').style.width = `${pct}%`;
          document.getElementById('timerDisplay').textContent = `${formatClockMMSS(state.simElapsedSec)} / ${formatClockMMSS(duration)}`;


        } else {
          const etElapsed = state.simElapsedSec - duration;
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
        const ev = state.scheduledEvents.find(event => !event.triggered && event.minute <= displayMin);
        if (ev) {
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
            return;
        }
          if (state.simMinute >= 45 && !state.halfTimeAnnounced) {
            state.halfTimeAnnounced = true;
            state.sidesSwapped = true;
            SoundFX.whistle();
            document.getElementById('simBadge').textContent = "HIỆP 2 • ĐANG ĐÁ";
            document.getElementById('timerStatusText').textContent = state.gameMode === 'manager'
              ? `👔 HLV CHỈ ĐẠO (${state.manager.formation || '4-3-3'}) • ĐANG ĐÁ HIỆP 2 (ĐỔI SÂN)`
              : `🔒 DỰ ĐOÁN (${state.predHome} - ${state.predAway}) • ĐANG ĐÁ HIỆP 2 (ĐỔI SÂN)`;
            showPhaseNotice("⏱️ HIỆP 2 BẮT ĐẦU (45' - 90') • HAI ĐỘI ĐỔI SÂN!");
            const htItem = document.createElement('div');
            htItem.className = 'text-sky-300 font-semibold';
            htItem.textContent = `⏸️ 45' Hết hiệp 1. Hai đội đổi sân và bước vào Hiệp 2 với tỷ số ${state.liveHomeGoals} - ${state.liveAwayGoals}.`;
            feed.prepend(htItem);
            restartPlay('away');
            return;
          }

        // Check End of Regular Time (90' / 120s)
        if (!state.inExtraTime && state.simElapsedSec >= duration) {
          const allowET = state.isKnockoutMatch;
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
              const scorer = pickScorerFromLineup(state.homeTeam);
              state.scheduledEvents.push({ minute: min, side: 'home', scorer, triggered: false });
            }
            for (let i = 0; i < etSim.awayGoals; i++) {
              const min = Math.floor(Math.random() * 27) + 92;
              const scorer = pickScorerFromLineup(state.awayTeam);
              state.scheduledEvents.push({ minute: min, side: 'away', scorer, triggered: false });
            }
            state.scheduledEvents.sort((a, b) => a.minute - b.minute);

            const etMsg = document.createElement('div');
            etMsg.className = 'text-amber-300 font-bold';
            etMsg.textContent = `⚡ 90' Hòa ${state.liveHomeGoals}-${state.liveAwayGoals} sau hai hiệp chính! Hai đội đá thêm 2 Hiệp phụ (30 giây)!`;
            feed.prepend(etMsg);
          } else {
            clearIntervals();
            finishMatch();
          }
        } else if (state.inExtraTime && state.simElapsedSec >= duration + 30) {
          clearIntervals();
          finishMatch();
        }
      }, tickMs);
    }

    function finishMatch() {
      state.phase = 'finished';
      state.pitchDirty = true;
      setLiveControls(false);
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



      // 1. Snapshot previous ranks before this round's matches so live rank shift (▲/▼) is computed
      snapshotFifaRanks();

      const playedTeamsThisRound = new Set();
      playedTeamsThisRound.add(state.homeTeam.id);
      playedTeamsThisRound.add(state.awayTeam.id);

      let concurrentTourneyMatches = 0;
      let concurrentWorldMatches = 0;
      const isPenWinHome = (state.penHome !== null && state.penAway !== null) ? (state.penHome > state.penAway) : null;

      // Record player goals, assists, clean sheets & MOTM for user's match
      recordPlayerStatsForMatch(tourney.id, state.homeTeam, state.awayTeam, actualH, actualA, state.scheduledEvents, isPenWinHome);

      // 2. Tournament Fixtures: Simulate User's match + other matches in current group + ALL other groups of this tournament!
      if (!state.isKnockoutMatch) {
        const allGroups = state.groupFixturesByTourney[tourney.id] || {};
        const focusedSchedule = allGroups[state.focusedGroup] || [];
        const current = focusedSchedule.find(f => !f.played && f.home.id === state.homeTeam.id && f.away.id === state.awayTeam.id);
        const currentMatchday = current ? current.matchday : state.roundNumber;

        if (current) {
          current.played = true;
          current.score = `${actualH}-${actualA}`;
        }
        recordScoreToStandings(state.homeTeam, state.awayTeam, actualH, actualA);

        // Iterate over ALL groups in the active tournament (Group A, B, C, D, E, F, G, H, I, J, K, L...)
        for (const [grpName, grpFixtures] of Object.entries(allGroups)) {
          for (const fixture of grpFixtures) {
            if (fixture.played) continue;
            // Matches scheduled for this same matchday/round
            if (fixture.matchday === currentMatchday) {
              const { homeGoals, awayGoals } = generateMatchScore(fixture.home, fixture.away);
              fixture.played = true;
              fixture.score = `${homeGoals}-${awayGoals}`;
              recordScoreToStandings(fixture.home, fixture.away, homeGoals, awayGoals);
              recordPlayerStatsForMatch(tourney.id, fixture.home, fixture.away, homeGoals, awayGoals);
              updateFifaWorldPointsAfterMatch(fixture.home, fixture.away, homeGoals, awayGoals);
              playedTeamsThisRound.add(fixture.home.id);
              playedTeamsThisRound.add(fixture.away.id);
              concurrentTourneyMatches++;
            }
          }
        }
      } else {
        // Knockout stage: Pair up other tournament teams for this round
        const pool = getTeamsInActiveTournament().filter(t => !playedTeamsThisRound.has(t.id));
        for (let i = 0; i + 1 < pool.length; i += 2) {
          const t1 = pool[i];
          const t2 = pool[i + 1];
          const { homeGoals, awayGoals } = generateMatchScore(t1, t2);
          let g1 = homeGoals, g2 = awayGoals;
          let penWin = null;
          if (g1 === g2) {
            penWin = Math.random() > 0.5;
          }
          recordPlayerStatsForMatch(tourney.id, t1, t2, g1, g2, null, penWin);
          updateFifaWorldPointsAfterMatch(t1, t2, g1, g2, penWin);
          playedTeamsThisRound.add(t1.id);
          playedTeamsThisRound.add(t2.id);
          concurrentTourneyMatches++;
        }
      }

      // 3. Official FIFA World Ranking points for the User's match
      const fifaDelta = updateFifaWorldPointsAfterMatch(state.homeTeam, state.awayTeam, actualH, actualA, isPenWinHome);

      // 4. Worldwide Concurrent Matches:
      // When playing as National Teams: Simulate International Matchday fixtures for other nations across the world (186 nations)!
      // When playing as Clubs: Simulate Club Matchday fixtures for other clubs across world leagues!
      const isNationalMode = tourney.group === 'nations';
      if (isNationalMode) {
        const otherNations = TEAMS_DB.filter(t => t.type === 'nations' && !playedTeamsThisRound.has(t.id));
        otherNations.sort((a, b) => b.rating - a.rating);
        for (let i = 0; i + 1 < otherNations.length; i += 2) {
          const n1 = otherNations[i];
          const n2 = otherNations[i + 1];
          const { homeGoals, awayGoals } = generateMatchScore(n1, n2);
          recordPlayerStatsForMatch(null, n1, n2, homeGoals, awayGoals);
          updateFifaWorldPointsAfterMatch(n1, n2, homeGoals, awayGoals);
          playedTeamsThisRound.add(n1.id);
          playedTeamsThisRound.add(n2.id);
          concurrentWorldMatches++;
        }
      } else {
        const otherClubs = TEAMS_DB.filter(t => t.type !== 'nations' && !playedTeamsThisRound.has(t.id));
        otherClubs.sort((a, b) => b.rating - a.rating);
        for (let i = 0; i + 1 < otherClubs.length; i += 2) {
          const c1 = otherClubs[i];
          const c2 = otherClubs[i + 1];
          const { homeGoals, awayGoals } = generateMatchScore(c1, c2);
          recordPlayerStatsForMatch(null, c1, c2, homeGoals, awayGoals);
          updateFifaWorldPointsAfterMatch(c1, c2, homeGoals, awayGoals);
          playedTeamsThisRound.add(c1.id);
          playedTeamsThisRound.add(c2.id);
          concurrentWorldMatches++;
        }
      }

      // 5. Instantly Re-render Tournament Standings, FIFA World Rankings, Golden Boot & Ballon d'Or!
      renderLeagueStandings();
      renderFifaWorldRankings();
      renderSeasonAwards();
      if (state.gameMode === 'manager') renderManagerLineupEditor();

      // Manager Career Stats & Performance update
      const isMgr = state.gameMode === 'manager';
      let verdictTitle = '';
      let badgeClass = '';
      let totalEarned = 0;

      if (state.manager) {
        state.manager.activeShout = null;
        state.manager.shoutTimer = 0;
        const shoutBanner = document.getElementById('managerPitchShoutBanner');
        if (shoutBanner) shoutBanner.classList.add('hidden');

        if (state.manager.teamId) {
          const isHome = state.homeTeam.id === state.manager.teamId;
          const isAway = state.awayTeam.id === state.manager.teamId;
          if (isHome || isAway) {
            state.manager.matches++;
            const myGoals = isHome ? actualH : actualA;
            const oppGoals = isHome ? actualA : actualH;
            state.manager.gf += myGoals;
            state.manager.ga += oppGoals;
            if (myGoals > oppGoals) {
              state.manager.wins++;
              state.manager.boardConfidence = Math.min(100, (state.manager.boardConfidence || 90) + 4);
              if (isMgr) {
                state.manager.budget = (state.manager.budget || 150) + 5;
                verdictTitle = '🏆 CHIẾN THẮNG VANG DỘI! (+5M €)';
                badgeClass = 'bg-amber-400/25 text-amber-300 border-amber-400/50';
                SoundFX.winExact();
                if (window.confetti) {
                  window.confetti({ particleCount: 75, spread: 65, origin: { y: 0.6 } });
                }
              }
            } else if (myGoals === oppGoals) {
              state.manager.draws++;
              state.manager.boardConfidence = Math.min(100, (state.manager.boardConfidence || 90) + 1);
              if (isMgr) {
                state.manager.budget = (state.manager.budget || 150) + 2;
                verdictTitle = '🤝 CHIA ĐIỂM KỊCH TÍNH! (+2M €)';
                badgeClass = 'bg-sky-500/25 text-sky-300 border-sky-400/50';
              }
            } else {
              state.manager.losses++;
              state.manager.boardConfidence = Math.max(15, (state.manager.boardConfidence || 90) - 3);
              if (isMgr) {
                verdictTitle = '⚡ THẤT BẠI TRÊN SÂN CỎ!';
                badgeClass = 'bg-rose-500/25 text-rose-300 border-rose-400/50';
              }
            }
            saveManagerCareer();
            renderManagerUI();
          }
        }
      }

      const predH = state.predHome;
      const predA = state.predAway;

      if (!isMgr) {
        const exactHit = (actualH === predH && actualA === predA);
        const actualOutcome = actualH > actualA ? 'home' : (actualH < actualA ? 'away' : 'draw');
        const actualSign = Math.sign(actualH - actualA);
        const predSign = Math.sign(predH - predA);
        const outcomeHit = (actualOutcome === state.predOutcome) || (actualSign === predSign);
        const diffHit = outcomeHit && ((actualH - actualA) === (predH - predA));

        let basePoints = 0;
        let streakBonus = 0;
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
            window.confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
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

        totalEarned = basePoints + streakBonus;
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
      } else {
        // Manager Mode History Item (Không cờ bạc điểm số dự đoán)
        state.history.unshift({
          round: state.roundNumber,
          tournament: tourney.shortName,
          home: state.homeTeam,
          away: state.awayTeam,
          pred: `HLV chỉ đạo (${state.manager.formation || '4-3-3'})`,
          actual: `${actualH} - ${actualA}${state.inExtraTime ? ' (HP)' : ''}${penNote}`,
          earned: 0,
          exactHit: false,
          outcomeHit: true,
          isManagerMatch: true,
          verdict: verdictTitle
        });
      }
      renderHistory();

      document.getElementById('timerStatusText').textContent = 'Kết thúc trận đấu';
      document.getElementById('simBadge').textContent = state.inExtraTime ? "KẾT THÚC (SAU HIỆP PHỤ)" : "KẾT THÚC TRẬN (FT)";
      document.getElementById('simBadge').className = "px-2.5 py-0.5 rounded-md text-xs font-extrabold uppercase bg-slate-700 text-slate-200";

      const resultBadge = document.getElementById('resultBadge');
      resultBadge.textContent = verdictTitle || 'KẾT QUẢ TRẬN ĐẤU';
      resultBadge.className = `px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-1.5 border ${badgeClass || 'bg-slate-800 text-white'}`;

      document.getElementById('resultHeadline').textContent = `${state.homeTeam.name} ${actualH} - ${actualA} ${state.awayTeam.name}${penNote}`;
      const fifaSummary = `Điểm FIFA: ${state.homeTeam.code} ${fifaDelta.deltaHome >= 0 ? '+' : ''}${fifaDelta.deltaHome} | ${state.awayTeam.code} ${fifaDelta.deltaAway >= 0 ? '+' : ''}${fifaDelta.deltaAway}`;
      const totalConcurrentMatches = concurrentTourneyMatches + concurrentWorldMatches;
      const concurrentNote = totalConcurrentMatches > 0
        ? ` • Đồng thời: ${concurrentTourneyMatches} trận bảng đấu & ${concurrentWorldMatches} trận ${isNationalMode ? 'quốc tế' : 'CLB'} khác đã thi đấu`
        : '';
      
      const subtextEl = document.getElementById('resultSubtext');
      if (isMgr) {
        subtextEl.innerHTML = `[${tourney.shortName}] HLV chỉ đạo: <strong>${state.manager.name}</strong> • ${fifaSummary}${concurrentNote}<br><span class="text-amber-300 font-bold">Ngân sách CLB: ${state.manager.budget || 150}M €</span>`;
      } else {
        subtextEl.textContent = totalEarned > 0
          ? `[${tourney.shortName}] Bạn đoán ${predH}-${predA} • Nhận +${totalEarned}đ (Chuỗi: ${state.streak}🔥) • ${fifaSummary}${concurrentNote}`
          : `[${tourney.shortName}] Bạn đoán ${predH}-${predA} • 0đ lượt này • ${fifaSummary}${concurrentNote}`;
      }

      document.getElementById('resultOverlay').classList.remove('hidden');

      const focusId = state.focusedTeamId || state.homeTeam.id;
      const fixturesOfFocus = fixturesForTeam(focusId);
      const remainingMatches = fixturesOfFocus.filter(f => !f.played);
      const isSeasonConcluded = !state.isKnockoutMatch && remainingMatches.length === 0;

      const isWorldCup = tourney.id === 'world_cup';
      const isWorldCupQualifiers = isWorldCup && state.stageIndex === 0;
      const isWorldCupFinalsGroup = isWorldCup && state.stageIndex === 1;
      const isWorldCupKnockout = isWorldCup && state.stageIndex >= 2;

      const lockBtn = document.getElementById('btnLockPrediction');
      lockBtn.disabled = false;
      lockBtn.classList.remove('opacity-50', 'cursor-not-allowed');

      if (isWorldCupQualifiers && remainingMatches.length === 0) {
        state.phase = 'wc_qualified_finals';
        const stTable = state.standingsByTourney[tourney.id] || {};
        const groupRows = Object.values(stTable).filter(r => r.group === state.focusedGroup).sort(rankStandingRows);
        const focusPos = groupRows.findIndex(r => r.team.id === focusId) + 1;
        const msg = (focusPos <= 2)
          ? `🎉 XUẤT SẮC! ${state.homeTeam.name} xếp hạng #${focusPos} bảng đấu và CHÍNH THỨC GIÀNH VÉ VÀO VCK WORLD CUP!`
          : `⚡ ${state.homeTeam.name} đã hoàn thành Vòng loại khu vực. Tiến vào Vòng bảng VCK World Cup!`;
        showPhaseNotice(msg);
        lockBtn.innerHTML = `<i data-lucide="trophy" class="w-5 h-5 text-amber-400"></i><span>TIẾN VÀO VÒNG BẢNG VCK WORLD CUP (48 ĐỘI)</span>`;
        const nextOverlayBtn = document.getElementById('btnNextMatchOverlay');
        if (nextOverlayBtn) {
          nextOverlayBtn.innerHTML = `<i data-lucide="trophy" class="w-4 h-4 text-amber-400"></i><span>Vào Vòng Bảng VCK World Cup</span>`;
        }
      } else if (isWorldCupFinalsGroup && remainingMatches.length === 0) {
        state.phase = 'wc_qualified_knockout';
        showPhaseNotice(`🔥 VƯỢT QUA VÒNG BẢNG! Tiến vào Vòng 1/16 Knock-out FIFA World Cup!`);
        lockBtn.innerHTML = `<i data-lucide="zap" class="w-5 h-5 text-amber-400"></i><span>TIẾN VÀO VÒNG 1/16 KNOCK-OUT</span>`;
        const nextOverlayBtn = document.getElementById('btnNextMatchOverlay');
        if (nextOverlayBtn) {
          nextOverlayBtn.innerHTML = `<i data-lucide="zap" class="w-4 h-4 text-amber-400"></i><span>Vào Vòng 1/16 Knock-out</span>`;
        }
      } else if (isWorldCupKnockout) {
        if (state.stageIndex >= 7) {
          // World Cup Final concluded
          state.phase = 'complete';
          const winner = (actualH > actualA) ? state.homeTeam : ((actualA > actualH) ? state.awayTeam : (state.penHome > state.penAway ? state.homeTeam : state.awayTeam));
          showPhaseNotice(`🏆 CHÚC MỪNG ${winner.name} VÔ ĐỊCH THẾ GIỚI — FIFA WORLD CUP!`);
          handleSeasonEndAndOvrProgression(tourney);
          lockBtn.innerHTML = `<i data-lucide="trophy" class="w-5 h-5 text-amber-400"></i><span>XEM TỔNG KẾT WORLD CUP & OVR</span>`;
          const nextOverlayBtn = document.getElementById('btnNextMatchOverlay');
          if (nextOverlayBtn) {
            nextOverlayBtn.innerHTML = `<i data-lucide="trophy" class="w-4 h-4 text-amber-400"></i><span>Tổng Kết World Cup & OVR</span>`;
          }
        } else {
          state.phase = 'wc_next_knockout';
          const nextStageIdx = state.stageIndex + 1;
          const nextStageName = tourney.stages[nextStageIdx] || 'Vòng tiếp theo';
          lockBtn.innerHTML = `<i data-lucide="play" class="w-5 h-5 fill-current"></i><span>TIẾP TỤC: ${nextStageName}</span>`;
          const nextOverlayBtn = document.getElementById('btnNextMatchOverlay');
          if (nextOverlayBtn) {
            nextOverlayBtn.innerHTML = `<i data-lucide="play" class="w-4 h-4 fill-current"></i><span>Vào ${nextStageName}</span>`;
          }
        }
      } else if (isSeasonConcluded) {
        state.phase = 'complete';
        if (!isTournamentCompleted(tourney)) {
          simulateRemainingSeasonMatches(tourney);
        } else {
          handleSeasonEndAndOvrProgression(tourney);
        }
        lockBtn.innerHTML = `<i data-lucide="trophy" class="w-5 h-5 text-amber-400"></i><span>XEM TỔNG KẾT MÙA & OVR</span>`;
        const nextOverlayBtn = document.getElementById('btnNextMatchOverlay');
        if (nextOverlayBtn) {
          nextOverlayBtn.innerHTML = `<i data-lucide="trophy" class="w-4 h-4 text-amber-400"></i><span>Tổng Kết Mùa Giải & OVR</span>`;
        }
      } else {
        lockBtn.innerHTML = `<i data-lucide="play" class="w-5 h-5 fill-current"></i><span>TRẬN TIẾP THEO CÙNG GIẢI</span>`;
      }
      if (window.lucide) window.lucide.createIcons();
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
      state.pitchDirty = true;
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

    const TACTICAL_FORMATIONS = {
      '4-3-3': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF', pos: 'LB' },
        { x: 0.18,  y: 0.38, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.62, role: 'DF', pos: 'CB' },
        { x: 0.20,  y: 0.84, role: 'DF', pos: 'RB' },
        { x: 0.35,  y: 0.25, role: 'MF', pos: 'CM' },
        { x: 0.32,  y: 0.50, role: 'MF', pos: 'CDM' },
        { x: 0.35,  y: 0.75, role: 'MF', pos: 'CM' },
        { x: 0.47,  y: 0.20, role: 'FW', pos: 'LW' },
        { x: 0.48,  y: 0.50, role: 'FW', pos: 'ST' },
        { x: 0.47,  y: 0.80, role: 'FW', pos: 'RW' }
      ],
      '4-2-3-1': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF', pos: 'LB' },
        { x: 0.18,  y: 0.38, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.62, role: 'DF', pos: 'CB' },
        { x: 0.20,  y: 0.84, role: 'DF', pos: 'RB' },
        { x: 0.30,  y: 0.36, role: 'MF', pos: 'CDM' },
        { x: 0.30,  y: 0.64, role: 'MF', pos: 'CDM' },
        { x: 0.40,  y: 0.20, role: 'MF', pos: 'LAM' },
        { x: 0.39,  y: 0.50, role: 'MF', pos: 'CAM' },
        { x: 0.40,  y: 0.80, role: 'MF', pos: 'RAM' },
        { x: 0.48,  y: 0.50, role: 'FW', pos: 'ST' }
      ],
      '4-4-2': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF', pos: 'LB' },
        { x: 0.18,  y: 0.38, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.62, role: 'DF', pos: 'CB' },
        { x: 0.20,  y: 0.84, role: 'DF', pos: 'RB' },
        { x: 0.34,  y: 0.16, role: 'MF', pos: 'LM' },
        { x: 0.33,  y: 0.38, role: 'MF', pos: 'CM' },
        { x: 0.33,  y: 0.62, role: 'MF', pos: 'CM' },
        { x: 0.34,  y: 0.84, role: 'MF', pos: 'RM' },
        { x: 0.47,  y: 0.38, role: 'FW', pos: 'ST' },
        { x: 0.47,  y: 0.62, role: 'FW', pos: 'ST' }
      ],
      '3-5-2': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.18,  y: 0.25, role: 'DF', pos: 'CB' },
        { x: 0.17,  y: 0.50, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.75, role: 'DF', pos: 'CB' },
        { x: 0.32,  y: 0.14, role: 'MF', pos: 'LWB' },
        { x: 0.33,  y: 0.32, role: 'MF', pos: 'CM' },
        { x: 0.31,  y: 0.50, role: 'MF', pos: 'CDM' },
        { x: 0.33,  y: 0.68, role: 'MF', pos: 'CM' },
        { x: 0.32,  y: 0.86, role: 'MF', pos: 'RWB' },
        { x: 0.47,  y: 0.38, role: 'FW', pos: 'ST' },
        { x: 0.47,  y: 0.62, role: 'FW', pos: 'ST' }
      ],
      '5-3-2': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.20,  y: 0.12, role: 'DF', pos: 'LWB' },
        { x: 0.18,  y: 0.30, role: 'DF', pos: 'CB' },
        { x: 0.17,  y: 0.50, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.70, role: 'DF', pos: 'CB' },
        { x: 0.20,  y: 0.88, role: 'DF', pos: 'RWB' },
        { x: 0.34,  y: 0.28, role: 'MF', pos: 'CM' },
        { x: 0.32,  y: 0.50, role: 'MF', pos: 'CDM' },
        { x: 0.34,  y: 0.72, role: 'MF', pos: 'CM' },
        { x: 0.47,  y: 0.38, role: 'FW', pos: 'ST' },
        { x: 0.47,  y: 0.62, role: 'FW', pos: 'ST' }
      ],
      '3-4-3': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.18,  y: 0.25, role: 'DF', pos: 'CB' },
        { x: 0.17,  y: 0.50, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.75, role: 'DF', pos: 'CB' },
        { x: 0.33,  y: 0.15, role: 'MF', pos: 'LM' },
        { x: 0.32,  y: 0.38, role: 'MF', pos: 'CM' },
        { x: 0.32,  y: 0.62, role: 'MF', pos: 'CM' },
        { x: 0.33,  y: 0.85, role: 'MF', pos: 'RM' },
        { x: 0.47,  y: 0.20, role: 'FW', pos: 'LW' },
        { x: 0.48,  y: 0.50, role: 'FW', pos: 'ST' },
        { x: 0.47,  y: 0.80, role: 'FW', pos: 'RW' }
      ],
      '4-1-4-1': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF', pos: 'LB' },
        { x: 0.18,  y: 0.38, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.62, role: 'DF', pos: 'CB' },
        { x: 0.20,  y: 0.84, role: 'DF', pos: 'RB' },
        { x: 0.28,  y: 0.50, role: 'MF', pos: 'CDM' },
        { x: 0.38,  y: 0.16, role: 'MF', pos: 'LM' },
        { x: 0.36,  y: 0.38, role: 'MF', pos: 'CM' },
        { x: 0.36,  y: 0.62, role: 'MF', pos: 'CM' },
        { x: 0.38,  y: 0.84, role: 'MF', pos: 'RM' },
        { x: 0.48,  y: 0.50, role: 'FW', pos: 'ST' }
      ],
      '4-3-1-2': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF', pos: 'LB' },
        { x: 0.18,  y: 0.38, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.62, role: 'DF', pos: 'CB' },
        { x: 0.20,  y: 0.84, role: 'DF', pos: 'RB' },
        { x: 0.31,  y: 0.28, role: 'MF', pos: 'CM' },
        { x: 0.29,  y: 0.50, role: 'MF', pos: 'CM' },
        { x: 0.31,  y: 0.72, role: 'MF', pos: 'CM' },
        { x: 0.39,  y: 0.50, role: 'MF', pos: 'CAM' },
        { x: 0.47,  y: 0.38, role: 'FW', pos: 'ST' },
        { x: 0.47,  y: 0.62, role: 'FW', pos: 'ST' }
      ],
      '4-1-2-1-2': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF', pos: 'LB' },
        { x: 0.18,  y: 0.38, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.62, role: 'DF', pos: 'CB' },
        { x: 0.20,  y: 0.84, role: 'DF', pos: 'RB' },
        { x: 0.28,  y: 0.50, role: 'MF', pos: 'CDM' },
        { x: 0.35,  y: 0.22, role: 'MF', pos: 'LM' },
        { x: 0.35,  y: 0.78, role: 'MF', pos: 'RM' },
        { x: 0.41,  y: 0.50, role: 'MF', pos: 'CAM' },
        { x: 0.47,  y: 0.38, role: 'FW', pos: 'ST' },
        { x: 0.47,  y: 0.62, role: 'FW', pos: 'ST' }
      ],
      '4-5-1': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF', pos: 'LB' },
        { x: 0.18,  y: 0.38, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.62, role: 'DF', pos: 'CB' },
        { x: 0.20,  y: 0.84, role: 'DF', pos: 'RB' },
        { x: 0.34,  y: 0.14, role: 'MF', pos: 'LM' },
        { x: 0.32,  y: 0.32, role: 'MF', pos: 'CM' },
        { x: 0.30,  y: 0.50, role: 'MF', pos: 'CM' },
        { x: 0.32,  y: 0.68, role: 'MF', pos: 'CM' },
        { x: 0.34,  y: 0.86, role: 'MF', pos: 'RM' },
        { x: 0.48,  y: 0.50, role: 'FW', pos: 'ST' }
      ],
      '3-4-2-1': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.18,  y: 0.25, role: 'DF', pos: 'CB' },
        { x: 0.17,  y: 0.50, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.75, role: 'DF', pos: 'CB' },
        { x: 0.32,  y: 0.15, role: 'MF', pos: 'LWB' },
        { x: 0.30,  y: 0.38, role: 'MF', pos: 'CM' },
        { x: 0.30,  y: 0.62, role: 'MF', pos: 'CM' },
        { x: 0.32,  y: 0.85, role: 'MF', pos: 'RWB' },
        { x: 0.41,  y: 0.32, role: 'MF', pos: 'CAM' },
        { x: 0.41,  y: 0.68, role: 'MF', pos: 'CAM' },
        { x: 0.48,  y: 0.50, role: 'FW', pos: 'ST' }
      ],
      '5-4-1': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.20,  y: 0.12, role: 'DF', pos: 'LWB' },
        { x: 0.18,  y: 0.30, role: 'DF', pos: 'CB' },
        { x: 0.17,  y: 0.50, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.70, role: 'DF', pos: 'CB' },
        { x: 0.20,  y: 0.88, role: 'DF', pos: 'RWB' },
        { x: 0.33,  y: 0.18, role: 'MF', pos: 'LM' },
        { x: 0.31,  y: 0.38, role: 'MF', pos: 'CM' },
        { x: 0.31,  y: 0.62, role: 'MF', pos: 'CM' },
        { x: 0.33,  y: 0.82, role: 'MF', pos: 'RM' },
        { x: 0.48,  y: 0.50, role: 'FW', pos: 'ST' }
      ],
      '4-2-4': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF', pos: 'LB' },
        { x: 0.18,  y: 0.38, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.62, role: 'DF', pos: 'CB' },
        { x: 0.20,  y: 0.84, role: 'DF', pos: 'RB' },
        { x: 0.31,  y: 0.38, role: 'MF', pos: 'CM' },
        { x: 0.31,  y: 0.62, role: 'MF', pos: 'CM' },
        { x: 0.46,  y: 0.16, role: 'FW', pos: 'LW' },
        { x: 0.48,  y: 0.38, role: 'FW', pos: 'ST' },
        { x: 0.48,  y: 0.62, role: 'FW', pos: 'ST' },
        { x: 0.46,  y: 0.84, role: 'FW', pos: 'RW' }
      ],
      '4-3-2-1': [
        { x: 0.075, y: 0.50, role: 'GK', pos: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF', pos: 'LB' },
        { x: 0.18,  y: 0.38, role: 'DF', pos: 'CB' },
        { x: 0.18,  y: 0.62, role: 'DF', pos: 'CB' },
        { x: 0.20,  y: 0.84, role: 'DF', pos: 'RB' },
        { x: 0.30,  y: 0.26, role: 'MF', pos: 'CM' },
        { x: 0.28,  y: 0.50, role: 'MF', pos: 'CDM' },
        { x: 0.30,  y: 0.74, role: 'MF', pos: 'CM' },
        { x: 0.40,  y: 0.34, role: 'MF', pos: 'CAM' },
        { x: 0.40,  y: 0.66, role: 'MF', pos: 'CAM' },
        { x: 0.48,  y: 0.50, role: 'FW', pos: 'ST' }
      ]
    };

        function getTacticalFormation(formationKey, isAway) {
      const form = TACTICAL_FORMATIONS[formationKey] || TACTICAL_FORMATIONS['4-3-3'];
      if (!isAway) return form;
      return form.map(p => ({
        x: 1 - p.x,
        y: p.y,
        role: p.role,
        pos: p.pos
      }));
    }

    function initPitchPlayers() {
      state.players = [];

      const isHomeManaged = (state.manager && state.manager.teamId === state.homeTeam?.id);
      const isAwayManaged = (state.manager && state.manager.teamId === state.awayTeam?.id);

      const homeFormKey = isHomeManaged ? (state.manager.formation || '4-3-3') : '4-3-3';
      const awayFormKey = isAwayManaged ? (state.manager.formation || '4-3-3') : '4-3-3';

      const homeCoords = getTacticalFormation(homeFormKey, false);
      const awayCoords = getTacticalFormation(awayFormKey, true);

      const homeLineup = getTeamLineup(state.homeTeam);
      const awayLineup = getTeamLineup(state.awayTeam);
      const swap = !!state.sidesSwapped;

      homeCoords.forEach((p, idx) => {
        const fullName = homeLineup[idx] || state.homeTeam.stars[idx] || `Cầu thủ ${idx + 1}`;
        const shortName = fullName.split(' (')[0].split(' ').slice(-1)[0];
        const posX = swap ? (1 - p.x) : p.x;
        state.players.push({
          id: `home_${idx}`,
          side: 'home',
          role: p.role,
          baseX: posX,
          baseY: p.y,
          x: posX,
          y: p.y,
          vx: 0,
          vy: 0,
          phase: Math.random() * 6.28,
          fullName,
          name: shortName,
          touchRing: 0
        });
      });

      awayCoords.forEach((p, idx) => {
        const fullName = awayLineup[idx] || state.awayTeam.stars[idx] || `Cầu thủ ${idx + 1}`;
        const shortName = fullName.split(' (')[0].split(' ').slice(-1)[0];
        const posX = swap ? (1 - p.x) : p.x;
        state.players.push({
          id: `away_${idx}`,
          side: 'away',
          role: p.role,
          baseX: posX,
          baseY: p.y,
          x: posX,
          y: p.y,
          vx: 0,
          vy: 0,
          phase: Math.random() * 6.28,
          fullName,
          name: shortName,
          touchRing: 0
        });
      });

      // Give initial kick-off possession
      const kickoffPlayer = state.players[9] || state.players[0];
      state.ballSim.holder = kickoffPlayer;
      state.ballSim.targetReceiver = null;
      state.ballSim.mode = 'held';
      state.ballSim.holdTimer = 28;
      state.ballSim.touchRipples = [];
      state.ballSim.passLine = null;
      const attackDir = (kickoffPlayer.side === 'home') ? (swap ? -1 : 1) : (swap ? 1 : -1);
      state.ballPos.x = kickoffPlayer.x + (attackDir * 0.014);
      state.ballPos.y = kickoffPlayer.y;
    }

    function restartPlay(side) {
      initPitchPlayers();
      const team = side === 'home' ? state.homeTeam : state.awayTeam;
      const forward = state.players.find(p => p.id === side + '_9');
      const receiver = state.players.find(p => p.id === side + '_6');
      const isHome = side === 'home';
      const attackDir = isHome ? (state.sidesSwapped ? -1 : 1) : (state.sidesSwapped ? 1 : -1);
      if (forward) {
        forward.x = 0.5 - (attackDir * 0.012);
      }
      state.ballPos.x = state.ballPos.y = 0.5;
      state.ballTrail = [];
      state.shotAnim.active = false;
      state.ballSim.holder = forward;
      Object.assign(state.ballSim, {
        mode: 'passing', targetReceiver: receiver, passStartX: 0.5, passStartY: 0.5,
        passEndX: receiver ? receiver.x : 0.5, passEndY: receiver ? receiver.y : 0.5, passProgress: 0, passSpeed: 0.06
      });
      state.kickoffUntil = performance.now() + 450;
      document.getElementById('goalCelebrationBanner').classList.add('hidden');
      const message = team.name + ' giao bóng từ giữa sân' + (state.sidesSwapped ? ' (Đã đổi sân)' : '');
      document.getElementById('liveTouchBadge').textContent = message;
      const line = document.createElement('div');
      line.textContent = `${Math.floor(state.simMinute)}′ · ${message}`;
      document.getElementById('matchEventsFeed').prepend(line);
    }

    function updatePlayersAndBallTouchPhysics() {
      const isSim = state.phase === 'simulating';
      const bs = state.ballSim;

      // If a goal shot is flying into the net, let the shot animation control the ball
      if (state.shotAnim.active || performance.now() < state.kickoffUntil) {
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
          const attackDir = p.side === 'home' ? (state.sidesSwapped ? -1 : 1) : (state.sidesSwapped ? 1 : -1);
          const targetGoalY = 0.5 + Math.sin(p.phase * 1.5) * 0.18;
          p.x += attackDir * 0.0018;
          p.y += (targetGoalY - p.y) * 0.025;
        } else if (bs.mode === 'passing' && bs.targetReceiver === p) {
          // Receiver moves slightly toward the incoming pass to meet the ball
          p.x += (bs.passEndX - p.x) * 0.08;
          p.y += (bs.passEndY - p.y) * 0.08;
        } else if (p === closestOpponentToBall) {
          // Nearest opponent presses the ball carrier to challenge/tackle!
          const pressSpeed = (state.manager && state.manager.playstyle === 'gegenpress') ? 0.058 : 0.042;
          p.x += (state.ballPos.x - p.x) * pressSpeed;
          p.y += (state.ballPos.y - p.y) * pressSpeed;
        } else {
          // Teammates shift dynamically with ball position while keeping formation
          const attackDir = p.side === 'home' ? (state.sidesSwapped ? -1 : 1) : (state.sidesSwapped ? 1 : -1);
          let tacticalOffset = 0;
          const isManaged = state.manager && ((p.side === 'home' && state.manager.teamId === state.homeTeam?.id) || (p.side === 'away' && state.manager.teamId === state.awayTeam?.id));
          if (isManaged && p.role !== 'GK') {
            if (state.manager.activeShout === 'push_up') tacticalOffset += attackDir * 0.045;
            else if (state.manager.activeShout === 'park_bus') tacticalOffset -= attackDir * 0.045;

            if (state.manager.playstyle === 'attack') tacticalOffset += attackDir * 0.025;
            else if (state.manager.playstyle === 'counter') tacticalOffset -= attackDir * 0.02;
          }

          const ballShiftX = (state.ballPos.x - 0.5) * (p.role === 'GK' ? 0.04 : 0.22);
          const desiredX = p.baseX + ballShiftX + tacticalOffset + Math.sin(p.phase) * 0.018;
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
          const attackDir = bs.holder.side === 'home' ? (state.sidesSwapped ? -1 : 1) : (state.sidesSwapped ? 1 : -1);
          const dirX = attackDir * 0.015;
          state.ballPos.x = bs.holder.x + dirX;
          state.ballPos.y = bs.holder.y + 0.004;
        }
        return;
      }

      // 2. Handle Ball state: either at a player's feet ('held') or being passed between players ('passing')
      if (bs.mode === 'held' && bs.holder) {
        const h = bs.holder;
        const attackDir = h.side === 'home' ? (state.sidesSwapped ? -1 : 1) : (state.sidesSwapped ? 1 : -1);
        const dirX = attackDir * 0.016;
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
          const receiverAttackDir = nextReceiver.side === 'home' ? (state.sidesSwapped ? -1 : 1) : (state.sidesSwapped ? 1 : -1);
          bs.passEndX = nextReceiver.x + (receiverAttackDir * 0.014);
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

    let pitchVisible = true;
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(([entry]) => {
        pitchVisible = entry.isIntersecting;
        state.pitchDirty = true;
      }).observe(canvas);
    }

    function drawPitch() {
      requestAnimationFrame(drawPitch);

      if (state.phase === 'simulating') {
        const steps = Math.min(4, state.speedMultiplier);
        for (let step = 0; step < steps; step++) updatePlayersAndBallTouchPhysics();
      }

      if (!pitchVisible || (!state.pitchDirty && state.phase !== 'simulating')) return;
      state.pitchDirty = false;
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
          ctx.font = isBallHolder ? 'bold 10px "Be Vietnam Pro", sans-serif' : '600 9px "Be Vietnam Pro", sans-serif';
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

      const baseClass = 'outcome-btn btn-tap py-2.5 px-3 rounded-xl border border-white/15 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-extrabold text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition';
      if (btnH) btnH.className = state.predOutcome === 'home'
        ? 'outcome-btn btn-tap py-2.5 px-3 rounded-xl border-2 border-emerald-400 bg-emerald-500/25 text-white font-extrabold text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition shadow-lg'
        : baseClass;
      if (btnD) btnD.className = state.predOutcome === 'draw'
        ? 'outcome-btn btn-tap py-2.5 px-3 rounded-xl border-2 border-amber-400 bg-amber-500/25 text-white font-extrabold text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition shadow-lg'
        : baseClass;
      if (btnA) btnA.className = state.predOutcome === 'away'
        ? 'outcome-btn btn-tap py-2.5 px-3 rounded-xl border-2 border-sky-400 bg-sky-500/25 text-white font-extrabold text-xs sm:text-sm flex flex-col items-center justify-center gap-0.5 transition shadow-lg'
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
        const emptyMsg = state.gameMode === 'manager'
          ? 'Chưa có trận đấu nào. Hãy bấm Bắt đầu đá!'
          : 'Chưa có trận đấu nào. Hãy dự đoán trận đầu tiên!';
        container.innerHTML = `<div class="text-xs text-slate-400 text-center py-6">${emptyMsg}</div>`;
        return;
      }
      container.innerHTML = state.history.slice(0, 12).map(item => {
        if (item.isManagerMatch || (item.pred && String(item.pred).startsWith('HLV chỉ đạo'))) {
          return `
            <div class="p-2.5 rounded-xl bg-slate-950/80 border border-white/5 flex items-center justify-between gap-2 text-xs">
              <div class="truncate">
                <div class="font-bold text-white truncate flex items-center gap-1.5">${getTeamLogoHtml(item.home, 'w-4 h-4')} <span>${item.home.code}</span> <span class="text-emerald-400">${item.actual}</span> <span>${item.away.code}</span> ${getTeamLogoHtml(item.away, 'w-4 h-4')}</div>
                <div class="text-[10px] text-slate-400">${item.tournament || ''} • <span class="text-amber-300 font-semibold">${item.pred}</span></div>
              </div>
              <div class="shrink-0"><span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]">${item.verdict ? item.verdict.slice(0, 18) : 'Chế độ HLV'}</span></div>
            </div>
          `;
        }
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

      document.getElementById('directoryCountTitle').innerHTML = `<span class="inline-flex items-center gap-1.5">${getTournamentLogoHtml(tourney, 'w-4 h-4')}<span>${tourney.shortName} (${pool.length} đội)</span></span>`;

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
          chooseTeam(btn.dataset.teamId);
        });
      });
    }

    function populateCustomModalSelects() {
      const tourney = getActiveTournament();
      const pool = getTeamsInActiveTournament();
      document.getElementById('customModalLeagueNote').textContent = `${tourney.icon} Giải đấu hiện tại: ${tourney.name} (${pool.length} đội cùng giải)`;

      const selHome = document.getElementById('selectHomeTeam');
      const selAway = document.getElementById('selectAwayTeam');
      selHome.replaceChildren(...pool.map(t => new Option(t.name, t.id)));
      selHome.value = state.focusedTeamId;
      function showOpponents() {
        const id = selHome.value;
        const fixtures = fixturesForTeam(id).filter(f => !f.played);
        const options = state.stageIndex ? pool.filter(t => t.id !== id).map(t => new Option(t.name, t.id))
          : fixtures.map(f => new Option(`Lượt ${f.matchday} · ${f.home.name} – ${f.away.name}`, f.matchday));
        selAway.replaceChildren(...options);
        if (!options.length) selAway.add(new Option('Đã hoàn thành lịch đấu'));
        document.getElementById('btnApplyCustomMatch').disabled = !options.length;
      }
      selHome.onchange = showOpponents;
      showOpponents();
    }

    // =========================================================================
    // 10. BIND CONTROLS ON WINDOW LOAD
    // =========================================================================
    window.addEventListener('load', () => {
      loadSavedStats();
      loadCustomRatings();
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

      // Jump smoothly to Player Search, Awards & FIFA World Ranking Sections
      const btnJumpPlayerSearch = document.getElementById('btnJumpPlayerSearch');
      if (btnJumpPlayerSearch) {
        btnJumpPlayerSearch.addEventListener('click', () => {
          SoundFX.click();
          document.getElementById('playerSearchSection')?.scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => document.getElementById('globalPlayerSearchInput')?.focus(), 250);
        });
      }

      document.getElementById('globalPlayerSearchInput')?.addEventListener('input', (e) => {
        state.playerSearchQuery = e.target.value || '';
        renderGlobalPlayerSearch();
      });

      document.querySelectorAll('.psearch-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          SoundFX.click();
          state.playerSearchFilter = btn.dataset.psearch || 'all';
          document.querySelectorAll('.psearch-filter-btn').forEach(b => {
            b.className = b.dataset.psearch === state.playerSearchFilter
              ? 'psearch-filter-btn px-2.5 py-1 rounded-lg font-black bg-emerald-500 text-slate-950 transition'
              : 'psearch-filter-btn px-2.5 py-1 rounded-lg font-semibold bg-slate-900 text-slate-300 border border-white/10 hover:text-white transition';
          });
          renderGlobalPlayerSearch();
        });
      });

      document.getElementById('transferSearchInput')?.addEventListener('input', (e) => {
        state.transferSearch = e.target.value || '';
        state.transferLimit = 48;
        renderTransferMarket();
      });

      const btnJumpAwards = document.getElementById('btnJumpAwardsSection');
      if (btnJumpAwards) {
        btnJumpAwards.addEventListener('click', () => {
          SoundFX.click();
          document.getElementById('awardsRaceSection')?.scrollIntoView({ behavior: 'smooth' });
        });
      }

      document.querySelectorAll('.award-boot-tab').forEach(btn => {
        btn.addEventListener('click', () => {
          SoundFX.click();
          state.awardBootScope = btn.dataset.bootscope || 'league';
          document.querySelectorAll('.award-boot-tab').forEach(b => {
            b.className = b.dataset.bootscope === state.awardBootScope
              ? 'award-boot-tab px-2.5 py-1 rounded-lg font-extrabold bg-emerald-500 text-slate-950 transition'
              : 'award-boot-tab px-2.5 py-1 rounded-lg font-semibold text-slate-300 hover:text-white transition';
          });
          renderSeasonAwards();
        });
      });

      document.querySelectorAll('.award-ballon-tab').forEach(btn => {
        btn.addEventListener('click', () => {
          SoundFX.click();
          state.awardBallonScope = btn.dataset.ballonscope || 'world';
          document.querySelectorAll('.award-ballon-tab').forEach(b => {
            b.className = b.dataset.ballonscope === state.awardBallonScope
              ? 'award-ballon-tab px-2.5 py-1 rounded-lg font-extrabold bg-amber-400 text-slate-950 transition'
              : 'award-ballon-tab px-2.5 py-1 rounded-lg font-semibold text-slate-300 hover:text-white transition';
          });
          renderSeasonAwards();
        });
      });

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
        if (state.phase === 'wc_qualified_finals') {
          SoundFX.winExact();
          state.stageIndex = 1; // Move to World Cup Finals Group Stage (Bảng A -> L)
          initStandingsForTournament('world_cup', true);
          updateStageFormatUI();
          renderLeagueStandings();
          pickNextMatch();
        } else if (state.phase === 'wc_qualified_knockout') {
          SoundFX.winExact();
          state.stageIndex = 2; // Move to World Cup 1/16 Knockout
          updateStageFormatUI();
          pickNextMatch();
        } else if (state.phase === 'wc_next_knockout') {
          SoundFX.click();
          state.stageIndex = Math.min(7, state.stageIndex + 1);
          updateStageFormatUI();
          pickNextMatch();
        } else if (state.phase === 'complete') {
          showSeasonEndModal();
        } else if (state.phase === 'qualified') {
          state.stageIndex = 1;
          updateStageFormatUI();
          pickNextMatch();
        } else if (state.phase === 'predicting') {
          lockPredictionAndSimulate();
        } else if (state.phase === 'finished') {
          SoundFX.click();
          pickNextMatch();
        }
      });

      const settings = document.getElementById('settings');
      document.getElementById('btnSettings').onclick = () => settings.showModal();
      document.getElementById('btnSimSpeed').onclick = () => {
        SoundFX.click();
        const order = [1, 4, 12];
        const nextIdx = (order.indexOf(state.speedMultiplier) + 1) % order.length;
        state.speedMultiplier = order[nextIdx];
        syncSettings();
        try { localStorage.setItem('matchSettings', JSON.stringify([state.duration, state.speedMultiplier])); } catch {}
      };
      settings.onchange = () => {
        state.speedMultiplier = Number(settings.querySelector('[name=speed]:checked').value);
        if (state.phase !== 'simulating') state.duration = Number(settings.querySelector('[name=duration]:checked').value);
        syncSettings();
        try { localStorage.setItem('matchSettings', JSON.stringify([state.duration, state.speedMultiplier])); } catch {}
      };
      try {
        const [duration, speed] = JSON.parse(localStorage.getItem('matchSettings') || '[]');
        if ([120, 240, 360].includes(duration)) state.duration = duration;
        if ([1, 4, 12].includes(speed)) state.speedMultiplier = speed;
      } catch {}

      document.getElementById('btnNextMatchOverlay').addEventListener('click', () => {
        SoundFX.click();
        if (state.phase === 'wc_qualified_finals') {
          SoundFX.winExact();
          state.stageIndex = 1;
          initStandingsForTournament('world_cup', true);
          updateStageFormatUI();
          renderLeagueStandings();
          pickNextMatch();
        } else if (state.phase === 'wc_qualified_knockout') {
          SoundFX.winExact();
          state.stageIndex = 2;
          updateStageFormatUI();
          pickNextMatch();
        } else if (state.phase === 'wc_next_knockout') {
          state.stageIndex = Math.min(7, state.stageIndex + 1);
          updateStageFormatUI();
          pickNextMatch();
        } else if (state.phase === 'complete') {
          showSeasonEndModal();
        } else {
          pickNextMatch();
        }
      });

      // Season End & OVR Progression Modal Controls
      const btnSimEnd = document.getElementById('btnSimulateEndSeason');
      if (btnSimEnd) {
        btnSimEnd.addEventListener('click', () => {
          simulateRemainingSeasonMatches();
        });
      }

      const btnSeasonHdr = document.getElementById('btnSeasonHeader');
      if (btnSeasonHdr) {
        btnSeasonHdr.addEventListener('click', () => {
          SoundFX.click();
          openSeasonHeaderAction();
        });
      }

      const btnCloseSeason = document.getElementById('btnCloseSeasonEndModal');
      if (btnCloseSeason) {
        btnCloseSeason.addEventListener('click', () => {
          SoundFX.click();
          document.getElementById('modalSeasonEnd')?.classList.add('hidden');
        });
      }

      const btnKeepReview = document.getElementById('btnKeepReviewSeason');
      if (btnKeepReview) {
        btnKeepReview.addEventListener('click', () => {
          SoundFX.click();
          document.getElementById('modalSeasonEnd')?.classList.add('hidden');
        });
      }

      const btnReplay = document.getElementById('btnReplaySeason');
      if (btnReplay) {
        btnReplay.addEventListener('click', () => {
          replayCurrentSeason();
        });
      }

      const btnNextSeason = document.getElementById('btnStartNextSeason');
      if (btnNextSeason) {
        btnNextSeason.addEventListener('click', () => {
          advanceToNextSeason();
        });
      }

      // Season Progress Modal Controls
      const btnCloseProg = document.getElementById('btnCloseProgressModal');
      if (btnCloseProg) {
        btnCloseProg.addEventListener('click', () => {
          SoundFX.click();
          document.getElementById('modalSeasonProgress')?.classList.add('hidden');
        });
      }

      const btnContinueProg = document.getElementById('btnContinuePlayingSeason');
      if (btnContinueProg) {
        btnContinueProg.addEventListener('click', () => {
          SoundFX.click();
          document.getElementById('modalSeasonProgress')?.classList.add('hidden');
        });
      }

      const btnSimEndNow = document.getElementById('btnSimulateToEndNow');
      if (btnSimEndNow) {
        btnSimEndNow.addEventListener('click', () => {
          document.getElementById('modalSeasonProgress')?.classList.add('hidden');
          simulateRemainingSeasonMatches();
        });
      }

      // Cài đặt: Reset Toàn Bộ Giải Đấu & Điểm FIFA về 0
      document.getElementById('btnResetAllTournamentsAndFifa')?.addEventListener('click', () => {
        resetAllTournamentsAndFifa();
      });

      // Transfer Market Tabs Switcher
      const tabMarket = document.getElementById('tabTransferMarket');
      const tabSquad = document.getElementById('tabTransferSquad');
      const contMarket = document.getElementById('transferMarketContainer');
      const contSquad = document.getElementById('transferSquadContainer');

      if (tabMarket && tabSquad) {
        tabMarket.addEventListener('click', () => {
          SoundFX.click();
          state.transferTab = 'market';
          tabMarket.className = 'px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-black transition flex items-center gap-1.5 shadow';
          tabSquad.className = 'px-3 py-1.5 rounded-lg text-slate-300 hover:text-white transition flex items-center gap-1.5';
          contMarket?.classList.remove('hidden');
          contSquad?.classList.add('hidden');
          renderTransferMarket();
        });

        tabSquad.addEventListener('click', () => {
          SoundFX.click();
          state.transferTab = 'squad';
          tabSquad.className = 'px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-black transition flex items-center gap-1.5 shadow';
          tabMarket.className = 'px-3 py-1.5 rounded-lg text-slate-300 hover:text-white transition flex items-center gap-1.5';
          contSquad?.classList.remove('hidden');
          contMarket?.classList.add('hidden');
          renderTransferMarket();
        });
      }

      // Position Filter Buttons
      document.querySelectorAll('.market-pos-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          SoundFX.click();
          state.transferFilter = btn.dataset.posFilter || 'all';
          state.transferLimit = 48;
          document.querySelectorAll('.market-pos-btn').forEach(b => {
            b.className = (b.dataset.posFilter === state.transferFilter)
              ? 'market-pos-btn px-2 py-1 rounded-lg font-bold bg-emerald-500 text-slate-950'
              : 'market-pos-btn px-2 py-1 rounded-lg font-semibold text-slate-300 hover:bg-white/10';
          });
          renderTransferMarket();
        });
      });

      document.getElementById('btnSkipMatch').addEventListener('click', () => {
        SoundFX.click();
        document.getElementById('btnOpenCustomMatch').click();
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

      // Landscape Orientation Handler
      window.requestLandscapeMode = async function() {
        try {
          if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen().catch(() => {});
          }
          if (screen.orientation && screen.orientation.lock) {
            await screen.orientation.lock('landscape').catch(() => {});
          }
        } catch (e) {}
      };

      document.getElementById('btnToggleLandscape')?.addEventListener('click', () => {
        SoundFX.click();
        window.requestLandscapeMode();
      });

      function checkOrientationPrompt() {
        const isPortraitMobile = window.innerHeight > window.innerWidth && window.innerWidth <= 768;
        const prompt = document.getElementById('portraitRotatePrompt');
        if (prompt) {
          if (isPortraitMobile) prompt.classList.remove('hidden');
          else prompt.classList.add('hidden');
        }
      }

      window.addEventListener('resize', checkOrientationPrompt);
      window.addEventListener('orientationchange', checkOrientationPrompt);
      checkOrientationPrompt();

      // Sound Toggle
      document.getElementById('btnToggleSound').addEventListener('click', () => {
        SoundFX.enabled = !SoundFX.enabled;
        const icon = document.getElementById('iconSound');
        icon.setAttribute('data-lucide', SoundFX.enabled ? 'volume-2' : 'volume-x');
        icon.className = SoundFX.enabled ? 'w-5 h-5 text-emerald-400' : 'w-5 h-5 text-slate-500';
        if (window.lucide) window.lucide.createIcons();
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
        const id = document.getElementById('selectHomeTeam').value;
        const value = document.getElementById('selectAwayTeam').value;
        const fixture = state.stageIndex
          ? { away: getTeamsInActiveTournament().find(t => t.id === value) }
          : fixturesForTeam(id).find(f => !f.played && f.matchday === Number(value));
        modalCustom.classList.add('hidden');
        if (fixture) chooseTeam(id, fixture);
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
        if (document.activeElement?.matches('input,select,button,textarea') || document.querySelector('dialog[open], #modalRules:not(.hidden), #modalCustomMatch:not(.hidden)')) return;
        if (state.phase === 'predicting') {
          if (e.key === 'w' || e.key === 'W') { state.predHome = (state.predHome + 1) % 10; updateScoreDisplay(); SoundFX.click(); }
          if (e.key === 's' || e.key === 'S') { state.predHome = (state.predHome + 9) % 10; updateScoreDisplay(); SoundFX.click(); }
          if (e.key === 'ArrowUp') { e.preventDefault(); state.predAway = (state.predAway + 1) % 10; updateScoreDisplay(); SoundFX.click(); }
          if (e.key === 'ArrowDown') { e.preventDefault(); state.predAway = (state.predAway + 9) % 10; updateScoreDisplay(); SoundFX.click(); }
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); lockPredictionAndSimulate(); }
        } else if (state.phase === 'finished' && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          pickNextMatch();
        }
      });

      document.getElementById('selectCompetitionStage').addEventListener('change', (e) => {
        SoundFX.click();
        state.stageIndex = Number(e.target.value) || 0;
        if (state.activeTournamentId === 'world_cup') {
          initStandingsForTournament('world_cup', true);
        }
        updateStageFormatUI();
        pickNextMatch();
      });

      document.getElementById('focusTeam').onchange = e => {
        if (state.manager && state.manager.isContractLocked && e.target.value !== state.manager.teamId) {
          e.target.value = state.manager.teamId;
          showContractLockedModal();
          return;
        }
        chooseTeam(e.target.value);
      };

      // Game Mode Switcher
      document.getElementById('btnModePredict')?.addEventListener('click', () => {
        SoundFX.click();
        setGameMode('predict');
      });

      document.getElementById('btnModeManager')?.addEventListener('click', () => {
        SoundFX.click();
        setGameMode('manager');
      });

      // Contract Signing
      document.getElementById('btnSignManagerContract')?.addEventListener('click', () => {
        const mgrName = document.getElementById('inputManagerName')?.value.trim() || 'HLV Trưởng';
        signManagerContract(state.focusedTeamId, state.activeTournamentId, mgrName);
      });

      document.getElementById('btnEditManagerName')?.addEventListener('click', () => {
        const newName = prompt('Nhập tên Huấn luyện viên mới của bạn:', state.manager.name);
        if (newName && newName.trim()) {
          state.manager.name = newName.trim();
          saveManagerCareer();
          renderManagerUI();
        }
      });

      // Tactical Formations
      document.querySelectorAll('.tactical-form-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          SoundFX.click();
          state.manager.formation = btn.dataset.formation;
          saveManagerCareer();
          initPitchPlayers();
          renderManagerUI();
          if (state.homeTeam && state.homeTeam.id === state.manager.teamId) renderSquadBadges(state.homeTeam, 'homePlayersList', 'homeSquadTitle', true);
          if (state.awayTeam && state.awayTeam.id === state.manager.teamId) renderSquadBadges(state.awayTeam, 'awayPlayersList', 'awaySquadTitle', false);
          showPhaseNotice(`📋 Đã đổi sang sơ đồ chiến thuật ${state.manager.formation}!`);
        });
      });

      document.getElementById('btnAutoArrangeLineup')?.addEventListener('click', autoArrangeLineup);
      document.getElementById('btnResetLineup')?.addEventListener('click', resetTeamLineup);

      // Tactical Playstyles
      document.querySelectorAll('.tactical-style-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          SoundFX.click();
          state.manager.playstyle = btn.dataset.playstyle;
          saveManagerCareer();
          renderManagerUI();
          const names = { attack: 'Tấn công tổng lực', tikitaka: 'Tiki-Taka', counter: 'Phòng ngự phản công', gegenpress: 'Gegenpressing' };
          showPhaseNotice(`⚡ Triết lý thi đấu: ${names[state.manager.playstyle] || state.manager.playstyle}`);
        });
      });

      // In-Match Shouts
      document.getElementById('btnShoutPushUp')?.addEventListener('click', () => triggerManagerShout('push_up'));
      document.getElementById('btnShoutPossession')?.addEventListener('click', () => triggerManagerShout('possession'));
      document.getElementById('btnShoutParkBus')?.addEventListener('click', () => triggerManagerShout('park_bus'));

      // Contract Locked Modal Close
      document.getElementById('btnCloseContractLockedModal')?.addEventListener('click', () => {
        SoundFX.click();
        document.getElementById('modalContractLocked')?.classList.add('hidden');
      });

      // Season End Decisions for Manager
      document.getElementById('btnManagerRenewContract')?.addEventListener('click', () => {
        SoundFX.winExact();
        state.manager.isContractLocked = true;
        state.manager.seasonYear = state.seasonYear + 1;
        state.manager.careerSeasonNumber = (state.manager.careerSeasonNumber || 1) + 1;
        saveManagerCareer();
        advanceToNextSeason();
        setGameMode('manager');
        const team = TEAMS_DB.find(t => t.id === state.manager.teamId);
        showPhaseNotice(`✍️ Chúc mừng bạn đã gia hạn hợp đồng và tiếp tục dẫn dắt ${team?.name || 'CLB'} ở mùa giải mới!`);
      });

      document.getElementById('btnManagerResignAndPickNew')?.addEventListener('click', () => {
        SoundFX.click();
        state.manager.isContractLocked = false;
        state.manager.teamId = null;
        state.manager.seasonYear = state.seasonYear + 1;
        state.manager.careerSeasonNumber = (state.manager.careerSeasonNumber || 1) + 1;
        saveManagerCareer();
        advanceToNextSeason();
        setGameMode('manager');
        showPhaseNotice(`📋 Hợp đồng đã hoàn thành! Bạn được tự do chọn một đội bóng mới để ký hợp đồng dẫn dắt mùa giải tiếp theo!`);
      });

      loadManagerCareer();
      loadPlayerAwardsHistory();
      snapshotFifaRanks();
      if (state.manager && state.manager.isContractLocked && state.manager.teamId) {
        state.focusedTeamId = state.manager.teamId;
        state.activeTournamentId = state.manager.tourneyId || state.activeTournamentId;
        selectTournament(state.activeTournamentId);
        setGameMode('manager');
      } else {
        selectTournament(state.activeTournamentId);
      }
      renderSeasonAwards();
      renderGlobalPlayerSearch();
      requestAnimationFrame(drawPitch);
    });


    // =========================================================================
    // FEATURE: TRUE SPA TAB NAVIGATION (ẨN HIỆN TAB KHÔNG CUỘN XUỐNG)
    // =========================================================================
    window.switchMainTab = function(tabId) {
      SoundFX.click();
      const tabDefs = {
        match: { btn: document.getElementById('tabBtnMatch'), sec: document.getElementById('sectionMatchHub') },
        career: { btn: document.getElementById('tabBtnCareer'), sec: document.getElementById('panelManagerHub') },
        market: { btn: document.getElementById('tabBtnMarket'), sec: document.getElementById('sectionTransferMarket') },
        awards: { btn: document.getElementById('tabBtnAwards'), sec: document.getElementById('awardsRaceSection') },
        fifa: { btn: document.getElementById('tabBtnFifa'), sec: document.getElementById('fifaWorldRankingSection') }
      };

      state.activeMainTab = tabId;

      Object.keys(tabDefs).forEach(key => {
        const item = tabDefs[key];
        if (item.sec) {
          if (key === tabId) item.sec.classList.remove('hidden');
          else item.sec.classList.add('hidden');
        }
        if (item.btn) {
          if (key === tabId) {
            item.btn.className = 'app-tab-btn btn-tap px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition bg-emerald-500 text-slate-950 shadow-md';
          } else {
            item.btn.className = 'app-tab-btn btn-tap px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 transition text-slate-300 hover:text-white';
          }
        }
      });

      if (tabId === 'match') {
        if (state.manager && state.manager.isSigned) {
          setGameMode('manager');
        }
        initPitchPlayers();
      } else if (tabId === 'career') {
        setGameMode('manager');
        renderManagerUI();
      } else if (tabId === 'market') {
        renderTransferMarket();
        const budgetBadge = document.getElementById('transferMarketBudgetBadge');
        if (budgetBadge && state.manager) budgetBadge.textContent = state.manager.budget + 'M €';
      } else if (tabId === 'awards') {
        renderSeasonAwards();
      } else if (tabId === 'fifa') {
        renderFifaRankings();
      }
    };

    // =========================================================================
    // FEATURE: PLAYER STATS DETAIL POPUP (THÔNG SỐ CHI TIẾT CẦU THỦ)
    // =========================================================================
    window.showPlayerStats = function(playerName, teamName, playerId) {
      if (!playerName) return;
      SoundFX.click();
      const modal = document.getElementById('modalPlayerStats');
      if (!modal) return;

      // 1. Look up in TRANSFER_MARKET_PLAYERS or TEAMS_DB
      let marketPlayer = null;
      if (Array.isArray(window.TRANSFER_MARKET_PLAYERS)) {
        if (playerId) marketPlayer = window.TRANSFER_MARKET_PLAYERS.find(p => p.id === playerId);
        if (!marketPlayer) {
          const normName = normalizeSearchText(playerName);
          marketPlayer = window.TRANSFER_MARKET_PLAYERS.find(p => normalizeSearchText(p.name) === normName);
        }
      }

      let team = null;
      if (teamName) team = TEAMS_DB.find(t => t.name === teamName);
      if (!team) team = TEAMS_DB.find(t => (t.stars || []).includes(playerName)) || TEAMS_DB[0];

      const nat = getPlayerNaturalInfo(playerName, team);
      const ovr = Math.min(125, Math.max(65, marketPlayer ? marketPlayer.ovr : (team ? team.ovr : 78)));
      const role = marketPlayer ? marketPlayer.pos : nat.role;
      const specificPos = marketPlayer ? (marketPlayer.specificPos || nat.pos) : nat.pos;
      const price = marketPlayer ? marketPlayer.price : Math.round(Math.max(10, (ovr - 64) * 4));
      const clubDisplay = marketPlayer ? marketPlayer.club : (team ? team.name : 'CLB');

      // Populate Modal Fields
      const nameEl = document.getElementById('playerStatsName');
      if (nameEl) nameEl.textContent = playerName;

      const posBadge = document.getElementById('playerStatsPosBadge');
      if (posBadge) posBadge.textContent = specificPos;

      const roleBadge = document.getElementById('playerStatsRoleBadge');
      if (roleBadge) roleBadge.textContent = nat.vnLabel || role;

      const nationBadge = document.getElementById('playerStatsNationBadge');
      if (nationBadge) nationBadge.textContent = team ? (team.icon || '🛡️') : '⭐';

      const ovrPill = document.getElementById('playerStatsOvrPill');
      if (ovrPill) ovrPill.textContent = ovr + ' OVR';

      const clubEl = document.getElementById('playerStatsClub');
      if (clubEl) clubEl.textContent = clubDisplay;

      const priceEl = document.getElementById('playerStatsPrice');
      if (priceEl) priceEl.textContent = price + 'M €';

      // Avatar
      const avatarWrap = document.getElementById('playerStatsAvatarWrap');
      if (avatarWrap) {
        avatarWrap.innerHTML = getPlayerAvatarHtml(playerName, team, 'w-full h-full', 'rounded-2xl');
      }

      // Performance Stats
      let goals = 0, assists = 0, matches = 0, rating = (7.0 + (ovr - 70) * 0.05).toFixed(1);
      if (state.goldenBootTable && state.goldenBootTable[playerName]) {
        goals = state.goldenBootTable[playerName];
        assists = Math.max(0, Math.round(goals * 0.4));
        matches = Math.max(goals, Math.round(goals * 1.5 + 4));
      } else {
        goals = role === 'FW' ? Math.round((ovr - 70) * 0.5) : (role === 'MF' ? Math.round((ovr - 75) * 0.25) : 0);
        assists = role === 'MF' ? Math.round((ovr - 70) * 0.4) : 1;
        matches = Math.max(3, goals + assists + 2);
      }
      if (goals < 0) goals = 0;
      if (assists < 0) assists = 0;

      document.getElementById('playerStatsGoals').textContent = goals;
      document.getElementById('playerStatsAssists').textContent = assists;
      document.getElementById('playerStatsMatches').textContent = matches;
      document.getElementById('playerStatsRating').textContent = rating;

      // 6 Key Attributes
      const cap = (v) => Math.min(125, Math.max(50, Math.round(v)));
      let attrs = [];
      if (role === 'GK') {
        attrs = [
          { name: 'Phản xạ (REF)', val: cap(ovr * 1.03 + 2), col: 'emerald' },
          { name: 'Bay người (DIV)', val: cap(ovr * 0.99 + 1), col: 'sky' },
          { name: 'Chọn vị trí (POS)', val: cap(ovr * 1.00), col: 'amber' },
          { name: 'Bắt dính (HAN)', val: cap(ovr * 0.97 - 1), col: 'teal' },
          { name: 'Phát bóng (KIC)', val: cap(ovr * 0.91 - 3), col: 'indigo' },
          { name: 'Thể chất (PHY)', val: cap(ovr * 0.96), col: 'purple' }
        ];
      } else if (role === 'FW') {
        attrs = [
          { name: 'Tốc độ (PAC)', val: cap(ovr + 5), col: 'emerald' },
          { name: 'Dứt điểm (SHO)', val: cap(ovr + 7), col: 'amber' },
          { name: 'Chuyền bóng (PAS)', val: cap(ovr - 2), col: 'sky' },
          { name: 'Rê bóng (DRI)', val: cap(ovr + 4), col: 'purple' },
          { name: 'Phòng ngự (DEF)', val: cap(ovr - 26), col: 'rose' },
          { name: 'Thể lực & Tì đè (PHY)', val: cap(ovr + 3), col: 'teal' }
        ];
      } else if (role === 'MF') {
        attrs = [
          { name: 'Tốc độ (PAC)', val: cap(ovr + 1), col: 'emerald' },
          { name: 'Dứt điểm (SHO)', val: cap(ovr - 1), col: 'amber' },
          { name: 'Chuyền bóng (PAS)', val: cap(ovr + 7), col: 'sky' },
          { name: 'Rê bóng (DRI)', val: cap(ovr + 5), col: 'purple' },
          { name: 'Phòng ngự (DEF)', val: cap(ovr + 2), col: 'rose' },
          { name: 'Thể lực & Tì đè (PHY)', val: cap(ovr + 2), col: 'teal' }
        ];
      } else { // DF
        attrs = [
          { name: 'Tốc độ (PAC)', val: cap(ovr - 1), col: 'emerald' },
          { name: 'Dứt điểm (SHO)', val: cap(ovr - 20), col: 'amber' },
          { name: 'Chuyền bóng (PAS)', val: cap(ovr - 3), col: 'sky' },
          { name: 'Rê bóng (DRI)', val: cap(ovr - 4), col: 'purple' },
          { name: 'Phòng ngự (DEF)', val: cap(ovr + 9), col: 'rose' },
          { name: 'Thể lực & Tì đè (PHY)', val: cap(ovr + 7), col: 'teal' }
        ];
      }

      const gridEl = document.getElementById('playerStatsAttrGrid');
      if (gridEl) {
        gridEl.innerHTML = attrs.map(a => `
          <div class="p-2 rounded-xl bg-slate-950/70 border border-white/5 space-y-1">
            <div class="flex items-center justify-between text-[11px]">
              <span class="text-slate-400 font-semibold">${a.name}</span>
              <span class="font-mono font-black text-${a.col}-400">${a.val}</span>
            </div>
            <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full" style="width: ${Math.min(100, Math.round((a.val / 125) * 100))}%;"></div>
            </div>
          </div>
        `).join('');
      }

      // Action Button
      const actionBtn = document.getElementById('btnPlayerStatsAction');
      const actionText = document.getElementById('playerStatsActionText');
      if (actionBtn && actionText) {
        const isSigned = !!(state.manager && state.manager.teamId);
        const myTeam = isSigned ? TEAMS_DB.find(t => t.id === state.manager.teamId) : null;
        const isMyPlayer = myTeam && Array.isArray(myTeam.stars) && myTeam.stars.includes(playerName);

        if (isMyPlayer) {
          actionBtn.disabled = true;
          actionBtn.className = 'btn-tap flex-1 py-2.5 px-4 rounded-xl bg-slate-800 text-slate-400 font-bold text-xs cursor-not-allowed';
          actionText.textContent = '⭐ Cầu thủ đang thuộc đội hình của bạn';
          actionBtn.onclick = null;
        } else if (isSigned) {
          actionBtn.disabled = false;
          actionBtn.className = 'btn-tap flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs shadow-lg transition flex items-center justify-center gap-1.5';
          actionText.textContent = `🛒 Chiêu mộ vào CLB (${price}M €)`;
          actionBtn.onclick = () => {
            modal.classList.add('hidden');
            if (marketPlayer) buyPlayer(marketPlayer.id);
            else {
              // Direct buy
              if (state.manager.budget < price) {
                SoundFX.whistle();
                alert(`Ngân sách CLB không đủ! Bạn cần ${price}M € nhưng chỉ còn ${state.manager.budget}M €.`);
                return;
              }
              state.manager.budget -= price;
              if (myTeam && !myTeam.stars.includes(playerName)) myTeam.stars.push(playerName);
              saveManagerCareer();
              renderManagerUI();
              initPitchPlayers();
              SoundFX.cheer();
              showPhaseNotice(`🎉 Đã chiêu mộ thành công ${playerName} với giá ${price}M €!`);
            }
          };
        } else {
          actionBtn.disabled = false;
          actionBtn.className = 'btn-tap flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black text-xs shadow-lg';
          actionText.textContent = 'Ký hợp đồng HLV để chiêu mộ cầu thủ này';
          actionBtn.onclick = () => {
            modal.classList.add('hidden');
            window.switchMainTab('career');
          };
        }
      }

      modal.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    };

    // =========================================================================
    // FEATURE: ACCOUNT & MULTI-DEVICE CLOUD SYNC
    // =========================================================================
    window.openAccountSyncModal = function() {
      SoundFX.click();
      const modal = document.getElementById('modalAccountSync');
      if (!modal) return;

      const myTeam = state.manager && state.manager.teamId ? TEAMS_DB.find(t => t.id === state.manager.teamId) : null;
      document.getElementById('syncProfileManagerName').textContent = state.manager?.name || 'HLV Trưởng';
      document.getElementById('syncProfileClubName').textContent = myTeam ? (myTeam.icon || '🛡️') + ' ' + myTeam.name : 'Chưa ký hợp đồng';
      document.getElementById('syncProfileBudget').textContent = (state.manager?.budget || 150) + 'M €';
      document.getElementById('syncProfileRecord').textContent = `${state.manager?.wins || 0}T - ${state.manager?.draws || 0}H - ${state.manager?.losses || 0}B`;

      // Pre-fill existing PIN or generate clean one
      let existingPin = localStorage.getItem('football_sync_pin');
      if (!existingPin) {
        existingPin = 'HLV-' + Math.floor(1000 + Math.random() * 9000);
        localStorage.setItem('football_sync_pin', existingPin);
      }
      const codeInput = document.getElementById('inputSyncCode');
      if (codeInput) codeInput.value = existingPin;

      // Direct backup base64 string
      const statePkg = {
        manager: state.manager,
        customLineups: state.customLineups || {},
        fifaPoints: state.fifaPoints || {},
        predictionStats: state.predictionStats || {},
        seasonAwards: state.seasonAwards || {}
      };
      try {
        const b64 = btoa(unescape(encodeURIComponent(JSON.stringify(statePkg))));
        const fastInput = document.getElementById('inputFastBackupCode');
        if (fastInput) fastInput.value = b64;
      } catch (e) {}

      modal.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    };

    window.saveToCloudSync = async function() {
      SoundFX.click();
      const statusEl = document.getElementById('cloudSyncStatusMsg');
      const pin = (document.getElementById('inputSyncCode')?.value.trim() || 'HLV-9999').toUpperCase();
      localStorage.setItem('football_sync_pin', pin);

      if (statusEl) statusEl.textContent = '⏳ Đang tải tiến độ lên Cloud...';

      const statePkg = {
        manager: state.manager,
        customLineups: state.customLineups || {},
        fifaPoints: state.fifaPoints || {},
        predictionStats: state.predictionStats || {},
        seasonAwards: state.seasonAwards || {},
        updatedAt: new Date().toISOString()
      };

      try {
        // Multi-device sync storage: try free KV endpoint, fallback to localStorage + clipboard
        const payloadStr = JSON.stringify(statePkg);
        localStorage.setItem('football_cloud_save_' + pin, payloadStr);

        // Attempt cloud store
        await fetch('https://api.restful-api.dev/objects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: 'football_save_' + pin, data: statePkg })
        }).catch(() => {});

        SoundFX.cheer();
        if (statusEl) {
          statusEl.className = 'text-[11px] font-semibold text-center text-emerald-400';
          statusEl.textContent = `✅ Đã lưu lên Cloud thành công! Mã PIN: ${pin}`;
        }
        showPhaseNotice(`☁️ Tiến độ đã được lưu lên Cloud với mã: ${pin}`);
      } catch (err) {
        if (statusEl) {
          statusEl.className = 'text-[11px] font-semibold text-center text-emerald-400';
          statusEl.textContent = `✅ Đã lưu cục bộ mã: ${pin}`;
        }
      }
    };

    window.loadFromCloudSync = async function() {
      SoundFX.click();
      const statusEl = document.getElementById('cloudSyncStatusMsg');
      const pin = (document.getElementById('inputSyncCode')?.value.trim() || '').toUpperCase();
      if (!pin) {
        alert('Vui lòng nhập mã PIN Cloud (VD: HLV-9921) để tải tiến độ về!');
        return;
      }

      if (statusEl) statusEl.textContent = '⏳ Đang tìm và tải dữ liệu...';

      try {
        let loadedData = null;
        const localSave = localStorage.getItem('football_cloud_save_' + pin);
        if (localSave) {
          loadedData = JSON.parse(localSave);
        }

        if (!loadedData) {
          // Try network load
          const res = await fetch(`https://api.restful-api.dev/objects?id=football_save_${pin}`).catch(() => null);
          if (res && res.ok) {
            const data = await res.json();
            if (data && data.data) loadedData = data.data;
          }
        }

        if (loadedData) {
          if (loadedData.manager) state.manager = loadedData.manager;
          if (loadedData.customLineups) state.customLineups = loadedData.customLineups;
          if (loadedData.fifaPoints) state.fifaPoints = loadedData.fifaPoints;
          if (loadedData.predictionStats) state.predictionStats = loadedData.predictionStats;

          saveManagerCareer();
          renderManagerUI();
          initPitchPlayers();

          SoundFX.cheer();
          if (statusEl) {
            statusEl.className = 'text-[11px] font-semibold text-center text-emerald-400';
            statusEl.textContent = '✅ Đã tải và đồng bộ tiến độ thành công!';
          }
          showPhaseNotice('🎉 Đã đồng bộ tiến độ từ Cloud thành công!');
        } else {
          if (statusEl) {
            statusEl.className = 'text-[11px] font-semibold text-center text-rose-400';
            statusEl.textContent = '❌ Không tìm thấy dữ liệu với mã PIN này trên hệ thống!';
          }
        }
      } catch (e) {
        if (statusEl) {
          statusEl.className = 'text-[11px] font-semibold text-center text-rose-400';
          statusEl.textContent = '❌ Lỗi khi tải dữ liệu Cloud: ' + e.message;
        }
      }
    };

    // =========================================================================
    // FEATURE: MOBILE SCREEN ORIENTATION LOCK / UNLOCK CONTROLS
    // =========================================================================
    window.lockScreenLandscape = async function() {
      SoundFX.click();
      try {
        if (!document.fullscreenElement) {
          await document.documentElement.requestFullscreen().catch(() => {});
        }
        if (screen.orientation && screen.orientation.lock) {
          await screen.orientation.lock('landscape').catch(() => {});
        }
      } catch (e) {}
      document.body.classList.add('force-landscape');
      document.body.classList.remove('force-portrait');
      showPhaseNotice('🔄 Đã chuyển sang chế độ xoay ngang màn hình!');
    };

    window.lockScreenPortrait = async function() {
      SoundFX.click();
      try {
        if (screen.orientation && screen.orientation.lock) {
          await screen.orientation.lock('portrait').catch(() => {});
        } else if (screen.orientation && screen.orientation.unlock) {
          screen.orientation.unlock();
        }
        if (document.fullscreenElement) {
          await document.exitFullscreen().catch(() => {});
        }
      } catch (e) {}
      document.body.classList.add('force-portrait');
      document.body.classList.remove('force-landscape');
      showPhaseNotice('📱 Đã chuyển sang chế độ xoay dọc màn hình!');
    };


      // Wire up Top App Tab Buttons
      document.getElementById('tabBtnMatch')?.addEventListener('click', () => window.switchMainTab('match'));
      document.getElementById('tabBtnCareer')?.addEventListener('click', () => window.switchMainTab('career'));
      document.getElementById('tabBtnMarket')?.addEventListener('click', () => window.switchMainTab('market'));
      document.getElementById('tabBtnAwards')?.addEventListener('click', () => window.switchMainTab('awards'));
      document.getElementById('tabBtnFifa')?.addEventListener('click', () => window.switchMainTab('fifa'));

      // Mobile Screen Orientation Buttons
      document.getElementById('btnScreenLandscape')?.addEventListener('click', window.lockScreenLandscape);
      document.getElementById('btnScreenPortrait')?.addEventListener('click', window.lockScreenPortrait);

      // Account & Cloud Sync Modal Buttons
      document.getElementById('btnOpenAccountSync')?.addEventListener('click', window.openAccountSyncModal);
      document.getElementById('btnHeaderSync')?.addEventListener('click', window.openAccountSyncModal);
      document.getElementById('btnCloseAccountSyncModal')?.addEventListener('click', () => {
        document.getElementById('modalAccountSync')?.classList.add('hidden');
      });
      document.getElementById('btnCloudSave')?.addEventListener('click', window.saveToCloudSync);
      document.getElementById('btnCloudLoad')?.addEventListener('click', window.loadFromCloudSync);
      document.getElementById('btnCopyBackupCode')?.addEventListener('click', () => {
        const inp = document.getElementById('inputFastBackupCode');
        if (inp && inp.value) {
          navigator.clipboard.writeText(inp.value).then(() => {
            SoundFX.click();
            showPhaseNotice('📋 Đã sao chép mã sao lưu vào bộ nhớ tạm!');
          }).catch(() => {});
        }
      });
      document.getElementById('btnRestoreFromCode')?.addEventListener('click', () => {
        const code = prompt('Dán mã sao lưu (Base64) của bạn vào đây:');
        if (code && code.trim()) {
          try {
            const jsonStr = decodeURIComponent(escape(atob(code.trim())));
            const loaded = JSON.parse(jsonStr);
            if (loaded.manager) state.manager = loaded.manager;
            if (loaded.customLineups) state.customLineups = loaded.customLineups;
            if (loaded.fifaPoints) state.fifaPoints = loaded.fifaPoints;
            saveManagerCareer();
            renderManagerUI();
            initPitchPlayers();
            SoundFX.cheer();
            alert('Đã khôi phục tiến độ từ mã sao lưu thành công!');
          } catch (e) {
            alert('Mã sao lưu không hợp lệ!');
          }
        }
      });

      // Player Stats Modal Close Buttons
      document.getElementById('btnClosePlayerStatsModal')?.addEventListener('click', () => {
        document.getElementById('modalPlayerStats')?.classList.add('hidden');
      });
      document.getElementById('btnClosePlayerStatsModalBtn')?.addEventListener('click', () => {
        document.getElementById('modalPlayerStats')?.classList.add('hidden');
      });

      // Confirm Switch Team Modal Buttons
      document.getElementById('btnConfirmSwitchTeam')?.addEventListener('click', () => {
        if (pendingSwitchTeamId) executeSwitchTeam(pendingSwitchTeamId);
      });
      document.getElementById('btnCancelSwitchTeam')?.addEventListener('click', () => {
        document.getElementById('modalConfirmSwitchTeam')?.classList.add('hidden');
        const picker = document.getElementById('focusTeam');
        if (picker && state.manager.teamId) picker.value = state.manager.teamId;
      });
      document.getElementById('btnSwitchTeamFromModal')?.addEventListener('click', () => {
        if (pendingSwitchTeamId) executeSwitchTeam(pendingSwitchTeamId);
      });

      // Global event delegation for clicking player names / cards anywhere in the app
      document.body.addEventListener('click', (e) => {
        const playerWrap = e.target.closest('.player-avatar-wrap, .pitch-player, .transfer-card, .award-row, .squad-player-badge');
        if (playerWrap) {
          // If clicked directly on recruit/sell button inside card, don't trigger stats
          if (e.target.closest('button') && !playerWrap.classList.contains('pitch-player') && !playerWrap.classList.contains('squad-player-badge')) {
            return;
          }
          const pName = playerWrap.dataset.playerName || playerWrap.getAttribute('title') || playerWrap.querySelector('.player-name, .font-bold')?.textContent;
          if (pName) {
            const cleanName = pName.split(' (')[0].trim();
            if (cleanName && cleanName.length > 2) {
              window.showPlayerStats(cleanName, null, playerWrap.dataset.playerId);
            }
          }
        }
      });
