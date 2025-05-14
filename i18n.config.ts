import es from './i18n/locales/es.json'
import en from './i18n/locales/en.json'
import ca from './i18n/locales/ca.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'es',
  messages: {
    es,
    en,
    ca
  }
})) 