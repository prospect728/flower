/* ============================================
   花之百科 - 数据 & SVG生成
   ============================================ */

/* ---------- 花朵SVG生成器 ---------- */
function flowerSVG(type, c1, c2, c3) {
  c2 = c2 || c1;
  c3 = c3 || '#FFD54F';
  var svg = '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">';

  if (type === 'rose') {
    // 玫瑰：螺旋层叠花瓣
    svg += '<g transform="translate(100,100)">';
    // 外层花瓣
    for (var i = 0; i < 6; i++) {
      svg += '<ellipse cx="0" cy="-42" rx="22" ry="32" fill="' + c1 + '" opacity="0.7" transform="rotate(' + (i*60) + ')"/>';
    }
    // 中层花瓣
    for (var i = 0; i < 6; i++) {
      svg += '<ellipse cx="0" cy="-28" rx="18" ry="26" fill="' + c2 + '" opacity="0.85" transform="rotate(' + (i*60+30) + ')"/>';
    }
    // 内层花瓣
    for (var i = 0; i < 5; i++) {
      svg += '<ellipse cx="0" cy="-16" rx="12" ry="18" fill="' + c1 + '" transform="rotate(' + (i*72) + ')"/>';
    }
    // 中心
    svg += '<circle cx="0" cy="0" r="10" fill="' + c2 + '"/>';
    svg += '<circle cx="0" cy="0" r="5" fill="' + c3 + '"/>';
    // 叶子
    svg += '</g>';
    svg += '<ellipse cx="100" cy="175" rx="30" ry="10" fill="#66BB6A" opacity="0.5"/>';

  } else if (type === 'sunflower') {
    // 向日葵：多花瓣围绕中心
    svg += '<g transform="translate(100,95)">';
    for (var i = 0; i < 16; i++) {
      svg += '<ellipse cx="0" cy="-50" rx="12" ry="28" fill="' + c1 + '" transform="rotate(' + (i*22.5) + ')"/>';
    }
    for (var i = 0; i < 16; i++) {
      svg += '<ellipse cx="0" cy="-42" rx="9" ry="22" fill="' + c2 + '" transform="rotate(' + (i*22.5+11) + ')"/>';
    }
    svg += '<circle cx="0" cy="0" r="30" fill="#5D4037"/>';
    svg += '<circle cx="0" cy="0" r="30" fill="#6D4C41" opacity="0.5"/>';
    // 种子纹理
    for (var i = 0; i < 12; i++) {
      var a = i * 30; var r = 12 + (i%3)*6;
      svg += '<circle cx="' + (Math.cos(a*Math.PI/180)*r) + '" cy="' + (Math.sin(a*Math.PI/180)*r) + '" r="2" fill="#3E2723" opacity="0.4"/>';
    }
    svg += '</g>';
    // 茎和叶
    svg += '<rect x="97" y="125" width="6" height="60" fill="#66BB6A" rx="3"/>';
    svg += '<ellipse cx="80" cy="155" rx="20" ry="10" fill="#66BB6A" transform="rotate(-30 80 155)"/>';
    svg += '<ellipse cx="120" cy="150" rx="18" ry="9" fill="#81C784" transform="rotate(30 120 150)"/>';

  } else if (type === 'tulip') {
    // 郁金香：杯状花瓣
    svg += '<g transform="translate(100,80)">';
    svg += '<path d="M-30,10 Q-30,-50 0,-55 Q30,-50 30,10 Q20,25 0,25 Q-20,25 -30,10Z" fill="' + c1 + '"/>';
    svg += '<path d="M-20,10 Q-22,-40 -2,-48 Q-2,-20 -8,15 Q-15,22 -20,10Z" fill="' + c2 + '" opacity="0.6"/>';
    svg += '<path d="M20,10 Q22,-40 2,-48 Q2,-20 8,15 Q15,22 20,10Z" fill="' + c2 + '" opacity="0.6"/>';
    svg += '<path d="M-8,10 Q-10,-35 0,-50 Q10,-35 8,10 Q4,22 0,22 Q-4,22 -8,10Z" fill="' + c1 + '" opacity="0.8"/>';
    svg += '</g>';
    svg += '<rect x="97" y="105" width="6" height="70" fill="#66BB6A" rx="3"/>';
    svg += '<path d="M100,140 Q70,130 60,155 Q80,150 100,145Z" fill="#81C784"/>';
    svg += '<path d="M100,150 Q130,140 140,165 Q120,160 100,155Z" fill="#66BB6A"/>';

  } else if (type === 'lily') {
    // 百合：喇叭形花瓣
    svg += '<g transform="translate(100,85)">';
    for (var i = 0; i < 6; i++) {
      svg += '<path d="M0,0 Q-14,-20 -8,-48 Q0,-55 8,-48 Q14,-20 0,0Z" fill="' + c1 + '" opacity="0.85" transform="rotate(' + (i*60) + ')"/>';
    }
    for (var i = 0; i < 6; i++) {
      svg += '<path d="M0,0 Q-8,-15 -4,-35 Q0,-40 4,-35 Q8,-15 0,0Z" fill="' + c2 + '" transform="rotate(' + (i*60+30) + ')"/>';
    }
    // 花蕊
    for (var i = 0; i < 6; i++) {
      svg += '<line x1="0" y1="0" x2="0" y2="-22" stroke="' + c3 + '" stroke-width="2" transform="rotate(' + (i*60) + ')"/>';
      svg += '<circle cx="0" cy="-24" r="3" fill="' + c3 + '" transform="rotate(' + (i*60) + ')"/>';
    }
    svg += '<circle cx="0" cy="0" r="6" fill="' + c3 + '"/>';
    svg += '</g>';
    svg += '<rect x="97" y="110" width="6" height="65" fill="#66BB6A" rx="3"/>';
    svg += '<ellipse cx="78" cy="145" rx="18" ry="8" fill="#81C784" transform="rotate(-25 78 145)"/>';

  } else if (type === 'cherry') {
    // 樱花：5片花瓣
    svg += '<g transform="translate(100,95)">';
    for (var i = 0; i < 5; i++) {
      svg += '<path d="M0,-10 Q-16,-30 -10,-55 Q0,-62 10,-55 Q16,-30 0,-10Z" fill="' + c1 + '" transform="rotate(' + (i*72) + ')"/>';
      // 花瓣缺口
      svg += '<path d="M-3,-52 Q0,-58 3,-52" fill="' + c2 + '" opacity="0.3" transform="rotate(' + (i*72) + ')"/>';
    }
    for (var i = 0; i < 5; i++) {
      svg += '<path d="M0,-5 Q-8,-18 -5,-32 Q0,-36 5,-32 Q8,-18 0,-5Z" fill="' + c2 + '" opacity="0.6" transform="rotate(' + (i*72+36) + ')"/>';
    }
    svg += '<circle cx="0" cy="0" r="8" fill="' + c3 + '"/>';
    for (var i = 0; i < 8; i++) {
      svg += '<line x1="0" y1="0" x2="0" y2="-7" stroke="#F57F17" stroke-width="1.5" transform="rotate(' + (i*45) + ')"/>';
    }
    svg += '</g>';

  } else if (type === 'lavender') {
    // 薰衣草：穗状花序
    svg += '<rect x="96" y="80" width="8" height="95" fill="#66BB6A" rx="4"/>';
    for (var i = 0; i < 10; i++) {
      var y = 30 + i * 12;
      var scale = 0.6 + i * 0.04;
      svg += '<g transform="translate(100,' + y + ') scale(' + scale + ')">';
      for (var j = 0; j < 4; j++) {
        svg += '<ellipse cx="0" cy="-8" rx="6" ry="10" fill="' + c1 + '" opacity="0.8" transform="rotate(' + (j*90) + ')"/>';
      }
      svg += '<circle cx="0" cy="0" r="4" fill="' + c2 + '"/>';
      svg += '</g>';
    }
    // 叶子
    svg += '<ellipse cx="80" cy="130" rx="14" ry="5" fill="#81C784" transform="rotate(-30 80 130)"/>';
    svg += '<ellipse cx="120" cy="135" rx="14" ry="5" fill="#66BB6A" transform="rotate(30 120 135)"/>';

  } else if (type === 'peony') {
    // 牡丹：层叠卷曲花瓣
    svg += '<g transform="translate(100,95)">';
    // 外层大花瓣
    for (var i = 0; i < 8; i++) {
      svg += '<path d="M0,0 Q-18,-25 -10,-52 Q0,-60 10,-52 Q18,-25 0,0Z" fill="' + c1 + '" opacity="0.7" transform="rotate(' + (i*45) + ')"/>';
    }
    // 中层
    for (var i = 0; i < 8; i++) {
      svg += '<path d="M0,0 Q-14,-20 -8,-40 Q0,-45 8,-40 Q14,-20 0,0Z" fill="' + c2 + '" opacity="0.85" transform="rotate(' + (i*45+22) + ')"/>';
    }
    // 内层
    for (var i = 0; i < 6; i++) {
      svg += '<ellipse cx="0" cy="-18" rx="10" ry="16" fill="' + c1 + '" transform="rotate(' + (i*60) + ')"/>';
    }
    // 中心
    svg += '<circle cx="0" cy="0" r="8" fill="' + c3 + '"/>';
    for (var i = 0; i < 6; i++) {
      svg += '<circle cx="' + (Math.cos(i*60*Math.PI/180)*5) + '" cy="' + (Math.sin(i*60*Math.PI/180)*5) + '" r="2" fill="#F57F17"/>';
    }
    svg += '</g>';

  } else if (type === 'daisy') {
    // 雏菊：白色花瓣+黄色中心
    svg += '<g transform="translate(100,95)">';
    for (var i = 0; i < 14; i++) {
      svg += '<ellipse cx="0" cy="-38" rx="9" ry="22" fill="' + c1 + '" transform="rotate(' + (i*25.7) + ')"/>';
    }
    for (var i = 0; i < 14; i++) {
      svg += '<ellipse cx="0" cy="-34" rx="7" ry="18" fill="' + c2 + '" opacity="0.6" transform="rotate(' + (i*25.7+13) + ')"/>';
    }
    svg += '<circle cx="0" cy="0" r="16" fill="' + c3 + '"/>';
    svg += '<circle cx="0" cy="0" r="16" fill="#FFA726" opacity="0.4"/>';
    for (var i = 0; i < 10; i++) {
      svg += '<circle cx="' + (Math.cos(i*36*Math.PI/180)*8) + '" cy="' + (Math.sin(i*36*Math.PI/180)*8) + '" r="2" fill="#E65100" opacity="0.4"/>';
    }
    svg += '</g>';
    svg += '<rect x="97" y="125" width="6" height="55" fill="#66BB6A" rx="3"/>';
    svg += '<ellipse cx="115" cy="150" rx="16" ry="7" fill="#81C784" transform="rotate(30 115 150)"/>';

  } else if (type === 'lotus') {
    // 荷花：层叠尖瓣
    svg += '<g transform="translate(100,95)">';
    // 外层
    for (var i = 0; i < 8; i++) {
      svg += '<path d="M0,-5 Q-12,-25 -6,-50 Q0,-58 6,-50 Q12,-25 0,-5Z" fill="' + c1 + '" opacity="0.7" transform="rotate(' + (i*45) + ')"/>';
    }
    // 中层
    for (var i = 0; i < 6; i++) {
      svg += '<path d="M0,0 Q-10,-18 -5,-38 Q0,-43 5,-38 Q10,-18 0,0Z" fill="' + c2 + '" opacity="0.85" transform="rotate(' + (i*60+30) + ')"/>';
    }
    // 内层
    for (var i = 0; i < 5; i++) {
      svg += '<path d="M0,0 Q-6,-12 -3,-25 Q0,-28 3,-25 Q6,-12 0,0Z" fill="' + c1 + '" transform="rotate(' + (i*72) + ')"/>';
    }
    // 花蕊
    svg += '<circle cx="0" cy="0" r="6" fill="' + c3 + '"/>';
    for (var i = 0; i < 6; i++) {
      svg += '<circle cx="0" cy="-10" r="2" fill="#F57F17" transform="rotate(' + (i*60) + ' 0 0)"/>';
    }
    svg += '</g>';
    // 水面
    svg += '<ellipse cx="100" cy="170" rx="60" ry="8" fill="#81C784" opacity="0.2"/>';

  } else if (type === 'hydrangea') {
    // 绣球花：簇状小花
    svg += '<g transform="translate(100,90)">';
    var positions = [
      [0,-30],[26,-22],[-26,-22],[18,-8],[-18,-8],[0,-12],
      [30,10],[-30,10],[14,18],[-14,18],[0,25],[0,5],
      [8,-30],[-8,-30],[22,2],[-22,2]
    ];
    positions.forEach(function(p) {
      for (var j = 0; j < 4; j++) {
        svg += '<ellipse cx="0" cy="-7" rx="5" ry="8" fill="' + c1 + '" opacity="0.7" transform="translate(' + p[0] + ',' + p[1] + ') rotate(' + (j*90) + ')"/>';
      }
      svg += '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="3" fill="' + c2 + '"/>';
    });
    svg += '</g>';
    svg += '<rect x="97" y="130" width="6" height="50" fill="#66BB6A" rx="3"/>';

  } else if (type === 'carnation') {
    // 康乃馨：褶皱花瓣
    svg += '<g transform="translate(100,90)">';
    for (var i = 0; i < 8; i++) {
      svg += '<path d="M0,0 Q-16,-15 -10,-38 Q0,-45 10,-38 Q16,-15 0,0Z" fill="' + c1 + '" opacity="0.75" transform="rotate(' + (i*45) + ')"/>';
    }
    for (var i = 0; i < 8; i++) {
      svg += '<path d="M0,0 Q-12,-12 -8,-30 Q0,-35 8,-30 Q12,-12 0,0Z" fill="' + c2 + '" opacity="0.9" transform="rotate(' + (i*45+22) + ')"/>';
    }
    // 褶皱纹理
    for (var i = 0; i < 8; i++) {
      svg += '<path d="M-6,-20 Q0,-25 6,-20" stroke="' + c1 + '" stroke-width="1" fill="none" opacity="0.4" transform="rotate(' + (i*45) + ')"/>';
    }
    svg += '<circle cx="0" cy="0" r="6" fill="' + c3 + '"/>';
    svg += '</g>';
    svg += '<rect x="97" y="120" width="6" height="60" fill="#66BB6A" rx="3"/>';

  } else if (type === 'iris') {
    // 鸢尾花
    svg += '<g transform="translate(100,90)">';
    // 下垂花瓣
    for (var i = 0; i < 3; i++) {
      svg += '<path d="M0,0 Q-14,15 -8,35 Q0,42 8,35 Q14,15 0,0Z" fill="' + c1 + '" opacity="0.85" transform="rotate(' + (i*120) + ')"/>';
    }
    // 上立花瓣
    for (var i = 0; i < 3; i++) {
      svg += '<path d="M0,0 Q-10,-15 -6,-35 Q0,-40 6,-35 Q10,-15 0,0Z" fill="' + c2 + '" transform="rotate(' + (i*120+60) + ')"/>';
    }
    svg += '<circle cx="0" cy="0" r="6" fill="' + c3 + '"/>';
    svg += '</g>';
    svg += '<rect x="97" y="120" width="6" height="60" fill="#66BB6A" rx="3"/>';
    svg += '<ellipse cx="80" cy="150" rx="16" ry="6" fill="#81C784" transform="rotate(-30 80 150)"/>';
  }

  svg += '</svg>';
  return svg;
}

/* ---------- Hero花园大图 ---------- */
function heroGardenSVG() {
  return '<svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">' +
    // 地面
    '<ellipse cx="250" cy="380" rx="200" ry="15" fill="#81C784" opacity="0.2"/>' +
    // 向日葵（左后）
    '<g transform="translate(120,150) scale(0.7)">' +
      '<g transform="translate(100,95)">' +
        '<g>' +
          Array.from({length:14},function(_,i){return '<ellipse cx="0" cy="-48" rx="11" ry="26" fill="#FFC107" transform="rotate('+i*25.7+')"/>';}).join('') +
          Array.from({length:14},function(_,i){return '<ellipse cx="0" cy="-40" rx="8" ry="20" fill="#FFD54F" transform="rotate('+(i*25.7+13)+')"/>';}).join('') +
          '<circle cx="0" cy="0" r="28" fill="#5D4037"/>' +
          '<circle cx="0" cy="0" r="28" fill="#6D4C41" opacity="0.4"/>' +
        '</g>' +
      '</g>' +
      '<rect x="97" y="120" width="6" height="80" fill="#66BB6A" rx="3"/>' +
      '<ellipse cx="80" cy="160" rx="18" ry="9" fill="#81C784" transform="rotate(-30 80 160)"/>' +
    '</g>' +
    // 玫瑰（中前）
    '<g transform="translate(250,200) scale(0.65)">' +
      '<g transform="translate(100,100)">' +
        Array.from({length:6},function(_,i){return '<ellipse cx="0" cy="-42" rx="22" ry="32" fill="#E91E63" opacity="0.7" transform="rotate('+i*60+')"/>';}).join('') +
        Array.from({length:6},function(_,i){return '<ellipse cx="0" cy="-28" rx="18" ry="26" fill="#F06292" opacity="0.85" transform="rotate('+(i*60+30)+')"/>';}).join('') +
        Array.from({length:5},function(_,i){return '<ellipse cx="0" cy="-16" rx="12" ry="18" fill="#E91E63" transform="rotate('+i*72+')"/>';}).join('') +
        '<circle cx="0" cy="0" r="8" fill="#F06292"/>' +
      '</g>' +
      '<rect x="97" y="125" width="6" height="70" fill="#66BB6A" rx="3"/>' +
      '<ellipse cx="80" cy="165" rx="16" ry="7" fill="#81C784" transform="rotate(-30 80 165)"/>' +
      '<ellipse cx="120" cy="160" rx="14" ry="6" fill="#66BB6A" transform="rotate(30 120 160)"/>' +
    '</g>' +
    // 郁金香群（右）
    '<g transform="translate(360,230)">' +
      '<g transform="translate(0,0)">' +
        '<path d="M-15,10 Q-15,-35 0,-40 Q15,-35 15,10 Q8,18 0,18 Q-8,18 -15,10Z" fill="#E91E63"/>' +
        '<path d="M-9,10 Q-10,-28 -1,-35 Q-1,-15 -4,12 Q-8,17 -9,10Z" fill="#F06292" opacity="0.5"/>' +
        '<rect x="-3" y="18" width="6" height="50" fill="#66BB6A" rx="3"/>' +
      '</g>' +
      '<g transform="translate(30,10)">' +
        '<path d="M-15,10 Q-15,-35 0,-40 Q15,-35 15,10 Q8,18 0,18 Q-8,18 -15,10Z" fill="#FFC107"/>' +
        '<path d="M-9,10 Q-10,-28 -1,-35 Q-1,-15 -4,12 Q-8,17 -9,10Z" fill="#FFD54F" opacity="0.5"/>' +
        '<rect x="-3" y="18" width="6" height="55" fill="#66BB6A" rx="3"/>' +
      '</g>' +
      '<g transform="translate(-28,12)">' +
        '<path d="M-15,10 Q-15,-35 0,-40 Q15,-35 15,10 Q8,18 0,18 Q-8,18 -15,10Z" fill="#AB47BC"/>' +
        '<path d="M-9,10 Q-10,-28 -1,-35 Q-1,-15 -4,12 Q-8,17 -9,10Z" fill="#CE93D8" opacity="0.5"/>' +
        '<rect x="-3" y="18" width="6" height="48" fill="#66BB6A" rx="3"/>' +
      '</g>' +
    '</g>' +
    // 雏菊（前左）
    '<g transform="translate(150,300) scale(0.35)">' +
      '<g transform="translate(100,95)">' +
        Array.from({length:12},function(_,i){return '<ellipse cx="0" cy="-38" rx="9" ry="22" fill="#FFFFFF" transform="rotate('+i*30+')"/>';}).join('') +
        '<circle cx="0" cy="0" r="16" fill="#FFC107"/>' +
      '</g>' +
      '<rect x="97" y="125" width="6" height="50" fill="#66BB6A" rx="3"/>' +
    '</g>' +
    // 薰衣草（前中右）
    '<g transform="translate(320,280) scale(0.3)">' +
      '<rect x="96" y="80" width="8" height="95" fill="#66BB6A" rx="4"/>' +
      Array.from({length:8},function(i){var y=30+i*14;var s=0.5+i*0.06;return '<g transform="translate(100,'+y+') scale('+s+')">'+Array.from({length:4},function(_,j){return '<ellipse cx="0" cy="-8" rx="6" ry="10" fill="#9C27B0" opacity="0.8" transform="rotate('+(j*90)+')"/>';}).join('')+'<circle cx="0" cy="0" r="4" fill="#7B1FA2"/></g>';}).join('') +
    '</g>' +
    // 草地
    Array.from({length:8},function(i){return '<ellipse cx="'+(100+i*42)+'" cy="370" rx="3" ry="8" fill="#66BB6A" opacity="0.6"/>';}).join('') +
    Array.from({length:6},function(i){return '<ellipse cx="'+(130+i*45)+'" cy="365" rx="2" ry="6" fill="#81C784" opacity="0.5"/>';}).join('') +
  '</svg>';
}

/* ---------- 花朵数据 ---------- */
var FLOWERS = [
  {
    name: '玫瑰', en: 'Rose', type: 'rose', c1: '#E91E63', c2: '#F06292',
    lang: '爱情、热情、浪漫', seasons: ['春','夏'], occasions: ['情人节','纪念日','表白'],
    difficulty: '中等', origin: '中国',
    desc: '花中之王，象征爱情与美丽。不同颜色有不同含义：红玫瑰代表热恋，白玫瑰代表纯洁，粉玫瑰代表初恋。',
    bg: 'linear-gradient(135deg, #FCE4EC, #F8BBD0)'
  },
  {
    name: '向日葵', en: 'Sunflower', type: 'sunflower', c1: '#FFC107', c2: '#FFD54F',
    lang: '阳光、忠诚、希望', seasons: ['夏','秋'], occasions: ['生日','毕业','鼓励'],
    difficulty: '容易', origin: '北美洲',
    desc: '永远追随太阳的花朵，象征着积极向上的生命力。花盘会随太阳转动，是光明与希望的化身。',
    bg: 'linear-gradient(135deg, #FFF8E1, #FFECB3)'
  },
  {
    name: '郁金香', en: 'Tulip', type: 'tulip', c1: '#E91E63', c2: '#F06292',
    lang: '完美之爱、高雅', seasons: ['春'], occasions: ['表白','母亲节','生日'],
    difficulty: '中等', origin: '土耳其',
    desc: '荷兰国花，杯状花朵亭亭玉立。红色代表爱的宣言，黄色代表快乐，紫色代表高贵与神秘。',
    bg: 'linear-gradient(135deg, #FCE4EC, #F8BBD0)'
  },
  {
    name: '百合', en: 'Lily', type: 'lily', c1: '#FFFFFF', c2: '#F5F5F5', c3: '#FFA726',
    lang: '纯洁、高贵、祝福', seasons: ['夏'], occasions: ['婚礼','母亲节','探病'],
    difficulty: '中等', origin: '中国',
    desc: '花朵硕大优雅，香气清幽。在中国象征百年好合，在西方象征纯洁与神圣。是婚礼和祝福的首选花材。',
    bg: 'linear-gradient(135deg, #FAFAFA, #F5F5F5)'
  },
  {
    name: '樱花', en: 'Cherry Blossom', type: 'cherry', c1: '#F8BBD0', c2: '#F48FB1', c3: '#FFC107',
    lang: '生命、纯洁、短暂之美', seasons: ['春'], occasions: ['赏春','毕业'],
    difficulty: '困难', origin: '日本',
    desc: '日本国花，花开时如云似霞。花期短暂却绚烂至极，象征着生命的珍贵与绚烂。花见是日本最盛大的春日习俗。',
    bg: 'linear-gradient(135deg, #FCE4EC, #F8BBD0)'
  },
  {
    name: '薰衣草', en: 'Lavender', type: 'lavender', c1: '#9C27B0', c2: '#7B1FA2', c3: '#7B1FA2',
    lang: '等待爱情、宁静', seasons: ['夏'], occasions: ['纪念日','放松'],
    difficulty: '中等', origin: '地中海',
    desc: '紫色的花海令人心醉，香气有安神助眠之效。法国普罗旺斯的薰衣草田是世界最浪漫的风景之一。',
    bg: 'linear-gradient(135deg, #F3E5F5, #E1BEE7)'
  },
  {
    name: '牡丹', en: 'Peony', type: 'peony', c1: '#E91E63', c2: '#F06292', c3: '#FFD54F',
    lang: '富贵、圆满、雍容', seasons: ['春','夏'], occasions: ['乔迁','开业','祝福'],
    difficulty: '困难', origin: '中国',
    desc: '中国国花，花中之王。花朵硕大华丽，象征富贵与荣华。唐代以来被视为繁荣昌盛的象征，"唯有牡丹真国色"。',
    bg: 'linear-gradient(135deg, #FCE4EC, #F8BBD0)'
  },
  {
    name: '雏菊', en: 'Daisy', type: 'daisy', c1: '#FFFFFF', c2: '#F5F5F5', c3: '#FFC107',
    lang: '天真、纯洁、快乐', seasons: ['春','夏'], occasions: ['生日','友谊','道歉'],
    difficulty: '容易', origin: '欧洲',
    desc: '小巧玲珑的可爱花朵，白瓣黄心如同迷你太阳。象征着天真烂漫的快乐，是友谊和纯真的代言花。',
    bg: 'linear-gradient(135deg, #FAFAFA, #FFF8E1)'
  },
  {
    name: '荷花', en: 'Lotus', type: 'lotus', c1: '#F8BBD0', c2: '#F48FB1', c3: '#FFC107',
    lang: '清雅、高洁、出淤泥而不染', seasons: ['夏'], occasions: ['禅修','祝福'],
    difficulty: '中等', origin: '中国',
    desc: '花中君子，出淤泥而不染。在中国文化中象征高洁品格，佛教中视为神圣之花。"接天莲叶无穷碧，映日荷花别样红"。',
    bg: 'linear-gradient(135deg, #FCE4EC, #E8F5E9)'
  },
  {
    name: '绣球花', en: 'Hydrangea', type: 'hydrangea', c1: '#42A5F5', c2: '#1E88E5', c3: '#1E88E5',
    lang: '团聚、圆满、希望', seasons: ['夏','秋'], occasions: ['婚礼','乔迁','友谊'],
    difficulty: '中等', origin: '亚洲',
    desc: '花球硕大圆满，象征团圆与美满。花色随土壤酸碱度变化，酸性开蓝色花，碱性开粉色花，十分神奇。',
    bg: 'linear-gradient(135deg, #E3F2FD, #BBDEFB)'
  },
  {
    name: '康乃馨', en: 'Carnation', type: 'carnation', c1: '#EC407A', c2: '#F06292', c3: '#FFD54F',
    lang: '母爱、感恩、温馨', seasons: ['春','夏'], occasions: ['母亲节','教师节','感恩'],
    difficulty: '容易', origin: '地中海',
    desc: '母亲之花，象征母爱与感恩。花瓣层层褶皱如丝绒，花期持久。粉色康乃馨是母亲节的经典之选。',
    bg: 'linear-gradient(135deg, #FCE4EC, #F8BBD0)'
  },
  {
    name: '鸢尾花', en: 'Iris', type: 'iris', c1: '#7B1FA2', c2: '#9C27B0', c3: '#FFC107',
    lang: '信仰、智慧、勇敢', seasons: ['春','夏'], occasions: ['毕业','祝福','鼓励'],
    difficulty: '中等', origin: '欧洲',
    desc: '法国国花，花瓣形如飞鸟。象征着光明与自由。梵高笔下的鸢尾花举世闻名，是艺术与美的象征。',
    bg: 'linear-gradient(135deg, #F3E5F5, #E1BEE7)'
  }
];

/* ---------- 季节数据 ---------- */
var SEASONS = {
  spring: { name: '春', icon: '🌸', color: '#E91E63', flowers: [] },
  summer: { name: '夏', icon: '🌻', color: '#FFC107', flowers: [] },
  autumn: { name: '秋', icon: '🍁', color: '#FF8A65', flowers: [] },
  winter: { name: '冬', icon: '❄️', color: '#42A5F5', flowers: [] }
};

// 按季节分类花朵
FLOWERS.forEach(function(f) {
  f.seasons.forEach(function(s) {
    var key = { '春':'spring','夏':'summer','秋':'autumn','冬':'winter' }[s];
    if (SEASONS[key]) SEASONS[key].flowers.push(f);
  });
});

// 冬季补充梅花和山茶
SEASONS.winter.flowers.push({
  name: '山茶花', en: 'Camellia', type: 'rose', c1: '#E91E63', c2: '#F06292', c3: '#FFD54F',
  lang: '谦逊、理想之爱', desc: '冬季绽放的花中寿星，花瓣层层如玫瑰。象征坚贞不渝的爱与理想。雪中盛开格外动人。',
  bg: 'linear-gradient(135deg, #FCE4EC, #F8BBD0)'
});
SEASONS.winter.flowers.push({
  name: '水仙', en: 'Narcissus', type: 'daisy', c1: '#FFFDE7', c2: '#FFF9C4', c3: '#FFC107',
  lang: '自爱、尊敬、团圆', desc: '中国十大名花之一，春节盛开。象征团圆与美好。水中亭亭玉立，有"凌波仙子"之称。',
  bg: 'linear-gradient(135deg, #FFFDE7, #FFF8E1)'
});

// 秋季补充桂花
SEASONS.autumn.flowers.push({
  name: '桂花', en: 'Osmanthus', type: 'lavender', c1: '#FFC107', c2: '#FFA000', c3: '#FFA000',
  lang: '收获、美好、吉祥', desc: '中秋之花，香气沁人心脾。象征丰收与团圆，"桂"谐音"贵"，寓意富贵吉祥。',
  bg: 'linear-gradient(135deg, #FFF8E1, #FFECB3)'
});

/* ---------- 场合数据 ---------- */
var OCCASIONS = [
  { id: 'love',     icon: '💝', name: '表白/恋爱', keywords: ['情人节','表白','纪念日'] },
  { id: 'birthday', icon: '🎂', name: '生日祝福',   keywords: ['生日'] },
  { id: 'mother',   icon: '👩', name: '感恩母亲',   keywords: ['母亲节','感恩'] },
  { id: 'wedding',  icon: '💍', name: '婚礼祝福',   keywords: ['婚礼'] },
  { id: 'grad',     icon: '🎓', name: '毕业/鼓励',   keywords: ['毕业','鼓励'] },
  { id: 'friend',   icon: '🤝', name: '友谊/道歉',   keywords: ['友谊','道歉'] },
  { id: 'visit',    icon: '🏥', name: '探望/祝福',   keywords: ['探病','祝福','乔迁'] },
  { id: 'thanks',   icon: '🙏', name: '感谢师长',   keywords: ['教师节','感恩'] }
];

/* ---------- 养花技巧数据 ---------- */
var CARE_DATA = {
  light: {
    panels: [
      { icon: '☀️', color: '#FFF3E0', title: '喜阳花卉', text: '向日葵、玫瑰、月季等需要每天6小时以上直射阳光。放在南向阳台或院子，光照不足会徒长、不开花。' },
      { icon: '🌤️', color: '#E3F2FD', title: '半阴花卉', text: '绣球花、杜鹃、茶花等喜欢散射光。放在东向或西向阳台，避免正午暴晒，夏季需要遮阴。' },
      { icon: '🌑', color: '#F3E5F5', title: '耐阴花卉', text: '绿萝、蝴蝶兰、文心兰等可以在室内明亮处生长。避免直射阳光，适合放在北向窗台或室内。' }
    ],
    tip: '🌿 小贴士：植物会"说话"——叶片发黄可能是光太强，枝条徒长是光不够。观察植物的状态来调整位置！'
  },
  water: {
    panels: [
      { icon: '💧', color: '#E3F2FD', title: '浇水原则', text: '核心口诀："见干见湿，浇则浇透"。等土壤表面2-3cm干燥后再浇水，一次浇到盆底出水为止。不要每天浇一点！' },
      { icon: '🕐', color: '#FFF3E0', title: '浇水时间', text: '春夏早晨或傍晚浇水最佳，正午高温时不要浇。冬季中午温暖时浇水，避免冻根。水温接近室温为好。' },
      { icon: '🌡️', color: '#FCE4EC', title: '季节调整', text: '春夏生长旺季多浇（2-3天一次），秋冬休眠期少浇（7-10天一次）。雨天不浇，阴天少浇。多肉等耐旱植物宁干勿湿。' }
    ],
    tip: '🌿 小贴士：用手指插入土中2cm，感觉干燥再浇。宁可少浇也不要过涝——烂根比干枯更难挽救！'
  },
  soil: {
    panels: [
      { icon: '🪴', color: '#E8F5E9', title: '土壤配比', text: '通用配方：泥炭土5:珍珠岩3:蛭石2。喜酸花卉（杜鹃、茶花）用松针土，多肉用颗粒土。底部铺陶粒做排水层。' },
      { icon: '🧪', color: '#F3E5F5', title: '酸碱度', text: '大多数花卉喜微酸性（pH 5.5-6.5）。绣球花可通过调酸变蓝、调碱变粉。北方水土偏碱，定期施硫酸亚铁调节。' },
      { icon: '🔄', color: '#FFF3E0', title: '换盆换土', text: '每1-2年换盆一次，春秋进行。换盆时修剪老根烂根，换新土。盆选比根团大一号即可，不要一次性换太大的盆。' }
    ],
    tip: '🌿 小贴士：盆底一定要有排水孔！没有排水孔的"网红花盆"是植物杀手，浇水后积水会迅速导致烂根。'
  },
  fertilize: {
    panels: [
      { icon: '🌱', color: '#E8F5E9', title: '施肥时机', text: '生长期（春秋）每2周施一次薄肥，花期前增施磷钾肥促花。冬季休眠期停止施肥。新换盆后1个月内不施肥。' },
      { icon: '⚗️', color: '#E3F2FD', title: '肥料种类', text: '氮肥促叶（观叶植物），磷肥促花（开花植物），钾肥壮根。新手用通用型缓释肥最省心，撒在土面即可持续释放。' },
      { icon: '⚠️', color: '#FCE4EC', title: '施肥禁忌', text: '"薄肥勤施"是铁律！宁可稀一点也不要浓。生肥（淘米水、牛奶）必须充分腐熟后才能用，直接倒会烧根和生虫。' }
    ],
    tip: '🌿 小贴士：新手强烈推荐缓释肥（如奥绿），3-6个月撒一次就行，不会烧根，懒人养花神器！'
  },
  prune: {
    panels: [
      { icon: '✂️', color: '#E8F5E9', title: '日常修剪', text: '及时摘除残花（防止消耗养分），剪掉枯枝黄叶。开花后短截枝条1/3，可促进二次开花。切口斜45°，在芽点上方0.5cm处剪。' },
      { icon: '🌿', color: '#FFF3E0', title: '打顶摘心', text: '幼苗长到10cm时摘掉顶芽，促进侧枝生长，让株型更饱满。适用于薄荷、矮牵牛等。开花后重剪可重塑株型。' },
      { icon: '🍂', color: '#FCE4EC', title: '休眠期修剪', text: '冬季落叶后或早春萌芽前进行重剪。剪去病虫枝、交叉枝、过密枝。保留主枝骨架，去除细弱枝。工具要消毒。' }
    ],
    tip: '🌿 小贴士：修剪后喷一次多菌灵防止切口感染。修剪下来的健康枝条可以扦插繁殖——一盆变多盆！'
  }
};
