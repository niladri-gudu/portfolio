import localFont from "next/font/local"
import { Geist, Geist_Mono } from "next/font/google";

export const geistSans = Geist({
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const telma = localFont({
    src: "../public/fonts/Telma-Variable.woff2",
    variable: "--font-telma",
    display: "swap",
})

export const ds = localFont({
    src: "../public/fonts/DancingScript-Variable.woff2",
    variable: "--font-ds",
    display: "swap",
})

