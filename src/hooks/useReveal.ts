import { useEffect, useRef, useState } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref and reports when the
 * element has scrolled into view, for a single tasteful fade/rise-in.
 * Respects `prefers-reduced-motion` by revealing immediately.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [prefersReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [isVisible, setIsVisible] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);

    // Safety net: never let content stay permanently hidden if the
    // observer is unavailable or fails to fire for any reason.
    const fallback = window.setTimeout(() => setIsVisible(true), 1800);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [prefersReduced]);

  return { ref, isVisible };
}
