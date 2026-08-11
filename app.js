(function () {
'use strict';

var LS_KEY = 'parler-state-v1';
var DAILY_GOAL = 50;

var units = [
  {
    id: 'u1', num: '1', title: '先打个招呼', subtitle: '问候、自我介绍与数字',
    color: '#e4573d', soft: '#fde8e3',
    lessons: [
      { id: 'l1', title: '问候与礼貌', icon: 'message-circle', phrase: false, items: [
        { fr: 'bonjour', zh: '你好 / 您好', ipa: 'bɔ̃.ʒuʁ', tip: 'bon 带鼻音，ju 像“儒”' },
        { fr: 'merci', zh: '谢谢', ipa: 'mɛʁ.si', tip: 'mer 里的 r 轻轻带过' },
        { fr: 'pardon', zh: '不好意思', ipa: 'paʁ.dɔ̃', tip: '结尾 on 带鼻音' },
        { fr: "s'il vous plaît", zh: '请', ipa: 'sil vu plɛ', tip: '口语中常说 sil vou plɛ' },
        { fr: 'au revoir', zh: '再见', ipa: 'o ʁə.vwaʁ', tip: 'revoir 的 r 很轻' },
        { fr: 'oui', zh: '是的', ipa: 'wi', tip: '比中文“喂”更短' },
        { fr: 'non', zh: '不是', ipa: 'nɔ̃', tip: '结尾 on 带鼻音' },
        { fr: 'salut', zh: '嗨', ipa: 'sa.ly', tip: 'lu 像“吕”' }
      ]},
      { id: 'l2', title: '见面问答', icon: 'users', phrase: true, items: [
        { fr: 'comment ça va ?', zh: '你好吗？', ipa: 'kɔ.mɑ̃ sa va', tip: 'ça 读 sa，va 读 va', words: ['comment', 'ça', 'va'] },
        { fr: 'ça va bien, merci', zh: '我很好，谢谢', ipa: 'sa va bjɛ̃ mɛʁ.si', tip: 'bien 结尾是鼻音', words: ['ça', 'va', 'bien', 'merci'] },
        { fr: "je m'appelle...", zh: '我叫……', ipa: 'ʒə ma.pɛl', tip: 'je 很轻，m\'appelle 连读', words: ['je', "m'appelle"] },
        { fr: 'enchanté(e)', zh: '很高兴认识你', ipa: 'ɑ̃.ʃɑ̃.te', tip: '两个 en 都是鼻音' },
        { fr: "d'où viens-tu ?", zh: '你从哪里来？', ipa: 'du vjɛ̃ ty', tip: 'viens 读 vjɛ̃', words: ["d'où", 'viens', 'tu'] },
        { fr: 'je viens de...', zh: '我来自……', ipa: 'ʒə vjɛ̃ də', tip: 'de 读得很轻', words: ['je', 'viens', 'de'] }
      ]},
      { id: 'l3', title: '数字 0-10', icon: 'list-checks', phrase: false, items: [
        { fr: 'zéro', zh: '零', ipa: 'ze.ʁo', tip: 'é 读得饱满' },
        { fr: 'un', zh: '一', ipa: 'œ̃', tip: '带鼻音的 un' },
        { fr: 'deux', zh: '二', ipa: 'dø', tip: 'eu 圆唇' },
        { fr: 'trois', zh: '三', ipa: 'tʁwa', tip: 'tr 卷舌轻一点' },
        { fr: 'quatre', zh: '四', ipa: 'katʁ', tip: '末尾 r 很轻' },
        { fr: 'cinq', zh: '五', ipa: 'sɛ̃k', tip: 'in 是鼻音' },
        { fr: 'six', zh: '六', ipa: 'sis', tip: '结尾 s 要读出' },
        { fr: 'dix', zh: '十', ipa: 'dis', tip: '结尾 s 要读出' }
      ]}
    ]
  },
  {
    id: 'u2', num: '2', title: '生活日常', subtitle: '家庭、时间与星期',
    color: '#0d9488', soft: '#ddf3ef',
    lessons: [
      { id: 'l4', title: '家庭成员', icon: 'house', phrase: false, items: [
        { fr: 'la famille', zh: '家庭', ipa: 'la fa.mij', tip: 'ille 读 ij' },
        { fr: 'le père', zh: '爸爸', ipa: 'lə pɛʁ', tip: 'è 开口读' },
        { fr: 'la mère', zh: '妈妈', ipa: 'la mɛʁ', tip: 'mère 与 père 同韵' },
        { fr: 'le frère', zh: '兄弟', ipa: 'lə fʁɛʁ', tip: 'r 轻颤' },
        { fr: 'la sœur', zh: '姐妹', ipa: 'la sœʁ', tip: 'œ 圆唇' },
        { fr: "l'enfant", zh: '孩子', ipa: 'lɑ̃.fɑ̃', tip: '两个鼻音' }
      ]},
      { id: 'l5', title: '时间与日期', icon: 'calendar-days', phrase: false, items: [
        { fr: "aujourd'hui", zh: '今天', ipa: 'o.ʒuʁ.dɥi', tip: 'hui 读 dɥi' },
        { fr: 'demain', zh: '明天', ipa: 'də.mɛ̃', tip: 'in 结尾鼻音' },
        { fr: 'hier', zh: '昨天', ipa: 'jɛʁ', tip: 'h 不发音' },
        { fr: 'le matin', zh: '早上', ipa: 'lə ma.tɛ̃', tip: 'in 是鼻音' },
        { fr: 'le soir', zh: '晚上', ipa: 'lə swaʁ', tip: 'oi 读 wa' },
        { fr: 'la nuit', zh: '夜晚', ipa: 'la nɥi', tip: 'nuit 很短' }
      ]},
      { id: 'l6', title: '星期一到日', icon: 'layers', phrase: false, items: [
        { fr: 'lundi', zh: '星期一', ipa: 'lœ̃.di', tip: 'un 带鼻音' },
        { fr: 'mardi', zh: '星期二', ipa: 'maʁ.di', tip: 'ar 像“啊呵”' },
        { fr: 'mercredi', zh: '星期三', ipa: 'mɛʁ.kʁə.di', tip: 'cre 轻读' },
        { fr: 'jeudi', zh: '星期四', ipa: 'ʒø.di', tip: 'eu 圆唇' },
        { fr: 'vendredi', zh: '星期五', ipa: 'vɑ̃.dʁə.di', tip: 'an 是鼻音' },
        { fr: 'samedi', zh: '星期六', ipa: 'sam.di', tip: 'ame 读 am' },
        { fr: 'dimanche', zh: '星期日', ipa: 'di.mɑ̃ʃ', tip: 'an 和 che 连读' }
      ]}
    ]
  },
  {
    id: 'u3', num: '3', title: '吃吃喝喝', subtitle: '食物、饮品与常用短语',
    color: '#d99a2b', soft: '#fbf0d9',
    lessons: [
      { id: 'l7', title: '食物词汇', icon: 'utensils', phrase: false, items: [
        { fr: 'le pain', zh: '面包', ipa: 'lə pɛ̃', tip: 'ain 是鼻音' },
        { fr: 'le fromage', zh: '奶酪', ipa: 'lə fʁɔ.maʒ', tip: 'age 读 aʒ' },
        { fr: 'le croissant', zh: '牛角包', ipa: 'lə kʁwa.sɑ̃', tip: 'oi 读 wa' },
        { fr: 'la pomme', zh: '苹果', ipa: 'la pɔm', tip: 'om 带鼻音' },
        { fr: 'le poulet', zh: '鸡肉', ipa: 'lə pu.lɛ', tip: 'ou 读 u' },
        { fr: 'délicieux', zh: '好吃', ipa: 'de.li.sjø', tip: 'cieux 读 sjø' }
      ]},
      { id: 'l8', title: '饮品与点餐', icon: 'coffee', phrase: false, items: [
        { fr: "de l'eau", zh: '一些水', ipa: 'də lo', tip: 'eau 读 o' },
        { fr: 'un café', zh: '一杯咖啡', ipa: 'œ̃ ka.fe', tip: 'é 读长一点' },
        { fr: 'du thé', zh: '茶', ipa: 'dy te', tip: 'th 读 t' },
        { fr: 'un jus', zh: '一杯果汁', ipa: 'œ̃ ʒy', tip: 'j 读 ʒ' },
        { fr: "l'addition", zh: '账单', ipa: 'la.di.sjɔ̃', tip: 'tion 读 sjɔ̃' },
        { fr: 'je voudrais...', zh: '我想要……', ipa: 'ʒə vu.dʁɛ', tip: 'drais 读 dʁɛ', words: ['je', 'voudrais'] }
      ]},
      { id: 'l9', title: '实用短语', icon: 'heart', phrase: true, items: [
        { fr: 'combien ça coûte ?', zh: '多少钱？', ipa: 'kɔ̃.bjɛ̃ sa kut', tip: 'combien 两个鼻音', words: ['combien', 'ça', 'coûte'] },
        { fr: "c'est trop cher", zh: '太贵了', ipa: 'sɛ tʁo ʃɛʁ', tip: 'est 读 è', words: ["c'est", 'trop', 'cher'] },
        { fr: 'je ne comprends pas', zh: '我不明白', ipa: 'ʒə nə kɔ̃.pʁɑ̃ pa', tip: 'comprends 有鼻音', words: ['je', 'ne', 'comprends', 'pas'] },
        { fr: 'parlez-vous anglais ?', zh: '您会说英语吗？', ipa: 'paʁ.le vu ɑ̃.glɛ', tip: 'anglais 结尾不读 s', words: ['parlez', 'vous', 'anglais'] },
        { fr: 'à bientôt', zh: '回头见', ipa: 'a bjɛ̃.to', tip: 'bientôt 有鼻音' },
        { fr: 'bonne journée', zh: '祝你今天愉快', ipa: 'bɔn ʒuʁ.ne', tip: 'ne 轻读' }
      ]}
    ]
  },
  {
    id: 'u4', num: '4', title: '出门在外', subtitle: '交通、方向与天气',
    color: '#3f7fd6', soft: '#e3edfb',
    lessons: [
      { id: 'l10', title: '交通出行', icon: 'train-front', phrase: false, items: [
        { fr: "l'aéroport", zh: '机场', ipa: 'la.e.ʁɔ.pɔʁ', tip: 'aéro 三个音节' },
        { fr: 'la gare', zh: '火车站', ipa: 'la ɡaʁ', tip: 'gare 读 gaʁ' },
        { fr: 'le train', zh: '火车', ipa: 'lə tʁɛ̃', tip: 'ain 是鼻音' },
        { fr: "l'avion", zh: '飞机', ipa: 'la.vjɔ̃', tip: 'ion 带鼻音' },
        { fr: 'le billet', zh: '车票', ipa: 'lə bi.jɛ', tip: 'll 读 y' },
        { fr: 'le métro', zh: '地铁', ipa: 'lə me.tʁo', tip: 'é 读长一点' }
      ]},
      { id: 'l11', title: '方向与地点', icon: 'map-pin', phrase: true, items: [
        { fr: 'où est la gare ?', zh: '火车站在哪里？', ipa: 'u ɛ la ɡaʁ', tip: 'où 读 u', words: ['où', 'est', 'la', 'gare'] },
        { fr: 'à gauche', zh: '左边', ipa: 'a ɡoʃ', tip: 'au 读 o' },
        { fr: 'à droite', zh: '右边', ipa: 'a dʁwat', tip: 'droite 读 dʁwat' },
        { fr: 'tout droit', zh: '直走', ipa: 'tu dʁwa', tip: 'oi 读 wa', words: ['tout', 'droit'] },
        { fr: 'la carte', zh: '地图', ipa: 'la kaʁt', tip: '末尾 t 不读' },
        { fr: "l'hôtel", zh: '酒店', ipa: 'lo.tɛl', tip: 'h 不发音' }
      ]},
      { id: 'l12', title: '天气与感受', icon: 'cloud', phrase: true, items: [
        { fr: 'il fait beau', zh: '天气很好', ipa: 'il fɛ bo', tip: 'fai 读 fè', words: ['il', 'fait', 'beau'] },
        { fr: 'il pleut', zh: '下雨了', ipa: 'il plø', tip: 'eu 圆唇', words: ['il', 'pleut'] },
        { fr: 'il neige', zh: '下雪了', ipa: 'il nɛʒ', tip: 'ei 读 è', words: ['il', 'neige'] },
        { fr: 'chaud', zh: '热', ipa: 'ʃo', tip: 'au 读 o' },
        { fr: 'froid', zh: '冷', ipa: 'fʁwa', tip: 'oi 读 wa' },
        { fr: 'le soleil', zh: '太阳', ipa: 'lə sɔ.lɛj', tip: 'eil 读 ɛj' }
      ]}
    ]
  }
];

var sentenceBank = {
  'l1:0': ['Bonjour, comment ça va ?', '你好，你好吗？'],
  'l1:1': ['Merci beaucoup pour ton aide.', '非常感谢你的帮助。'],
  'l1:2': ['Pardon, où sont les toilettes ?', '不好意思，洗手间在哪里？'],
  'l1:3': ["Un café, s'il vous plaît.", '请来一杯咖啡。'],
  'l1:4': ['Au revoir, à demain !', '再见，明天见！'],
  'l1:5': ["Oui, je suis d'accord.", '是的，我同意。'],
  'l1:6': ['Non, je ne pense pas.', '不，我不这么认为。'],
  'l1:7': ['Salut, ça va bien ?', '嗨，你还好吗？'],
  'l2:0': ["Comment ça va aujourd'hui ?", '今天你好吗？'],
  'l2:1': ['Ça va bien, merci. Et toi ?', '我很好，谢谢。你呢？'],
  'l2:2': ["Je m'appelle Lucas.", '我叫吕卡。'],
  'l2:3': ['Enchanté de te rencontrer.', '很高兴认识你。'],
  'l2:4': ["D'où viens-tu, Marie ?", '玛丽，你从哪里来？'],
  'l2:5': ['Je viens de Shanghai.', '我来自上海。'],
  'l3:0': ['Le score est zéro.', '分数是零。'],
  'l3:1': ["J'ai un frère.", '我有一个兄弟。'],
  'l3:2': ['Il y a deux chiens.', '有两条狗。'],
  'l3:3': ['Je prends trois pommes.', '我拿了三个苹果。'],
  'l3:4': ['La réunion est à quatre heures.', '会议在四点。'],
  'l3:5': ['Il a cinq ans.', '他五岁。'],
  'l3:6': ['Nous sommes six.', '我们一共六个人。'],
  'l3:7': ["Dix minutes, s'il vous plaît.", '请等十分钟。'],
  'l4:0': ['Ma famille est grande.', '我的家庭很大。'],
  'l4:1': ['Mon père travaille à Paris.', '我爸爸在巴黎工作。'],
  'l4:2': ['Ma mère cuisine très bien.', '我妈妈做饭很好吃。'],
  'l4:3': ['Mon frère aime le football.', '我哥哥喜欢足球。'],
  'l4:4': ['Ma sœur est étudiante.', '我姐姐是学生。'],
  'l4:5': ["L'enfant joue dans le parc.", '孩子在公园玩。'],
  'l5:0': ["Aujourd'hui, il fait beau.", '今天天气很好。'],
  'l5:1': ['À demain, mes amis !', '朋友们，明天见！'],
  'l5:2': ["Hier, j'ai vu un film.", '昨天我看了一部电影。'],
  'l5:3': ['Je bois du café le matin.', '我早上喝咖啡。'],
  'l5:4': ['On dîne ensemble ce soir.', '我们今晚一起吃饭。'],
  'l5:5': ['Bonne nuit, fais de beaux rêves.', '晚安，做个好梦。'],
  'l6:0': ['Le lundi, je vais au travail.', '星期一我去上班。'],
  'l6:1': ["Mardi, j'ai un cours de français.", '星期二我有法语课。'],
  'l6:2': ['Le mercredi, les enfants jouent.', '星期三孩子们玩耍。'],
  'l6:3': ['Jeudi, nous avons une réunion.', '星期四我们有会议。'],
  'l6:4': ['Vendredi soir, on sort au cinéma.', '星期五晚上我们去看电影。'],
  'l6:5': ['Samedi, je fais du sport.', '星期六我运动。'],
  'l6:6': ['Dimanche, toute la famille se retrouve.', '星期日全家团聚。'],
  'l7:0': ["Je voudrais du pain, s'il vous plaît.", '请给我一些面包。'],
  'l7:1': ['Le fromage français est délicieux.', '法国奶酪很好吃。'],
  'l7:2': ['Un croissant et un café, merci.', '一个牛角包和一杯咖啡，谢谢。'],
  'l7:3': ['Elle mange une pomme chaque jour.', '她每天吃一个苹果。'],
  'l7:4': ['Nous mangeons du poulet ce soir.', '我们今晚吃鸡肉。'],
  'l7:5': ['Ce gâteau est vraiment délicieux !', '这个蛋糕真好吃！'],
  'l8:0': ["Je bois de l'eau après le sport.", '运动后我喝水。'],
  'l8:1': ['Il prend un café noir.', '他喝一杯黑咖啡。'],
  'l8:2': ['Le thé vert est bon pour la santé.', '绿茶有益健康。'],
  'l8:3': ["Un jus d'orange, s'il vous plaît.", '请来一杯橙汁。'],
  'l8:4': ["L'addition, s'il vous plaît !", '请结账！'],
  'l8:5': ['Je voudrais un dessert.', '我想要一份甜点。'],
  'l9:0': ['Combien ça coûte, ce sac ?', '这个包多少钱？'],
  'l9:1': ["C'est trop cher, je passe.", '太贵了，我算了。'],
  'l9:2': ['Je ne comprends pas, parlez plus lentement.', '我不明白，请说慢一点。'],
  'l9:3': ['Parlez-vous anglais, monsieur ?', '先生，您会说英语吗？'],
  'l9:4': ["À bientôt, j'espère !", '回头见，希望很快再见！'],
  'l9:5': ['Bonne journée à vous !', '祝您今天愉快！'],
  'l10:0': ["L'avion part de l'aéroport à midi.", '飞机中午从机场起飞。'],
  'l10:1': ['La gare est près du centre-ville.', '火车站在市中心附近。'],
  'l10:2': ['Le train arrive à huit heures.', '火车八点到达。'],
  'l10:3': ["L'avion est à l'heure.", '飞机准点。'],
  'l10:4': ["J'ai acheté mon billet en ligne.", '我在网上买了票。'],
  'l10:5': ['Je prends le métro tous les jours.', '我每天坐地铁。'],
  'l11:0': ["Où est la gare, s'il vous plaît ?", '请问火车站在哪里？'],
  'l11:1': ['La banque est à gauche.', '银行在左边。'],
  'l11:2': ['Tournez à droite au feu.', '在红绿灯处右转。'],
  'l11:3': ['Allez tout droit, puis tournez.', '直走，然后转弯。'],
  'l11:4': ["J'étudie la carte de la ville.", '我在研究城市地图。'],
  'l11:5': ["L'hôtel est très confortable.", '这家酒店很舒适。'],
  'l12:0': ["Aujourd'hui, il fait beau et chaud.", '今天天气晴朗又热。'],
  'l12:1': ['Il pleut, prends ton parapluie.', '下雨了，带上你的伞。'],
  'l12:2': ['Il neige sur les montagnes.', '山上在下雪。'],
  'l12:3': ['Il fait chaud en été.', '夏天很热。'],
  'l12:4': ['Il fait froid ce matin.', '今天早上很冷。'],
  'l12:5': ['Le soleil brille dans le ciel.', '太阳在天空闪耀。']
};

var extraLessons = [
  { unitId: 'u1', insertAfter: 'l3', lesson: { id: 'l13', title: '进阶问候', icon: 'sparkles', phrase: true, items: [
    { fr: 'très bien', zh: '很好', ipa: 'tʁɛ bjɛ̃', tip: 'très 的 s 不发音', ex: 'Très bien, merci !', exZh: '很好，谢谢！', words: ['très', 'bien'] },
    { fr: 'pas mal', zh: '还不错', ipa: 'pa mal', tip: 'mal 读 mal', ex: 'Ça va ? Pas mal !', exZh: '你好吗？还不错！', words: ['pas', 'mal'] },
    { fr: "à tout à l'heure", zh: '一会儿见', ipa: 'a tu ta lœʁ', tip: "l'heure 读 lœʁ", ex: "À tout à l'heure !", exZh: '一会儿见！', words: ['à', 'tout', 'à', "l'heure"] },
    { fr: 'bonne soirée', zh: '祝你晚上愉快', ipa: 'bɔn swa.ʁe', tip: 'soirée 读 swaʁe', ex: 'Bonne soirée, à demain !', exZh: '晚上愉快，明天见！', words: ['bonne', 'soirée'] },
    { fr: 'enchanté de faire votre connaissance', zh: '很高兴认识您', ipa: 'ɑ̃.ʃɑ̃.te də fɛʁ vɔtʁ kɔ.nɛ.sɑ̃s', tip: '长句注意连读', ex: 'Enchanté de faire votre connaissance, madame.', exZh: '夫人，很高兴认识您。', words: ['enchanté', 'de', 'faire', 'votre', 'connaissance'] }
  ] } },
  { unitId: 'u1', insertAfter: 'l13', lesson: { id: 'l14', title: '过渡 · 第一次对话', icon: 'messages-square', transition: true, items: [
    { fr: "Bonjour, je m'appelle Léa.", zh: '你好，我叫莱娅。', ipa: 'bɔ̃.ʒuʁ ʒə ma.pɛl le.a', tip: "je m'appelle 连读", ex: "Bonjour, je m'appelle Léa.", exZh: '你好，我叫莱娅。', words: ['Bonjour', 'je', "m'appelle", 'Léa'] },
    { fr: 'Enchanté. Comment ça va ?', zh: '很高兴认识你。你好吗？', ipa: 'ɑ̃.ʃɑ̃.te kɔ.mɑ̃ sa va', tip: 'Enchanté 两个鼻音', ex: 'Enchanté. Comment ça va ?', exZh: '很高兴认识你。你好吗？', words: ['Enchanté', 'Comment', 'ça', 'va'] },
    { fr: 'Très bien, merci. Et toi ?', zh: '我很好，谢谢。你呢？', ipa: 'tʁɛ bjɛ̃ mɛʁ.si e twa', tip: 'Et toi 连读', ex: 'Très bien, merci. Et toi ?', exZh: '我很好，谢谢。你呢？', words: ['Très', 'bien', 'merci', 'Et', 'toi'] },
    { fr: 'Je viens de Chine. Et toi ?', zh: '我来自中国。你呢？', ipa: 'ʒə vjɛ̃ də ʃin e twa', tip: 'viens 读 vjɛ̃', ex: 'Je viens de Chine. Et toi ?', exZh: '我来自中国。你呢？', words: ['Je', 'viens', 'de', 'Chine', 'Et', 'toi'] },
    { fr: 'Au revoir, à bientôt !', zh: '再见，回头见！', ipa: 'o ʁə.vwaʁ a bjɛ̃.to', tip: 'revoir 的 r 很轻', ex: 'Au revoir, à bientôt !', exZh: '再见，回头见！', words: ['Au', 'revoir', 'à', 'bientôt'] }
  ] } },
  { unitId: 'u2', insertAfter: 'l6', lesson: { id: 'l15', title: '学校与工作', icon: 'graduation-cap', phrase: false, items: [
    { fr: "l'école", zh: '学校', ipa: 'le.kɔl', tip: 'école 两个音节', ex: "Les enfants vont à l'école.", exZh: '孩子们去上学。' },
    { fr: 'le professeur', zh: '老师', ipa: 'lə pʁɔ.fɛ.sœʁ', tip: 'eur 读 œʁ', ex: 'Le professeur explique la leçon.', exZh: '老师讲解课文。' },
    { fr: "l'étudiant", zh: '学生', ipa: 'le.ty.djɑ̃', tip: 'ant 鼻音', ex: "L'étudiant lit à la bibliothèque.", exZh: '学生在图书馆看书。' },
    { fr: 'le bureau', zh: '办公室', ipa: 'lə by.ʁo', tip: 'eau 读 o', ex: 'Mon bureau est au troisième étage.', exZh: '我的办公室在三楼。' },
    { fr: 'le travail', zh: '工作', ipa: 'lə tʁa.vaj', tip: 'ail 读 aj', ex: 'Le travail commence à neuf heures.', exZh: '工作九点开始。' },
    { fr: 'la réunion', zh: '会议', ipa: 'la ʁe.y.njɔ̃', tip: 'tion 读 sjɔ̃', ex: 'La réunion dure deux heures.', exZh: '会议持续两个小时。' }
  ] } },
  { unitId: 'u2', insertAfter: 'l15', lesson: { id: 'l16', title: '过渡 · 日常生活会话', icon: 'messages-square', transition: true, items: [
    { fr: 'Quelle heure est-il ?', zh: '现在几点了？', ipa: 'kɛl œʁ ɛ til', tip: 'est-il 连读', ex: 'Quelle heure est-il ?', exZh: '现在几点了？', words: ['Quelle', 'heure', 'est', 'il'] },
    { fr: 'Il est huit heures.', zh: '现在八点。', ipa: 'il ɛ ɥit œʁ', tip: 'huit 读 ɥit', ex: 'Il est huit heures.', exZh: '现在八点。', words: ['Il', 'est', 'huit', 'heures'] },
    { fr: "Aujourd'hui, je travaille.", zh: '今天我在工作。', ipa: 'o.ʒuʁ.dɥi ʒə tʁa.vaj', tip: 'travaille 两个 l 读 y', ex: "Aujourd'hui, je travaille.", exZh: '今天我在工作。', words: ["Aujourd'hui", 'je', 'travaille'] },
    { fr: "J'aime le café du matin.", zh: '我喜欢早上的咖啡。', ipa: 'ʒɛm lə ka.fe dy ma.tɛ̃', tip: "J'aime 读 ʒɛm", ex: "J'aime le café du matin.", exZh: '我喜欢早上的咖啡。', words: ["J'aime", 'le', 'café', 'du', 'matin'] },
    { fr: 'Bonne nuit, à demain !', zh: '晚安，明天见！', ipa: 'bɔn nɥi a də.mɛ̃', tip: 'nuit 读 nɥi', ex: 'Bonne nuit, à demain !', exZh: '晚安，明天见！', words: ['Bonne', 'nuit', 'à', 'demain'] }
  ] } },
  { unitId: 'u3', insertAfter: 'l9', lesson: { id: 'l17', title: '餐厅实战', icon: 'utensils', phrase: true, items: [
    { fr: 'une table pour deux', zh: '两人桌', ipa: 'yn tabl puʁ dø', tip: 'pour 读 puʁ', ex: 'Nous voudrions une table pour deux.', exZh: '我们想要一张两人桌。', words: ['une', 'table', 'pour', 'deux'] },
    { fr: 'la carte', zh: '菜单', ipa: 'la kaʁt', tip: '末尾 t 不读', ex: "La carte, s'il vous plaît.", exZh: '请给我菜单。', words: ['La', 'carte', "s'il", 'vous', 'plaît'] },
    { fr: 'je voudrais commander', zh: '我想点餐', ipa: 'ʒə vu.dʁɛ kɔ.mɑ̃.de', tip: 'er 结尾不读 r', ex: 'Je voudrais commander maintenant.', exZh: '我现在想点餐。', words: ['Je', 'voudrais', 'commander'] },
    { fr: "l'eau minérale", zh: '矿泉水', ipa: 'lo mi.ne.ʁal', tip: 'eau 读 o', ex: "Une bouteille d'eau minérale, merci.", exZh: '请来一瓶矿泉水。', words: ['Une', 'bouteille', "d'eau", 'minérale'] },
    { fr: 'un dessert', zh: '甜点', ipa: 'œ̃ de.sɛʁ', tip: 'ss 读 s', ex: 'Je prends un dessert après le repas.', exZh: '饭后我吃一份甜点。', words: ['Je', 'prends', 'un', 'dessert'] },
    { fr: "l'addition", zh: '账单', ipa: 'la.di.sjɔ̃', tip: 'tion 读 sjɔ̃', ex: "L'addition, s'il vous plaît !", exZh: '请结账！', words: ["L'addition", "s'il", 'vous', 'plaît'] }
  ] } },
  { unitId: 'u3', insertAfter: 'l17', lesson: { id: 'l18', title: '过渡 · 点餐实战对话', icon: 'messages-square', transition: true, items: [
    { fr: "Une table pour deux, s'il vous plaît.", zh: '请给我们一张两人桌。', ipa: 'yn tabl puʁ dø sil vu plɛ', tip: '整句注意连读', ex: "Une table pour deux, s'il vous plaît.", exZh: '请给我们一张两人桌。', words: ['Une', 'table', 'pour', 'deux', "s'il", 'vous', 'plaît'] },
    { fr: 'Je voudrais un croissant et un café.', zh: '我想要一个牛角包和一杯咖啡。', ipa: 'ʒə vu.dʁɛ œ̃ kʁwa.sɑ̃ e œ̃ ka.fe', tip: 'croissant 有鼻音', ex: 'Je voudrais un croissant et un café.', exZh: '我想要一个牛角包和一杯咖啡。', words: ['Je', 'voudrais', 'un', 'croissant', 'et', 'un', 'café'] },
    { fr: "C'est combien ?", zh: '多少钱？', ipa: 'sɛ kɔ̃.bjɛ̃', tip: 'est 读 è', ex: "C'est combien ?", exZh: '多少钱？', words: ["C'est", 'combien'] },
    { fr: "C'est trop cher pour moi.", zh: '对我来说太贵了。', ipa: 'sɛ tʁo ʃɛʁ puʁ mwa', tip: 'cher 读 ʃɛʁ', ex: "C'est trop cher pour moi.", exZh: '对我来说太贵了。', words: ["C'est", 'trop', 'cher', 'pour', 'moi'] },
    { fr: 'Merci, bonne journée !', zh: '谢谢，祝您今天愉快！', ipa: 'mɛʁ.si bɔn ʒuʁ.ne', tip: 'ne 轻读', ex: 'Merci, bonne journée !', exZh: '谢谢，祝您今天愉快！', words: ['Merci', 'bonne', 'journée'] }
  ] } },
  { unitId: 'u4', insertAfter: 'l12', lesson: { id: 'l19', title: '旅行对话', icon: 'plane', phrase: true, items: [
    { fr: 'je voudrais un billet', zh: '我想买一张票', ipa: 'ʒə vu.dʁɛ œ̃ bi.jɛ', tip: 'billet 读 bi.jɛ', ex: 'Je voudrais un billet pour Paris.', exZh: '我想买一张去巴黎的票。', words: ['Je', 'voudrais', 'un', 'billet'] },
    { fr: 'partir', zh: '出发', ipa: 'paʁ.tiʁ', tip: 'ir 结尾轻读', ex: 'Le train va partir dans dix minutes.', exZh: '火车十分钟后出发。' },
    { fr: 'la sortie', zh: '出口', ipa: 'la sɔʁ.ti', tip: 'sortie 读 sɔʁti', ex: "Où est la sortie, s'il vous plaît ?", exZh: '请问出口在哪里？', words: ['Où', 'est', 'la', 'sortie'] },
    { fr: 'le passeport', zh: '护照', ipa: 'lə pas.pɔʁ', tip: '末尾 t 不读', ex: "J'ai perdu mon passeport !", exZh: '我丢了护照！' },
    { fr: 'aider', zh: '帮助', ipa: 'e.de', tip: 'er 结尾不读 r', ex: "Pouvez-vous m'aider, s'il vous plaît ?", exZh: '您能帮帮我吗？' },
    { fr: 'merci beaucoup', zh: '非常感谢', ipa: 'mɛʁ.si bo.ku', tip: 'beaucoup 读 bo.ku', ex: 'Merci beaucoup pour votre aide.', exZh: '非常感谢您的帮助。', words: ['Merci', 'beaucoup', 'pour', 'votre', 'aide'] }
  ] } },
  { unitId: 'u4', insertAfter: 'l19', lesson: { id: 'l20', title: '过渡 · 环游法国', icon: 'messages-square', transition: true, items: [
    { fr: 'Je voudrais un billet pour Paris.', zh: '我想买一张去巴黎的票。', ipa: 'ʒə vu.dʁɛ œ̃ bi.jɛ puʁ pa.ʁi', tip: 'Paris 读 pa.ʁi', ex: 'Je voudrais un billet pour Paris.', exZh: '我想买一张去巴黎的票。', words: ['Je', 'voudrais', 'un', 'billet', 'pour', 'Paris'] },
    { fr: 'Le train part à neuf heures.', zh: '火车九点出发。', ipa: 'lə tʁɛ̃ paʁ a nœv œʁ', tip: 'neuf heures 连读', ex: 'Le train part à neuf heures.', exZh: '火车九点出发。', words: ['Le', 'train', 'part', 'à', 'neuf', 'heures'] },
    { fr: "Où est l'hôtel, s'il vous plaît ?", zh: '请问酒店在哪里？', ipa: 'u ɛ lo.tɛl sil vu plɛ', tip: "hôtel 的 h 不发音", ex: "Où est l'hôtel, s'il vous plaît ?", exZh: '请问酒店在哪里？', words: ['Où', 'est', "l'hôtel", "s'il", 'vous', 'plaît'] },
    { fr: "Il fait beau aujourd'hui.", zh: '今天天气很好。', ipa: 'il fɛ bo o.ʒuʁ.dɥi', tip: 'beau 读 bo', ex: "Il fait beau aujourd'hui.", exZh: '今天天气很好。', words: ['Il', 'fait', 'beau', "aujourd'hui"] },
    { fr: "J'adore la France !", zh: '我太喜欢法国了！', ipa: 'ʒa.dɔʁ la fʁɑ̃s', tip: 'France 有鼻音', ex: "J'adore la France !", exZh: '我太喜欢法国了！', words: ["J'adore", 'la', 'France'] }
  ] } }
];

extraLessons.forEach(function (el) {
  var unit = units.find(function (u) { return u.id === el.unitId; });
  if (!unit) return;
  var idx = unit.lessons.findIndex(function (l) { return l.id === el.insertAfter; });
  if (idx < 0) return;
  unit.lessons.splice(idx + 1, 0, el.lesson);
});

var allWords = [];
var allLessons = [];
units.forEach(function (u) {
  u.lessons.forEach(function (l) {
    l.unitId = u.id;
    allLessons.push(l);
    l.items.forEach(function (it, i) {
      it.id = l.id + ':' + i;
      it.lessonId = l.id;
      it.unitId = u.id;
      if (sentenceBank[it.id]) {
        it.ex = sentenceBank[it.id][0];
        it.exZh = sentenceBank[it.id][1];
      }
      if (!it.words && it.ex) it.words = tokenizeFrench(it.ex);
      allWords.push(it);
    });
  });
});

var unitStartLessons = [];
var seenUnitId = null;
allLessons.forEach(function (l) {
  if (l.unitId !== seenUnitId) {
    seenUnitId = l.unitId;
    unitStartLessons.push(l.id);
  }
});

var extWords = [];
if (window.PARLER_EXT_WORDS && window.PARLER_EXT_WORDS.length) {
  extWords = window.PARLER_EXT_WORDS.map(function (a, i) {
    return { id: 'ext:' + i, fr: a[0], ipa: a[1] || '', zh: a[2] || '', en: a[3] || '', pos: a[4] || '', unitId: 'ext', lessonId: 'ext' };
  });
}
var highFreqWords = [];
var hfRankByFr = {};
if (window.PARLER_HIGH_FREQ && window.PARLER_HIGH_FREQ.length) {
  highFreqWords = window.PARLER_HIGH_FREQ.map(function (a, i) {
    var w = { id: 'hf:' + i, rank: a[5], fr: a[0], ipa: a[1] || '', zh: a[2] || '', en: a[3] || '', pos: a[4] || '', unitId: 'hf', lessonId: 'hf' };
    var lk = w.fr.toLowerCase();
    if (!hfRankByFr[lk]) hfRankByFr[lk] = w.rank;
    return w;
  });
  extWords.forEach(function (w) {
    var lk = w.fr.toLowerCase();
    if (hfRankByFr[lk]) w.hfRank = hfRankByFr[lk];
  });
  allWords.forEach(function (w) {
    var lk = w.fr.toLowerCase();
    if (hfRankByFr[lk]) w.hfRank = hfRankByFr[lk];
  });
}

var irregularVerbs = {
  'etre': { pres: ['suis', 'es', 'est', 'sommes', 'etes', 'sont'], imp: ['etais', 'etais', 'etait', 'etions', 'etiez', 'etaient'], fut: ['serai', 'seras', 'sera', 'serons', 'serez', 'seront'], cond: ['serais', 'serais', 'serait', 'serions', 'seriez', 'seraient'], subj: ['sois', 'sois', 'soit', 'soyons', 'soyez', 'soient'], imp2: ['sois', 'soyons', 'soyez'], pp: 'ete', aux: 'etre' },
  'avoir': { pres: ['ai', 'as', 'a', 'avons', 'avez', 'ont'], imp: ['avais', 'avais', 'avait', 'avions', 'aviez', 'avaient'], fut: ['aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront'], cond: ['aurais', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient'], subj: ['aie', 'aies', 'ait', 'ayons', 'ayez', 'aient'], imp2: ['aie', 'ayons', 'ayez'], pp: 'eu', aux: 'avoir' },
  'aller': { pres: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'], imp: ['allais', 'allais', 'allait', 'allions', 'alliez', 'allaient'], fut: ['irai', 'iras', 'ira', 'irons', 'irez', 'iront'], cond: ['irais', 'irais', 'irait', 'irions', 'iriez', 'iraient'], subj: ['aille', 'ailles', 'aille', 'allions', 'alliez', 'aillent'], imp2: ['va', 'allons', 'allez'], pp: 'alle', aux: 'etre' },
  'faire': { pres: ['fais', 'fais', 'fait', 'faisons', 'faites', 'font'], imp: ['faisais', 'faisais', 'faisait', 'faisions', 'faisiez', 'faisaient'], fut: ['ferai', 'feras', 'fera', 'ferons', 'ferez', 'feront'], cond: ['ferais', 'ferais', 'ferait', 'ferions', 'feriez', 'feraient'], subj: ['fasse', 'fasses', 'fasse', 'fassions', 'fassiez', 'fassent'], imp2: ['fais', 'faisons', 'faites'], pp: 'fait', aux: 'avoir' },
  'dire': { pres: ['dis', 'dis', 'dit', 'disons', 'dites', 'disent'], imp: ['disais', 'disais', 'disait', 'disions', 'disiez', 'disaient'], fut: ['dirai', 'diras', 'dira', 'dirons', 'direz', 'diront'], cond: ['dirais', 'dirais', 'dirait', 'dirions', 'diriez', 'diraient'], imp2: ['dis', 'disons', 'dites'], pp: 'dit', aux: 'avoir' },
  'pouvoir': { pres: ['peux', 'peux', 'peut', 'pouvons', 'pouvez', 'peuvent'], imp: ['pouvais', 'pouvais', 'pouvait', 'pouvions', 'pouviez', 'pouvaient'], fut: ['pourrai', 'pourras', 'pourra', 'pourrons', 'pourrez', 'pourront'], cond: ['pourrais', 'pourrais', 'pourrait', 'pourrions', 'pourriez', 'pourraient'], pp: 'pu', aux: 'avoir' },
  'vouloir': { pres: ['veux', 'veux', 'veut', 'voulons', 'voulez', 'veulent'], imp: ['voulais', 'voulais', 'voulait', 'voulions', 'vouliez', 'voulaient'], fut: ['voudrai', 'voudras', 'voudra', 'voudrons', 'voudrez', 'voudront'], cond: ['voudrais', 'voudrais', 'voudrait', 'voudrions', 'voudriez', 'voudraient'], pp: 'voulu', aux: 'avoir' },
  'savoir': { pres: ['sais', 'sais', 'sait', 'savons', 'savez', 'savent'], imp: ['savais', 'savais', 'savait', 'savions', 'saviez', 'savaient'], fut: ['saurai', 'sauras', 'saura', 'saurons', 'saurez', 'sauront'], cond: ['saurais', 'saurais', 'saurait', 'saurions', 'sauriez', 'sauraient'], pp: 'su', aux: 'avoir' },
  'voir': { pres: ['vois', 'vois', 'voit', 'voyons', 'voyez', 'voient'], imp: ['voyais', 'voyais', 'voyait', 'voyions', 'voyiez', 'voyaient'], fut: ['verrai', 'verras', 'verra', 'verrons', 'verrez', 'verront'], cond: ['verrais', 'verrais', 'verrait', 'verrions', 'verriez', 'verraient'], pp: 'vu', aux: 'avoir' },
  'venir': { pres: ['viens', 'viens', 'vient', 'venons', 'venez', 'viennent'], imp: ['venais', 'venais', 'venait', 'venions', 'veniez', 'venaient'], fut: ['viendrai', 'viendras', 'viendra', 'viendrons', 'viendrez', 'viendront'], cond: ['viendrais', 'viendrais', 'viendrait', 'viendrions', 'viendriez', 'viendraient'], pp: 'venu', aux: 'etre' },
  'tenir': { pres: ['tiens', 'tiens', 'tient', 'tenons', 'tenez', 'tiennent'], imp: ['tenais', 'tenais', 'tenait', 'tenions', 'teniez', 'tenaient'], fut: ['tiendrai', 'tiendras', 'tiendra', 'tiendrons', 'tiendrez', 'tiendront'], pp: 'tenu', aux: 'avoir' },
  'mettre': { pres: ['mets', 'mets', 'met', 'mettons', 'mettez', 'mettent'], imp: ['mettais', 'mettais', 'mettait', 'mettions', 'mettiez', 'mettaient'], fut: ['mettrai', 'mettras', 'mettra', 'mettrons', 'mettrez', 'mettront'], pp: 'mis', aux: 'avoir' },
  'prendre': { pres: ['prends', 'prends', 'prend', 'prenons', 'prenez', 'prennent'], imp: ['prenais', 'prenais', 'prenait', 'prenions', 'preniez', 'prenaient'], fut: ['prendrai', 'prendras', 'prendra', 'prendrons', 'prendrez', 'prendront'], pp: 'pris', aux: 'avoir' },
  'comprendre': { pres: ['comprends', 'comprends', 'comprend', 'comprenons', 'comprenez', 'comprennent'], imp: ['comprenais', 'comprenais', 'comprenait', 'comprenions', 'compreniez', 'comprenaient'], fut: ['comprendrai', 'comprendras', 'comprendra', 'comprendrons', 'comprendrez', 'comprendront'], pp: 'compris', aux: 'avoir' },
  'ecrire': { pres: ['ecris', 'ecris', 'ecrit', 'ecrivons', 'ecrivez', 'ecrivent'], imp: ['ecrivais', 'ecrivais', 'ecrivait', 'ecrivions', 'ecriviez', 'ecrivaient'], pp: 'ecrit', aux: 'avoir' },
  'lire': { pres: ['lis', 'lis', 'lit', 'lisons', 'lisez', 'lisent'], imp: ['lisais', 'lisais', 'lisait', 'lisions', 'lisiez', 'lisaient'], pp: 'lu', aux: 'avoir' },
  'connaitre': { pres: ['connais', 'connais', 'connait', 'connaissons', 'connaissez', 'connaissent'], imp: ['connaissais', 'connaissais', 'connaissait', 'connaissions', 'connaissiez', 'connaissaient'], pp: 'connu', aux: 'avoir' },
  'croire': { pres: ['crois', 'crois', 'croit', 'croyons', 'croyez', 'croient'], imp: ['croyais', 'croyais', 'croyait', 'croyions', 'croyiez', 'croyaient'], pp: 'cru', aux: 'avoir' },
  'devoir': { pres: ['dois', 'dois', 'doit', 'devons', 'devez', 'doivent'], imp: ['devais', 'devais', 'devait', 'devions', 'deviez', 'devaient'], fut: ['devrai', 'devras', 'devra', 'devrons', 'devrez', 'devront'], pp: 'du', aux: 'avoir' },
  'ouvrir': { pres: ['ouvre', 'ouvres', 'ouvre', 'ouvrons', 'ouvrez', 'ouvrent'], imp: ['ouvrais', 'ouvrais', 'ouvrait', 'ouvrions', 'ouvriez', 'ouvraient'], pp: 'ouvert', aux: 'avoir' },
  'offrir': { pres: ['offre', 'offres', 'offre', 'offrons', 'offrez', 'offrent'], imp: ['offrais', 'offrais', 'offrait', 'offrions', 'offriez', 'offraient'], pp: 'offert', aux: 'avoir' },
  'suivre': { pres: ['suis', 'suis', 'suit', 'suivons', 'suivez', 'suivent'], imp: ['suivais', 'suivais', 'suivait', 'suivions', 'suiviez', 'suivaient'], pp: 'suivi', aux: 'avoir' },
  'vivre': { pres: ['vis', 'vis', 'vit', 'vivons', 'vivez', 'vivent'], imp: ['vivais', 'vivais', 'vivait', 'vivions', 'viviez', 'vivaient'], pp: 'vecu', aux: 'avoir' },
  'partir': { pres: ['pars', 'pars', 'part', 'partons', 'partez', 'partent'], imp: ['partais', 'partais', 'partait', 'partions', 'partiez', 'partaient'], pp: 'parti', aux: 'etre' },
  'sortir': { pres: ['sors', 'sors', 'sort', 'sortons', 'sortez', 'sortent'], imp: ['sortais', 'sortais', 'sortait', 'sortions', 'sortiez', 'sortaient'], pp: 'sorti', aux: 'etre' },
  'dormir': { pres: ['dors', 'dors', 'dort', 'dormons', 'dormez', 'dorment'], imp: ['dormais', 'dormais', 'dormait', 'dormions', 'dormiez', 'dormaient'], pp: 'dormi', aux: 'avoir' },
  'servir': { pres: ['sers', 'sers', 'sert', 'servons', 'servez', 'servent'], imp: ['servais', 'servais', 'servait', 'servions', 'serviez', 'servaient'], pp: 'servi', aux: 'avoir' },
  'sentir': { pres: ['sens', 'sens', 'sent', 'sentons', 'sentez', 'sentent'], imp: ['sentais', 'sentais', 'sentait', 'sentions', 'sentiez', 'sentaient'], pp: 'senti', aux: 'avoir' },
  'mentir': { pres: ['mens', 'mens', 'ment', 'mentons', 'mentez', 'mentent'], imp: ['mentais', 'mentais', 'mentait', 'mentions', 'mentiez', 'mentaient'], pp: 'menti', aux: 'avoir' },
  'repondre': { pres: ['reponds', 'reponds', 'repond', 'repondons', 'repondez', 'repondent'], imp: ['repondais', 'repondais', 'repondait', 'repondions', 'repondiez', 'repondaient'], pp: 'repondu', aux: 'avoir' },
  'boire': { pres: ['bois', 'bois', 'boit', 'buvons', 'buvez', 'boivent'], imp: ['buvais', 'buvais', 'buvait', 'buvions', 'buviez', 'buvaient'], pp: 'bu', aux: 'avoir' },
  'courir': { pres: ['cours', 'cours', 'court', 'courons', 'courez', 'courent'], imp: ['courais', 'courais', 'courait', 'courions', 'courions', 'couraient'], pp: 'couru', aux: 'avoir' },
  'recevoir': { pres: ['recois', 'recois', 'recoit', 'recevons', 'recevez', 'recoivent'], imp: ['recevais', 'recevais', 'recevait', 'recevions', 'receviez', 'recevaient'], pp: 'recu', aux: 'avoir' },
  'envoyer': { pres: ['envoie', 'envoies', 'envoie', 'envoyons', 'envoyez', 'envoient'], imp: ['envoyais', 'envoyais', 'envoyait', 'envoyions', 'envoyiez', 'envoyaient'], pp: 'envoye', aux: 'avoir' },
  'payer': { pres: ['paie', 'paies', 'paie', 'payons', 'payez', 'paient'], imp: ['payais', 'payais', 'payait', 'payions', 'payiez', 'payaient'], pp: 'paye', aux: 'avoir' },
  'essayer': { pres: ['essaie', 'essaies', 'essaie', 'essayons', 'essayez', 'essaient'], imp: ['essayais', 'essayais', 'essayait', 'essayions', 'essayiez', 'essayaient'], pp: 'essaye', aux: 'avoir' },
  'mourir': { pres: ['meurs', 'meurs', 'meurt', 'mourons', 'mourez', 'meurent'], imp: ['mourais', 'mourais', 'mourait', 'mourions', 'mouriez', 'mouraient'], pp: 'mort', aux: 'etre' },
  'naitre': { pres: ['nais', 'nais', 'nait', 'naissons', 'naissez', 'naissent'], imp: ['naissais', 'naissais', 'naissait', 'naissions', 'naissiez', 'naissaient'], pp: 'ne', aux: 'etre' }
};

function isVerbWord(w) {
  return String(w.pos || '').split(',').some(function (x) {
    x = x.trim();
    return x === 'v' || x === 'vt' || x === 'vi' || x === 'vr' || x === 'v.' || x === 'verbe';
  });
}

function conjugateFrench(inf) {
  var word = String(inf || '').toLowerCase();
  var key = normalize(word);
  if (irregularVerbs[key]) return irregularVerbs[key];
  var stem;
  var group;
  var pres;
  var pp;
  var presPlural;
  var issStem;
  if (word.endsWith('er')) {
    group = 'er';
    stem = word.slice(0, -2);
    presPlural = stem;
    if (stem.endsWith('g')) presPlural = stem + 'e';
    if (stem.endsWith('c')) presPlural = stem.slice(0, -1) + 'ç';
    pres = [stem + 'e', stem + 'es', stem + 'e', presPlural + 'ons', presPlural + 'ez', presPlural + 'ent'];
    pp = stem + 'é';
  } else if (word.endsWith('ir')) {
    group = 'ir';
    stem = word.slice(0, -2);
    issStem = stem + 'iss';
    pres = [stem + 'is', stem + 'is', stem + 'it', issStem + 'ons', issStem + 'ez', issStem + 'ent'];
    pp = stem + 'i';
  } else if (word.endsWith('re')) {
    group = 're';
    stem = word.slice(0, -2);
    pres = [stem + 's', stem + 's', stem, stem + 'ons', stem + 'ez', stem + 'ent'];
    pp = stem + 'u';
  } else {
    return null;
  }
  var futStem = group === 're' ? word.slice(0, -1) : word;
  var impStem = group === 'er' ? presPlural : (group === 'ir' ? stem + 'iss' : stem);
  var imp = [impStem + 'ais', impStem + 'ais', impStem + 'ait', impStem + 'ions', impStem + 'iez', impStem + 'aient'];
  var fut = [futStem + 'ai', futStem + 'as', futStem + 'a', futStem + 'ons', futStem + 'ez', futStem + 'ont'];
  var cond = [futStem + 'ais', futStem + 'ais', futStem + 'ait', futStem + 'ions', futStem + 'iez', futStem + 'aient'];
  var subjStem = group === 'er' ? presPlural : impStem;
  var subj = [subjStem + 'e', subjStem + 'es', subjStem + 'e', subjStem + 'ions', subjStem + 'iez', subjStem + 'ent'];
  var imp2 = group === 'er' ? [stem + 'e', presPlural + 'ons', presPlural + 'ez'] : group === 'ir' ? [stem + 'is', issStem + 'ons', issStem + 'ez'] : [stem + 's', stem + 'ons', stem + 'ez'];
  return { pres: pres, imp: imp, fut: fut, cond: cond, subj: subj, imp2: imp2, pp: pp, aux: 'avoir' };
}

var lookupIndex = [];
var lookupSeen = {};
allWords.concat(extWords).forEach(function (w) {
  var key = (w.fr + '|' + (w.pos || '')).toLowerCase();
  if (!lookupSeen[key]) { lookupSeen[key] = true; lookupIndex.push(w); }
});

var conjReverse = {};
(function () {
  var verbs = {};
  allWords.concat(highFreqWords).forEach(function (w) {
    if (isVerbWord(w)) verbs[normalize(w.fr)] = true;
  });
  Object.keys(verbs).forEach(function (inf) {
    var c = conjugateFrench(inf);
    if (!c) return;
    var forms = (c.pres || []).concat(c.imp || [], c.fut || [], c.cond || [], c.subj || [], c.imp2 || []);
    forms.forEach(function (f) {
      var k = normalize(f);
      if (k && !conjReverse[k]) conjReverse[k] = inf;
    });
  });
})();

function lookupSearch(q) {
  var nq = normalize(q);
  var lq = q.toLowerCase();
  var out = [];
  var seen = {};
  lookupIndex.forEach(function (w) {
    if (out.length >= 60) return;
    var hit = normalize(w.fr) === nq ||
      (w.zh || '').indexOf(q) >= 0 ||
      (w.en || '').toLowerCase().indexOf(lq) >= 0 ||
      (w.fr || '').toLowerCase().indexOf(lq) >= 0 ||
      (w.ipa || '').indexOf(q) >= 0;
    if (!hit) return;
    var key = w.fr + '|' + w.zh;
    if (seen[key]) return;
    seen[key] = true;
    out.push(w);
  });
  return out;
}

function conjHtml(c) {
  var labels = ['je', 'tu', 'il / elle / on', 'nous', 'vous', 'ils / elles'];
  function block(title, arr) {
    if (!arr || !arr.length) return '';
    var body = arr.map(function (f, i) {
      return '<div class="conj-row"><span class="conj-pron">' + labels[i] + '</span><span class="conj-form">' + esc(f) + '</span></div>';
    }).join('');
    return '<div class="conj-group"><h4>' + title + '</h4>' + body + '</div>';
  }
  var pp = c.pp ? '<div class="conj-pp">过去分词：' + esc(c.pp) + ' · 助动词：' + esc(c.aux || 'avoir') + '</div>' : '';
  return '<div class="conj-block"><h3>动词变位</h3>' +
    block('现在时 présent', c.pres) +
    block('未完成过去时 imparfait', c.imp) +
    block('简单将来时 futur', c.fut) +
    block('条件式 conditionnel', c.cond) +
    block('虚拟式现在时 subjonctif', c.subj) +
    block('命令式 impératif', c.imp2) + pp + '</div>';
}

function lookupDetailHtml(w) {
  var conj = isVerbWord(w) ? conjugateFrench(w.fr) : null;
  var html = '<div class="lookup-detail">' +
    '<h2>' + esc(w.fr) + '</h2>' +
    '<div class="lookup-meta">' + [w.ipa, w.pos, w.zh].filter(Boolean).join(' · ') + '</div>' +
    (w.en ? '<p class="lookup-en">' + esc(w.en) + '</p>' : '') +
    (w.ex ? '<div class="example-box"><div class="example-fr"><button type="button" data-speak="' + esc(w.ex) + '"><i data-lucide="volume-2"></i>' + esc(w.ex) + '</button></div><div class="example-zh">' + esc(w.exZh || w.zh) + '</div></div>' : '') +
    '<button class="listen-big" type="button" data-speak="' + esc(w.fr) + '"><i data-lucide="volume-2"></i>播放发音</button>' +
    (conj ? conjHtml(conj) : '') +
    '</div>';
  setTimeout(function () {
    var btns = $('#view-lookup').querySelectorAll('[data-speak]');
    Array.prototype.forEach.call(btns, function (b) {
      b.addEventListener('click', function () { speak(b.dataset.speak); });
    });
  }, 0);
  return html;
}

function renderLookup() {
  var q = lookupQuery.trim();
  var detailHtml = '';
  var results = [];
  var nq = normalize(q);
  var exact = null;
  if (nq) {
    for (var i = 0; i < lookupIndex.length; i++) {
      if (normalize(lookupIndex[i].fr) === nq) { exact = lookupIndex[i]; break; }
    }
    if (conjReverse[nq]) {
      var inf = conjReverse[nq];
      if (!exact || !isVerbWord(exact)) {
        for (var j = 0; j < lookupIndex.length; j++) {
          if (normalize(lookupIndex[j].fr) === normalize(inf)) { exact = lookupIndex[j]; break; }
        }
      }
    }
    if (exact) {
      detailHtml = lookupDetailHtml(exact);
    } else {
      results = lookupSearch(q).slice(0, 30);
    }
  } else {
    results = highFreqWords.slice(0, 12).map(function (w) {
      return { fr: w.fr, ipa: w.ipa, zh: w.zh, en: w.en, pos: w.pos };
    });
  }
  var resultsHtml = results.length
    ? results.map(function (w) {
        return '<button class="lookup-result" type="button" data-lookup="' + esc(w.fr) + '">' +
          '<span class="lookup-fr">' + esc(w.fr) + '</span>' +
          '<span class="lookup-ipa">' + esc(w.ipa || '') + '</span>' +
          '<span class="lookup-zh">' + esc(w.zh) + '</span>' +
          (w.pos ? '<span class="word-badge">' + esc(w.pos) + '</span>' : '') +
          '</button>';
      }).join('')
    : (q ? '<div class="empty-state">没有找到，试试其他拼写</div>' : '');
  $('#view-lookup').innerHTML =
    '<div class="words-head"><h2>查单词</h2><span class="muted">法语 / 中文 / 英文 / 变位形式</span></div>' +
    '<div class="lookup-toolbar">' +
    '<div class="search-box"><i data-lucide="search"></i><input id="lookupInput" type="search" placeholder="例如：parler、aimer、être" value="' + esc(lookupQuery) + '"></div>' +
    '<button id="lookupGo" class="btn primary" type="button">查询</button>' +
    '</div>' +
    (detailHtml || '<div class="lookup-results">' + resultsHtml + '</div>');
  lucide.createIcons();
  var input = $('#lookupInput');
  if (input) {
    input.addEventListener('input', function (e) {
      lookupQuery = e.target.value;
      renderLookup();
      var inp = $('#lookupInput');
      if (inp) {
        inp.focus();
        inp.setSelectionRange(inp.value.length, inp.value.length);
      }
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        lookupQuery = input.value;
        renderLookup();
      }
    });
  }
  $('#lookupGo').addEventListener('click', function () {
    var inp = $('#lookupInput');
    if (inp) { lookupQuery = inp.value; renderLookup(); }
  });
  $$('#view-lookup [data-lookup]').forEach(function (b) {
    b.addEventListener('click', function () {
      lookupQuery = b.dataset.lookup;
      renderLookup();
    });
  });
}

function totalVocabCount() {
  return allWords.length + extWords.length;
}

function defaultState() {
  return {
    xp: 0,
    dailyXp: 0,
    streak: 0,
    lastActive: null,
    totalAnswers: 0,
    totalCorrect: 0,
    lessons: {},
    words: {},
    history: {},
    placement: { best: 0, takenAt: null },
    settings: { autoSpeak: true, sound: true, rate: 0.9 }
  };
}

var state = defaultState();
try {
  var raw = localStorage.getItem(LS_KEY);
  if (raw) {
    var parsed = JSON.parse(raw);
    state = Object.assign(defaultState(), parsed);
  }
} catch (err) {}

state.settings = Object.assign({ autoSpeak: true, sound: true, rate: 0.9 }, state.settings || {});
state.lessons = state.lessons || {};
state.words = state.words || {};
state.history = state.history || {};
if (!state.placement) state.placement = { best: 0, takenAt: null };

function save() {
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch (err) {}
}

function $(sel) { return document.querySelector(sel); }
function $$(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function tokenizeFrench(s) {
  return String(s || '').match(/[A-Za-zÀ-ÖØ-öø-ÿ'’-]+/g) || [];
}

function shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function normalize(s) {
  return String(s || '').toLowerCase().normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’'‘]/g, '')
    .replace(/[`´«»".,!?;:()\-–—]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function todayKey() {
  var d = new Date();
  var m = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  return d.getFullYear() + '-' + m + '-' + day;
}

function dateKey(offset) {
  var d = new Date();
  d.setDate(d.getDate() + offset);
  var m = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  return d.getFullYear() + '-' + m + '-' + day;
}

function ensureDay() {
  var k = todayKey();
  if (!state.history[k]) state.history[k] = { xp: 0, answers: 0, correct: 0 };
}

function touchStreak() {
  var t = todayKey();
  var y = dateKey(-1);
  if (state.lastActive === t) return;
  if (state.lastActive === y) state.streak += 1;
  else state.streak = 1;
  state.lastActive = t;
}

function currentStreak() {
  var t = todayKey();
  var y = dateKey(-1);
  return (state.lastActive === t || state.lastActive === y) ? state.streak : 0;
}

function addXp(n) {
  ensureDay();
  state.xp += n;
  state.dailyXp += n;
  state.history[todayKey()].xp += n;
  touchStreak();
}

function recordAnswer(correct) {
  ensureDay();
  state.totalAnswers += 1;
  state.history[todayKey()].answers += 1;
  if (correct) {
    state.totalCorrect += 1;
    state.history[todayKey()].correct += 1;
  }
}

function recordWord(wordId, correct) {
  if (!wordId) return;
  var w = state.words[wordId] || { seen: 0, correct: 0, learned: false, lastAt: null };
  w.seen += 1;
  if (correct) w.correct += 1;
  w.lastAt = todayKey();
  if (w.seen >= 2 && w.correct / w.seen >= 0.75) w.learned = true;
  state.words[wordId] = w;
}

function levelInfo() {
  var levels = [
    { min: 0, name: '新手' },
    { min: 120, name: '探索者' },
    { min: 320, name: '法语学徒' },
    { min: 650, name: '旅行家' },
    { min: 1200, name: '会话达人' }
  ];
  var cur = levels[0];
  levels.forEach(function (lv) { if (state.xp >= lv.min) cur = lv; });
  return cur;
}

function getLesson(id) {
  for (var i = 0; i < allLessons.length; i++) {
    if (allLessons[i].id === id) return allLessons[i];
  }
  return null;
}

function placementLevel() {
  return state.placement && state.placement.best ? state.placement.best : 0;
}

function placementUnlockCount(level) {
  if (level >= 4) return allLessons.length;
  if (level === 3) return 15;
  if (level === 2) return 10;
  if (level === 1) return 5;
  return 1;
}

function isUnlocked(id) {
  var idx = -1;
  for (var i = 0; i < allLessons.length; i++) {
    if (allLessons[i].id === id) { idx = i; break; }
  }
  if (idx <= 0) return true;
  if (idx < placementUnlockCount(placementLevel())) return true;
  var prev = state.lessons[allLessons[idx - 1].id];
  return !!(prev && prev.done);
}

function speak(text) {
  try {
    if (!('speechSynthesis' in window)) return;
    var u = new SpeechSynthesisUtterance(text);
    u.lang = 'fr-FR';
    u.rate = state.settings.rate;
    var voices = speechSynthesis.getVoices();
    for (var i = 0; i < voices.length; i++) {
      if (voices[i].lang && voices[i].lang.toLowerCase().indexOf('fr') === 0) {
        u.voice = voices[i]; break;
      }
    }
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  } catch (err) {}
}

function playTone(correct) {
  if (!state.settings.sound) return;
  try {
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    var ctx = new Ctx();
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = correct ? 520 : 220;
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
    osc.start();
    osc.stop(ctx.currentTime + 0.25);
  } catch (err) {}
}

var currentView = 'learn';
var session = null;
var wordQuery = '';
var wordUnit = 'all';
var wordLimit = 300;
var wordPage = 1;
var hfBand = '1';
var hfPage = 1;
var hfLimit = 200;
var hfQuery = '';
var lookupQuery = '';

var viewTitles = { learn: '学习', practice: '练习', words: '单词本', highfreq: '高频词', lookup: '查单词', stats: '统计' };

function showView(name) {
  currentView = name;
  $$('.view').forEach(function (v) {
    v.classList.toggle('active', v.id === 'view-' + name);
  });
  $$('.nav-btn').forEach(function (b) {
    b.classList.toggle('active', b.dataset.view === name);
  });
  renderTopbar();
  if (name === 'learn') renderLearn();
  if (name === 'practice') renderPractice();
  if (name === 'words') renderWords();
  if (name === 'highfreq') renderHighfreq();
  if (name === 'lookup') renderLookup();
  if (name === 'stats') renderStats();
  window.scrollTo(0, 0);
}

function renderTopbar() {
  var info = levelInfo();
  $('#pageTitle').textContent = viewTitles[currentView] || '学习';
  $('#levelBadge').textContent = info.name;
  $('#todayXp').innerHTML = '<i data-lucide="star"></i>今日 +' + state.dailyXp;
  $('#streakPill').innerHTML = '<i data-lucide="flame"></i>' + currentStreak() + ' 天';
  $('#sideXp').innerHTML = '<i data-lucide="star"></i><span>' + state.xp + ' XP</span>';
  $('#sideStreak').innerHTML = '<i data-lucide="flame"></i><span>' + currentStreak() + ' 天</span>';
  lucide.createIcons();
}

function findNextLesson() {
  var startIdx = 0;
  var lvl = placementLevel();
  if (lvl >= 2) {
    var unitIdx = Math.min(lvl - 1, unitStartLessons.length - 1);
    var startId = unitStartLessons[unitIdx];
    for (var k = 0; k < allLessons.length; k++) {
      if (allLessons[k].id === startId) { startIdx = k; break; }
    }
  }
  for (var i = startIdx; i < allLessons.length; i++) {
    var l = allLessons[i];
    var done = state.lessons[l.id] && state.lessons[l.id].done;
    if (!done && isUnlocked(l.id)) return l;
  }
  for (var j = 0; j < startIdx; j++) {
    var l2 = allLessons[j];
    var done2 = state.lessons[l2.id] && state.lessons[l2.id].done;
    if (!done2 && isUnlocked(l2.id)) return l2;
  }
  return null;
}

function renderLearn() {
  var pct = Math.min(100, Math.round(state.dailyXp / DAILY_GOAL * 100));
  var next = findNextLesson();
  var ring = 106.8 - (pct / 100) * 106.8;
  var heroBtn = next
    ? '<button class="btn primary lg" type="button" data-open="' + next.id + '"><i data-lucide="arrow-right"></i>继续探险</button>'
    : '<div class="status done" style="display:flex;align-items:center;gap:8px;font-weight:600"><i data-lucide="badge-check"></i>所有课程已完成</div>';

  var unitsHtml = units.map(function (u) {
    var lessonsHtml = u.lessons.map(function (l) {
      var done = !!(state.lessons[l.id] && state.lessons[l.id].done);
      var locked = !isUnlocked(l.id);
      var times = state.lessons[l.id] ? state.lessons[l.id].times : 0;
      var status;
      if (done) status = '<span class="status done"><i data-lucide="check"></i>已掌握</span>';
      else if (locked) status = '<span class="status locked"><i data-lucide="lock"></i>未解锁</span>';
      else status = '<span class="status cur">开始</span>';
      var sub = (l.transition ? '过渡会话 · ' + l.items.length + ' 句' : l.items.length + ' 个表达') + (done ? ' · 已学 ' + times + ' 次' : '');
      return '<button class="lesson-card" type="button" data-open="' + l.id + '"' + (locked ? ' disabled' : '') + '>' +
        '<span class="lesson-icon" style="--lc:' + u.color + ';--lc-soft:' + u.soft + '"><i data-lucide="' + l.icon + '"></i></span>' +
        '<span class="lesson-info"><span class="lesson-title">' + esc(l.title) + '</span>' +
        '<span class="lesson-sub">' + esc(sub) + '</span></span>' +
        '<span class="lesson-arrow">' + status + '</span></button>';
    }).join('');

    return '<section class="unit-block">' +
      '<div class="unit-head">' +
      '<span class="unit-num" style="--uc:' + u.color + ';--uc-soft:' + u.soft + '">' + esc(u.num) + '</span>' +
      '<div><h2>' + esc(u.title) + '</h2><p>' + esc(u.subtitle) + '</p></div>' +
      '</div><div class="lesson-grid">' + lessonsHtml + '</div></section>';
  }).join('');

  var placementLvl = placementLevel();
  var placementStatus = placementLvl >= 4 ? '已解锁全部课程' : placementLvl === 3 ? '已解锁前三个单元' : placementLvl === 2 ? '已解锁前两个单元' : placementLvl === 1 ? '已解锁第一单元' : '跳过已掌握内容';
  var placementBandHtml = '<section class="placement-band">' +
    '<div class="placement-icon"><i data-lucide="gauge"></i></div>' +
    '<div class="placement-copy">' +
    '<p class="eyebrow">摸底测试</p>' +
    '<h3>' + placementStatus + '</h3>' +
    '<p class="muted">8 道题，按成绩直接解锁到对应的课程区间</p>' +
    '</div>' +
    '<button class="btn primary" type="button" data-test="placement">' + (placementLvl >= 2 ? '重新测试' : '开始测试') + '</button>' +
    '</section>';
  var quickLookupHtml = '<div class="quick-lookup"><i data-lucide="search"></i><input id="quickLookup" type="search" placeholder="查一个法语单词" autocomplete="off"></div>';

  $('#view-learn').innerHTML =
    '<section class="learn-band">' +
    '<div class="learn-band-copy">' +
    '<p class="eyebrow">今日目标 ' + Math.min(state.dailyXp, DAILY_GOAL) + ' / ' + DAILY_GOAL + ' XP</p>' +
    '<h2>' + (next ? '继续学习：' + esc(next.title) : '今天的课程都完成啦') + '</h2>' +
    '<p class="muted">每日完成 50 XP，保持连续学习</p>' +
    heroBtn +
    quickLookupHtml +
    '</div>' +
    '<div class="goal-ring">' +
    '<svg viewBox="0 0 44 44"><circle class="ring-bg" cx="22" cy="22" r="17" fill="none"></circle>' +
    '<circle class="ring-fg" cx="22" cy="22" r="17" fill="none" style="stroke-dasharray:106.8;stroke-dashoffset:' + ring + '"></circle></svg>' +
    '<span>' + pct + '%</span></div>' +
    '</section>' +
    placementBandHtml +
    '<div class="learn-units">' + unitsHtml + '</div>';

  lucide.createIcons();
  $$('#view-learn [data-open]').forEach(function (b) {
    b.addEventListener('click', function () { openLesson(b.dataset.open); });
  });
  $$('#view-learn [data-test="placement"]').forEach(function (b) {
    b.addEventListener('click', startPlacement);
  });
  var quickInput = $('#quickLookup');
  if (quickInput) {
    quickInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && quickInput.value.trim()) {
        lookupQuery = quickInput.value.trim();
        showView('lookup');
      }
    });
  }
}

function renderPractice() {
  var modes = [
    { mode: 'quiz', icon: 'zap', color: '#e4573d', soft: '#fde8e3', title: '快速测验', desc: '8 道混合题型，巩固词汇' },
    { mode: 'listen', icon: 'headphones', color: '#3f7fd6', soft: '#e3edfb', title: '听力挑战', desc: '6 道听音选义，磨耳朵' },
    { mode: 'match', icon: 'shuffle', color: '#0d9488', soft: '#ddf3ef', title: '配对练习', desc: '4 组法汉配对，练反应' }
  ];
  var html = modes.map(function (m) {
    return '<button class="practice-card" type="button" data-mode="' + m.mode + '">' +
      '<span class="pc-icon" style="--pc:' + m.color + ';--pc-soft:' + m.soft + '"><i data-lucide="' + m.icon + '"></i></span>' +
      '<span class="pc-title">' + m.title + '</span>' +
      '<span class="pc-desc">' + m.desc + '</span></button>';
  }).join('');
  $('#view-practice').innerHTML =
    '<div class="practice-head"><h2>专项练习</h2><p class="muted">用不同题型巩固已学内容</p></div>' +
    '<div class="practice-grid">' + html + '</div>';
  lucide.createIcons();
  $$('#view-practice [data-mode]').forEach(function (b) {
    b.addEventListener('click', function () { startPractice(b.dataset.mode); });
  });
}

function renderWords() {
  var chips = '<button class="chip-btn' + (wordUnit === 'all' ? ' active' : '') + '" data-unit="all">全部</button>' +
    units.map(function (u) {
      return '<button class="chip-btn' + (wordUnit === u.id ? ' active' : '') + '" data-unit="' + u.id + '">' + esc(u.title) + '</button>';
    }).join('') +
    '<button class="chip-btn' + (wordUnit === 'ext' ? ' active' : '') + '" data-unit="ext">扩展词库</button>';
  var q = wordQuery.trim().toLowerCase();
  function matches(w) {
    return !q ||
      (w.fr || '').toLowerCase().indexOf(q) >= 0 ||
      (w.zh || '').toLowerCase().indexOf(q) >= 0 ||
      (w.ipa || '').toLowerCase().indexOf(q) >= 0 ||
      (w.en || '').toLowerCase().indexOf(q) >= 0;
  }
  var items;
  if (wordUnit === 'ext') {
    items = extWords.filter(matches);
  } else if (wordUnit === 'all') {
    items = allWords.filter(matches).concat(extWords.filter(matches));
  } else {
    items = allWords.filter(function (w) { return w.unitId === wordUnit && matches(w); });
  }
  var shown = items.slice(0, wordLimit * wordPage);
  var hasMore = items.length > shown.length;
  var rows = shown.map(function (w) {
    var isExt = w.unitId === 'ext';
    var rec = state.words[w.id];
    var badge;
    if (w.hfRank) badge = '<span class="word-badge hf">高频 #' + w.hfRank + '</span>';
    else if (isExt) badge = '<span class="word-badge ext">扩展</span>';
    else if (rec && rec.learned) badge = '<span class="word-badge learned">已掌握</span>';
    else if (rec && rec.seen) badge = '<span class="word-badge learning">学习中</span>';
    else badge = '<span class="word-badge">未学习</span>';
    return '<div class="word-row">' +
      '<button class="speak-btn" type="button" data-speak="' + esc(w.fr) + '" title="播放发音"><i data-lucide="volume-2"></i></button>' +
      '<div><span class="word-fr">' + esc(w.fr) + '</span><span class="word-ipa">' + esc(w.ipa || '') + '</span></div>' +
      '<span class="word-zh">' + esc(w.zh) + (w.en ? '<span class="word-en">' + esc(w.en) + '</span>' : '') + '</span>' +
      badge + '</div>';
  }).join('');
  var moreBtn = hasMore
    ? '<button class="more-btn" type="button" data-more="1"><i data-lucide="chevron-down"></i>加载更多（' + (items.length - shown.length) + ' 条）</button>'
    : '';
  $('#view-words').innerHTML =
    '<div class="words-head"><h2>单词本</h2><span class="muted">共 ' + totalVocabCount() + ' 词</span></div>' +
    '<div class="word-toolbar">' +
    '<div class="search-box"><i data-lucide="search"></i><input id="wordSearch" type="search" placeholder="搜索法语 / 中文 / 英文" value="' + esc(wordQuery) + '"></div>' +
    '<div class="unit-chips">' + chips + '</div></div>' +
    '<div class="word-list">' + (rows || '<div class="empty-state">没有找到匹配的单词</div>') + moreBtn + '</div>';
  lucide.createIcons();
  $('#wordSearch').addEventListener('input', function (e) {
    wordQuery = e.target.value;
    wordPage = 1;
    renderWords();
    var input = $('#wordSearch');
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  });
  $$('#view-words [data-unit]').forEach(function (b) {
    b.addEventListener('click', function () {
      wordUnit = b.dataset.unit;
      wordPage = 1;
      renderWords();
    });
  });
  $$('#view-words [data-more]').forEach(function (b) {
    b.addEventListener('click', function () {
      wordPage += 1;
      renderWords();
    });
  });
  $$('#view-words [data-speak]').forEach(function (b) {
    b.addEventListener('click', function () { speak(b.dataset.speak); });
  });
}

function renderHighfreq() {
  var hfBands = [
    { id: '1', label: 'Top 500', min: 1, max: 500 },
    { id: '2', label: '501-1000', min: 501, max: 1000 },
    { id: '3', label: '1001-2000', min: 1001, max: 2000 },
    { id: '4', label: '2001-3000', min: 2001, max: 3000 },
    { id: '5', label: '3001-5000', min: 3001, max: 5000 },
    { id: '6', label: '5001-10000', min: 5001, max: 10000 },
    { id: '7', label: '10000+', min: 10001, max: Infinity }
  ];
  var band = null;
  for (var bi = 0; bi < hfBands.length; bi++) {
    if (hfBands[bi].id === hfBand) { band = hfBands[bi]; break; }
  }
  if (!band) band = hfBands[0];
  var chips = hfBands.map(function (b) {
    var count = highFreqWords.filter(function (w) { return w.rank >= b.min && w.rank <= b.max; }).length;
    return '<button class="chip-btn' + (b.id === band.id ? ' active' : '') + '" data-hfband="' + b.id + '">' + b.label + '（' + count + '）</button>';
  }).join('');
  var q = hfQuery.trim().toLowerCase();
  var items = highFreqWords.filter(function (w) {
    var okBand = w.rank >= band.min && w.rank <= band.max;
    var okQ = !q ||
      w.fr.toLowerCase().indexOf(q) >= 0 ||
      w.zh.toLowerCase().indexOf(q) >= 0 ||
      w.ipa.toLowerCase().indexOf(q) >= 0 ||
      (w.en || '').toLowerCase().indexOf(q) >= 0;
    return okBand && okQ;
  });
  var shown = items.slice(0, hfLimit * hfPage);
  var hasMore = items.length > shown.length;
  var rows = shown.map(function (w) {
    return '<div class="word-row">' +
      '<button class="speak-btn" type="button" data-speak="' + esc(w.fr) + '" title="播放发音"><i data-lucide="volume-2"></i></button>' +
      '<div><span class="word-fr">' + esc(w.fr) + '</span><span class="word-ipa">' + esc(w.ipa) + '</span></div>' +
      '<span class="word-zh">' + esc(w.zh) + (w.en ? '<span class="word-en">' + esc(w.en) + '</span>' : '') + '</span>' +
      '<span class="word-badge hf">#' + w.rank + '</span></div>';
  }).join('');
  var moreBtn = hasMore
    ? '<button class="more-btn" type="button" data-hfmore="1"><i data-lucide="chevron-down"></i>加载更多（' + (items.length - shown.length) + ' 条）</button>'
    : '';
  $('#view-highfreq').innerHTML =
    '<div class="words-head"><h2>高频词汇</h2><span class="muted">按真实语料词频整理 · ' + highFreqWords.length + ' 条</span></div>' +
    '<div class="word-toolbar">' +
    '<div class="search-box"><i data-lucide="search"></i><input id="hfSearch" type="search" placeholder="搜索当前词频区间" value="' + esc(hfQuery) + '"></div>' +
    '<div class="unit-chips">' + chips + '</div></div>' +
    '<div class="word-list">' + (rows || '<div class="empty-state">没有找到匹配的单词</div>') + moreBtn + '</div>';
  lucide.createIcons();
  $('#hfSearch').addEventListener('input', function (e) {
    hfQuery = e.target.value;
    hfPage = 1;
    renderHighfreq();
    var inp = $('#hfSearch');
    if (inp) {
      inp.focus();
      inp.setSelectionRange(inp.value.length, inp.value.length);
    }
  });
  $$('#view-highfreq [data-hfband]').forEach(function (b) {
    b.addEventListener('click', function () {
      hfBand = b.dataset.hfband;
      hfPage = 1;
      renderHighfreq();
    });
  });
  $$('#view-highfreq [data-hfmore]').forEach(function (b) {
    b.addEventListener('click', function () {
      hfPage += 1;
      renderHighfreq();
    });
  });
  $$('#view-highfreq [data-speak]').forEach(function (b) {
    b.addEventListener('click', function () { speak(b.dataset.speak); });
  });
}

function renderStats() {
  var learned = Object.keys(state.words).filter(function (k) { return state.words[k].learned; }).length;
  var acc = state.totalAnswers ? Math.round(state.totalCorrect / state.totalAnswers * 100) : 0;
  var days = [];
  var max = 10;
  for (var i = 6; i >= 0; i--) {
    var key = dateKey(-i);
    var xp = state.history[key] ? state.history[key].xp : 0;
    if (xp > max) max = xp;
    var d = new Date();
    d.setDate(d.getDate() - i);
    days.push({ key: key, label: (d.getMonth() + 1) + '/' + d.getDate(), xp: xp });
  }
  var bars = days.map(function (day) {
    var h = Math.max(6, Math.round(day.xp / max * 100));
    return '<div class="bar-col"><div class="bar-track"><div class="bar" style="height:' + h + '%"></div></div>' +
      '<span class="bar-label">' + day.label + '</span><span class="bar-val">' + day.xp + '</span></div>';
  }).join('');
  var dots = [];
  for (var j = 13; j >= 0; j--) {
    var k2 = dateKey(-j);
    var active = state.history[k2] && state.history[k2].xp > 0;
    dots.push('<span class="dot' + (active ? ' active' : '') + (j === 0 ? ' today' : '') + '" title="' + k2 + '"></span>');
  }
  $('#view-stats').innerHTML =
    '<div class="stat-grid">' +
    statCard('#e4573d', '#fde8e3', 'star', '总经验', state.xp) +
    statCard('#d99a2b', '#fbf0d9', 'flame', '连续学习', currentStreak() + ' 天') +
    statCard('#0d9488', '#ddf3ef', 'target', '答题正确率', acc + '%') +
    statCard('#3f7fd6', '#e3edfb', 'badge-check', '已掌握单词', learned + ' / ' + allWords.length) +
    statCard('#d99a2b', '#fbf0d9', 'library-big', '词库收录', totalVocabCount() + ' 词') +
    statCard('#3f7fd6', '#e3edfb', 'trending-up', '高频词汇', highFreqWords.length + ' 词') +
    '</div>' +
    '<div class="chart-card"><h3>最近 7 天</h3><div class="week-chart">' + bars + '</div></div>' +
    '<div class="streak-card"><h3>连续学习</h3><div class="streak-dots">' + dots.join('') + '</div>' +
    '<p class="muted">过去 14 天</p></div>';
  lucide.createIcons();
}

function statCard(color, soft, icon, label, value) {
  return '<div class="stat-card">' +
    '<span class="stat-icon" style="--sc:' + color + ';--sc-soft:' + soft + '"><i data-lucide="' + icon + '"></i></span>' +
    '<div><p>' + label + '</p><strong>' + value + '</strong></div></div>';
}

function openSettings() {
  $('#settingAuto').checked = !!state.settings.autoSpeak;
  $('#settingSound').checked = !!state.settings.sound;
  $('#settingRate').value = String(state.settings.rate);
  $('#rateValue').textContent = state.settings.rate + 'x';
  $('#settingsOverlay').classList.remove('hidden');
  $('#settingsOverlay').setAttribute('aria-hidden', 'false');
}

function closeSettings() {
  $('#settingsOverlay').classList.add('hidden');
  $('#settingsOverlay').setAttribute('aria-hidden', 'true');
}

function buildLessonSteps(lesson) {
  var steps = [];
  lesson.items.forEach(function (item) { steps.push({ type: 'intro', item: item }); });
  var cycle = ['choice', 'choiceFr', 'type', 'listen', 'choice', 'choiceFr'];
  lesson.items.forEach(function (item, i) {
    steps.push({ type: cycle[i % cycle.length], item: item });
  });
  var withEx = lesson.items.filter(function (it) { return it.ex; });
  withEx.slice(0, 3).forEach(function (item, i) {
    if (i === 0) steps.push({ type: 'fill', item: item });
    else if (i === 1) steps.push({ type: 'sentenceChoice', item: item });
    else steps.push({ type: 'order', item: item });
  });
  var speakCount = lesson.transition ? 3 : 2;
  withEx.slice(0, speakCount).forEach(function (item) {
    steps.push({ type: 'speak', item: item });
  });
  if (lesson.phrase && !lesson.transition) {
    var phrase = lesson.items.find(function (it) { return Array.isArray(it.words) && it.words.length >= 3; });
    if (phrase) steps.push({ type: 'order', item: phrase });
  }
  return steps;
}

function makeSentenceOptions(item) {
  var correct = item.exZh || item.zh;
  var seen = {};
  seen[correct] = true;
  var out = [];
  var cands = shuffle(allWords.filter(function (w) { return w.exZh && !seen[w.exZh]; }));
  for (var i = 0; i < cands.length && out.length < 3; i++) {
    var val = cands[i].exZh;
    if (!val || seen[val]) continue;
    seen[val] = true;
    out.push(val);
  }
  return shuffle([correct].concat(out)).map(function (t) {
    return { text: t, correct: t === correct };
  });
}

function fillTarget(item) {
  var words = item.words || tokenizeFrench(item.ex || item.fr);
  var prefer = tokenizeFrench(item.fr || '')[0];
  if (prefer && words.indexOf(prefer) >= 0) return prefer;
  var best = '';
  words.forEach(function (w) { if (w.length > best.length) best = w; });
  return best;
}

function sentenceWithBlank(sentence, target) {
  var idx = String(sentence).toLowerCase().indexOf(String(target).toLowerCase());
  if (idx < 0) return esc(sentence);
  return esc(sentence.slice(0, idx)) + '<span class="blank">______</span>' + esc(sentence.slice(idx + target.length));
}

function mascotSvg() {
  return '<svg viewBox="0 0 96 96">' +
    '<ellipse cx="48" cy="54" rx="34" ry="30" fill="#ffd9a0"/>' +
    '<path d="M26 30 L14 12 L34 22 Z" fill="#ffd9a0"/>' +
    '<path d="M70 30 L82 12 L62 22 Z" fill="#ffd9a0"/>' +
    '<circle cx="37" cy="52" r="4.5" fill="#3a2c26"/><circle cx="59" cy="52" r="4.5" fill="#3a2c26"/>' +
    '<circle cx="37" cy="52" r="1.5" fill="#fff"/><circle cx="59" cy="52" r="1.5" fill="#fff"/>' +
    '<path d="M43 62 Q48 68 53 62" stroke="#3a2c26" stroke-width="3" fill="none" stroke-linecap="round"/>' +
    '<ellipse cx="30" cy="58" rx="6" ry="4" fill="#ff9f9f" opacity=".6"/>' +
    '<ellipse cx="66" cy="58" rx="6" ry="4" fill="#ff9f9f" opacity=".6"/></svg>';
}

function mascotHtml(mood) {
  return '<div class="mascot' + (mood ? ' ' + mood : '') + '" aria-hidden="true">' + mascotSvg() + '</div>';
}

function similarity(a, b) {
  var na = normalize(a);
  var nb = normalize(b);
  if (!na || !nb) return 0;
  var wa = na.split(' ');
  var wb = nb.split(' ');
  var matched = 0;
  var used = {};
  wa.forEach(function (w) {
    if (!w) return;
    for (var i = 0; i < wb.length; i++) {
      if (!used[i] && wb[i] === w) { matched++; used[i] = true; break; }
    }
  });
  var wordRatio = matched / Math.max(wa.length, wb.length);
  function bigrams(s) {
    var out = {};
    for (var i = 0; i < s.length - 1; i++) {
      var g = s.slice(i, i + 2);
      out[g] = (out[g] || 0) + 1;
    }
    return out;
  }
  var ga = bigrams(na);
  var gb = bigrams(nb);
  var common = 0;
  var total = 0;
  Object.keys(ga).forEach(function (g) { total += ga[g]; if (gb[g]) common += Math.min(ga[g], gb[g]); });
  Object.keys(gb).forEach(function (g) { total += gb[g]; });
  var charSim = total ? (2 * common) / total : 0;
  return Math.max(0, Math.min(1, wordRatio * 0.7 + charSim * 0.3));
}

function recordSpeak(wordId, score) {
  if (!wordId) return;
  var w = state.words[wordId] || { seen: 0, correct: 0, learned: false, lastAt: null, speakCount: 0, speakTotal: 0 };
  w.speakCount = (w.speakCount || 0) + 1;
  w.speakTotal = (w.speakTotal || 0) + score;
  w.lastAt = todayKey();
  state.words[wordId] = w;
}

function finishSpeak(step, transcript, target) {
  var score;
  if (String(transcript).indexOf('self:') === 0) {
    score = parseInt(transcript.slice(5), 10) || 0;
  } else {
    score = transcript ? Math.round(similarity(transcript, target) * 100) : 0;
  }
  var box = $('#speakResult');
  if (box) {
    box.classList.remove('hidden');
    box.className = 'speak-result ' + (score >= 85 ? 'good' : score >= 60 ? 'mid' : 'low');
    var stars = '';
    for (var i = 0; i < 5; i++) stars += i < Math.round(score / 20) ? '★' : '☆';
    box.innerHTML = '<div class="speak-score"><span>' + stars + '</span><strong>' + score + ' 分</strong></div>' +
      (transcript && transcript.indexOf('self:') !== 0 ? '<p class="muted">识别到：' + esc(transcript) + '</p>' : '');
  }
  recordSpeak(step.item.id, score);
  session.speakScore = score;
  session.answered = true;
  updateContinue(step);
}

function showSpeakFallback(step, msg) {
  var box = $('#speakResult');
  if (!box) return;
  box.classList.remove('hidden');
  box.className = 'speak-result mid';
  box.innerHTML = (msg ? '<p class="muted">' + esc(msg) + '</p>' : '') +
    '<div class="speak-self">' +
    '<button class="btn" type="button" data-self="85">读得不错</button>' +
    '<button class="btn" type="button" data-self="50">一般般</button>' +
    '<button class="btn" type="button" data-self="30">再练练</button>' +
    '</div>';
  Array.prototype.forEach.call(box.querySelectorAll('[data-self]'), function (b) {
    b.addEventListener('click', function () {
      finishSpeak(step, 'self:' + b.dataset.self, step.item.ex || step.item.fr);
    });
  });
}

function requestMic(cb, fail) {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    fail('此环境不支持麦克风访问，可以先自我评估');
    return;
  }
  navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
    cb(stream);
  }).catch(function (err) {
    fail('麦克风权限被拒绝（' + (err && err.name || 'unknown') + '），可以先自我评估');
  });
}

function startLevelRecording(step, target) {
  var btn = $('#speakStart');
  if (!btn) return;
  btn.disabled = true;
  btn.innerHTML = '<i data-lucide="mic"></i>正在录音……';
  lucide.createIcons();
  requestMic(function (stream) {
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) {
      btn.disabled = false;
      btn.innerHTML = '<i data-lucide="mic"></i>重新录音';
      lucide.createIcons();
      showSpeakFallback(step, '音频分析不可用，可以先自我评估');
      return;
    }
    var audioCtx = new Ctx();
    var source = audioCtx.createMediaStreamSource(stream);
    var analyser = audioCtx.createAnalyser();
    analyser.fftSize = 512;
    source.connect(analyser);
    var data = new Uint8Array(analyser.frequencyBinCount);
    var box = $('#speakResult');
    box.classList.remove('hidden');
    box.className = 'speak-result mid';
    box.innerHTML = '<div class="speak-level"><span></span></div><p class="muted">正在听你读…… 请大声说出来</p>';
    var active = 0;
    var samples = 0;
    var maxLevel = 0;
    var timer = setInterval(function () {
      analyser.getByteFrequencyData(data);
      var sum = 0;
      for (var i = 0; i < data.length; i++) sum += data[i];
      var avg = sum / data.length;
      samples++;
      if (avg > 10) active++;
      if (avg > maxLevel) maxLevel = avg;
      var bar = box.querySelector('.speak-level span');
      if (bar) bar.style.width = Math.min(100, Math.round(avg)) + '%';
    }, 100);
    setTimeout(function () {
      clearInterval(timer);
      try { source.disconnect(); audioCtx.close(); } catch (err) {}
      var ratio = samples ? active / samples : 0;
      var levelScore = Math.min(30, Math.round(maxLevel / 3));
      var score = Math.max(30, Math.min(95, Math.round(40 + ratio * 40 + levelScore)));
      box.className = 'speak-result good';
      box.innerHTML = '<div class="speak-score"><strong>开口度 ' + score + ' 分</strong></div>' +
        '<p class="muted">当前环境没有语音识别，已经录到你的声音；再自评一下读音</p>' +
        '<div class="speak-self">' +
        '<button class="btn" type="button" data-self="95">读得很好</button>' +
        '<button class="btn" type="button" data-self="70">还不错</button>' +
        '<button class="btn" type="button" data-self="45">再练练</button>' +
        '</div>';
      Array.prototype.forEach.call(box.querySelectorAll('[data-self]'), function (b) {
        b.addEventListener('click', function () {
          finishSpeak(step, 'self:' + b.dataset.self, target);
        });
      });
    }, 6000);
  }, function (msg) {
    btn.disabled = false;
    btn.innerHTML = '<i data-lucide="mic"></i>重新录音';
    lucide.createIcons();
    showSpeakFallback(step, msg);
  });
}

function runSpeechRecognition(step, target, btn) {
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    startLevelRecording(step, target);
    return;
  }
  var finished = false;
  btn.disabled = true;
  btn.innerHTML = '<i data-lucide="mic"></i>正在听……';
  lucide.createIcons();
  var rec;
  try {
    rec = new SR();
  } catch (err) {
    startLevelRecording(step, target);
    return;
  }
  rec.lang = 'fr-FR';
  rec.interimResults = false;
  rec.maxAlternatives = 3;
  rec.onresult = function (event) {
    if (finished) return;
    finished = true;
    var text = '';
    for (var i = 0; i < event.results.length; i++) {
      if (event.results[i].isFinal) text = event.results[i][0].transcript;
    }
    finishSpeak(step, text, target);
  };
  rec.onerror = function () {
    if (finished) return;
    finished = true;
    startLevelRecording(step, target);
  };
  rec.onend = function () {
    if (!finished) {
      finished = true;
      startLevelRecording(step, target);
    }
  };
  setTimeout(function () {
    if (!finished && session && session.answered === false) {
      finished = true;
      try { rec.stop(); } catch (err) {}
      startLevelRecording(step, target);
    }
  }, 9000);
  try {
    rec.start();
  } catch (err) {
    finished = true;
    startLevelRecording(step, target);
  }
}

function startSpeaking(step) {
  var target = step.item.ex || step.item.fr;
  var btn = $('#speakStart');
  if (!btn) return;
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    startLevelRecording(step, target);
    return;
  }
  requestMic(function () {
    runSpeechRecognition(step, target, btn);
  }, function (msg) {
    showSpeakFallback(step, msg);
  });
}

function pickDistractors(item, pool, field, count) {
  var seen = {};
  seen[item[field]] = true;
  var out = [];
  var candidates = shuffle(pool);
  for (var i = 0; i < candidates.length && out.length < count; i++) {
    var w = candidates[i];
    var val = w[field];
    if (!val || seen[val]) continue;
    seen[val] = true;
    out.push(val);
  }
  return out;
}

function makeOptions(item, field) {
  var correct = item[field];
  var distractors = pickDistractors(item, allWords, field, 3);
  var texts = shuffle([correct].concat(distractors));
  return texts.map(function (t) {
    return { text: t, correct: t === correct };
  });
}

function openLesson(id) {
  var lesson = getLesson(id);
  if (!lesson || !isUnlocked(id)) return;
  var steps = buildLessonSteps(lesson);
  openSession({
    mode: 'lesson',
    lessonId: lesson.id,
    itemCount: lesson.items.length,
    steps: steps
  });
}

function startPractice(mode) {
  var steps;
  if (mode === 'quiz') {
    var qItems = shuffle(allWords).slice(0, 8);
    var qTypes = ['choice', 'choiceFr', 'type', 'listen'];
    steps = qItems.map(function (it, i) { return { type: qTypes[i % 4], item: it }; });
  } else if (mode === 'listen') {
    var lItems = shuffle(allWords).slice(0, 6);
    steps = lItems.map(function (it) { return { type: 'listen', item: it }; });
  } else {
    var pairs = shuffle(allWords).slice(0, 4).map(function (w) {
      return { id: w.id, fr: w.fr, zh: w.zh };
    });
    steps = [{ type: 'match', pairs: pairs }];
  }
  openSession({ mode: mode, steps: steps });
}

function buildPlacementSteps() {
  var steps = [];
  var types = ['choice', 'choiceFr', 'listen', 'choice', 'choiceFr', 'type', 'listen', 'choice'];
  var idx = 0;
  units.forEach(function (u) {
    var pool = [];
    u.lessons.forEach(function (l) { pool = pool.concat(l.items); });
    var picks = shuffle(pool).slice(0, 2);
    picks.forEach(function (item) {
      steps.push({ type: types[idx % types.length], item: item });
      idx += 1;
    });
  });
  return steps;
}

function startPlacement() {
  openSession({ mode: 'placement', steps: buildPlacementSteps() });
}

function openSession(config) {
  session = config;
  session.index = 0;
  session.answered = false;
  session.mistakes = 0;
  session.correct = 0;
  session.finished = false;
  if (session.mode === 'match') {
    session.match = { selected: null, matched: {}, wrongLock: false };
  }
  $('#lessonContinue').classList.remove('hidden');
  $('#lessonOverlay').classList.remove('hidden');
  $('#lessonOverlay').setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
  renderStep();
}

function closeOverlay() {
  session = null;
  $('#lessonOverlay').classList.add('hidden');
  $('#lessonOverlay').setAttribute('aria-hidden', 'true');
  $('#lessonBody').innerHTML = '';
  $('#lessonProgress').style.width = '0';
  document.body.classList.remove('no-scroll');
}

function renderStep() {
  var step = session.steps[session.index];
  session.answered = false;
  var total = session.steps.length;
  $('#lessonProgress').style.width = (total > 1 ? (session.index / (total - 1)) * 100 : 100) + '%';
  $('#lessonStepLabel').textContent = (session.index + 1) + ' / ' + total;
  var body = $('#lessonBody');
  var html = '';
  var mood = 'smile';
  if (step.type === 'intro') {
    mood = 'wink';
    var example = step.item.ex
      ? '<div class="example-box"><div class="example-fr"><button type="button" data-speak="' + esc(step.item.ex) + '" title="播放例句"><i data-lucide="volume-2"></i>' + esc(step.item.ex) + '</button></div><div class="example-zh">' + esc(step.item.exZh || step.item.zh) + '</div></div>'
      : '';
    html = '<div class="step-kicker">认识新朋友</div>' +
      '<button class="big-word" type="button" data-speak="' + esc(step.item.fr) + '">' +
      '<i data-lucide="volume-2"></i><span>' + esc(step.item.fr) + '</span></button>' +
      '<div class="ipa">' + esc(step.item.ipa) + '</div>' +
      '<div class="zh-word">' + esc(step.item.zh) + '</div>' +
      example +
      (step.item.tip ? '<p class="tip">' + esc(step.item.tip) + '</p>' : '');
  } else if (step.type === 'choice' || step.type === 'choiceFr' || step.type === 'listen' || step.type === 'sentenceChoice') {
    var opts;
    var kicker;
    var prompt;
    if (step.type === 'sentenceChoice') {
      opts = step.options || makeSentenceOptions(step.item);
      step.options = opts;
      kicker = '句子意思';
      prompt = '<button class="listen-big" type="button" data-speak="' + esc(step.item.ex || step.item.fr) + '"><i data-lucide="volume-2"></i>' + esc(step.item.ex || step.item.fr) + '</button>';
    } else {
      var field = step.type === 'choiceFr' ? 'fr' : 'zh';
      opts = step.options || makeOptions(step.item, field);
      step.options = opts;
      kicker = step.type === 'choice' ? '选一选' : (step.type === 'listen' ? '竖起耳朵' : '翻成法语');
      if (step.type === 'listen') {
        prompt = '<button class="listen-big" type="button" data-speak="' + esc(step.item.fr) + '"><i data-lucide="volume-2"></i>' + esc(step.item.fr) + '</button>';
      } else if (step.type === 'choice') {
        prompt = '<button class="prompt-word" type="button" data-speak="' + esc(step.item.fr) + '">' + esc(step.item.fr) + '<i data-lucide="volume-2"></i></button>';
      } else {
        prompt = '<div class="prompt-zh">' + esc(step.item.zh) + '</div>';
      }
    }
    var optsHtml = opts.map(function (o) {
      return '<button class="option" type="button" data-correct="' + (o.correct ? '1' : '0') + '">' + esc(o.text) + '</button>';
    }).join('') + '<button class="option dontknow" type="button" data-dontknow="1">我不会，看答案</button>';
    html = '<div class="step-kicker">' + kicker + '</div>' +
      '<div class="prompt-wrap">' + prompt + '</div>' +
      '<div class="options">' + optsHtml + '</div>' +
      '<div id="feedback" class="feedback hidden"></div>';
  } else if (step.type === 'type') {
    html = '<div class="step-kicker">拼写小挑战</div>' +
      '<div class="prompt-zh">' + esc(step.item.zh) + '</div>' +
      '<div class="ipa hint">' + esc(step.item.ipa) + '</div>' +
      '<input id="typeInput" class="text-input" type="text" autocomplete="off" spellcheck="false" placeholder="输入法语">' +
      '<button id="typeReveal" class="reveal-btn" type="button">不会，看答案</button>' +
      '<div id="feedback" class="feedback hidden"></div>';
  } else if (step.type === 'fill') {
    var target = step.fillTarget || fillTarget(step.item);
    step.fillTarget = target;
    html = '<div class="step-kicker">句子填空</div>' +
      '<button class="listen-big" type="button" data-speak="' + esc(step.item.ex || step.item.fr) + '"><i data-lucide="volume-2"></i>听一听</button>' +
      '<div class="sentence-show">' + sentenceWithBlank(step.item.ex || step.item.fr, target) + '</div>' +
      '<div class="prompt-zh small">' + esc(step.item.exZh || step.item.zh) + '</div>' +
      '<input id="fillInput" class="text-input" type="text" autocomplete="off" spellcheck="false" placeholder="填入缺失的词">' +
      '<button id="fillReveal" class="reveal-btn" type="button">不会，看答案</button>' +
      '<div id="feedback" class="feedback hidden"></div>';
  } else if (step.type === 'order') {
    if (!session.order || session.orderFor !== step.item.id) {
      var orderWords = step.item.words || tokenizeFrench(step.item.ex || step.item.fr);
      session.order = { pool: shuffle(orderWords.slice()), placed: [] };
      session.orderFor = step.item.id;
    }
    html = '<div class="step-kicker">排排队</div>' +
      '<button class="listen-big" type="button" data-speak="' + esc(step.item.ex || step.item.fr) + '"><i data-lucide="volume-2"></i>听一听</button>' +
      '<div class="prompt-zh small">' + esc(step.item.exZh || step.item.zh) + '</div>' +
      '<div id="orderPlaced" class="order-placed"></div>' +
      '<div id="orderPool" class="chips"></div>' +
      '<button id="orderReveal" class="reveal-btn" type="button">不会，看答案</button>' +
      '<div id="feedback" class="feedback hidden"></div>';
  } else if (step.type === 'speak') {
    mood = 'listen';
    var sentence = step.item.ex || step.item.fr;
    html = '<div class="step-kicker">跟读小明星</div>' +
      '<div class="speak-card">' +
      '<div class="speak-sentence">' + esc(sentence) + '</div>' +
      '<div class="speak-zh">' + esc(step.item.exZh || step.item.zh) + '</div>' +
      '<p class="speak-hint">录音需要麦克风权限；无法使用时可以自我评估</p>' +
      '<button class="listen-big" type="button" data-speak="' + esc(sentence) + '"><i data-lucide="volume-2"></i>听示范</button>' +
      '<div class="speak-controls">' +
      '<button id="speakStart" class="btn primary" type="button"><i data-lucide="mic"></i>开始录音</button>' +
      '<button id="speakSkip" class="btn" type="button">先跳过</button>' +
      '</div>' +
      '<div id="speakResult" class="speak-result hidden"></div>' +
      '</div>' +
      '<div id="feedback" class="feedback hidden"></div>';
  } else if (step.type === 'match') {
    session.match = { selected: null, matched: {}, wrongLock: false };
    html = '<div class="step-kicker">配对练习</div>' +
      '<div class="match-count" id="matchCount">0 / ' + step.pairs.length + '</div>' +
      '<div class="match-grid">' +
      '<div class="match-col" id="matchFr"></div>' +
      '<div class="match-col" id="matchZh"></div>' +
      '</div><div id="feedback" class="feedback hidden"></div>';
  }
  body.innerHTML = '<div class="step-wrap">' + mascotHtml(mood) + html + '</div>';
  lucide.createIcons();
  bindStep(step);
  if (step.type === 'listen' && state.settings.autoSpeak) {
    setTimeout(function () { speak(step.item.fr); }, 300);
  }
  if ((step.type === 'sentenceChoice' || step.type === 'fill' || step.type === 'speak') && state.settings.autoSpeak) {
    setTimeout(function () { speak(step.item.ex || step.item.fr); }, 400);
  }
  updateContinue(step);
}

function updateContinue(step) {
  var cont = $('#lessonContinue');
  if (session.finished) return;
  if (step.type === 'intro') {
    cont.textContent = '继续前进';
    cont.disabled = false;
  } else if (step.type === 'match' || step.type === 'speak') {
    cont.textContent = '继续前进';
    cont.disabled = !session.answered;
  } else if (session.answered) {
    cont.textContent = '继续前进';
    cont.disabled = false;
  } else {
    cont.textContent = '检查';
    if (step.type === 'order') {
      cont.disabled = !session.order || session.order.pool.length > 0;
    } else {
      cont.disabled = true;
    }
  }
}

function bindStep(step) {
  var body = $('#lessonBody');
  var speakers = body.querySelectorAll('[data-speak]');
  Array.prototype.forEach.call(speakers, function (b) {
    b.addEventListener('click', function () { speak(b.dataset.speak); });
  });
  if (step.type === 'choice' || step.type === 'choiceFr' || step.type === 'listen' || step.type === 'sentenceChoice') {
    var options = body.querySelectorAll('.option');
    Array.prototype.forEach.call(options, function (b) {
      b.addEventListener('click', function () { submitOption(b); });
    });
  }
  if (step.type === 'type') {
    var input = $('#typeInput');
    if (input) {
      input.addEventListener('input', function () {
        $('#lessonContinue').disabled = !input.value.trim();
      });
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (input.value.trim()) checkTyped();
        }
      });
      setTimeout(function () { input.focus(); }, 60);
    }
  }
  if (step.type === 'fill') {
    var fillInput = $('#fillInput');
    if (fillInput) {
      fillInput.addEventListener('input', function () {
        $('#lessonContinue').disabled = !fillInput.value.trim();
      });
      fillInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (fillInput.value.trim()) checkFill();
        }
      });
      setTimeout(function () { fillInput.focus(); }, 60);
    }
  }
  if (step.type === 'speak') {
    var speakStart = $('#speakStart');
    var speakSkip = $('#speakSkip');
    if (speakStart) speakStart.addEventListener('click', function () { startSpeaking(step); });
    if (speakSkip) speakSkip.addEventListener('click', function () {
      session.answered = true;
      var box = $('#speakResult');
      if (box) {
        box.classList.remove('hidden');
        box.className = 'speak-result mid';
        box.innerHTML = '<p class="muted">先跳过，下次再试试</p>';
      }
      updateContinue(step);
    });
  }
  var revealBtns = body.querySelectorAll('.reveal-btn');
  Array.prototype.forEach.call(revealBtns, function (b) {
    b.addEventListener('click', function () { revealAnswer(step); });
  });
  if (step.type === 'order') {
    renderOrder();
    bindOrder();
  }
  if (step.type === 'match') {
    renderMatch();
    bindMatch();
  }
}

function renderOrder() {
  var order = session.order;
  var placedHtml = order.placed.length
    ? order.placed.map(function (w, i) {
        return '<button class="chip" type="button" data-place="' + i + '">' + esc(w) + '</button>';
      }).join('')
    : '<span class="placeholder">点击下方词语</span>';
  var poolHtml = order.pool.map(function (w, i) {
    return '<button class="chip" type="button" data-pool="' + i + '">' + esc(w) + '</button>';
  }).join('');
  $('#orderPlaced').innerHTML = placedHtml;
  $('#orderPool').innerHTML = poolHtml;
}

function bindOrder() {
  var step = session.steps[session.index];
  var placed = $('#orderPlaced').querySelectorAll('[data-place]');
  Array.prototype.forEach.call(placed, function (b) {
    b.addEventListener('click', function () {
      var i = parseInt(b.dataset.place, 10);
      session.order.pool.push(session.order.placed.splice(i, 1)[0]);
      renderOrder();
      bindOrder();
      updateContinue(step);
    });
  });
  var pool = $('#orderPool').querySelectorAll('[data-pool]');
  Array.prototype.forEach.call(pool, function (b) {
    b.addEventListener('click', function () {
      var i = parseInt(b.dataset.pool, 10);
      session.order.placed.push(session.order.pool.splice(i, 1)[0]);
      renderOrder();
      bindOrder();
      updateContinue(step);
    });
  });
}

function renderMatch() {
  var st = session.match;
  var step = session.steps[session.index];
  var frHtml = step.pairs.map(function (p) {
    return '<button class="match-btn" type="button" data-side="fr" data-id="' + esc(p.id) + '"' +
      (st.matched[p.id] ? ' disabled' : '') + '>' + esc(p.fr) + '</button>';
  }).join('');
  var zhHtml = step.pairs.map(function (p) {
    return '<button class="match-btn" type="button" data-side="zh" data-id="' + esc(p.id) + '"' +
      (st.matched[p.id] ? ' disabled' : '') + '>' + esc(p.zh) + '</button>';
  }).join('');
  $('#matchFr').innerHTML = frHtml;
  $('#matchZh').innerHTML = zhHtml;
  $('#matchCount').textContent = Object.keys(st.matched).length + ' / ' + step.pairs.length;
}

function bindMatch() {
  var body = $('#lessonBody');
  var btns = body.querySelectorAll('.match-btn');
  Array.prototype.forEach.call(btns, function (b) {
    b.addEventListener('click', function () { onMatchClick(b); });
  });
}

function onMatchClick(btn) {
  var step = session.steps[session.index];
  var st = session.match;
  if (session.answered || st.wrongLock) return;
  var id = btn.dataset.id;
  var side = btn.dataset.side;
  if (st.matched[id]) return;
  if (!st.selected) {
    st.selected = { side: side, id: id };
    renderMatch();
    bindMatch();
    return;
  }
  if (st.selected.side === side) {
    st.selected = null;
    renderMatch();
    bindMatch();
    return;
  }
  var sel = st.selected;
  st.selected = null;
  if (sel.id === id) {
    st.matched[id] = true;
    session.correct += 1;
    recordAnswer(true);
    recordWord(id, true);
    playTone(true);
    renderMatch();
    bindMatch();
    if (Object.keys(st.matched).length === step.pairs.length) {
      session.answered = true;
      var fb = $('#feedback');
      fb.classList.remove('hidden', 'good', 'bad');
      fb.classList.add('good');
      fb.innerHTML = '<div class="fb-title"><i data-lucide="circle-check"></i>全部配对完成</div>';
      lucide.createIcons();
      updateContinue(step);
    }
  } else {
    session.mistakes += 1;
    recordAnswer(false);
    playTone(false);
    st.wrongLock = true;
    var btns = $('#lessonBody').querySelectorAll('.match-btn');
    Array.prototype.forEach.call(btns, function (b) {
      if (b.dataset.id === sel.id || b.dataset.id === id) {
        b.classList.add('wrong');
        b.disabled = true;
      }
    });
    setTimeout(function () {
      if (session && session.match) {
        st.wrongLock = false;
        renderMatch();
        bindMatch();
      }
    }, 500);
  }
}

function revealAnswer(step) {
  if (session.answered) return;
  session.answered = true;
  session.mistakes += 1;
  recordAnswer(false);
  recordWord(step.item.id, false);
  playTone(false);
  var answer;
  if (step.type === 'choice' || step.type === 'choiceFr' || step.type === 'listen' || step.type === 'sentenceChoice') {
    var opts = step.options || [];
    for (var oi = 0; oi < opts.length; oi++) {
      if (opts[oi].correct) { answer = opts[oi].text; break; }
    }
    var optionBtns = $('#lessonBody').querySelectorAll('.option');
    Array.prototype.forEach.call(optionBtns, function (b) { b.disabled = true; });
    var rightBtn = $('#lessonBody').querySelector('.option[data-correct="1"]');
    if (rightBtn) rightBtn.classList.add('right');
  } else if (step.type === 'type' || step.type === 'fill') {
    answer = step.type === 'type' ? step.item.fr : (step.fillTarget || fillTarget(step.item));
    var input = step.type === 'type' ? $('#typeInput') : $('#fillInput');
    if (input) input.disabled = true;
  } else if (step.type === 'order') {
    answer = step.item.ex || step.item.fr;
    Array.prototype.forEach.call($('#orderPool').querySelectorAll('button'), function (b) { b.disabled = true; });
    Array.prototype.forEach.call($('#orderPlaced').querySelectorAll('button'), function (b) { b.disabled = true; });
  } else {
    answer = step.item.ex || step.item.fr;
  }
  showFeedback(false, answer, step.item.exZh || step.item.zh);
  updateContinue(step);
}

function submitOption(btn) {
  if (session.answered) return;
  var step = session.steps[session.index];
  if (btn.dataset.dontknow === '1') {
    revealAnswer(step);
    return;
  }
  session.answered = true;
  var correct = btn.dataset.correct === '1';
  btn.classList.add(correct ? 'right' : 'wrong');
  var options = $('#lessonBody').querySelectorAll('.option');
  Array.prototype.forEach.call(options, function (b) { b.disabled = true; });
  if (!correct) {
    var rightBtn = $('#lessonBody').querySelector('.option[data-correct="1"]');
    if (rightBtn) rightBtn.classList.add('right');
  }
  showFeedback(correct, step.item.ex || step.item.fr, step.item.exZh || step.item.zh);
  recordAnswer(correct);
  recordWord(step.item.id, correct);
  if (correct) session.correct += 1; else session.mistakes += 1;
  playTone(correct);
  updateContinue(step);
}

function showFeedback(correct, fr, zh) {
  var fb = $('#feedback');
  if (!fb) return;
  fb.classList.remove('hidden', 'good', 'bad');
  fb.classList.add(correct ? 'good' : 'bad');
  if (correct) {
    fb.innerHTML = '<div class="fb-title"><i data-lucide="circle-check"></i>回答正确</div>';
  } else {
    fb.innerHTML = '<div class="fb-title"><i data-lucide="circle-x"></i>正确答案</div>' +
      '<div class="fb-answer">' + esc(fr) + '<span>' + esc(zh) + '</span></div>';
  }
  lucide.createIcons();
}

function checkFill() {
  var step = session.steps[session.index];
  if (session.answered) return;
  var input = $('#fillInput');
  var target = step.fillTarget || fillTarget(step.item);
  step.fillTarget = target;
  var correct = normalize(input.value) === normalize(target);
  session.answered = true;
  input.disabled = true;
  showFeedback(correct, step.item.ex || step.item.fr, step.item.exZh || step.item.zh);
  recordAnswer(correct);
  recordWord(step.item.id, correct);
  if (correct) session.correct += 1; else session.mistakes += 1;
  playTone(correct);
  updateContinue(step);
}

function checkTyped() {
  var step = session.steps[session.index];
  if (session.answered) return;
  var input = $('#typeInput');
  var correct = normalize(input.value) === normalize(step.item.fr);
  session.answered = true;
  input.disabled = true;
  showFeedback(correct, step.item.fr, step.item.zh);
  recordAnswer(correct);
  recordWord(step.item.id, correct);
  if (correct) session.correct += 1; else session.mistakes += 1;
  playTone(correct);
  updateContinue(step);
}

function checkOrder() {
  var step = session.steps[session.index];
  if (session.answered) return;
  var correct = normalize(session.order.placed.join(' ')) === normalize(step.item.ex || step.item.fr);
  session.answered = true;
  Array.prototype.forEach.call($('#orderPool').querySelectorAll('button'), function (b) { b.disabled = true; });
  Array.prototype.forEach.call($('#orderPlaced').querySelectorAll('button'), function (b) { b.disabled = true; });
  showFeedback(correct, step.item.fr, step.item.zh);
  recordAnswer(correct);
  recordWord(step.item.id, correct);
  if (correct) session.correct += 1; else session.mistakes += 1;
  playTone(correct);
  updateContinue(step);
}

function onContinue() {
  if (session.finished) {
    closeOverlay();
    showView(currentView);
    return;
  }
  var step = session.steps[session.index];
  if (!session.answered) {
    if (step.type === 'type') { checkTyped(); return; }
    if (step.type === 'fill') { checkFill(); return; }
    if (step.type === 'order') { checkOrder(); return; }
    if (step.type === 'match') return;
  }
  advance();
}

function advance() {
  if (session.index < session.steps.length - 1) {
    session.index += 1;
    renderStep();
  } else {
    finishSession();
  }
}

function placementLevelForScore(correct) {
  if (correct >= 8) return 4;
  if (correct >= 7) return 3;
  if (correct >= 6) return 2;
  return 1;
}

function placementUnitText(level) {
  if (level >= 4) return '已解锁全部课程';
  if (level === 3) return '已解锁前三个单元';
  if (level === 2) return '已解锁前两个单元';
  return '已解锁第一单元';
}

function finishSession() {
  var s = session;
  var answered = s.correct + s.mistakes;
  var xp;
  var acc = answered ? Math.round(s.correct / answered * 100) : 100;
  var completionHtml;
  if (s.mode === 'lesson') {
    xp = 10 + s.itemCount * 2 + Math.max(0, 8 - s.mistakes);
    addXp(xp);
    completeLesson(s.lessonId, acc);
    completionHtml = genericCompletionHtml('课程完成', xp, acc, answered);
  } else if (s.mode === 'placement') {
    var pLevel = placementLevelForScore(s.correct);
    if (pLevel > placementLevel()) {
      state.placement = { best: pLevel, takenAt: todayKey() };
    }
    xp = 10 + s.correct * 2;
    addXp(xp);
    var passed = pLevel >= 2;
    completionHtml = placementCompletionHtml(s, pLevel, xp, acc, passed);
  } else if (s.mode === 'match') {
    xp = 10 + Math.max(0, 4 - s.mistakes) * 2;
    addXp(xp);
    completionHtml = genericCompletionHtml('练习完成', xp, acc, answered);
  } else {
    xp = 8 + Math.min(8, answered) + Math.max(0, 5 - s.mistakes);
    addXp(xp);
    completionHtml = genericCompletionHtml('练习完成', xp, acc, answered);
  }
  $('#lessonBody').innerHTML = completionHtml;
  $('#lessonStepLabel').textContent = '完成';
  $('#lessonProgress').style.width = '100%';
  $('#lessonContinue').classList.add('hidden');
  $('#finishBack').addEventListener('click', function () {
    closeOverlay();
    showView(currentView);
  });
  if (s.mode === 'placement') {
    var retry = $('#retryPlacement');
    if (retry) {
      retry.addEventListener('click', function () { startPlacement(); });
    }
  }
  session.finished = true;
  spawnConfetti();
  save();
  renderTopbar();
}

function genericCompletionHtml(label, xp, acc, answered) {
  return '<div class="completion">' +
    mascotHtml('happy') +
    '<div class="completion-icon"><i data-lucide="badge-check"></i></div>' +
    '<h2>Bravo ! 太棒啦</h2>' +
    '<p class="muted">' + label + '</p>' +
    '<div class="score-chips">' +
    '<span class="score-chip"><i data-lucide="star"></i>+' + xp + ' XP</span>' +
    '<span class="score-chip"><i data-lucide="target"></i>' + acc + '% 正确率</span>' +
    '<span class="score-chip"><i data-lucide="list-checks"></i>' + answered + ' 题</span>' +
    '</div>' +
    '<button class="btn primary lg" type="button" id="finishBack"><i data-lucide="arrow-left"></i>返回</button>' +
    '</div>';
}

function placementCompletionHtml(s, level, xp, acc, passed) {
  return '<div class="completion">' +
    mascotHtml('happy') +
    '<div class="completion-icon"><i data-lucide="gauge"></i></div>' +
    '<h2>摸底测试完成</h2>' +
    '<p class="muted">答对 ' + s.correct + ' / 8 题</p>' +
    '<div class="placement-result ' + (passed ? 'pass' : 'fail') + '">' +
    (passed
      ? '<i data-lucide="badge-check"></i>'
      : '<i data-lucide="rotate-ccw"></i>') +
    '<span>' + placementUnitText(level) + '</span></div>' +
    '<div class="score-chips">' +
    '<span class="score-chip"><i data-lucide="star"></i>+' + xp + ' XP</span>' +
    '<span class="score-chip"><i data-lucide="target"></i>' + acc + '% 正确率</span>' +
    '</div>' +
    '<div class="completion-actions">' +
    '<button class="btn" type="button" id="retryPlacement"><i data-lucide="rotate-ccw"></i>重新测试</button>' +
    '<button class="btn primary lg" type="button" id="finishBack"><i data-lucide="arrow-left"></i>返回学习</button>' +
    '</div>' +
    '</div>';
}

function completeLesson(id, acc) {
  var prev = state.lessons[id] || { done: false, best: 0, times: 0 };
  prev.done = true;
  prev.best = Math.max(prev.best || 0, acc);
  prev.times = (prev.times || 0) + 1;
  prev.lastAt = todayKey();
  state.lessons[id] = prev;
}

function spawnConfetti() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var overlay = $('#lessonOverlay');
  var colors = ['#e4573d', '#0d9488', '#d99a2b', '#3f7fd6'];
  for (var i = 0; i < 18; i++) {
    var el = document.createElement('span');
    el.className = 'confetti';
    el.style.left = (Math.random() * 100) + '%';
    el.style.background = colors[i % colors.length];
    el.style.animationDelay = (Math.random() * 0.3) + 's';
    overlay.appendChild(el);
    setTimeout(function (node) { node.remove(); }, 1800, el);
  }
}

function bindStatic() {
  $$('.nav-btn').forEach(function (b) {
    b.addEventListener('click', function () { showView(b.dataset.view); });
  });
  $('#settingsBtn').addEventListener('click', openSettings);
  $('#settingsClose').addEventListener('click', closeSettings);
  $('#settingsOverlay').addEventListener('click', function (e) {
    if (e.target.id === 'settingsOverlay') closeSettings();
  });
  $('#lessonClose').addEventListener('click', closeOverlay);
  $('#lessonContinue').addEventListener('click', onContinue);
  $('#settingAuto').addEventListener('change', function (e) {
    state.settings.autoSpeak = e.target.checked;
    save();
  });
  $('#settingSound').addEventListener('change', function (e) {
    state.settings.sound = e.target.checked;
    save();
  });
  $('#settingRate').addEventListener('input', function (e) {
    state.settings.rate = parseFloat(e.target.value);
    $('#rateValue').textContent = state.settings.rate + 'x';
    save();
  });
  $('#resetBtn').addEventListener('click', function () {
    if (window.confirm('确定清空所有学习记录？')) {
      localStorage.removeItem(LS_KEY);
      window.location.reload();
    }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (!$('#lessonOverlay').classList.contains('hidden')) closeOverlay();
    else if (!$('#settingsOverlay').classList.contains('hidden')) closeSettings();
  });
}

function boot() {
  bindStatic();
  showView('learn');
  try {
    if ('speechSynthesis' in window) {
      speechSynthesis.getVoices();
      speechSynthesis.onvoiceschanged = function () { speechSynthesis.getVoices(); };
    }
  } catch (err) {}
}

boot();
})();
