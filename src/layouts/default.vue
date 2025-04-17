<script setup lang="ts"></script>

<template>
  <div class="l-wrapper relative z-0">
    <div class="fixed top-0 left-0 right-0 bg-white z-50">
      <div class="flex items-center justify-center relative">
        <AtomsHeader />
        <AtomsHamburger class="absolute right-6"/>
      </div>
    </div>
    <div class="pt-[72px] md:pt-[96px] lg:pt-[120px]">
      <div class="max-w-md md:max-w-full flex-1">
        <slot />
      </div>
      <ContainersFooter />
    </div>
  </div>
</template>

