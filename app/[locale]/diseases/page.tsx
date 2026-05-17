import { getTranslations, setRequestLocale } from "next-intl/server";
import { Suspense } from "react";

import type { DiseaseDisplay } from "@/features/diseases/types";

import { env } from "@/env";
import { diseases } from "@/features/diseases/constants/diseases";

import DiseaseListPage from "./DiseaseListPage";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const base = env.NEXT_PUBLIC_BASE_URL;

  return {
    alternates: {
      canonical: `${base}/${locale}/diseases`,
      languages: {
        en: `${base}/en/diseases`,
        th: `${base}/th/diseases`,
      },
    },
    description: t("metadata.diseasesDescription"),
    openGraph: {
      description: t("metadata.diseasesDescription"),
      title: t("metadata.diseasesTitle"),
      url: `${base}/${locale}/diseases`,
    },
    title: t("metadata.diseasesTitle"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("diseases");

  const translatedDiseases: DiseaseDisplay[] = diseases.map((d) => {
    const content = t.raw(d.slug) as {
      causes: string[];
      description: string;
      name: string;
      symptoms: string[];
    };
    return { ...d, ...content };
  });

  return (
    <Suspense>
      <DiseaseListPage diseases={translatedDiseases} />
    </Suspense>
  );
}
