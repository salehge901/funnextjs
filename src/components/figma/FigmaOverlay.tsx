"use client";

import { usePathname, useSearchParams } from "next/navigation";

const overlays: { test: (p: string) => boolean; src: string }[] = [
  { test: (p) => p === "/", src: "/figma/reference/Homepage.png" },
  { test: (p) => p === "/games", src: "/figma/reference/Games.png" },
  {
    test: (p) => p.startsWith("/games/") && p.includes("/offers/"),
    src: "/figma/reference/GameSelectedOfferSelected.png",
  },
  { test: (p) => p.startsWith("/games/"), src: "/figma/reference/GameSelected.png" },
];

export function FigmaOverlay() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  if (process.env.NODE_ENV !== "development") return null;
  if (searchParams.get("figma") !== "1") return null;

  const match = overlays.find((o) => o.test(pathname));
  if (!match) return null;

  // Our reference exports are 2880px wide (2x). We render them at 0.5 scale
  // and keep them centered so they align with the centered 1440px layout.
  return (
    <div className="pointer-events-none fixed top-0 left-1/2 z-[9999] origin-top -translate-x-1/2 scale-50 opacity-60">
      <img src={match.src} alt="" width={2880} />
    </div>
  );
}
