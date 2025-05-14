<template>
  <div>
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl  text-center mb-16">{{ $t('services.title') }}</h1>
        
        <div class="space-y-24">
          <div 
            v-for="(service, index) in services" 
            :key="service.id"
            class="group relative"
            :id="service.id"
          >
            <div 
              class="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl transition-all duration-300"
              :class="[
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse',
                'hover:bg-gray-50'
              ]"
            >
              <div class="w-full md:w-1/2">
                <div class="relative">
                  <div class="w-16 h-16 mb-6 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon :name="service.icon" class="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 class="text-3xl  mb-4">{{ $t(service.title) }}</h2>
                  <p class="text-gray-600 mb-6">{{ $t(service.description) }}</p>
                  <ul class="space-y-3">
                    <li 
                      v-for="(feature, i) in $tm(service.features)" 
                      :key="i"
                      class="flex items-center text-gray-700"
                    >
                      <Icon name="mdi:check-circle" class="w-5 h-5 text-primary-500 mr-2" />
                      {{ $rt(feature) }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="aspect-video rounded-xl overflow-hidden bg-gray-100">
                  <img 
                    :src="`/images/services/${service.id}.jpg`" 
                    :alt="$t(service.title)"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CallToAction 
      :title="$t('services.cta.title')"
      :description="$t('services.cta.description')"
      :button-text="$t('services.cta.button')"
    />
  </div>
</template>

<script setup>
const services = [
  {
    id: 'physiotherapy',
    icon: 'mdi:human-handsup',
    title: 'services.physiotherapy.title',
    description: 'services.physiotherapy.description',
    features: 'services.physiotherapy.features'
  },
  {
    id: 'sports',
    icon: 'mdi:run-fast',
    title: 'services.sports.title',
    description: 'services.sports.description',
    features: 'services.sports.features'
  },
  {
    id: 'manual',
    icon: 'mdi:hand-front-right-outline',
    title: 'services.manual.title',
    description: 'services.manual.description',
    features: 'services.manual.features'
  },
  {
    id: 'rehabilitation',
    icon: 'mdi:wheelchair',
    title: 'services.rehabilitation.title',
    description: 'services.rehabilitation.description',
    features: 'services.rehabilitation.features'
  },
  {
    id: 'massage',
    icon: 'mdi:spa-outline',
    title: 'services.massage.title',
    description: 'services.massage.description',
    features: 'services.massage.features'
  }
]
</script>

<style scoped>
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}
</style> 