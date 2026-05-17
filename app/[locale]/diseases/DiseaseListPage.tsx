"use client";

import { useTranslations } from "next-intl";

import type { DiseaseDisplay } from "@/features/diseases/types";

import { bodyRegions } from "@/features/body-map/constants/bodyRegions";
import DiseaseCard from "@/features/diseases/components/DiseaseCard";
import { Link } from "@/i18n/navigation";

import { useDiseaseListPage } from "./DiseaseListPage.hook";

type Props = {
  diseases: DiseaseDisplay[];
};

export default function DiseaseListPage({ diseases }: Props) {
  const t = useTranslations("ui");
  const { activeRegion, filteredDiseases, regionFilter } = useDiseaseListPage(diseases);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6 flex gap-1 text-sm text-muted-foreground">
        <Link className="hover:text-primary" href="/">
          {t("nav.home")}
        </Link>
        <span>/</span>
        <span className="text-foreground">{t("nav.diseases")}</span>
      </div>

      <h1 className="mb-2 text-2xl font-bold text-foreground">
        {t("disease.muscle")}
      </h1>

      {/* Region filter tabs */}
      <div className="mt-4 mb-6 flex flex-wrap gap-2">
        <Link
          className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
            !regionFilter
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border text-muted-foreground hover:border-primary/50"
          }`}
          href="/diseases"
        >
          {t("disease.allFilter")}
        </Link>
        {bodyRegions.map((r) => (
          <Link
            key={r.id}
            className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
              regionFilter === r.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:border-primary/50"
            }`}
            href={`/diseases?region=${r.id}`}
          >
            {t(`regions.${r.id}` as "regions.shoulder")}
          </Link>
        ))}
      </div>

      {activeRegion && (
        <p className="mb-4 text-sm text-muted-foreground">
          {t("disease.showing")}{" "}
          <strong>{t(`regions.${activeRegion.id}` as "regions.shoulder")}</strong>{" "}
          — {filteredDiseases.length} {t("disease.count")}
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDiseases.map((d) => (
          <DiseaseCard key={d.slug} disease={d} />
        ))}
      </div>
    </div>
  );
}
