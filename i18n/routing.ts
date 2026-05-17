import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  defaultLocale: "th",
  localePrefix: "always",
  locales: ["th", "en"],
});
