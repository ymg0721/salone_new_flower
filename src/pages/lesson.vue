<script setup lang="ts">
import { useScrollAnimation } from '@/composables/useScrollAnimation'


const { start } = useScrollAnimation([
  { className: '.js-mvLogo' },
  { className: '.js-mvLogo02' },
  { className: '.js-mvLogo03' },
  { className: '.js-mvLogo04' }
])

useHead({
  title: 'Lesson',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>

<template>
  <div class="js-mvTrigger bg-[#f8f5f2]" v-if="start">
    <div class="js-mvLogo container mx-auto px-4 py-20 md:py-32">
      <div class="text-center mb-16 md:mb-24">
        <h1 class="font-serif text-3xl md:text-5xl mb-6">Lesson</h1>
        <p class="text-sm md:text-base leading-relaxed text-gray-700 max-w-2xl mx-auto">
          Venere Emiではこれまで紹介した品物を<br>
          サロンという形でお客様ご自身で体験する<br>
          教室を開いております。
        </p>
        
        <NuxtLink 
          to="/work/lesson/reservation" 
          class="inline-block mt-8 px-12 py-4 bg-[#967259] hover:bg-[#7d6049] text-white text-sm md:text-base font-medium tracking-wider transition-colors duration-300 border border-[#967259] hover:border-[#7d6049] rounded-none"
        >
          レッスンを予約する
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div class="js-mvLogo01 overflow-hidden">
          <img src="@/assets/img/salone-body-01.png" class="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-500">
        </div>
        <div class="js-mvLogo02 overflow-hidden">
          <img src="@/assets/img/salone-body-02.png" class="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-500">
        </div>
        <div class="js-mvLogo03 overflow-hidden">
          <img src="@/assets/img/salone-body-03.png" class="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-500">
        </div>
        <div class="js-mvLogo04 overflow-hidden">
          <img src="@/assets/img/salone-body-04.png" class="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-500">
        </div>
      </div>
    </div>
  </div>
</template>
