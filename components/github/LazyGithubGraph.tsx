"use client";

import dynamic from "next/dynamic";
import { useInView } from "@/hooks/useInView";

const GithubGraph = dynamic(() => import("@/components/github/GithubGraph"), {
  loading: () => null,
});

export default function LazyGithubGraph() {
  const { ref, inView } = useInView({ threshold: 0.05, once: true });

  return (
    <div ref={ref} aria-hidden={!inView}>
      {inView ? <GithubGraph /> : null}
    </div>
  );
}
