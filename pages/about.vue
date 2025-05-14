<template>
  <div class="bg-white">
    <!-- Main Content -->
    <section class="py-24 w-full">
      <div class="container mx-auto px-4">
        <!-- Content Layout -->
        <div class="grid lg:grid-cols-12 gap-16 items-start">
          <!-- Image -->
          <div class="lg:col-span-5">
            <div class="sticky top-24">
              <div class="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/juan.png" :alt="$t('about.imageAlt')" class="w-full h-full object-cover">
              </div>
            </div>
          </div>

          <!-- Bio -->
          <div class="lg:col-span-7 space-y-16">
            <!-- Header -->
            <div>
              <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6">{{ $t('about.title') }}</h1>
              <p class="text-2xl text-primary-600 font-semibold mb-12">{{ $t('about.subtitle') }}</p>
            </div>

            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('about.education.title') }}</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                {{ $t('about.education.content') }}
              </p>
            </div>

            <div>
              <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('about.approach.title') }}</h2>
              <p class="text-lg text-gray-700 leading-relaxed">
                {{ $t('about.approach.content') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-24 w-full bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-20 text-gray-900">{{ $t('about.values.title') }}</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div class="text-center group">
            <div class="text-primary-600 text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:heart" />
            </div>
            <h3 class="text-2xl font-bold mb-6 text-gray-900">{{ $t('about.values.patientCare.title') }}</h3>
            <p class="text-lg text-gray-700 leading-relaxed">{{ $t('about.values.patientCare.content') }}</p>
          </div>
          
          <div class="text-center group">
            <div class="text-primary-600 text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:school" />
            </div>
            <h3 class="text-2xl font-bold mb-6 text-gray-900">{{ $t('about.values.learning.title') }}</h3>
            <p class="text-lg text-gray-700 leading-relaxed">{{ $t('about.values.learning.content') }}</p>
          </div>
          
          <div class="text-center group">
            <div class="text-primary-600 text-6xl mb-8 transform group-hover:scale-110 transition-transform duration-300">
              <Icon name="mdi:handshake" />
            </div>
            <h3 class="text-2xl font-bold mb-6 text-gray-900">{{ $t('about.values.integrity.title') }}</h3>
            <p class="text-lg text-gray-700 leading-relaxed">{{ $t('about.values.integrity.content') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-24 w-full bg-primary-600 text-white">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <h2 class="text-5xl font-bold mb-8">{{ $t('about.cta.title') }}</h2>
          <p class="text-2xl mb-12">{{ $t('about.cta.subtitle') }}</p>
          <NuxtLinkLocale to="/cita" class="inline-block bg-white text-primary-600 px-12 py-5 rounded-full font-semibold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            {{ $t('about.cta.button') }}
          </NuxtLinkLocale>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No team data needed anymore
</script> 