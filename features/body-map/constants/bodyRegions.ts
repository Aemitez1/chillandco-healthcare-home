export type BodyRegion = {
  diseaseSlugs: string[];
  id: string; // matches SVG path/group id
};

export const bodyRegions: BodyRegion[] = [
  {
    diseaseSlugs: ["rotator-cuff-injury", "frozen-shoulder"],
    id: "shoulder",
  },
  {
    diseaseSlugs: ["low-back-pain"],
    id: "lower-back",
  },
  {
    diseaseSlugs: ["tennis-elbow"],
    id: "elbow",
  },
  {
    diseaseSlugs: ["fibromyalgia"],
    id: "full-body",
  },
  {
    diseaseSlugs: ["plantar-fasciitis"],
    id: "foot",
  },
];
