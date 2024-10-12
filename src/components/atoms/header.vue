<script setup lang="ts"></script>

<template>
  <header class="header">
    <NuxtLink to="/">
      <img
        src="@/assets/img/venere-emi-title.png"
        alt="Site Icon"
        class="site-icon"
      />
    </NuxtLink>
  </header>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  position: relative;
  z-index: 10;
}

.site-icon {
  z-index: 6;
}
</style>
