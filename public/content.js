window.CTM_CONTENT = {
  release: 'public-preview-1',
  years: { reviewed: [750], endpoint: 2025 },
  sources: {
    metTang: { title: 'Tang Dynasty (618–907)', institution: 'The Metropolitan Museum of Art', url: 'https://www.metmuseum.org/essays/tang-dynasty-618-906', scope: 'Tang chronology, Chang’an and court connections; broad dynasty essay' },
    metJapan: { title: 'Japan, 500–1000 CE', institution: 'The Metropolitan Museum of Art', url: 'https://www.metmuseum.org/toah/ht/06/eaj.html', scope: 'Period overview; not a household inventory for 750' },
    unescoNara: { title: 'Historic Monuments of Ancient Nara', institution: 'UNESCO World Heritage Centre', url: 'https://whc.unesco.org/en/list/870/', scope: 'Capital dates, monuments and excavated palace site' },
    naraTablets: { title: 'Wooden Tablets from the Nara Palace Site I', institution: 'Nara National Research Institute for Cultural Properties', url: 'https://www.nabunken.go.jp/english/historical-material/5.html', scope: 'Excavated administrative tablets, including dated 745–747 records' },
    naraOffices: { title: 'Nara Palace Excavation Report VIII', institution: 'Nara National Research Institute for Cultural Properties', url: 'https://www.nabunken.go.jp/english/historical-material/8.html', scope: 'Rice tribute, palace brewing and clothing workshop records' }
  },
  journey: {
    id: 'tang-nara-750', year: 750, label: 'Two capitals, one century',
    title: 'Chang’an & Heijō-kyō',
    intro: 'Around 750 CE, two planned capitals were linked by ideas, materials and people. Their streets can be compared; their residents cannot be reduced to one shared way of life.',
    caution: 'This is a comparison of capital regions and the surviving evidence, not a portrait of every Tang or Nara household.',
    places: [
      { id: 'changan', name: 'Chang’an', region: 'Tang China · Guanzhong', lat: 34.27, lon: 108.95, accent: '#f0b987', description: 'The Tang capital brought merchants, clerics, envoys and officials into a walled urban center. Its court world was connected to places far beyond the empire.', sources: ['metTang'] },
      { id: 'heijo', name: 'Heijō-kyō', region: 'Nara Japan · Yamato', lat: 34.69, lon: 135.79, accent: '#a6d9c2', description: 'The capital established in 710 gathered court offices, temples, workshops and goods supplied by provincial communities. Excavation gives unusually direct traces of administration.', sources: ['unescoNara', 'naraTablets'] }
    ],
    topics: [
      { id: 'work', label: 'Work & obligations', kicker: 'Who kept a capital running?', left: 'Chang’an held court officials, merchants, clergy and visiting envoys. This describes an urban mix, not a typical Tang subject: farming and frontier labor lay beyond the capital.', right: 'Palace tablets record taxes in kind, official messages and workers. Some 745–747 records can be dated closely; they reveal administration more clearly than the full lives of those who produced the goods.', insight: 'Both capitals depended on people outside their walls. The Japanese tablets make certain deliveries and offices unusually visible; the Tang essay describes a broader urban world.', sources: ['metTang', 'naraTablets', 'naraOffices'] },
      { id: 'food', label: 'Food & supply', kicker: 'Follow the provisions', left: 'Chang’an’s cosmopolitan accounts describe movement of people and goods. The selected overview does not establish a standard meal for a city household in 750.', right: 'Excavated Nara tablets include rice tribute and requests for foodstuffs. Records of a palace brewing office show a specialized supply chain, not what all residents ate.', insight: 'A tax label can prove a delivery better than a dinner. We do not turn court supply records into a universal menu.', sources: ['metTang', 'naraTablets', 'naraOffices'] },
      { id: 'homes', label: 'City & homes', kicker: 'Read the built landscape', left: 'Chang’an’s streets brought diverse travelers and residents together, while status and mobility differed sharply. The general chronology does not map one family home.', right: 'The excavated palace and surviving temples locate institutional life in Heijō-kyō. Most timber buildings disappeared; visible gates today are reconstructions.', insight: 'The capitals were planned environments, yet the strongest surviving evidence favors officials and monuments. Ordinary domestic space needs more local research.', sources: ['metTang', 'unescoNara'] },
      { id: 'exchange', label: 'Ideas & exchange', kicker: 'Connection, then adaptation', left: 'The Met describes Chang’an as a meeting place for merchants, clerics and envoys from multiple regions, including Korea and Japan.', right: 'Heijō-kyō used a planned capital form shaped by Chinese prototypes. Nara’s institutions and religious sites developed within Japanese court and regional conditions.', insight: 'Connection did not make the two capitals identical. The evidence supports exchange and adaptation, not a one-way copy of everyday life.', sources: ['metTang', 'unescoNara', 'naraTablets'] }
    ]
  }
};
