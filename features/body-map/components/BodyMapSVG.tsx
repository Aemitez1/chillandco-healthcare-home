"use client";

import { useTranslations } from "next-intl";

import { regionConfig, useBodyMapSVG } from "./BodyMapSVG.hook";

export default function BodyMapSVG() {
  const { getDiseaseSlugs, getRegionStyle, handleClick, hovered, setHovered } = useBodyMapSVG();
  const t = useTranslations("ui");

  const regionLabel = (id: string) =>
    t(`regions.${id}` as "regions.shoulder");

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Tooltip */}
      <div className="flex h-7 items-center">
        {hovered && (
          <span className="rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-foreground shadow">
            {regionLabel(hovered)} — {getDiseaseSlugs(hovered).length}{" "}
            {t("bodymap.diseases")}
          </span>
        )}
      </div>

      <svg
        aria-label={t("bodymap.label")}
        className="w-48 drop-shadow-sm select-none md:w-64"
        viewBox="0 0 200 480"
      >
        {/* ── Head ── */}
        <ellipse cx="100" cy="42" fill="#f3f4f6" rx="28" ry="32" stroke="#d1d5db" strokeWidth="1" />

        {/* ── Neck ── */}
        <rect fill="#f3f4f6" height="20" rx="4" stroke="#d1d5db" strokeWidth="1" width="24" x="88" y="72" />

        {/* ── Torso ── */}
        <rect fill="#f3f4f6" height="110" rx="8" stroke="#d1d5db" strokeWidth="1" width="80" x="60" y="90" />

        {/* ── Shoulders (clickable) ── */}
        <ellipse
          aria-label={regionLabel("shoulder")} cx="48" cy="105" rx="22"
          ry="18"
          stroke={hovered === "shoulder" ? "#2563eb" : "#93c5fd"}
          strokeWidth="1.5"
          style={getRegionStyle("shoulder")}
          onClick={() => handleClick("shoulder")}
          onMouseEnter={() => setHovered("shoulder")}
          onMouseLeave={() => setHovered(null)}
        />
        <ellipse
          cx="152" cy="105" rx="22" ry="18"
          stroke={hovered === "shoulder" ? "#2563eb" : "#93c5fd"}
          strokeWidth="1.5"
          style={getRegionStyle("shoulder")}
          onClick={() => handleClick("shoulder")}
          onMouseEnter={() => setHovered("shoulder")}
          onMouseLeave={() => setHovered(null)}
        />

        {/* ── Elbow area (clickable) ── */}
        <rect
          aria-label={regionLabel("elbow")} height="55" rx="6" stroke={hovered === "elbow" ? "#ea580c" : "#fdba74"} strokeWidth="1.5"
          style={getRegionStyle("elbow")}
          width="20"
          x="22"
          y="118"
          onClick={() => handleClick("elbow")}
          onMouseEnter={() => setHovered("elbow")}
          onMouseLeave={() => setHovered(null)}
        />
        <ellipse
          cx="32" cy="178" rx="12" ry="10"
          stroke={hovered === "elbow" ? "#ea580c" : "#fdba74"}
          strokeWidth="1.5"
          style={getRegionStyle("elbow")}
          onClick={() => handleClick("elbow")}
          onMouseEnter={() => setHovered("elbow")}
          onMouseLeave={() => setHovered(null)}
        />
        <rect
          height="55" rx="6" stroke={hovered === "elbow" ? "#ea580c" : "#fdba74"} strokeWidth="1.5" style={getRegionStyle("elbow")}
          width="20"
          x="158"
          y="118"
          onClick={() => handleClick("elbow")}
          onMouseEnter={() => setHovered("elbow")}
          onMouseLeave={() => setHovered(null)}
        />
        <ellipse
          cx="168" cy="178" rx="12" ry="10"
          stroke={hovered === "elbow" ? "#ea580c" : "#fdba74"}
          strokeWidth="1.5"
          style={getRegionStyle("elbow")}
          onClick={() => handleClick("elbow")}
          onMouseEnter={() => setHovered("elbow")}
          onMouseLeave={() => setHovered(null)}
        />

        {/* ── Forearms ── */}
        <rect fill="#f3f4f6" height="50" rx="5" stroke="#d1d5db" strokeWidth="1" width="20" x="22" y="186" />
        <rect fill="#f3f4f6" height="50" rx="5" stroke="#d1d5db" strokeWidth="1" width="20" x="158" y="186" />

        {/* ── Hands ── */}
        <ellipse cx="32" cy="248" fill="#f3f4f6" rx="12" ry="14" stroke="#d1d5db" strokeWidth="1" />
        <ellipse cx="168" cy="248" fill="#f3f4f6" rx="12" ry="14" stroke="#d1d5db" strokeWidth="1" />

        {/* ── Lower back (clickable) ── */}
        <rect
          aria-label={regionLabel("lower-back")} height="40" rx="5" stroke={hovered === "lower-back" ? "#16a34a" : "#86efac"} strokeWidth="1.5"
          style={getRegionStyle("lower-back")}
          width="70"
          x="65"
          y="170"
          onClick={() => handleClick("lower-back")}
          onMouseEnter={() => setHovered("lower-back")}
          onMouseLeave={() => setHovered(null)}
        />

        {/* ── Hips / Pelvis ── */}
        <rect fill="#f3f4f6" height="35" rx="8" stroke="#d1d5db" strokeWidth="1" width="80" x="60" y="200" />

        {/* ── Thighs ── */}
        <rect fill="#f3f4f6" height="70" rx="8" stroke="#d1d5db" strokeWidth="1" width="32" x="63" y="232" />
        <rect fill="#f3f4f6" height="70" rx="8" stroke="#d1d5db" strokeWidth="1" width="32" x="105" y="232" />

        {/* ── Knees ── */}
        <ellipse cx="79" cy="308" fill="#f3f4f6" rx="17" ry="13" stroke="#d1d5db" strokeWidth="1" />
        <ellipse cx="121" cy="308" fill="#f3f4f6" rx="17" ry="13" stroke="#d1d5db" strokeWidth="1" />

        {/* ── Lower legs ── */}
        <rect fill="#f3f4f6" height="65" rx="7" stroke="#d1d5db" strokeWidth="1" width="32" x="63" y="318" />
        <rect fill="#f3f4f6" height="65" rx="7" stroke="#d1d5db" strokeWidth="1" width="32" x="105" y="318" />

        {/* ── Feet (clickable) ── */}
        <ellipse
          aria-label={regionLabel("foot")} cx="79" cy="393" rx="22"
          ry="13"
          stroke={hovered === "foot" ? "#d97706" : "#fcd34d"}
          strokeWidth="1.5"
          style={getRegionStyle("foot")}
          onClick={() => handleClick("foot")}
          onMouseEnter={() => setHovered("foot")}
          onMouseLeave={() => setHovered(null)}
        />
        <ellipse
          cx="121" cy="393" rx="22" ry="13"
          stroke={hovered === "foot" ? "#d97706" : "#fcd34d"}
          strokeWidth="1.5"
          style={getRegionStyle("foot")}
          onClick={() => handleClick("foot")}
          onMouseEnter={() => setHovered("foot")}
          onMouseLeave={() => setHovered(null)}
        />

        {/* ── Full-body indicator ── */}
        <circle
          aria-label={regionLabel("full-body")} cx="100"
          cy="135"
          r="12"
          stroke={hovered === "full-body" ? "#9333ea" : "#d8b4fe"}
          strokeWidth="1.5"
          style={getRegionStyle("full-body")}
          onClick={() => handleClick("full-body")}
          onMouseEnter={() => setHovered("full-body")}
          onMouseLeave={() => setHovered(null)}
        />
        <text
          fill={hovered === "full-body" ? "#fff" : "#7e22ce"} fontSize="8"
          style={{ pointerEvents: "none", userSelect: "none" }}
          textAnchor="middle"
          x="100"
          y="139"
        >
          FM
        </text>
      </svg>

      {/* Legend */}
      <div className="mt-2 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
        {Object.entries(regionConfig).map(([id, c]) => (
          <div key={id} className="flex items-center gap-1.5">
            <span
              className="inline-block h-3 w-3 rounded-full border"
              style={{ background: c.hoverColor, borderColor: c.hoverColor }}
            />
            {regionLabel(id)}
          </div>
        ))}
      </div>
    </div>
  );
}
