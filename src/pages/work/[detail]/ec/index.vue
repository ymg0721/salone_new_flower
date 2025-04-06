<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { usePagesData } from '~/composables/usePagesData'

// 購入情報入力フォームの状態管理
const name = ref('');
const email = ref('');
const phone = ref('');
const address = ref('');
const postalCode = ref('');
const city = ref('');
const paymentMethod = ref('credit');
const showConfirmation = ref(false);
const route = useRoute()
const router = useRouter()
const productId = route.params.detail as string
const { products, getProductText, getImagePath } = usePagesData()
const successMessage = ref('');
const errorMessage = ref('');

// クレジットカード情報
const cardNumber = ref('');
const cardName = ref('');
const cardExpiry = ref('');
const cardCvv = ref('');

// 銀行振込情報
const bankName = ref('');
const accountHolder = ref('');
const accountNumber = ref('');

// 選択された商品情報を保持
interface PagesProduct {
  id: string
  name: string
  type: string
  price: number
  size: string
}

const selectedProduct = ref<PagesProduct | null>(null)
const productImage = ref('')

// 商品情報の初期設定
onMounted(() => {
  // URLのパラメータに商品IDがある場合
  if (productId && productId !== 'select') {
    selectedProduct.value = products.value.find(p => p.id === productId) || null
    if (selectedProduct.value) {
      productImage.value = getImagePath(selectedProduct.value.id)
    }
  }
})

// 商品選択時の処理
const handleProductSelect = (productId: string) => {
  selectedProduct.value = products.value.find(p => p.id === productId) || null
  if (selectedProduct.value) {
    productImage.value = getImagePath(selectedProduct.value.id)
  }
}

// バリデーション関数
const validateFields = () => {
  if (!name.value || !email.value || !phone.value || !address.value || !postalCode.value || !city.value) {
    errorMessage.value = 'すべてのフィールドを入力してください。';
    return false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    errorMessage.value = '有効なメールアドレスを入力してください。';
    return false;
  }
  const postalCodePattern = /^\d{3}-\d{4}$/;
  if (!postalCodePattern.test(postalCode.value)) {
    errorMessage.value = '郵便番号は「000-0000」の形式で入力してください。';
    return false;
  }
  
  // 支払い方法に応じたバリデーション
  if (paymentMethod.value === 'credit') {
    if (!cardNumber.value || !cardName.value || !cardExpiry.value || !cardCvv.value) {
      errorMessage.value = 'クレジットカード情報をすべて入力してください。';
      return false;
    }
    const cardNumberPattern = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    if (!cardNumberPattern.test(cardNumber.value)) {
      errorMessage.value = 'カード番号は「0000 0000 0000 0000」の形式で入力してください。';
      return false;
    }
    const cardExpiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!cardExpiryPattern.test(cardExpiry.value)) {
      errorMessage.value = '有効期限は「MM/YY」の形式で入力してください。';
      return false;
    }
    const cardCvvPattern = /^\d{3,4}$/;
    if (!cardCvvPattern.test(cardCvv.value)) {
      errorMessage.value = 'セキュリティコードは3桁または4桁の数字で入力してください。';
      return false;
    }
  } else if (paymentMethod.value === 'bank') {
    if (!bankName.value || !accountHolder.value || !accountNumber.value) {
      errorMessage.value = '銀行振込情報をすべて入力してください。';
      return false;
    }
  }
  
  return true;
};

// 購入処理
const submitPurchase = async () => {
  successMessage.value = '';
  errorMessage.value = '';
  
  if (!validateFields()) {
    return; // バリデーションに失敗した場合は処理を中止
  }

  if (!selectedProduct.value) {
    errorMessage.value = '商品が選択されていません。';
    return;
  }

  // POST APIを実行するロジック
  const config = useRuntimeConfig();
  try {
    const response = await fetch(`${config.public.NUXT_PUBLIC_API_URL || 'https://node-server2-rosy.vercel.app'}/send-purchase`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        name: name.value, 
        email: email.value,
        phone: phone.value,
        address: address.value,
        postalCode: postalCode.value,
        city: city.value,
        paymentMethod: paymentMethod.value,
        paymentDetails: paymentMethod.value === 'credit' ? {
          cardNumber: cardNumber.value,
          cardName: cardName.value,
          cardExpiry: cardExpiry.value,
          cardCvv: cardCvv.value
        } : paymentMethod.value === 'bank' ? {
          bankName: bankName.value,
          accountHolder: accountHolder.value,
          accountNumber: accountNumber.value
        } : null,
        product: {
          id: selectedProduct.value.id,
          name: selectedProduct.value.name,
          type: selectedProduct.value.type,
          price: selectedProduct.value.price,
          size: selectedProduct.value.size
        }
      }),
    });
    const data = await response.json();
    if (data.success) {
      // 購入情報をセッションストレージに保存
      sessionStorage.setItem('purchaseData', JSON.stringify({
        name: name.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        postalCode: postalCode.value,
        city: city.value,
        paymentMethod: paymentMethod.value,
        paymentDetails: paymentMethod.value === 'credit' ? {
          cardNumber: cardNumber.value,
          cardName: cardName.value,
          cardExpiry: cardExpiry.value
        } : paymentMethod.value === 'bank' ? {
          bankName: bankName.value,
          accountHolder: accountHolder.value,
          accountNumber: accountNumber.value
        } : null,
        product: selectedProduct.value
      }));
      
      // 完了画面に遷移
      router.push(`/work/${productId}/ec/complete`);
    } else {
      errorMessage.value = '購入処理に失敗しました。';
    }
  } catch (error) {
    errorMessage.value = 'エラーが発生しました。時間をおいて再度お試しください。';
  }
};

// キャンセル処理
const cancel = () => {
  router.back() // 1つ前のページに戻る
}
</script>

<template>
  <div class="ec-container">
    <!-- 商品情報表示エリア -->
    <div class="product-info">
      <div v-if="!selectedProduct" class="product-selection">
        <h2>商品選択</h2>
        <p class="selection-description">
          お好みの商品をお選びください。<br>
          高級感のある逸品をご用意しております。
        </p>
        <select 
          v-model="selectedProduct" 
          @change="(e) => handleProductSelect((e.target as HTMLSelectElement).value)"
          class="product-select"
        >
          <option value="">商品をお選びください</option>
          <option v-for="product in products" 
                  :key="product.id" 
                  :value="product.id">
            {{ product.name }} ({{ product.type }}) - ¥{{ product.price.toLocaleString() }}
          </option>
        </select>
      </div>

      <div v-if="selectedProduct" class="selected-product">
        <div class="product-image">
          <img :src="productImage" :alt="selectedProduct.name" />
        </div>
        <h3>{{ selectedProduct.name }}</h3>
        <div class="product-details">
          <p class="type">{{ selectedProduct.type }}</p>
          <p class="price">¥{{ selectedProduct.price.toLocaleString() }}</p>
          <p class="size">{{ selectedProduct.size }}</p>
        </div>
      </div>
    </div>

    <!-- 購入フォーム -->
    <div class="purchase-form">
      <div v-if="!showConfirmation">
        <h1>お客様情報入力</h1>
        <div class="form-group">
          <label>お名前</label>
          <input v-model="name" placeholder="山田 花子" class="input-field" />
        </div>
        <div class="form-group">
          <label>メールアドレス</label>
          <input v-model="email" placeholder="example@example.com" class="input-field" />
        </div>
        <div class="form-group">
          <label>電話番号</label>
          <input v-model="phone" placeholder="090-1234-5678" class="input-field" />
        </div>
        <div class="form-group">
          <label>郵便番号</label>
          <input v-model="postalCode" placeholder="000-0000" class="input-field" />
        </div>
        <div class="form-group">
          <label>都道府県・市区町村</label>
          <input v-model="city" placeholder="東京都渋谷区" class="input-field" />
        </div>
        <div class="form-group">
          <label>住所</label>
          <input v-model="address" placeholder="代々木1-2-3" class="input-field" />
        </div>
        <div class="form-group">
          <label>お支払い方法</label>
          <select v-model="paymentMethod" class="input-field">
            <option value="credit">クレジットカード</option>
            <option value="bank">銀行振込</option>
            <option value="cod">代金引換</option>
          </select>
        </div>
        
        <!-- クレジットカード情報 -->
        <div v-if="paymentMethod === 'credit'" class="payment-details">
          <h3>クレジットカード情報</h3>
          <div class="form-group">
            <label>カード番号</label>
            <input v-model="cardNumber" placeholder="0000 0000 0000 0000" class="input-field" />
          </div>
          <div class="form-group">
            <label>カード名義人</label>
            <input v-model="cardName" placeholder="TARO YAMADA" class="input-field" />
          </div>
          <div class="form-row">
            <div class="form-group half">
              <label>有効期限</label>
              <input v-model="cardExpiry" placeholder="MM/YY" class="input-field" />
            </div>
            <div class="form-group half">
              <label>セキュリティコード</label>
              <input v-model="cardCvv" placeholder="123" class="input-field" />
            </div>
          </div>
        </div>
        
        <!-- 銀行振込情報 -->
        <div v-if="paymentMethod === 'bank'" class="payment-details">
          <h3>銀行振込情報</h3>
          <div class="form-group">
            <label>銀行名</label>
            <input v-model="bankName" placeholder="○○銀行" class="input-field" />
          </div>
          <div class="form-group">
            <label>口座名義</label>
            <input v-model="accountHolder" placeholder="ヤマダ タロウ" class="input-field" />
          </div>
          <div class="form-group">
            <label>口座番号</label>
            <input v-model="accountNumber" placeholder="1234567" class="input-field" />
          </div>
        </div>
        
        <div class="button-group">
          <button @click="showConfirmation = true" class="button">確認画面へ</button>
          <button @click="cancel()" class="button-cancel">キャンセルする</button>
        </div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </div>

      <div v-if="showConfirmation" class="confirmation">
        <h1>ご注文内容の確認</h1>
        <div class="confirmation-product" v-if="selectedProduct">
          <h3>商品情報</h3>
          <p>商品名: {{ selectedProduct.name }} ({{ selectedProduct.type }})</p>
          <p>価格: ¥{{ selectedProduct.price.toLocaleString() }}</p>
        </div>
        <div class="confirmation-details">
          <h3>お客様情報</h3>
          <p>お名前: {{ name }}</p>
          <p>メールアドレス: {{ email }}</p>
          <p>電話番号: {{ phone }}</p>
          <p>郵便番号: {{ postalCode }}</p>
          <p>住所: {{ city }} {{ address }}</p>
          <p>お支払い方法: 
            <span v-if="paymentMethod === 'credit'">クレジットカード</span>
            <span v-else-if="paymentMethod === 'bank'">銀行振込</span>
            <span v-else>代金引換</span>
          </p>
          
          <!-- クレジットカード情報の確認 -->
          <div v-if="paymentMethod === 'credit'" class="payment-confirmation">
            <h3>クレジットカード情報</h3>
            <p>カード番号: {{ cardNumber }}</p>
            <p>カード名義人: {{ cardName }}</p>
            <p>有効期限: {{ cardExpiry }}</p>
          </div>
          
          <!-- 銀行振込情報の確認 -->
          <div v-if="paymentMethod === 'bank'" class="payment-confirmation">
            <h3>銀行振込情報</h3>
            <p>銀行名: {{ bankName }}</p>
            <p>口座名義: {{ accountHolder }}</p>
            <p>口座番号: {{ accountNumber }}</p>
          </div>
        </div>
        <div class="button-group">
          <button @click="submitPurchase" class="button">ご注文を確定する</button>
          <button @click="showConfirmation = false" class="button-cancel">戻る</button>
        </div>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ec-container {
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

.product-selection {
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

.selection-description {
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

.product-image {
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
}

.product-image img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

.purchase-form {
  background: linear-gradient(to bottom, #fff, #faf7f7);
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
}

.input-field {
  width: 100%;
  padding: 12px 15px;
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

.payment-details {
  margin-top: 20px;
  padding: 20px;
  background-color: #fdfafa;
  border: 1px solid #e9e1e1;
  border-radius: 8px;
}

.payment-details h3 {
  font-family: "Yu Mincho", "游明朝", YuMincho, serif;
  font-size: 1.2rem;
  color: #4a4a4a;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9e1e1;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-group.half {
  flex: 1;
}

.button-group {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.button {
  background-color: #d4b5b5;
  color: white;
  border: none;
  padding: 12px 30px;
  margin: 0 10px;
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
  margin: 0 10px;
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

h3 {
  font-family: "Yu Mincho", "游明朝", YuMincho, serif;
  font-size: 1.2rem;
  color: #4a4a4a;
  margin: 20px 0 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9e1e1;
}

.confirmation-product, .confirmation-details {
  margin-bottom: 20px;
}

.payment-confirmation {
  margin-top: 20px;
  padding: 15px;
  background-color: #fff;
  border: 1px solid #e9e1e1;
  border-radius: 8px;
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

@media (max-width: 768px) {
  .ec-container {
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 20px auto;
  }

  .product-info, .purchase-form {
    padding: 30px 20px;
  }

  h2 {
    font-size: 1.5rem;
  }

  .selected-product h3 {
    font-size: 1.2rem;
  }

  .form-row {
    flex-direction: column;
    gap: 0;
  }

  .button-group {
    flex-direction: column;
    align-items: center;
  }

  .button, .button-cancel {
    margin: 10px 0;
    width: 100%;
    max-width: 300px;
  }
}
</style>