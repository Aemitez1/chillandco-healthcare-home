import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import type { DiseaseDisplay } from "@/features/diseases/types";
import type { ExerciseDisplay } from "@/features/exercises/types";

import { env } from "@/env";
import DiseaseDetail from "@/features/diseases/components/DiseaseDetail";
import { diseases } from "@/features/diseases/constants/diseases";
import { exercises } from "@/features/exercises/constants/exercises";
type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};
  const t = await getTranslations({ locale, namespace: "diseases" });
  const content = t.raw(slug) as { description: string; name: string };
  const base = env.NEXT_PUBLIC_BASE_URL;

  return {
    alternates: {
      canonical: `${base}/${locale}/diseases/${slug}`,
      languages: {
        en: `${base}/en/diseases/${slug}`,
        th: `${base}/th/diseases/${slug}`,
      },
    },
    description: content.description,
    openGraph: {
      description: content.description,
      title: `${content.name} — Wellness`,
      url: `${base}/${locale}/diseases/${slug}`,
    },
    title: `${content.name} — Wellness`,
  };
}

export async function generateStaticParams() {
  return diseases.flatMap((d) =>
    ["th", "en"].map((locale) => ({ locale, slug: d.slug }))
  );
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const tDiseases = await getTranslations("diseases");
  const tExercises = await getTranslations("exercises");

  const diseaseContent = tDiseases.raw(slug) as {
    causes: string[];
    description: string;
    name: string;
    symptoms: string[];
  };

  const displayDisease: DiseaseDisplay = { ...disease, ...diseaseContent };

  const relatedExercises: ExerciseDisplay[] = exercises
    .filter((e) => disease.exerciseSlugs.includes(e.slug))
    .map((e) => {
      const ec = tExercises.raw(e.slug) as {
        cautions: string[];
        description: string;
        name: string;
        steps: string[];
      };
      return { ...e, ...ec };
    });

  return <DiseaseDetail disease={displayDisease} exercises={relatedExercises} />;
}
