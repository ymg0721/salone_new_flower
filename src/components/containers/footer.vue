<script setup lang="ts"></script>

<template>
  <div class="footer-container bg-gradient-to-r from-rose-50 to-pink-50 py-16 w-full" 
       style="border-top: 1px solid rgba(219, 166, 166, 0.3);">
    <div class="container mx-auto px-4 flex flex-col items-center">
      <NuxtLink to="https://www.instagram.com/venere_emi/" 
                class="transition-transform hover:scale-105">
        <img src="@/assets/img/venere-emi-title-touka.png" 
             class="w-140px md:w-200px filter drop-shadow-sm" 
             alt="Venere Emi">
      </NuxtLink>
      
      <div class="mt-6 flex gap-4">
        <a href="#" class="text-rose-800 hover:text-rose-600 transition-colors">
          <span class="text-sm">About</span>
        </a>
        <a href="#" class="text-rose-800 hover:text-rose-600 transition-colors">
          <span class="text-sm">Contact</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-container {
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.05);
}
</style>
