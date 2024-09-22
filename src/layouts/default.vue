<script setup lang="ts"></script>

<template>
  <div class="l-wrapper">
    <div style="display: flex">
      <AtomsHeader />
      <AtomsHamburger />
    </div>
    <slot />
    <ContainersFooter />
  </div>
</template>

<style scoped lang="scss">
.l-wrapper {
  position: relative;
  z-index: 0;
}

.content-wrapper {
  flex: 1;
}

.content-wrapper-lp {
  flex: 1;
  max-width: 768px;
  margin: 0 auto;
}
</style>
