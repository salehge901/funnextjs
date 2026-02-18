"use client";

import type { SVGProps } from "react";
import Link from "next/link";
import { useMemo } from "react";

import { CurrencyAmount } from "@/components/shell/CurrencyAmount";
import type { Offer } from "@/lib/catalog";

const thumbsUpAsset = "https://www.figma.com/api/mcp/asset/791c01e1-2a9b-42ff-9ec9-bc8e24a41944";

const serverDisplayByRegion: Record<string, string> = {
  "North American": "[US] Illidan - Alliance",
  Europe: "[EU] Silvermoon - Horde",
  Asia: "[AS] Stormrage - Alliance",
};

function ProfilePlaceholderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <circle cx="16" cy="16" r="16" fill="url(#goldProfileGradient)" />
      <circle cx="16" cy="12" r="5" fill="#E7E4FF" fillOpacity="0.9" />
      <path d="M7.8 24.2C9.1 20.7 12.3 18.8 16 18.8C19.7 18.8 22.9 20.7 24.2 24.2" fill="#E7E4FF" fillOpacity="0.9" />
      <defs>
        <linearGradient id="goldProfileGradient" x1="4" y1="3" x2="28" y2="29" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5A72FF" />
          <stop offset="1" stopColor="#2D2B42" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function deriveGoldMetrics(offer: Offer): { minOrderLabel: string; stockLabel: string; quantityInK: number } {
  const parsed = offer.title.match(/(\d+(?:\.\d+)?)\s*([kKmM])/);

  let quantityInK: number;
  if (parsed) {
    const value = Number.parseFloat(parsed[1]);
    const unit = parsed[2].toUpperCase();
    quantityInK = unit === "M" ? Math.max(1, Math.round(value * 1000)) : Math.max(1, Math.round(value));
  } else {
    // Backend-friendly fallback derived from offer payload (no hardcoded static offer values).
    quantityInK = Math.max(1, Math.round(offer.priceUsd * 6));
  }

  const stockLabel = quantityInK >= 1000 ? `${(quantityInK / 1000).toFixed(quantityInK % 1000 === 0 ? 0 : 1)}M` : `${quantityInK}K`;

  return {
    minOrderLabel: String(quantityInK),
    stockLabel,
    quantityInK,
  };
}

export function GoldOfferCardInteractive({ offer }: { offer: Offer }) {
  const offerHref = `/games/${offer.gameSlug}/offers/${offer.id}`;
  const approval = Math.min(99.98, Math.max(96.5, offer.sellerRating * 20));
  const deliveryHours = offer.deliveryDays * 24;

  const { minOrderLabel, stockLabel, quantityInK } = useMemo(() => deriveGoldMetrics(offer), [offer]);
  const unitPrice = useMemo(() => {
    if (offer.priceUsd < 1) return offer.priceUsd;
    return offer.priceUsd / Math.max(1, quantityInK);
  }, [offer.priceUsd, quantityInK]);

  return (
    <article className="group relative h-[407px] overflow-hidden rounded-[14px] border border-[#2B2A42] bg-[#141226] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-200 hover:border-[#3A3856] hover:shadow-[0_24px_40px_rgba(0,0,0,0.52),0_0_0_1px_rgba(75,91,145,0.45),0_0_24px_rgba(58,67,107,0.30)]">
      <div className="absolute left-[17px] top-[19px]">
        <p className="text-[10px] leading-none text-[#BDBADF]">Server</p>
        <p className="mt-[8px] text-[16px] font-semibold leading-none text-white">{serverDisplayByRegion[offer.server] ?? offer.server}</p>
      </div>

      <div className="absolute left-[1px] top-[72px] flex h-[48px] w-[313px] items-center justify-between bg-[rgba(13,12,29,0.5)] px-[16px]">
        <Link href={offerHref} className="group/seller flex min-w-0 cursor-pointer items-center gap-[13px]">
          <span className="inline-flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-[144px] border border-[#2B2A42] bg-[#1A1930] transition-all duration-150 group-hover/seller:border-[#3E4771] group-hover/seller:bg-[#23223A]">
            <ProfilePlaceholderIcon className="h-[30px] w-[30px]" />
          </span>
          <span className="min-w-0">
            <span className="block text-[12px] font-semibold leading-none text-white transition-colors duration-150 group-hover/seller:text-[#E8E6FF]">{offer.sellerName}</span>
            <span className="mt-[5px] block text-[10px] leading-none text-[#BDBADF] transition-colors duration-150 group-hover/seller:text-[#D4D1F2]">{offer.sellerOrders.toLocaleString()} sold</span>
          </span>
        </Link>

        <div className="inline-flex h-[29px] items-center gap-[6px] rounded-[1444px] border border-[#2B2A42] px-[10px] py-[6px]">
          <img src={thumbsUpAsset} alt="" className="h-[13px] w-[13px] object-contain" decoding="async" />
          <span className="h-[16px] w-px bg-[#3A3856]" />
          <span className="text-[10px] font-semibold leading-none text-white">{approval.toFixed(2)}%</span>
        </div>
      </div>

      <div className="absolute left-[17px] top-[150px]">
        <p className="text-[10px] leading-none text-[#BDBADF]">Estimated Delivery</p>
        <p className="mt-[8px] text-[16px] font-semibold leading-none text-white">{deliveryHours}h</p>
      </div>

      <div className="absolute left-[17px] top-[208px]">
        <p className="text-[10px] leading-none text-[#BDBADF]">Minimum order</p>
        <p className="mt-[8px] text-[16px] font-semibold leading-none text-white">{minOrderLabel}</p>
      </div>

      <div className="absolute left-[158px] top-[208px]">
        <p className="text-[10px] leading-none text-[#BDBADF]">Available Stock</p>
        <p className="mt-[8px] text-[16px] font-semibold leading-none text-white">{stockLabel}</p>
      </div>

      <div className="absolute left-[17px] top-[266px]">
        <p className="text-[10px] leading-none text-[#BDBADF]">Price (per gold)</p>
        <p className="mt-[8px] text-[16px] font-semibold leading-none text-white"><CurrencyAmount usd={unitPrice} fractionDigits={4} /></p>
      </div>

      <Link
        href={offerHref}
        className="absolute bottom-[16px] left-[19px] inline-flex h-[36px] w-[280px] cursor-pointer items-center justify-center rounded-[8px] bg-[linear-gradient(180deg,#DBFFA2_0%,#00FF4D_100%)] text-[12px] font-semibold leading-none text-[#101020] shadow-[0_4px_8px_rgba(0,0,0,0.28),inset_0_-4px_8px_rgba(0,0,0,0.16)] transition-all duration-200 hover:-translate-y-px hover:brightness-[1.07] active:translate-y-0"
      >
        Buy Now
      </Link>
    </article>
  );
}


