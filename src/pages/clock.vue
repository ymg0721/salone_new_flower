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
  title: 'Clock',
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
    <NuxtLink to="/work/2113" class="main-product">
      <div class="relative overflow-hidden">
        <img
          class="js-mvLogo main-image"
          :src="getImagePath('2113')"
          alt="header-01"
        />

        <div class="product-title js-mvLogo ">
          <span class="en">Clock</span>
          <span class="jp">クロック</span>
        </div>

        <div class="product-description js-mvLogo hidden md:block">
          時を刻む<br />
          美しい花々の<br />
          アートピース<br />
          空間を彩る
        </div>

        <div class="product-price js-mvLogo" v-html="getProductText('2113')" />
      </div>
    </NuxtLink>

    <!-- セクションヘッダー -->
    <div class="section-header">
      <span class="en">Collection</span>
      <span class="jp">コレクション</span>
    </div>

    <!-- 商品グリッド -->
    <div class="product-grid">
      <div class="product-item" v-for="id in ['2114', '2152']" :key="id">
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.product-item {
  width: 100%;
  
  .image-wrapper {
    position: relative;
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.6s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .product-info {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.95);
    padding: 1rem 1.5rem;
    border-radius: 4px;
    font-family: 'Noto Serif JP', serif;
    font-size: 0.9rem;
    line-height: 1.6;
    max-width: 220px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    @media (max-width: 768px) {
      font-size: 0.85rem;
      padding: 0.8rem 1.2rem;
      max-width: 200px;
    }
  }
}

@media (max-width: 768px) {
  .product-container {
    padding: 1rem;
  }

  .main-product {
    margin-bottom: 2rem;

    .main-image {
      max-width: 100%;
      border-radius: 4px;
    }
  }

  .product-title {
    position: static;
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    .en {
      font-size: 1.5rem;
    }

    .jp {
      font-size: 0.9rem;
    }
  }

  .product-description {
    position: static;
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    font-size: 0.85rem;
  }

  .product-price {
    position: static;
    margin: 1rem 0;
    padding: 1rem;
    width: 100%;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    font-size: 0.85rem;
  }

  .section-header {
    margin: 3rem 0;
    
    .en {
      font-size: 1.5rem;
    }
  }

  .product-grid {
    flex-direction: column;
    gap: 3rem;
  }
}
</style> 