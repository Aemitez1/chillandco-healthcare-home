"use client";

import { useTranslations } from "next-intl";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

import type { ExerciseDisplay } from "../types";

type Props = {
  exercise: ExerciseDisplay;
};

export default function ExerciseCard({ exercise }: Props) {
  const t = useTranslations("ui");

  return (
    <Link href={`/exercises/${exercise.slug}`}>
      <Card className="h-full cursor-pointer transition-shadow hover:shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">{exercise.name}</CardTitle>
          <p className="text-xs text-muted-foreground">{exercise.nameEn}</p>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {exercise.description}
          </p>
          <p className="mt-2 text-xs text-primary">
            {exercise.steps.length} {t("exercise.count")} →
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
