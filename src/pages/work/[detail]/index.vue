<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { usePagesData } from '~/composables/usePagesData'

const route = useRoute()
const router = useRouter() // ルーターをインポート
const productId = route.params.detail as string
const { getProductText, getImagePath } = usePagesData()

// SPAで遷移する関数を定義
const navigateToPricing = (url: string) => {
  router.push(url) // 遷移先のURL
}

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Serif+JP:wght@200;300;400&display=swap'
    }
  ]
});
</script>

<template>
  <div class="product-detail-container">
    <div class="content-wrapper">
      <!-- 画像セクション -->
      <div class="image-section">
        <div class="image-wrapper">
          <img
            :src="getImagePath(productId)"
            :alt="'product-' + productId"
            class="product-image"
          />
        </div>
      </div>
      
      <!-- 商品情報セクション -->
      <div class="info-section">
        <h2 class="section-title">
          <span class="en">Detail</span>
          <span class="jp">商品詳細</span>
        </h2>
        <div class="product-description" v-html="getProductText(productId)" />
        
        <h2 class="section-title mt-60">
          <span class="en">Order</span>
          <span class="jp">ご注文について</span>
        </h2>
        <div class="button-group">
          <button @click="navigateToPricing(`/contact?${productId}`)" 
            class="btn-primary">
            お問い合わせ
          </button>
          <button @click="navigateToPricing(`/work/${productId}/reservation`)" 
            class="btn-secondary">
            レッスンの予約
          </button>
          <button @click="navigateToPricing(`/work/${productId}/ec`)" 
            class="btn-purchase">
            この商品を購入
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-detail-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: #fdfbf9;
  min-height: 100vh;
}

.content-wrapper {
  display: flex;
  gap: 4rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
}

.image-section {
  flex: 1;
  
  .image-wrapper {
    position: relative;
    perspective: 1000px;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      pointer-events: none;
    }
  }

  .product-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: scale(1.02);
    }
  }
}

.info-section {
  flex: 1;
  padding: 2rem;
}

.section-title {
  margin-bottom: 2rem;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #d4d4d4, transparent);
  }

  .en {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: #2c2c2c;
  }

  .jp {
    display: block;
    font-family: 'Noto Serif JP', serif;
    font-size: 0.9rem;
    font-weight: 200;
    letter-spacing: 0.1em;
    color: #666;
    margin-top: 0.5rem;
  }
}

.product-description {
  font-family: 'Noto Serif JP', serif;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: #2c2c2c;
  background: rgba(255, 255, 255, 0.7);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.button-group {
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.btn-primary, .btn-secondary, .btn-purchase {
  padding: 1rem 2rem;
  font-family: 'Noto Serif JP', serif;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  border-radius: 4px;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 3.5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255, 255, 255, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
}

.btn-primary {
  background-color: #2c2c2c;
  color: #fff;
  
  &:hover {
    background-color: #1a1a1a;
  }
}

.btn-secondary {
  background-color: #f5f5f5;
  color: #2c2c2c;
  border: 1px solid #d4d4d4;
  
  &:hover {
    background-color: #fff;
  }
}

.btn-purchase {
  background: linear-gradient(135deg, #8B4513, #654321);
  color: #fff;
  border: 1px solid #8B4513;
  
  &:hover {
    background: linear-gradient(135deg, #9B5523, #755331);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 69, 19, 0.2);
  }
}

.mt-60 {
  margin-top: 60px;
}

@media (max-width: 768px) {
  .product-detail-container {
    padding: 2rem 1rem;
  }

  .info-section {
    padding: 1rem;
  }

  .section-title {
    .en {
      font-size: 1.8rem;
    }
  }

  .product-description {
    padding: 1.5rem;
    font-size: 0.9rem;
  }
}
</style>
