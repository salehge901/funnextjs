import type { CSSProperties, SVGProps } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GameOffersClient } from "@/components/games/GameOffersClient";
import {
  getGame,
  getOffersForGame,
  getOfferPlatformsForGame,
  getOfferServersForGame,
  offerCategoryOrder,
  offerSortOptions,
  type DeliveryTimeFilter,
  type OfferCategory,
  type OfferSort,
} from "@/lib/catalog";

const gamesBgVector1 = "https://www.figma.com/api/mcp/asset/75ff3c71-cfd2-4fac-a098-f0ffb10e988a";
const gamesBgVector2 = "https://www.figma.com/api/mcp/asset/223a1b77-0e77-4232-a87b-3376dfc78cb9";
const gameSelectedSprite = "/figma/extracted/Web-2.png";

const offerHeroSlots = [
  { x: 395, y: 238 },
  { x: 730, y: 238 },
  { x: 1065, y: 238 },
  { x: 395, y: 666 },
  { x: 730, y: 666 },
  { x: 1065, y: 666 },
  { x: 395, y: 1094 },
  { x: 730, y: 1094 },
  { x: 1065, y: 1094 },
  { x: 395, y: 1522 },
  { x: 730, y: 1522 },
  { x: 1065, y: 1522 },
] as const;

const categoryIconSlots: Record<OfferCategory, { x: number; y: number; w: number; h: number }> = {
  items: { x: 152, y: 182, w: 62, h: 61 },
  accounts: { x: 309, y: 181, w: 64, h: 62 },
  boosting: { x: 152, y: 254, w: 62, h: 62 },
  gold: { x: 291, y: 254, w: 83, h: 62 },
};

const categoryPriority: OfferCategory[] = ["accounts", "gold", "boosting", "items"];

type SearchParamsValue = string | string[] | undefined;
type SearchParamsObject = Record<string, SearchParamsValue>;

function spriteStyle(x: number, y: number): CSSProperties {
  return {
    backgroundImage: `url(${gameSelectedSprite})`,
    backgroundSize: "1440px 3483px",
    backgroundPosition: `-${x}px -${y}px`,
    backgroundRepeat: "no-repeat",
  };
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

function getFirstParam(value: SearchParamsValue): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

function parseFloatParam(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function parseCategory(value: string | undefined): OfferCategory | undefined {
  if (!value) return undefined;
  return offerCategoryOrder.find((category) => category === value);
}

function parseSort(value: string | undefined): OfferSort {
  const fallback: OfferSort = "recommended";
  if (!value) return fallback;
  const match = offerSortOptions.find((option) => option.value === value);
  return match ? match.value : fallback;
}

function parseDelivery(value: string | undefined): DeliveryTimeFilter | undefined {
  if (!value) return undefined;
  if (value === "1" || value === "3" || value === "5") return value;
  return undefined;
}

export default async function GameSelectedPage({
  params,
  searchParams,
}: {
  params: Promise<{ game: string }>;
  searchParams: Promise<SearchParamsObject>;
}) {
  const { game: slug } = await params;
  const resolvedSearchParams = await searchParams;
  const game = getGame(slug);

  if (!game) {
    notFound();
  }

  const pagePath = `/games/${game.slug}`;
  const allGameOffers = getOffersForGame(game.slug);
  const categoryOptions = categoryPriority.filter((category) => allGameOffers.some((offer) => offer.category === category));
  const availableCategories: OfferCategory[] = categoryOptions.length > 0 ? categoryOptions : ["items"];

  const parsedCategory = parseCategory(getFirstParam(resolvedSearchParams.category));
  const selectedCategory: OfferCategory = parsedCategory && availableCategories.includes(parsedCategory) ? parsedCategory : availableCategories[0];

  const selectedSort = parseSort(getFirstParam(resolvedSearchParams.sort));
  const selectedDelivery = parseDelivery(getFirstParam(resolvedSearchParams.delivery));
  const search = getFirstParam(resolvedSearchParams.q)?.trim() ?? "";
  const minPrice = parseFloatParam(getFirstParam(resolvedSearchParams.minPrice));
  const maxPrice = parseFloatParam(getFirstParam(resolvedSearchParams.maxPrice));

  const serverOptions = getOfferServersForGame(game.slug);
  const platformOptions = getOfferPlatformsForGame(game.slug);

  const selectedServerParam = getFirstParam(resolvedSearchParams.server);
  const selectedPlatformParam = getFirstParam(resolvedSearchParams.platform);
  const selectedServer = serverOptions.find((server) => server === selectedServerParam);
  const selectedPlatform = platformOptions.find((platform) => platform === selectedPlatformParam);

  return (
    <section className="relative mx-auto max-w-[1440px] px-[20px] pb-[80px] pt-[24px] sm:px-[32px] lg:px-[60px]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[845px] w-screen -translate-x-1/2 overflow-hidden">
        <img
          src={gamesBgVector1}
          alt=""
          className="absolute left-[calc(25%+69px)] top-[-152px] h-[845px] w-[951px] max-w-none"
          style={{ mixBlendMode: "hard-light", opacity: 0.2 }}
          draggable={false}
        />
        <img
          src={gamesBgVector2}
          alt=""
          className="absolute left-[calc(50%-6px)] top-[-170px] h-[845px] w-[884px] max-w-none"
          style={{ mixBlendMode: "hard-light", opacity: 0.2 }}
          draggable={false}
        />
        <img
          src={gamesBgVector2}
          alt=""
          className="absolute left-[-33px] top-[-170px] h-[845px] w-[884px] max-w-none"
          style={{ mixBlendMode: "hard-light", opacity: 0.2 }}
          draggable={false}
        />
      </div>

      <div className="relative z-[1]">
        <div className="relative left-1/2 mt-0 w-screen -translate-x-1/2 overflow-hidden bg-[linear-gradient(180deg,rgba(37,37,51,0.78)_0%,rgba(24,24,37,0.78)_100%)]">
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.022)_0%,rgba(255,255,255,0)_44%,rgba(255,255,255,0.012)_100%)]" />
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_140%_at_22%_0%,rgba(122,138,255,0.09)_0%,rgba(122,138,255,0)_62%),radial-gradient(55%_140%_at_78%_0%,rgba(184,142,255,0.06)_0%,rgba(184,142,255,0)_64%)]" />
          <div className="relative mx-auto flex min-h-[72px] w-full max-w-[1440px] flex-wrap items-center justify-between gap-[14px] px-[20px] py-3 sm:px-[32px] lg:px-[60px]">
            <div className="flex min-w-0 items-center gap-[12px]">
              <div className="relative h-[48px] w-[48px] overflow-hidden rounded-[8px] border border-[#393855] bg-[#19182D]">
                {game.card ? (
                  <img src={game.card.imageSrc} alt="" className="h-full w-full object-cover" decoding="async" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    {game.chip ? <img src={game.chip.iconSrc} alt="" className="h-[26px] w-[26px] object-contain" decoding="async" /> : null}
                  </div>
                )}
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_42%,rgba(12,10,24,0.72)_100%)]" />
              </div>
              <h1 className="truncate text-2xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#E3E0F6] sm:text-3xl lg:text-[40px] lg:leading-[0.95]">
                {game.name}
              </h1>
            </div>

            <Link
              href="/games"
              className="group inline-flex shrink-0 cursor-pointer items-center gap-[8px] text-[16px] font-normal leading-none text-[#BDBADF] underline underline-offset-[2px] transition-all duration-200 hover:text-white"
            >
              <ArrowRightIcon className="h-[8px] w-[11px] rotate-180 transition-transform duration-200 group-hover:-translate-x-[2px]" />
              Back to games
            </Link>
          </div>
        </div>

        <GameOffersClient
          pagePath={pagePath}
          allOffers={allGameOffers}
          availableCategories={availableCategories}
          serverOptions={serverOptions}
          platformOptions={platformOptions}
          initialCategory={selectedCategory}
          initialSort={selectedSort}
          initialDelivery={selectedDelivery}
          initialSearch={search}
          initialServer={selectedServer}
          initialPlatform={selectedPlatform}
          initialMinPrice={minPrice}
          initialMaxPrice={maxPrice}
          heroSlots={offerHeroSlots}
          categoryIconSlots={categoryIconSlots}
          gameSelectedSprite={gameSelectedSprite}
        />
      </div>
    </section>
  );
}
