import { useTranslations } from "next-intl";

import { Link } from "@/i18n/navigation";

import LocaleSwitcher from "./LocaleSwitcher";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const t = useTranslations("ui");

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
        <Link
          className="text-lg font-bold text-primary hover:text-primary/80"
          href="/"
        >
          {t("header.brand")}
          <span className="ml-1 text-sm font-normal text-muted-foreground">
            {t("header.subtitle")}
          </span>
        </Link>
        <nav className="flex gap-4 text-sm">
          <Link className="text-muted-foreground hover:text-foreground" href="/">
            {t("nav.home")}
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="/diseases">
            {t("nav.diseases")}
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
}
