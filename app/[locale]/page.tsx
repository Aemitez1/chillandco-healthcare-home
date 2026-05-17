import { getTranslations, setRequestLocale } from "next-intl/server";

import { env } from "@/env";
import HomePage from "@/features/home/components/HomePage";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const base = env.NEXT_PUBLIC_BASE_URL;

  return {
    alternates: {
      canonical: `${base}/${locale}`,
      languages: {
        en: `${base}/en`,
        th: `${base}/th`,
      },
    },
    description: t("metadata.homeDescription"),
    openGraph: {
      description: t("metadata.homeDescription"),
      title: t("metadata.homeTitle"),
      url: `${base}/${locale}`,
    },
    title: t("metadata.homeTitle"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomePage />;
}
