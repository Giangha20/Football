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
      // Vietnam V.League 1
      'nmd': 'https://upload.wikimedia.org/wikipedia/vi/thumb/9/92/Logo_CLB_Th%C3%A9p_Xanh_Nam_%C4%90%E1%BB%8Bnh.png/180px-Logo_CLB_Th%C3%A9p_Xanh_Nam_%C4%90%E1%BB%8Bnh.png',
      'cahn': 'https://upload.wikimedia.org/wikipedia/vi/thumb/6/69/Cong_an_Ha_Noi_FC_logo.svg/180px-Cong_an_Ha_Noi_FC_logo.svg.png',
      'hnfc': 'https://upload.wikimedia.org/wikipedia/vi/thumb/e/e0/Hanoi_FC_logo.svg/180px-Hanoi_FC_logo.svg.png',
      'vtl': 'https://upload.wikimedia.org/wikipedia/vi/thumb/3/36/The_Cong_Viettel_FC_logo.svg/180px-The_Cong_Viettel_FC_logo.svg.png',
      'hpfc': 'https://upload.wikimedia.org/wikipedia/vi/thumb/6/6b/Logo_CLB_Hai_Phong.png/180px-Logo_CLB_Hai_Phong.png',
      'bbd': 'https://upload.wikimedia.org/wikipedia/vi/thumb/b/b3/Becamex_Binh_Duong_FC_logo.svg/180px-Becamex_Binh_Duong_FC_logo.svg.png',
      'bth': 'https://upload.wikimedia.org/wikipedia/vi/thumb/8/87/Dong_A_Thanh_Hoa_FC_logo.png/180px-Dong_A_Thanh_Hoa_FC_logo.png',
      'hagl': 'https://upload.wikimedia.org/wikipedia/vi/thumb/1/10/Logo_HAGL.png/180px-Logo_HAGL.png',
      'slna': 'https://upload.wikimedia.org/wikipedia/vi/thumb/9/94/Logo_Song_Lam_Nghe_An.png/180px-Logo_Song_Lam_Nghe_An.png',
      'hlht': 'https://upload.wikimedia.org/wikipedia/vi/thumb/c/cf/Logo_Hong_Linh_Ha_Tinh.png/180px-Logo_Hong_Linh_Ha_Tinh.png',
      'qnbd': 'https://upload.wikimedia.org/wikipedia/vi/thumb/2/23/Logo_Quy_Nhon_Binh_Dinh.png/180px-Logo_Quy_Nhon_Binh_Dinh.png',
      'hcmc': 'https://upload.wikimedia.org/wikipedia/vi/thumb/6/68/Logo_TP_Ho_Chi_Minh.png/180px-Logo_TP_Ho_Chi_Minh.png',
      'qnam': 'https://upload.wikimedia.org/wikipedia/vi/thumb/c/ca/Logo_CLB_Quang_Nam.png/180px-Logo_CLB_Quang_Nam.png',
      'shbdn': 'https://upload.wikimedia.org/wikipedia/vi/thumb/e/eb/Logo_SHB_Da_Nang.png/180px-Logo_SHB_Da_Nang.png',

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
      'ips': 'https://images.fotmob.com/image_resources/logo/teamlogo/9423.png',
      'sou': 'https://images.fotmob.com/image_resources/logo/teamlogo/8466.png',

      // La Liga
      'rma': 'https://images.fotmob.com/image_resources/logo/teamlogo/8633.png',
      'fcb': 'https://images.fotmob.com/image_resources/logo/teamlogo/8634.png',
      'atm': 'https://images.fotmob.com/image_resources/logo/teamlogo/9906.png',
      'ath': 'https://images.fotmob.com/image_resources/logo/teamlogo/8315.png',
      'vil': 'https://images.fotmob.com/image_resources/logo/teamlogo/10205.png',
      'rso': 'https://images.fotmob.com/image_resources/logo/teamlogo/8918.png',
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
      'ven': 'https://images.fotmob.com/image_resources/logo/teamlogo/7889.png',

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
      'fch': 'https://images.fotmob.com/image_resources/logo/teamlogo/7882.png',
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
      'shab': 'https://images.fotmob.com/image_resources/logo/teamlogo/10360.png',
      'ett': 'https://images.fotmob.com/image_resources/logo/teamlogo/10361.png',
      'taaw': 'https://images.fotmob.com/image_resources/logo/teamlogo/225339.png',
      'qad': 'https://images.fotmob.com/image_resources/logo/teamlogo/225345.png',
      'fateh': 'https://images.fotmob.com/image_resources/logo/teamlogo/225341.png',
      'riy': 'https://images.fotmob.com/image_resources/logo/teamlogo/225348.png',

      // Asia & Americas
      'fmar': 'https://images.fotmob.com/image_resources/logo/teamlogo/8415.png',
      'vissel': 'https://images.fotmob.com/image_resources/logo/teamlogo/8414.png',
      'ulsan': 'https://images.fotmob.com/image_resources/logo/teamlogo/8451.png',
      'alain': 'https://images.fotmob.com/image_resources/logo/teamlogo/10359.png',
      'buri': 'https://images.fotmob.com/image_resources/logo/teamlogo/317316.png',
      'bgpu': 'https://images.fotmob.com/image_resources/logo/teamlogo/317315.png',
      'jdt': 'https://images.fotmob.com/image_resources/logo/teamlogo/317318.png',
      'psm': 'https://images.fotmob.com/image_resources/logo/teamlogo/282245.png',
      'mia': 'https://images.fotmob.com/image_resources/logo/teamlogo/1063162.png',
      'lag': 'https://images.fotmob.com/image_resources/logo/teamlogo/9988.png',
      'fla': 'https://images.fotmob.com/image_resources/logo/teamlogo/9770.png',
      'riv': 'https://images.fotmob.com/image_resources/logo/teamlogo/10086.png',
      'pal': 'https://images.fotmob.com/image_resources/logo/teamlogo/10243.png',
      'bot': 'https://images.fotmob.com/image_resources/logo/teamlogo/8517.png',
      'boc_j': 'https://images.fotmob.com/image_resources/logo/teamlogo/10085.png',
      'lafc': 'https://images.fotmob.com/image_resources/logo/teamlogo/899144.png',
      'clb': 'https://images.fotmob.com/image_resources/logo/teamlogo/9985.png',
      'ame': 'https://images.fotmob.com/image_resources/logo/teamlogo/7968.png',
      'shsp': 'https://images.fotmob.com/image_resources/logo/teamlogo/158659.png',
      'shsh': 'https://images.fotmob.com/image_resources/logo/teamlogo/9759.png',
      'sdts': 'https://images.fotmob.com/image_resources/logo/teamlogo/9758.png',
      'bjga': 'https://images.fotmob.com/image_resources/logo/teamlogo/9757.png',
      'kawa': 'https://images.fotmob.com/image_resources/logo/teamlogo/8412.png',
      'sdd': 'https://images.fotmob.com/image_resources/logo/teamlogo/8408.png',
      'pers': 'https://images.fotmob.com/image_resources/logo/teamlogo/8417.png',
      // Added UCL & Domestic Clubs
      'korat': 'https://images.fotmob.com/image_resources/logo/teamlogo/225325.png',
      'sukho': 'https://images.fotmob.com/image_resources/logo/teamlogo/225330.png',
      'khon': 'https://images.fotmob.com/image_resources/logo/teamlogo/746356.png',
      'lamp': 'https://images.fotmob.com/image_resources/logo/teamlogo/1118160.png',
      'khal': 'https://images.fotmob.com/image_resources/logo/teamlogo/225344.png',
      'wehd': 'https://images.fotmob.com/image_resources/logo/teamlogo/225350.png',
      'damac': 'https://images.fotmob.com/image_resources/logo/teamlogo/225340.png',
      'raed': 'https://images.fotmob.com/image_resources/logo/teamlogo/225346.png',
      'inch': 'https://images.fotmob.com/image_resources/logo/teamlogo/8447.png',
      'daegu': 'https://images.fotmob.com/image_resources/logo/teamlogo/8444.png',
      'nagoya': 'https://images.fotmob.com/image_resources/logo/teamlogo/8411.png',
      'fuku': 'https://images.fotmob.com/image_resources/logo/teamlogo/8419.png',
      'kashiwa': 'https://images.fotmob.com/image_resources/logo/teamlogo/8413.png',
      'niig': 'https://images.fotmob.com/image_resources/logo/teamlogo/8416.png',
      'tianjin': 'https://images.fotmob.com/image_resources/logo/teamlogo/9760.png',
      'henan': 'https://images.fotmob.com/image_resources/logo/teamlogo/9761.png',
      'wuhan': 'https://images.fotmob.com/image_resources/logo/teamlogo/984639.png',
      'flu': 'https://images.fotmob.com/image_resources/logo/teamlogo/9863.png',
      'sao': 'https://images.fotmob.com/image_resources/logo/teamlogo/10242.png',
      'min': 'https://images.fotmob.com/image_resources/logo/teamlogo/10240.png',
      'gre': 'https://images.fotmob.com/image_resources/logo/teamlogo/8472.png',

      // Pohang Steelers (K League 1)
      'poang': 'https://images.fotmob.com/image_resources/logo/teamlogo/8449.png',
      // J1 League
      'hiro': 'https://images.fotmob.com/image_resources/logo/teamlogo/8407.png',
      'mach': 'https://upload.wikimedia.org/wikipedia/commons/0/08/FC_Machida_Zelvia_%28logo%29.svg',
      'gamb': 'https://images.fotmob.com/image_resources/logo/teamlogo/8410.png',
      'kash': 'https://images.fotmob.com/image_resources/logo/teamlogo/8409.png',
      'uraw': 'https://images.fotmob.com/image_resources/logo/teamlogo/8418.png',
      'fctk': 'https://images.fotmob.com/image_resources/logo/teamlogo/8420.png',
      'cere': 'https://images.fotmob.com/image_resources/logo/teamlogo/8417.png',
      // K League 1
      'jeon': 'https://images.fotmob.com/image_resources/logo/teamlogo/8448.png',
      'fcse': 'https://upload.wikimedia.org/wikipedia/en/9/9e/FC_Seoul_logo.svg',
      'gang': 'https://upload.wikimedia.org/wikipedia/en/f/fe/Gangwon_FC.svg',
      'gimch': 'https://images.fotmob.com/image_resources/logo/teamlogo/8450.png',
      'suwon': 'https://upload.wikimedia.org/wikipedia/en/0/01/Suwon_FC_2016.svg',
      'gwang': 'https://upload.wikimedia.org/wikipedia/en/6/65/Gwangju_FC.svg',
      'jeju': 'https://upload.wikimedia.org/wikipedia/en/4/47/Jeju_SK_FC.svg',
      'daej': 'https://images.fotmob.com/image_resources/logo/teamlogo/8452.png',
      // Thai League 1
      'port': 'https://upload.wikimedia.org/wikipedia/en/f/fc/Port_FC_logo.svg',
      'utd_bkk': 'https://upload.wikimedia.org/wikipedia/en/a/a3/Bangkok_United%2C_2018.png',
      'muang': 'https://upload.wikimedia.org/wikipedia/en/a/ae/Muangthong_United_F.C._%28emblem%29.png',
      'ratch': 'https://upload.wikimedia.org/wikipedia/en/4/44/Ratchaburi_Mitr_Phol_logo_2019.png',
      'chiang': 'https://upload.wikimedia.org/wikipedia/en/0/08/Chiangrai_United_FC_logo.svg',
      'prachuap': 'https://upload.wikimedia.org/wikipedia/en/f/f3/PT_Prachuap_2018_logo.png',
      // Chinese Super League
      'cdrc': 'https://upload.wikimedia.org/wikipedia/en/c/c4/Chengdu_Rongcheng_F.C.svg',
      'zhej': 'https://images.fotmob.com/image_resources/logo/teamlogo/9762.png',
      // Southeast Asian Champions & Cups
      'sela': 'https://upload.wikimedia.org/wikipedia/en/d/d7/Selangor_FC_logo.svg',
      'lcs': 'https://upload.wikimedia.org/wikipedia/en/e/e3/Lion_City_Sailors_FC_logo.svg',
      'bFC': 'https://upload.wikimedia.org/wikipedia/en/b/be/Borneo_FC_logo.svg',
      'kaya': 'https://upload.wikimedia.org/wikipedia/en/1/1f/Kaya_Iloilo_crest.png',
      'svay': 'https://upload.wikimedia.org/wikipedia/en/a/ab/Svay_Rieng_FC_logo.png',
      'persib': 'https://upload.wikimedia.org/wikipedia/en/e/ea/Persib_Bandung_Crest.svg',
      'persija': 'https://upload.wikimedia.org/wikipedia/en/7/76/Persija_Jakarta_Football_Logo.png',
      'perseb': 'https://upload.wikimedia.org/wikipedia/en/a/a1/Persebaya_logo.svg',
      'bali': 'https://upload.wikimedia.org/wikipedia/en/5/5e/Bali_United_logo.svg',
      'tereng': 'https://upload.wikimedia.org/wikipedia/en/2/29/Terengganu_FC_logo.svg',
      'sabah': 'https://upload.wikimedia.org/wikipedia/en/0/01/Sabah_Football_Club_%28Malaysia%29.png'

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

      // Game Mode & HLV Tương Lai (Soccer Manager Career Mode)
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
          playstyle: state.manager.playstyle
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
      state.seasonSummary = {
        tourney,
        seasonYear: state.seasonYear,
        ovrChanges
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

      // Populate HLV Tương Lai End of Season Card
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
            saveManagerCareer();
          }

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

            evalTextEl.innerHTML = `
              <div class="space-y-1">
                <p>${assessment}</p>
                ${prizeText ? `<p class="text-emerald-300 font-bold">💰 ${prizeText}</p>` : ''}
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
              updateFifaWorldPointsAfterMatch(f.home, f.away, homeGoals, awayGoals);
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

      state.phase = 'complete';
      renderLeagueStandings();
      renderFifaWorldRankings();
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
    function setGameMode(mode) {
      state.gameMode = mode;
      const btnPred = document.getElementById('btnModePredict');
      const btnMgr = document.getElementById('btnModeManager');
      const panelMgr = document.getElementById('panelManagerHub');
      const hubHeading = document.getElementById('hubMainHeading');
      const badge = document.getElementById('modeStatusBadge');

      if (mode === 'manager') {
        if (btnPred) {
          btnPred.className = 'btn-tap px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 transition text-slate-300 hover:text-white';
        }
        if (btnMgr) {
          btnMgr.className = 'btn-tap px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition bg-amber-400 text-slate-950 shadow-md';
        }
        if (panelMgr) panelMgr.classList.remove('hidden');
        if (hubHeading) hubHeading.textContent = 'Trận đấu Huấn Luyện Viên dẫn dắt';

        renderManagerUI();

        // If manager has an active contract, enforce team selection
        if (state.manager.isContractLocked && state.manager.teamId) {
          if (state.focusedTeamId !== state.manager.teamId) {
            state.focusedTeamId = state.manager.teamId;
          }
          if (state.activeTournamentId !== state.manager.tourneyId) {
            state.activeTournamentId = state.manager.tourneyId;
            selectTournament(state.manager.tourneyId);
          }
          pickNextMatch();
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
        if (badge) {
          badge.innerHTML = `
            <span class="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Chế độ: Dự đoán tự do</span>
            </span>
          `;
        }
      }
      setScoreControlsEnabled(state.phase === 'predicting');
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
        if (leagueBadge) leagueBadge.textContent = `${tourney.icon} ${tourney.name}`;

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

      // Cập nhật ngân sách CLB và Thị trường chuyển nhượng
      const budgetDisplay = document.getElementById('managerBudgetDisplay');
      if (budgetDisplay) budgetDisplay.textContent = `${state.manager.budget || 150}M €`;
      renderTransferMarket();

      if (window.lucide) window.lucide.createIcons();
    }

    // =========================================================================
    // THỊ TRƯỜNG CHUYỂN NHƯỢNG CẦU THỦ (TRANSFER MARKET)
    // =========================================================================
    const TRANSFER_MARKET_PLAYERS = [
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

      // 1. RENDER MARKET TARGETS (MUA CẦU THỦ)
      if (marketContainer) {
        const filteredPlayers = TRANSFER_MARKET_PLAYERS.filter(p => filter === 'all' || p.pos === filter);
        const currentStars = team ? (team.stars || []) : [];

        marketContainer.innerHTML = filteredPlayers.map(p => {
          const alreadyOwned = currentStars.some(s => s.toLowerCase().includes(p.name.toLowerCase()) || p.name.toLowerCase().includes(s.toLowerCase()));
          const canAfford = (state.manager.budget || 150) >= p.price;

          let posBadgeClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
          if (p.pos === 'FW') posBadgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/30';
          else if (p.pos === 'MF') posBadgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
          else if (p.pos === 'DF') posBadgeClass = 'bg-sky-500/20 text-sky-300 border-sky-500/30';
          else if (p.pos === 'GK') posBadgeClass = 'bg-purple-500/20 text-purple-300 border-purple-500/30';

          return `
            <div class="transfer-card p-3 rounded-xl bg-slate-900/90 border border-white/10 hover:border-amber-400/50 flex flex-col justify-between gap-2 shadow transition">
              <div class="flex items-start justify-between gap-1.5">
                <div class="min-w-0">
                  <div class="flex items-center gap-1.5">
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-black border ${posBadgeClass}">${p.pos}</span>
                    <span class="text-xs font-mono font-bold text-amber-300">OVR ${p.ovr}</span>
                  </div>
                  <h5 class="text-xs sm:text-sm font-black text-white truncate mt-1">${p.name}</h5>
                  <div class="text-[11px] text-slate-400">${p.club} · Tăng <strong class="text-emerald-400">+${p.ovrBoost} OVR</strong></div>
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

          const squadItems = stars.map((name, idx) => {
            let pos = 'MF';
            if (idx <= 3) pos = 'FW';
            else if (idx <= 6) pos = 'MF';
            else if (idx <= 9) pos = 'DF';
            else pos = 'GK';

            // keyword heuristic
            if (/filip|lâm|chuẩn|mạnh|triệu|toàn|hoàng|phong|việt|courtois|alisson|ederson|martínez/i.test(name)) pos = 'GK';
            else if (/hậu|anh|dũng|bình|hải|chung|tài|duy|thanh|dias|dijk|saliba|rüdiger/i.test(name)) pos = 'DF';
            else if (/son|linh|hải|artur|lucão|silva|mbappe|haaland|vinicius|salah/i.test(name)) pos = 'FW';

            return { name, pos, idx, price: sellPrice };
          });

          const filteredSquad = squadItems.filter(p => filter === 'all' || p.pos === filter);

          squadContainer.innerHTML = filteredSquad.map(item => {
            let posBadgeClass = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
            if (item.pos === 'FW') posBadgeClass = 'bg-rose-500/20 text-rose-300 border-rose-500/30';
            else if (item.pos === 'MF') posBadgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/30';
            else if (item.pos === 'DF') posBadgeClass = 'bg-sky-500/20 text-sky-300 border-sky-500/30';
            else if (item.pos === 'GK') posBadgeClass = 'bg-purple-500/20 text-purple-300 border-purple-500/30';

            return `
              <div class="transfer-card p-3 rounded-xl bg-slate-900/90 border border-white/10 hover:border-rose-400/50 flex flex-col justify-between gap-2 shadow transition">
                <div class="flex items-start justify-between gap-1.5">
                  <div class="min-w-0">
                    <div class="flex items-center gap-1.5">
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-black border ${posBadgeClass}">${item.pos}</span>
                      <span class="text-xs font-mono font-bold text-slate-300">OVR ${team.rating}</span>
                    </div>
                    <h5 class="text-xs sm:text-sm font-black text-white truncate mt-1">${item.name}</h5>
                    <div class="text-[11px] text-slate-400">${team.name} · Trụ cột CLB</div>
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
          }).join('');
        }
      }

      if (window.lucide) window.lucide.createIcons();
    }

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
      team.rating = Math.min(125, team.rating + (p.ovrBoost || 1));
      saveCustomRatings();
      saveManagerCareer();

      if (window.confetti) {
        window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
      showPhaseNotice(`🎉 ĐÃ CHIÊU MỘ THÀNH CÔNG ${p.name}! Chỉ số OVR của ${team.name} tăng lên ${team.rating}!`);

      renderTransferMarket();
      renderManagerUI();
      renderTeamsDirectory(document.getElementById('teamSearchInput')?.value);
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
      state.manager.budget = (state.manager.budget || 150) + sellPrice;
      saveManagerCareer();

      showPhaseNotice(`💰 ĐÃ BÁN ${playerName} THU VỀ +${sellPrice}M €! Ngân sách hiện tại: ${state.manager.budget}M €`);

      renderTransferMarket();
      renderManagerUI();
      renderTeamsDirectory(document.getElementById('teamSearchInput')?.value);
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

      // 3. Reset season year
      state.seasonYear = 2026;
      try {
        localStorage.setItem('football_season_year', '2026');
      } catch (e) {}

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
      document.getElementById('activeTournamentHeaderBadge').textContent = `${tourney.icon} ${tourney.name}`;
      document.getElementById('currentLeagueDesc').textContent = tourney.groupCount ? 'Chọn đội để xem lịch đấu và bảng điểm của bảng tương ứng.' : 'Mỗi đội gặp tất cả các đối thủ một trận sân nhà và một trận sân khách.';
      initStandingsForTournament(tournamentId);
      renderTournamentSelectorBar();
      renderTeamsDirectory(document.getElementById('teamSearchInput').value);
      pickNextMatch();
    }

    function fixturesForTeam(teamId) {
      const group = state.standingsByTourney[state.activeTournamentId][teamId].group;
      return state.groupFixturesByTourney[state.activeTournamentId][group]
        .filter(f => f.home.id === teamId || f.away.id === teamId);
    }

    function chooseTeam(id, fixture) {
      if (state.phase === 'simulating') return;
      if (state.manager && state.manager.isContractLocked && id !== state.manager.teamId) {
        showContractLockedModal();
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
        <span>${tourney.icon}</span>
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
      document.getElementById('simBadge').textContent = "CHỜ KHÓA TỶ SỐ";
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
      document.getElementById('simSpeedText').textContent = `Tốc độ ${state.speedMultiplier}×`;
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
          ? `<i data-lucide="play" class="w-5 h-5 fill-current"></i><span>HLV RA SÂN CHỈ ĐẠO TRẬN ĐẤU</span>`
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
      document.getElementById('timerStatusText').textContent = `🔒 DỰ ĐOÁN (${state.predHome} - ${state.predAway}) • ĐANG ĐÁ HIỆP 1`;

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
            document.getElementById('timerStatusText').textContent = `🔒 DỰ ĐOÁN (${state.predHome} - ${state.predAway}) • ĐANG ĐÁ HIỆP 2 (ĐỔI SÂN)`;
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
          updateFifaWorldPointsAfterMatch(t1, t2, g1, g2, penWin);
          playedTeamsThisRound.add(t1.id);
          playedTeamsThisRound.add(t2.id);
          concurrentTourneyMatches++;
        }
      }

      // 3. Official FIFA World Ranking points for the User's match
      const isPenWinHome = (state.penHome !== null && state.penAway !== null) ? (state.penHome > state.penAway) : null;
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
          updateFifaWorldPointsAfterMatch(c1, c2, homeGoals, awayGoals);
          playedTeamsThisRound.add(c1.id);
          playedTeamsThisRound.add(c2.id);
          concurrentWorldMatches++;
        }
      }

      // 5. Instantly Re-render both Tournament Standings and FIFA World Rankings!
      renderLeagueStandings();
      renderFifaWorldRankings();

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
          outcomeHit: true
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
        { x: 0.075, y: 0.50, role: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF' },
        { x: 0.18,  y: 0.38, role: 'DF' },
        { x: 0.18,  y: 0.62, role: 'DF' },
        { x: 0.20,  y: 0.84, role: 'DF' },
        { x: 0.35,  y: 0.25, role: 'MF' },
        { x: 0.32,  y: 0.50, role: 'MF' },
        { x: 0.35,  y: 0.75, role: 'MF' },
        { x: 0.47,  y: 0.20, role: 'FW' },
        { x: 0.48,  y: 0.45, role: 'FW' },
        { x: 0.47,  y: 0.80, role: 'FW' }
      ],
      '4-2-3-1': [
        { x: 0.075, y: 0.50, role: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF' },
        { x: 0.18,  y: 0.38, role: 'DF' },
        { x: 0.18,  y: 0.62, role: 'DF' },
        { x: 0.20,  y: 0.84, role: 'DF' },
        { x: 0.30,  y: 0.38, role: 'MF' },
        { x: 0.30,  y: 0.62, role: 'MF' },
        { x: 0.40,  y: 0.20, role: 'MF' },
        { x: 0.39,  y: 0.50, role: 'MF' },
        { x: 0.40,  y: 0.80, role: 'MF' },
        { x: 0.48,  y: 0.50, role: 'FW' }
      ],
      '4-4-2': [
        { x: 0.075, y: 0.50, role: 'GK' },
        { x: 0.20,  y: 0.16, role: 'DF' },
        { x: 0.18,  y: 0.38, role: 'DF' },
        { x: 0.18,  y: 0.62, role: 'DF' },
        { x: 0.20,  y: 0.84, role: 'DF' },
        { x: 0.34,  y: 0.16, role: 'MF' },
        { x: 0.33,  y: 0.38, role: 'MF' },
        { x: 0.33,  y: 0.62, role: 'MF' },
        { x: 0.34,  y: 0.84, role: 'MF' },
        { x: 0.47,  y: 0.38, role: 'FW' },
        { x: 0.47,  y: 0.62, role: 'FW' }
      ],
      '3-5-2': [
        { x: 0.075, y: 0.50, role: 'GK' },
        { x: 0.18,  y: 0.25, role: 'DF' },
        { x: 0.17,  y: 0.50, role: 'DF' },
        { x: 0.18,  y: 0.75, role: 'DF' },
        { x: 0.32,  y: 0.14, role: 'MF' },
        { x: 0.33,  y: 0.32, role: 'MF' },
        { x: 0.31,  y: 0.50, role: 'MF' },
        { x: 0.33,  y: 0.68, role: 'MF' },
        { x: 0.32,  y: 0.86, role: 'MF' },
        { x: 0.47,  y: 0.38, role: 'FW' },
        { x: 0.47,  y: 0.62, role: 'FW' }
      ],
      '5-3-2': [
        { x: 0.075, y: 0.50, role: 'GK' },
        { x: 0.20,  y: 0.12, role: 'DF' },
        { x: 0.18,  y: 0.30, role: 'DF' },
        { x: 0.17,  y: 0.50, role: 'DF' },
        { x: 0.18,  y: 0.70, role: 'DF' },
        { x: 0.20,  y: 0.88, role: 'DF' },
        { x: 0.34,  y: 0.28, role: 'MF' },
        { x: 0.32,  y: 0.50, role: 'MF' },
        { x: 0.34,  y: 0.72, role: 'MF' },
        { x: 0.47,  y: 0.38, role: 'FW' },
        { x: 0.47,  y: 0.62, role: 'FW' }
      ]
    };

    function getTacticalFormation(formationKey, isAway) {
      const form = TACTICAL_FORMATIONS[formationKey] || TACTICAL_FORMATIONS['4-3-3'];
      if (!isAway) return form;
      return form.map(p => ({
        x: 1 - p.x,
        y: p.y,
        role: p.role
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

      // Note: team.stars has attackers at index 0..3, midfielders 4..6, defenders 7..9, GK at 10
      const starOrder = [10, 7, 8, 9, 6, 4, 5, 3, 1, 0, 2];
      const swap = !!state.sidesSwapped;

      homeCoords.forEach((p, idx) => {
        const starIdx = starOrder[idx] !== undefined ? starOrder[idx] : idx;
        const fullName = state.homeTeam.stars[starIdx] || state.homeTeam.stars[0] || `Cầu thủ ${idx + 1}`;
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
        const starIdx = starOrder[idx] !== undefined ? starOrder[idx] : idx;
        const fullName = state.awayTeam.stars[starIdx] || state.awayTeam.stars[0] || `Cầu thủ ${idx + 1}`;
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
      document.getElementById('btnSimSpeed').onclick = () => settings.showModal();
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
          showPhaseNotice(`📋 Đã đổi sang sơ đồ chiến thuật ${state.manager.formation}!`);
        });
      });

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
      if (state.manager && state.manager.isContractLocked && state.manager.teamId) {
        state.focusedTeamId = state.manager.teamId;
        state.activeTournamentId = state.manager.tourneyId || state.activeTournamentId;
        setGameMode('manager');
      }

      snapshotFifaRanks();
      selectTournament(state.activeTournamentId);
      requestAnimationFrame(drawPitch);
    });
