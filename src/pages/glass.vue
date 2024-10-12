<script setup lang="ts">
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
});
</script>

<template>
  <div class="js-mvTrigger">
    <div class="relative">
      <img
        class="js-mvLogo flex m-auto"
        src="@/assets/img/square-title.png"
        alt="header-01"
      />

      <!-- テキスト１を右上端に配置 -->
      <p class="absolute js-mvLogo top-0 p-2 right-20% text-white bg-#9b9b9b6c">
        淡いピンクの花々で写真を優美に彩ります。
        <br />上品なデザインで、 <br />特別な思い出を引き立てるにおすすめです。
      </p>

      <!-- テキスト２を右下端に配置 -->
      <p
        class="absolute js-mvLogo bottom-0 right-20% p-2 text-white bg-#9b9b9b6c"
      >
        ■ No.2101 <br />グロリアス <br />M （アクアブルー） <br />税込
        <br />100,000円 <br />W20 x D15.5 x H20,5cm
      </p>

      <!-- 新しいテキストを左端に配置 -->
      <p
        class="absolute font-serif js-mvLogo top-0 left-[20%] p-2 text-white bg-[#9b9b9b6c] text-[50px] -rotate-15"
      >
        Glass
      </p>
    </div>
    <div class="section-header" />
    <div class="flex justify-center gap-30">
      <div class="relative w-[30%]">
        <img
          class="js-mvLogo02 w-full"
          src="@/assets/img/square-body-01.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="absolute js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c]"
        >
          ■ No.2101 <br />グロリアス <br />M （アクアブルー） <br />税込
          <br />100,000円 <br />W20 x D15.5 x H20,5cm
        </p>
      </div>

      <div class="relative w-[30%]">
        <img
          class="js-mvLogo02 w-full"
          src="@/assets/img/square-body-02.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="absolute js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c]"
        >
          ■ No.2101 <br />グロリアス <br />M （アクアブルー） <br />税込
          <br />100,000円 <br />W20 x D15.5 x H20,5cm
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section-header {
  font-size: 18px;
  font-weight: 400;
  font-style: italic;
  letter-spacing: 0.1em;
  border-bottom: 2px solid #cccccc;

  margin-bottom: 60px;
  margin-left: 15vw;
  margin-right: 15vw;
  text-align: center;
  margin-top: 30px;
  padding-bottom: 30px;
}
</style>
