"use client";

import { useEffect, useMemo, useState } from "react";

import type { Offer } from "@/lib/catalog";
import { OfferCardInteractive } from "@/components/games/OfferCardInteractive";

export function OfferGridLoadMore({
  offers,
  heroSlots,
  initialCount = 12,
  step = 12,
}: {
  offers: Offer[];
  heroSlots: ReadonlyArray<{ x: number; y: number }>;
  initialCount?: number;
  step?: number;
}) {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  useEffect(() => {
    setVisibleCount(initialCount);
  }, [offers, initialCount]);

  const visibleOffers = useMemo(() => offers.slice(0, visibleCount), [offers, visibleCount]);
  const hasMore = visibleCount < offers.length;

  return (
    <>
      <div className="mt-[24px] grid grid-cols-1 gap-x-[20px] gap-y-[21px] md:grid-cols-2 xl:grid-cols-3">
        {visibleOffers.map((offer, index) => {
          const heroSlot = heroSlots[index % heroSlots.length];
          return <OfferCardInteractive key={offer.id} offer={offer} heroSlot={heroSlot} />;
        })}
      </div>

      {offers.length === 0 ? (
        <div className="mt-[20px] rounded-[10px] border border-[#2B2A42] bg-[rgba(25,24,45,0.42)] p-[20px] text-[14px] text-[#BDBADF]">
          No services matched your filters.
        </div>
      ) : null}

      {hasMore ? (
        <button
          type="button"
          onClick={() => setVisibleCount((prev) => Math.min(prev + step, offers.length))}
          className="mt-[24px] flex h-[54px] w-full cursor-pointer items-center justify-center rounded-[10px] border border-[#2B2A42] bg-[linear-gradient(180deg,#1A1930_0%,#171629_100%)] px-[22px] text-[16px] font-semibold leading-none text-white shadow-[0_8px_16px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-200 hover:-translate-y-px hover:bg-[linear-gradient(180deg,#211F39_0%,#1A1930_100%)]"
        >
          Load More Services
        </button>
      ) : null}
    </>
  );
}
