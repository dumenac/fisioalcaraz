<template>
  <section class="bg-secondary-50 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12 text-primary-800">{{ $t('whyChooseUs.title') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="text-primary-600 text-4xl mb-4">
            <Icon name="mdi:account-group" />
          </div>
          <h3 class="text-xl font-semibold mb-3 text-primary-700">{{ $t('whyChooseUs.expertTeam.title') }}</h3>
          <p class="text-gray-600">{{ $t('whyChooseUs.expertTeam.description') }}</p>
        </div>
        <div class="text-center">
          <div class="text-primary-600 text-4xl mb-4">
            <Icon name="mdi:medical-bag" />
          </div>
          <h3 class="text-xl font-semibold mb-3 text-primary-700">{{ $t('whyChooseUs.modernEquipment.title') }}</h3>
          <p class="text-gray-600">{{ $t('whyChooseUs.modernEquipment.description') }}</p>
        </div>
        <div class="text-center">
          <div class="text-primary-600 text-4xl mb-4">
            <Icon name="mdi:heart" />
          </div>
          <h3 class="text-xl font-semibold mb-3 text-primary-700">{{ $t('whyChooseUs.personalizedCare.title') }}</h3>
          <p class="text-gray-600">{{ $t('whyChooseUs.personalizedCare.description') }}</p>
        </div>
      </div>
    </div>
  </section>
</template> 