<script setup lang="ts">
import { usePagesData } from '~/composables/usePagesData'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { getProductText, getImagePath } = usePagesData()


const { start } = useScrollAnimation([
  { className: '.js-mvLogo' },
  { className: '.js-mvLogo02' },
])

useHead({
  title: 'Square',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Serif+JP:wght@200;300;400&display=swap'
    }
  ]
});
</script>

<template>
  <div class="product-container js-mvTrigger" v-if="start">
    <!-- メイン商品セクション -->
    <NuxtLink to="/work/2106" class="main-product">
      <div class="relative overflow-hidden">
        <img
          class="js-mvLogo main-image"
          :src="getImagePath('2106')"
          alt="header-01"
        />

        <div class="product-title js-mvLogo">
          <span class="en">Square</span>
          <span class="jp">スクエア</span>
        </div>

        <div class="product-description js-mvLogo">
          淡いピンクの花々で写真を優美に彩ります。<br />
          上品なデザインで、<br />
          特別な思い出を引き立てるにおすすめです。
        </div>

        <div class="product-price js-mvLogo" v-html="getProductText('2106')" />
      </div>
    </NuxtLink>

    <!-- セクションヘッダー -->
    <div class="section-header">
      <span class="en">Collection</span>
      <span class="jp">コレクション</span>
    </div>

    <!-- 商品グリッド -->
    <div class="product-grid">
      <div class="product-item" v-for="id in ['2107', '2108']" :key="id">
        <NuxtLink :to="`/work/${id}`">
          <div class="relative overflow-hidden image-wrapper">
            <img
              class="js-mvLogo02 product-image"
              :src="getImagePath(id)"
              :alt="`product-${id}`"
            />
            <div class="product-info js-mvLogo02" v-html="getProductText(id)" />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fdfbf9;
}

.main-product {
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  
  .main-image {
    width: 100%;
    max-width: 800px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transition: transform 0.8s ease;

    &:hover {
      transform: scale(1.02);
    }
  }
}

.product-title {
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem 2rem;
  border-radius: 4px;

  .en {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: #2c2c2c;
  }

  .jp {
    display: block;
    font-family: 'Noto Serif JP', serif;
    font-size: 1rem;
    font-weight: 200;
    letter-spacing: 0.1em;
    color: #666;
    margin-top: 0.5rem;
  }
}

.product-description, .product-price {
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  padding: 1.5rem;
  border-radius: 4px;
  font-family: 'Noto Serif JP', serif;
  font-weight: 300;
  line-height: 1.8;
  color: #2c2c2c;
}

.product-description {
  right: 2rem;
  top: 2rem;
}

.product-price {
  right: 2rem;
  bottom: 2rem;
}

.section-header {
  text-align: center;
  margin: 6rem 0;
  padding: 2rem 0;
  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;

  .en {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.3em;
    color: #2c2c2c;
  }

  .jp {
    display: block;
    font-family: 'Noto Serif JP', serif;
    font-size: 0.9rem;
    font-weight: 200;
    margin-top: 0.5rem;
    color: #666;
  }
}

.product-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.product-item {
  flex: 0 0 auto;
  width: 400px;

  .image-wrapper {
    aspect-ratio: 3/4;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 768px) {
      height: 300px;
    }
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 6px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.6s ease;

    &:hover {
      transform: translateY(-8px);
    }
  }

  .product-info {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 1rem;
    border-radius: 4px;
    font-family: 'Noto Serif JP', serif;
    font-size: 0.9rem;
    color: #2c2c2c;
  }
}

@media (max-width: 768px) {
  .product-title {
    .en {
      font-size: 1.8rem;
    }
  }

  .product-description, .product-price {
    font-size: 0.9rem;
    padding: 1rem;
  }

  .section-header {
    margin: 3rem 0;
    
    .en {
      font-size: 1.5rem;
    }
  }

  .product-grid {
    flex-direction: column;
  }

  .product-item {
    width: 100%;
    max-width: 300px;
  }
}
</style>
