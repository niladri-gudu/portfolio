"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import LiveClock from "@/components/liveClock/LiveClock";
import { personalData } from "@/components/data/personal";
import Reveal from "@/components/motion/Reveal";
import Link from "next/link";

export default function HeroSection() {
  const isAvailable = personalData.availability.isAvailable;

  return (
    <section className="space-y-8 px-2 pb-6">
      <main className="flex flex-col-reverse md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col gap-6">
          <Reveal delay={0.03}>
            <div
              className="
                group relative inline-flex items-center w-fit gap-2 px-3 py-1 rounded-full
                bg-neutral-100 dark:bg-neutral-900
                border border-neutral-200 dark:border-neutral-800
                text-[10px] font-mono uppercase tracking-wider
                overflow-hidden
                transition-all duration-300 ease-out
                hover:-translate-y-px hover:shadow-sm dark:hover:shadow-neutral-950/40
                hover:border-neutral-300 dark:hover:border-neutral-700 cursor-pointer
              "
            >
              <span
                className="
                  pointer-events-none absolute inset-0
                  translate-x-[-120%] group-hover:translate-x-[120%]
                  transition-transform duration-700 ease-out
                  bg-linear-to-r from-transparent via-white/25 to-transparent
                  dark:via-white/10
                "
              />

              {isAvailable ? (
                <>
                  <span className="relative flex h-2 w-2 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-px">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>

                  <span className="text-neutral-600 dark:text-neutral-400 transition-colors duration-300 group-hover:text-neutral-800 dark:group-hover:text-neutral-200">
                    {personalData.availability.availableLabel}
                  </span>

                  <span
                    className="
                      max-w-0 overflow-hidden whitespace-nowrap
                      opacity-0 -translate-x-0.5
                      transition-all duration-300 ease-out
                      group-hover:max-w-[13.75rem] group-hover:opacity-100 group-hover:translate-x-0
                      text-neutral-400 dark:text-neutral-500
                    "
                  >
                    {" "}
                    • Let’s build something cool ✨
                  </span>
                </>
              ) : (
                <>
                  <span className="h-2 w-2 rounded-full bg-orange-500 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-px" />

                  <span className="text-neutral-500 dark:text-neutral-500 transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
                    {personalData.availability.busyLabel}
                  </span>

                  <span
                    className="
                      max-w-0 overflow-hidden whitespace-nowrap
                      opacity-0 -translate-x-0.5
                      transition-all duration-300 ease-out
                      group-hover:max-w-40 group-hover:opacity-100 group-hover:translate-x-0
                      text-neutral-400 dark:text-neutral-500
                    "
                  >
                    {" "}
                    • In the zone… 🚧
                  </span>
                </>
              )}
            </div>
          </Reveal>

          <div className="space-y-2">
            <Reveal delay={0.06}>
              <h1 className="pl-2 text-7xl md:text-8xl font-ds font-extrabold text-neutral-900 dark:text-neutral-50 leading-[0.8]">
                {personalData.profile.name}
              </h1>
            </Reveal>

            <Reveal delay={0.09}>
              <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 font-medium tracking-tight">
                {personalData.profile.role}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-neutral-400" />
                <span>
                  {personalData.location.city}, {personalData.location.country}
                </span>
              </div>

              <span className="opacity-30">/</span>

              <LiveClock />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <Link href="/guestbook" prefetch>
            <div className="relative group">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-1 rounded-full bg-accent-brand/25 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative cursor-pointer w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden grayscale hover:grayscale-0 shadow-2xl ring-2 ring-transparent transition-all duration-500 group-hover:ring-accent-brand/40">
                <Image
                  src={personalData.profile.image.src}
                  alt={personalData.profile.image.alt}
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </Link>
        </Reveal>
      </main>

      <Reveal delay={0.18} y={10}>
        <div className="w-full h-px rounded-2xl bg-linear-to-r from-neutral-200 dark:from-neutral-800 to-transparent" />
      </Reveal>

      <Reveal delay={0.21}>
        <div className="max-w-2xl text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed tracking-tight italic font-light">
          <p>
            {personalData.intro.text}{" "}
            <span className="text-accent-brand font-medium not-italic">
              {personalData.intro.highlight.first}
            </span>{" "}
            and{" "}
            <span className="text-accent-brand font-medium not-italic">
              {personalData.intro.highlight.second}
            </span>
            .
          </p>
        </div>
      </Reveal>
    </section>
  );
}
