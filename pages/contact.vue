<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Main Content Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Contact Information Card -->
            <div class="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100">
              <h2 class="text-3xl  mb-8 text-primary-900">{{ $t('contact.getInTouch') }}</h2>
              
              <div class="space-y-8">
                <div class="flex items-start space-x-4 group">
                  <div class="text-primary-600 text-2xl p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                    <Icon name="mdi:map-marker" />
                  </div>
                  <div>
                    <h3 class=" text-lg mb-1 text-gray-900">{{ $t('footer.contact') }}</h3>
                    <p class="text-gray-600">{{ $t('footer.address') }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 group">
                  <div class="text-primary-600 text-2xl p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                    <Icon name="mdi:phone" />
                  </div>
                  <div>
                    <h3 class=" text-lg mb-1 text-gray-900">{{ $t('contact.phone') }}</h3>
                    <p class="text-gray-600">{{ $t('footer.phone') }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 group">
                  <div class="text-primary-600 text-2xl p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                    <Icon name="mdi:email" />
                  </div>
                  <div>
                    <h3 class=" text-lg mb-1 text-gray-900">{{ $t('contact.email') }}</h3>
                    <p class="text-gray-600">info@fisioalcaraz.com</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4 group">
                  <div class="text-primary-600 text-2xl p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                    <Icon name="mdi:clock" />
                  </div>
                  <div>
                    <h3 class=" text-lg mb-1 text-gray-900">{{ $t('footer.hours') }}</h3>
                    <p class="text-gray-600">{{ $t('footer.weekdays') }}</p>
                    <p class="text-gray-600">{{ $t('footer.saturday') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map Section -->
            <div class="h-[600px] lg:h-auto rounded-2xl overflow-hidden border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5985.8343655720355!2d2.1333771760780897!3d41.39760487129851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4990004524385%3A0xf42e588cb430306c!2sFisioterapia%20Alcaraz!5e0!3m2!1sen!2ses!4v1747214915503!5m2!1sen!2ses"
                width="100%"
                height="100%"
                style="border: none"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// No script needed for this simplified version
</script> 