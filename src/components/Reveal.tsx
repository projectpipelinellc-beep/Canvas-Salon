import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  as?: ElementType;
  className?: string;
  delay?: number;
  children: ReactNode;
}

/** Wraps children in a small fade/rise reveal that fires once on scroll into view. */
export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined;

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
