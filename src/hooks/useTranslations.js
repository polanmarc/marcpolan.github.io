import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../traduction/en/translation.json';
import esTranslations from '../traduction/es/translation.json';
import caTranslations from '../traduction/ca/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      es: {
        translation: esTranslations
      },
      ca: {
        translation: caTranslations
      }
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
