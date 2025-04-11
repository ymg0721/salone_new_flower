<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import dayjs from 'dayjs' 
import { usePagesData } from '~/composables/usePagesData'

// このページで予約日時選択と確認・送信まで

const name = ref('');
const email = ref('');
const phone = ref('');
const selectedDate = ref('');
const showConfirmation = ref(false);
const showDatePicker = ref(false);
const tempDate = ref('');
const route = useRoute()
const router = useRouter() // ルーターをインポート
const productId = route.params.detail as string
const { products, getImagePath } = usePagesData()
const successMessage = ref('');
const errorMessage = ref('');

// 選択された商品情報を保持
interface PagesProduct {
  id: string
  name: string
  type: string
  price: number
  size: string
}

const selectedProduct = ref<PagesProduct | null>(null)
const isLesson = computed(() => productId === 'lesson')

// 商品情報の初期設定
onMounted(() => {
  if (!isLesson.value) {
    selectedProduct.value = products.value.find(p => p.id === productId) || null
  }
})

// レッスン用の商品リスト
const lessonProducts = computed(() => 
  products.value.filter(p => p.price <= 20000) // 例：2万円以下の商品をレッスン対象とする
)

// レッスン商品選択時の処理
const handleProductSelect = (productId: string) => {
  selectedProduct.value = products.value.find(p => p.id === productId) || null
}

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

    if (!selectedProduct.value) {
        errorMessage.value = '商品が選択されていません。';
        return;
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
                date: selectedDate.value,
                product: {
                    id: selectedProduct.value.id,
                    name: selectedProduct.value.name,
                    type: selectedProduct.value.type,
                    price: selectedProduct.value.price,
                    size: selectedProduct.value.size
                },
                isLesson: isLesson.value
            }),
        });
        const data = await response.json();
        if (data.success) {
            // 予約情報をセッションストレージに保存
            sessionStorage.setItem('reservationData', JSON.stringify({
                name: name.value,
                email: email.value,
                phone: phone.value,
                date: selectedDate.value,
                product: selectedProduct.value,
                isLesson: isLesson.value
            }));
            
            // 完了画面に遷移
            router.push(`/work/${productId}/reservation/complete`);
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

// 日付選択の処理を追加
const openDatePicker = () => {
    showDatePicker.value = true;
    tempDate.value = selectedDate.value;
};

const confirmDate = () => {
    selectedDate.value = tempDate.value;
    showDatePicker.value = false;
};

const cancelDate = () => {
    showDatePicker.value = false;
    tempDate.value = selectedDate.value;
};
</script>

<template>
    <div class="reservation-container">
        <!-- 商品情報表示エリア -->
        <div class="product-info">
            <div v-if="isLesson" class="lesson-selection">
                <h2>レッスン商品選択</h2>
                <p class="lesson-description">
                    お好みの作品をお選びください。<br>
                    熟練の講師がていねいにご指導いたします。
                </p>
                <select 
                    v-model="selectedProduct" 
                    @change="(e) => handleProductSelect((e.target as HTMLSelectElement).value)"
                    class="product-select"
                >
                    <option value="">作品をお選びください</option>
                    <option v-for="product in lessonProducts" 
                            :key="product.id" 
                            :value="product.id">
                        {{ product.name }} {{ product.type ? `（${product.type}）` : '' }}
                    </option>
                </select>
            </div>

            <div v-if="selectedProduct" class="selected-product">
                <h3>{{ selectedProduct.name }}</h3>
                <div class="product-image">
                    <img :src="getImagePath(selectedProduct.id)" :alt="selectedProduct.name" />
                </div>
                <div class="product-details">
                    <p class="type">{{ selectedProduct.type }}</p>
                    <p class="price">¥{{ selectedProduct.price.toLocaleString() }}</p>
                    <p class="size">{{ selectedProduct.size }}</p>
                </div>
            </div>
        </div>

        <!-- 予約フォーム -->
        <div class="reservation-form">
            <div v-if="!showConfirmation">
                <h1>予約日時選択</h1>
                <input v-model="name" placeholder="氏名" class="input-field" />
                <input v-model="email" placeholder="メールアドレス" class="input-field" />
                <input v-model="phone" placeholder="電話番号" class="input-field" />
                <div class="date-picker-container">
                    <div class="date-input" @click="openDatePicker">
                        <span v-if="selectedDate">{{ dayjs(selectedDate).format('YYYY年MM月DD日') }}</span>
                        <span v-else class="placeholder">日付を選択してください</span>
                    </div>
                </div>
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
    </div>

    <!-- 日付選択モーダル -->
    <div v-if="showDatePicker" class="date-picker-modal">
        <div class="date-picker-content">
            <h3>日付を選択</h3>
            <input 
                type="date" 
                v-model="tempDate" 
                class="date-picker-input"
                :min="dayjs().format('YYYY-MM-DD')"
            />
            <div class="date-picker-buttons">
                <button @click="cancelDate" class="button-cancel">キャンセル</button>
                <button @click="confirmDate" class="button">確定</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.reservation-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1200px;
    margin: 5% auto;
    padding: 0 20px;
}

.product-info {
    background: linear-gradient(to bottom, #fff, #faf7f7);
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.lesson-selection {
    margin-bottom: 30px;
}

h2 {
    font-family: "Yu Mincho", "游明朝", YuMincho, serif;
    font-size: 1.8rem;
    color: #4a4a4a;
    margin-bottom: 20px;
    letter-spacing: 2px;
    text-align: center;
}

.lesson-description {
    font-size: 1rem;
    color: #666;
    line-height: 1.8;
    margin-bottom: 25px;
    text-align: center;
}

.product-select {
    width: 100%;
    padding: 15px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    color: #4a4a4a;
    background-color: #fff;
    margin-bottom: 20px;
}

.selected-product {
    padding: 30px;
    background-color: #fff;
    border: 1px solid #e9e1e1;
    border-radius: 8px;
}

.selected-product h3 {
    font-family: "Yu Mincho", "游明朝", YuMincho, serif;
    font-size: 1.4rem;
    color: #4a4a4a;
    margin-bottom: 20px;
    text-align: center;
}

.product-details {
    font-size: 1.1rem;
    color: #666;
}

.product-details p {
    margin: 15px 0;
    padding: 10px 0;
    border-bottom: 1px solid #f0e6e6;
}

.type {
    color: #8f7676;
    font-weight: 500;
}

.price {
    font-size: 1.3rem;
    color: #d4b5b5;
}

@media (max-width: 768px) {
    .reservation-container {
        grid-template-columns: 1fr;
        gap: 30px;
        margin: 20px auto;
    }

    .product-info {
        padding: 30px 20px;
    }

    h2 {
        font-size: 1.5rem;
    }

    .selected-product h3 {
        font-size: 1.2rem;
    }
}

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

.date-picker-container {
    margin: 15px 0;
}

.date-input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    font-size: 15px;
    background-color: #fafafa;
    cursor: pointer;
    color: #4a4a4a;
}

.date-input .placeholder {
    color: #999;
}

.date-picker-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.date-picker-content {
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    width: 90%;
    max-width: 400px;
}

.date-picker-content h3 {
    text-align: center;
    margin-bottom: 20px;
    color: #4a4a4a;
}

.date-picker-input {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    font-size: 16px;
    -webkit-appearance: none;
    appearance: none;
}

.date-picker-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.date-picker-buttons button {
    flex: 1;
}

@media (max-width: 768px) {
    .date-picker-content {
        width: 95%;
        margin: 20px;
    }
}

.product-image {
    margin: 20px 0;
    text-align: center;
}

.product-image img {
    max-width: 100%;
    max-height: 300px;
    margin: 0 auto;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
