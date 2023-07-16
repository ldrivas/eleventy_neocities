var locations = [
    {
      lat: -34.9285,
      lng: 138.6007,
      title: 'Adelaide CBD',
      category: 'cafe',
      rating: 5,
      content: '<div class="infowindow-content"><h3>This is the Adelaide CBD.</h3><div><img src="/img/map.png" alt="Adelaide CBD Image" width="200" height="auto"></div><div><p><br>Adelaide city centre (Kaurna: Tarndanya) is the inner city locality of Greater Adelaide, the capital city of South Australia. It is known by locals simply as "the City" or "Town" to distinguish it from Greater Adelaide and from the City of Adelaide local government area (which also includes North Adelaide and from the Park Lands around the whole city centre). The population was 15,115 in the 2016 census.<p><br>Attribution: Adelaide city centre, <a href="https://en.wikipedia.org/wiki/Adelaide_city_centre">https://en.wikipedia.org/wiki/Adelaide_city_centre</a> (last visited 11 July 2023)</p></div>'
    },
    {
      lat: -34.924342,
      lng: 138.606044,
      title: 'Hindmarsh Square',
      category: 'restaurant',
      rating: 4,
      content: '<div class="infowindow-content"><h3>Hindmarsh Square</h3><div><img src="/img/map.png" alt="Adelaide CBD Image" width="200" height="auto"></div><div><p><br>Adelaide city centre (Kaurna: Tarndanya) is the inner city locality of Greater Adelaide, the capital city of South Australia. It is known by locals simply as "the City" or "Town" to distinguish it from Greater Adelaide and from the City of Adelaide local government area (which also includes North Adelaide and from the Park Lands around the whole city centre). The population was 15,115 in the 2016 census.<p><br>Attribution: Adelaide city centre, <a href="https://en.wikipedia.org/wiki/Adelaide_city_centre">https://en.wikipedia.org/wiki/Adelaide_city_centre</a> (last visited 11 July 2023)</p></div>'
    },
    {
      lat: -34.927913,
      lng: 138.597208,
      title: 'The Brew Haven',
      category: 'cafe',
      rating: 4,
      content: '<div class="infowindow-content"><h3>The Brew Haven</h3><div><img src="/img/map.png" alt="The Brew Haven" width="200" height="auto"></div><div><p>Description of The Brew Haven</p></div></div>'
    },
    {
      lat: -34.928320,
      lng: 138.601467,
      title: 'Caffeine Dreams',
      category: 'cafe',
      rating: 4.5,
      content: '<h3>Caffeine Dreams</h3><div><img src="/img/map.png" alt="Caffeine Dreams" width="200" height="auto"></div><div><p>Description of Caffeine Dreams</p></div>'
    },
    {
      lat: -34.928852,
      lng: 138.593915,
      title: 'Mellow Mornings',
      category: 'cafe',
      rating: 4.2,
      content: '<h3>Mellow Mornings</h3><div><img src="/img/map.png" alt="Mellow Mornings" width="200" height="auto"></div><div><p>Description of Mellow Mornings</p></div>'
    },
    {
      lat: -34.935237,
      lng: 138.598466,
      title: 'Sugar & Spice Cafe',
      category: 'cafe',
      rating: 3.8,
      content: '<h3>Sugar & Spice Cafe</h3><div><img src="/img/map.png" alt="Sugar & Spice Cafe" width="200" height="auto"></div><div><p>Description of Sugar & Spice Cafe</p></div>'
    },
    {
      lat: -34.928658,
      lng: 138.593082,
      title: 'The Daily Grind',
      category: 'cafe',
      rating: 4.3,
      content: '<h3>The Daily Grind</h3><div><img src="/img/map.png" alt="The Daily Grind" width="200" height="auto"></div><div><p>Description of The Daily Grind</p></div>'
    },
    {
      lat: -34.936158,
      lng: 138.602699,
      title: 'Cuppa Corner',
      category: 'cafe',
      rating: 4.1,
      content: '<h3>Cuppa Corner</h3><div><img src="/img/map.png" alt="Cuppa Corner" width="200" height="auto"></div><div><p>Description of Cuppa Corner</p></div>'
    },
    {
      lat: -34.937054,
      lng: 138.615336,
      title: 'Bean and Leaf Bistro',
      category: 'restaurant',
      rating: 4.7,
      content: '<h3>Bean and Leaf Bistro</h3><div><img src="/img/map.png" alt="Bean and Leaf Bistro" width="200" height="auto"></div><div><p>Description of Bean and Leaf Bistro</p></div>'
    },
    {
      lat: -34.928389,
      lng: 138.604779,
      title: 'Sip & Savor',
      category: 'restaurant',
      rating: 4.4,
      content: '<h3>Sip & Savor</h3><div><img src="/img/map.png" alt="Sip & Savor" width="200" height="auto"></div><div><p>Description of Sip & Savor</p></div>'
    },
    {
      lat: -34.923962,
      lng: 138.604251,
      title: 'The Cozy Bean',
      category: 'cafe',
      rating: 4.6,
      content: '<h3>The Cozy Bean</h3><div><img src="/img/map.png" alt="The Cozy Bean" width="200" height="auto"></div><div><p>Description of The Cozy Bean</p></div>'
    },
    {
      lat: -34.920253,
      lng: 138.602739,
      title: 'Brewed Bliss',
      category: 'cafe',
      rating: 4.3,
      content: '<h3>Brewed Bliss</h3><div><img src="/img/map.png" alt="Brewed Bliss" width="200" height="auto"></div><div><p>Description of Brewed Bliss</p></div>'
    },
    {
    lat: -34.926816,
    lng: 138.599023,
    title: 'Brunelli',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Brunelli</h3><div><img src="/img/map.png" alt="Brunelli" width="200" height="auto"></div><div><p>Description of Brunelli</p></div>'
  },
  {
    lat: -34.924917,
    lng: 138.597886,
    title: 'Kafin',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Kafin</h3><div><img src="/img/map.png" alt="Kafin" width="200" height="auto"></div><div><p>Description of Kafin</p></div>'
  },
  {
    lat: -34.924146,
    lng: 138.603547,
    title: 'Howling Owl',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Howling Owl</h3><div><img src="/img/map.png" alt="Howling Owl" width="200" height="auto"></div><div><p>Description of Howling Owl</p></div>'
  },
  {
    lat: -34.922509,
    lng: 138.606781,
    title: 'Exeter',
    category: 'cafe',
    rating: 4.5,
    content: '<h3>Exeter</h3><div><img src="/img/map.png" alt="Exeter" width="200" height="auto"></div><div><p>Description of Exeter</p></div>'
  },
  {
    lat: -34.921720,
    lng: 138.603163,
    title: 'Austral',
    category: 'cafe',
    rating: 4.0,
    content: '<h3>Austral</h3><div><img src="/img/map.png" alt="Austral" width="200" height="auto"></div><div><p>Description of Austral</p></div>'
  },
  {
    lat: -34.920992,
    lng: 138.603358,
    title: 'Schnithouse',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Schnithouse</h3><div><img src="/img/map.png" alt="Schnithouse" width="200" height="auto"></div><div><p>Description of Schnithouse</p></div>'
  },
  {
    lat: -34.925870,
    lng: 138.595695,
    title: 'Grill\'d',
    category: 'cafe',
    rating: 4.4,
    content: '<h3>Grill\'d</h3><div><img src="/img/map.png" alt="Grill\'d" width="200" height="auto"></div><div><p>Description of Grill\'d</p></div>'
  },
  {
    lat: -34.925873,
    lng: 138.604372,
    title: 'Fire x Soi 38',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Fire x Soi 38</h3><div><img src="/img/map.png" alt="Fire x Soi 38" width="200" height="auto"></div><div><p>Description of Fire x Soi 38</p></div>'
  },
  {
    lat: -34.926300,
    lng: 138.599927,
    title: 'San Giorgio',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>San Giorgio</h3><div><img src="/img/map.png" alt="San Giorgio" width="200" height="auto"></div><div><p>Description of San Giorgio</p></div>'
  },
  {
    lat: -34.926913,
    lng: 138.597979,
    title: 'Dumplings R Us',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Dumplings R Us</h3><div><img src="/img/map.png" alt="Dumplings R Us" width="200" height="auto"></div><div><p>Description of Dumplings R Us</p></div>'
  },
  {
    lat: -34.926889,
    lng: 138.598012,
    title: 'Betty\'s Burgers',
    category: 'cafe',
    rating: 4.4,
    content: '<h3>Betty\'s Burgers</h3><div><img src="/img/map.png" alt="Betty\'s Burgers" width="200" height="auto"></div><div><p>Description of Betty\'s Burgers</p></div>'
  },
  {
    lat: -34.929007,
    lng: 138.602790,
    title: 'Yiros House',
    category: 'cafe',
    rating: 4.5,
    content: '<h3>Yiros House</h3><div><img src="/img/map.png" alt="Yiros House" width="200" height="auto"></div><div><p>Description of Yiros House</p></div>'
  },
  {
    lat: -34.926899,
    lng: 138.601697,
    title: 'Eros Kafe',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Eros Kafe</h3><div><img src="/img/map.png" alt="Eros Kafe" width="200" height="auto"></div><div><p>Description of Eros Kafe</p></div>'
  },
  {
    lat: -34.928234,
    lng: 138.602553,
    title: 'Bun Cha Vietnamese',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Bun Cha Vietnamese</h3><div><img src="/img/map.png" alt="Bun Cha Vietnamese" width="200" height="auto"></div><div><p>Description of Bun Cha Vietnamese</p></div>'
  },
  {
    lat: -34.926933,
    lng: 138.600001,
    title: 'Felici',
    category: 'cafe',
    rating: 4.4,
    content: '<h3>Felici</h3><div><img src="/img/map.png" alt="Felici" width="200" height="auto"></div><div><p>Description of Felici</p></div>'
  },
  {
    lat: -34.924239,
    lng: 138.599890,
    title: 'The Exchange',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>The Exchange</h3><div><img src="/img/map.png" alt="The Exchange" width="200" height="auto"></div><div><p>Description of The Exchange</p></div>'
  },
  {
    lat: -34.924482,
    lng: 138.597985,
    title: 'Belgian Beer Café',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Belgian Beer Café</h3><div><img src="/img/map.png" alt="Belgian Beer Café" width="200" height="auto"></div><div><p>Description of Belgian Beer Café</p></div>'
  },
  {
    lat: -34.924628,
    lng: 138.598456,
    title: 'Nano',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Nano</h3><div><img src="/img/map.png" alt="Nano" width="200" height="auto"></div><div><p>Description of Nano</p></div>'
  },
  {
    lat: -34.926064,
    lng: 138.598259,
    title: 'Hey Jupiter',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Hey Jupiter</h3><div><img src="/img/map.png" alt="Hey Jupiter" width="200" height="auto"></div><div><p>Description of Hey Jupiter</p></div>'
  },
  {
    lat: -34.926058,
    lng: 138.599226,
    title: 'Two Bit Villains',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Two Bit Villains</h3><div><img src="/img/map.png" alt="Two Bit Villains" width="200" height="auto"></div><div><p>Description of Two Bit Villains</p></div>'
  },
  {
    lat: -34.927501,
    lng: 138.599258,
    title: 'Remy\'s Deep Dish',
    category: 'cafe',
    rating: 4.5,
    content: '<h3>Remy\'s Deep Dish</h3><div><img src="/img/map.png" alt="Remy\'s Deep Dish" width="200" height="auto"></div><div><p>Description of Remy\'s Deep Dish</p></div>'
  },
  {
    lat: -34.926094,
    lng: 138.597913,
    title: 'Sylvia\'s Café',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Sylvia\'s Café</h3><div><img src="/img/map.png" alt="Sylvia\'s Café" width="200" height="auto"></div><div><p>Description of Sylvia\'s Café</p></div>'
  },
  {
    lat: -34.929619,
    lng: 138.596468,
    title: 'Nanyang',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Nanyang</h3><div><img src="/img/map.png" alt="Nanyang" width="200" height="auto"></div><div><p>Description of Nanyang</p></div>'
  },
  {
    lat: -34.926219,
    lng: 138.600741,
    title: 'Food Court (Coles)',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Food Court (Coles)</h3><div><img src="/img/map.png" alt="Food Court (Coles)" width="200" height="auto"></div><div><p>Description of Food Court (Coles)</p></div>'
  },
  {
    lat: -34.926282,
    lng: 138.601040,
    title: 'Food Court (Myer)',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Food Court (Myer)</h3><div><img src="/img/map.png" alt="Food Court (Myer)" width="200" height="auto"></div><div><p>Description of Food Court (Myer)</p></div>'
  },
  {
    lat: -34.926543,
    lng: 138.598455,
    title: 'Food Court (David Jones)',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Food Court (David Jones)</h3><div><img src="/img/map.png" alt="Food Court (David Jones)" width="200" height="auto"></div><div><p>Description of Food Court (David Jones)</p></div>'
  },
  {
    lat: -34.929181,
    lng: 138.598660,
    title: 'Café Bang Bang',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Café Bang Bang</h3><div><img src="/img/map.png" alt="Café Bang Bang" width="200" height="auto"></div><div><p>Description of Café Bang Bang</p></div>'
  },
  {
    lat: -34.926505,
    lng: 138.597923,
    title: 'Phonatic',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Phonatic</h3><div><img src="/img/map.png" alt="Phonatic" width="200" height="auto"></div><div><p>Description of Phonatic</p></div>'
  },
  {
    lat: -34.928792,
    lng: 138.596875,
    title: 'Peter Rabbit',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Peter Rabbit</h3><div><img src="/img/map.png" alt="Peter Rabbit" width="200" height="auto"></div><div><p>Description of Peter Rabbit</p></div>'
  },
  {
    lat: -34.922544,
    lng: 138.607292,
    title: 'Yiros Hindley',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Yiros Hindley</h3><div><img src="/img/map.png" alt="Yiros Hindley" width="200" height="auto"></div><div><p>Description of Yiros Hindley</p></div>'
  },
  {
    lat: -34.925927,
    lng: 138.605904,
    title: 'Waffle & Coffee',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Waffle & Coffee</h3><div><img src="/img/map.png" alt="Waffle & Coffee" width="200" height="auto"></div><div><p>Description of Waffle & Coffee</p></div>'
  },
  {
    lat: -34.928005,
    lng: 138.607120,
    title: 'Biblioteca',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Biblioteca</h3><div><img src="/img/map.png" alt="Biblioteca" width="200" height="auto"></div><div><p>Description of Biblioteca</p></div>'
  },
  {
    lat: -34.924388,
    lng: 138.607554,
    title: 'Sunny\'s Pizza',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Sunny\'s Pizza</h3><div><img src="/img/map.png" alt="Sunny\'s Pizza" width="200" height="auto"></div><div><p>Description of Sunny\'s Pizza</p></div>'
  },
  {
    lat: -34.924443,
    lng: 138.606253,
    title: 'Afghan Charcoal Kebab House',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Afghan Charcoal Kebab House</h3><div><img src="/img/map.png" alt="Afghan Charcoal Kebab House" width="200" height="auto"></div><div><p>Description of Afghan Charcoal Kebab House</p></div>'
  },
  {
    lat: -34.924124,
    lng: 138.606087,
    title: 'Honky Tonky',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Honky Tonky</h3><div><img src="/img/map.png" alt="Honky Tonky" width="200" height="auto"></div><div><p>Description of Honky Tonky</p></div>'
  },
  {
    lat: -34.923795,
    lng: 138.607503,
    title: 'Extra Chicken Salt',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Extra Chicken Salt</h3><div><img src="/img/map.png" alt="Extra Chicken Salt" width="200" height="auto"></div><div><p>Description of Extra Chicken Salt</p></div>'
  },
  {
    lat: -34.924180,
    lng: 138.602709,
    title: 'Indian Delights',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Indian Delights</h3><div><img src="/img/map.png" alt="Indian Delights" width="200" height="auto"></div><div><p>Description of Indian Delights</p></div>'
  },
  {
    lat: -34.924254,
    lng: 138.603416,
    title: 'Spice and Spoon',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Spice and Spoon</h3><div><img src="/img/map.png" alt="Spice and Spoon" width="200" height="auto"></div><div><p>Description of Spice and Spoon</p></div>'
  },
  {
    lat: -34.926211,
    lng: 138.601046,
    title: 'Vego Sizzle',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Vego Sizzle</h3><div><img src="/img/map.png" alt="Vego Sizzle" width="200" height="auto"></div><div><p>Description of Vego Sizzle</p></div>'
  },
  {
    lat: -34.924265,
    lng: 138.602449,
    title: 'Golden Wattle',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Golden Wattle</h3><div><img src="/img/map.png" alt="Golden Wattle" width="200" height="auto"></div><div><p>Description of Golden Wattle</p></div>'
  },
  {
    lat: -34.926222,
    lng: 138.605019,
    title: 'Lira Pizza and Kebab',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Lira Pizza and Kebab</h3><div><img src="/img/map.png" alt="Lira Pizza and Kebab" width="200" height="auto"></div><div><p>Description of Lira Pizza and Kebab</p></div>'
  },
  {
    lat: -34.928441,
    lng: 138.601118,
    title: 'Koyeosa Korean',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Koyeosa Korean</h3><div><img src="/img/map.png" alt="Koyeosa Korean" width="200" height="auto"></div><div><p>Description of Koyeosa Korean</p></div>'
  },
  {
    lat: -34.927421,
    lng: 138.597680,
    title: 'Seoul Sisters',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Seoul Sisters</h3><div><img src="/img/map.png" alt="Seoul Sisters" width="200" height="auto"></div><div><p>Description of Seoul Sisters</p></div>'
  },
  {
    lat: -34.925263,
    lng: 138.604042,
    title: 'Herring-Bone',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Herring-Bone</h3><div><img src="/img/map.png" alt="Herring-Bone" width="200" height="auto"></div><div><p>Description of Herring-Bone</p></div>'
  },
  {
    lat: -34.928072,
    lng: 138.601755,
    title: 'The Greek',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>The Greek</h3><div><img src="/img/map.png" alt="The Greek" width="200" height="auto"></div><div><p>Description of The Greek</p></div>'
  },
  {
    lat: -34.927248,
    lng: 138.599447,
    title: 'Jack & Jill\'s',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Jack & Jill\'s</h3><div><img src="/img/map.png" alt="Jack & Jill\'s" width="200" height="auto"></div><div><p>Description of Jack & Jill\'s</p></div>'
  },
  {
    lat: -34.928720,
    lng: 138.599133,
    title: 'Zuma Caffe',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Zuma Caffe</h3><div><img src="/img/map.png" alt="Zuma Caffe" width="200" height="auto"></div><div><p>Description of Zuma Caffe</p></div>'
  },
  {
    lat: -34.927149,
    lng: 138.596536,
    title: 'Hot Pot',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Hot Pot</h3><div><img src="/img/map.png" alt="Hot Pot" width="200" height="auto"></div><div><p>Description of Hot Pot</p></div>'
  },
  {
    lat: -34.923982,
    lng: 138.599249,
    title: 'Hot Star',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Hot Star</h3><div><img src="/img/map.png" alt="Hot Star" width="200" height="auto"></div><div><p>Description of Hot Star</p></div>'
  },
  {
    lat: -34.926336,
    lng: 138.605944,
    title: 'Hotel Metro',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Hotel Metro</h3><div><img src="/img/map.png" alt="Hotel Metro" width="200" height="auto"></div><div><p>Description of Hotel Metro</p></div>'
  },
  {
    lat: -34.927746,
    lng: 138.601953,
    title: 'Cafe Outside the Square',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Cafe Outside the Square</h3><div><img src="/img/map.png" alt="Cafe Outside the Square" width="200" height="auto"></div><div><p>Description of Cafe Outside the Square</p></div>'
  },
  {
    lat: -34.923870,
    lng: 138.607690,
    title: 'My Kingdom for a Horse',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>My Kingdom for a Horse</h3><div><img src="/img/map.png" alt="My Kingdom for a Horse" width="200" height="auto"></div><div><p>Description of My Kingdom for a Horse</p></div>'
  },
  {
    lat: -34.924238,
    lng: 138.607594,
    title: 'John Doe\'s Local Bar',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>John Doe\'s Local Bar</h3><div><img src="/img/map.png" alt="John Doe\'s Local Bar" width="200" height="auto"></div><div><p>Description of John Doe\'s Local Bar</p></div>'
  },
  {
    lat: -34.921019,
    lng: 138.607699,
    title: 'Café Troppo',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Café Troppo</h3><div><img src="/img/map.png" alt="Café Troppo" width="200" height="auto"></div><div><p>Description of Café Troppo</p></div>'
  },
  {
    lat: -34.923570,
    lng: 138.606733,
    title: 'Unibar',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Unibar</h3><div><img src="/img/map.png" alt="Unibar" width="200" height="auto"></div><div><p>Description of Unibar</p></div>'
  },
  {
    lat: -34.924226,
    lng: 138.603074,
    title: 'Rah Café',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Rah Café</h3><div><img src="/img/map.png" alt="Rah Café" width="200" height="auto"></div><div><p>Description of Rah Café</p></div>'
  },
  {
    lat: -34.923496,
    lng: 138.601337,
    title: 'Strathmore',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Strathmore</h3><div><img src="/img/map.png" alt="Strathmore" width="200" height="auto"></div><div><p>Description of Strathmore</p></div>'
  },
  {
    lat: -34.925519,
    lng: 138.604274,
    title: 'King\'s Head Hotel',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>King\'s Head Hotel</h3><div><img src="/img/map.png" alt="King\'s Head Hotel" width="200" height="auto"></div><div><p>Description of King\'s Head Hotel</p></div>'
  },
  {
    lat: -34.926037,
    lng: 138.602713,
    title: 'Treasury 1860',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Treasury 1860</h3><div><img src="/img/map.png" alt="Treasury 1860" width="200" height="auto"></div><div><p>Description of Treasury 1860</p></div>'
  },
  {
    lat: -34.926811,
    lng: 138.601604,
    title: 'The Crown and Sceptre',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>The Crown and Sceptre</h3><div><img src="/img/map.png" alt="The Crown and Sceptre" width="200" height="auto"></div><div><p>Description of The Crown and Sceptre</p></div>'
  },
  {
    lat: -34.927670,
    lng: 138.598674,
    title: 'SO Urban BBQ Restaurant',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>SO Urban BBQ Restaurant</h3><div><img src="/img/map.png" alt="SO Urban BBQ Restaurant" width="200" height="auto"></div><div><p>Description of SO Urban BBQ Restaurant</p></div>'
  },
  {
    lat: -34.926775,
    lng: 138.602865,
    title: 'Citi Zen',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Citi Zen</h3><div><img src="/img/map.png" alt="Citi Zen" width="200" height="auto"></div><div><p>Description of Citi Zen</p></div>'
  },
  {
    lat: -34.925126,
    lng: 138.602993,
    title: 'Mugen House',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Mugen House</h3><div><img src="/img/map.png" alt="Mugen House" width="200" height="auto"></div><div><p>Description of Mugen House</p></div>'
  },
  {
    lat: -34.924858,
    lng: 138.606678,
    title: 'Bocelli',
    category: 'cafe',
    rating: 4.3,
    content: '<h3>Bocelli</h3><div><img src="/img/map.png" alt="Bocelli" width="200" height="auto"></div><div><p>Description of Bocelli</p></div>'
  },
  {
    lat: -34.925980,
    lng: 138.603502,
    title: 'Food Court (Rundle Mall Plaza)',
    category: 'cafe',
    rating: 4.2,
    content: '<h3>Food Court (Rundle Mall Plaza)</h3><div><img src="/img/map.png" alt="Food Court (Rundle Mall Plaza)" width="200" height="auto"></div><div><p>Description of Food Court (Rundle Mall Plaza)</p></div>'
  },
  {
    lat: -34.925498,
    lng: 138.595427,
    title: 'Peel St',
    category: 'cafe',
    rating: 4.1,
    content: '<h3>Peel St</h3><div><img src="/img/map.png" alt="Peel St" width="200" height="auto"></div><div><p>Description of Peel St</p></div>'
  }
  ];