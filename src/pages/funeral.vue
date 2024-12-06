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
    <div class="flex flex-row justify-center gap-5 md:gap-30">
      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo w-full rounded-6px"
          src="@/assets/img/funeral-body-01.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="text-[11px] md:text-[18px] relative md:absolute  js-mvLogo bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] rounded-3px"
        >
        ■ No.2120<br>グロリアス M （ブライトレッド）<br>税込 11,000円<br>W15.5 x D15.5 x H9
        </p>
      </div>

      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo w-full rounded-6px"
          src="@/assets/img/funeral-body-02.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="text-[11px] md:text-[18px] relative md:absolute  js-mvLogo bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] rounded-3px"
        >
        ■ No.2121<br>グロリアス M （ブライトレッド）<br>税込 11,000円<br>W15.5 x D15.5 x H9
        </p>
      </div>
    </div>
    <div class="section-header mx-auto text-center mt-8 mb-8 sm:mb-16 sm:mt-16 text-lg italic font-normal tracking-widest border-b-2 border-gray-300  py-[20px] md:py-[30px]">
      Section Header
    </div>
    <div style="display: flex;" class="flex flex-row justify-center gap-5 md:gap-30 mb-40px">
      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo02 w-full rounded-6px"
          src="@/assets/img/funeral-body-03.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="text-[11px] md:text-[18px] relative md:absolute  js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] rounded-3px"
        >
        ■ No.2122<br>グロリアス M （ブライトレッド）<br>税込 11,000円<br>W15.5 x D15.5 x H9
        </p>
      </div>

      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo02 w-full rounded-6px"
          src="@/assets/img/funeral-body-04.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="text-[11px] md:text-[18px] relative md:absolute  js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c] rounded-3px"
        >
        ■ No.2123<br>グロリアス M （ブライトレッド）<br>税込 11,000円<br>W15.5 x D15.5 x H9
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
