<script setup lang="ts">
import { usePagesData } from '~/composables/usePagesData'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { getProductText, getImagePath } = usePagesData()

const { start } = useScrollAnimation([
  { className: '.js-mvLogo' },
  { className: '.js-mvLogo02' },
  { className: '.js-mvLogo03' }
])

useHead({
  title: 'Perfume Bottle',
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
    <NuxtLink to="/work/2151" class="main-product">
      <div class="relative overflow-hidden">
        <img
          class="js-mvLogo main-image"
          :src="getImagePath('2151')"
          alt="header-01"
        />

        <div class="product-title js-mvLogo ">
          <span class="en">Perfume Bottle</span>
          <span class="jp">パフュームボトル</span>
        </div>

        <div class="product-description js-mvLogo hidden md:block">
          香りと花の<br />
          調べが奏でる<br />
          優雅な空間<br />
          心を癒す
        </div>

        <div class="product-price js-mvLogo" v-html="getProductText('2151')" />
      </div>
    </NuxtLink>
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
</style> 