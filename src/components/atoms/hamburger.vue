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
  <div class="hamburger-menu fixed z-12 right-10 cursor-pointer" @click="toggleMenu">
    <div :class="{ open: isMenuOpen }" class="w-8 right-6 h-5 flex flex-col justify-between">
      <span class="bg-black block h-[2px] rounded transition-all duration-300"></span>
      <span class="bg-black block h-[2px] rounded transition-all duration-300"></span>
      <span class="bg-black block h-[2px] rounded transition-all duration-300"></span>
    </div>
  </div>

  <transition name="slide">
    <nav v-if="isMenuOpen" class="menu fixed top-0  w-full h-full bg-white bg-opacity-90 z-11 flex justify-center">
      <div class="text-center font-sans p-4 mt-120px">
        <h2 class="text-2xl mb-4">Venere Emi.</h2>
        <ul class="space-y-4 text-lg">
          <li @click="closeMenu">
            <NuxtLink to="/" class="text-black hover:underline">Home | ホーム</NuxtLink>
          </li>
          <li @click="closeMenu">
            <NuxtLink to="/preserved" class="text-black hover:underline">Preserved</NuxtLink>
          </li>
          <li @click="closeMenu">
            <NuxtLink to="/artificial" class="text-black hover:underline">Artificial</NuxtLink>
          </li>
          <li @click="closeMenu">
            <NuxtLink to="/lesson" class="text-black hover:underline">Lesson</NuxtLink>
          </li>
          <li @click="closeMenu">
            <NuxtLink to="/contact" class="text-black hover:underline">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </transition>
</template>

<style scoped>
/* モダンなハンバーガーメニューのスタイル */
.hamburger-menu {
  transition: background-color 0.3s ease;
}

.hamburger-menu div.open span {
  background-color: #4A90E2; /* モダンな色 */
}

.hamburger-menu div.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.hamburger-menu div.open span:nth-child(2) {
  opacity: 0;
}
.hamburger-menu div.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* スライドトランジション */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease; /* フェード効果を追加 */
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0; /* フェード効果を追加 */
}

/* メニューのスタイル */
.menu {
  background-color: rgba(255, 255, 255, 0.95); /* 半透明の背景 */
  border-radius: 10px; /* 角を丸くする */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* シャドウを追加 */
}

.text-center {
  font-family: 'Arial', sans-serif; /* モダンなフォント */
}
</style>
