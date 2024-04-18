import { createI18n } from 'vue-i18n';
import de from '../i18n/de.json';
import en from '../i18n/en.json';
import ja from '../i18n/ja-JP.json';
import numberFormats from "../i18n/number-formats";
import datetimeFormats from "../i18n/date-time-formats";


const i18n = createI18n({
  locale: navigator.language || 'de',
  fallbackLocale: 'de',
  messages: {
    de: de,
    en: en,
    ja: ja,
  },
  datetimeFormats,
  numberFormats
});

// Hot updates
if (import.meta.hot) {
  import.meta.hot.accept(['../i18n/en.json', '../i18n/de.json'], function () {
    const newDe = require('../i18n/de.json');
    const newEn = require('../i18n/en.json');
    i18n.setLocaleMessage('en', newEn);
    i18n.setLocaleMessage('de', newDe);
  });
}





export default i18n;
