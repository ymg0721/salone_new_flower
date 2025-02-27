<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const successMessage = ref('');
const errorMessage = ref('');

const sendEmail = async () => {
  successMessage.value = '';
  errorMessage.value = '';

  try {
    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
    });

    const data = await response.json();

    if (data.success) {
      successMessage.value = 'メールが送信されました。';
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      errorMessage.value = 'メール送信に失敗しました。';
    }
  } catch (error) {
    errorMessage.value = 'エラーが発生しました。';
  }
};
</script>

<template>
  <div>
    <h1>お問い合わせ</h1>
    <form @submit.prevent="sendEmail">
      <div>
        <label>名前：</label>
        <input v-model="name" type="text" required />
      </div>
      <div>
        <label>メール：</label>
        <input v-model="email" type="email" required />
      </div>
      <div>
        <label>メッセージ：</label>
        <textarea v-model="message" required></textarea>
      </div>
      <button type="submit">送信</button>
    </form>

    <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}
input, textarea {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
}
button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
</style>
