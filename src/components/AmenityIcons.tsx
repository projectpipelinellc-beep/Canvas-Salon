import type { SVGProps } from "react";

/**
 * Small, restrained line-art icons for the "Designed for Your Comfort"
 * amenities grid. Plain geometric strokes rather than emoji, so they render
 * identically across every device/OS and match the site's editorial tone.
 */

function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function ParkingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M9.75 16V8h3.1a2.35 2.35 0 0 1 0 4.7H9.75" />
    </IconBase>
  );
}

export function WalkInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      {/* A person walking in — reads more immediately as "welcome, come
          on in" than an abstract door glyph. */}
      <circle cx="12" cy="4.2" r="1.7" fill="currentColor" stroke="none" />
      <path d="M12 7v5" />
      <path d="M12 9.3 8.6 11.6" />
      <path d="M12 9.3 15.6 11.3" />
      <path d="M12 12 9 19.5" />
      <path d="M12 12 15.4 19.5" />
    </IconBase>
  );
}

export function WifiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4.5 9.6a11 11 0 0 1 15 0" />
      <path d="M7.3 12.9a7 7 0 0 1 9.4 0" />
      <path d="M10 16.2a3 3 0 0 1 4 0" />
      <circle cx="12" cy="19" r="0.75" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function CafeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M5.5 9h10.5v6.5A3.5 3.5 0 0 1 12.5 19h-3A4 4 0 0 1 5.5 15V9Z" />
      <path d="M16 10.5h1.2a2 2 0 0 1 0 4H16" />
      <path d="M8.5 6.2c-.6-.7-.4-1.3 0-2" />
      <path d="M11.3 6.2c-.6-.7-.4-1.3 0-2" />
    </IconBase>
  );
}

export function AccessibleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      {/* Standard wheelchair pictogram, simplified to a few clean strokes
          so it stays legible at icon size. */}
      <circle cx="15.2" cy="5" r="1.5" fill="currentColor" stroke="none" />
      <path d="M15.2 7.2v3.6h-5.4" />
      <path d="M9.8 10.8 8 16.4" />
      <circle cx="9" cy="16.6" r="4.3" />
      <path d="M9.8 10.8 12.6 15" />
    </IconBase>
  );
}

export function FamilyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="7.2" r="2.2" />
      <path d="M4.8 18v-1.6a3.6 3.6 0 0 1 3.6-3.6h1.2a3.6 3.6 0 0 1 3.6 3.6V18" />
      <circle cx="16.6" cy="9" r="1.7" />
      <path d="M14.4 18v-1.2a3 3 0 0 1 3-3h.4a3 3 0 0 1 3 3V18" />
    </IconBase>
  );
}
