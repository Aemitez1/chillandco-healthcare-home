import { getTranslations } from "next-intl/server";

import type { ExerciseDisplay } from "@/features/exercises/types";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ExerciseCard from "@/features/exercises/components/ExerciseCard";
import { Link } from "@/i18n/navigation";

import type { DiseaseDisplay } from "../types";

type Props = {
  disease: DiseaseDisplay;
  exercises: ExerciseDisplay[];
};

export default async function DiseaseDetail({ disease, exercises }: Props) {
  const t = await getTranslations("ui");

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex gap-1 text-sm text-muted-foreground">
        <Link className="hover:text-primary" href="/">
          {t("nav.home")}
        </Link>
        <span>/</span>
        <Link className="hover:text-primary" href="/diseases">
          {t("nav.diseases")}
        </Link>
        <span>/</span>
        <span className="text-foreground">{disease.name}</span>
      </div>

      {/* Title */}
      <div className="mb-2 flex flex-wrap gap-2">
        {disease.bodyRegions.map((r) => (
          <Badge key={r} variant="outline">
            {t(`regions.${r}` as "regions.shoulder")}
          </Badge>
        ))}
      </div>
      <h1 className="text-2xl font-bold text-foreground">{disease.name}</h1>
      <p className="mt-1 text-sm text-muted-foreground">{disease.nameEn}</p>

      <Separator className="my-6" />

      {/* Description */}
      <section>
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          {t("disease.about")}
        </h2>
        <p className="leading-relaxed text-foreground">{disease.description}</p>
      </section>

      {/* Symptoms */}
      <section className="mt-6">
        <h2 className="mb-3 text-lg font-semibold text-foreground">
          {t("disease.symptoms")}
        </h2>
        <ul className="space-y-1.5">
          {disease.symptoms.map((s, i) => (
            <li key={i} className="flex gap-2 text-foreground">
              <span className="mt-0.5 text-primary">✓</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Causes */}
      <section className="mt-6">
        <h2 className="mb-3 text-lg font-semibold text-foreground">
          {t("disease.causes")}
        </h2>
        <ul className="space-y-1.5">
          {disease.causes.map((c, i) => (
            <li key={i} className="flex gap-2 text-foreground">
              <span className="mt-0.5 text-amber-500">•</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <Separator className="my-6" />

      {/* Exercises */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          {t("disease.recommended")} ({exercises.length} {t("disease.exercises")})
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.slug} exercise={exercise} />
          ))}
        </div>
      </section>

      <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400">
        <strong>{t("disease.advisoryLabel")}</strong> {t("disease.advisoryText")}
      </div>
    </div>
  );
}
