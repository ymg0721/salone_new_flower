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

useHead({
  title: 'Contact',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-rose-50 to-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden md:max-w-2xl p-12">
      <div class="text-center mb-12">
        <h1 class="font-serif text-3xl text-gray-800 mb-4">お問い合わせ</h1>
        <p class="text-gray-600 font-light">ご質問・ご要望などお気軽にお問い合わせください</p>
        <div class="mt-4 w-20 h-1 bg-gradient-to-r from-rose-200 to-rose-300 mx-auto rounded-full"></div>
      </div>

      <form @submit.prevent="sendEmail" class="space-y-8">
        <div class="form-group">
          <label for="name" class="block text-sm font-medium text-gray-700 mb-2">お名前</label>
          <input
            id="name"
            v-model="name"
            type="text"
            required
            class="form-input"
            placeholder="山田 太郎"
          />
        </div>

        <div class="form-group">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-2">メールアドレス</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="form-input"
            placeholder="example@email.com"
          />
        </div>

        <div class="form-group">
          <label for="message" class="block text-sm font-medium text-gray-700 mb-2">メッセージ</label>
          <textarea
            id="message"
            v-model="message"
            rows="5"
            required
            class="form-input"
            placeholder="お問い合わせ内容をご記入ください"
          ></textarea>
        </div>

        <div class="mt-10">
          <button
            type="submit"
            class="w-full py-3 px-6 border border-transparent rounded-full text-base font-medium text-white bg-gradient-to-r from-rose-400 to-rose-500 hover:from-rose-500 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            送信する
          </button>
        </div>
      </form>

      <!-- アラートメッセージ -->
      <div class="mt-6">
        <div v-if="successMessage" class="rounded-2xl bg-emerald-50 p-4 border border-emerald-100">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-emerald-800">{{ successMessage }}</p>
            </div>
          </div>
        </div>

        <div v-if="errorMessage" class="rounded-2xl bg-rose-50 p-4 border border-rose-100">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-rose-800">{{ errorMessage }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-input {
  @apply appearance-none block w-full px-4 py-3 border border-gray-200 rounded-xl shadow-sm 
  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 
  transition-all duration-200 bg-white/70 backdrop-blur-sm text-gray-700;
}

.form-group {
  @apply relative;
}

.form-group label {
  @apply font-serif text-gray-700;
}

/* アニメーション効果 */
.form-input:focus {
  @apply transform scale-[1.01];
}

/* プレースホルダーのスタイル */
.form-input::placeholder {
  @apply text-gray-300 font-light;
}
</style>
