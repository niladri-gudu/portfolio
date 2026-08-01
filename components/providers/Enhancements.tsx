"use client";

import SmoothScroll from "./SmoothScroll";

export default function Enhancements({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
