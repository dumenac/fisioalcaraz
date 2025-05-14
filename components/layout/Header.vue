<template>
  <header 
    class="sticky top-0 z-50 backdrop-blur-sm transition-all duration-200"
    :class="[
      isScrolled 
        ? 'bg-primary-600/90' 
        : 'bg-primary-600'
    ]"
  >
    <nav class="container mx-auto px-6 py-6">
      <div class="flex justify-between items-center">
        <NuxtLinkLocale to="/" class="text-2xl font-semibold text-white hover:text-white/90 transition-colors flex items-center gap-3">
          <NuxtImg src="/images/logo.webp" alt="Logo" class="h-10 w-auto" />
          {{ $t('site.name') }}
        </NuxtLinkLocale>
        <div class="flex items-center space-x-8">
          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-6">
            <NuxtLinkLocale 
              v-for="(link, index) in navLinks" 
              :key="index"
              :to="link.to"
              class="text-white hover:text-white/90 transition-colors relative group font-medium"
            >
              {{ $t(link.text) }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
            </NuxtLinkLocale>
          </div>

          <!-- Language Dropdown -->
          <div class="relative" v-click-outside="closeDropdown">
            <button 
              @click="isOpen = !isOpen"
              class="flex items-center space-x-2 text-white hover:text-white/90 focus:outline-none transition-colors"
            >
              <Icon :name="`flag:${localeToFlag[locale]}-4x3`" class="w-5 h-5 rounded-sm shadow-sm" />
              <Icon 
                name="heroicons:chevron-down" 
                class="w-4 h-4 transition-transform duration-200"
                :class="{ 'rotate-180': isOpen }"
              />
            </button>
            
            <!-- Dropdown Menu -->
            <div 
              v-show="isOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-secondary-100 transform transition-all duration-200 ease-out"
            >
              <NuxtLink
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)"
                @click="isOpen = false"
                class="flex items-center space-x-3 px-4 py-2.5 text-gray-600 hover:bg-secondary-50 hover:text-primary-600 transition-colors"
              >
                <Icon :name="`flag:${localeToFlag[locale.code]}-4x3`" class="w-5 h-5 rounded-sm shadow-sm" />
                <span>{{ locale.name }}</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden text-white hover:text-white/90 focus:outline-none"
          >
            <Icon 
              :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
              class="w-8 h-8"
            />
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div 
          v-show="isMobileMenuOpen"
          class="md:hidden mt-4 py-4 border-t border-white/10"
        >
          <div class="flex flex-col space-y-4">
            <NuxtLinkLocale 
              v-for="(link, index) in navLinks" 
              :key="index"
              :to="link.to"
              @click="isMobileMenuOpen = false"
              class="text-white hover:text-white/90 transition-colors font-medium text-lg"
            >
              {{ $t(link.text) }}
            </NuxtLinkLocale>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const isOpen = ref(false)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const localeToFlag = {
  es: 'es',
  ca: 'es-ct',
  en: 'us'
}

const navLinks = [
  { to: '/', text: 'nav.home' },
  { to: '/services', text: 'nav.services' },
  { to: '/about', text: 'nav.about' },
  { to: '/contact', text: 'nav.contact' }
]

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

// Close dropdown when clicking outside
const closeDropdown = () => {
  isOpen.value = false
}

// Add click-outside directive
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value()
      }
    }
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.removeEventListener('click', el.clickOutsideEvent)
  }
}

// Add scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}
</script> 