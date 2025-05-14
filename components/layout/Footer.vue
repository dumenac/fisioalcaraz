<template>
  <footer class="bg-primary-600/90 backdrop-blur-sm text-white pt-14 pb-6">
    <div class="container mx-auto px-6">
      <!-- Top: Logo, Name (left-aligned), Description below -->
      <div class="flex flex-col items-start md:items-start md:flex-row md:justify-start mb-10">
        <div class="flex flex-col items-start">
          <div class="flex flex-row items-center space-x-4 mb-2 justify-start">
            <span class="text-2xl font-bold tracking-tight uppercase font-logo">{{ $t('site.name') }}</span>
          </div>
          <p class="text-white/90 text-base leading-relaxed max-w-2xl text-left">
            {{ $t('footer.description') }}
          </p>
        </div>
      </div>
      <!-- Middle: 3 Columns -->
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-8">
        <!-- Contact Info -->
        <div class="flex-1 min-w-[220px] flex flex-col">
          <h3 class="text-2xl font-semibold mb-4">{{ $t('footer.contactUs') }}</h3>
          <ul class="text-white/90 space-y-1">
            <li>{{ $t('footer.clinicName') }}</li>
            <li>{{ $t('footer.address') }}</li>
            <li>{{ $t('footer.city') }}</li>
            <li class="mt-2">{{ $t('footer.phone') }}</li>
            <li>{{ $t('footer.email') }}</li>
          </ul>
        </div>
        <!-- Navigation -->
        <div class="flex-1 min-w-[220px] flex flex-col">
          <h3 class="text-2xl font-semibold mb-4">{{ $t('footer.aboutUs') }}</h3>
          <ul class="space-y-1 text-white/90">
            <li><NuxtLinkLocale to="/" class="hover:underline hover:text-tertiary-300 transition">{{ $t('nav.home') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/about" class="hover:underline hover:text-tertiary-300 transition">{{ $t('nav.about') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/services" class="hover:underline hover:text-tertiary-300 transition">{{ $t('nav.services') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/contact" class="hover:underline hover:text-tertiary-300 transition">{{ $t('nav.contact') }}</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/cita" class="hover:underline hover:text-tertiary-300 transition">{{ $t('nav.appointment') }}</NuxtLinkLocale></li>
          </ul>
        </div>
        <!-- Press, Social, Registration -->
        <div class="flex-1 flex mt-auto ml-auto flex flex-col items-start justify-between">
          <div class="flex items-center justify-between w-full mt-4">
            <div class="flex space-x-4 ml-auto">
              <a href="https://www.instagram.com/fisioalcaraz" target="_blank" rel="noopener" aria-label="Instagram" class="hover:text-tertiary-300 transition-transform hover:scale-110"><Icon name="mdi:instagram" class="w-7 h-7" /></a>
              <a href="https://maps.google.com/" target="_blank" rel="noopener" aria-label="Google Maps" class="hover:text-tertiary-300 transition-transform hover:scale-110"><Icon name="mdi:map-marker" class="w-7 h-7" /></a>
            </div>
          </div>
        </div>
      </div>
      <!-- Divider -->
      <div class="my-8 border-t border-white/20"></div>
      <!-- Bottom Row: Copyright -->
      <div class="text-center">
        <p class="text-white/90 text-base font-medium">{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional setup needed
</script> 