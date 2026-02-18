"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";

const testimonials = [
  {
    href: "/games?game=minecraft",
    src: "/figma/embedded/homepage/reviews/testimonial-card.svg",
  },
  {
    href: "/games?game=world-of-warcraft",
    src: "/figma/embedded/homepage/reviews/testimonial-card.svg",
  },
  {
    href: "/games?game=runescape-3",
    src: "/figma/embedded/homepage/reviews/testimonial-card.svg",
  },
  {
    href: "/games?game=old-school-runescape",
    src: "/figma/embedded/homepage/reviews/testimonial-card.svg",
  },
];

function buildCarouselItems<T>(items: T[], targetCount: number) {
  if (!items.length) return [];
  if (items.length >= targetCount) return items;

  const repeats = Math.ceil(targetCount / items.length);
  const expanded = Array.from({ length: repeats * items.length }, (_, index) => items[index % items.length]);
  return expanded.slice(0, targetCount);
}

export function TestimonialsSection() {
  const baseTestimonials = useMemo(() => buildCarouselItems(testimonials, 100), []);
  const cards = useMemo(() => baseTestimonials.concat(baseTestimonials).concat(baseTestimonials), [baseTestimonials]);

  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const offsetRef = useRef(0);
  const stepRef = useRef(447);
  const cycleRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    let previous = 0;
    const speed = 0.055;

    const normalizeOffset = () => {
      const cycle = cycleRef.current;
      if (!cycle) return;

      while (offsetRef.current < cycle) offsetRef.current += cycle;
      while (offsetRef.current >= cycle * 2) offsetRef.current -= cycle;
    };

    const applyOffset = () => {
      normalizeOffset();
      track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
    };

    const measure = () => {
      const firstCard = track.querySelector<HTMLElement>("[data-testimonial-card]");
      if (!firstCard) return;

      const styles = window.getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap || "20") || 20;
      const width = firstCard.getBoundingClientRect().width;
      stepRef.current = width + gap;
      cycleRef.current = stepRef.current * baseTestimonials.length;
      applyOffset();
    };

    offsetRef.current = cycleRef.current;
    measure();

    const tick = (time: number) => {
      if (!previous) previous = time;
      const delta = time - previous;

      if (!pausedRef.current) {
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
  }, [baseTestimonials.length]);

  const shiftCards = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    offsetRef.current += direction * stepRef.current;

    const cycle = cycleRef.current;
    while (offsetRef.current < cycle) offsetRef.current += cycle;
    while (offsetRef.current >= cycle * 2) offsetRef.current -= cycle;

    track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;
  };


  return (
    <section className="relative z-[10] mx-auto mt-0 max-w-[1440px] bg-[#0D0C1D] px-[60px] pb-[150px] pt-[202px]">
      <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 w-screen -translate-x-1/2 overflow-hidden">
        <img
          src="/figma/embedded/homepage/reviews/section-bg.svg"
          alt=""
          className="h-full w-full select-none object-cover object-top"
          draggable={false}
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 86%, rgba(0,0,0,0) 100%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 86%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>


      <div className="relative">
        <div className="mx-auto w-fit">
          <img
            src="/figma/embedded/homepage/reviews/trust-pill.svg"
            alt=""
            className="h-[50px] w-auto select-none"
            draggable={false}
          />
        </div>

        <h2 className="mt-[26px] text-center text-[52px] font-semibold leading-[60px] tracking-[-0.02em] text-white">
          Don&apos;t just take our word for it
        </h2>

        <div
          className="relative left-1/2 mt-[34px] w-[calc(100vw-80px)] -translate-x-1/2 overflow-hidden"
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
          <div className="overflow-hidden pb-[6px]">
            <div ref={trackRef} className="flex w-max gap-[20px] pl-[40px] will-change-transform">
              {cards.map((testimonial, index) => (
                <article
                  key={`${testimonial.href}-${index}`}
                  data-testimonial-card
                  className="relative h-[480px] w-[427px] shrink-0 overflow-hidden rounded-[14px] bg-[#0D0C1D]/[0.42]"
                >
                  <div className="pointer-events-none absolute inset-[1px] z-[1] rounded-[13px] backdrop-blur-[4px]" />
                  <img
                    src={testimonial.src}
                    alt=""
                    className="relative z-[2] h-full w-full select-none"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 z-[6] rounded-[14px] border border-white/[0.16] shadow-[inset_0_1px_0_rgba(255,255,255,0.38),inset_0_-1px_0_rgba(16,18,34,0.9),inset_1px_0_0_rgba(174,182,224,0.28),inset_-1px_0_0_rgba(28,31,52,0.84),inset_0_0_0_1px_rgba(126,134,176,0.28),inset_0_0_32px_rgba(5,6,18,0.38)]" />

                  <Link href={testimonial.href} aria-label="Open review" className="absolute inset-0 z-[12]" />
                  <Link
                    href="/games?type=boosting"
                    aria-label="Open boosting services"
                    className="absolute left-[28px] top-[415px] z-[16] block h-[34px] w-[88px] cursor-pointer rounded-[8px] bg-transparent transition-colors duration-150 hover:bg-white/[0.06] focus-visible:bg-white/[0.06] focus-visible:outline-none"
                  >
                    <span className="sr-only">Boosting</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-[33px] h-[45px] w-[218px]">
          <img
            src="/figma/embedded/homepage/reviews/nav-controls.svg"
            alt=""
            className="pointer-events-none h-[45px] w-[218px] select-none"
            draggable={false}
          />

          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => shiftCards(-1)}
            className="absolute left-0 top-0 h-[45px] w-[95px] cursor-pointer rounded-[22.5px] bg-transparent transition-all duration-150 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)] focus-visible:shadow-[0_0_0_1px_rgba(255,255,255,0.14)] focus-visible:outline-none"
          />

          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => shiftCards(1)}
            className="absolute right-0 top-0 h-[45px] w-[95px] cursor-pointer rounded-[22.5px] bg-transparent transition-all duration-150 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)] focus-visible:shadow-[0_0_0_1px_rgba(255,255,255,0.14)] focus-visible:outline-none"
          />
        </div>
      </div>
    </section>
  );
}
