import Image from "next/image";
import { MapPin } from "lucide-react";
import LiveClock from "@/components/liveClock/LiveClock";
import { personalData } from "@/components/data/personal";

export default function HeroSection() {
  const isAvailable = personalData.availability.isAvailable;

  return (
    <section className="space-y-10">
      <main className="flex flex-col-reverse md:flex-row md:items-end justify-between gap-8">
        <div className="flex flex-col gap-6">
          {/* Availability */}
          <div className="inline-flex items-center w-fit gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[10px] font-mono uppercase tracking-wider">
            {isAvailable ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>

                <span className="text-neutral-600 dark:text-neutral-400">
                  {personalData.availability.availableLabel}
                </span>
              </>
            ) : (
              <>
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>

                <span className="text-neutral-500 dark:text-neutral-500">
                  {personalData.availability.busyLabel}
                </span>
              </>
            )}
          </div>

          {/* Name + Role */}
          <div className="space-y-2">
            <h1 className="pl-2 text-7xl md:text-8xl font-ds font-extrabold text-neutral-900 dark:text-neutral-50 leading-[0.8]">
              {personalData.profile.name}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 font-medium tracking-tight">
              {personalData.profile.role}
            </p>
          </div>

          {/* Location + Clock */}
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
        </div>

        {/* Avatar */}
        <div className="relative group">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden grayscale hover:grayscale-0 shadow-2xl">
            <Image
              src={personalData.profile.image.src}
              alt={personalData.profile.image.alt}
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform"
              priority
            />
          </div>

          <div className="absolute -inset-3 border border-neutral-200 dark:border-neutral-800 rounded-[2rem] -z-10 group-hover:inset-0 opacity-50 transition-all"></div>
        </div>
      </main>

      <div className="w-full h-px rounded-2xl bg-linear-to-r from-neutral-200 dark:from-neutral-800 to-transparent" />

      {/* Intro */}
      <div className="max-w-2xl text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed tracking-tight italic font-light">
        <p>
          {personalData.intro.text}{" "}
          <span className="text-neutral-900 dark:text-neutral-100 font-medium not-italic">
            {personalData.intro.highlight.first}
          </span>{" "}
          and{" "}
          <span className="text-neutral-900 dark:text-neutral-100 font-medium not-italic">
            {personalData.intro.highlight.second}
          </span>
          .
        </p>
      </div>
    </section>
  );
}
