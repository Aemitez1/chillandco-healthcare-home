"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { Link } from "@/i18n/navigation";

type Props = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function Error({ error, unstable_retry }: Props) {
  const t = useTranslations("ui");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
        <span className="text-3xl">⚠️</span>
      </div>
      <h1 className="text-2xl font-semibold text-foreground">
        {t("error.title")}
      </h1>
      <p className="mt-3 max-w-sm text-muted-foreground">{t("error.message")}</p>
      <div className="mt-8 flex gap-3">
        <button
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          onClick={unstable_retry}
        >
          {t("error.retry")}
        </button>
        <Link
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          href="/"
        >
          {t("error.back")}
        </Link>
      </div>
    </main>
  );
}
