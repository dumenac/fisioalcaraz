<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  ogImage: '/images/og-juan.jpg',
})

// Prevent favicon requests
useHead({
  link: [
    { rel: 'icon', href: 'data:,' }
  ]
})
</script>