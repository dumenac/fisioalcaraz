<template>
  <div class="google-reviews">
    <h2 class="text-2xl  mb-6 text-center">{{ $t('reviews.title') }}</h2>
    <div v-if="loading" class="text-center">
      <p>{{ $t('reviews.loading') }}</p>
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      <p>{{ error }}</p>
    </div>
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        <div v-for="review in displayedReviews" :key="review.name" class="review-card">
          <div class="review-header">
            <div class="review-rating">
              <span v-for="i in 5" :key="i" class="text-yellow-400">
                <Icon :name="i <= review.rating ? 'ph:star-fill' : 'ph:star'" />
              </span>
            </div>
            <a 
              :href="review.googleMapsUri" 
              target="_blank" 
              rel="noopener noreferrer"
              class="google-link"
            >
              <Icon name="logos:google-icon" class="w-5 h-5" />
            </a>
          </div>
          <p class="review-text">{{ review.text?.text || review.originalText?.text }}</p>
          <div class="review-footer">
            <div class="review-author">
              <img
                referrerPolicy="no-referrer"
                v-if="review.authorAttribution?.photoUri" 
                :src="review.authorAttribution.photoUri" 
                :alt="review.authorAttribution?.displayName || $t('reviews.anonymous')"
                class="w-6 h-6 rounded-full object-cover"
              />
              <Icon v-else name="ph:user-circle" class="w-6 h-6 text-gray-400" />
              <span>{{ review.authorAttribution?.displayName || $t('reviews.anonymous') }}</span>
            </div>
            <span class="review-date">{{ review.relativePublishTimeDescription }}</span>
          </div>
        </div>
      </div>
      <div v-if="hasMoreReviews" class="text-center mt-8">
        <button 
          @click="loadMore" 
          class="view-more-button"
        >
          <Icon name="ph:plus-circle" class="w-5 h-5 mr-2" />
          {{ $t('reviews.viewMore') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const { locale } = useI18n()
const reviews = ref([])
const loading = ref(true)
const error = ref(null)
const placeId = 'ChIJhUNSBACZpBIRbDAwtIxYLvQ'
const reviewsToShow = ref(3)

const displayedReviews = computed(() => {
  return reviews.value.slice(0, reviewsToShow.value)
})

const hasMoreReviews = computed(() => {
  return reviewsToShow.value < reviews.value.length
})

const loadMore = () => {
  reviewsToShow.value += 3
}

onMounted(async () => {
  try {
    const response = await fetch(`/api/google-reviews?placeId=${placeId}&language=${locale.value}`)
    if (!response.ok) {
      throw new Error('Failed to fetch reviews')
    }
    const data = await response.json()
    reviews.value = data.reviews
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.google-reviews {
  padding: 2rem 0;
}

.review-card {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.review-rating {
  display: flex;
  gap: 0.25rem;
}

.google-link {
  color: #4a5568;
  transition: color 0.2s;
}

.google-link:hover {
  color: #2d3748;
}

.review-text {
  flex-grow: 1;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.review-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4a5568;
  font-weight: 500;
}

.review-date {
  color: #718096;
  font-size: 0.875rem;
}

.view-more-button {
  display: inline-flex;
  align-items: center;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  color: #4a5568;
  font-weight: 500;
  transition: all 0.2s;
}

.view-more-button:hover {
  background: #f7fafc;
  color: #2d3748;
  border-color: #cbd5e0;
}
</style> 