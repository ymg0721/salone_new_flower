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
});
</script>

<template>
  <div class="js-mvTrigger mx-30px" v-if="start">
    <div class="flex flex-row justify-center gap-5 md:gap-30">
      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2120">
          <img
            class="js-mvLogo w-full rounded-6px"
            :src="getImagePath('2120')"
            alt="header-01"
          />
        </NuxtLink>
        <!-- テキスト１を右下端に配置 -->
        <p
          class="text-[11px] md:text-[18px] relative md:absolute  js-mvLogo bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] rounded-3px"
          v-html="getProductText('2120')"
        />

      </div>

      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2121">
          <img
            class="js-mvLogo w-full rounded-6px"
            :src="getImagePath('2121')"
            alt="header-01"
          />
        </NuxtLink>
        <!-- テキスト１を右下端に配置 -->
        <p
          class="text-[11px] md:text-[18px] relative md:absolute  js-mvLogo bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] rounded-3px"
        v-html="getProductText('2121')"
        />
      </div>
    </div>
    <div class="section-header mx-auto text-center mt-8 mb-8 sm:mb-16 sm:mt-16 text-lg italic font-normal tracking-widest border-b-2 border-gray-300  py-[20px] md:py-[30px]">
      Section Header
    </div>
    <div style="display: flex;" class="flex flex-row justify-center gap-5 md:gap-30 mb-40px">
      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2122">
          <img
            class="js-mvLogo02 w-full rounded-6px"
            :src="getImagePath('2122')"
            alt="header-01"
          />
        </NuxtLink>
        <!-- テキスト１を右下端に配置 -->
        <p
          class="text-[11px] md:text-[18px] relative md:absolute  js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] rounded-3px"
        v-html="getProductText('2122')"
        />
      </div>

      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2123">
          <img
            class="js-mvLogo02 w-full rounded-6px"
            :src="getImagePath('2123')"
            alt="header-01"
          />
        </NuxtLink>
        <!-- テキスト１を右下端に配置 -->
        <p
          class="text-[11px] md:text-[18px] relative md:absolute  js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] rounded-3px"
        v-html="getProductText('2123')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-header {
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
}
</style>
