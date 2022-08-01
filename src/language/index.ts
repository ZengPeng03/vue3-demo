import { createI18n } from "vue-i18n";
import cn from "./cn";
import en from "./en";

let lang;
console.log("当前系统语言环境：", navigator.language);
switch (navigator.language) {
  case "zh-CN":
    lang = "cn";
    break;
  case "en":
    lang = "en";
    break;
  default:
    lang = "en";
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: lang,
  messages: {
    cn: cn,
    en: en,
  },
});

export default i18n;
