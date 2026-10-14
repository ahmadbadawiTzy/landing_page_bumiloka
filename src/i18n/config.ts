import { Locale } from "./types";
import { idDictionary } from "./dictionaries/id";
import { enDictionary } from "./dictionaries/en";

export const DEFAULT_LOCALE: Locale = "id";
export const LOCALES: Locale[] = ["id", "en"];
export const LOCALE_STORAGE_KEY = "bumiloka-lang";

export const dictionaries = {
  id: idDictionary,
  en: enDictionary,
};
