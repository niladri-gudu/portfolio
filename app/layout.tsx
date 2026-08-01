import type { Metadata, Viewport } from "next";
import "./globals.css";

import Providers from "@/components/providers/Providers";
import Header from "@/components/header/Header";
import { geistSans, geistMono, telma, ds } from "../lib/fonts";
import Footer from "@/components/footer/Footer";
import VisitLogger from "@/components/visitLogger/VisitLogger";
import { siteConfig, absoluteUrl } from "../lib/site";
import { getSeason } from "../lib/season";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  category: "Technology",
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: absoluteUrl(siteConfig.ogImage) }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const season = getSeason();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-season={season?.key ?? "default"}
    >
      <body
        className={`${geistSans.className} ${geistMono.className} ${telma.variable} ${ds.variable}  antialiased`}
      >
        <Providers>
          <div className="mx-auto flex min-h-dvh w-full flex-col md:w-3xl">
            <Header />
            <VisitLogger />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
