import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

type FooterMarketplaceCard = {
  id: string;
  title: string;
  points: string[];
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  ctaTone: "green" | "orange";
};

type FooterGame = {
  id: string;
  title: string;
  href: string;
};

type FooterPayment = {
  id: string;
  label: string;
  logoSrc?: string;
  logoSrcSecondary?: string;
  tone?: "light" | "dark";
};

type SiteFooterProps = {
  marketplaceCards?: FooterMarketplaceCard[];
  navigationLinks?: FooterLink[];
  informationLinks?: FooterLink[];
  legalLinks?: FooterLink[];
  games?: FooterGame[];
  payments?: FooterPayment[];
  copyrightText?: string;
};

const topCardSellerImage = "https://www.figma.com/api/mcp/asset/dd3668b8-9022-47fb-bebc-c98e82697bd9";
const topCardBuyerImage = "https://www.figma.com/api/mcp/asset/7885d07f-5b3b-4081-8194-3cb818b0a75a";
const footerBackgroundImage = "https://www.figma.com/api/mcp/asset/bec716e9-d332-4c11-b67a-7bf4950a30f1";
const footerLanternImage = "https://www.figma.com/api/mcp/asset/7cb95989-d034-402c-ad98-3862602f7af3";

const paymentVisa = "https://www.figma.com/api/mcp/asset/92c56520-4088-4690-978d-8d64dbee205d";
const paymentMastercard = "https://www.figma.com/api/mcp/asset/759ca70f-a778-49f1-80c0-7353e12833b8";
const paymentGooglePayG = "https://www.figma.com/api/mcp/asset/c8e6ab83-041f-481f-9992-f7e4fd2b2b19";
const paymentGooglePayPay = "https://www.figma.com/api/mcp/asset/e0e36088-885a-442b-8dae-0786b37adf0f";
const paymentApplePay = "https://www.figma.com/api/mcp/asset/dd14bb3e-b4dd-4ed3-87fc-8f5b87fddd0d";
const paymentPaypal = "https://www.figma.com/api/mcp/asset/f8c8d7e7-a1bb-4d4e-a700-557f85f10fc3";
const paymentDiscover = "https://www.figma.com/api/mcp/asset/7239b23a-de0d-4f7b-a968-065776883fee";
const paymentBitcoin = "https://www.figma.com/api/mcp/asset/908ddac8-5df5-4f3a-8da0-ecf754e8e9a3";
const paymentLitecoin = "https://www.figma.com/api/mcp/asset/dd78e799-0035-4ba3-a085-348ff171a4bb";
const paymentEthereum = "https://www.figma.com/api/mcp/asset/87a13378-c3cb-4c01-aec2-e4016a706ce1";

const gameIcons: Record<string, string> = {
  osrs: "https://www.figma.com/api/mcp/asset/101d8e89-9d53-4fb9-98ce-f0169d8fc2ef",
  rs3: "https://www.figma.com/api/mcp/asset/6f277f26-ed89-4025-a50b-6f8b874bb81b",
  "wow-all": "https://www.figma.com/api/mcp/asset/d4a2e8f2-040b-4ab7-9020-bfd0b12ddee1",
  "wow-ttw": "https://www.figma.com/api/mcp/asset/1509dbd9-ea02-4a31-8021-77bdd720f74f",
  "wow-cataclysm": "https://www.figma.com/api/mcp/asset/b5fb27bb-0570-4879-bd91-d598a8ff2c51",
  "wow-sod": "https://www.figma.com/api/mcp/asset/d6c1531f-005f-4352-b4c0-c73fed82eed3",
  "new-world": "https://www.figma.com/api/mcp/asset/85f01d1d-cb2f-49b6-b5ad-f6af9ce447c6",
  minecraft: "https://www.figma.com/api/mcp/asset/acb6ee59-31ec-4484-8877-8d1942d7a217",
  roblox: "https://www.figma.com/api/mcp/asset/4fe13d30-aaf1-431c-ada7-08153b916b03",
  "lost-ark": "https://www.figma.com/api/mcp/asset/ebb9be4e-d128-42d4-9dc4-f56a006ed4ce",
  albion: "https://www.figma.com/api/mcp/asset/b2655c16-ba3a-4f95-8257-58cb199de6a5",
  dofus: "https://www.figma.com/api/mcp/asset/1768e33f-2027-47c8-8b39-74fc1f504bc4",
  poe: "https://www.figma.com/api/mcp/asset/a82332a5-b825-4bfd-9e1c-cf713df43160",
  ff14: "https://www.figma.com/api/mcp/asset/aaa41a3f-f7c4-4784-84c1-d07c81ec1f77",
  maplestory: "https://www.figma.com/api/mcp/asset/e4915213-6eef-4cb4-b78e-c3f8ffade83e",
  diablo4: "https://www.figma.com/api/mcp/asset/82ed3e77-6654-41ec-9527-226ea9cd5f5d",
  swtor: "https://www.figma.com/api/mcp/asset/80194238-2672-49a5-a9e3-0032355be919",
  "elder-scrolls": "https://www.figma.com/api/mcp/asset/be1145ae-e605-489b-946e-00b551968152",
};

const defaultMarketplaceCards: FooterMarketplaceCard[] = [
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

const defaultNavigationLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
];

const defaultInformationLinks: FooterLink[] = [
  { label: "Trending", href: "/trending" },
  { label: "Pre-orders", href: "/pre-orders" },
  { label: "Blog", href: "/blog" },
  { label: "Support 24/7", href: "/support" },
];

const defaultLegalLinks: FooterLink[] = [
  { label: "Refund policy", href: "/legal/refund-policy" },
  { label: "Acceptable use policy", href: "/legal/acceptable-use-policy" },
  { label: "Cookie policy", href: "/legal/cookie-policy" },
  { label: "Privacy policy", href: "/legal/privacy-policy" },
  { label: "Terms of services", href: "/legal/terms" },
  { label: "DMCA copyright policy", href: "/legal/dmca" },
];

const defaultGames: FooterGame[] = [
  { id: "osrs", title: "Old School Runescape", href: "/games?game=osrs" },
  { id: "rs3", title: "Runescape 3", href: "/games?game=runescape-3" },
  { id: "wow-all", title: "World of Warcraft (All Versions)", href: "/games?game=world-of-warcraft" },
  { id: "wow-ttw", title: "World of Warcraft TTW", href: "/games?game=world-of-warcraft-ttw" },
  { id: "wow-cataclysm", title: "World of Warcraft Cataclysm", href: "/games?game=world-of-warcraft-cataclysm" },
  { id: "wow-sod", title: "World of Warcraft SOD", href: "/games?game=world-of-warcraft-sod" },
  { id: "new-world", title: "New World", href: "/games?game=new-world" },
  { id: "minecraft", title: "Minecraft", href: "/games?game=minecraft" },
  { id: "roblox", title: "Roblox", href: "/games?game=roblox" },
  { id: "lost-ark", title: "Lost Ark", href: "/games?game=lost-ark" },
  { id: "albion", title: "Albion Online", href: "/games?game=albion-online" },
  { id: "dofus", title: "Dofus", href: "/games?game=dofus" },
  { id: "poe", title: "Path of Exile", href: "/games?game=path-of-exile" },
  { id: "ff14", title: "Final Fantasy XIV", href: "/games?game=final-fantasy-xiv" },
  { id: "maplestory", title: "Maplestory", href: "/games?game=maplestory" },
  { id: "diablo4", title: "Diablo IV", href: "/games?game=diablo-iv" },
  { id: "swtor", title: "Star Wars The Old Republic", href: "/games?game=star-wars-the-old-republic" },
  { id: "elder-scrolls", title: "Elder Scrolls", href: "/games?game=elder-scrolls" },
];

const defaultPayments: FooterPayment[] = [
  { id: "visa", label: "Visa", logoSrc: paymentVisa, tone: "dark" },
  { id: "mastercard", label: "Mastercard", logoSrc: paymentMastercard, tone: "dark" },
  { id: "gpay", label: "G Pay", logoSrc: paymentGooglePayG, logoSrcSecondary: paymentGooglePayPay, tone: "dark" },
  { id: "applepay", label: "Apple Pay", logoSrc: paymentApplePay, tone: "dark" },
  { id: "paypal", label: "PayPal", logoSrc: paymentPaypal, tone: "dark" },
  { id: "discover", label: "Discover", logoSrc: paymentDiscover, tone: "dark" },
  { id: "bitcoin", label: "BTC", logoSrc: paymentBitcoin, tone: "dark" },
  { id: "litecoin", label: "LTC", logoSrc: paymentLitecoin, tone: "dark" },
  { id: "ethereum", label: "ETH", logoSrc: paymentEthereum, tone: "dark" },
];

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M10.5 3.5L4.75 9L1.5 5.75" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSupport(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M4.32 7.72A5.68 5.68 0 0 1 10 2a5.68 5.68 0 0 1 5.68 5.72v2.94a2.4 2.4 0 0 1-2.4 2.4H11.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="2" y="8.75" width="3.2" height="5.3" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
      <rect x="14.8" y="8.75" width="3.2" height="5.3" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
      <rect x="8.4" y="12.3" width="3.2" height="2.7" rx="1.35" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16.9" cy="3.1" r="1.7" fill="#35FF64" />
    </svg>
  );
}

function IconFacebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M13.6 9.1H16V6.1h-2.8c-2.2 0-3.6 1.4-3.6 3.7v1.9H7.5v2.9h2.1v3.7h3v-3.7h2.7l.4-2.9h-3.1V10c0-.6.3-.9 1-.9Z" />
    </svg>
  );
}

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M8.3 9.2H5.4v9.1h2.9V9.2ZM6.9 4.8a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4Zm5.8 4.4H10v9.1h2.8v-4.6c0-1.2.2-2.3 1.7-2.3s1.5 1.4 1.5 2.4v4.5h2.9v-5c0-2.5-.5-4.4-3.4-4.4-1.4 0-2.2.8-2.6 1.5h-.1V9.2Z" />
    </svg>
  );
}

function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M17.8 4.5h2.6L14.7 11l6.4 8.5h-5l-4-5.2-4.6 5.2H5l6.1-6.8L4.9 4.5H10l3.5 4.7 4.3-4.7Z" />
    </svg>
  );
}

function IconInstagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}

function IconGameGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M5.7 9.4c.3-1.8 1.2-2.7 3.2-2.7h6.2c2 0 2.9.9 3.2 2.7l1 4.1c.4 1.8-.6 2.8-2.2 2.2l-2-.7a8 8 0 0 0-5.2 0l-2 .7c-1.6.6-2.6-.4-2.2-2.2l1-4.1Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function VirtgoldLogoMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="60 17 155 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M100.771 37.6946L92.7881 21.9032H97.7779L102.269 30.7858L106.759 21.9032H111.749L103.766 37.6946H100.772H100.771Z" fill="white" />
      <path d="M114.522 37.6946V21.9032H118.514V37.6946H114.522Z" fill="white" />
      <path d="M120.292 37.6946V21.9032H132.267L134.263 23.877V29.7983L132.267 31.7721H131.269L134.263 37.6935H130.272L126.28 29.7983V27.8245H130.272V25.8508H124.285V37.6946H120.293H120.292Z" fill="white" />
      <path d="M141.03 37.6946V25.8508H136.041V21.9032H152.007L148.016 25.8508H145.022V37.6946H141.03Z" fill="white" />
      <path d="M155.781 37.6946L153.785 35.7208V23.877L155.781 21.9032H167.756L165.761 25.8508H157.778V33.7459H163.765V29.7983L161.769 27.8245H167.756V37.6946H155.781Z" fill="white" />
      <path d="M171.528 37.6946L169.533 35.7208V23.877L171.528 21.9032H181.508L183.504 23.877V35.7208L181.508 37.6946H171.528ZM179.512 33.7459V25.8508H173.525V33.7459H179.512Z" fill="white" />
      <path d="M185.282 37.6946V21.9032H189.273V33.7471H199.253L197.257 37.6946H185.282Z" fill="white" />
      <path d="M201.029 37.6946V21.9032H213.004L215 23.877V35.7208L213.004 37.6946H201.029ZM211.009 33.7459V25.8508H205.021V33.7459H211.009Z" fill="white" />
      <path d="M86.26 25.1956L84.306 28.402L81.8027 32.5086L80.4909 34.6603L78.525 37.8879L76.5579 34.6603L75.619 33.1214L73.6519 29.8938L67.8244 20.3325L65.793 17H85.4462L83.4148 20.3325L81.3285 23.7545H77.3943L79.4805 20.3325H71.7574L75.619 26.6674L77.5861 29.895L78.525 31.4339L79.8368 29.2822L80.3729 28.402H79.2994L78.8979 27.7421L77.3454 25.1956H86.26Z" fill="#FF9D00" />
      <path d="M91.2553 17L89.2239 20.3325L87.1376 23.7545H83.2046L85.2908 20.3325L87.3223 17H91.2553Z" fill="#FF9D00" />
      <path d="M77.5956 39.4116L75.6285 42.6391L73.6613 39.4116L72.7237 37.8726L70.7566 34.6462V34.645L60 17H63.9342L72.7237 31.4186L74.6908 34.645V34.6462L75.6285 36.1852L77.5956 39.4116Z" fill="#FF9D00" />
    </svg>
  );
}

export function SiteFooter({
  marketplaceCards = defaultMarketplaceCards,
  navigationLinks = defaultNavigationLinks,
  informationLinks = defaultInformationLinks,
  legalLinks = defaultLegalLinks,
  games = defaultGames,
  payments = defaultPayments,
  copyrightText = "Copyright (c) 2025 virtgold. - All rights reserved",
}: SiteFooterProps) {
  const hasMarketplaceCards = marketplaceCards.length > 0;

  return (
    <footer className={`relative overflow-visible bg-[#0D0C1D] pb-[40px] ${hasMarketplaceCards ? "pt-[86px]" : "pt-0"}`}>
      <div className={`${hasMarketplaceCards ? "block" : "hidden"} mx-auto max-w-[1440px] px-[20px] sm:px-[32px] lg:px-[60px]`}>
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

      <section className={`relative left-1/2 w-screen -translate-x-1/2 border-t border-[#2B2A42] ${hasMarketplaceCards ? "mt-[150px]" : "mt-0"}`}>
        <div className="pointer-events-none absolute inset-0">
          <img
            src={footerBackgroundImage}
            alt=""
            className="h-full w-full object-cover opacity-[0.18] [filter:grayscale(35%)]"
            draggable={false}
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        <div className="relative min-h-[306px]">
          <div className="absolute inset-x-0 bottom-0 h-px bg-[#2B2A42]" />
          <div className="relative mx-auto max-w-[1440px] px-[20px] sm:px-[32px] lg:px-[60px]">
            <div className="grid min-h-[306px] items-center gap-[24px] lg:grid-cols-[1fr_315px]">
              <img
                src={footerLanternImage}
                alt=""
                className="pointer-events-none absolute left-[72px] bottom-[-132px] z-[8] hidden h-[540px] -scale-x-100 select-none lg:block"
                draggable={false}
              />

              <div className="py-[40px] pr-[8px] lg:pl-[345px]">
                <h4 className="max-w-[552px] text-[40px] font-semibold leading-[1.2] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[48px]">
                  Don&apos;t miss any offers
                  <br />
                  and promotions!
                </h4>
                <form action="/subscribe" className="mt-[20px] flex w-full max-w-[481px] gap-[10px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    className="h-[52px] flex-1 rounded-[8px] border border-[#2B2A42] bg-[#0D0C1D]/70 px-[18px] text-[15px] text-[#BDBADF] outline-none placeholder:text-[#BDBADF]/55"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-[52px] w-[138px] cursor-pointer items-center justify-center rounded-[8px] bg-gradient-to-b from-[#FFB338] to-[#FF9D00] text-[16px] font-semibold text-[#101020] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_14px_rgba(255,173,67,0.24),0_4px_4px_rgba(0,0,0,0.25)]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="border-[#2B2A42] py-[44px] lg:-my-px lg:flex lg:self-stretch lg:flex-col lg:justify-center lg:border-l lg:pl-[46px] lg:py-0">
                <div className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-[8px] bg-[#131225] text-white/90">
                  <IconSupport className="h-[28px] w-[28px]" />
                </div>
                <p className="mt-[18px] text-[24px] font-semibold leading-none text-white">24/7 Support</p>
                <p className="mt-[10px] max-w-[281px] text-[16px] leading-[24px] text-[#BDBADF]">Get assistance from real gamers.</p>
                <Link
                  href="/contact"
                  className="mt-[22px] inline-flex h-[52px] w-[168px] items-center justify-center rounded-[8px] bg-gradient-to-b from-[#DBFFA2] to-[#00FF4D] text-[16px] font-semibold text-[#101020] shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_8px_14px_rgba(79,255,142,0.24),0_4px_4px_rgba(0,0,0,0.25)]"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1440px] px-[20px] sm:px-[32px] lg:px-[60px]">
          <div className="grid min-h-[417px] gap-[22px] lg:grid-cols-[335px_335px_335px_315px] lg:gap-0">
            <div className="flex flex-col items-center justify-center px-[12px] py-[58px] text-center lg:-translate-x-[38px]">
              <Link href="/" aria-label="VirtGold home" className="inline-flex">
                <VirtgoldLogoMark className="h-[33px] w-auto" />
              </Link>
              <p className="mt-[60px] max-w-[280px] text-[14px] leading-[1.5] text-[#BDBADF]">
                We are committed to providing top-notch security, ensuring your personal information stays safe so you can enjoy gaming worry-free.
              </p>
              <div className="mt-[64px] flex items-center justify-center gap-[8px] text-[#E9EDFF]">
                <Link
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-[6px] border border-[#2B2A42] bg-[#131225] text-[#E9EDFF] transition-all duration-200 hover:-translate-y-px hover:border-[#434263] hover:bg-[#181730] hover:text-white"
                >
                  <IconFacebook className="h-[23px] w-[23px]" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-[6px] border border-[#2B2A42] bg-[#131225] text-[#E9EDFF] transition-all duration-200 hover:-translate-y-px hover:border-[#434263] hover:bg-[#181730] hover:text-white"
                >
                  <IconLinkedIn className="h-[23px] w-[23px]" />
                </Link>
                <Link
                  href="https://x.com"
                  aria-label="X"
                  className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-[6px] border border-[#2B2A42] bg-[#131225] text-[#E9EDFF] transition-all duration-200 hover:-translate-y-px hover:border-[#434263] hover:bg-[#181730] hover:text-white"
                >
                  <IconX className="h-[21px] w-[21px]" />
                </Link>
                <Link
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-[6px] border border-[#2B2A42] bg-[#131225] text-[#E9EDFF] transition-all duration-200 hover:-translate-y-px hover:border-[#434263] hover:bg-[#181730] hover:text-white"
                >
                  <IconInstagram className="h-[23px] w-[23px]" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-start pt-[58px] pb-[58px] lg:border-l lg:border-[#2B2A42] lg:pl-[42px]">
              <p className="text-[14px] text-[#7A7895]">Navigation</p>
              <ul className="mt-[40px] space-y-[24px]">
                {navigationLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[14px] text-white transition-colors duration-200 hover:text-[#D9DEFF]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-start pt-[58px] pb-[58px] lg:border-l lg:border-[#2B2A42] lg:pl-[52px]">
              <p className="text-[14px] text-[#7A7895]">Information</p>
              <ul className="mt-[40px] space-y-[24px]">
                {informationLinks.map((item) => (
                  <li key={item.label} className="relative pl-0 last:pl-[15px]">
                    {item.label === "Support 24/7" ? <span className="absolute left-0 top-[6px] h-[6px] w-[6px] rounded-full bg-[#00FF4D]" /> : null}
                    <Link href={item.href} className="text-[14px] text-white transition-colors duration-200 hover:text-[#D9DEFF]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-start pt-[58px] pb-[58px] lg:border-l lg:border-[#2B2A42] lg:pl-[45px]">
              <p className="text-[14px] text-[#7A7895]">Legal</p>
              <ul className="mt-[40px] space-y-[24px]">
                {legalLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[14px] text-white transition-colors duration-200 hover:text-[#D9DEFF]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 border-t border-[#2B2A42]">
        <div className="mx-auto max-w-[1440px] px-[20px] py-[30px] sm:px-[32px] lg:px-[60px]">
          <p className="text-[14px] text-[rgba(189,186,223,0.5)]">Games</p>
          <div className="mt-[22px] grid gap-x-[20px] gap-y-[20px] md:grid-cols-2 lg:grid-cols-4">
            {games.map((game) => (
              <Link
                key={game.id}
                href={game.href}
                className="group flex h-[52px] items-center rounded-[8px] bg-[rgba(25,24,45,0.5)] px-[9px] text-[16px] font-semibold leading-[1.2] text-white transition-all duration-200 hover:bg-[rgba(34,33,59,0.68)]"
              >
                <span
                  className="mr-[8px] grid h-[33px] w-[33px] flex-none place-items-center overflow-hidden rounded-[6px]"
                  style={{ backgroundColor: game.id === "osrs" ? "#F62626" : "#0D0C1D" }}
                >
                  {gameIcons[game.id] ? (
                    <img src={gameIcons[game.id]} alt="" className="h-[22px] w-[22px] object-contain" draggable={false} />
                  ) : (
                    <IconGameGlyph className="h-[15px] w-[15px] text-[#CAD0F8]" />
                  )}
                </span>
                <span className="truncate">{game.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1440px] border-t border-[#2B2A42] px-[20px] pb-[10px] pt-[20px] sm:px-[32px] lg:px-[60px]">
        <div className="flex flex-col gap-[14px] md:flex-row md:items-center md:justify-between">
          <p className="text-[14px] text-[#BDBADF]">{copyrightText}</p>
          <div className="flex flex-wrap items-center gap-[8px]">
            {payments.map((payment) => {
              const logoInsetClass =
                payment.id === "visa"
                  ? "absolute inset-[35.42%_17.14%_32%_12.86%]"
                  : payment.id === "mastercard"
                    ? "absolute inset-[20.83%_17.14%_21.64%_18.57%]"
                    : payment.id === "applepay"
                      ? "absolute inset-[29.17%_14.1%_27.42%_14.29%]"
                      : payment.id === "paypal"
                        ? "absolute inset-[40.33%_18.89%_35.5%_18.89%]"
                        : payment.id === "discover"
                          ? "absolute inset-[39.58%_6.29%_39.58%_9.43%]"
                          : payment.id === "litecoin"
                            ? "absolute inset-[17%_27.7%_17%_27.1%]"
                            : payment.id === "ethereum"
                              ? "absolute inset-[16.67%_27.51%_17.21%_27.14%]"
                              : "absolute inset-[28%_12%_28%_12%]";

              return (
                <span
                  key={payment.id}
                  className="relative inline-flex h-[32px] w-[48px] items-center justify-center overflow-hidden rounded-[6px] border border-[#2B2A42] bg-[#19182D] px-[5px] shadow-[0_0_16px_rgba(0,0,0,0.07)]"
                >
                  {payment.id === "gpay" && payment.logoSrc && payment.logoSrcSecondary ? (
                    <>
                      <span className="absolute inset-[32.11%_62.08%_32.21%_14.29%]">
                        <img src={payment.logoSrc} alt="Google" className="h-full w-full object-contain" draggable={false} />
                      </span>
                      <span className="absolute inset-[34.58%_14.29%_25%_44.53%]">
                        <img src={payment.logoSrcSecondary} alt="Pay" className="h-full w-full object-contain" draggable={false} />
                      </span>
                    </>
                  ) : payment.id === "bitcoin" && payment.logoSrc ? (
                    <span className="absolute inset-[-50.16%_-34.48%]">
                      <img src={payment.logoSrc} alt={payment.label} className="h-full w-full object-cover" draggable={false} />
                    </span>
                  ) : payment.logoSrc ? (
                    <span className={logoInsetClass}>
                      <img src={payment.logoSrc} alt={payment.label} className="h-full w-full object-contain" draggable={false} />
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold text-white/90">{payment.label}</span>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
