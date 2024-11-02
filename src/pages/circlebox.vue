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
  <div class="js-mvTrigger" v-if="start">
    <div class="relative">
      <img
        class="js-mvLogo flex m-auto max-w-full md:max-w-100% h-auto"
        src="@/assets/img/circle-title.png"
        alt="header-01"
      />

      <!-- Text 1 positioned at the top-right -->
      <p class="absolute js-mvLogo top-0 text-[11px] md:text-[18px]  p-2 right-[0%] md:right-[20%] text-white bg-[#9b9b9b6c]">
        クラシックとモダンが融合した<br />豪華な薔薇のアレンジメント<br />大切な場面を<br />
        忘れられない思い出に
      </p>

      <!-- Text 2 positioned at the bottom-right -->
      <p
        class="absolute js-mvLogo bottom-0 right-[0%] md:right-[20%] p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px]"
      >
        ■ No.2101 <br />グロリアス <br />M （アクアブルー） <br />税込
        <br />100,000円 <br />W20 x D15.5 x H20,5cm
      </p>

      <!-- New text positioned on the left -->
      <p
        class="absolute font-serif js-mvLogo top-0 left-[3%] md:left-[20%] p-2 text-white bg-[#9b9b9b6c] text-[30px] md:text-[50px] -rotate-15"
      >
        CircleBox
      </p>
    </div>

    <!-- Section Header -->
    <div class="section-header mx-auto text-center mt-8 mb-8 sm:mb-16 sm:mt-16 text-lg italic font-normal tracking-widest border-b-2 border-gray-300 pb-4 sm:pb-8">
      Section Header
    </div>

    <div style="display: flex;" class="flex-col md:flex-row justify-center gap-8">
      <div class="relative">
        <img
          class="js-mvLogo02 flex m-auto max-w-full md:max-w-100% h-auto"
          src="@/assets/img/circle-body-1.png"
          alt="header-01"
        />
        <!-- Text positioned at the bottom-right -->
        <p
          class="absolute js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px]"
        >
          ■ No.2101 <br />グロリアス <br />M （アクアブルー） <br />税込
          <br />100,000円 <br />W20 x D15.5 x H20,5cm
        </p>
      </div>

      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo02 w-full"
          src="@/assets/img/circle-body-2.png"
          alt="header-01"
        />
        <!-- Text positioned at the bottom-right -->
        <p
          class="absolute js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px]"
        >
          ■ No.2101 <br />グロリアス <br />M （アクアブルー） <br />税込
          <br />100,000円 <br />W20 x D15.5 x H20,5cm
        </p>
      </div>
    </div>

    <div class="section-header mx-auto text-center mt-8 mb-8 sm:mb-16 sm:mt-16 text-lg italic font-normal tracking-widest border-b-2 border-gray-300 pb-4 sm:pb-8">
      Section Header
    </div>

    <div style="display: flex;" class="flex-col md:flex-row justify-center gap-8">
      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo03 w-full"
          src="@/assets/img/circle-body-4.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="absolute js-mvLogo03 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px]"
        >
          ■ No.2101 <br />グロリアス <br />M （アクアブルー） <br />税込
          <br />100,000円 <br />W20 x D15.5 x H20,5cm
        </p>
      </div>
      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo03 w-full"
          src="@/assets/img/circle-body-5.png"
          alt="header-01"
        />
        <!-- Text positioned at the bottom-right -->
        <p
          class="absolute js-mvLogo03 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px]"
        >
          ■ No.2101 <br />グロリアス <br />M （アクアブルー） <br />税込
          <br />100,000円 <br />W20 x D15.5 x H20,5cm
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.section-header {
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
}
</style>