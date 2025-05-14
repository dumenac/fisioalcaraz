<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-3xl  text-gray-900 sm:text-4xl">
          {{ $t('bookAppointment.title') }}
        </h1>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {{ $t('bookAppointment.description') }}
        </p>
      </div>
      
      <div class="mt-12">
        <div class="">
            <CalendlyInlineWidget v-bind="options" class="w-full h-full"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
    const options = {
        url: 'https://calendly.com/jalcaraz-fisioterapia/50min',   
    }
</script>