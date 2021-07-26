import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import translationEN from './locales/en/translationEN.json';
import translationDK from './locales/dk/translationDK.json';

 // the translations


 const resources = {

  en : {
      translation:translationEN,
  },
  dk:{
      translation:translationDK,
  }
 };
 i18n.use(initReactI18next).init({
   resources,
   lng:'en',
   keySeparator:false, // we do not use keys in form messages.welcome
  interpolation:{
      escapeValue:true,
  }

 });

 export default i18n;
