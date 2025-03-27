<script setup lang="ts">
import { usePagesData } from '~/composables/usePagesData'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { getProductText, getImagePath } = usePagesData()

const { start } = useScrollAnimation([
  { className: '.js-mvLogo' },
  { className: '.js-mvLogo02' }
])

useHead({
  title: 'Chrismas',
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
    <!-- 上部の商品グリッド -->
    <div class="product-grid">
      <div class="product-item" v-for="id in ['2124', '2125']" :key="id">
        <NuxtLink :to="`/work/${id}`">
          <div class="relative overflow-hidden image-wrapper">
            <img
              class="js-mvLogo product-image"
              :src="getImagePath(id)"
              alt="header-01"
            />
            <div class="product-info js-mvLogo" v-html="getProductText(id)" />
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- セクションヘッダー -->
    <div class="section-header">
      <span class="en">Collection</span>
      <span class="jp">コレクション</span>
    </div>

    <!-- 下部の商品グリッド -->
    <div class="product-grid">
      <div class="product-item" v-for="id in ['2126', '2127']" :key="id">
        <NuxtLink :to="`/work/${id}`">
          <div class="relative overflow-hidden image-wrapper">
            <img
              class="js-mvLogo02 product-image"
              :src="getImagePath(id)"
              alt="header-01"
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
    position: relative;
    
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
    font-weight: 300;
    color: #2c2c2c;
    line-height: 1.6;
  }
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

@media (max-width: 768px) {
  .product-grid {
    flex-direction: column;
  }

  .product-item {
    width: 100%;
    max-width: 300px;

    .product-info {
      font-size: 0.8rem;
      padding: 0.8rem;
    }
  }

  .section-header {
    margin: 3rem 0;
    
    .en {
      font-size: 1.5rem;
    }
  }
}
</style>
