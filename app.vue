<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  ogImage: '/images/juan.png',
})

// Prevent favicon requests
useHead({
  link: [
    { rel: 'icon', href: 'data:,' }
  ]
})
</script>