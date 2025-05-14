<template>
  <section class="bg-primary-600 text-white py-20 min-h-[450px] flex">
    <div class="container m-auto px-4 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ $t('home.title') }}</h1>
      <p class="text-xl md:text-2xl mb-8">{{ $t('home.subtitle') }}</p>
      <NuxtLinkLocale to="/cita" class="bg-tertiary-400 text-primary-700 px-8 py-3 rounded-full font-semibold hover:bg-tertiary-500 transition-colors">
        {{ $t('home.cta') }}
      </NuxtLinkLocale>
    </div>
  </section>
</template> 