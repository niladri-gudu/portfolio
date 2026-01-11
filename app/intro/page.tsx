import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import LiveClock from "@/components/liveClock/LiveClock";
import SpotifyCard from "@/components/spotifyCard/SpotifyCard";

export default function Intro() {
  const isAvailable = true;

  const socials = [
    { name: "Email", username: "niladrigudu@gmail.com", href: "mailto:niladrigudu@gmail.com" },
    { name: "GitHub", username: "@niladri-gudu", href: "https://github.com/niladri-gudu" },
    { name: "X (Twitter)", username: "@dev_niladri", href: "https://x.com/dev_niladri" },
    { name: "LinkedIn", username: "Niladribihari Mohanta", href: "https://www.linkedin.com/in/niladribihari-mohanta" },
  ];

  return (
    <section className="pt-12 py-20 px-6 sm:px-10 max-w-5xl mx-auto selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <main className="flex flex-col-reverse md:flex-row md:items-end justify-between gap-6">
        
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center w-fit gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-[10px] font-mono uppercase tracking-wider">
            {isAvailable ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-neutral-600 dark:text-neutral-400">Available for projects</span>
              </>
            ) : (
              <>
                <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                <span className="text-neutral-500 dark:text-neutral-500">Busy Building / Unavailable</span>
              </>
            )}
          </div>

          <div className="space-y-2">
            <h1 className="pl-2 text-7xl md:text-8xl font-ds font-extrabold text-neutral-900 dark:text-neutral-50 leading-[0.8]">
              niladri.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 font-medium tracking-tight">
              Fullstack Web3 Developer
            </p>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-neutral-400" />
              <span>New Delhi, India</span>
            </div>
            <span className="opacity-30">/</span>
            <LiveClock />
          </div>
        </div>

        <div className="relative group">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <Image
              src="/nature.jpg"
              alt="Niladri"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
              priority
            />
          </div>
          <div className="absolute -inset-3 border border-neutral-200 dark:border-neutral-800 rounded-[2rem] -z-10 group-hover:inset-0 transition-all duration-500 opacity-50"></div>
        </div>
      </main>

      <div className="my-8 w-full h-[1px] bg-gradient-to-r from-neutral-200 dark:from-neutral-800 to-transparent" />

      <div className="space-y-8">
        <div className="max-w-2xl text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed tracking-tight italic font-light">
          <p>
            Building decentralized systems and high-fidelity interfaces. 
            Currently focused on the intersection of{" "}
            <span className="text-neutral-900 dark:text-neutral-100 font-medium not-italic">
              Solidity architecture
            </span>{" "}
            and{" "}
            <span className="text-neutral-900 dark:text-neutral-100 font-medium not-italic">
              user-centric design
            </span>.
          </p>
        </div>

        <div className="max-w-2xl">
           <SpotifyCard />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {socials.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-all duration-300"
            >
              <div className="space-y-1">
                <div className="text-md font-semibold text-neutral-900 dark:text-neutral-100">
                  {link.name}
                </div>
                <div className="text-xs  font-mono text-neutral-500 dark:text-neutral-500">
                  {link.username}
                </div>
              </div>
              <ArrowUpRight
                size={18}
                className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}