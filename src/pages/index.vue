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
      style="display: flex;"
      class="flex-row justify-evenly items-center"
    >
      <NuxtLink to="/circlebox" class="text-[#302e2e] no-underline hover:underline">
        <NImage
          class="col02 js-mvLogo02 h-100px md:h-340px"
          :src="Story01Src"
          alt="heder-01"
        />
        <p  style="text-align: center" class="js-mvLogo02 italic text-12px mt-20px" font-normal>CircleBox</p>
      </NuxtLink>

      <NuxtLink to="/square" class="text-[#302e2e] no-underline hover:underline">
        <NImage
          class="col02 js-mvLogo02 h-100px md:h-340px"
          :src="Story06Src"
          alt="heder-01"
        />
        <p style="text-align: center" class="js-mvLogo02 italic text-12px mt-20px">Square</p>
      </NuxtLink>

      <NuxtLink to="/ceremony" class="text-[#302e2e] no-underline hover:underline">
        <NImage
          class="col02 js-mvLogo02 h-100px md:h-340px"
          :src="Story07Src"
          alt="heder-01"
        />
        <p style="text-align: center" class="js-mvLogo02 italic text-12px mt-20px">Ceremony</p>
      </NuxtLink>
    </div>
    <div
      style="display: flex;"
      class="flex-row justify-evenly items-center mt-5vw"
    >
      <NuxtLink to="/glass" class="text-[#302e2e] no-underline hover:underline">
        <NImage
          class="col02 js-mvLogo03 h-100px md:h-340px"
          :src="Story08Src"
          alt="heder-01"
        />
        <p style="text-align: center" class="js-mvLogo03 italic text-12px mt-20px">Glass</p>
      </NuxtLink>

      <NuxtLink to="/funeral" class="text-[#302e2e] no-underline hover:underline">
        <NImage
          class="col02 js-mvLogo03 h-100px md:h-340px"
          :src="Story09Src"
          alt="heder-01"
        />
        <p style="text-align: center" class="js-mvLogo03 italic text-12px mt-20px">Funeral</p>
      </NuxtLink>

      <NuxtLink to="/chrismas" class="text-[#302e2e] no-underline hover:underline">
        <NImage
          class="col02 js-mvLogo03 h-100px md:h-340px"
          :src="Story10Src"
          alt="heder-01"
        />
        <p style="text-align: center" class="js-mvLogo03 italic text-12px mt-20px">Chrismas</p>
      </NuxtLink>
    </div>
    <!-- Preservedページ ここまで↑ -->

    <div       
      class="section-header js-mvLogo04 text-[14px] md:text-[18px] font-normal italic tracking-[0.1em] border-t border-b border-[#cccccc] mb-[40px] md:mb-[60px] mx-[15vw] text-center mt-[6vw] py-[20px] md:py-[30px]"
    >
      Lesson | レッスン
    </div>
    <!-- Lessonページ ここから↓ -->
    <div
      style="display: flex;"
      class="flex-row justify-evenly items-center"
    >
      <NuxtLink to="/lesson" class="text-[#302e2e] no-underline hover:underline flex flex-col items-center">
        <img
          class="col02 js-mvLogo04 h-100px md:h-340px"
          src="@/assets/img/lesson.png"
          alt="heder-01"
        />
        <p style="text-align: center" class="js-mvLogo04 italic text-12px mt-20px">
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
      style="display: flex;"
      class="flex-row justify-evenly items-center my-5vw mb-50px"
    >
      <NuxtLink to="/about" class="text-[#302e2e] no-underline hover:underline flex flex-col items-center">
        <img
          class="col02 js-mvLogo05 h-100px md:h-340px"
          src="@/assets/img/test03.png"
          alt="heder-01"
        />
        <p style="text-align: center" class="js-mvLogo05 italic text-12px mt-20px">
          Venere Emi とは
        </p>
      </NuxtLink>
      <NuxtLink to="/words" class="text-[#302e2e] no-underline hover:underline">
        <img
          class="col02 js-mvLogo05 h-100px md:h-340px"
          src="@/assets/img/test02.png"
          alt="heder-01"
        />
        <p class="js-mvLogo05 text-center italic text-12px mt-20px">お花の用語</p>
      </NuxtLink>
      <NuxtLink to="/contact" class="text-[#302e2e] no-underline hover:underline">
        <img
          class="col02 js-mvLogo05 h-100px md:h-340px"
          src="@/assets/img/test01.png"
          alt="heder-01"
        />
        <p style="text-align: center" class="js-mvLogo05 italic text-12px mt-20px">お問い合わせ</p>
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  .header-image {
    width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: transform 0.6s ease;

    &:hover {
      transform: translateY(-8px);
    }
  }
}

.title-section {
  text-align: center;
  margin: 4rem 0;

  .main-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3.5rem;
    font-weight: 300;
    letter-spacing: 0.15em;
    color: #2c2c2c;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: #666;
  }
}

.section-header {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  letter-spacing: 0.2em;
  color: #2c2c2c;
  padding: 2rem 0;
  margin: 4rem 15vw;
  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;
  text-align: center;
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
  .main-title {
    font-size: 2.5rem;
  }

  .header-images {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
