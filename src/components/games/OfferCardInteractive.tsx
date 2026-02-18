"use client";

import type { CSSProperties, SVGProps } from "react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { CurrencyAmount } from "@/components/shell/CurrencyAmount";
import type { Offer } from "@/lib/catalog";

const gameSelectedSprite = "/figma/extracted/Web-2.png";

function spriteStyle(x: number, y: number): CSSProperties {
  return {
    backgroundImage: `url(${gameSelectedSprite})`,
    backgroundSize: "1440px 3483px",
    backgroundPosition: `-${x}px -${y}px`,
    backgroundRepeat: "no-repeat",
  };
}

const thumbsUpAsset = "https://www.figma.com/api/mcp/asset/c3a04ca0-fe08-4594-9933-7c956ad7a1a3";

function ProfilePlaceholderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <circle cx="16" cy="16" r="16" fill="url(#profileGradient)" />
      <circle cx="16" cy="12" r="5" fill="#E7E4FF" fillOpacity="0.9" />
      <path d="M7.8 24.2C9.1 20.7 12.3 18.8 16 18.8C19.7 18.8 22.9 20.7 24.2 24.2" fill="#E7E4FF" fillOpacity="0.9" />
      <defs>
        <linearGradient id="profileGradient" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5A72FF" />
          <stop offset="1" stopColor="#2D2B42" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function OfferCardInteractive({
  offer,
  heroSlot,
}: {
  offer: Offer;
  heroSlot: { x: number; y: number };
}) {
  const [quantity, setQuantity] = useState(1);
  const approval = Math.min(99.98, Math.max(96.5, offer.sellerRating * 20));
  const total = useMemo(() => offer.priceUsd * quantity, [offer.priceUsd, quantity]);
  const offerHref = `/games/${offer.gameSlug}/offers/${offer.id}`;

  return (
    <article className="group relative h-[407px] overflow-hidden rounded-[10px] border border-[#2B2A42] bg-[#141226] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-200 hover:border-[#3A3856] hover:shadow-[0_24px_40px_rgba(0,0,0,0.52),0_0_0_1px_rgba(75,91,145,0.45),0_0_24px_rgba(58,67,107,0.30)]">
      <Link href={offerHref} className="block h-[171px] w-full cursor-pointer" aria-label={offer.title}>
        <div className="h-[171px] w-full transition-transform duration-200 group-hover:scale-[1.012]" style={spriteStyle(heroSlot.x, heroSlot.y)} />
      </Link>

      <div className="flex h-[236px] flex-col px-[14px] pb-[10px] pt-[10px]">
        <Link href={offerHref} className="line-clamp-2 w-fit cursor-pointer text-[16px] font-semibold leading-[1.2] text-white hover:text-white/95">
          {offer.title}
        </Link>

        <div className="mt-[18px] -mx-[14px] bg-[rgba(13,12,29,0.5)] px-[14px] py-[9px]">
          <div className="flex items-center justify-between gap-[8px]">
            <Link href={offerHref} className="group/seller flex min-w-0 cursor-pointer items-center gap-[8px] transition-all duration-150 hover:drop-shadow-[0_6px_12px_rgba(0,0,0,0.28)]">
              <span className="inline-flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-full border border-[#2B2A42] bg-[#1A1930] transition-all duration-150 group-hover/seller:border-[#3E4771] group-hover/seller:bg-[#23223A]">
                <ProfilePlaceholderIcon className="h-[30px] w-[30px]" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[13px] font-semibold leading-[1.2] text-white transition-colors duration-150 group-hover/seller:text-[#E8E6FF]">{offer.sellerName}</p>
                <p className="text-[11px] leading-[1.2] text-[#BDBADF] transition-colors duration-150 group-hover/seller:text-[#D4D1F2] whitespace-nowrap pl-[2px]">
                  <span className="mr-[6px] inline-block h-[6px] w-[6px] rounded-full bg-[#35FF64] align-middle shadow-[0_0_8px_rgba(53,255,100,0.95)]" />
                  {offer.sellerOrders.toLocaleString()} sold
                </p>
              </div>
            </Link>

            <div className="inline-flex h-[35px] items-center gap-[6px] rounded-[144px] border border-[#2B2A42] bg-[#19182D] px-[10px] text-[12px] font-semibold text-white">
              <img src={thumbsUpAsset} alt="" className="h-[18px] w-[18px] object-contain" decoding="async" />
              <span className="h-[23px] w-px bg-[#3A3856]" />
              {approval.toFixed(2)}%
            </div>
          </div>
        </div>

        <div className="mt-[28px] flex items-start">
          <div className="w-[144px] pl-[6px]">
            <p className="text-[11px] leading-[1.15] text-[#BDBADF]">Estimated Delivery</p>
            <p className="mt-[4px] text-[17px] font-semibold leading-[1.1] text-white">{offer.deliveryDays * 24}h</p>
          </div>
          <div className="ml-[16px] flex-1 pr-[2px]">
            <p className="text-[11px] leading-[1.15] text-[#BDBADF]">Price</p>
            <p className="mt-[4px] whitespace-nowrap text-[17px] font-semibold leading-[1.1] text-white"><CurrencyAmount usd={total} /></p>
          </div>
        </div>

        <div className="mt-auto flex items-center gap-[6px]">
          <button
            type="button"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            disabled={quantity <= 1}
            className="inline-flex h-[36px] w-[38px] cursor-pointer items-center justify-center rounded-[8px] border border-[#2B2A42] bg-[#19182D] text-[22px] leading-none text-[#BDBADF] shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_-4px_6px_rgba(0,0,0,0.2)] transition-all duration-150 enabled:hover:border-[#3A3856] enabled:hover:bg-[#23223A] enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            -
          </button>
          <button
            type="button"
            className="inline-flex h-[36px] w-[56px] cursor-default items-center justify-center rounded-[8px] border border-[#2B2A42] bg-[#19182D] text-[16px] leading-none text-white shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_-4px_6px_rgba(0,0,0,0.2)]"
          >
            {quantity}
          </button>
          <button
            type="button"
            onClick={() => setQuantity((prev) => prev + 1)}
            className="inline-flex h-[36px] w-[38px] cursor-pointer items-center justify-center rounded-[8px] border border-[#2B2A42] bg-[#19182D] text-[22px] leading-none text-[#BDBADF] shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_-4px_6px_rgba(0,0,0,0.2)] transition-all duration-150 hover:border-[#3A3856] hover:bg-[#23223A] hover:text-white"
          >
            +
          </button>
          <Link
            href={`${offerHref}?qty=${quantity}`}
            className="ml-[10px] inline-flex h-[35px] w-[124px] shrink-0 cursor-pointer items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#DBFFA2_0%,#00FF4D_100%)] text-[12px] font-semibold leading-none text-[#0D0C1D] shadow-[0_4px_8px_rgba(0,0,0,0.28),inset_0_-4px_8px_rgba(0,0,0,0.16)] transition-all duration-200 hover:-translate-y-px hover:brightness-[1.05]"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </article>
  );
}
