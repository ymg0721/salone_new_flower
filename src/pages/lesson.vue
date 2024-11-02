<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const router = useRouter();
const start = ref(false)

onMounted(async() => {
  start.value = true

  await nextTick(); // DOMのレンダリングを待つ

  // ローカルストレージを確認して、ブラウザバックが発生したかどうかを確認
  const isBack = sessionStorage.getItem("isBack") === "true";

  if (isBack) {
    // ブラウザバック時はアニメーションをスキップ
    sessionStorage.setItem("isBack", "false");
    return;
  }

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
    ".js-mvLogo01",
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
});

// ブラウザバック時にフラグを設定する
router.beforeEach((to, from, next) => {
  if (from.fullPath !== to.fullPath && window.history.state.back) {
    sessionStorage.setItem("isBack", "true");
  }
  next();
});
</script>

<template>
  <div class="js-mvTrigger">
  <div class="js-mvLogo flex items-center justify-between md:mx-10%">
    <h1 class="text-[15px] md:text-[25px]">Lesson</h1>
    <h3 class="text-[11px] md:text-[18px]">Venere Emiではこれまで紹介した品物を<br>サロンという形でお客様ご自身で体験する<br>教室を開いております。</h3>
  </div>
  <div class="js-mvLogo01 flex items-center justify-between md:mx-10%">
  <img src="@/assets/img/salone-body-01.png" class="w-50% md:w-auto">
  </div>
  <div class="js-mvLogo02 flex items-center justify-end md:mx-10% right-0">
  <img src="@/assets/img/salone-body-02.png" class="w-50% md:w-auto">
  </div>
  <div class="js-mvLogo03 flex items-center justify-between md:mx-10%">
    <img src="@/assets/img/salone-body-03.png" class="w-50% md:w-auto">
    <img src="@/assets/img/salone-body-05.png" class="w-50% md:w-auto">
  </div>
  <div class="js-mvLogo04 flex items-center justify-end md:mx-10% right-0">
  <img src="@/assets/img/salone-body-04.png" class="w-50% md:w-auto">
  </div> 
</div>
</template>
