// lucide-react no longer ships brand/logo glyphs, so these three social marks
// are hand-drawn as minimal outline icons to match the lucide stroke style.
import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M14 21v-8h2.7l.4-3.2H14V7.7c0-.9.3-1.6 1.7-1.6H17V3.2C16.6 3.1 15.6 3 14.5 3 12.1 3 10.5 4.4 10.5 7.4v2.4H8v3.2h2.5V21" />
    </svg>
  );
}

export function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3.5" />
      <path d="M11 9.7v4.6l4-2.3-4-2.3Z" fill="currentColor" stroke="none" />
    </svg>
  );
}
