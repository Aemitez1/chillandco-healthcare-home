import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import type { DiseaseDisplay } from "@/features/diseases/types";
import type { ExerciseDisplay } from "@/features/exercises/types";

import { env } from "@/env"
  ;
import { diseases } from "@/features/diseases/constants/diseases";
import ExerciseDetail from "@/features/exercises/components/ExerciseDetail";
import { exercises } from "@/features/exercises/constants/exercises";
type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const exercise = exercises.find((e) => e.slug === slug);
  if (!exercise) return {};
  const t = await getTranslations({ locale, namespace: "exercises" });
  const content = t.raw(slug) as { description: string; name: string };
  const base = env.NEXT_PUBLIC_BASE_URL;

  return {
    alternates: {
      canonical: `${base}/${locale}/exercises/${slug}`,
      languages: {
        en: `${base}/en/exercises/${slug}`,
        th: `${base}/th/exercises/${slug}`,
      },
    },
    description: content.description,
    openGraph: {
      description: content.description,
      title: `${content.name} — Wellness`,
      url: `${base}/${locale}/exercises/${slug}`,
    },
    title: `${content.name} — Wellness`,
  };
}

export async function generateStaticParams() {
  return exercises.flatMap((e) =>
    ["th", "en"].map((locale) => ({ locale, slug: e.slug }))
  );
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const exercise = exercises.find((e) => e.slug === slug);
  if (!exercise) notFound();

  const tExercises = await getTranslations("exercises");
  const tDiseases = await getTranslations("diseases");

  const exerciseContent = tExercises.raw(slug) as {
    cautions: string[];
    description: string;
    name: string;
    steps: string[];
  };

  const displayExercise: ExerciseDisplay = { ...exercise, ...exerciseContent };

  const relatedDiseases: DiseaseDisplay[] = diseases
    .filter((d) => exercise.diseaseSlugs.includes(d.slug))
    .map((d) => {
      const dc = tDiseases.raw(d.slug) as {
        causes: string[];
        description: string;
        name: string;
        symptoms: string[];
      };
      return { ...d, ...dc };
    });

  return <ExerciseDetail exercise={displayExercise} relatedDiseases={relatedDiseases} />;
}
