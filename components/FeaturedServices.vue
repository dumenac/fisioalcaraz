<template>
  <section class="py-20 bg-gradient-to-b from-white to-secondary-50/50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-4xl  mb-4 text-primary-800">{{ $t('services.title') }}</h2>
        <p class="text-gray-600 text-lg">{{ $t('services.subtitle') }}</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        <!-- Decorative elements -->
        <div class="absolute -top-10 -left-10 w-20 h-20 bg-primary-50 rounded-full opacity-30"></div>
        <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-50 rounded-full opacity-30"></div>
        
        <div v-for="(service, index) in services" 
             :key="service.id" 
             class="group relative bg-white rounded-2xl border border-secondary-100 p-8 hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
          <!-- Card content -->
          <div class="relative z-10 flex flex-col flex-1">
            <div class="text-primary-500 text-5xl mb-6 transform group-hover:scale-105 transition-transform duration-300">
              <Icon :name="service.icon" />
            </div>
            <h3 class="text-2xl  mb-4 text-primary-800">{{ $t(`services.${service.id}.title`) }}</h3>
            <p class="text-gray-600 leading-relaxed flex-1">{{ $t(`services.${service.id}.description`) }}</p>
            
            <!-- Hover reveal button -->
            <div class="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="inline-flex items-center text-primary-500  hover:text-primary-600">
                Learn more
                <Icon name="mdi:arrow-right" class="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <!-- Decorative background element -->
          <div class="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        </div>
      </div>
    </div>
  </section>
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