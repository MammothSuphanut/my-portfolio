import { create } from "zustand";
import { I18n, TranslateOptions } from "i18n-js";
import en from "../translations/en.json";
import th from "../translations/th.json";

const i18n = new I18n({
  th: th,
  en: en,
});
i18n.enableFallback = true;

interface LocalizationStore {
  locale: string;
  setLocale: (locale: string) => void;
  t: (
    scope: string | string[],
    options?: TranslateOptions | undefined
  ) => string;
}

const useLocalizationStore = create<LocalizationStore>((set) => {
  let localeDefault = "en";

  set({ locale: localeDefault }); // Set the default locale using set

  return {
    locale: localeDefault,
    setLocale: (locale) => {
      set({ locale });
      localeDefault = locale;
    },
    t: (scope, options) => i18n.t(scope, { locale: localeDefault, ...options }),
  };
});

export const useLocalization = () => {
  const { locale, setLocale, t } = useLocalizationStore();
  return { locale, setLocale, t };
};
