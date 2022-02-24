import {i18n} from 'i18next';
import english from './English.json';
import italian from './Italian.json';
import tamil from './Tamil.json';
import french from './French.json';
import {initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources: {
    en: english,
    it: italian,
    tn: tamil,
    fr: french,
  },
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
