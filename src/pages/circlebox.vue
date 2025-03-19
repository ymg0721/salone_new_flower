<script setup lang="ts">
import { usePagesData } from '~/composables/usePagesData'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { getProductText, getImagePath } = usePagesData()

const { start } = useScrollAnimation([
  { className: '.js-mvLogo' },
  { className: '.js-mvLogo02' },
  { className: '.js-mvLogo03' }
])
</script>

<template>
  <div class="js-mvTrigger mx-30px" v-if="start">
    <NuxtLink to="/work/2101">
      <div class="relative">
        <img
          class="js-mvLogo flex m-auto max-w-full md:max-w-100% h-auto rounded-5px"
          :src="getImagePath('2101')"
          alt="header-01"
        />

        <!-- Text 1 positioned at the top-right -->
        <p class="absolute js-mvLogo top-0 text-[9px] md:text-[18px]  p-2 right-[0%] md:right-[20%] text-white bg-[#9b9b9b6c] rounded-3px">
          クラシックとモダンが融合した<br />豪華な薔薇のアレンジメント<br />大切な場面を<br />
          忘れられない思い出に
        </p>

        <!-- Text 2 positioned at the bottom-right -->
        <p
          class="absolute js-mvLogo bottom-0 right-[0%] md:right-[20%] p-2 text-white bg-[#9b9b9b6c] text-[9px] md:text-[18px] rounded-3px"
          v-html="getProductText('2101')"
        />

        <!-- New text positioned on the left -->
        <p
          class="absolute font-serif js-mvLogo top-0 left-[3%] md:left-[20%] p-2 text-white bg-[#9b9b9b6c] text-[25px] md:text-[50px] -rotate-15 rounded-3px"
        >
          CircleBox
        </p>
      </div>
    </NuxtLink>

    <!-- Section Header -->
    <div class="section-header mx-auto text-center mt-8 mb-8 sm:mb-16 sm:mt-16 text-lg italic font-normal tracking-widest border-b-2 border-gray-300 py-[20px] md:py-[30px]">
      Section Header
    </div>

    <div style="display: flex;" class="flex-row justify-center gap-5 md:gap-8">
      <div class="relative flex flex-col justify-center">
        <NuxtLink to="/work/2102">
          <img
            class="js-mvLogo02 flex m-auto max-w-full md:max-w-100% h-auto rounded-5px"
            :src="getImagePath('2102')"
            alt="header-01"
          />
        </NuxtLink>
        <!-- Text positioned at the bottom-right -->
        <p
          class="relative md:absolute js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px] rounded-3px"
          v-html="getProductText('2102')"
        />
      </div>

      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2103">
          <img
            class="js-mvLogo02 w-full rounded-5px"
            :src="getImagePath('2103')"
            alt="header-01"
          />
        </NuxtLink>
        <!-- Text positioned at the bottom-right -->
        <p
          class="relative md:absolute js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px] rounded-3px"
          v-html="getProductText('2103')"
        />
      </div>
    </div>

    <div class="section-header mx-auto text-center mt-8 mb-8 sm:mb-16 sm:mt-16 text-lg italic font-normal tracking-widest border-b-2 border-gray-300 py-[20px] md:py-[30px]">
      Section Header
    </div>

    <div class="flex flex-row justify-center gap-8 mb-40px">
      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2104">
          <img
            class="js-mvLogo03 w-full rounded-5px"
            :src="getImagePath('2104')"
            alt="header-01"
          />
        </NuxtLink>
        <!-- テキスト１を右下端に配置 -->
        <p
          class="relative md:absolute js-mvLogo03 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px] rounded-3px"
          v-html="getProductText('2104')"
        />
      </div>
      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2105">
          <img
            class="js-mvLogo03 w-full rounded-5px"
            :src="getImagePath('2105')"
            alt="header-01"
          />
        </NuxtLink>
        <!-- Text positioned at the bottom-right -->
        <p
          class="relative md:absolute js-mvLogo03 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px] rounded-3px"
          v-html="getProductText('2105')"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.section-header {
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
}
</style>