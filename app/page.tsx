import PageContainer from "@/components/layout/PageContainer";
import SpotifyCard from "@/components/spotifyCard/SpotifyCard";
import GithubGraph from "@/components/github/GithubGraph";

import HeroSection from "@/components/sections/HeroSection";
import SocialsSection from "@/components/sections/SocialsSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

import Reveal from "@/components/motion/Reveal";
import VisitorSection from "@/components/sections/VisitorSection";
import GuestbookSection from "@/components/sections/GuestbookSection";

export default async function HomePage() {
  const afterHero = 0.21;
  const d = (i: number) => (i + 1) * 0.03;

  return (
    <section className="pt-16 selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <PageContainer>
        <div className="space-y-4">
          <HeroSection />

          <Reveal delay={d(0)} baseDelay={afterHero}>
            <SpotifyCard />
          </Reveal>

          <Reveal delay={d(1)} baseDelay={afterHero}>
            <SocialsSection />
          </Reveal>

          <Reveal delay={d(2)} baseDelay={afterHero}>
            <WorkSection />
          </Reveal>

          <Reveal delay={d(3)} baseDelay={afterHero}>
            <ProjectsSection />
          </Reveal>

          <Reveal delay={d(4)} baseDelay={afterHero}>
            <GithubGraph />
          </Reveal>

          <Reveal delay={d(5)} baseDelay={afterHero}>
            <GuestbookSection />
          </Reveal>

          <Reveal delay={d(6)} baseDelay={afterHero}>
            <VisitorSection />
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
