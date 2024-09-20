import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export const locales = ["", "en", "nl", "de"];
export const localeNames: any = {
  en: "English",
  nl: "Nederlands",
  de: "Deutsch",
};
export const defaultLocale = "en";

// If you wish to automatically redirect users to a URL that matches their browser's language setting,
// you can use the `getLocale` to get the browser's language.
export function getLocale(headers: any): string {
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

// const dictionaries: any = {
//   en: () => import("@/locales/en.json").then((module) => module.default),
//   nl: () => import("@/locales/nl.json").then((module) => module.default),
//   de: () => import("@/locales/de.json").then((module) => module.default),
// };

// export const getDictionary = async (locale: string) => {
//   // if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
//   //   locale = "zh";
//   // }

//   if (!Object.keys(dictionaries).includes(locale)) {
//     locale = "en";
//   }

//   return dictionaries[locale]();
// };

