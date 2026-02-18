import Link from "next/link";

type ServiceCard = {
  href: string;
  label: string;
  cardSrc: string;
  iconSrc?: string;
  iconClassName?: string;
  hasGoldFrame?: boolean;
};

const services: ServiceCard[] = [
  {
    href: "/games?type=items",
    label: "Items",
    cardSrc: "/figma/embedded/homepage/services/card-3.svg",
  },
  {
    href: "/games?type=accounts",
    label: "Accounts",
    cardSrc: "/figma/embedded/homepage/services/card-1.svg",
  },
  {
    href: "/games?type=boosting",
    label: "Boosting",
    cardSrc: "/figma/embedded/homepage/services/card-2.svg",
  },
  {
    href: "/games?type=gold",
    label: "Gold",
    cardSrc: "/figma/embedded/homepage/services/card-4.svg",
    iconSrc: "/figma/embedded/homepage/image-7.svg",
    iconClassName: "left-[20px] top-[10px] h-[215px] w-[204px] rounded-[14px]",
    hasGoldFrame: true,
  },
];

function LabelArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="267 72 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M268 75.5C267.724 75.5 267.5 75.7239 267.5 76C267.5 76.2761 267.724 76.5 268 76.5V76V75.5ZM277.354 76.3536C277.549 76.1583 277.549 75.8417 277.354 75.6464L274.172 72.4645C273.976 72.2692 273.66 72.2692 273.464 72.4645C273.269 72.6597 273.269 72.9763 273.464 73.1716L276.293 76L273.464 78.8284C273.269 79.0237 273.269 79.3403 273.464 79.5355C273.66 79.7308 273.976 79.7308 274.172 79.5355L277.354 76.3536ZM268 76V76.5H277V76V75.5H268V76Z"
        fill="white"
      />
    </svg>
  );
}

export function BrowseAllGamesServices() {
  return (
    <section className="relative mx-auto mt-2 max-w-[1440px] px-4 pb-[78px] pt-[22px] sm:px-6 lg:-mt-[82px] lg:px-[60px]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-screen -translate-x-1/2 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(180deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.97) 72%, rgba(0,0,0,0.62) 88%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(180deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.97) 72%, rgba(0,0,0,0.62) 88%, rgba(0,0,0,0) 100%)",
          }}
        >
          <img
            src="/figma/embedded/homepage/services/section-grid.svg"
            alt=""
            className="absolute left-1/2 top-[16px] h-[540px] w-screen -translate-x-1/2 select-none object-cover object-top opacity-[0.42]"
            style={{
              WebkitMaskImage: "radial-gradient(620px 560px at 0% 50%, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0) 86%)",
              maskImage: "radial-gradient(620px 560px at 0% 50%, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0) 86%)",
              filter: "brightness(0) saturate(100%) invert(36%) sepia(86%) saturate(1820%) hue-rotate(230deg) brightness(78%) contrast(108%)",
            }}
            draggable={false}
          />
          <img
            src="/figma/embedded/homepage/services/section-grid.svg"
            alt=""
            className="absolute left-1/2 top-[16px] h-[540px] w-screen -translate-x-1/2 select-none object-cover object-top opacity-[0.42]"
            style={{
              WebkitMaskImage: "radial-gradient(620px 560px at 100% 50%, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0) 86%)",
              maskImage: "radial-gradient(620px 560px at 100% 50%, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0) 86%)",
              filter: "brightness(0) saturate(100%) invert(36%) sepia(86%) saturate(1820%) hue-rotate(230deg) brightness(78%) contrast(108%)",
            }}
            draggable={false}
          />
        </div>
      </div>

      <div className="relative">
        <div className="mx-auto w-fit">
          <img
            src="/figma/embedded/homepage/services/section-mark.svg"
            alt=""
            className="h-[56px] w-[67px] select-none"
            draggable={false}
          />
        </div>

        <h2 className="mt-[17px] text-center text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-[56px] lg:leading-[64px]">
          Browse All Games Services
        </h2>
        <p className="mt-[7px] text-center text-[16px] font-medium leading-[24px] text-[#BDBADF]">
          Currently there are listed 12,000 services across all games
        </p>

        <div className="mx-auto mt-10 w-full">
          <div className="flex flex-wrap items-start justify-center gap-4 sm:gap-5 lg:-space-x-[16px] lg:gap-0">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="group block w-[243px] max-w-full">
              <div className="relative h-[255px] w-[243px] max-w-full transition-all duration-200 group-hover:-translate-y-[3px] group-hover:drop-shadow-[0_16px_24px_rgba(0,0,0,0.45)]">
                <img
                  src={service.cardSrc}
                  alt=""
                  className="h-[255px] w-[243px] max-w-full select-none"
                  draggable={false}
                />
                {service.iconSrc ? (
                  <img
                    src={service.iconSrc}
                    alt=""
                    className={`pointer-events-none absolute select-none ${service.iconClassName}`}
                    draggable={false}
                  />
                ) : null}
                {service.hasGoldFrame ? (
                  <div className="pointer-events-none absolute left-[20px] top-[10px] h-[215px] w-[204px] rounded-[14px] border border-[#2B2A42]" />
                ) : null}
              </div>
              <div className="mt-[-12px] flex items-center justify-center gap-[6px] text-[20px] font-medium leading-[27px] text-[#BDBADF] transition-all duration-200 group-hover:text-[#E8ECFF] group-hover:[text-shadow:0_0_14px_rgba(86,156,255,0.64)]">
                <LabelArrow className="h-[8px] w-[11px]" />
                <span>{service.label}</span>
              </div>
            </Link>
          ))}
          </div>

          <div className="mt-12 sm:mt-[82px]">
          <Link
            href="/games"
            className="group mx-auto flex h-[54px] w-full max-w-[1320px] items-center justify-center rounded-[10px] bg-[linear-gradient(180deg,#1A1930_0%,#171629_100%)] text-[16px] font-[600] text-white shadow-[0_8px_16px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-200 hover:-translate-y-px hover:bg-[linear-gradient(180deg,#211F39_0%,#1A1930_100%)] hover:text-[#EFF2FF] hover:shadow-[0_12px_22px_rgba(0,0,0,0.44),0_0_0_1px_rgba(61,74,118,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            Browse all Services
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
