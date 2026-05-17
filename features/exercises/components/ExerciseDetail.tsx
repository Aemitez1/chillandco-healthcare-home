import { getTranslations } from "next-intl/server";

import type { DiseaseDisplay } from "@/features/diseases/types";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/navigation";

import type { ExerciseDisplay } from "../types";

import YouTubeEmbed from "./YouTubeEmbed";

type Props = {
  exercise: ExerciseDisplay;
  relatedDiseases: DiseaseDisplay[];
};

export default async function ExerciseDetail({ exercise, relatedDiseases }: Props) {
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
        <span className="text-foreground">{exercise.name}</span>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-foreground">{exercise.name}</h1>
      <p className="mt-1 text-muted-foreground">{exercise.nameEn}</p>

      {/* Related diseases */}
      <div className="mt-3 flex flex-wrap gap-2">
        {relatedDiseases.map((d) => (
          <Link key={d.slug} href={`/diseases/${d.slug}`}>
            <Badge className="cursor-pointer hover:bg-primary/10" variant="secondary">
              {d.name}
            </Badge>
          </Link>
        ))}
      </div>

      <Separator className="my-6" />

      {/* Video */}
      <YouTubeEmbed title={exercise.name} youtubeId={exercise.youtubeId} />

      <Separator className="my-6" />

      {/* Description */}
      <section>
        <h2 className="mb-2 text-lg font-semibold text-foreground">
          {t("exercise.about")}
        </h2>
        <p className="leading-relaxed text-foreground">{exercise.description}</p>
      </section>

      {/* Steps */}
      <section className="mt-6">
        <h2 className="mb-3 text-lg font-semibold text-foreground">
          {t("exercise.steps")}
        </h2>
        <ol className="space-y-2">
          {exercise.steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span className="text-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Cautions */}
      {exercise.cautions.length > 0 && (
        <section className="mt-6">
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {t("exercise.cautions")}
          </h2>
          <ul className="space-y-1.5">
            {exercise.cautions.map((c, i) => (
              <li key={i} className="flex gap-2 text-sm text-amber-800 dark:text-amber-400">
                <span>•</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
