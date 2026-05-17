import { env } from "@/env";

export default function robots() {
  const base = env.NEXT_PUBLIC_BASE_URL;
  return {
    rules: { allow: "/", userAgent: "*" },
    sitemap: `${base}/sitemap.xml`,
  };
}
