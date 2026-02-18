import Link from "next/link";

type MarketplaceCard = {
  id: string;
  title: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  ctaTone: "green" | "orange";
};

const topCardSellerImage = "https://www.figma.com/api/mcp/asset/dd3668b8-9022-47fb-bebc-c98e82697bd9";
const topCardBuyerImage = "https://www.figma.com/api/mcp/asset/7885d07f-5b3b-4081-8194-3cb818b0a75a";

const marketplaceCards: MarketplaceCard[] = [
  {
    id: "seller",
    title: "Are you a seller?",
    points: ["Sell your services with us!", "Instant Payouts", "Premium Support"],
    ctaLabel: "Sell to us",
    ctaHref: "/sell",
    imageSrc: topCardSellerImage,
    ctaTone: "green",
  },
  {
    id: "buyer",
    title: "Are you a buyer?",
    points: ["Sell your services with us!", "Instant Payouts", "Premium Support"],
    ctaLabel: "Buy from us",
    ctaHref: "/shop",
    imageSrc: topCardBuyerImage,
    ctaTone: "orange",
  },
];

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M10.5 3.5L4.75 9L1.5 5.75" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MarketplaceCardsSection() {
  return (
    <section className="bg-[#0D0C1D] pb-[150px] pt-[86px]">
      <div className="mx-auto max-w-[1440px] px-[20px] sm:px-[32px] lg:px-[60px]">
        <div className="grid gap-[20px] lg:grid-cols-2">
          {marketplaceCards.map((card) => {
            const buttonClass =
              card.ctaTone === "green"
                ? "bg-gradient-to-b from-[#DBFFA2] to-[#00FF4D] hover:shadow-[0_8px_14px_rgba(79,255,142,0.24),0_4px_4px_rgba(0,0,0,0.25)]"
                : "bg-gradient-to-b from-[#FFB338] to-[#FF9D00] hover:shadow-[0_8px_14px_rgba(255,173,67,0.24),0_4px_4px_rgba(0,0,0,0.25)]";

            return (
              <article key={card.id} className="relative h-[390px] overflow-visible rounded-[20px]">
                <div className="absolute inset-0 overflow-hidden rounded-[20px] border border-[#2B2A42] bg-[linear-gradient(180deg,#19182D_0%,#111023_100%)]">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(126deg,rgba(255,255,255,0)_20%,rgba(186,184,255,0.16)_48%,rgba(255,255,255,0)_76%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(142deg,rgba(133,162,255,0)_36%,rgba(133,162,255,0.13)_55%,rgba(133,162,255,0)_74%)]" />
                </div>
                <div className="relative z-[3] pl-[28px] pt-[30px] sm:pl-[44px] sm:pt-[36px]">
                  <h3 className="max-w-[360px] text-[44px] font-semibold leading-[1.1] text-white sm:text-[52px]">{card.title}</h3>
                  <ul className="mt-[20px] space-y-[9px]">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-center gap-[8px] text-[16px] leading-[24px] text-[#BDBADF]">
                        <IconCheck className={`h-[12px] w-[12px] ${card.ctaTone === "green" ? "text-[#00FF4D]" : "text-[#FFB338]"}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={card.ctaHref}
                    className={`mt-[20px] inline-flex h-[52px] w-[226px] items-center justify-center rounded-[8px] text-[16px] font-semibold text-[#101020] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-px ${buttonClass}`}
                  >
                    {card.ctaLabel}
                  </Link>
                </div>

                <img
                  src={card.imageSrc}
                  alt=""
                  className={`pointer-events-none absolute z-[2] hidden max-w-none select-none sm:block ${
                    card.id === "seller"
                      ? "bottom-[-146px] right-[-8px] w-[468px]"
                      : "bottom-[-72px] right-[-20px] w-[350px]"
                  }`}
                  draggable={false}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
