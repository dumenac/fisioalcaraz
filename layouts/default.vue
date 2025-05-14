<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <button 
      class="fixed z-50 bottom-5 right-5 
             bg-primary-300 text-primary-800
             hover:bg-primary-400 hover:text-primary-100 hover:cursor-pointer
             px-6 py-3 rounded-full
             shadow-lg transform transition-all duration-200 hover:scale-105
             font-medium text-lg
             flex items-center gap-2"
      @click="handleClick"
    >
      <Icon name="mdi:calendar" class="w-5 h-5" />
      {{ $t('nav.book') }}
    </button>
    <LayoutFooter />
  </div>
</template>

<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});

const calendly = useCalendly()

const handleClick = () => {
    calendly.initPopupWidget({
        url: 'https://calendly.com/jalcaraz-fisioterapia/50min',
    })
}
</script>