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
  <div class="container mx-auto p-4 my-10%">
    <div class="flex">
      <img
        class="flex  max-w-full h-auto rounded-lg shadow-lg ml-20%"
        :src="getImagePath(productId)"
        :alt="'product-' + productId"
      />
      
      <!-- 商品情報を右下に表示 -->
      <div class="ml-5%">
        <h2 class=" mb-25px pb-5px" style="border-bottom: 1px solid #cccccc;">詳細</h2>
        <p
          class=" w-100% top-4 right-4 p-3 text-white bg-opacity-70 bg-gray-800 text-sm md:text-lg rounded-md "
          v-html="getProductText(productId)"
        />
        
        <!-- 新しいボタンを追加 -->
        <h2 class="mt-10% mb-25px pb-5px" style="border-bottom: 1px solid #cccccc;">この作品について</h2>
        <div class="bottom-4 right-4 flex gap-20px">
          <button @click="navigateToPricing(`/contact?${productId}`)"  class="block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-100%">問い合わせる</button>
          <button @click="navigateToPricing(`/work/${productId}/reservation`)" class="block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-100%">レッスンを予約</button>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.container {
  max-width: 1200px; /* 最大幅を設定 */
}

h2 {
  font-family: serif;
  font-weight: 500; /* 太さを設定 */
  color: #333; /* フォントカラーを設定 */
  font-size: 1.5rem; /* フォントサイズを調整 */
  line-height: 1.2; /* 行間を調整 */
}

@media (max-width: 768px) {
  .container {
    padding: 2rem; /* モバイル用のパディング */
  }
}
</style>
