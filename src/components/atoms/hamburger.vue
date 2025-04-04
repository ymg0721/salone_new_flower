<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div class="hamburger-menu fixed z-12 right-10 cursor-pointer p-4" @click="toggleMenu">
    <div :class="{ open: isMenuOpen }" class="w-8 h-5 flex flex-col justify-between relative ">
      <span class="bg-gray-800 block h-[2px] rounded-full transition-all duration-300 w-full"></span>
      <span class="bg-gray-800 block h-[2px] rounded-full transition-all duration-300 w-3/4"></span>
      <span class="bg-gray-800 block h-[2px] rounded-full transition-all duration-300 w-1/2"></span>
    </div>
  </div>

  <transition name="fade-slide">
    <nav v-if="isMenuOpen" class="menu fixed top-0 w-full h-full bg-white/95 z-11">
      <div class="container mx-auto px-4 h-full flex flex-col justify-center items-center">
        <h2 class="text-3xl font-light mb-12 tracking-wider">Venere Emi.</h2>
        <ul class="space-y-8 text-lg">
          <li @click="closeMenu" class="menu-item">
            <NuxtLink to="/" class="menu-link">
              <span class="text-gray-800 hover:text-gray-600">Home</span>
              <span class="text-gray-500 text-sm ml-2">ホーム</span>
            </NuxtLink>
          </li>
          <li @click="closeMenu" class="menu-item">
            <!-- TODO: ページ作成 -->
            <NuxtLink to="/interior" class="menu-link">
              <span class="text-gray-800 hover:text-gray-600">Interior</span>
              <span class="text-gray-500 text-sm ml-2">インテリア</span>
            </NuxtLink> 
          </li>
          <li @click="closeMenu" class="menu-item">
            <NuxtLink to="/lesson" class="menu-link">
              <span class="text-gray-800 hover:text-gray-600">Lesson</span>
              <span class="text-gray-500 text-sm ml-2">レッスンを予約</span>
            </NuxtLink>
          </li>
          <li @click="closeMenu" class="menu-item">
            <NuxtLink to="/contact" class="menu-link">
              <span class="text-gray-800 hover:text-gray-600">Contact</span>
              <span class="text-gray-500 text-sm ml-2">お問い合わせ</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<style scoped>
.hamburger-menu {
  transition: all 0.3s ease;
}

.hamburger-menu div.open span {
  @apply bg-gray-600;
}

.hamburger-menu div.open span:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
  width: 100%;
}

.hamburger-menu div.open span:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}

.hamburger-menu div.open span:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
  width: 100%;
}

.menu-link {
  @apply flex items-center transition-all duration-300 hover:translate-x-2;
}

/* トランジションアニメーション */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.menu {
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.menu-item {
  @apply relative overflow-hidden;
}

.menu-item::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-[1px] bg-gray-800 transition-all duration-300;
}

.menu-item:hover::after {
  @apply w-full;
}
</style>
