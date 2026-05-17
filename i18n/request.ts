import { getRequestConfig } from "next-intl/server";

import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) ?? routing.defaultLocale;

  const [ui, diseases, exercises] = await Promise.all([
    import(`../messages/${locale}/ui.json`),
    import(`../messages/${locale}/diseases.json`),
    import(`../messages/${locale}/exercises.json`),
  ]);

  return {
    locale,
    messages: {
      diseases: diseases.default,
      exercises: exercises.default,
      ui: ui.default,
    },
  };
});
