import type { Metadata } from "next";

import { Kanit } from "next/font/google";

import { env } from "@/env";
import { ThemeProvider } from "@/shared/components/ThemeProvider";

import "./globals.css";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  variable: "--font-kanit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  openGraph: {
    images: [{ height: 630, url: "/og-image.png", width: 1200 }],
    siteName: "Wellness",
  },
  title: "Wellness",
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className={`${kanit.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
