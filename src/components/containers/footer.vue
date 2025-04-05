<script setup lang="ts"></script>

<template>
  <div class="footer-container bg-gradient-to-r from-gray-900 to-black py-16 w-full" 
       style="border-top: 1px solid rgba(255, 255, 255, 0.1);">
    <div class="container mx-auto px-4 flex flex-col items-center">
      <NuxtLink to="https://www.instagram.com/venere_emi/" 
                class="transition-transform hover:scale-105">
        <img src="@/assets/img/venere-emi-title-touka.png" 
             class="w-140px md:w-200px filter brightness-110" 
             alt="Venere Emi">
      </NuxtLink>
      
      <div class="mt-6 flex gap-6">
        <NuxtLink to="/about" class="text-gray-400 hover:text-white transition-colors">
          <span class="text-sm font-light tracking-wider">About</span>
        </NuxtLink>
        <NuxtLink to="/contact" class="text-gray-400 hover:text-white transition-colors">
          <span class="text-sm font-light tracking-wider">Contact</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-container {
  box-shadow: 0 -10px 20px -5px rgba(0, 0, 0, 0.2);
}
</style>
