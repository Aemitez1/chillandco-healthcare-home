"use client";

import { useCallback, useState } from "react";

import { useRouter } from "@/i18n/navigation";

import { bodyRegions } from "../constants/bodyRegions";

export const regionConfig: Record<
  string,
  { color: string; hoverColor: string }
> = {
  elbow: { color: "#fed7aa", hoverColor: "#f97316" },
  foot: { color: "#fde68a", hoverColor: "#f59e0b" },
  "full-body": { color: "#e9d5ff", hoverColor: "#a855f7" },
  "lower-back": { color: "#bbf7d0", hoverColor: "#22c55e" },
  shoulder: { color: "#bfdbfe", hoverColor: "#3b82f6" },
};

export function useBodyMapSVG() {
  const [hovered, setHovered] = useState<null | string>(null);
  const router = useRouter();



  const getDiseaseSlugs = useCallback((regionId: string) =>
    bodyRegions.find((r) => r.id === regionId)?.diseaseSlugs ?? [],
    []
  );

  const handleClick = useCallback((regionId: string) => {
    const slugs = getDiseaseSlugs(regionId);
    if (slugs.length === 1) {
      router.push(`/diseases/${slugs[0]}`);
    } else if (slugs.length > 1) {
      router.push(`/diseases?region=${regionId}`);
    }
  }, [ router, getDiseaseSlugs]);

  const getRegionStyle = useCallback((id: string) => ({
    cursor: "pointer",
    fill:
      hovered === id
        ? regionConfig[id]?.hoverColor
        : (regionConfig[id]?.color ?? "#e5e7eb"),
    transition: "fill 0.15s",
  }), [hovered]);

  return { getDiseaseSlugs, getRegionStyle, handleClick, hovered, setHovered };
}
