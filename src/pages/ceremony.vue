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
    <NuxtLink to="/work/2113">
      <div class="relative">

          <img
            class="js-mvLogo flex m-auto max-w-full md:max-w-100% h-auto rounded-5px"
            :src="getImagePath('2113')"
            alt="header-01"
          />


        <!-- テキスト１を右上端に配置 -->
        <p class="absolute js-mvLogo top-0 text-[8px] md:text-[18px]  p-2 right-[0%] md:right-[20%] text-white bg-[#9b9b9b6c] rounded-3px">
          淡いピンクの花々で写真を優美に彩ります。
          <br />上品なデザインで、 <br />特別な思い出を引き立てるにおすすめです。
        </p>

        <!-- テキスト２を右下端に配置 -->
        <p
        class="absolute js-mvLogo bottom-0 right-[0%] md:right-[20%] p-2 text-white bg-[#9b9b9b6c] text-[9px] md:text-[18px] rounded-3px"
        v-html="getProductText('2113')"
        />

        <!-- 新しいテキストを左端に配置 -->
        <p
        class="absolute font-serif js-mvLogo top-0 left-[3%] md:left-[20%] p-2 text-white bg-[#9b9b9b6c] text-[20px] md:text-[50px] -rotate-15 rounded-3px"
        >
          Ceremony
        </p>
      </div>
    </NuxtLink>
    <div class="section-header mx-auto text-center mt-8 mb-8 sm:mb-16 sm:mt-16 text-lg italic font-normal tracking-widest border-b-2 border-gray-300  py-[20px] md:py-[30px]">
      Section Header
    </div>
    <div style="display: flex;" class="flex-row justify-center gap-5 md:gap-30 mb-40px">
      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2114">
          <img
            class="js-mvLogo02 w-full rounded-5px"
            :src="getImagePath('2114')"
            alt="header-01"
          />
        </NuxtLink>
        <!-- テキスト１を右下端に配置 -->
        <p
        class="relative md:absolute  js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px] rounded-3px"
        v-html="getProductText('2114')"
        />
      </div>

      <div class="relative md:w-[30%]">
        <NuxtLink to="/work/2115">
          <img
            class="js-mvLogo02 w-full rounded-5px"
            :src="getImagePath('2115')"
            alt="header-01"
          />
        </NuxtLink>
        <!-- テキスト１を右下端に配置 -->
        <p
        class="relative md:absolute  js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px] rounded-3px"
        v-html="getProductText('2115')"
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
