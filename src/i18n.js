import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import kmTranslation from './locales/km.json';
import enTranslation from './locales/en.json';

const resources = {
  km: { translation: kmTranslation },
  en: { translation: enTranslation },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // lng: 'km', // default language
    fallbackLng: 'km',
    interpolation: { escapeValue: false },
    detection: { order: ['localStorage', 'navigator'], caches: ['localStorage'] },
  });

export default i18n;