import i18n from "i18n";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// change it to nextjs one
i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        keySeparator: '.',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
    })

export default i18n;