<script setup lang="ts">
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <div class="hamburger-menu" @click="toggleMenu">
    <div :class="{ open: isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <transition name="slide">
    <nav v-if="isMenuOpen" class="menu">
      <!-- メニューアイテムをここに追加 -->
      <h2 style="display: flex; justify-content: center">Venere Emi.</h2>
      <ul>
        <li @click="closeMenu">
          <NuxtLink to="/">Home | ホーム</NuxtLink>
        </li>
        <li @click="closeMenu">
          <NuxtLink to="/preserved">Preserved</NuxtLink>
        </li>
        <li @click="closeMenu">
          <NuxtLink to="/artificial">Artificial</NuxtLink>
        </li>
        <li @click="closeMenu">
          <NuxtLink to="/lesson">Lesson</NuxtLink>
        </li>
        <li @click="closeMenu">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
  </transition>
</template>

<style scoped lang="scss">
.hamburger-menu {
  cursor: pointer;
  position: fixed;
  z-index: 6;
  right: 30px;
  top: 60px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    span {
      display: block;
      height: 1.5px;
      background: #000;
      border-radius: 2px;
      transition: all 0.3s;
    }
    &.open span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    &.open span:nth-child(2) {
      opacity: 0;
    }
    &.open span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
}

.menu {
  position: fixed;
  top: 100px;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  justify-content: center;
  z-index: 5;
  font-family: "hypatia-sans-pro", "Hiragino Kaku Gothic ProN", "Meiryo",
    "Osaka", "Yu Gothic", "sans-serif";
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.menu ul li {
  margin: 1rem 0;
}

.menu ul li a {
  text-decoration: none;
  font-size: 1.5rem;
  color: #000;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
