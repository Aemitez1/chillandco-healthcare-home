import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("ui");

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-7xl font-bold text-primary">{t("notFound.title")}</p>
      <h1 className="mt-4 text-2xl font-semibold text-foreground">
        {t("notFound.subtitle")}
      </h1>
      <p className="mt-3 max-w-sm text-muted-foreground">{t("notFound.message")}</p>
      <Link
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        href="/"
      >
        ← {t("notFound.back")}
      </Link>
    </main>
  );
}
