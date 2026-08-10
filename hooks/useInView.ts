import { useEffect, useState, useRef, RefObject } from "react";

export function useInView({
  threshold = 0,
  once = true,
}: {
  threshold?: number;
  once?: boolean;
}): { ref: RefObject<HTMLDivElement | null>; inView: boolean } {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold]);

  return { ref, inView };
}
