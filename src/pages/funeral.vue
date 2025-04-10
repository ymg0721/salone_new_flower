<script setup lang="ts">
import { usePagesData } from '~/composables/usePagesData'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { getProductText, getImagePath } = usePagesData()

const { start } = useScrollAnimation([
  { className: '.js-mvLogo' },
  { className: '.js-mvLogo02' },
])

useHead({
  title: 'Funeral',
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
    <!-- 上部の商品グリッド（配置はそのまま） -->
    <div class="product-grid">
      <div class="product-item" v-for="id in ['2126', '2127']" :key="id">
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

    <!-- 下部の商品グリッド（配置はそのまま） -->
    <div class="product-grid">
      <div class="product-item" v-for="id in ['2128', '2129','2130']" :key="id">
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 0 1rem;
  }
}

.product-item {
  width: 100%;
  max-width: 100%;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }

  .image-wrapper {
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    @media (max-width: 768px) {
      height: auto;
      // aspect-ratio: 1/1;
      margin-bottom: 1rem;
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

    @media (max-width: 768px) {
      border-radius: 4px;
    }

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
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
    max-width: calc(100% - 2rem);
    
    @media (max-width: 768px) {
      position: static;
      width: 100%;
      max-width: 100%;
      margin-top: 0.5rem;
      background: #fff;
      border: 1px solid #eee;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }
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
  .product-container {
    padding: 1rem;
  }

  .product-grid {
    flex-direction: column;
    gap: 2rem;
  }

  .product-item {
    width: 100%;
    max-width: 300px;

    .image-wrapper {
      display: flex;
      flex-direction: column;
      height: auto;
    }

    .product-info {
      position: static;
      width: 100%;
      margin-top: 1rem;
      font-size: 0.85rem;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.95);
      white-space: normal;
      overflow-wrap: break-word;
      word-break: break-word;
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
