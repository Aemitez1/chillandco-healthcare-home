export type Exercise = {
  diseaseSlugs: string[]; // back-links to diseases
  nameEn: string;
  slug: string;
  youtubeId: string;
};

export type ExerciseDisplay = {
  cautions: string[];
  description: string;
  diseaseSlugs: string[];
  name: string;
  nameEn: string;
  slug: string;
  steps: string[];
  youtubeId: string;
};
