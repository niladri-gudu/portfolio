import type { Metadata } from "next";
import "./globals.css";

import Providers from "@/components/providers/Providers";
import Header from "@/components/header/Header";
import { geistSans, geistMono, telma, ds } from "../lib/fonts"

export const metadata: Metadata = {
  title: "nILADRI - Web3 Developer",
  description:     "Portfolio of Niladri, a Web3 and dApp developer focused on building decentralized applications, smart contracts, and modern web experiences.",
  keywords: [
    "Niladri",
    "Web3 developer",
    "dApp developer",
    "Blockchain developer",
    "Ethereum",
    "Smart contracts",
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
            <main>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
