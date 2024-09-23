// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // Загружает переводы с сервера
  .use(LanguageDetector) // Определяет язык пользователя
  .use(initReactI18next) // Инициализирует react-i18next
  .init({
    fallbackLng: "en", // Язык по умолчанию
    debug: true, // Включает отладку
    interpolation: {
      escapeValue: false, // Не экранирует значения
    },
  });

export default i18n;
