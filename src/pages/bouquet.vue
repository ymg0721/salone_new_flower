<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { NImage } from "naive-ui";
import { useRouter } from 'vue-router'
import { usePagesData } from '@/composables/usePagesData'

const router = useRouter()
const { products, getProductText, getImagePath } = usePagesData()

const bouquetProducts = products.value.filter(p => p.id.startsWith('300'))

const navigateToDetail = (id: string) => {
  router.push(`/work/${id}/ec`)
}

const { start } = useScrollAnimation([
  { className: '.js-mvLogo' },
  { className: '.js-mvLogo02' },
  { className: '.js-mvLogo03' },
  { className: '.js-mvLogo04' },
])

useHead({
  title: 'Bouquet',
  meta: [
    {
      name: 'description',
      content: 'フラワーアレンジやブーケのオーダー（注文販売）を承っております。ご自宅用やギフト用にどうぞご利用ください。',
    },
  ],
});
</script>

<template>
  <div class="js-mvTrigger order-container" v-if="start">
    <div class="title-section">
      <h1 class="main-title js-mvLogo">Bouquet</h1>
      <p class="subtitle js-mvLogo">ブーケ</p>
    </div>

    <div class="content-section">
      <div class="introduction js-mvLogo02   md:text-center">
        <p>
          フラワーアレンジやブーケのオーダー<br class="md:hidden">（注文販売）を承っております。<br>
          ご自宅用やギフト用にどうぞご利用ください。
        </p>
        <p>
          季節の花々を使ってひとつひとつ心を込めてお作りしております。<br>
          お誕生日祝い、記念日、開店祝い、お礼のお花、お悔やみのお花など、様々なご用途で承っております。
        </p>
      </div>

      <div class="gallery js-mvLogo03">
        <div v-for="product in bouquetProducts" :key="product.id" class="gallery-item" @click="navigateToDetail(product.id)">
          <NImage 
            :src="getImagePath(product.id)" 
            :alt="product.name" 
            preview-disabled 
            class="product-image"
          />
          <p class="image-caption">{{ product.name }}</p>
          <p class="price">¥{{ product.price.toLocaleString() }}（税込）</p>
        </div>
      </div>

      <div class="order-info js-mvLogo04">
        <h2>ご注文について</h2>
        <div class="info-section">
          <h3>【ご予算に関して】</h3>
          <p>5,000円（送料別途）以上にて承ります。<br>
          送料は、お送り先ご住所や商品の大きさによって異なります（1,500～2,500円ほど）。</p>
        </div>

        <div class="info-section">
          <h3>【イメージやカラーのご希望に関して】</h3>
          <ul>
            <li>お任せで</li>
            <li>ピンク＆パープル系のエレガント風に</li>
            <li>ホワイト＆グリーンでモダンに</li>
            <li>開店祝いなので、イエロー系で明るく</li>
          </ul>
          <p>など、ご希望をお知らせください。</p>
        </div>

        <div class="info-section">
          <h3>【配送について】</h3>
          <ul>
            <li>配送料は別途かかります</li>
            <li>5月～9月までは、基本的にクール便を利用致します</li>
            <li>お届け日の3日前までにご注文ください</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background-color: #fff;
}

.title-section {
  text-align: center;
  margin-bottom: 4rem;

  .main-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 400;
    letter-spacing: 0.2em;
    color: #333;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-family: 'Noto Serif JP', serif;
    font-size: clamp(1rem, 3vw, 1.2rem);
    font-weight: 400;
    letter-spacing: 0.1em;
    color: #666;
  }
}

.introduction {
  margin-bottom: 4rem;
  
  p {
    font-family: 'Noto Serif JP', serif;
    font-size: 1rem;
    line-height: 2;
    margin-bottom: 1.5rem;
    color: #333;
  }
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  .gallery-item {
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease;
    aspect-ratio: 3/4;
    position: relative;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;

    &:hover {
      transform: translateY(-5px);
    }

    .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .image-caption {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      padding: 0.75rem;
      border-radius: 8px 8px 0 0;
      font-family: 'Noto Serif JP', serif;
      font-size: 0.9rem;
      color: #333;
    }

    .price {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      padding: 0.75rem;
      border-radius: 0 0 8px 8px;
      font-family: 'Noto Serif JP', serif;
      font-size: 0.85rem;
      color: #666;
    }
  }
}

.order-info {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;

  h2 {
    font-family: 'Noto Serif JP', serif;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }

  .info-section {
    margin-bottom: 2rem;

    h3 {
      font-family: 'Noto Serif JP', serif;
      font-size: 1.1rem;
      margin-bottom: 1rem;
      color: #333;
    }

    p, ul {
      font-family: 'Noto Serif JP', serif;
      font-size: 0.95rem;
      line-height: 1.8;
      color: #666;
    }

    ul {
      list-style-type: none;
      padding-left: 1rem;

      li {
        margin-bottom: 0.5rem;
        
        &:before {
          content: "・";
          margin-right: 0.5rem;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .order-container {
    padding: 1rem;
  }

  .gallery {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;

    .gallery-item {
      aspect-ratio: 4/5;
      max-width: 320px;
      margin-bottom: 2rem;
    }
  }

  .introduction {
    padding: 0 1rem;
    
    p {
      font-size: 0.9rem;
      line-height: 1.8;
      margin-bottom: 1rem;
    }
  }

  .order-info {
    margin: 2rem 1rem;
    padding: 1.5rem;

    h2 {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
    }

    .info-section {
      margin-bottom: 1.5rem;

      h3 {
        font-size: 0.9rem;
      }

      p, ul {
        font-size: 0.8rem;
      }
    }
  }
}
</style> 