<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { usePagesData } from '~/composables/usePagesData'
import { loadStripe } from '@stripe/stripe-js'

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

// Stripe設定
const stripePublicKey = 'pk_test_51RAnD5QxwF5vz9ajkRilxDJoqekzJQF3JaxzXL28pc72NmxRYDQqnUEb2vKvIhYtQ00ThPLsIPhrwtGbJxM5e0hA009L6dKiEN';
let stripe: any = null;

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

onMounted(async () => {
  stripe = await loadStripe(stripePublicKey);
  
  // URLのパラメータに商品IDがある場合
  if (productId && productId !== 'select') {
    selectedProduct.value = products.value.find(p => p.id === productId) || null
    if (selectedProduct.value) {
      productImage.value = getImagePath(selectedProduct.value.id)
    }
  }
});

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
  
  return true;
};

// 商品IDからStripeの価格IDを取得する関数
const getStripePriceId = (productId: string): string => {
  // 商品IDとStripeの価格IDのマッピング
  const priceIdMap: Record<string, string> = {
    // 2101-2110
    '2101': 'price_1RB4rqQxwF5vz9aj7PwboYyE',
    '2102': 'price_1RB4sMQxwF5vz9ajmDvwcdD2',
    '2103': 'price_1RB4t0QxwF5vz9ajZ14rXgaT',
    '2104': 'price_1RB4tNQxwF5vz9ajC9u1yIdt',
    '2105': 'price_1RB4tjQxwF5vz9ajiQ4tTg81',
    '2106': 'price_1RAp0qQxwF5vz9ajx6iOJZmF',
    '2107': 'price_1RB4utQxwF5vz9ajccnKvhBO',
    '2108': 'price_1RB4vGQxwF5vz9ajcZRhQ6Q6',
    '2109': 'price_1RB4vbQxwF5vz9ajcKR8P88n',
    '2110': 'price_1RB4vvQxwF5vz9aj1va7Q1HW',

    // 2111-2120
    '2111': 'price_1RB4wQQxwF5vz9ajkmyyKHXT',
    '2112': 'price_1RB4wmQxwF5vz9aj7XE4PFyX',
    '2113': 'price_1RB4x9QxwF5vz9ajzLHv9Qsu',
    '2114': 'price_1RB4xeQxwF5vz9ajwxSahnOE',
    '2115': 'price_1RB50dQxwF5vz9ajJYHozV9d',
    '2116': 'price_1RB511QxwF5vz9ajTgHiFY4s',
    '2117': 'price_1RB51UQxwF5vz9aj7VrKvtrN',
    '2118': 'price_1RB51rQxwF5vz9ajsNgb9Bfc',
    '2119': 'price_1RB52QQxwF5vz9aj74NIMp0Y',
    '2120': 'price_1RB52qQxwF5vz9ajgzRGcSXz',

    // 2121-2130
    '2121': 'price_1RB53EQxwF5vz9ajtZFFAqqV',
    '2122': 'price_1RB5F3QxwF5vz9aj85FFcGdd',
    '2123': 'price_1RB5FJQxwF5vz9ajF64QyPVL',
    '2124': 'price_1RB5GEQxwF5vz9ajye4U9qAX',
    '2125': 'price_1RB5GbQxwF5vz9ajOAfVt4Bz',
    '2126': 'price_1RB5H5QxwF5vz9ajau2lQdgn',
    '2127': 'price_1RB5HXQxwF5vz9ajhNE8CHIg',
    '2128': 'price_1RB5HtQxwF5vz9ajOqVFZsw5',
    '2129': 'price_1RB5IFQxwF5vz9aj8fWAnoOA',
    '2130': 'price_1RB5IaQxwF5vz9ajsRHyxMeA',

    // 2131-2140
    '2131': 'price_1RB5IzQxwF5vz9aj2SPYBOG8',
    '2132': 'price_1RB5JNQxwF5vz9aj5hcr8UH4',
    '2133': 'price_1RB5JtQxwF5vz9ajMPZ3LPZK',
    '2134': 'price_1RB5KHQxwF5vz9ajldtLaLPv',
    '2135': 'price_1RB5KhQxwF5vz9ajIffUZcAE',
    '2136': 'price_1RB5L6QxwF5vz9aj6EAugvWb',
    '2137': 'price_1RB5LVQxwF5vz9ajuwojlkHb',
    '2138': 'price_1RB5LrQxwF5vz9ajqCV4xvVd',
    '2139': 'price_1RB5MCQxwF5vz9ajj9olAZfM',
    '2140': 'price_1RB5MVQxwF5vz9ajaAYk6H6w',

    // 2141-2151
    '2141': 'price_1RB5MtQxwF5vz9ajSGTql4mj',
    '2142': 'price_1RB5NIQxwF5vz9ajbHW6rZv4',
    '2143': 'price_1RB5NdQxwF5vz9ajDGraY9Id',
    '2144': 'price_1RB5NxQxwF5vz9ajCr7UlLyQ',
    '2145': 'price_1RB5ONQxwF5vz9ajsg3ceYlp',
    '2146': 'price_1RB5OnQxwF5vz9ajKauTLO7S',
    '2149': 'price_1RB5QqQxwF5vz9aj2TfgO98V',
    '2150': 'price_1RB5REQxwF5vz9aj1oOhRJOG',
    '2151': 'price_1RB5RfQxwF5vz9ajy1viWz9s',
  };
  
  const priceId = priceIdMap[productId] || '';
  return priceId;
};

// 購入処理
const submitPurchase = async () => {
  successMessage.value = '';
  errorMessage.value = '';
  
  if (!validateFields()) {
    return;
  }

  if (!selectedProduct.value) {
    errorMessage.value = '商品が選択されていません。';
    return;
  }

  try {
    // Stripeの決済フローを開始
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: getStripePriceId(selectedProduct.value.id),
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `${window.location.origin}/work/${productId}/ec/complete?name=${encodeURIComponent(name.value)}&email=${encodeURIComponent(email.value)}&phone=${encodeURIComponent(phone.value)}&address=${encodeURIComponent(`${city.value} ${address.value}`)}&postalCode=${encodeURIComponent(postalCode.value)}&productName=${encodeURIComponent(selectedProduct.value.name)}&productType=${encodeURIComponent(selectedProduct.value.type)}&productSize=${encodeURIComponent(selectedProduct.value.size)}`,
      cancelUrl: `${window.location.origin}/work/${productId}/ec`,
      customerEmail: email.value,
      billingAddressCollection: 'required',
      shippingAddressCollection: {
        allowedCountries: ['JP'],
      },
    });

    if (error) {
      errorMessage.value = '決済ページへの遷移に失敗しました。';
      console.error('Stripe error:', error);
    }
  } catch (error) {
    errorMessage.value = 'エラーが発生しました。時間をおいて再度お試しください。';
    console.error('Error:', error);
  }
};

// キャンセル処理
const cancel = () => {
  router.back()
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
        </div>
        <div class="button-group">
          <button @click="submitPurchase" class="button">決済画面へ</button>
          <button @click="showConfirmation = false" class="button-cancel">戻る</button>
        </div>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
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