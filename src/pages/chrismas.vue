<script setup lang="ts">
import { usePagesData } from '~/composables/usePagesData'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

const { getProductText, getImagePath } = usePagesData()

const { start } = useScrollAnimation([
  { className: '.js-mvLogo' },
  { className: '.js-mvLogo02' }
])
</script>

<template>
  <div class="js-mvTrigger mx-30px" v-if="start">
    <div class="flex flex-row justify-center gap-5 md:gap-30">
      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2124">
          <img
            class="js-mvLogo w-full rounded-5px"
            :src="getImagePath('2124')"
            alt="header-01"
          />
        </NuxtLink>
        <p
          class="relative md:absolute js-mvLogo bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] rounded-3px text-[11px] md:text-[18px]"
          v-html="getProductText('2124')"
        />
      </div>

      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2125">
          <img
            class="js-mvLogo w-full rounded-5px"
            :src="getImagePath('2125')"
            alt="header-01"
          />
        </NuxtLink>
        <p
          class="relative md:absolute js-mvLogo bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] rounded-3px text-[11px] md:text-[18px]"
          v-html="getProductText('2125')"
        />
      </div>
    </div>
    <div class="section-header mx-auto text-center mt-8 mb-8 sm:mb-16 sm:mt-16 text-lg italic font-normal tracking-widest border-b-2 border-gray-300  py-[20px] md:py-[30px]" />
    <div class="flex flex-row justify-center gap-5 md:gap-30 mb-40px">
      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2126">
          <img
            class="js-mvLogo02 w-full rounded-5px"
            :src="getImagePath('2126')"
            alt="header-01"
          />
        </NuxtLink>
        <p
          class="relative md:absolute js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] rounded-3px text-[11px] md:text-[18px]"
          v-html="getProductText('2126')"
        />
      </div>

      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2127">
          <img
            class="js-mvLogo02 w-full rounded-5px"
            :src="getImagePath('2127')"
            alt="header-01"
          />
        </NuxtLink>
        <p
          class="relative md:absolute js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] rounded-3px text-[11px] md:text-[18px]"
          v-html="getProductText('2127')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-header {
  border-bottom: 1px solid #cccccc;
}
</style>
