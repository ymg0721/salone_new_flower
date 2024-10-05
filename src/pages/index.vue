<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const mainVisualAnime = gsap.timeline({
    scrollTrigger: {
      trigger: ".js-mvTrigger", // アニメーションが始まるトリガーとなる要素
      start: "top 80%", // アニメーションが始まる位置を指定
      // markers: true, // マーカー表示（開発用）
    },
  });

  mainVisualAnime.fromTo(
    ".js-mvLogo",
    {
      // アニメーション前
      y: 10, // アニメーション開始前の位置
      autoAlpha: 0, // アニメーション開始前の状態
    },
    {
      // アニメーション後
      y: 0, // アニメーション後の位置
      autoAlpha: 1, // アニメーション後の状態
      duration: 1, // 1秒かけてアニメーションを実行
      delay: 0.5,
    },
  );

  mainVisualAnime.fromTo(
    ".js-mvLogo02",
    {
      // アニメーション前
      y: 10, // アニメーション開始前の位置
      autoAlpha: 0, // アニメーション開始前の状態
    },
    {
      // アニメーション後
      y: 0, // アニメーション後の位置
      autoAlpha: 1, // アニメーション後の状態
      duration: 1, // 1秒かけてアニメーションを実行
      delay: 0.5,
    },
  );


  mainVisualAnime.fromTo(
    ".js-mvLogo03",
    {
      // アニメーション前
      y: 10, // アニメーション開始前の位置
      autoAlpha: 0, // アニメーション開始前の状態
    },
    {
      // アニメーション後
      y: 0, // アニメーション後の位置
      autoAlpha: 1, // アニメーション後の状態
      duration: 1, // 1秒かけてアニメーションを実行
      delay: 0.5,
    },
  );


  mainVisualAnime.fromTo(
    ".js-mvLogo04",
    {
      // アニメーション前
      y: 10, // アニメーション開始前の位置
      autoAlpha: 0, // アニメーション開始前の状態
    },
    {
      // アニメーション後
      y: 0, // アニメーション後の位置
      autoAlpha: 1, // アニメーション後の状態
      duration: 1, // 1秒かけてアニメーションを実行
      delay: 0.5,
    },
  );


  mainVisualAnime.fromTo(
    ".js-mvLogo05",
    {
      // アニメーション前
      y: 10, // アニメーション開始前の位置
      autoAlpha: 0, // アニメーション開始前の状態
    },
    {
      // アニメーション後
      y: 0, // アニメーション後の位置
      autoAlpha: 1, // アニメーション後の状態
      duration: 1, // 1秒かけてアニメーションを実行
      delay: 0.5,
    },
  );

  mainVisualAnime.fromTo(
    ".js-mvLogo06",
    {
      // アニメーション前
      y: 10, // アニメーション開始前の位置
      autoAlpha: 0, // アニメーション開始前の状態
    },
    {
      // アニメーション後
      y: 0, // アニメーション後の位置
      autoAlpha: 1, // アニメーション後の状態
      duration: 1, // 1秒かけてアニメーションを実行
      delay: 0.5,
    },
  );

  mainVisualAnime.fromTo(
    ".js-mvLogo07",
    {
      // アニメーション前
      y: 10, // アニメーション開始前の位置
      autoAlpha: 0, // アニメーション開始前の状態
    },
    {
      // アニメーション後
      y: 0, // アニメーション後の位置
      autoAlpha: 1, // アニメーション後の状態
      duration: 1, // 1秒かけてアニメーションを実行
      delay: 0.5,
    },
  );
});
</script>

<template>
  <div class="js-mvTrigger">
    <img
      class="js-mvLogo"
      src="@/assets/img/test.jpg"
      alt="heder-01"
      style="margin: 0 auto; display: flex; height: 700px"
    />
    <h1 class="h1-style js-mvLogo">
      Venere Emi Flower Salone
    </h1>
    <h3  style="justify-content: center; display: flex; font-weight: 500;" class="js-mvLogo">flower studio</h3>
    <div class="section-header js-mvLogo">STORIES</div>


    <div style="display: flex; justify-content: space-evenly; align-items: center;">
      <NuxtLink to="/preserved" style="color: #302E2E;">
        <img
          class="col01 js-mvLogo"
          src="@/assets/img/Story05.png"
          alt="heder-01"
        />
        <h2 style="text-align: center;" class="js-mvLogo02">Preserved</h2>
        <h3 style="text-align: center;" class="js-mvLogo02">this is test</h3>
        <p style="text-align: center;" class="js-mvLogo02">test description</p>
      </NuxtLink>

      <NuxtLink to="/artificial" style="color: #302E2E;">
        <img
          class="col01 js-mvLogo"
          src="@/assets/img/Story02.png"
          alt="heder-01"
        />
        <h2 style="text-align: center;" class="js-mvLogo02">Artificial</h2>
        <h3 style="text-align: center;" class="js-mvLogo02">this is test</h3>
        <p style="text-align: center;" class="js-mvLogo02">test description</p>
      </NuxtLink>

      <NuxtLink to="/lesson" style="color: #302E2E;">
        <img
          class="col01 js-mvLogo"
          src="@/assets/img/Story04.png"
          alt="heder-01"
        />
        <h2 style="text-align: center;" class="js-mvLogo02">Lesson</h2>
        <h3 style="text-align: center;" class="js-mvLogo02">this is test</h3>
        <p style="text-align: center;" class="js-mvLogo02">test description</p>
      </NuxtLink>
    </div>

    <div class="section-header js-mvLogo03">PAMPHLET</div>

    <div style="display: flex; justify-content: space-evenly; align-items: center;">
      <NuxtLink to="/circlebox" style="color: #302E2E;">
        <img
          class="col02 js-mvLogo04"
          src="@/assets/img/Story01.png"
          alt="heder-01"
        />
        <h2 style="text-align: center;" class="js-mvLogo04">CircleBox</h2>
        <h3 style="text-align: center;" class="js-mvLogo04">this is test</h3>
        <p style="text-align: center;" class="js-mvLogo04">test description</p>
      </NuxtLink>

      <NuxtLink to="/square" style="color: #302E2E;">
        <img
          class="col02 js-mvLogo04"
          src="@/assets/img/Story06.png"
          alt="heder-01"
        />
        <h2 style="text-align: center;" class="js-mvLogo04">Square</h2>
        <h3 style="text-align: center;" class="js-mvLogo04">this is test</h3>
        <p style="text-align: center;" class="js-mvLogo04">test description</p>
      </NuxtLink>

      <NuxtLink to="/ceremony" style="color: #302E2E;">
        <img
          class="col02 js-mvLogo04"
          src="@/assets/img/Story07.png"
          alt="heder-01"
        />
        <h2 style="text-align: center;" class="js-mvLogo04">Ceremony</h2>
        <h3 style="text-align: center;" class="js-mvLogo04">this is test</h3>
        <p style="text-align: center;" class="js-mvLogo04">test description</p>
      </NuxtLink>
    </div>

    <div style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 5vw;" >
      <NuxtLink to="/glass" style="color: #302E2E;">
        <img
          class="col02 js-mvLogo05"
          src="@/assets/img/Story08.png"
          alt="heder-01"
        />
        <h2 style="text-align: center;" class="js-mvLogo06">Glass</h2>
        <h3 style="text-align: center;" class="js-mvLogo06">this is test</h3>
        <p style="text-align: center;" class="js-mvLogo06">test description</p>
      </NuxtLink>

      <NuxtLink to="/funel" style="color: #302E2E;">
        <img
          class="col02 js-mvLogo05"
          src="@/assets/img/Story09.png"
          alt="heder-01"
        />
        <h2 style="text-align: center;" class="js-mvLogo06">Funel</h2>
        <h3 style="text-align: center;" class="js-mvLogo06">this is test</h3>
        <p style="text-align: center;" class="js-mvLogo06">test description</p>
      </NuxtLink>

      <NuxtLink to="/chrismas" style="color: #302E2E;">
        <img
          class="col02 js-mvLogo05"
          src="@/assets/img/Story10.png"
          alt="heder-01"
        />
        <h2 style="text-align: center;" class="js-mvLogo06">Chrismas</h2>
        <h3 style="text-align: center;" class="js-mvLogo06">this is test</h3>
        <p style="text-align: center;" class="js-mvLogo06">test description</p>
      </NuxtLink>
    </div>


    <div class="section-header js-mvLogo07">ABOUT | CONTACT</div>

    <div style="display: flex; justify-content: space-evenly; align-items: center; margin-top: 5vw; margin-bottom: 5vw;" >
      <NuxtLink to="/about" style="color: #302E2E;">
        <img
          class="col02 js-mvLogo05"
          src="@/assets/img/test03.png"
          alt="heder-01"
        />
        <h2 style="text-align: center;" class="js-mvLogo06">Venere Emi について</h2>
        <h3 style="text-align: center;" class="js-mvLogo06">this is test</h3>
        <p style="text-align: center;" class="js-mvLogo06">test description</p>
      </NuxtLink>
      <NuxtLink to="/words" style="color: #302E2E;">
        <img
          class="col02 js-mvLogo05"
          src="@/assets/img/test02.png"
          alt="heder-01"
        />
        <h2 style="text-align: center;" class="js-mvLogo06">お花の用語</h2>
        <h3 style="text-align: center;" class="js-mvLogo06">this is test</h3>
        <p style="text-align: center;" class="js-mvLogo06">test description</p>
      </NuxtLink>

      <NuxtLink to="/contact" style="color: #302E2E;">
        <img
          class="col02 js-mvLogo05"
          src="@/assets/img/test01.png"
          alt="heder-01"
        />
        <h2 style="text-align: center;" class="js-mvLogo06">お問い合わせ</h2>
        <h3 style="text-align: center;" class="js-mvLogo06">this is test</h3>
        <p style="text-align: center;" class="js-mvLogo06">test description</p>
      </NuxtLink>
    </div>

  </div>
</template>

<style scoped lang="scss">
.col01 {
  max-width: 300px; /* 最大幅を設定して、画像が大きくなりすぎないようにする */
height: 350px;
transition: transform 0.3s ease, opacity 0.3s ease;

&:hover {
    transform: scale(1.05); // 1.05倍に拡大
    opacity: 0.8; // 少し透明に
  }
}

.col02 {
  max-width: 300px; /* 最大幅を設定して、画像が大きくなりすぎないようにする */
  height: 340px; /* 高さは自動で調整 */
  transition: transform 0.3s ease, opacity 0.3s ease;

&:hover {
    transform: scale(1.05); // 1.05倍に拡大
    opacity: 0.8; // 少し透明に
  }
}

.h1-style {
  font-family: serif;
  justify-content: center;
  display: flex;
  font-size: 4.5vw;
}

.section-header {
    font-size: 18px;
    font-weight: 400;
    font-style: italic;
    letter-spacing: 0.1em;
    border-bottom: 1px solid #cccccc;
    border-top: 1px solid #cccccc;
    margin-bottom: 60px;
    margin-left: 15vw;
    margin-right: 15vw;
    text-align: center;
    margin-top: 6vw;
    padding-right: 0px;
    padding-left: 0px;
    padding-top: 30px;
    padding-bottom: 30px;
}
</style>
