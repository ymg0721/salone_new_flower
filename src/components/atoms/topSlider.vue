<script setup lang="ts">
import test01 from '@/assets/img/test.jpg'
import test02 from '@/assets/img/test.jpg'
import test03 from '@/assets/img/test.jpg'
import test04 from '@/assets/img/test.jpg'
import test05 from '@/assets/img/test.jpg'
import test06 from '@/assets/img/test.jpg'
import test07 from '@/assets/img/test.jpg'

const images = ref([
  { no: 1, src: test01, alt: '式場イメージ写真' },
  { no: 2, src: test02, alt: '式場イメージ写真' },
  { no: 3, src: test03, alt: '式場イメージ写真' },
  { no: 4, src: test04, alt: '式場イメージ写真' },
  { no: 5, src: test05, alt: '式場イメージ写真' },
  { no: 6, src: test06, alt: '式場イメージ写真' },
  { no: 7, src: test07, alt: '式場イメージ写真' },
])

const offsetX = ref(0)
let intervalId: NodeJS.Timer | undefined

const swiperWrapper: Ref<HTMLDivElement | undefined> = ref()
const swiperSlides: Ref<HTMLDivElement[]> = ref([])

const rotateArray = function <T>(array: T[], shift: number): T[] {
  const len = array.length
  // shiftを配列の長さで割った余りを計算し、負の場合は正の値に変換
  shift = ((shift % len) + len) % len
  // スプレッド演算子を使用して配列を再構成
  return [...array.slice(shift), ...array.slice(0, shift)]
}

const normalizePosition = () => {
  if (!swiperWrapper.value)
    return

  // swiperSlidesの 中心がcenterX に一番近いものを centerIndex とする
  swiperSlides.value.forEach((slide) => {
    const rect = slide.getBoundingClientRect()
    if (rect.right < 0) {
      images.value = rotateArray(images.value, 1)
      offsetX.value += rect.width + 30
    }
  })
}

const startAutoScroll = () => {
  intervalId = setInterval(() => {
    offsetX.value -= 0.7
    normalizePosition()
  }, 13)
}

onMounted(startAutoScroll)
</script>

<template>
  <div class="p-partnerHallBlock">
    <ClientOnly>
      <div class="p-partnerHallBlock__photoWrap swiperPartnerHallSlider">
        <ul
          ref="swiperWrapper"
          class="p-partnerHallBlock__photoList swiper-wrapper"
          :style="{ transform: `translateX(${offsetX}px)` }"
          style="display: flex"
        >
          <li
            v-for="image in images"
            :key="image.no"
            ref="swiperSlides"
            class="p-partnerHallBlock__photoListItem swiper-slide"
          >
            <img
              :src="image.src"
              alt="葬儀社様 イメージ写真"
              width="100%"
              height="auto"
            >
          </li>
        </ul>
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">

// ==================================================================
//
//	/pc/object/project/_partnerHallBlock.scss
//
//	提携葬儀社 写真・ロゴリスト
//
// ==================================================================
.p-partnerHallBlock {
	overflow: hidden;
	&__photoWrap {
		margin-bottom: 20px;
	}
	&__photoList {
		transition-timing-function: linear;
	}
	&__photoListItem {
		width: 382px;
		height: 240px;
		margin-right: 30px;
		border-radius: 8px;
		overflow: hidden;
	}
	&__logoList {
		width: 786px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
	}
	&__logoListItem {
		& > * {
			vertical-align: top;
		}
		.p-partnerHallBlock__logoList--01 &:first-child {
			width: 114px;
			height: 39px;
		}
		.p-partnerHallBlock__logoList--01 &:nth-child(2) {
			width: 175px;
			height: 28px;
		}
		.p-partnerHallBlock__logoList--01 &:nth-child(3) {
			width: 99px;
			height: 36px;
		}
		.p-partnerHallBlock__logoList--01 &:nth-child(4) {
			width: 206px;
			height: 31px;
			transform: translateY(-10px);
		}
		.p-partnerHallBlock__logoList--02 &:first-child {
			width: 129px;
			height: 23px;
		}
		.p-partnerHallBlock__logoList--02 &:nth-child(2) {
			width: 170px;
			height: 31px;
		}
		.p-partnerHallBlock__logoList--02 &:nth-child(3) {
			width: 105px;
			height: 32px;
			transform: translateY(-5px);
		}
		.p-partnerHallBlock__logoList--02 &:nth-child(4) {
			width: 90px;
			height: 24px;
		}
		.p-partnerHallBlock__logoList--02 &:nth-child(5) {
			width: 116px;
			height: 22px;
		}
	}

	&__annotation {
		text-align: right;
	}
}
</style>
