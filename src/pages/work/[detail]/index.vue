<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { usePagesData } from '~/composables/usePagesData'

const route = useRoute()
const router = useRouter() // ルーターをインポート
const productId = route.params.detail as string
const { getProductText, getImagePath } = usePagesData()

// SPAで遷移する関数を定義
const navigateToPricing = (url: string) => {
  router.push(url) // 遷移先のURL
}
</script>

<template>
  <div class="container mx-auto p-8 my-12">
    <!-- フレックスコンテナをモバイル対応に変更 -->
    <div class="flex flex-col md:flex-row gap-12">
      <!-- 画像のスタイリングを改善 -->
      <div class="md:w-1/2">
        <img
          class="w-full h-auto rounded-2xl shadow-xl object-cover"
          :src="getImagePath(productId)"
          :alt="'product-' + productId"
        />
      </div>
      
      <!-- 商品情報セクションのスタイリングを改善 -->
      <div class="md:w-1/2">
        <h2 class="font-serif text-2xl mb-6 pb-3 text-gray-700 border-b border-rose-200">詳細</h2>
        <p
          class="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm text-gray-600 leading-relaxed"
          v-html="getProductText(productId)"
        />
        
        <h2 class="font-serif text-2xl mt-12 mb-6 pb-3 text-gray-700 border-b border-rose-200">この作品について</h2>
        <div class="flex flex-col sm:flex-row gap-4">
          <button @click="navigateToPricing(`/contact?${productId}`)" 
            class="btn-primary">
            問い合わせる
          </button>
          <button @click="navigateToPricing(`/work/${productId}/reservation`)" 
            class="btn-secondary">
            レッスンを予約
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1400px;
}

.btn-primary {
  @apply bg-rose-400 text-white px-6 py-3 rounded-full hover:bg-rose-500 
  transition-all duration-300 w-full text-center shadow-sm;
}

.btn-secondary {
  @apply bg-emerald-400 text-white px-6 py-3 rounded-full hover:bg-emerald-500 
  transition-all duration-300 w-full text-center shadow-sm;
}

@media (max-width: 768px) {
  .container {
    @apply px-4;
  }
}
</style>
