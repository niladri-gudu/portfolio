import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

import Providers from "@/components/providers/Providers";
import SearchProvider from "@/components/search/SearchProvider";
import SearchDialog from "@/components/search/SearchDialog";
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
    template: `%s - ${siteConfig.name}`,
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

export async function headers() {
  return {
    "x-dns-prefetch-control": "on",
  };
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MY4H3H1L5M"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MY4H3H1L5M');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.className} ${geistMono.className} ${telma.variable} ${ds.variable}  antialiased`}
      >
        <Providers>
          <SearchProvider>
            <div className="mx-auto flex min-h-dvh w-full flex-col md:w-3xl">
              <Header />
              <VisitLogger />
              <SearchDialog />
              <main className="flex flex-1 flex-col">{children}</main>
              <Footer />
            </div>
          </SearchProvider>
        </Providers>
      </body>
    </html>
  );
}
