<script setup lang="ts">
useHead({
  title: 'About | Venere Emi',
  meta: [
    {
      name: 'description',
      content: 'Venere Emiは花の世界とインテリアを総合的にプロデュースするカンパニーです。',
    },
  ],
});
</script>

<template>
  <div class="about-container">
    <section class="introduce-section">
      <div class="content-wrapper">
        <div class="text-content">
          <h1 class="main-title">Introduce</h1>
          <h2 class="sub-title">Venere Emi</h2>
          <p class="description">
            Venere Emiは花の世界とインテリアを<br>
            総合的にプロデュースするカンパニーです。<br><br>
            プリザーブドフラワーの販売開始より、洗練された<br>
            大人のスタイルを築いてきました。<br>
            また生花のようにフレッシュにアレンジした<br>
            アーティフィシャルフラワーのアレンジも多数<br>
            取り扱っております。<br><br>
            ギャラリーのオーダーメイドで空間をより豊かに<br>
            演出しませんか？
          </p>
        </div>
      </div>
    </section>

    <section class="designer-section">
      <h2 class="section-title">TOP DESIGNER</h2>
      <div class="designer-content">
        <img src="@/assets/img/test03.png" alt="Top Designer" class="designer-image">
        <p class="designer-name">間野 衣美子</p>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.about-container {
  width: 100%;
  margin: 0 auto;
  padding: 120px 0;
  background-color: #fdfbf9;
  display: flex;
}

.introduce-section {
  position: relative;
  margin-bottom: 200px;
  
  .content-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 120px;
  }

  .text-content {
    max-width: 600px;
  }
}

.main-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 64px;
  color: #333333;
  margin-bottom: 32px;
  font-weight: 300;
  letter-spacing: 0.05em;
}

.sub-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 36px;
  color: #666666;
  margin-bottom: 60px;
  font-weight: 300;
  letter-spacing: 0.03em;
}

.description {
  font-family: 'Noto Serif JP', serif;
  font-size: 15px;
  line-height: 2.2;
  color: #555555;
  letter-spacing: 0.02em;
}

.designer-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 120px;
}

.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 36px;
  color: #333333;
  margin-bottom: 80px;
  text-align: center;
  position: relative;
  letter-spacing: 0.1em;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 1px;
    background-color: #C0A980;
  }
}

.designer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  position: relative;
}

.designer-image {
  width: 100%;
  max-width: 480px;
  height: auto;
  object-fit: cover;
}

.designer-name {
  font-family: 'Noto Serif JP', serif;
  font-size: 18px;
  color: #333333;
  letter-spacing: 0.1em;
  margin-top: 32px;
  font-weight: 400;
  position: relative;
  padding-top: 24px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 1px;
    background-color: #C0A980;
  }
}

@media (max-width: 768px) {
  .about-container {
    padding: 80px 0;
  }

  .introduce-section {
    .content-wrapper {
      padding: 0 24px;
    }
  }

  .designer-section {
    padding: 0 24px;
  }

  .main-title {
    font-size: 48px;
  }

  .sub-title {
    font-size: 28px;
  }
}
</style>
