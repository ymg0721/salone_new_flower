<script setup lang="ts">
const name = ref('');
const email = ref('');
const message = ref('');
const successMessage = ref('');
const errorMessage = ref('');

const sendEmail = async () => {
  successMessage.value = '';
  errorMessage.value = '';
  const config = useRuntimeConfig()

  try {
    console.log('API: ', config.public.NUXT_PUBLIC_API_URL)
    const response = await fetch(`${config.public.NUXT_PUBLIC_API_URL}/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
    });

    const data = await response.json();

    if (data.success) {
      successMessage.value = 'メッセージを送信しました。お問い合わせありがとうございます。';
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      errorMessage.value = 'メッセージの送信に失敗しました。時間をおいて再度お試しください。';
    }
  } catch (error) {
    errorMessage.value = 'エラーが発生しました。時間をおいて再度お試しください。';
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">お問い合わせ</h1>
        <p class="text-gray-600">ご質問・ご要望などお気軽にお問い合わせください</p>
      </div>

      <form @submit.prevent="sendEmail" class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">お名前</label>
          <div class="mt-1">
            <input
              id="name"
              v-model="name"
              type="text"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="山田 太郎"
            />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">メールアドレス</label>
          <div class="mt-1">
            <input
              id="email"
              v-model="email"
              type="email"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="example@email.com"
            />
          </div>
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">メッセージ</label>
          <div class="mt-1">
            <textarea
              id="message"
              v-model="message"
              rows="4"
              required
              class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="お問い合わせ内容をご記入ください"
            ></textarea>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            送信する
          </button>
        </div>
      </form>

      <!-- アラートメッセージ -->
      <div class="mt-4">
        <div v-if="successMessage" class="rounded-md bg-green-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-green-800">{{ successMessage }}</p>
            </div>
          </div>
        </div>

        <div v-if="errorMessage" class="rounded-md bg-red-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-red-800">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tailwindクラスを使用しているため、追加のスタイルは不要です */
</style>
