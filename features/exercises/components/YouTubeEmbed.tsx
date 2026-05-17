"use client";

import { useTranslations } from "next-intl";

type Props = {
  title: string;
  youtubeId: string;
};

export default function YouTubeEmbed({ title, youtubeId }: Props) {
  const t = useTranslations("ui");

  if (youtubeId.startsWith("PLACEHOLDER")) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted">
        <p className="px-4 text-center text-sm text-muted-foreground">
          {t("youtube.placeholder")}&nbsp;
          <span className="font-medium">{title}</span>
          <br />
          <span className="text-xs">{t("youtube.editHint")}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg shadow">
      <iframe
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        className="h-full w-full"
        loading="lazy"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
      />
    </div>
  );
}
