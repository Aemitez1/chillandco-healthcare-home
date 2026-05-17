import { env } from "@/env";
import { diseases } from "@/features/diseases/constants/diseases";
import { exercises } from "@/features/exercises/constants/exercises";

const base = env.NEXT_PUBLIC_BASE_URL
const locales = ["th", "en"];

export default function sitemap() {
  const staticRoutes = locales.flatMap((locale) => [
    { lastModified: new Date(), url: `${base}/${locale}` },
    { lastModified: new Date(), url: `${base}/${locale}/diseases` },
  ]);

  const diseaseRoutes = diseases.flatMap((d) =>
    locales.map((locale) => ({
      lastModified: new Date(),
      url: `${base}/${locale}/diseases/${d.slug}`,
    }))
  );

  const exerciseRoutes = exercises.flatMap((e) =>
    locales.map((locale) => ({
      lastModified: new Date(),
      url: `${base}/${locale}/exercises/${e.slug}`,
    }))
  );

  return [...staticRoutes, ...diseaseRoutes, ...exerciseRoutes];
}
