<template>
  <div class="bg-white rounded-lg border border-secondary-100 p-8 hover:border-primary-200 transition-colors duration-300">
    <div class="flex flex-col items-center text-center">
      <div class="text-primary-600 text-5xl mb-8">
        <Icon :name="service.icon" />
      </div>
      <div class="flex-1">
        <h2 class="text-2xl  mb-4 text-primary-800">{{ $t(service.title) }}</h2>
        <p class="text-gray-600 mb-8">{{ $t(service.description) }}</p>
        <ul class="list-none text-gray-600 space-y-3 text-left">
          <li v-for="(feature, index) in $tm(service.features)" :key="index" class="flex items-start">
            <span class="text-primary-500 mr-2">•</span>
            {{ feature.loc.source }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: {
    type: Object,
    required: true
  }
})
</script> 