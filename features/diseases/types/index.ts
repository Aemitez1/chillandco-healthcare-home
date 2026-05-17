export type Disease = {
  bodyRegions: string[]; // matches SVG region IDs
  exerciseSlugs: string[];
  nameEn: string;
  slug: string;
};

export type DiseaseDisplay = {
  bodyRegions: string[];
  causes: string[];
  description: string;
  exerciseSlugs: string[];
  name: string;
  nameEn: string;
  slug: string;
  symptoms: string[];
};
