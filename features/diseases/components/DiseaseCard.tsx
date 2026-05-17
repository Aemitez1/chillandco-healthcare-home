"use client";

import { useTranslations } from "next-intl";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";

import type { DiseaseDisplay } from "../types";

type Props = {
  disease: DiseaseDisplay;
};

export default function DiseaseCard({ disease }: Props) {
  const t = useTranslations("ui");

  return (
    <Link href={`/diseases/${disease.slug}`}>
      <Card className="h-full cursor-pointer transition-shadow hover:shadow-md">
        <CardHeader className="pb-2">
          <div className="mb-1 flex flex-wrap gap-2">
            {disease.bodyRegions.map((r) => (
              <Badge key={r} className="text-xs" variant="outline">
                {t(`regions.${r}` as "regions.shoulder")}
              </Badge>
            ))}
          </div>
          <CardTitle className="text-base leading-snug">{disease.name}</CardTitle>
          <p className="text-xs text-muted-foreground">{disease.nameEn}</p>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {disease.description}
          </p>
          <p className="mt-2 text-xs text-primary">
            {disease.exerciseSlugs.length} {t("disease.exercisesLabel")} →
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
