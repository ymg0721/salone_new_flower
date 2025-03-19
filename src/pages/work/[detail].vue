<template>
  <div class="mx-30px">
    <div class="relative">
      <img
        class="flex m-auto max-w-full md:max-w-100% h-auto rounded-5px"
        :src="getImagePath(productId)"
        :alt="'product-' + productId"
      />
      
      <!-- 商品情報を右下に表示 -->
      <p
        class="absolute bottom-0 right-[0%] md:right-[20%] p-2 text-white bg-[#9b9b9b6c] text-[9px] md:text-[18px] rounded-3px"
        v-html="getProductText(productId)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { usePagesData } from '~/composables/usePagesData'

const route = useRoute()
const productId = route.params.detail as string
const { getProductText, getImagePath } = usePagesData()
</script>

<style scoped>
/* ここにスタイルを追加 */
</style>
