"use client";

import { useLocale } from "next-intl";
import { useCallback } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = useCallback((next: string) => {
    router.replace(pathname, { locale: next });
  }, [pathname, router]);

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        className={`rounded px-1.5 py-0.5 transition-colors ${
          locale === "th"
            ? "bg-primary/10 font-semibold text-primary"
            : "text-muted-foreground hover:text-primary"
        }`}
        onClick={() => switchLocale("th")}
      >
        🇹🇭 TH
      </button>
      <span className="text-border">/</span>
      <button
        className={`rounded px-1.5 py-0.5 transition-colors ${
          locale === "en"
            ? "bg-primary/10 font-semibold text-primary"
            : "text-muted-foreground hover:text-primary"
        }`}
        onClick={() => switchLocale("en")}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}
