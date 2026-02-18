"use client";

import type { CSSProperties, SVGProps } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

import { GoldOfferCardInteractive } from "@/components/games/GoldOfferCardInteractive";
import { OfferCardInteractive } from "@/components/games/OfferCardInteractive";
import { useCurrency } from "@/components/shell/CurrencyProvider";
import {
  deliveryFilterOptions,
  offerCategoryLabels,
  offerSortOptions,
  type DeliveryTimeFilter,
  type Offer,
  type OfferCategory,
  type OfferPlatform,
  type OfferServer,
  type OfferSort,
} from "@/lib/catalog";

const loadMoreLabelByCategory: Record<OfferCategory, string> = {
  items: "Load More Item Offers",
  accounts: "Load More Account Offers",
  boosting: "Load More Boosting Offers",
  gold: "Load More Gold Offers",
};

type CategoryIconSlots = Record<OfferCategory, { x: number; y: number; w: number; h: number }>;

type AppliedFilters = {
  search: string;
  server?: OfferServer;
  platform?: OfferPlatform;
  minPrice?: number;
  maxPrice?: number;
  delivery?: DeliveryTimeFilter;
};

const serverDisplayByRegion: Record<OfferServer, string> = {
  "North American": "[US] Illidan - Alliance",
  Europe: "[EU] Silvermoon - Horde",
  Asia: "[AS] Stormrage - Alliance",
};

function spriteStyle(sprite: string, x: number, y: number): CSSProperties {
  return {
    backgroundImage: `url(${sprite})`,
    backgroundSize: "1440px 3483px",
    backgroundPosition: `-${x}px -${y}px`,
    backgroundRepeat: "no-repeat",
  };
}

function parseNumber(value: string): number | undefined {
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const parsed = Number.parseFloat(trimmed);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function filterByDelivery(offer: Offer, delivery: DeliveryTimeFilter | undefined): boolean {
  if (!delivery) return true;
  if (delivery === "1") return offer.deliveryDays <= 1;
  if (delivery === "3") return offer.deliveryDays <= 3;
  return true;
}

function sortOffers(offers: Offer[], sort: OfferSort): Offer[] {
  const sorted = [...offers];

  if (sort === "price-asc") {
    sorted.sort((a, b) => a.priceUsd - b.priceUsd || a.deliveryDays - b.deliveryDays);
    return sorted;
  }

  if (sort === "price-desc") {
    sorted.sort((a, b) => b.priceUsd - a.priceUsd || a.deliveryDays - b.deliveryDays);
    return sorted;
  }

  if (sort === "delivery-fast") {
    sorted.sort((a, b) => a.deliveryDays - b.deliveryDays || a.priceUsd - b.priceUsd);
    return sorted;
  }

  sorted.sort(
    (a, b) =>
      b.sellerRating - a.sellerRating ||
      b.sellerOrders - a.sellerOrders ||
      a.deliveryDays - b.deliveryDays ||
      a.priceUsd - b.priceUsd,
  );

  return sorted;
}

function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M1 4H10M10 4L7 1M10 4L7 7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M17.984 15.4624L15.227 12.7224C16.276 11.3496 16.851 9.6845 16.851 7.9274C16.851 5.81 16.027 3.8191 14.529 2.3219C13.032 0.8247 11.041 0 8.924 0C6.806 0 4.815 0.8247 3.318 2.3219C0.227 5.413 0.227 10.4423 3.318 13.5329C4.815 15.0304 6.806 15.8551 8.924 15.8551C10.681 15.8549 12.346 15.2797 13.719 14.2311L16.475 16.9711C16.684 17.1794 16.957 17.2836 17.23 17.2836C17.503 17.2836 17.776 17.1794 17.984 16.9711C18.401 16.5545 18.401 15.8789 17.984 15.4624ZM4.827 12.0242C2.568 9.7654 2.568 6.0897 4.827 3.8306C5.921 2.7366 7.376 2.1338 8.924 2.1338C10.471 2.1338 11.926 2.7366 13.02 3.8306C14.115 4.9249 14.717 6.3799 14.717 7.9274C14.717 9.4752 14.115 10.93 13.02 12.0242C11.926 13.1185 10.471 13.7212 8.924 13.7212C7.376 13.7212 5.921 13.1185 4.827 12.0242Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M1 1.5L4 4.5L7 1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export function GameOffersClient({
  pagePath,
  allOffers,
  availableCategories,
  serverOptions,
  platformOptions,
  initialCategory,
  initialSort,
  initialDelivery,
  initialSearch,
  initialServer,
  initialPlatform,
  initialMinPrice,
  initialMaxPrice,
  heroSlots,
  categoryIconSlots,
  gameSelectedSprite,
}: {
  pagePath: string;
  allOffers: Offer[];
  availableCategories: OfferCategory[];
  serverOptions: OfferServer[];
  platformOptions: OfferPlatform[];
  initialCategory: OfferCategory;
  initialSort: OfferSort;
  initialDelivery?: DeliveryTimeFilter;
  initialSearch: string;
  initialServer?: OfferServer;
  initialPlatform?: OfferPlatform;
  initialMinPrice?: number;
  initialMaxPrice?: number;
  heroSlots: ReadonlyArray<{ x: number; y: number }>;
  categoryIconSlots: CategoryIconSlots;
  gameSelectedSprite: string;
}) {
  const [category, setCategory] = useState<OfferCategory>(initialCategory);
  const [sort, setSort] = useState<OfferSort>(initialSort);

  const { convertFromUsd, convertToUsd, selectedCurrency } = useCurrency();

  const [searchDraft, setSearchDraft] = useState(initialSearch);
  const [serverDraft, setServerDraft] = useState<OfferServer | "">(initialServer ?? "");
  const [platformDraft, setPlatformDraft] = useState<OfferPlatform | "">(initialPlatform ?? "");
  const [minPriceDraft, setMinPriceDraft] = useState(() => (initialMinPrice === undefined ? "" : convertFromUsd(initialMinPrice).toFixed(2)));
  const [maxPriceDraft, setMaxPriceDraft] = useState(() => (initialMaxPrice === undefined ? "" : convertFromUsd(initialMaxPrice).toFixed(2)));
  const [deliveryDraft, setDeliveryDraft] = useState<DeliveryTimeFilter | undefined>(initialDelivery);

  const [applied, setApplied] = useState<AppliedFilters>({
    search: initialSearch,
    server: initialServer,
    platform: initialPlatform,
    minPrice: initialMinPrice,
    maxPrice: initialMaxPrice,
    delivery: initialDelivery,
  });

  const [visibleCount, setVisibleCount] = useState(12);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const sortMenuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    setMinPriceDraft(applied.minPrice === undefined ? "" : convertFromUsd(applied.minPrice).toFixed(2));
    setMaxPriceDraft(applied.maxPrice === undefined ? "" : convertFromUsd(applied.maxPrice).toFixed(2));
  }, [applied.maxPrice, applied.minPrice, convertFromUsd, selectedCurrency]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!sortMenuRef.current) return;
      if (!sortMenuRef.current.contains(target)) {
        setSortMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();

    params.set("category", category);
    params.set("sort", sort);

    const search = applied.search.trim();
    if (search) params.set("q", search);
    if (applied.server) params.set("server", applied.server);
    if (applied.platform) params.set("platform", applied.platform);
    if (applied.delivery) params.set("delivery", applied.delivery);
    if (typeof applied.minPrice === "number") params.set("minPrice", String(applied.minPrice));
    if (typeof applied.maxPrice === "number") params.set("maxPrice", String(applied.maxPrice));

    const query = params.toString();
    const nextHref = query ? `${pagePath}?${query}` : pagePath;
    window.history.replaceState(window.history.state, "", nextHref);
  }, [applied, category, pagePath, sort]);

  const filteredSortedOffers = useMemo(() => {
    const normalizedSearch = applied.search.trim().toLowerCase();

    const filtered = allOffers.filter((offer) => {
      if (offer.category !== category) return false;
      if (applied.server && offer.server !== applied.server) return false;
      if (applied.platform && offer.platform !== applied.platform) return false;
      if (typeof applied.minPrice === "number" && offer.priceUsd < applied.minPrice) return false;
      if (typeof applied.maxPrice === "number" && offer.priceUsd > applied.maxPrice) return false;
      if (!filterByDelivery(offer, applied.delivery)) return false;

      if (normalizedSearch) {
        const haystack = `${offer.title} ${offer.subtitle ?? ""} ${offer.sellerName}`.toLowerCase();
        if (!haystack.includes(normalizedSearch)) return false;
      }

      return true;
    });

    return sortOffers(filtered, sort);
  }, [allOffers, applied, category, sort]);

  useEffect(() => {
    setVisibleCount(12);
  }, [filteredSortedOffers]);

  const visibleOffers = filteredSortedOffers.slice(0, visibleCount);
  const hasMore = visibleCount < filteredSortedOffers.length;
  const activeSortLabel = offerSortOptions.find((option) => option.value === sort)?.label ?? "Recommended";

  function applyFilters() {
    setApplied({
      search: searchDraft,
      server: serverDraft || undefined,
      platform: platformDraft || undefined,
      minPrice: (() => {
        const parsed = parseNumber(minPriceDraft);
        return parsed === undefined ? undefined : convertToUsd(parsed);
      })(),
      maxPrice: (() => {
        const parsed = parseNumber(maxPriceDraft);
        return parsed === undefined ? undefined : convertToUsd(parsed);
      })(),
      delivery: deliveryDraft,
    });
  }

  return (
    <div className="mt-[20px] grid gap-[20px] lg:grid-cols-[315px_minmax(0,985px)]">
      <aside>
        <p className="text-[12px] font-normal leading-none text-[#BDBADF]">Services</p>

        <div className="mt-[12px] grid grid-cols-2 gap-[7px]">
          {availableCategories.map((itemCategory) => {
            const active = category === itemCategory;
            const iconSlot = categoryIconSlots[itemCategory];
            const iconFadeMask: CSSProperties = {
              WebkitMaskImage:
                "radial-gradient(148% 132% at 78% 50%, rgba(0,0,0,0.98) 50%, rgba(0,0,0,0.64) 72%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(148% 132% at 78% 50%, rgba(0,0,0,0.98) 50%, rgba(0,0,0,0.64) 72%, rgba(0,0,0,0) 100%)",
            };

            return (
              <button
                key={itemCategory}
                type="button"
                onClick={() => setCategory(itemCategory)}
                className={[
                  "relative flex h-[64px] cursor-pointer items-center overflow-hidden rounded-[8px] border bg-[rgba(25,24,45,0.5)] px-[14px] transition-all duration-200",
                  active ? "border-[#2B2A42]" : "border-[#2B2A42] hover:border-[#3E4771]",
                ].join(" ")}
              >
                <span className={active ? "inline-flex h-full items-center text-[16px] font-semibold leading-none text-white" : "inline-flex h-full items-center text-[16px] font-semibold leading-none text-[#BDBADF]"}>
                  {offerCategoryLabels[itemCategory]}
                </span>

                {active ? (
                  <span
                    className="pointer-events-none absolute bottom-[1px] right-[1px] overflow-hidden opacity-[0.96] saturate-[1.35] contrast-[1.04]"
                    style={{
                      ...spriteStyle(gameSelectedSprite, iconSlot.x, iconSlot.y),
                      width: `${iconSlot.w}px`,
                      height: `${iconSlot.h}px`,
                      ...iconFadeMask,
                    }}
                  >
                    <span className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[30px] bg-gradient-to-r from-[rgba(25,24,45,0.86)] via-[rgba(25,24,45,0.30)] to-transparent" />
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(136%_128%_at_82%_52%,rgba(0,0,0,0)_48%,rgba(25,24,45,0.58)_100%)]" />
                  </span>
                ) : (
                  <span
                    className="pointer-events-none absolute bottom-[1px] right-[1px] overflow-hidden grayscale saturate-0 opacity-[0.30]"
                    style={{
                      ...spriteStyle(gameSelectedSprite, iconSlot.x, iconSlot.y),
                      width: `${iconSlot.w}px`,
                      height: `${iconSlot.h}px`,
                      ...iconFadeMask,
                    }}
                  >
                    <span className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[30px] bg-gradient-to-r from-[rgba(25,24,45,0.86)] via-[rgba(25,24,45,0.30)] to-transparent" />
                    <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(136%_128%_at_82%_52%,rgba(0,0,0,0)_48%,rgba(25,24,45,0.58)_100%)]" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <form
          className="mt-[24px] space-y-[14px]"
          onSubmit={(event) => {
            event.preventDefault();
            applyFilters();
          }}
        >
          <div>
            <p className="mb-[6px] text-[12px] font-normal leading-none text-[#BDBADF]">Search</p>
            <label className="group flex h-[42px] items-center rounded-[8px] border border-[#2B2A42] bg-[rgba(25,24,45,0.5)] px-[14px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <input
                value={searchDraft}
                onChange={(event) => setSearchDraft(event.target.value)}
                placeholder="Search..."
                className="h-full w-full bg-transparent text-[14px] font-normal text-white outline-none placeholder:text-[#BDBADF]"
              />
              <SearchIcon className="h-[17px] w-[17px] shrink-0 text-[#FF9D00] [filter:drop-shadow(0_0_6px_rgba(255,157,0,0.42))] transition-all duration-200 group-hover:[filter:drop-shadow(0_0_10px_rgba(255,157,0,0.92))]" />
            </label>
          </div>

          <div>
            <p className="mb-[6px] text-[12px] font-normal leading-none text-[#BDBADF]">Server</p>
            <label className="relative block">
              <select
                value={serverDraft}
                onChange={(event) => setServerDraft((event.target.value as OfferServer | "") || "")}
                className="h-[42px] w-full cursor-pointer appearance-none rounded-[8px] border border-[#2B2A42] bg-[rgba(25,24,45,0.5)] px-[14px] pr-[34px] text-[14px] font-normal text-[#BDBADF] outline-none shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              >
                <option value="" className="bg-[#1A1930] text-[#BDBADF]">
                  Any server
                </option>
                {serverOptions.map((server) => (
                  <option key={server} value={server} className="bg-[#1A1930] text-[#D3D0F4]">
                    {serverDisplayByRegion[server]}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-[14px] top-1/2 h-[6px] w-[8px] -translate-y-1/2 text-[#BDBADF]" />
            </label>
          </div>

          <div>
            <p className="mb-[6px] text-[12px] font-normal leading-none text-[#BDBADF]">Platform</p>
            <label className="relative block">
              <select
                value={platformDraft}
                onChange={(event) => setPlatformDraft((event.target.value as OfferPlatform | "") || "")}
                className="h-[42px] w-full cursor-pointer appearance-none rounded-[8px] border border-[#2B2A42] bg-[rgba(25,24,45,0.5)] px-[14px] pr-[34px] text-[14px] font-normal text-[#BDBADF] outline-none shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              >
                <option value="" className="bg-[#1A1930] text-[#BDBADF]">
                  Any platform
                </option>
                {platformOptions.map((platform) => (
                  <option key={platform} value={platform} className="bg-[#1A1930] text-[#D3D0F4]">
                    {platform}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-[14px] top-1/2 h-[6px] w-[8px] -translate-y-1/2 text-[#BDBADF]" />
            </label>
          </div>

          <div>
            <p className="mb-[6px] text-[12px] font-normal leading-none text-[#BDBADF]">Price</p>
            <div className="grid grid-cols-[121px_41px_121px] gap-[15px]">
              <input
                type="text"
                value={minPriceDraft}
                onChange={(event) => setMinPriceDraft(event.target.value)}
                placeholder="Min"
                className="h-[42px] rounded-[8px] border border-[#2B2A42] bg-[rgba(25,24,45,0.5)] px-[12px] text-[14px] font-semibold text-white outline-none placeholder:text-[#BDBADF]"
              />
              <div className="flex h-[42px] w-[41px] items-center justify-center rounded-[999px] border border-[#2B2A42] bg-[rgba(25,24,45,0.5)]">
                <ArrowRightIcon className="h-[8px] w-[10px] text-[#BDBADF]" />
              </div>
              <input
                type="text"
                value={maxPriceDraft}
                onChange={(event) => setMaxPriceDraft(event.target.value)}
                placeholder="Max"
                className="h-[42px] rounded-[8px] border border-[#2B2A42] bg-[rgba(25,24,45,0.5)] px-[12px] text-[14px] font-semibold text-white outline-none placeholder:text-[#BDBADF]"
              />
            </div>
          </div>

          <div>
            <p className="mb-[8px] text-[12px] font-normal leading-none text-[#BDBADF]">Delivery time</p>
            <div className="flex gap-[8px]">
              {deliveryFilterOptions.map((option) => {
                const isApplied = applied.delivery === option.value;
                const isDraft = deliveryDraft === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setDeliveryDraft(option.value)}
                    className={[
                      "inline-flex h-[42px] w-[91px] cursor-pointer items-center justify-center rounded-[999px] border text-[14px] font-semibold transition-all duration-150",
                      isApplied
                        ? "border-[#5BFF8A] bg-[linear-gradient(180deg,#DBFFA2_0%,#00FF4D_100%)] text-[#0D0C1D] shadow-[0_6px_14px_rgba(0,255,77,0.28)]"
                        : isDraft
                          ? "border-[#FFB338] bg-[linear-gradient(180deg,#FFB338_0%,#FF9D00_100%)] text-[#0D0C1D] shadow-[0_6px_14px_rgba(255,157,0,0.28)]"
                          : "border-[#2B2A42] bg-[rgba(25,24,45,0.5)] text-white hover:border-[#3E4771] hover:bg-[rgba(31,30,53,0.72)]",
                    ].join(" ")}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="mt-[2px] inline-flex h-[42px] w-full cursor-pointer items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#FFB338_0%,#FF9D00_100%)] text-[12px] font-semibold leading-none text-[#101020] transition-all duration-200 hover:-translate-y-px hover:brightness-[1.03]"
          >
            Apply Filters
          </button>
        </form>
      </aside>

      <div>
        <div className="flex flex-wrap items-center justify-between gap-[12px]">
          <div className="inline-flex items-center gap-[8px] text-[12px] leading-none text-[#BDBADF]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#35FF64] shadow-[0_0_8px_rgba(53,255,100,0.9)]" />
            <span>{filteredSortedOffers.length} Offers</span>
          </div>

          <div className="flex w-full items-center justify-between gap-[11px] sm:w-auto sm:justify-start">
            <span className="text-[12px] leading-none text-[#BDBADF]">Sort by</span>
            <div className="relative" ref={sortMenuRef}>
              <button
                type="button"
                onClick={() => setSortMenuOpen((prev) => !prev)}
                className="flex h-[42px] w-[190px] cursor-pointer list-none items-center justify-between rounded-[8px] border border-[#2B2A42] bg-[rgba(25,24,45,0.5)] px-[14px] text-[14px] font-semibold text-white transition-all duration-200 hover:border-[#3E4771] hover:bg-[rgba(32,31,54,0.72)] sm:w-[229px]"
              >
                {activeSortLabel}
                <ChevronDownIcon className={sortMenuOpen ? "h-[6px] w-[8px] text-white transition-transform rotate-180" : "h-[6px] w-[8px] text-white transition-transform"} />
              </button>

              {sortMenuOpen ? (
                <div className="absolute right-0 z-[20] mt-[8px] w-[190px] overflow-hidden rounded-[8px] border border-[#2B2A42] bg-[#1A1930] shadow-[0_14px_24px_rgba(0,0,0,0.38)] sm:w-[229px]">
                  {offerSortOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        setSort(option.value);
                        setSortMenuOpen(false);
                      }}
                      className={[
                        "block w-full cursor-pointer px-[14px] py-[10px] text-left text-[14px] font-medium transition-colors",
                        option.value === sort ? "bg-[rgba(255,157,0,0.18)] text-white" : "text-[#D3D0F4] hover:bg-[rgba(255,255,255,0.04)]",
                      ].join(" ")}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-[24px] grid grid-cols-1 gap-x-[20px] gap-y-[21px] md:grid-cols-2 xl:grid-cols-3">
          {visibleOffers.map((offer, index) => {
            if (category === "gold") {
              return <GoldOfferCardInteractive key={offer.id} offer={offer} />;
            }

            const heroSlot = heroSlots[index % heroSlots.length];
            return <OfferCardInteractive key={offer.id} offer={offer} heroSlot={heroSlot} />;
          })}
        </div>

        {filteredSortedOffers.length === 0 ? (
          <div className="mt-[20px] rounded-[10px] border border-[#2B2A42] bg-[rgba(25,24,45,0.42)] p-[20px] text-[14px] text-[#BDBADF]">
            No services matched your filters.
          </div>
        ) : null}

        {hasMore ? (
          <button
            type="button"
            onClick={() => setVisibleCount(filteredSortedOffers.length)}
            className="mt-[24px] flex h-[54px] w-full cursor-pointer items-center justify-center rounded-[10px] border border-[#2B2A42] bg-[linear-gradient(180deg,#1A1930_0%,#171629_100%)] px-[22px] text-[16px] font-semibold leading-none text-white shadow-[0_8px_16px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-200 hover:-translate-y-px hover:bg-[linear-gradient(180deg,#211F39_0%,#1A1930_100%)]"
          >
            {loadMoreLabelByCategory[category]}
          </button>
        ) : null}
      </div>
    </div>
  );
}

