<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { NImage } from "naive-ui";
import Chrismas01 from '@/assets/img/chrismas01.png'
import Chrismas02 from '@/assets/img/chrismas02.png'
import Chrismas03 from '@/assets/img/chrismas03.png'
import Story01 from '@/assets/img/Story01.png'
import Story06 from '@/assets/img/Story06.png'
import Story07 from '@/assets/img/Story07.png'
import Story08 from '@/assets/img/Story08.png'
import Story09 from '@/assets/img/Story09.png'
import Story10 from '@/assets/img/Story10.png'

const Chrismas01Src = Chrismas01
const Chrismas02Src = Chrismas02
const Chrismas03Src = Chrismas03
const Story01Src = Story01
const Story06Src = Story06
const Story07Src = Story07
const Story08Src = Story08
const Story09Src = Story09
const Story10Src = Story10

const { start } = useScrollAnimation([
  { className: '.js-mvLogo' },
  { className: '.js-mvLogo02' },
  { className: '.js-mvLogo03' },
  { className: '.js-mvLogo04' },
  { className: '.js-mvLogo05' },
])

useHead({
  title: 'ホーム',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap'
    }
  ]
});
</script>

<template>
  <div class="js-mvTrigger elegant-container" v-if="start">
    <!-- ヘッダー画像セクション -->
    <div class="header-images">
      <NImage
        v-for="(src, index) in [Chrismas01Src, Chrismas02Src, Chrismas03Src]"
        :key="index"
        class="js-mvLogo header-image"
        :src="src"
        :alt="`header-${index + 1}`"
      />
    </div>

    <!-- タイトルセクション -->
    <div class="title-section">
      <h1 class="main-title js-mvLogo">Venere Emi Flower Salone</h1>
      <p class="subtitle js-mvLogo">flower studio</p>
    </div>

    <!-- セクションヘッダー -->
    <div class="section-header js-mvLogo02">
      Preserved | <br class="md:hidden">プリザーブドフラワー
    </div>

    <!-- Preservedページ ここから↓ -->
    <div
      class="grid grid-cols-2 md:grid md:grid-cols-3 gap-4 md:gap-8 justify-evenly items-center px-4 md:px-0"
    >
      <NuxtLink to="/circlebox" class="text-[#302e2e] no-underline hover:underline md:text-[#302e2e] md:no-underline md:hover:underline">
        <NImage
          class="col02 js-mvLogo02 h-[200px] w-full object-cover object-center md:h-340px"
          :src="Story01Src"
          alt="heder-01"
        />
        <p class="js-mvLogo02 italic text-12px mt-2 md:mt-20px text-center" font-normal>CircleBox</p>
      </NuxtLink>

      <NuxtLink to="/square" class="text-[#302e2e] no-underline hover:underline md:text-[#302e2e] md:no-underline md:hover:underline">
        <NImage
          class="col02 js-mvLogo02 h-[200px] w-full object-cover object-center md:h-340px"
          :src="Story06Src"
          alt="heder-01"
        />
        <p class="js-mvLogo02 italic text-12px mt-2 md:mt-20px text-center">Square</p>
      </NuxtLink>

      <NuxtLink to="/ceremony" class="text-[#302e2e] no-underline hover:underline md:text-[#302e2e] md:no-underline md:hover:underline">
        <NImage
          class="col02 js-mvLogo02 h-[200px] w-full object-cover object-center md:h-340px"
          :src="Story07Src"
          alt="heder-01"
        />
        <p class="js-mvLogo02 italic text-12px mt-2 md:mt-20px text-center">Ceremony</p>
      </NuxtLink>

      <NuxtLink to="/glass" class="text-[#302e2e] no-underline hover:underline md:text-[#302e2e] md:no-underline md:hover:underline">
        <NImage
          class="col02 js-mvLogo03 h-[200px] w-full object-cover object-center md:h-340px"
          :src="Story08Src"
          alt="heder-01"
        />
        <p class="js-mvLogo03 italic text-12px mt-2 md:mt-20px text-center">Glass</p>
      </NuxtLink>

      <NuxtLink to="/funeral" class="text-[#302e2e] no-underline hover:underline md:text-[#302e2e] md:no-underline md:hover:underline">
        <NImage
          class="col02 js-mvLogo03 h-[200px] w-full object-cover object-center md:h-340px"
          :src="Story09Src"
          alt="heder-01"
        />
        <p class="js-mvLogo03 italic text-12px mt-2 md:mt-20px text-center">Funeral</p>
      </NuxtLink>

      <NuxtLink to="/chrismas" class="text-[#302e2e] no-underline hover:underline md:text-[#302e2e] md:no-underline md:hover:underline">
        <NImage
          class="col02 js-mvLogo03 h-[200px] w-full object-cover object-center md:h-340px"
          :src="Story10Src"
          alt="heder-01"
        />
        <p class="js-mvLogo03 italic text-12px mt-2 md:mt-20px text-center">Chrismas</p>
      </NuxtLink>
    </div>
    <!-- Preservedページ ここまで↑ -->

    <div       
      class="section-header js-mvLogo04 text-[14px] md:text-[18px] font-normal italic tracking-[0.1em] border-t border-b border-[#cccccc] mb-[40px] md:mb-[60px] mx-[15vw] text-center mt-[6vw] py-[20px] md:py-[30px]"
    >
      Lesson | レッスン
    </div>
    <!-- Lessonページ ここから↓ -->
    <div class="px-4 md:px-0">
      <NuxtLink to="/lesson" class="text-[#302e2e] no-underline hover:underline md:text-[#302e2e] md:no-underline md:hover:underline flex flex-col items-center">
        <img
          class="col02 js-mvLogo04 h-[200px] w-full object-cover object-center md:h-340px max-w-[500px]"
          src="@/assets/img/lesson.png"
          alt="lesson-image"
        />
        <p class="js-mvLogo04 italic text-[14px] md:text-[16px] mt-4 md:mt-6">
          レッスンについてはこちら
        </p>
      </NuxtLink>
    </div>
    <!-- Lessonページ ここまで↑ -->

    <div       
      class="section-header js-mvLogo05 text-[14px] md:text-[18px] font-normal italic tracking-[0.1em] border-t border-b border-[#cccccc] mb-[40px] md:mb-[60px] mx-[15vw] text-center mt-[6vw] py-[20px] md:py-[30px]"
    >
      ABOUT, CONTACT | <br class="md:hidden">その他, お問い合わせ
    </div>

    <div
      class="grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-8 justify-evenly items-center px-4 md:px-0 my-5vw mb-50px"
    >
      <NuxtLink to="/about" class="text-[#302e2e] no-underline hover:underline md:text-[#302e2e] md:no-underline md:hover:underline flex flex-col items-center">
        <img
          class="col02 js-mvLogo05 h-[200px] w-full object-cover object-center md:h-340px"
          src="@/assets/img/test03.png"
          alt="about-image"
        />
        <p class="js-mvLogo05 italic text-[14px] md:text-[16px] mt-4 md:mt-6 text-center">
          Venere Emi とは
        </p>
      </NuxtLink>
      <NuxtLink to="/words" class="text-[#302e2e] no-underline hover:underline md:text-[#302e2e] md:no-underline md:hover:underline flex flex-col items-center">
        <img
          class="col02 js-mvLogo05 h-[200px] w-full object-cover object-center md:h-340px"
          src="@/assets/img/test02.png"
          alt="words-image"
        />
        <p class="js-mvLogo05 italic text-[14px] md:text-[16px] mt-4 md:mt-6 text-center">お花の用語</p>
      </NuxtLink>
      <NuxtLink to="/contact" class="col-span-2 md:col-span-1 text-[#302e2e] no-underline hover:underline md:text-[#302e2e] md:no-underline md:hover:underline flex flex-col items-center">
        <img
          class="col02 js-mvLogo05 h-[200px] w-full max-w-[500px] object-cover object-center md:h-340px"
          src="@/assets/img/test01.png"
          alt="contact-image"
        />
        <p class="js-mvLogo05 italic text-[14px] md:text-[16px] mt-4 md:mt-6 text-center">お問い合わせ</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.elegant-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fdfbf9;
}

.header-images {
  display: flex;
  gap: 2rem;
  margin-bottom: 4rem;
  overflow-x: auto;
  padding: 1rem 0;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 2px;
  }

  .header-image {
    min-width: 280px;
    width: 85vw;
    max-width: 400px;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.6s ease;
    scroll-snap-align: center;

    @media (min-width: 768px) {
      min-width: auto;
      width: calc((100% - 4rem) / 3);
    }

    &:hover {
      transform: translateY(-8px);
    }
  }
}

.title-section {
  text-align: center;
  margin: 2rem 0;

  .main-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 300;
    letter-spacing: 0.15em;
    color: #2c2c2c;
    margin-bottom: 1rem;
    line-height: 1.2;
    padding: 0 1rem;
    
    @media (max-width: 768px) {
      letter-spacing: 0.1em;
      word-break: break-word;
      hyphens: auto;
    }
  }

  .subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(1rem, 3vw, 1.2rem);
    font-weight: 300;
    letter-spacing: 0.2em;
    color: #666;
    
    @media (max-width: 768px) {
      letter-spacing: 0.15em;
    }
  }
}

.section-header {
  text-align: center;
  margin: 4rem 0;
  padding: 2rem 0;
  position: relative;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  letter-spacing: 0.2em;
  color: #2c2c2c;
  
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      #d4d4d4 15%,
      #d4d4d4 85%,
      transparent
    );
  }
  
  &::before { top: 0; }
  &::after { bottom: 0; }

  .en {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.3em;
    color: #2c2c2c;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.5);
  }

  .jp {
    display: block;
    font-family: 'Noto Serif JP', serif;
    font-size: 0.9rem;
    font-weight: 200;
    margin-top: 0.5rem;
    color: #666;
    letter-spacing: 0.2em;
  }
}

// 商品カードのスタイル
.col02 {
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.6s ease;

  &:hover {
    transform: translateY(-8px);
    opacity: 0.95;
  }
}

// レスポンシブデザイン
@media (max-width: 768px) {
  .elegant-container {
    padding: 1rem;
  }

  .header-images {
    gap: 1rem;
    margin: 0 -1rem 2rem;
    padding: 1rem;
  }
}

// タブレット用の調整
@media (min-width: 769px) and (max-width: 1024px) {
  .elegant-container {
    padding: 1.5rem;
  }

  .header-images {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}

// 商品アイテムのスタイリングを改善
.product-item {
  flex: 0 0 auto;
  width: 400px;
  perspective: 1000px; // 3D効果のための視点設定

  .image-wrapper {
    aspect-ratio: 3/4;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform-style: preserve-3d; // 3D変換を子要素に適用
    transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    
    &:hover {
      transform: translateY(-16px) rotateX(2deg); // 上に浮かび上がりながら少し傾く

      .product-image {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                   0 8px 10px -6px rgba(0, 0, 0, 0.1);
      }

      .product-info {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @media (max-width: 768px) {
      height: 300px;
    }
  }

  .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateZ(0); // 3D空間での配置
    backface-visibility: hidden; // 裏面を非表示
    
    // 微妙なグラデーションオーバーレイ
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.02) 0%,
        rgba(255, 255, 255, 0.05) 100%
      );
      border-radius: 8px;
      opacity: 0;
      transition: opacity 0.6s ease;
    }

    &:hover::after {
      opacity: 1;
    }
  }

  .product-info {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.95);
    padding: 1.2rem;
    border-radius: 8px;
    font-family: 'Noto Serif JP', serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: #2c2c2c;
    line-height: 1.6;
    backdrop-filter: blur(8px); // ガラス効果
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transform: translateY(10px);
    opacity: 0.95;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

// コンテナ全体に奥行きのある背景を追加
.product-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 3rem;
  background-color: #fdfbf9;
  background-image: 
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.3)
    );
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.02);
  border-radius: 12px;
}
</style>
