<template>
  <section class="bg-primary-600 text-white py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl font-bold mb-6">{{ $t('services.cta.title') }}</h2>
      <p class="text-xl mb-8">{{ $t('services.cta.description') }}</p>
      <NuxtLinkLocale to="/cita" class="bg-tertiary-400 text-primary-700 px-8 py-3 rounded-full font-semibold hover:bg-tertiary-500 transition-colors">
        {{ $t('services.cta.button') }}
      </NuxtLinkLocale>
    </div>
  </section>
</template> 