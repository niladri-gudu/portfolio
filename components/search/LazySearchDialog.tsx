"use client";

import dynamic from "next/dynamic";

const SearchDialog = dynamic(() => import("@/components/search/SearchDialog"), {
  ssr: false,
});

export default function LazySearchDialog() {
  return <SearchDialog />;
}
