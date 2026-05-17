import type { Disease } from "../types";

export const diseases: Disease[] = [
  {
    bodyRegions: ["shoulder"],
    exerciseSlugs: [
      "pendulum-exercise",
      "external-rotation-band",
      "shoulder-blade-squeeze",
    ],
    nameEn: "Rotator Cuff Injury",
    slug: "rotator-cuff-injury",
  },
  {
    bodyRegions: ["shoulder"],
    exerciseSlugs: ["towel-stretch", "wall-climbing", "cross-body-stretch"],
    nameEn: "Frozen Shoulder (Adhesive Capsulitis)",
    slug: "frozen-shoulder",
  },
  {
    bodyRegions: ["lower-back"],
    exerciseSlugs: ["cat-cow-stretch", "childs-pose", "bird-dog"],
    nameEn: "Low Back Pain (Muscle Strain)",
    slug: "low-back-pain",
  },
  {
    bodyRegions: ["elbow"],
    exerciseSlugs: ["wrist-extension-stretch", "eccentric-wrist-extension"],
    nameEn: "Tennis Elbow (Lateral Epicondylitis)",
    slug: "tennis-elbow",
  },
  {
    bodyRegions: ["full-body"],
    exerciseSlugs: ["gentle-walking", "gentle-neck-stretch"],
    nameEn: "Fibromyalgia",
    slug: "fibromyalgia",
  },
  {
    bodyRegions: ["foot"],
    exerciseSlugs: ["calf-stretch", "plantar-fascia-stretch", "toe-curls"],
    nameEn: "Plantar Fasciitis",
    slug: "plantar-fasciitis",
  },
];
