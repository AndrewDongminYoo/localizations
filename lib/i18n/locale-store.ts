const LOCALE_CHANGE_EVENT = "localechange";
const LOCALE_STORAGE_KEY = "locale";

export const DEFAULT_LOCALE = "en";

export type Locale = "en" | "ko";

type LocaleGetter = Pick<Storage, "getItem">;
type LocaleSetter = Pick<Storage, "setItem">;

function getBrowserStorage(): Storage | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  return window.localStorage;
}

export function resolveLocale(value: string | null): Locale {
  return value === "ko" ? "ko" : DEFAULT_LOCALE;
}

export function readStoredLocale(storage: LocaleGetter | undefined = getBrowserStorage()): Locale {
  return resolveLocale(storage?.getItem(LOCALE_STORAGE_KEY) ?? null);
}

export function getLocaleSnapshot(): Locale {
  return readStoredLocale();
}

export function getLocaleServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

export function persistLocale(
  locale: Locale,
  storage: LocaleSetter | undefined = getBrowserStorage()
) {
  if (!storage || typeof window === "undefined") {
    return;
  }

  storage.setItem(LOCALE_STORAGE_KEY, locale);
  window.dispatchEvent(new Event(LOCALE_CHANGE_EVENT));
}

export function subscribeToLocale(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === LOCALE_STORAGE_KEY) {
      callback();
    }
  };
  const handleLocaleChange = () => {
    callback();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener(LOCALE_CHANGE_EVENT, handleLocaleChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(LOCALE_CHANGE_EVENT, handleLocaleChange);
  };
}
