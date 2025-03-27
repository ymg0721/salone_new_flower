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

const cancel = () => {
    router.back() // 1つ前のページに戻る
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
            <button @click="cancel()" class="button-cancel">キャンセルする</button>
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
    padding: 40px;
    border: none;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
}

.input-field {
    width: 100%;
    padding: 12px 15px;
    margin: 15px 0;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    font-size: 15px;
    transition: all 0.3s ease;
    background-color: #fafafa;
}

.input-field:focus {
    border-color: #d4b5b5;
    box-shadow: 0 0 5px rgba(212, 181, 181, 0.2);
    outline: none;
}

.button {
    background-color: #d4b5b5;
    color: white;
    border: none;
    padding: 12px 30px;
    margin: 15px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
    letter-spacing: 1px;
    transition: all 0.3s ease;
}

.button-cancel {
    background-color: transparent;
    color: #888;
    border: 1px solid #e0e0e0;
    padding: 12px 30px;
    margin: 15px 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
    letter-spacing: 1px;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: #c5a0a0;
    transform: translateY(-1px);
}

.button-cancel:hover {
    background-color: #f5f5f5;
}

.confirmation {
    margin-top: 30px;
    padding: 25px;
    border: 1px solid #e9e1e1;
    border-radius: 8px;
    background-color: #fdfafa;
}

h1 {
    font-family: "Yu Mincho", "游明朝", YuMincho, serif;
    font-weight: 400;
    color: #4a4a4a;
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 25px;
    text-align: center;
    letter-spacing: 2px;
}

.error-message {
    color: #d68f8f;
    margin-top: 15px;
    font-size: 0.9rem;
    text-align: center;
}

.success-message {
    color: #8fb3d6;
    margin-top: 15px;
    font-size: 0.9rem;
    text-align: center;
}

.confirmation p {
    color: #666;
    margin: 12px 0;
    padding: 8px 0;
    border-bottom: 1px solid #f0e6e6;
    font-size: 0.95rem;
}
</style>
