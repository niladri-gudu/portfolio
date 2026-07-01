import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/components/providers/Providers";
import Header from "@/components/header/Header";
import { geistSans, geistMono, telma, ds } from "../lib/fonts";
import Footer from "@/components/footer/Footer";
import VisitLogger from "@/components/visitLogger/VisitLogger";

export const metadata: Metadata = {
  title: "Niladri - Backend & Systems Engineer",
  description:
    "Portfolio of Niladri, a Backend and Systems Engineer focused on building scalable distributed systems, high-performance APIs, and robust cloud infrastructure.",
  keywords: [
    "Niladri",
    "Backend Engineer",
    "Systems Engineer",
    "Distributed Systems",
    "API Development",
    "Scalable Architecture",
    "Cloud Infrastructure",
    "DevOps"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.className} ${telma.variable} ${ds.variable}  antialiased`}
      >
        <Providers>
          <div className="mx-auto w-full md:w-3xl">
            <Header />
            <VisitLogger />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
