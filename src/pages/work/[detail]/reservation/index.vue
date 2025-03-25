<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import dayjs from 'dayjs' 

// このページで予約日時選択と確認・送信まで

const name = ref('');
const email = ref('');
const phone = ref('');
const selectedDate = ref('');
const showConfirmation = ref(false);
const route = useRoute()
const router = useRouter() // ルーターをインポート
const productId = route.params.detail as string
const successMessage = ref('');
const errorMessage = ref('');

// バリデーション関数
const validateFields = () => {
    if (!name.value || !email.value || !phone.value || !selectedDate.value) {
        errorMessage.value = 'すべてのフィールドを入力してください。';
        return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        errorMessage.value = '有効なメールアドレスを入力してください。';
        return false;
    }
    return true;
};

const submitReservation = async () => {
    successMessage.value = '';
    errorMessage.value = '';
    
    if (!validateFields()) {
        return; // バリデーションに失敗した場合は処理を中止
    }

    // POST APIを実行するロジックをここに追加
    const config = useRuntimeConfig();
    try {
        const response = await fetch(`${config.public.NUXT_PUBLIC_API_URL || 'https://node-server2-rosy.vercel.app'}/send-reservation`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                name: name.value, 
                email: email.value,
                phone: phone.value, 
                date: selectedDate.value
            }),
        });
        const data = await response.json();
        if (data.success) {
            successMessage.value = '予約が完了しました。';
            // フォームをリセット
            name.value = '';
            email.value = '';
            phone.value = '';
            selectedDate.value = '';
        } else {
            errorMessage.value = '予約の送信に失敗しました。';
        }
    } catch (error) {
        errorMessage.value = 'エラーが発生しました。時間をおいて再度お試しください。';
    }
};

const cancel = (url: string) => {
    router.push(url) // 遷移先のURL
}
</script>

<template>
    <div class="container my-10%">
        <div v-if="!showConfirmation">
            <h1>予約日時選択</h1>
            <input v-model="name" placeholder="氏名" class="input-field" />
            <input v-model="email" placeholder="メールアドレス" class="input-field" />
            <input v-model="phone" placeholder="電話番号" class="input-field" />
            <input type="date" v-model="selectedDate" class="input-field" />
            <button @click="showConfirmation = true" class="button">確認画面へ</button>
            <button @click="cancel(`/work/${productId}`)" class="button-cancel">キャンセルする</button>
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        </div>

        <div v-if="showConfirmation" class="confirmation">
            <h1>確認画面</h1>
            <p>氏名: {{ name }}</p>
            <p>メールアドレス: {{ email }}</p>
            <p>電話番号: {{ phone }}</p>
            <p>予約日: {{ dayjs(selectedDate).format('YYYY年MM月DD日') }}</p>
            <button @click="submitReservation" class="button">予約を確定する</button>
            <button @click="showConfirmation = false" class="button-cancel">戻る</button>
            <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 600px;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

.input-field {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 10px 5px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.button-cancel {
    background-color: #ccc;
    color: white;
    border: none;
    padding: 10px 15px;
    margin: 10px 5px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.button:hover {
    background-color: #0056b3;
}

.confirmation {
    margin-top: 20px;
    padding: 15px;
    border: 1px solid #007bff;
    border-radius: 4px;
    background-color: #e7f3ff;
}

h1 {
  font-family: serif;
  font-weight: 500; /* 太さを設定 */
  color: #333; /* フォントカラーを設定 */
  font-size: 1.25rem; /* フォントサイズを調整 */
  line-height: 1.2; /* 行間を調整 */
}

.error-message {
    color: red;
    margin-top: 10px;
}

.success-message {
    color: green;
    margin-top: 10px;
}
</style>
