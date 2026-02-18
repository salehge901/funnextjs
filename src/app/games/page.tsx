import type { CSSProperties, SVGProps } from "react";
import Link from "next/link";

import { GameCardTitleVariant, getGamesPageGridGames, getGamesPagePopularGames } from "@/lib/catalog";

const gamesBgVector1 = "https://www.figma.com/api/mcp/asset/75ff3c71-cfd2-4fac-a098-f0ffb10e988a";
const gamesBgVector2 = "https://www.figma.com/api/mcp/asset/223a1b77-0e77-4232-a87b-3376dfc78cb9";

const chipWidths: Record<string, number> = {
  "old-school-runescape": 202,
  minecraft: 118,
  "diablo-iv": 114,
  "world-of-warcraft": 173,
};

function OffersArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M1 4H10M10 4L7 1M10 4L7 7"
        stroke="white"
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
        fill="#FF9D00"
      />
    </svg>
  );
}

function titleClass(variant: GameCardTitleVariant): string {
  if (variant === "compact") {
    return "bottom-[55px] w-[163px] text-[24.877px] leading-none uppercase";
  }

  if (variant === "medium") {
    return "bottom-[50px] text-[28px] leading-[1.2]";
  }

  return "bottom-[50px] text-[32.203px] leading-[1.2]";
}

const blendLayerStyle: CSSProperties = {
  mixBlendMode: "hard-light",
  opacity: 0.2,
};

export default function GamesPage() {
  const popularGames = getGamesPagePopularGames();
  const gridGames = getGamesPageGridGames();

  return (
    <section className="relative mx-auto max-w-[1440px] px-[20px] pb-[88px] pt-[24px] sm:px-[32px] lg:px-[60px]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[845px] w-screen -translate-x-1/2 overflow-hidden">
        <img
          src={gamesBgVector1}
          alt=""
          className="absolute left-[calc(25%+69px)] top-[-152px] h-[845px] w-[951px] max-w-none"
          style={blendLayerStyle}
          draggable={false}
        />
        <img
          src={gamesBgVector2}
          alt=""
          className="absolute left-[calc(50%-6px)] top-[-170px] h-[845px] w-[884px] max-w-none"
          style={blendLayerStyle}
          draggable={false}
        />
        <img
          src={gamesBgVector2}
          alt=""
          className="absolute left-[-33px] top-[-170px] h-[845px] w-[884px] max-w-none"
          style={blendLayerStyle}
          draggable={false}
        />
      </div>

      <div className="relative z-[1]">
        <div className="flex items-start gap-[7px]">
          <h1 className="text-3xl font-semibold leading-[1.2] text-white sm:text-4xl lg:text-[48px]">Select game</h1>
          <span className="mt-[10px] inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#19182D] text-[13px] font-semibold leading-none text-white shadow-[inset_0_4px_10px_rgba(9,8,21,0.35)]">
            {gridGames.length}
          </span>
        </div>

        <div className="mt-[24px] h-px w-full bg-[#2B2A42]" />

        <div className="relative mt-[12px]">
          <div className="pr-[48px]">
            <p className="text-[12px] font-semibold leading-none text-white">Popular games</p>

            <div className="mt-[12px] flex flex-wrap gap-[12px]">
              {popularGames.map((game) => (
                <Link
                  key={game.slug}
                  href={`/games/${game.slug}`}
                  className="inline-flex h-[47px] cursor-pointer items-center rounded-[8px] bg-[#19182D] px-[11px] text-[14px] font-semibold leading-[1.2] text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#21203A] hover:shadow-[0_8px_16px_rgba(0,0,0,0.28)]"
                  style={{ width: chipWidths[game.slug] ?? undefined }}
                >
                  {game.chip ? (
                    <span
                      className="mr-[6px] inline-flex h-[24px] w-[24px] items-center justify-center rounded-[6px]"
                      style={{ backgroundColor: game.chip.iconBg }}
                    >
                      <img src={game.chip.iconSrc} alt="" className="h-[14px] w-[14px] object-contain" decoding="async" />
                    </span>
                  ) : null}
                  <span>{game.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Search games"
            className="group absolute right-0 top-[-5px] inline-flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-[8px] border border-[#2B2A42] bg-[#19182D] transition-all duration-200 hover:bg-[#21203A]"
          >
            <SearchIcon className="h-[18px] w-[18px] transition-all duration-200 group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_8px_rgba(255,157,0,0.95))]" />
          </button>
        </div>

        <div className="mt-[28px] pb-[6px] pt-[6px]">
          <div className="grid grid-cols-1 gap-x-[20px] gap-y-[20px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 2xl:gap-y-[36px]">
            {gridGames.map((game, index) => {
              if (!game.card) return null;

              return (
                <article key={`${game.slug}-${index}`} className="relative mx-auto h-[301px] w-[203px] max-w-full overflow-hidden rounded-[8px] transition-all duration-250 ease-out hover:-translate-y-[4px] hover:brightness-[1.03] hover:shadow-[0_16px_24px_rgba(0,0,0,0.35)]">
                  <img src={game.card.imageSrc} alt={game.name} className="h-full w-full object-cover" decoding="async" />
                  <div className="pointer-events-none absolute inset-0" style={{ background: game.card.gradient }} />

                  <h2
                    className={`pointer-events-none absolute left-1/2 -translate-x-1/2 text-center font-black text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] ${titleClass(game.card.titleVariant)}`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {game.card.title}
                  </h2>

                  <div className="pointer-events-none absolute inset-x-[10px] bottom-[10px] flex h-[34px] items-center rounded-[144px] bg-[#19182D] pl-[12px] pr-[14px] shadow-[inset_0_4px_4px_rgba(13,12,29,1)]">
                    <span className="mr-[8px] h-[6px] w-[6px] rounded-full bg-[#00FF4D] shadow-[0_0_8px_rgba(53,255,100,0.9)]" />
                    <p className="text-[10px] leading-none text-white">
                      <span className="font-semibold">{game.card.offersCount} </span>
                      <span className="font-normal">Offers</span>
                    </p>
                    <OffersArrow className="ml-auto h-[8px] w-[11px]" />
                  </div>

                  <Link href={`/games/${game.slug}`} aria-label={`Open ${game.name}`} className="absolute inset-0 z-[2] cursor-pointer" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
