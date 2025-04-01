<script setup lang="ts"></script>

<template>
  <div class="preserved-flower-guide">

    <section class="description">
      <div class="content-wrapper">
        <div class="text-content">
            <div class="hero-content">
        <h1 class="elegant-title">about Preserved Flower</h1>
        <h2 class="japanese-title">プリザーブドフラワーとは</h2>
      </div>
          <p class="main-text">
            「プリザーブド」とは「保存」という意味です。<br>
            プリザーブドフラワーは生花の繊細な美しさを保ちながら、<br>
            特殊な加工法によって、永遠の輝きを纏った特別なお花です。
          </p>
        </div>
        <div class="description-image">
          <img src="@/assets/img/Story01.png" alt="プリザーブドフラワーの青いバラ" />
        </div>
      </div>
    </section>

    <section class="features-grid">
      <div class="feature-card">
        <h3>長期間</h3>
        <p>2〜3年以上の長期間、変わらない美しさを保ちます。<br>
           生花より長く、ドライフラワーより美しく観賞できます。</p>
      </div>

      <div class="feature-card">
        <h3>簡単</h3>
        <p>水やりなどの世話は一切必要ありません。<br>
           直射日光や湿気を避けていただくだけで、<br>
           長くお楽しみいただけます。</p>
      </div>

      <div class="feature-card">
        <h3>安心</h3>
        <p>オーガニック系の薬液を使用し、<br>
           お手入れが簡単で安全なお花です。<br>
           ペットのいるご家庭でも安心してお飾りいただけます。</p>
      </div>

      <div class="feature-card">
        <h3>飾り方</h3>
        <p>ガラスケースに入れたままでも、<br>
           そのまま飾っても優雅な空間を演出します。<br>
           お好みの場所でお楽しみください。</p>
      </div>
    </section>

    <section class="gift-suggestion">
      <h3>大切な方への贈り物に</h3>
      <p>
        記念日や特別な日に、変わらない美しさを込めて。<br>
        お母様やお義母様、親しい方への贈り物として、<br>
        心からの感謝の気持ちをお伝えください。
      </p>
    </section>
  </div>
</template>

<style scoped>
.preserved-flower-guide {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Yu Mincho", "游明朝", YuMincho, serif;
  color: #333;
}

.elegant-title {
  font-size: 2.5rem;
  font-weight: 300;
  font-style: italic;
  margin-bottom: 1rem;
  color: #555;
}

.japanese-title {
  font-size: 1.8rem;
  margin-bottom: 3rem;
  color: #666;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  margin-bottom: 4rem;
}

.hero-content {
  flex: 1;
}

.hero-image {
  flex: 1;
  max-width: 500px;
}

.hero-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.description {
  margin: 3rem 0;
  line-height: 2;
}

.description .content-wrapper {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.text-content {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-content .main-text {
  max-width: 80%;
  margin: 0 auto;
}

.description-image {
  flex: 1;
  max-width: 500px;
}

.description-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
}

.feature-card {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #eee;
  border-radius: 8px;
}

.feature-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #555;
}

.gift-suggestion {
  text-align: center;
  margin: 4rem 0;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #eee;
}

.gift-suggestion h3 {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  color: #555;
}

@media (max-width: 968px) {
  .hero,
  .description .content-wrapper {
    flex-direction: column;
    gap: 2rem;
  }

  .hero-image,
  .description-image {
    max-width: 100%;
  }
}
</style>
