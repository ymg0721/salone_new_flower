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
});
</script>

<template>
  <div class="js-mvTrigger" v-if="start">
    <div class="flex flex-row md:flex-wrap justify-center gap-4 overflow-x-auto">
      <NImage
        class="js-mvLogo max-w-[40%] md:max-w-[30%] h-auto object-cover rounded-[3px] shrink-0"
        :src="Chrismas01Src"
        alt="header-01"
      />
      <NImage
        class="js-mvLogo max-w-[40%] md:max-w-[30%] h-auto object-cover rounded-[3px] shrink-0"
        :src="Chrismas02Src"
        alt="header-02"
      />
      <NImage
        class="js-mvLogo max-w-[40%] md:max-w-[30%] h-auto object-cover rounded-[3px] shrink-0"
        :src="Chrismas03Src"
        alt="header-03"
      />
    </div>
    <h1 class="h1-style js-mvLogo mt-30px md:mt-60px">Venere Emi Flower Salone</h1>
    <h3
      style="justify-content: center; display: flex; font-weight: 500"
      class="js-mvLogo"
    >
      flower studio
    </h3>
    <div
      class="section-header js-mvLogo02 text-[14px] md:text-[18px] font-normal italic tracking-[0.1em] border-t border-b border-[#cccccc] mb-[40px] md:mb-[60px] mx-[15vw] text-center mt-[6vw] py-[20px] md:py-[30px]"
    >
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
.col01 {
  border-radius: 3px;
  max-width: 300px; /* 最大幅を設定して、画像が大きくなりすぎないようにする */
  height: 350px;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    transform: scale(1.05); // 1.05倍に拡大
    opacity: 0.8; // 少し透明に
  }
}


.col02 {
  border-radius: 8px;
  max-width: 1000px; /* 最大幅を設定して、画像が大きくなりすぎないようにする */
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    transform: scale(1.05); // 1.05倍に拡大
    opacity: 0.8; // 少し透明に
  }
}

.h1-style {
  font-family: serif;
  justify-content: center;
  display: flex;
  font-size: 4.5vw;
}

.section-header {
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
}
</style>
