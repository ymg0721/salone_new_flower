<script setup>
import { useHead } from '#imports';
import { useRoute } from 'vue-router';
import BackToTop from '@/components/atoms/BackToTop.vue';
import { computed } from 'vue';

const route = useRoute();
const showBackToTop = computed(() => route.path !== '/');

useHead({
  titleTemplate: (title) => (title ? `${title} | Venere Emi` : 'Venere Emi'),
  meta: [
    {
      name: 'description',
      content: 'プリザーブドフラワーとフラワーアレンジメントの専門サロン。上質なインテリアとしてお花のある暮らしを提案いたします。ウェディング、ギフト、インテリアフラワーなど、大切な方への贈り物や特別な空間づくりをお手伝いいたします。',
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <BackToTop v-if="showBackToTop" />
  </div>
</template>
