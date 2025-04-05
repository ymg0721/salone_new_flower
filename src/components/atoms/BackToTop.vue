<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goToTop = () => {
  router.push('/')
}
</script>

<template>
  <button
    @click="goToTop"
    class="back-to-top"
  >
    <span class="icon">⌂</span>
    <span class="text">TOP</span>
  </button>
</template>

<style scoped lang="scss">
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(8px);

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.15),
                0 3px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 1.5rem;
    color: #2c2c2c;
    margin-bottom: 2px;
  }

  .text {
    font-family: 'Noto Serif JP', serif;
    font-size: 0.7rem;
    font-weight: 300;
    letter-spacing: 0.2em;
    color: #2c2c2c;
  }
}

@media (max-width: 768px) {
  .back-to-top {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 50px;
    height: 50px;

    .icon {
      font-size: 1.2rem;
    }

    .text {
      font-size: 0.6rem;
    }
  }
}
</style> 