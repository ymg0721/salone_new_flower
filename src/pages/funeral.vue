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
  <div class="js-mvTrigger" v-if="start">
    <div style="display: flex;" class="flex-col md:flex-row justify-center gap-30">
      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo w-full"
          src="@/assets/img/funeral-body-01.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="absolute js-mvLogo bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c]"
        >
        ■ No.2120<br>グロリアス M （ブライトレッド）<br>税込 11,000円<br>W15.5 x D15.5 x H9
        </p>
      </div>

      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo w-full"
          src="@/assets/img/funeral-body-02.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="absolute js-mvLogo bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c]"
        >
        ■ No.2121<br>グロリアス M （ブライトレッド）<br>税込 11,000円<br>W15.5 x D15.5 x H9
        </p>
      </div>
    </div>
    <div class="section-header" />
    <div style="display: flex;" class="flex-col md:flex-row justify-center gap-30">
      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo02 w-full"
          src="@/assets/img/funeral-body-03.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="absolute js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c]"
        >
        ■ No.2122<br>グロリアス M （ブライトレッド）<br>税込 11,000円<br>W15.5 x D15.5 x H9
        </p>
      </div>

      <div class="relative md:w-[30%]">
        <img
          class="js-mvLogo02 w-full"
          src="@/assets/img/funeral-body-04.png"
          alt="header-01"
        />
        <!-- テキスト１を右下端に配置 -->
        <p
          class="absolute js-mvLogo02 bottom-0 right-5 p-2 text-white bg-[#9b9b9b6c]"
        >
        ■ No.2123<br>グロリアス M （ブライトレッド）<br>税込 11,000円<br>W15.5 x D15.5 x H9
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
