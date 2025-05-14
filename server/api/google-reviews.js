import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const placeId = query.placeId
  const language = query.language
  console.log('[Google Reviews API] Language:', language)

  console.log('[Google Reviews API] Request received for placeId:', placeId)

  if (!placeId) {
    console.error('[Google Reviews API] Missing placeId parameter')
    throw createError({
      statusCode: 400,
      message: 'Place ID is required'
    })
  }

  try {
    console.log('[Google Reviews API] Fetching reviews from Google Places API')
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=reviews&languageCode=${language}&key=${process.env.GOOGLE_MAPS_API_KEY}`
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('[Google Reviews API] Failed to fetch reviews:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      })
      throw new Error(errorData.error?.message || 'Failed to fetch reviews from Google Places API')
    }

    const data = await response.json()
    console.log('[Google Reviews API] Successfully fetched reviews')
    return data
  } catch (error) {
    console.error('[Google Reviews API] Error:', error.message)
    throw createError({
      statusCode: 500,
      message: error.message
    })
  }
}) 