<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">エラーが発生しました</h1>
      <p class="text-gray-600 mb-8">申し訳ありませんが、問題が発生しました。</p>
      <button
        @click="handleError"
        class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
      >
        ホームに戻る
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const handleError = () => {
  clearError();
  navigateTo('/');
};
</script> 