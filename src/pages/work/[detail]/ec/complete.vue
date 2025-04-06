<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { usePagesData } from '~/composables/usePagesData'

const route = useRoute()
const router = useRouter()
const productId = route.params.detail as string
const { getImagePath } = usePagesData()

// セッションストレージから購入情報を取得
const purchaseData = ref<any>(null)
const productImage = ref('')

onMounted(() => {
  const storedData = sessionStorage.getItem('purchaseData')
  if (storedData) {
    purchaseData.value = JSON.parse(storedData)
    if (purchaseData.value && purchaseData.value.product) {
      productImage.value = getImagePath(purchaseData.value.product.id)
    }
  }
})

// トップページに戻る
const goToTop = () => {
  router.push('/')
}

// 商品一覧に戻る
const goToProducts = () => {
  router.push('/work')
}

// 支払い方法の表示名を取得
const getPaymentMethodName = (method: string) => {
  switch (method) {
    case 'credit':
      return 'クレジットカード'
    case 'bank':
      return '銀行振込'
    case 'cod':
      return '代金引換'
    default:
      return method
  }
}
</script>

<template>
  <div class="complete-container">
    <div class="complete-content">
      <div class="complete-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      
      <h1>ご購入ありがとうございます</h1>
      
      <div class="complete-message">
        <p>ご注文いただいた商品は、ご登録いただいた住所へお届けいたします。</p>
        <p>ご登録いただいたメールアドレスに確認メールをお送りしましたので、ご確認ください。</p>
      </div>
      
      <div v-if="purchaseData" class="purchase-summary">
        <div class="product-summary">
          <div class="product-image">
            <img :src="productImage" :alt="purchaseData.product.name" />
          </div>
          <div class="product-info">
            <h3>{{ purchaseData.product.name }}</h3>
            <p class="type">{{ purchaseData.product.type }}</p>
            <p class="price">¥{{ purchaseData.product.price.toLocaleString() }}</p>
          </div>
        </div>
        
        <div class="delivery-info">
          <h3>お届け先情報</h3>
          <p>{{ purchaseData.name }} 様</p>
          <p>〒{{ purchaseData.postalCode }}</p>
          <p>{{ purchaseData.city }} {{ purchaseData.address }}</p>
          <p>TEL: {{ purchaseData.phone }}</p>
        </div>
        
        <div class="payment-info">
          <h3>お支払い情報</h3>
          <p>お支払い方法: {{ getPaymentMethodName(purchaseData.paymentMethod) }}</p>
          
          <!-- クレジットカード情報 -->
          <div v-if="purchaseData.paymentMethod === 'credit' && purchaseData.paymentDetails" class="payment-details">
            <p>カード番号: {{ purchaseData.paymentDetails.cardNumber }}</p>
            <p>カード名義人: {{ purchaseData.paymentDetails.cardName }}</p>
            <p>有効期限: {{ purchaseData.paymentDetails.cardExpiry }}</p>
          </div>
          
          <!-- 銀行振込情報 -->
          <div v-if="purchaseData.paymentMethod === 'bank' && purchaseData.paymentDetails" class="payment-details">
            <p>銀行名: {{ purchaseData.paymentDetails.bankName }}</p>
            <p>口座名義: {{ purchaseData.paymentDetails.accountHolder }}</p>
            <p>口座番号: {{ purchaseData.paymentDetails.accountNumber }}</p>
          </div>
        </div>
      </div>
      
      <div class="button-group">
        <button @click="goToTop" class="button">トップページへ</button>
        <button @click="goToProducts" class="button-secondary">商品一覧へ</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.complete-container {
  max-width: 800px;
  margin: 5% auto;
  padding: 40px 20px;
}

.complete-content {
  background: linear-gradient(to bottom, #fff, #faf7f7);
  padding: 50px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.complete-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 30px;
  color: #d4b5b5;
  animation: scaleIn 0.5s ease-out;
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

h1 {
  font-family: "Yu Mincho", "游明朝", YuMincho, serif;
  font-weight: 400;
  color: #4a4a4a;
  font-size: 1.8rem;
  line-height: 1.4;
  margin-bottom: 30px;
  letter-spacing: 2px;
}

.complete-message {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 40px;
}

.purchase-summary {
  background-color: #fff;
  border: 1px solid #e9e1e1;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 40px;
  text-align: left;
}

.product-summary {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0e6e6;
}

.product-image {
  width: 120px;
  height: 120px;
  margin-right: 20px;
  flex-shrink: 0;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.product-info h3 {
  font-family: "Yu Mincho", "游明朝", YuMincho, serif;
  font-size: 1.3rem;
  color: #4a4a4a;
  margin-bottom: 10px;
  text-align: left;
}

.type {
  color: #8f7676;
  font-weight: 500;
  margin-bottom: 10px;
}

.price {
  font-size: 1.3rem;
  color: #d4b5b5;
  font-weight: 500;
}

.delivery-info, .payment-info {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0e6e6;
}

.delivery-info h3, .payment-info h3 {
  font-family: "Yu Mincho", "游明朝", YuMincho, serif;
  font-size: 1.2rem;
  color: #4a4a4a;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9e1e1;
}

.delivery-info p, .payment-info p {
  color: #666;
  margin: 8px 0;
  font-size: 1rem;
}

.payment-details {
  margin-top: 10px;
  padding: 10px;
  background-color: #fdfafa;
  border: 1px solid #e9e1e1;
  border-radius: 6px;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.button {
  background-color: #d4b5b5;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.button-secondary {
  background-color: transparent;
  color: #888;
  border: 1px solid #e0e0e0;
  padding: 12px 30px;
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

.button-secondary:hover {
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  .complete-container {
    margin: 20px auto;
  }
  
  .complete-content {
    padding: 30px 20px;
  }
  
  h1 {
    font-size: 1.5rem;
  }
  
  .product-summary {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .product-image {
    margin-right: 0;
    margin-bottom: 20px;
  }
  
  .product-info h3 {
    text-align: center;
  }
  
  .button-group {
    flex-direction: column;
    gap: 10px;
  }
  
  .button, .button-secondary {
    width: 100%;
  }
}
</style>