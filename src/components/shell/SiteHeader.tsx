"use client";

import type { SVGProps } from "react";
import Link from "next/link";
import { useState } from "react";

import { useCurrency } from "@/components/shell/CurrencyProvider";

type HeaderGame = {
  id: string;
  title: string;
  href: string;
};

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

const headerGames: HeaderGame[] = [
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

function VirtgoldLogoMark(props: SVGProps<SVGSVGElement>) {
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

function IconUser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="1196 21 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path d="M1208 26C1208 23.7909 1206.21 22 1204 22C1201.79 22 1200 23.7909 1200 26C1200 28.2091 1201.79 30 1204 30C1206.21 30 1208 28.2091 1208 26Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M1197 38V37C1197 34.7909 1198.79 33 1201 33H1207C1209.21 33 1211 34.7909 1211 37V38" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconHeart(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="1235 23 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M1242.81 35.9758C1240.69 34.3935 1236.5 30.7761 1236.5 27.5208C1236.5 25.3692 1238.08 23.625 1240.25 23.625C1241.38 23.625 1242.5 24 1244 25.5C1245.5 24 1246.62 23.625 1247.75 23.625C1249.92 23.625 1251.5 25.3692 1251.5 27.5208C1251.5 30.7761 1247.31 34.3935 1245.19 35.9758C1244.48 36.5082 1243.52 36.5082 1242.81 35.9758Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="1276 23 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M1277.49 30.7585C1277.76 28.5068 1278.14 26.8184 1278.5 25.6189C1278.79 24.6353 1278.93 24.1436 1279.53 23.6968C1280.13 23.25 1280.74 23.25 1281.97 23.25H1286.03C1287.26 23.25 1287.87 23.25 1288.47 23.6968C1289.07 24.1436 1289.21 24.6353 1289.5 25.6189C1289.86 26.8184 1290.24 28.5068 1290.51 30.7585C1290.82 33.4123 1290.97 34.7392 1290.08 35.7446C1289.18 36.75 1287.73 36.75 1284.83 36.75H1283.17C1280.27 36.75 1278.82 36.75 1277.92 35.7446C1277.03 34.7392 1277.18 33.4123 1277.49 30.7585Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M1281.75 26.25C1281.75 27.4926 1282.76 28.5 1284 28.5C1285.24 28.5 1286.25 27.4926 1286.25 26.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="859 21 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M876.984 36.4624L874.227 33.7224C875.276 32.3496 875.851 30.6845 875.851 28.9274C875.851 26.81 875.027 24.8191 873.529 23.3219C872.032 21.8247 870.041 21 867.924 21C865.806 21 863.815 21.8247 862.318 23.3219C859.227 26.413 859.227 31.4423 862.318 34.5329C863.815 36.0304 865.806 36.8551 867.924 36.8551C869.681 36.8549 871.346 36.2797 872.719 35.2311L875.475 37.9711C875.684 38.1794 875.957 38.2836 876.23 38.2836C876.503 38.2836 876.776 38.1794 876.984 37.9711C877.401 37.5545 877.401 36.8789 876.984 36.4624ZM863.827 33.0242C861.568 30.7654 861.568 27.0897 863.827 24.8306C864.921 23.7366 866.376 23.1338 867.924 23.1338C869.471 23.1338 870.926 23.7366 872.02 24.8306C873.115 25.9249 873.717 27.3799 873.717 28.9274C873.717 30.4752 873.115 31.93 872.02 33.0242C870.926 34.1185 869.471 34.7212 867.924 34.7212C866.376 34.7212 864.921 34.1185 863.827 33.0242Z"
        fill="#FF9D00"
      />
    </svg>
  );
}

function IconChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <rect x="1" y="0.7072" width="1" height="4" rx="0.5" transform="rotate(-45 1 0.7072)" fill="white" />
      <rect x="5.95" y="0" width="1" height="4" rx="0.5" transform="rotate(45 5.95 0)" fill="white" />
    </svg>
  );
}

export function SiteHeader() {
  const { selectedCurrency, setSelectedCurrency, currencies } = useCurrency();
  const [gamesOpen, setGamesOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2B2A42]/70 bg-[#0D0C1D]/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-[60px]">
        <div className="flex h-[64px] items-center justify-between gap-3">
          <Link href="/" aria-label="VirtGold home" className="inline-flex">
            <VirtgoldLogoMark className="h-[26px] w-auto sm:h-[28px]" />
          </Link>

          <div className="hidden flex-1 items-center gap-6 lg:flex">
            <div className="relative" onMouseEnter={() => setGamesOpen(true)} onMouseLeave={() => setGamesOpen(false)}>
              <button
                type="button"
                className="inline-flex h-[34px] items-center gap-2 rounded-[6px] px-3 text-[15px] font-medium text-[#BDBADF] transition hover:bg-[#19182D] hover:text-white"
              >
                Games
                <IconChevronDown className="h-[11px] w-[11px]" />
              </button>

              <div
                className={[
                  "absolute left-0 top-full z-[90] pt-[8px] transition-all duration-150",
                  gamesOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
                ].join(" ")}
              >
                <div className="max-h-[380px] w-[354px] overflow-y-auto rounded-[12px] border border-[#2B2A42] bg-[#19182D] hide-scrollbar">
                  {headerGames.map((game) => (
                    <Link
                      key={game.id}
                      href={game.href}
                      className="group/item flex h-[49px] items-center gap-[9px] border-b border-[#2B2A42] px-[10px] text-[15px] font-semibold text-white transition-colors duration-150 last:border-b-0 hover:bg-[rgba(255,255,255,0.03)]"
                    >
                      <span
                        className="grid h-[31px] w-[31px] flex-none place-items-center overflow-hidden rounded-[6px]"
                        style={{ backgroundColor: game.id === "osrs" ? "#F62626" : "#0D0C1D" }}
                      >
                        {gameIcons[game.id] ? <img src={gameIcons[game.id]} alt="" className="h-[20px] w-[20px] object-contain" draggable={false} /> : null}
                      </span>
                      <span className="truncate">{game.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/games" className="text-[15px] font-medium text-[#BDBADF] transition hover:text-white">
              Services
            </Link>

            <form action="/games" className="ml-auto w-full max-w-[340px]">
              <div className="group relative h-[38px] rounded-[8px] border border-[#2B2A42] bg-[#19182D]/52">
                <input name="q" placeholder="Search..." className="h-full w-full rounded-[8px] bg-transparent px-4 pr-10 text-[14px] text-[#BDBADF] placeholder:text-[#BDBADF]/70 outline-none" />
                <button type="submit" aria-label="Search" className="absolute right-[12px] top-1/2 grid h-[20px] w-[20px] -translate-y-1/2 place-items-center transition-all duration-200 group-hover:scale-110">
                  <IconSearch className="h-[20px] w-[20px]" />
                </button>
              </div>
            </form>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/sell"
              className="inline-flex h-[34px] items-center justify-center rounded-[6px] bg-gradient-to-b from-[#DBFFA2] to-[#00FF4D] px-3 text-[13px] font-semibold text-[#101020]"
            >
              Sell to us
            </Link>

            <div className="relative" onMouseEnter={() => setAccountOpen(true)} onMouseLeave={() => setAccountOpen(false)}>
              <button type="button" aria-label="Account" className="grid h-[34px] w-[34px] place-items-center rounded-[6px] bg-[#191829]">
                <IconUser className="h-[20px] w-[20px]" />
              </button>
              <div
                className={[
                  "absolute left-1/2 top-full z-[90] w-[172px] -translate-x-1/2 pt-[8px] transition-all duration-150",
                  accountOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
                ].join(" ")}
              >
                <div className="overflow-hidden rounded-[6px] border border-[#2B2A42] bg-[#19182D]">
                  <Link href="/login" className="flex h-[37px] items-center px-[16px] text-[12px] font-semibold text-white hover:bg-[rgba(255,255,255,0.03)]">
                    Login
                  </Link>
                  <Link href="/register" className="flex h-[37px] items-center border-t border-[#2B2A42] px-[16px] text-[12px] font-semibold text-white hover:bg-[rgba(255,255,255,0.03)]">
                    Register
                  </Link>
                </div>
              </div>
            </div>

            <button type="button" aria-label="Wishlist" className="grid h-[34px] w-[34px] place-items-center rounded-[6px] bg-[#191829]">
              <IconHeart className="h-[20px] w-[20px]" />
            </button>

            <button type="button" aria-label="Cart" className="grid h-[34px] w-[34px] place-items-center rounded-[6px] bg-[#191829]">
              <IconBag className="h-[20px] w-[20px]" />
            </button>

            <div className="relative" onMouseEnter={() => setCurrencyOpen(true)} onMouseLeave={() => setCurrencyOpen(false)}>
              <button type="button" aria-label="Currency" className="inline-flex h-[34px] w-[76px] items-center justify-center gap-2 rounded-[6px] bg-[#191829] text-[12px] font-semibold text-white">
                {selectedCurrency}
                <IconChevronDown className="h-[11px] w-[11px]" />
              </button>

              <div
                className={[
                  "absolute right-0 top-full z-[90] w-[76px] pt-[8px] transition-all duration-150",
                  currencyOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0",
                ].join(" ")}
              >
                <div className="overflow-hidden rounded-[6px] border border-[#2B2A42] bg-[#19182D]">
                  {currencies.map((currency) => (
                    <button
                      key={currency}
                      type="button"
                      onClick={() => {
                        setSelectedCurrency(currency);
                        setCurrencyOpen(false);
                      }}
                      className={[
                        "flex h-[32px] w-full items-center px-[11px] text-left text-[12px] font-semibold transition-colors duration-150",
                        currency === selectedCurrency ? "bg-[rgba(53,255,100,0.18)] text-[#B8FFC9]" : "text-white hover:bg-[rgba(255,255,255,0.04)]",
                      ].join(" ")}
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-[38px] w-[38px] items-center justify-center rounded-[8px] border border-[#2B2A42] bg-[#19182D] lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-xl leading-none text-white">{mobileMenuOpen ? "x" : "="}</span>
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-[#2B2A42] bg-[#121125] lg:hidden">
          <div className="mx-auto max-w-[1440px] space-y-4 px-4 py-4 sm:px-6">
            <form
              action="/games"
              onSubmit={() => {
                setMobileMenuOpen(false);
              }}
            >
              <div className="relative h-[42px] rounded-[8px] border border-[#2B2A42] bg-[#19182D]/52">
                <input name="q" placeholder="Search..." className="h-full w-full rounded-[8px] bg-transparent px-4 pr-10 text-[14px] text-[#BDBADF] placeholder:text-[#BDBADF]/70 outline-none" />
                <button type="submit" aria-label="Search" className="absolute right-[12px] top-1/2 grid h-[20px] w-[20px] -translate-y-1/2 place-items-center">
                  <IconSearch className="h-[20px] w-[20px]" />
                </button>
              </div>
            </form>

            <div className="grid grid-cols-2 gap-2">
              <Link href="/games" onClick={() => setMobileMenuOpen(false)} className="rounded-[8px] border border-[#2B2A42] bg-[#19182D] px-3 py-2 text-sm text-white">Games</Link>
              <Link href="/sell" onClick={() => setMobileMenuOpen(false)} className="rounded-[8px] border border-[#2B2A42] bg-[#19182D] px-3 py-2 text-sm text-white">Sell</Link>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="rounded-[8px] border border-[#2B2A42] bg-[#19182D] px-3 py-2 text-sm text-white">Login</Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="rounded-[8px] border border-[#2B2A42] bg-[#19182D] px-3 py-2 text-sm text-white">Register</Link>
            </div>

            <div className="rounded-[10px] border border-[#2B2A42] bg-[#19182D]/70 p-3">
              <p className="mb-2 text-xs text-[#BDBADF]">Currency</p>
              <div className="flex flex-wrap gap-2">
                {currencies.map((currency) => (
                  <button
                    key={currency}
                    type="button"
                    onClick={() => setSelectedCurrency(currency)}
                    className={[
                      "rounded-[6px] px-3 py-1 text-xs font-semibold",
                      currency === selectedCurrency ? "bg-[rgba(53,255,100,0.18)] text-[#B8FFC9]" : "bg-[#131225] text-white",
                    ].join(" ")}
                  >
                    {currency}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
