import { getTranslations } from "next-intl/server";

import type { DiseaseDisplay } from "@/features/diseases/types";

import BodyMapSVG from "@/features/body-map/components/BodyMapSVG";
import DiseaseCard from "@/features/diseases/components/DiseaseCard";
import { diseases } from "@/features/diseases/constants/diseases";
import { Link } from "@/i18n/navigation";

export default async function HomePage() {
  const tUi = await getTranslations("ui");
  const tDiseases = await getTranslations("diseases");

  const displayDiseases: DiseaseDisplay[] = diseases.map((d) => {
    const content = tDiseases.raw(d.slug) as {
      causes: string[];
      description: string;
      name: string;
      symptoms: string[];
    };
    return { ...d, ...content };
  });

  return (
    <main>
      {/* Hero */}
      <section className="bg-linear-to-b from-primary/10 to-background px-4 py-14 text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          {tUi("home.hero")}
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          {tUi("home.heroSub")}
        </p>
      </section>

      {/* Body Map + Instructions */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-center text-xl font-semibold text-foreground">
            {tUi("home.bodyMapTitle")}
          </h2>
          <p className="mb-8 text-center text-sm text-muted-foreground">
            {tUi("home.bodyMapSub")}
          </p>
          <div className="flex flex-col items-start justify-center gap-10 md:flex-row">
            <BodyMapSVG />
            <div className="max-w-md flex-1">
              <h3 className="mb-3 font-medium text-foreground">
                {tUi("home.allDiseasesTitle")}
              </h3>
              <div className="space-y-2">
                {displayDiseases.map((d) => (
                  <Link
                    key={d.slug}
                    className="flex items-center justify-between rounded-lg border border-border p-3 transition-colors hover:border-primary/30 hover:bg-primary/5"
                    href={`/diseases/${d.slug}`}
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {d.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{d.nameEn}</p>
                    </div>
                    <span className="ml-4 text-xs whitespace-nowrap text-primary">
                      {d.exerciseSlugs.length} {tUi("home.exercises")} →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All diseases grid */}
      <section className="bg-muted/50 px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-xl font-semibold text-foreground">
            {tUi("home.diseasesGrid")}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {displayDiseases.map((d) => (
              <DiseaseCard key={d.slug} disease={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-4 py-6 text-center text-xs text-muted-foreground">
        {tUi("home.disclaimer")}
      </section>
    </main>
  );
}
