<template>
  <footer class="bg-primary-600/90 backdrop-blur-sm text-white pt-14 pb-6">
    <div class="container mx-auto px-6">
      <!-- Top: Logo, Name (left-aligned), Description below -->
      <div class="flex flex-col items-start md:items-start md:flex-row md:justify-start mb-10">
        <div class="flex flex-col items-start">
          <div class="flex flex-row items-center space-x-4 mb-2 justify-start">
            <NuxtImg src="/images/logo.webp" alt="Logo" class="h-16 w-16 rounded-full bg-white/10 p-2 shadow-md" />
            <span class="text-3xl font-bold tracking-tight">Fisioterapia Alcaraz</span>
          </div>
          <p class="text-white/90 text-base leading-relaxed max-w-2xl text-left">
            Fisioterapia Alcaraz es un centro especializado en el tratamiento y la prevención de lesiones musculoesqueléticas. Nuestro equipo combina la experiencia clínica con la atención personalizada, utilizando las técnicas más avanzadas para mejorar tu salud y bienestar.
          </p>
        </div>
      </div>
      <!-- Middle: 3 Columns -->
      <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-8">
        <!-- Contact Info -->
        <div class="flex-1 min-w-[220px] flex flex-col">
          <h3 class="text-2xl font-semibold mb-4">Contáctanos</h3>
          <ul class="text-white/90 space-y-1">
            <li>Fisioterapia Alcaraz</li>
            <li>C/Muntaner, 270</li>
            <li>08021 Barcelona</li>
            <li class="mt-2">Tel. +34 93 241 77 47</li>
            <li>info@fisioalcaraz.com</li>
          </ul>
        </div>
        <!-- Navigation -->
        <div class="flex-1 min-w-[220px] flex flex-col">
          <h3 class="text-2xl font-semibold mb-4">Sobre nosotros</h3>
          <ul class="space-y-1 text-white/90">
            <li><NuxtLinkLocale to="/" class="hover:underline hover:text-tertiary-300 transition">La Clínica</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/equipo" class="hover:underline hover:text-tertiary-300 transition">Equipo</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/servicios" class="hover:underline hover:text-tertiary-300 transition">Servicios</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/prensa" class="hover:underline hover:text-tertiary-300 transition">Prensa</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/contacto" class="hover:underline hover:text-tertiary-300 transition">Contacto</NuxtLinkLocale></li>
            <li><NuxtLinkLocale to="/trabaja" class="hover:underline hover:text-tertiary-300 transition">Trabaja con nosotros</NuxtLinkLocale></li>
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
        <p class="text-white/90 text-base font-medium">&copy; {{ new Date().getFullYear() }} Fisioterapia Alcaraz. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No additional setup needed
</script> 