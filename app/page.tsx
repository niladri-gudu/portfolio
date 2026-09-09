import PageContainer from "@/shared/components/PageContainer";
import SpotifyCard from "@/features/spotify/components/SpotifyCard";
import GithubGraph from "@/features/home/components/GithubGraph";
import JsonLd from "@/shared/seo/JsonLd";

import HeroSection from "@/features/home/components/HeroSection";
import SocialsSection from "@/features/home/components/SocialsSection";
import WorkSection from "@/features/work/components/WorkSection";
import ProjectsSection from "@/features/projects/components/ProjectsSection";

import VisitorSection from "@/features/analytics/components/VisitorSection";
import AboutSection from "@/features/home/components/AboutSection";

import { buildPersonJsonLd, buildWebsiteJsonLd } from "@/shared/seo/builders";
import { getCachedTrack } from "@/features/spotify/server";

export default async function HomePage() {
  const personJsonLd = buildPersonJsonLd();

  const websiteJsonLd = buildWebsiteJsonLd();

  // Instant first paint: last known track from Postgres (null-safe at build).
  const initialTrack = await getCachedTrack().catch(() => null);

  return (
    <section className="pt-16 selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <PageContainer>
        <div className="space-y-4">
          <HeroSection />
          <SpotifyCard initial={initialTrack} />
          <SocialsSection />
          <WorkSection />
          <ProjectsSection />
          <GithubGraph />
          <AboutSection />
          <VisitorSection />
        </div>
      </PageContainer>
    </section>
  );
}
