import PageContainer from "@/components/layout/PageContainer";
import SpotifyCard from "@/components/spotifyCard/SpotifyCard";
import GithubGraph from "@/components/github/GithubGraph";
import JsonLd from "@/components/seo/JsonLd";

import HeroSection from "@/components/sections/HeroSection";
import SocialsSection from "@/components/sections/SocialsSection";
import WorkSection from "@/components/sections/WorkSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

import VisitorSection from "@/components/sections/VisitorSection";
import AboutSection from "@/components/sections/AboutSection";

import { siteConfig } from "@/lib/site";

export default async function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Niladri",
    url: siteConfig.url,
    image: `${siteConfig.url}/new_profile_updated_2.0.jpeg`,
    jobTitle: "Backend & Systems Engineer",
    description:
      "Backend and Systems Engineer building scalable distributed systems, high-performance APIs, and robust cloud infrastructure.",
    email: "niladrigudu@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressCountry: "India",
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.twitter,
      siteConfig.links.linkedin,
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.url,
  };

  return (
    <section className="pt-16 selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <PageContainer>
        <div className="space-y-4">
          <HeroSection />
          <SpotifyCard />
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
