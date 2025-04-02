<template>
  <div class="interior-page">
    <!-- ヒーローセクション -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="fade-in">Luxury</span>
          <span class="fade-in delay-1">Interior Design</span>
        </h1>
        <p class="hero-subtitle fade-in delay-2">
          上質な暮らしを デザインする
        </p>
      </div>
    </section>

    <!-- コンセプトセクション -->
    <section class="concept">
      <h2 class="section-title">空間を華やかに。</h2>
      <p class="concept-text">
        生花のアレンジメント教室も毎月開催しております。<br>
        プリザーブドフラワーやアーティシャルフラワーのご注文も随時承ります。
      </p>
    </section>

    <!-- ギャラリーセクション -->
    <section class="gallery">
      <div class="gallery-grid">
        <img src="@/assets/img/interior/01.png" alt="モダンなリビング">
        <img src="@/assets/img/interior/02.png" alt="高級キッチン">
        <img src="@/assets/img/interior/03.png" alt="洗面所">
      </div>
    </section>

    <!-- お問い合わせセクション -->
    <section class="contact-section">
      <h2 class="section-title">新しいお住まいのインテリアや空間作りを<br>考える時に、一番大切にしたいことは何ですか？</h2>
      <p class="contact-text">
        完成した空間をどのように彩るか、家そのものの造りばかりに気を取られてインテリアまで回らない、<br>
        また購入した家具がうまく配置できないなどお客様の悩みやニーズを深く理解してできる限りお役に立ちたいと思っています。
      </p>
      <router-link to="/contact" class="contact-button">
        お気軽にご相談ください
      </router-link>
    </section>
  </div>
</template>

<style scoped>
.interior-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.hero {
  height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.02);
}

.hero-content {
  padding: 0 4rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: 0.2em;
  color: #333;
  margin-bottom: 1.5rem;
}

.hero-title span {
  display: block;
}

.hero-subtitle {
  font-size: 1.2rem;
  letter-spacing: 0.15em;
  color: #666;
}

/* アニメーション */
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

.delay-1 {
  animation-delay: 0.3s;
}

.delay-2 {
  animation-delay: 0.6s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin: 4rem 0 2rem;
}

.concept {
  padding: 4rem 0;
  text-align: center;
}

.concept-text {
  line-height: 2;
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.gallery-grid img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
}

.contact-section {
  text-align: center;
  padding: 4rem 0;
  background-color: #f9f9f9;
  margin: 4rem 0;
  border-radius: 12px;
}

.contact-text {
  line-height: 2;
  margin-bottom: 2rem;
}

.contact-button {
  display: inline-block;
  padding: 1rem 3rem;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.contact-button:hover {
  background-color: #555;
  transform: translateY(-2px);
}
</style>
