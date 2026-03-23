import assert from "node:assert/strict";
import test from "node:test";

import { DEFAULT_LOCALE, readStoredLocale, resolveLocale } from "./locale-store";

test("resolveLocale keeps supported locales", () => {
  assert.equal(resolveLocale("en"), "en");
  assert.equal(resolveLocale("ko"), "ko");
});

test("resolveLocale falls back for unsupported locales", () => {
  assert.equal(resolveLocale(null), DEFAULT_LOCALE);
  assert.equal(resolveLocale("fr"), DEFAULT_LOCALE);
});

test("readStoredLocale returns the persisted locale when valid", () => {
  const storage = {
    getItem(key: string) {
      return key === "locale" ? "ko" : null;
    },
  };

  assert.equal(readStoredLocale(storage), "ko");
});
