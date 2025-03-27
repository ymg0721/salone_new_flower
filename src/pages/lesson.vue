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
  <div class="js-mvTrigger" v-if="start">
  <div class="js-mvLogo flex items-center justify-between md:mx-10%">
    <h1 class="text-[15px] md:text-[25px]">Lesson</h1>
    <h3 class="text-[11px] md:text-[18px]">Venere Emiではこれまで紹介した品物を<br>サロンという形でお客様ご自身で体験する<br>教室を開いております。</h3>
  </div>
  <div class="js-mvLogo01 flex items-center justify-between md:mx-10%">
  <img src="@/assets/img/salone-body-01.png" class="w-50% md:w-auto">
  </div>
  <div class="js-mvLogo02 flex items-center justify-end md:mx-10% right-0">
  <img src="@/assets/img/salone-body-02.png" class="w-50% md:w-auto">
  </div>
  <div class="js-mvLogo03 flex items-center justify-between md:mx-10%">
    <img src="@/assets/img/salone-body-03.png" class="w-50% md:w-auto">
    <img src="@/assets/img/salone-body-05.png" class="w-50% md:w-auto">
  </div>
  <div class="js-mvLogo04 flex items-center justify-end md:mx-10% right-0">
  <img src="@/assets/img/salone-body-04.png" class="w-50% md:w-auto">
  </div> 
</div>
</template>
