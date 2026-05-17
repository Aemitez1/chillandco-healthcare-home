"use client";

import { useSearchParams } from "next/navigation";

import type { DiseaseDisplay } from "@/features/diseases/types";

import { bodyRegions } from "@/features/body-map/constants/bodyRegions";

export function useDiseaseListPage(diseases: DiseaseDisplay[]) {
  const params = useSearchParams();
  const regionFilter = params.get("region");

  const filteredDiseases = regionFilter
    ? diseases.filter((d) => d.bodyRegions.includes(regionFilter))
    : diseases;

  const activeRegion = bodyRegions.find((r) => r.id === regionFilter);

  return { activeRegion, filteredDiseases, regionFilter };
}
