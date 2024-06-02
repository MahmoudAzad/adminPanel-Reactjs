import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        MahmoudAzad: "Mahmoud Azad",
      },
    },
    fa: {
      translation: {
        MahmoudAzad: "محمود آزاد",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
