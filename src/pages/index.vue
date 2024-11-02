<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, onBeforeUnmount } from "vue";

const router = useRouter();

onMounted(() => {
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
    { y: 10, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 1, delay: 0.5 },
  );

  mainVisualAnime.fromTo(
    ".js-mvLogo02",
    { y: 10, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 1, delay: 0.5 },
  );

  mainVisualAnime.fromTo(
    ".js-mvLogo03",
    { y: 10, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 1, delay: 0.5 },
  );

  mainVisualAnime.fromTo(
    ".js-mvLogo04",
    { y: 10, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 1, delay: 0.5 },
  );

  mainVisualAnime.fromTo(
    ".js-mvLogo05",
    { y: 10, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 1, delay: 0.5 },
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
    <img
      class="js-mvLogo mx-auto flex max-w-full md:max-w-100% h-auto object-cover"
      src="@/assets/img/test.jpg"
      alt="heder-01"
    />
    <h1 class="h1-style js-mvLogo">Venere Emi Flower Salone</h1>
    <h3
      style="justify-content: center; display: flex; font-weight: 500"
      class="js-mvLogo"
    >
      flower studio
    </h3>
    <div
      class="section-header js-mvLogo02 text-[18px] font-normal italic tracking-[0.1em] border-t border-b border-[#cccccc] mb-[60px] mx-[15vw] text-center mt-[6vw] py-[30px]"
    >
      Preserved | プリザーブドフラワー
    </div>


    <!-- Preservedページ ここから↓ -->
    <div
      style="display: flex;"
      class="flex-col md:flex-row justify-evenly items-center"
    >
      <NuxtLink to="/circlebox" class="flex-col justify-centers" style="color: #302e2e">
        <img
          class="col02 js-mvLogo02"
          src="@/assets/img/Story01.png"
          alt="heder-01"
        />
        <h2 style="text-align: center" class="js-mvLogo02">CircleBox</h2>
        <h3 style="text-align: center" class="js-mvLogo02">this is test</h3>
        <p style="text-align: center" class="js-mvLogo02">test description</p>
      </NuxtLink>

      <NuxtLink to="/square" style="color: #302e2e">
        <img
          class="col02 js-mvLogo02"
          src="@/assets/img/Story06.png"
          alt="heder-01"
        />
        <h2 style="text-align: center" class="js-mvLogo02">Square</h2>
        <h3 style="text-align: center" class="js-mvLogo02">this is test</h3>
        <p style="text-align: center" class="js-mvLogo02">test description</p>
      </NuxtLink>

      <NuxtLink to="/ceremony" style="color: #302e2e">
        <img
          class="col02 js-mvLogo02"
          src="@/assets/img/Story07.png"
          alt="heder-01"
        />
        <h2 style="text-align: center" class="js-mvLogo02">Ceremony</h2>
        <h3 style="text-align: center" class="js-mvLogo02">this is test</h3>
        <p style="text-align: center" class="js-mvLogo02">test description</p>
      </NuxtLink>
    </div>
    <div
      style="display: flex;"
      class="flex-col md:flex-row justify-evenly items-center mt-5vw"
    >
      <NuxtLink to="/glass" style="color: #302e2e">
        <img
          class="col02 js-mvLogo03"
          src="@/assets/img/Story08.png"
          alt="heder-01"
        />
        <h2 style="text-align: center" class="js-mvLogo03">Glass</h2>
        <h3 style="text-align: center" class="js-mvLogo03">this is test</h3>
        <p style="text-align: center" class="js-mvLogo03">test description</p>
      </NuxtLink>

      <NuxtLink to="/funeral" class="flex-col justify-centers" style="display: flex; color: #302e2e">
        <img
          class="col02 js-mvLogo03"
          src="@/assets/img/Story09.png"
          alt="heder-01"
        />
        <h2 style="text-align: center" class="js-mvLogo03">Funeral</h2>
        <h3 style="text-align: center" class="js-mvLogo03">this is test</h3>
        <p style="text-align: center" class="js-mvLogo03">test description</p>
      </NuxtLink>

      <NuxtLink to="/chrismas" style="color: #302e2e">
        <img
          class="col02 js-mvLogo03"
          src="@/assets/img/Story10.png"
          alt="heder-01"
        />
        <h2 style="text-align: center" class="js-mvLogo03">Chrismas</h2>
        <h3 style="text-align: center" class="js-mvLogo03">this is test</h3>
        <p style="text-align: center" class="js-mvLogo03">test description</p>
      </NuxtLink>
    </div>
    <!-- Preservedページ ここまで↑ -->

    <div       
      class="section-header js-mvLogo04 text-[18px] font-normal italic tracking-[0.1em] border-t border-b border-[#cccccc] mb-[60px] mx-[15vw] text-center mt-[6vw] py-[30px]"
    >
      Lesson | レッスン
    </div>
    <!-- Lessonページ ここから↓ -->
    <div
        style="display: flex;"
      class="flex-col md:flex-row justify-evenly items-center"
    >
      <NuxtLink to="/lesson" style="color: #302e2e">
        <img
          class="col02 js-mvLogo04"
          src="@/assets/img/lesson.png"
          alt="heder-01"
        />
        <h2 style="text-align: center" class="js-mvLogo04">
          レッスンについてはこちら
        </h2>
        <h3 style="text-align: center" class="js-mvLogo04">this is test</h3>
        <p style="text-align: center" class="js-mvLogo04">test description</p>
      </NuxtLink>
    </div>
    <!-- Lessonページ ここまで↑ -->

    <div       
      class="section-header js-mvLogo05 text-[18px] font-normal italic tracking-[0.1em] border-t border-b border-[#cccccc] mb-[60px] mx-[15vw] text-center mt-[6vw] py-[30px]"
    >
      ABOUT, CONTACT | その他, お問い合わせ
    </div>

    <div
        style="display: flex;"
      class="flex-col md:flex-row justify-evenly items-center my-5vw"
    >
      <NuxtLink to="/about" style="color: #302e2e">
        <img
          class="col02 js-mvLogo05"
          src="@/assets/img/test03.png"
          alt="heder-01"
        />
        <h2 style="text-align: center" class="js-mvLogo05">
          Venere Emi について
        </h2>
        <h3 style="text-align: center" class="js-mvLogo05">this is test</h3>
        <p style="text-align: center" class="js-mvLogo05">test description</p>
      </NuxtLink>
      <NuxtLink to="/words" style="color: #302e2e">
        <img
          class="col02 js-mvLogo05"
          src="@/assets/img/test02.png"
          alt="heder-01"
        />
        <h2 style="text-align: center" class="js-mvLogo05">お花の用語</h2>
        <h3 style="text-align: center" class="js-mvLogo05">this is test</h3>
        <p style="text-align: center" class="js-mvLogo05">test description</p>
      </NuxtLink>

      <NuxtLink to="/contact" style="color: #302e2e">
        <img
          class="col02 js-mvLogo05"
          src="@/assets/img/test01.png"
          alt="heder-01"
        />
        <h2 style="text-align: center" class="js-mvLogo05">お問い合わせ</h2>
        <h3 style="text-align: center" class="js-mvLogo05">this is test</h3>
        <p style="text-align: center" class="js-mvLogo05">test description</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.col01 {
  max-width: 300px; /* 最大幅を設定して、画像が大きくなりすぎないようにする */
  height: 350px;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    transform: scale(1.05); // 1.05倍に拡大
    opacity: 0.8; // 少し透明に
  }
}

.col02 {
  max-width: 300px; /* 最大幅を設定して、画像が大きくなりすぎないようにする */
  height: 340px; /* 高さは自動で調整 */
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &:hover {
    transform: scale(1.05); // 1.05倍に拡大
    opacity: 0.8; // 少し透明に
  }
}

.col02 {
  max-width: 1000px; /* 最大幅を設定して、画像が大きくなりすぎないようにする */
  height: 340px; /* 高さは自動で調整 */
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

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
  border-bottom: 1px solid #cccccc;
  border-top: 1px solid #cccccc;
}
</style>
