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
  <div class="js-mvTrigger mx-30px" v-if="start">
    <div class="relative">
      <img
        class="js-mvLogo flex m-auto max-w-full md:max-w-100% h-auto rounded-5px"
        src="@/assets/img/square-title.png"
        alt="header-01"
      />

      <!-- テキスト１を右上端に配置 -->
      <p class="absolute js-mvLogo top-0 text-[9px] md:text-[18px]  p-2 right-[0%] md:right-[20%] text-white bg-[#9b9b9b6c]">
        淡いピンクの花々で写真を優美に彩ります。
        <br />上品なデザインで、 <br />特別な思い出を引き立てるにおすすめです。
      </p>

      <!-- テキスト２を右下端に配置 -->
      <p
      class="absolute js-mvLogo bottom-0 right-[0%] md:right-[20%] p-2 text-white bg-[#9b9b9b6c] text-[9px] md:text-[18px]"
      >
        ■ No.2101 <br />グロリアス <br />M （アクアブルー） <br />税込
        <br />100,000円 <br />W20 x D15.5 x H20,5cm
      </p>

      <!-- 新しいテキストを左端に配置 -->
      <p
      class="absolute font-serif js-mvLogo top-0 left-[3%] md:left-[20%] p-2 text-white bg-[#9b9b9b6c] text-[25px] md:text-[50px] -rotate-15"
      >
        Square
      </p>
    </div>
    <div class="section-header mx-auto text-center mt-8 mb-8 sm:mb-16 sm:mt-16 text-lg italic font-normal tracking-widest border-b-2 border-gray-300 py-[20px] md:py-[30px]">
      Section Header
    </div>
    <div style="display: flex;" class="flex-row justify-center gap-5 md:gap-30 mb-40px">
      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo02 w-150px md:w-full rounded-5px"
          src="@/assets/img/square-body-01.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="relative md:absolute js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px] rounded-3px"
        >
          ■ No.2101 <br />グロリアス <br />M （アクアブルー） <br />税込
          <br />100,000円 <br />W20 x D15.5 x H20,5cm
        </p>
      </div>

      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo02 w-150px md:w-full rounded-5px"
          src="@/assets/img/square-body-02.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="relative md:absolute  js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] text-[11px] md:text-[18px] rounded-3px"
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
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
}
</style>
