/* ============================================
   花之百科 - 应用逻辑
   ============================================ */
(function () {
  'use strict';

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  /* ---------- Hero花园 ---------- */
  function renderHeroGarden() {
    var el = $('#heroGarden');
    if (el) el.innerHTML = heroGardenSVG();
  }

  /* ---------- 四季之花 ---------- */
  function renderSeason(seasonKey) {
    var data = SEASONS[seasonKey];
    var container = $('#seasonContent');
    if (!data) return;

    container.innerHTML = data.flowers.map(function(f) {
      return '<div class="season-card">' +
        '<div class="flower-svg">' + flowerSVG(f.type, f.c1, f.c2, f.c3) + '</div>' +
        '<h4>' + f.name + '</h4>' +
        '<div class="flower-lang">🌸 ' + f.lang + '</div>' +
        '<p>' + (f.desc || '').substring(0, 50) + '...</p>' +
      '</div>';
    }).join('');
  }

  /* ---------- 花语词典 ---------- */
  function renderDictionary(keyword) {
    keyword = keyword || '';
    var grid = $('#flowerGrid');
    var empty = $('#emptyState');

    var filtered = FLOWERS.filter(function(f) {
      if (!keyword) return true;
      var k = keyword.toLowerCase();
      return f.name.toLowerCase().indexOf(k) > -1 ||
             f.en.toLowerCase().indexOf(k) > -1 ||
             f.lang.toLowerCase().indexOf(k) > -1 ||
             f.desc.toLowerCase().indexOf(k) > -1;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '';
      empty.style.display = 'block';
      return;
    }
    empty.style.display = 'none';

    grid.innerHTML = filtered.map(function(f) {
      var seasonColors = { '春':'#E91E63','夏':'#FFC107','秋':'#FF8A65','冬':'#42A5F5' };
      var seasonBadges = f.seasons.map(function(s) {
        return '<span class="season-badge" style="background:' + (seasonColors[s]||'#999') + '">' + s + '</span>';
      }).join('');

      var diffClass = f.difficulty === '容易' ? 'diff-easy' : (f.difficulty === '中等' ? 'diff-medium' : 'diff-hard');

      return '<div class="flower-card">' +
        '<div class="flower-cover" style="background:' + f.bg + '">' +
          seasonBadges +
          '<div class="flower-svg">' + flowerSVG(f.type, f.c1, f.c2, f.c3) + '</div>' +
        '</div>' +
        '<div class="flower-body">' +
          '<div class="flower-name">' + f.name + ' <span class="flower-en">' + f.en + '</span></div>' +
          '<span class="flower-meaning">💬 ' + f.lang + '</span>' +
          '<p class="flower-desc">' + f.desc + '</p>' +
          '<div class="flower-meta">' +
            '<span>🌍 ' + f.origin + '</span>' +
            '<span class="' + diffClass + '">🌱 ' + f.difficulty + '</span>' +
            '<span>📅 ' + f.seasons.join('·') + '</span>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ---------- 送花指南 ---------- */
  function renderOccasions() {
    var grid = $('#occasionGrid');
    grid.innerHTML = OCCASIONS.map(function(o) {
      return '<div class="occasion-card" data-occasion="' + o.id + '">' +
        '<span class="occ-icon">' + o.icon + '</span>' +
        '<span class="occ-name">' + o.name + '</span>' +
      '</div>';
    }).join('');

    $$('.occasion-card').forEach(function(card) {
      card.addEventListener('click', function() {
        $$('.occasion-card').forEach(function(c) { c.classList.remove('active'); });
        card.classList.add('active');
        renderGiftingResult(card.dataset.occasion);
      });
    });

    // 默认选中第一个
    var first = $('.occasion-card');
    if (first) {
      first.classList.add('active');
      renderGiftingResult(first.dataset.occasion);
    }
  }

  function renderGiftingResult(occasionId) {
    var occ = OCCASIONS.find(function(o) { return o.id === occasionId; });
    if (!occ) return;

    // 找到匹配该场合的花
    var matched = FLOWERS.filter(function(f) {
      return f.occasions.some(function(fo) {
        return occ.keywords.indexOf(fo) > -1;
      });
    });

    var result = $('#giftingResult');
    result.innerHTML = '<div class="result-title">' + occ.icon + ' ' + occ.name + ' — 推荐这些花</div>' +
      (matched.length > 0
        ? '<div class="gifting-grid">' +
            matched.map(function(f) {
              return '<div class="gifting-flower">' +
                '<div class="flower-svg">' + flowerSVG(f.type, f.c1, f.c2, f.c3) + '</div>' +
                '<h5>' + f.name + '</h5>' +
                '<div class="gf-lang">💬 ' + f.lang + '</div>' +
              '</div>';
            }).join('') +
          '</div>'
        : '<div class="empty-state"><div class="empty-icon">🥀</div><p>暂无推荐，敬请期待～</p></div>'
      );
  }

  /* ---------- 养花技巧 ---------- */
  function renderCare(tabKey) {
    var data = CARE_DATA[tabKey];
    if (!data) return;
    var html = '';
    data.panels.forEach(function(p) {
      html += '<div class="care-panel">' +
        '<div class="care-icon" style="background:' + p.color + '">' + p.icon + '</div>' +
        '<div class="care-panel-content"><h4>' + p.title + '</h4><p>' + p.text + '</p></div>' +
      '</div>';
    });
    html += '<div class="care-tip"><span class="tip-emoji">💡</span><p>' + data.tip + '</p></div>';
    $('#careContent').innerHTML = html;
  }

  /* ---------- 初始化 Tab 切换 ---------- */
  function initSeasonTabs() {
    $$('.season-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        $$('.season-btn').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderSeason(btn.dataset.season);
      });
    });
  }

  function initCareTabs() {
    $$('.care-tab').forEach(function(btn) {
      btn.addEventListener('click', function() {
        $$('.care-tab').forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        renderCare(btn.dataset.care);
      });
    });
  }

  /* ---------- 搜索 ---------- */
  function initSearch() {
    var input = $('#dictSearch');
    var timer = null;
    input.addEventListener('input', function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        renderDictionary(input.value.trim());
      }, 200);
    });
  }

  /* ---------- 导航滚动 ---------- */
  function initNavScroll() {
    var sections = $$('section[id]');
    var navLinks = $$('.nav-link');
    var navbar = $('#navbar');
    var backToTop = $('#backToTop');

    window.addEventListener('scroll', function() {
      var scrollY = window.scrollY;
      navbar.classList.toggle('scrolled', scrollY > 10);
      backToTop.classList.toggle('show', scrollY > 400);

      var current = '';
      sections.forEach(function(sec) {
        if (scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });
      navLinks.forEach(function(link) {
        link.classList.toggle('active', link.dataset.section === current);
      });
    }, { passive: true });
  }

  /* ---------- 移动端菜单 ---------- */
  function initMobileMenu() {
    var toggle = $('#menuToggle');
    var links = $('#navLinks');
    toggle.addEventListener('click', function() {
      toggle.classList.toggle('active');
      links.classList.toggle('open');
    });
    $$('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() {
        toggle.classList.remove('active');
        links.classList.remove('open');
      });
    });
  }

  /* ---------- 返回顶部 ---------- */
  function initBackToTop() {
    $('#backToTop').addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 飘落花瓣 ---------- */
  function createPetalBg() {
    var bg = $('#petalBg');
    var chars = ['🌸', '🌺', '🌷', '🌹', '🌼', '🌻', '💮'];
    for (var i = 0; i < 16; i++) {
      var petal = document.createElement('span');
      petal.className = 'petal';
      petal.textContent = chars[Math.floor(Math.random() * chars.length)];
      petal.style.left = Math.random() * 100 + '%';
      petal.style.fontSize = (14 + Math.random() * 16) + 'px';
      petal.style.animationDuration = (10 + Math.random() * 12) + 's';
      petal.style.animationDelay = (Math.random() * 15) + 's';
      bg.appendChild(petal);
    }
  }

  /* ---------- 初始化 ---------- */
  function init() {
    renderHeroGarden();
    renderSeason('spring');
    initSeasonTabs();
    renderDictionary();
    initSearch();
    renderOccasions();
    renderCare('light');
    initCareTabs();
    initNavScroll();
    initMobileMenu();
    initBackToTop();
    createPetalBg();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
