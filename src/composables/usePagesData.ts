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
      price: 100000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2102',
      name: 'グロリアス M',
      type: 'アクアブルー',
      price: 100000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2103',
      name: 'グロリアス M',
      type: 'アクアブルー',
      price: 100000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2104',
      name: 'グロリアス M',
      type: 'アクアブルー',
      price: 100000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2105',
      name: 'グロリアス M',
      type: 'アクアブルー',
      price: 100000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2106',
      name: 'グロリアス M',
      type: 'アクアブルー',
      price: 100000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2107',
      name: 'グロリアス M',
      type: 'アクアブルー',
      price: 100000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2108',
      name: 'グロリアス M',
      type: 'アクアブルー',
      price: 100000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2113',
      name: 'グロリアス M',
      type: 'ブライトレッド',
      price: 11000,
      size: 'W15.5 x D15.5 x H9'
    },
    {
      id: '2114',
      name: 'グロリアス M',
      type: 'ブライトレッド',
      price: 11000,
      size: 'W15.5 x D15.5 x H9'
    },
    {
      id: '2115',
      name: 'グロリアス M',
      type: 'ブライトレッド',
      price: 16500,
      size: 'W15.5 x D15.5 x H9'
    },
    {
      id: '2116',
      name: 'グロリアス M',
      type: 'ブライトレッド',
      price: 11000,
      size: 'W15.5 x D15.5 x H9'
    },
    {
      id: '2117',
      name: 'グロリアス M',
      type: 'ブライトレッド',
      price: 11000,
      size: 'W15.5 x D15.5 x H9'
    },
    {
      id: '2118',
      name: 'グロリアス M',
      type: 'ブライトレッド',
      price: 11000,
      size: 'W15.5 x D15.5 x H9'
    },
    {
      id: '2101',
      name: 'グロリアス M',
      type: 'アクアブルー',
      price: 100000,
      size: 'W20 x D15.5 x H20.5cm'
    },
    {
      id: '2120',
      name: 'グロリアス M',
      type: 'ブライトレッド',
      price: 11000,
      size: 'W15.5 x D15.5 x H9'
    },
    {
      id: '2121',
      name: 'グロリアス M',
      type: 'ブライトレッド',
      price: 11000,
      size: 'W15.5 x D15.5 x H9'
    },
    {
      id: '2122',
      name: 'グロリアス M',
      type: 'ブライトレッド',
      price: 11000,
      size: 'W15.5 x D15.5 x H9'
    },
    {
      id: '2123',
      name: 'グロリアス M',
      type: 'ブライトレッド',
      price: 11000,
      size: 'W15.5 x D15.5 x H9'
    },
    {
      id: '2124',
      name: 'グロリアス M',
      type: 'オランジェット',
      price: 11000,
      size: 'W15.5 x D15.5 x H9cm'
    },
    {
      id: '2125',
      name: 'グロリアス M',
      type: 'パルム',
      price: 11000,
      size: 'W15.5 x D15.5 x H9cm'
    },
    {
      id: '2126',
      name: 'グロリアス M',
      type: 'オランジェット',
      price: 11000,
      size: 'W15.5 x D15.5 x H9cm'
    },
    {
      id: '2127',
      name: 'グロリアス M',
      type: 'パルム',
      price: 11000,
      size: 'W15.5 x D15.5 x H9cm'
    },
  ])

  const getProductText = (id: string) => {
    const product = products.value.find(p => p.id === id)
    if (!product) return ''
    
    return `■ No.${product.id}<br>${product.name} （${product.type}）<br>税込 ${product.price.toLocaleString()}円<br>${product.size}`
  }

  const imagePaths = {
    '2101': new URL('../assets/img/circle-title.png', import.meta.url).href,
    '2102': new URL('../assets/img/circle-body-1.png', import.meta.url).href,
    '2103': new URL('../assets/img/circle-body-2.png', import.meta.url).href,
    '2104': new URL('../assets/img/circle-body-3.png', import.meta.url).href,
    '2105': new URL('../assets/img/circle-body-4.png', import.meta.url).href,
    '2106': new URL('../assets/img/square-title.png', import.meta.url).href,
    '2107': new URL('../assets/img/square-body-01.png', import.meta.url).href,
    '2108': new URL('../assets/img/square-body-02.png', import.meta.url).href,
    '2113': new URL('../assets/img/ceremony-title.png', import.meta.url).href,
    '2114': new URL('../assets/img/ceremony-body-01.png', import.meta.url).href,
    '2115': new URL('../assets/img/ceremony-body-02.png', import.meta.url).href,
    '2116': new URL('../assets/img/glass-title.png', import.meta.url).href,
    '2117': new URL('../assets/img/glass-body-01.png', import.meta.url).href,
    '2118': new URL('../assets/img/glass-body-02.png', import.meta.url).href,
    '2120': new URL('../assets/img/funeral-body-01.png', import.meta.url).href,
    '2121': new URL('../assets/img/funeral-body-02.png', import.meta.url).href,
    '2122': new URL('../assets/img/funeral-body-03.png', import.meta.url).href,
    '2123': new URL('../assets/img/funeral-body-04.png', import.meta.url).href,
    '2124': new URL('../assets/img/chrismas-body-01.png', import.meta.url).href,
    '2125': new URL('../assets/img/chrismas-body-02.png', import.meta.url).href,
    '2126': new URL('../assets/img/chrismas-body-03.png', import.meta.url).href,
    '2127': new URL('../assets/img/chrismas-body-04.png', import.meta.url).href,
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