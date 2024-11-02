<script setup lang="ts"></script>

<template>
  <div class="l-wrapper relative z-0">
    <div class="flex items-center">
      <AtomsHeader />
      <AtomsHamburger class="right-6"/>
    </div>
    <div class="max-w-md md:max-w-full flex-1">
      <slot />
    </div>
    <ContainersFooter />
  </div>
</template>

