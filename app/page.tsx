import PageContainer from "@/components/layout/PageContainer";
import SpotifyCard from "@/components/spotifyCard/SpotifyCard";
import GithubGraph from "@/components/github/GithubGraph";

import HeroSection from "@/components/sections/HeroSection";
import SocialsSection from "@/components/sections/SocialsSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function HomePage() {
  return (
    <section className="py-16 selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <PageContainer>
        <div className="space-y-12">
          <HeroSection />

          <SpotifyCard />
          <SocialsSection />
          <WorkSection />
          <ProjectsSection />

          <GithubGraph />
        </div>
      </PageContainer>
    </section>
  );
}
