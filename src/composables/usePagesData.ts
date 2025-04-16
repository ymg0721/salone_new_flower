import { ref } from 'vue'

interface PagesProduct {
  id: string
  name: string
  type: string
  price: number
  size: string
}

export const usePagesData = () => {
  const products = ref<PagesProduct[]>([
    {
      id: '2101',
      name: 'グロリアス M',
      type: 'アクアブルー',
      price: 58000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2102',
      name: 'グロリアス M',
      type: 'サーモンピンク',
      price: 100000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2103',
      name: 'グロリアス M',
      type: 'ピンクベージュ',
      price: 88000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2104',
      name: 'グロリアス M',
      type: 'ピンクベージュブロッム',
      price: 85000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2105',
      name: 'BOX FLOWER サークル',
      type: '白BOX',
      price: 25000,
      size: 'W15.5 x D15.5 x H9cm'
    },
    {
      id: '2106',
      name: 'BOX FLOWER サークル',
      type: '青BOX',
      price: 25000,
      size: 'W15.5 x D15.5 x H9cm'
    },
    {
      id: '2107',
      name: 'ローズスクエアL',
      type: 'ルージュ',
      price: 55000,
      size: 'W20 x D7 x H7cm'
    },
    {
      id: '2108',
      name: 'ローズスクエアM',
      type: 'エレガントベージュ',
      price: 35000,
      size: 'W15 x D14 x H6cm'
    },
    {
      id: '2109',
      name: 'ローズスクエアM',
      type: 'フレッシュ',
      price: 35000,
      size: 'W15 x D14 x H6cm'
    },
    {
      id: '2110',
      name: 'ローズスクエアL',
      type: 'マリーアントワネット',
      price: 88000,
      size: 'W20 x D19 x H7cm'
    },
    {
      id: '2111',
      name: 'ローズスクエア',
      type: 'ギフト',
      price: 55000,
      size: 'W35 x D35 x H12cm'
    },
    {
      id: '2112',
      name: 'ローズハート',
      type: 'ギフト',
      price: 85000,
      size: 'W15 x D18 x H20cm'
    },
    {
      id: '2113',
      name: '時計',
      type: 'ブルー',
      price: 18000,
      size: 'W12 x D13 x H15.5cm'
    },
    {
      id: '2114',
      name: '時計',
      type: 'レッド',
      price: 18000,
      size: 'W12 x D13 x H15.5cm'
    },
    {
      id: '2115',
      name: 'バレエシューズ',
      type: 'ピンク',
      price: 11000,
      size: 'W15 x D13 x H3cm'
    },
    {
      id: '2116',
      name: 'クリアボックス',
      type: 'ローズ',
      price: 11000,
      size: 'W8 x D8 x H8cm'
    },
    {
      id: '2117',
      name: '香水ケース',
      type: 'スカイブルー',
      price: 16500,
      size: 'W12 x D6 x H15cm'
    },
    {
      id: '2118',
      name: 'ローズボックス',
      type: 'ギフト',
      price: 95000,
      size: 'W15 x D18 x H20cm'
    },
    {
      id: '2119',
      name: 'ローズスクエアM',
      type: 'エレガントサーモンピンク',
      price: 38000,
      size: 'W15 x D14 x H6cm'
    },
    {
      id: '2120',
      name: 'ガラスドーム',
      type: 'ブラック',
      price: 12000,
      size: 'W12 x D9 x H12.5cm'
    },
    {
      id: '2121',
      name: 'ガラスドーム',
      type: 'ウサギ',
      price: 12000,
      size: 'W12 x D13 x H15.5cm'
    },
    {
      id: '2122',
      name: 'ガラスドーム',
      type: 'クマ',
      price: 12000,
      size: 'W12 x D13 x H15.5cm'
    },
    {
      id: '2123',
      name: 'ガラスドーム',
      type: '鳥',
      price: 12000,
      size: 'W12 x D13 x H15.5cm'
    },
    {
      id: '2124',
      name: 'ガラスドーム',
      type: 'ホワイト',
      price: 12000,
      size: 'W12 x D9 x H12.5cm'
    },
    {
      id: '2125',
      name: 'ガラスドーム',
      type: 'コルク',
      price: 13000,
      size: 'W15 x D14 x H16cm'
    },
    {
      id: '2126',
      name: 'グラス供花',
      type: '',
      price: 11000,
      size: 'W10 x H16.5cm'
    },
    {
      id: '2127',
      name: '供花グラス',
      type: 'イエローローズ',
      price: 5000,
      size: 'W6 x H12cm'
    },
    {
      id: '2128',
      name: '供花グラス',
      type: 'ホワイトイエロー',
      price: 13000,
      size: 'W8 x H15cm'
    },
    {
      id: '2129',
      name: '供花グラス',
      type: 'パープルホワイト',
      price: 15000,
      size: 'W10 x H21.5cm'
    },
    {
      id: '2130',
      name: '供花グラス',
      type: 'パープルホワイト',
      price: 7000,
      size: 'W7 x H12cm'
    },
    {
      id: '2131',
      name: 'パンプキンランプ',
      type: 'ブロンズ',
      price: 9000,
      size: 'W15 x D13 x H15cm'
    },
    {
      id: '2132',
      name: 'ハロウィンボックス',
      type: '',
      price: 29000,
      size: 'W20 x D10 x H10cm'
    },
    {
      id: '2133',
      name: 'ハロウィンリース',
      type: '',
      price: 29000,
      size: 'W40 x D30cm'
    },
    {
      id: '2134',
      name: 'パンプキンアレンジ',
      type: 'ホワイト',
      price: 15000,
      size: 'W12 x D10 x H12cm'
    },
    {
      id: '2135',
      name: 'パンプキンアレンジ',
      type: 'ホワイトランプ',
      price: 15000,
      size: 'W12 x D10 x H30cm'
    },
    {
      id: '2136',
      name: 'クリスマスリース',
      type: 'フォレスト',
      price: 20000,
      size: 'W40 x D30 x H10cm'
    },
    {
      id: '2137',
      name: '森のキャンドル',
      type: '',
      price: 25000,
      size: 'W30 x D15.5 x H13cm'
    },
    {
      id: '2138',
      name: '森のキャンドル',
      type: 'リーズ',
      price: 25000,
      size: 'W40 x H12cm'
    },
    {
      id: '2139',
      name: 'グロリアスM',
      type: 'オランジェット',
      price: 11000,
      size: 'W15.5 x D15.5 x H9cm'
    },
    {
      id: '2140',
      name: 'グロリアス M',
      type: 'パルム',
      price: 11000,
      size: 'W15.5 x D15.5 x H9cm'
    },
    {
      id: '2141',
      name: 'グロリアス M',
      type: 'オランジェット',
      price: 5000,
      size: 'W15.5 x D15.5 x H9cm'
    },
    {
      id: '2142',
      name: 'グロリアス M',
      type: 'パルム',
      price: 11000,
      size: 'W15.5 x D15.5 x H9cm'
    },
    {
      id: '2143',
      name: 'クリスマスキャンドル',
      type: '',
      price: 5000,
      size: 'W30 x D30x H28cm'
    },
    {
      id: '2144',
      name: 'クリスマスツリー',
      type: '',
      price: 10000,
      size: 'W30 x D30 x H40cm'
    },
    {
      id: '2145',
      name: 'クリスマスツリー',
      type: '',
      price: 8000,
      size: 'W15 x D17 x H25cm'
    },
    {
      id: '2146',
      name: 'モミの木スワッグベル',
      type: '',
      price: 35000,
      size: 'W30 x H45cm'
    },
    {
      id: '2147',
      name: '松しめ縄',
      type: '',
      price: 27000,
      size: 'H45cm'
    },
    {
      id: '2148',
      name: 'サーモンピンクしめ縄',
      type: '',
      price: 35000,
      size: 'H45cm'
    },
    {
      id: '2149',
      name: 'ロングしめ縄',
      type: '',
      price: 25000,
      size: 'H45cm'
    },
    {
      id: '2150',
      name: 'ショートしめ縄',
      type: '',
      price: 25000,
      size: 'H30cm'
    },
    {
      id: '2151',
      name: 'フレグランス',
      type: 'スカイブルーローズ ',
      price: 5000,
      size: 'W4.5 x D5 x H15cm'
    },
    {
      id: '3001',
      name: 'アネモネとバラのブーケ',
      type: 'エレガントブーケ',
      price: 15000,
      size: 'W25 x D25 x H35cm'
    },
    {
      id: '3002',
      name: 'ミモザブーケ',
      type: '春のブーケ',
      price: 12000,
      size: 'W30 x D20 x H40cm'
    },
    {
      id: '3003',
      name: 'ホワイト＆ピンクブーケ',
      type: 'ナチュラルブーケ',
      price: 13000,
      size: 'W25 x D25 x H35cm'
    },
    {
      id: '3004',
      name: 'ピュアホワイトローズブーケ',
      type: 'クラシカルブーケ',
      price: 16000,
      size: 'W25 x D20 x H35cm'
    },
  ])

  const getProductText = (id: string) => {
    const product = products.value.find(p => p.id === id)
    if (!product) return ''
    
    return `■ No.${product.id}<br>${product.name} ${product.type ? `（${product.type}）` : '' }<br>税込 ${product.price.toLocaleString()}円<br>${product.size}`
  }

  const imagePaths = {
    '2101': new URL('../assets/img/Story01.png', import.meta.url).href,
    '2102': new URL('../assets/img/circle-body-1.png', import.meta.url).href,
    '2103': new URL('../assets/img/circle-body-2.png', import.meta.url).href,
    '2104': new URL('../assets/img/2104.png', import.meta.url).href,
    '2105': new URL('../assets/img/2105.png', import.meta.url).href,
    '2106': new URL('../assets/img/2106.png', import.meta.url).href,
    '2107': new URL('../assets/img/2107.png', import.meta.url).href,
    '2108': new URL('../assets/img/2108.png', import.meta.url).href,
    '2109': new URL('../assets/img/2109.png', import.meta.url).href,
    '2110': new URL('../assets/img/2110.png', import.meta.url).href,
    '2111': new URL('../assets/img/2111.png', import.meta.url).href,  
    '2112': new URL('../assets/img/2112.png', import.meta.url).href,
    '2113': new URL('../assets/img/2113.png', import.meta.url).href,
    '2114': new URL('../assets/img/2114.png', import.meta.url).href,
    '2115': new URL('../assets/img/2115.png', import.meta.url).href,
    '2116': new URL('../assets/img/2116.png', import.meta.url).href,
    '2117': new URL('../assets/img/2117.png', import.meta.url).href,  
    '2118': new URL('../assets/img/2118.png', import.meta.url).href,
    '2119': new URL('../assets/img/2119.png', import.meta.url).href,
    '2120': new URL('../assets/img/2120.png', import.meta.url).href,
    '2121': new URL('../assets/img/2121.png', import.meta.url).href,
    '2122': new URL('../assets/img/2121.png', import.meta.url).href,
    '2123': new URL('../assets/img/2121.png', import.meta.url).href,
    '2124': new URL('../assets/img/2124.png', import.meta.url).href,
    '2125': new URL('../assets/img/2125.png', import.meta.url).href,
    '2126': new URL('../assets/img/2126.png', import.meta.url).href,
    '2127': new URL('../assets/img/2127.png', import.meta.url).href,
    '2128': new URL('../assets/img/2128.png', import.meta.url).href,  
    '2129': new URL('../assets/img/2129.png', import.meta.url).href,
    '2130': new URL('../assets/img/2130.png', import.meta.url).href,
    '2131': new URL('../assets/img/2131.png', import.meta.url).href,
    '2132': new URL('../assets/img/2132.png', import.meta.url).href,
    '2133': new URL('../assets/img/2133.png', import.meta.url).href,
    '2134': new URL('../assets/img/2134.png', import.meta.url).href,
    '2135': new URL('../assets/img/2135.png', import.meta.url).href,
    '2136': new URL('../assets/img/2136.png', import.meta.url).href,
    '2137': new URL('../assets/img/2137.png', import.meta.url).href,
    '2138': new URL('../assets/img/2138.png', import.meta.url).href,
    '2139': new URL('../assets/img/2139.png', import.meta.url).href,
    '2140': new URL('../assets/img/2140.png', import.meta.url).href,
    '2141': new URL('../assets/img/2141.png', import.meta.url).href,
    '2142': new URL('../assets/img/2142.png', import.meta.url).href,
    '2143': new URL('../assets/img/2143.png', import.meta.url).href,
    '2144': new URL('../assets/img/2144.png', import.meta.url).href,
    '2145': new URL('../assets/img/2145.png', import.meta.url).href,
    '2146': new URL('../assets/img/2146.png', import.meta.url).href,
    '2147': new URL('../assets/img/2147.png', import.meta.url).href,
    '2148': new URL('../assets/img/chrismas-body-25.png', import.meta.url).href,
    '2149': new URL('../assets/img/2149.png', import.meta.url).href,
    '2150': new URL('../assets/img/2150.png', import.meta.url).href,
    '2151': new URL('../assets/img/2151.png', import.meta.url).href,
    '3001': new URL('../assets/img/bouqet/01.jpg', import.meta.url).href,
    '3002': new URL('../assets/img/bouqet/02.jpg', import.meta.url).href,
    '3003': new URL('../assets/img/bouqet/03.jpg', import.meta.url).href,
    '3004': new URL('../assets/img/bouqet/04.jpg', import.meta.url).href,
  }

  const getImagePath = (id: string) => {
    return imagePaths[id as keyof typeof imagePaths] || ''
  }

  return {
    products,
    getProductText,
    getImagePath
  }
} 