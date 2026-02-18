"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, type SVGProps } from "react";

import { getGamesPageGridGames, type GameCardTitleVariant } from "@/lib/catalog";

type GameCarouselCard = {
  slug: string;
  name: string;
  title: string;
  imageSrc: string;
  gradient: string;
  titleVariant: GameCardTitleVariant;
  offersCount: number;
};

function buildCarouselItems<T>(items: T[], targetCount: number) {
  if (!items.length) return [];
  if (items.length >= targetCount) return items;

  const repeats = Math.ceil(targetCount / items.length);
  const expanded = Array.from({ length: repeats * items.length }, (_, index) => items[index % items.length]);
  return expanded.slice(0, targetCount);
}

function OffersArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="267 72 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M268 75.5C267.724 75.5 267.5 75.7239 267.5 76C267.5 76.2761 267.724 76.5 268 76.5V76V75.5ZM277.354 76.3536C277.549 76.1583 277.549 75.8417 277.354 75.6464L274.172 72.4645C273.976 72.2692 273.66 72.2692 273.464 72.4645C273.269 72.6597 273.269 72.9763 273.464 73.1716L276.293 76L273.464 78.8284C273.269 79.0237 273.269 79.3403 273.464 79.5355C273.66 79.7308 273.976 79.7308 274.172 79.5355L277.354 76.3536ZM268 76V76.5H277V76V75.5H268V76Z"
        fill="white"
      />
    </svg>
  );
}

function titleClass(variant: GameCardTitleVariant): string {
  if (variant === "compact") {
    return "text-[34px] sm:text-[37px] lg:text-[39px]";
  }

  if (variant === "medium") {
    return "text-[37px] sm:text-[40px] lg:text-[42px]";
  }

  return "text-[39px] sm:text-[42px] lg:text-[44px]";
}

export function GameCardsCarouselSection() {
  const sourceCards = useMemo<GameCarouselCard[]>(() => {
    return getGamesPageGridGames().map((game) => ({
      slug: game.slug,
      name: game.name,
      title: game.card!.title,
      imageSrc: game.card!.imageSrc,
      gradient: game.card!.gradient,
      titleVariant: game.card!.titleVariant,
      offersCount: game.card!.offersCount,
    }));
  }, []);

  const baseCards = useMemo(() => buildCarouselItems(sourceCards, 100), [sourceCards]);

  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const offsetRef = useRef(0);
  const cycleRef = useRef(0);
  const initializedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    let previous = 0;
    const speed = 0.038;

    const applyOffset = () => {
      const cycle = cycleRef.current;
      if (!cycle) return;

      while (offsetRef.current < cycle) offsetRef.current += cycle;
      while (offsetRef.current >= cycle * 2) offsetRef.current -= cycle;

      track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
    };

    const measure = () => {
      const cardEls = track.querySelectorAll<HTMLElement>("[data-game-card]");
      if (cardEls.length <= baseCards.length) return;

      const first = cardEls[0];
      const nextSetFirst = cardEls[baseCards.length];
      const firstRect = first.getBoundingClientRect();
      const nextRect = nextSetFirst.getBoundingClientRect();
      const exactCycle = nextRect.left - firstRect.left;

      if (exactCycle <= 0) return;

      cycleRef.current = exactCycle;
      if (!initializedRef.current) {
        offsetRef.current = exactCycle;
        initializedRef.current = true;
      }
      applyOffset();
    };

    measure();

    const tick = (time: number) => {
      if (!previous) previous = time;
      const delta = Math.min(time - previous, 40);

      if (!pausedRef.current && !document.hidden) {
        offsetRef.current += delta * speed;
        applyOffset();
      }

      previous = time;
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    const images = Array.from(track.querySelectorAll("img"));
    images.forEach((img) => img.addEventListener("load", measure));

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      images.forEach((img) => img.removeEventListener("load", measure));
    };
  }, [baseCards.length]);

  const cards = useMemo(() => baseCards.concat(baseCards).concat(baseCards), [baseCards]);

  return (
    <section className="relative left-1/2 w-[calc(100vw-60px)] -translate-x-1/2 overflow-hidden pb-[130px]">
      <div
        className="overflow-hidden"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onFocusCapture={() => {
          pausedRef.current = true;
        }}
        onBlurCapture={() => {
          pausedRef.current = false;
        }}
      >
        <div ref={trackRef} className="flex w-max gap-[14px] px-[30px] py-[10px] will-change-transform">
          {cards.map((card, index) => (
            <article
              key={`${card.slug}-${index}`}
              data-game-card
              className="relative h-[300px] w-[202px] shrink-0 overflow-hidden rounded-[10px] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[8px] hover:shadow-[0_16px_24px_rgba(0,0,0,0.38)] sm:h-[328px] sm:w-[220px] lg:h-[354px] lg:w-[239px]"
            >
              <img src={card.imageSrc} alt={card.name} className="h-full w-full select-none object-cover" decoding="async" draggable={false} />
              <div className="pointer-events-none absolute inset-0" style={{ background: card.gradient }} />

              <h3
                className={[
                  "pointer-events-none absolute inset-x-[12px] bottom-[48px] text-center font-black leading-[1.05] text-white [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]",
                  titleClass(card.titleVariant),
                ].join(" ")}
                style={{ whiteSpace: "pre-line" }}
              >
                {card.title}
              </h3>

              <div className="pointer-events-none absolute inset-x-[12px] bottom-[12px] flex h-[40px] items-center rounded-[999px] bg-[#19182D] pl-[14px] pr-[13px] shadow-[inset_0_4.7px_4.7px_rgba(13,12,29,1)]">
                <span className="mr-[8px] h-[8px] w-[8px] rounded-full bg-[#35FF64] shadow-[0_0_8px_rgba(53,255,100,0.85)]" />
                <p className="text-[12px] leading-none text-white">
                  <span className="font-semibold">{card.offersCount} </span>
                  <span className="font-normal">Offers</span>
                </p>
                <OffersArrow className="ml-auto h-[8px] w-[11px]" />
              </div>

              <Link href={`/games/${card.slug}`} aria-label={`Open ${card.name} services`} className="absolute inset-0 z-[2]" />
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-[52px] w-full max-w-[1320px]">
        <Link
          href="/games"
          className="group mx-auto flex h-[54px] w-full items-center justify-center rounded-[10px] bg-[linear-gradient(180deg,#1A1930_0%,#171629_100%)] text-[16px] font-[600] text-white shadow-[0_8px_16px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-200 hover:-translate-y-px hover:bg-[linear-gradient(180deg,#211F39_0%,#1A1930_100%)] hover:text-[#EFF2FF] hover:shadow-[0_12px_22px_rgba(0,0,0,0.44),0_0_0_1px_rgba(61,74,118,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          Browse all Games
        </Link>
      </div>
    </section>
  );
}
