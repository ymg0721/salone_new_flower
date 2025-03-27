<script setup>
import { useHead } from '#imports';

useHead({
  titleTemplate: (title) => (title ? `${title} | Venere Emi` : 'Venere Emi'),
  meta: [
    {
      name: 'description',
      content: 'サイト全体のデフォルトの説明',
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
