import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from 'vue-router'

interface AnimationTarget {
  className: string
  delay?: number
}

export const useScrollAnimation = (targets: AnimationTarget[]) => {
  const router = useRouter()
  const start = ref(false)

  onMounted(async () => {
    start.value = true

    await nextTick()

    const isBack = sessionStorage.getItem('isBack') === 'true'

    if (isBack) {
      sessionStorage.setItem('isBack', 'false')
      return
    }

    gsap.registerPlugin(ScrollTrigger)

    const mainVisualAnime = gsap.timeline({
      scrollTrigger: {
        trigger: '.js-mvTrigger',
        start: 'top 80%',
      },
    })

    targets.forEach((target) => {
      mainVisualAnime.fromTo(
        target.className,
        {
          y: 10,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          delay: target.delay || 0.5,
        },
      )
    })
  })

  // ブラウザバック時にフラグを設定
  router.beforeEach((to, from, next) => {
    if (from.fullPath !== to.fullPath && window.history.state.back) {
      sessionStorage.setItem('isBack', 'true')
    }
    next()
  })

  return {
    start
  }
} 