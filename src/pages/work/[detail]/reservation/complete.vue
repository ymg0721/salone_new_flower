<script setup lang="ts">
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import { useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const productId = route.params.detail as string

// セッションストレージから予約情報を取得
const reservationData = ref<any>(null)

onMounted(() => {
  const storedData = sessionStorage.getItem('reservationData')
  if (storedData) {
    reservationData.value = JSON.parse(storedData)
  } else {
    // データがない場合は予約ページに戻る
    router.push(`/work/${productId}/reservation`)
  }
})

// ホームに戻る
const goToHome = () => {
  router.push('/')
}

// 予約一覧に戻る
const goToReservations = () => {
  router.push(`/work/${productId}/reservation`)
}
</script>

<template>
  <div class="complete-container">
    <div class="complete-card">
      <div class="complete-header">
        <div class="check-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <h1>ご予約ありがとうございます</h1>
        <p class="subtitle">予約が完了しました</p>
      </div>

      <div v-if="reservationData" class="reservation-details">
        <div class="detail-section">
          <h2>予約内容</h2>
          <div class="detail-item">
            <span class="label">お名前</span>
            <span class="value">{{ reservationData.name }}</span>
          </div>
          <div class="detail-item">
            <span class="label">メールアドレス</span>
            <span class="value">{{ reservationData.email }}</span>
          </div>
          <div class="detail-item">
            <span class="label">電話番号</span>
            <span class="value">{{ reservationData.phone }}</span>
          </div>
          <div class="detail-item">
            <span class="label">予約日</span>
            <span class="value">{{ dayjs(reservationData.date).format('YYYY年MM月DD日') }}</span>
          </div>
        </div>

        <div class="detail-section">
          <h2>{{ reservationData.isLesson ? 'レッスン内容' : '商品内容' }}</h2>
          <div class="product-card">
            <h3>{{ reservationData.product.name }}</h3>
            <div class="product-info">
              <p class="type">{{ reservationData.product.type }}</p>
              <p class="price">¥{{ reservationData.product.price.toLocaleString() }}</p>
              <p class="size">{{ reservationData.product.size }}</p>
            </div>
          </div>
        </div>

        <div class="message-box">
          <p>ご予約ありがとうございます。予約内容の確認メールをお送りしましたので、ご確認ください。</p>
          <p v-if="reservationData.isLesson">レッスン当日は、お気をつけてお越しください。</p>
          <p v-else>商品は予約日にお受け取りいただけます。</p>
        </div>

        <div class="action-buttons">
          <button @click="goToHome" class="button home">ホームに戻る</button>
          <button @click="goToReservations" class="button reservation">予約一覧へ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.complete-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 40px 20px;
  background-color: #faf7f7;
}

.complete-card {
  max-width: 800px;
  width: 100%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 50px 40px;
  text-align: center;
}

.complete-header {
  margin-bottom: 40px;
}

.check-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background-color: #d4b5b5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.check-icon svg {
  width: 40px;
  height: 40px;
}

h1 {
  font-family: "Yu Mincho", "游明朝", YuMincho, serif;
  font-size: 2rem;
  color: #4a4a4a;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.1rem;
  color: #888;
  margin-bottom: 30px;
}

.reservation-details {
  text-align: left;
}

.detail-section {
  margin-bottom: 40px;
  padding: 30px;
  background-color: #fdfafa;
  border-radius: 12px;
  border: 1px solid #f0e6e6;
}

.detail-section h2 {
  font-family: "Yu Mincho", "游明朝", YuMincho, serif;
  font-size: 1.4rem;
  color: #4a4a4a;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 1px;
}

.detail-item {
  display: flex;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f0e6e6;
}

.detail-item:last-child {
  border-bottom: none;
}

.label {
  width: 120px;
  color: #888;
  font-size: 0.95rem;
}

.value {
  flex: 1;
  color: #4a4a4a;
  font-size: 1rem;
}

.product-card {
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  border: 1px solid #e9e1e1;
}

.product-card h3 {
  font-family: "Yu Mincho", "游明朝", YuMincho, serif;
  font-size: 1.3rem;
  color: #4a4a4a;
  margin-bottom: 15px;
  text-align: center;
}

.product-info p {
  margin: 10px 0;
  padding: 8px 0;
  border-bottom: 1px solid #f0e6e6;
}

.product-info .type {
  color: #8f7676;
  font-weight: 500;
}

.product-info .price {
  font-size: 1.2rem;
  color: #d4b5b5;
}

.message-box {
  background-color: #f9f5f5;
  padding: 25px;
  border-radius: 8px;
  margin: 30px 0;
  text-align: center;
  color: #666;
  line-height: 1.8;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.button {
  padding: 12px 30px;
  border-radius: 6px;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button.home {
  background-color: #d4b5b5;
  color: white;
  border: none;
}

.button.reservation {
  background-color: transparent;
  color: #888;
  border: 1px solid #e0e0e0;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .complete-card {
    padding: 30px 20px;
  }

  h1 {
    font-size: 1.6rem;
  }

  .detail-section {
    padding: 20px;
  }

  .detail-item {
    flex-direction: column;
  }

  .label {
    width: 100%;
    margin-bottom: 5px;
  }

  .action-buttons {
    flex-direction: column;
  }
}
</style>
