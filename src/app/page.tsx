import Link from "next/link";
import { HeroFeatures } from "@/components/home/HeroFeatures";
import { BrowseAllGamesServices } from "@/components/home/BrowseAllGamesServices";
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { SimpleProcessSection } from '@/components/home/SimpleProcessSection';
import { GameCardsCarouselSection } from '@/components/home/GameCardsCarouselSection';
import { FeaturedBlogSection } from '@/components/home/FeaturedBlogSection';
import { MarketplaceCardsSection } from '@/components/home/MarketplaceCardsSection';

function IconSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="536 27 23 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M557.621 45.7871L554.273 42.458C555.547 40.79 556.245 38.7669 556.245 36.632C556.245 34.0593 555.244 31.6403 553.426 29.8212C551.608 28.002 549.191 27 546.62 27C544.049 27 541.632 28.002 539.814 29.8212C536.062 33.5769 536.062 39.6877 539.814 43.4428C541.632 45.2623 544.049 46.2643 546.62 46.2643C548.753 46.264 550.775 45.5652 552.442 44.2911L555.789 47.6202C556.041 47.8734 556.373 48 556.705 48C557.036 48 557.368 47.8734 557.621 47.6202C558.126 47.1142 558.126 46.2932 557.621 45.7871ZM541.646 41.6097C538.904 38.8651 538.904 34.3992 541.646 31.6543C542.975 30.325 544.741 29.5927 546.62 29.5927C548.499 29.5927 550.265 30.325 551.594 31.6543C552.923 32.9838 553.654 34.7517 553.654 36.632C553.654 38.5126 552.923 40.2801 551.594 41.6097C550.265 42.9393 548.499 43.6716 546.62 43.6716C544.741 43.6716 542.975 42.9393 541.646 41.6097Z"
        fill="#0D0C1D"
      />
    </svg>
  );
}

function IconArrowInline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="267 72 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M268 75.5C267.724 75.5 267.5 75.7239 267.5 76C267.5 76.2761 267.724 76.5 268 76.5V76V75.5ZM277.354 76.3536C277.549 76.1583 277.549 75.8417 277.354 75.6464L274.172 72.4645C273.976 72.2692 273.66 72.2692 273.464 72.4645C273.269 72.6597 273.269 72.9763 273.464 73.1716L276.293 76L273.464 78.8284C273.269 79.0237 273.269 79.3403 273.464 79.5355C273.66 79.7308 273.976 79.7308 274.172 79.5355L277.354 76.3536ZM268 76V76.5H277V76V75.5H268V76Z"
        fill="white"
      />
    </svg>
  );
}

function IconOsrs(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="11 11 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M17.2576 29.0224C17.1177 28.9568 16.9979 29.0288 16.8786 29.0254C16.2571 29.008 15.3046 29.1129 14.6864 29.2491C14.6029 29.2676 14.5162 29.282 14.443 29.3307C14.2208 29.4788 14.3948 29.6782 13.9582 29.6326C13.0318 29.5354 13.2649 28.0003 13.915 28.0833C14.017 28.0963 14.1521 28.2023 14.2685 28.2379C14.7421 28.3829 15.0611 28.1924 15.5113 28.1229C15.7196 28.0909 15.9542 28.1155 16.183 28.0724C16.4273 28.0264 16.6505 27.9029 16.8968 27.865C16.5032 27.5369 16.0132 27.9349 15.5854 27.6424C15.3667 27.4929 15.2552 27.2079 15.4086 26.9716C15.5809 26.7059 16.4429 26.685 16.7358 26.7073C17.3278 26.7524 17.8284 27.044 18.2858 27.3966C18.497 27.5594 18.531 27.7342 18.8584 27.743L31.0306 26.2029C31.5342 26.1961 32.0845 26.0829 32.5844 26.1284C32.6734 26.1366 32.7637 26.1399 32.815 26.2252C32.8641 26.3945 32.3149 26.524 32.1863 26.5646C31.7458 26.7037 31.2925 26.7916 30.8392 26.8787L19.025 28.5685C18.8194 28.6436 18.9039 28.8763 18.8784 29.0362C18.7476 29.8586 17.4442 30.5553 16.6707 30.4232C16.0258 30.3132 16.074 29.5091 16.6703 29.2833C16.7176 29.2653 17.3684 29.1429 17.2576 29.0224ZM17.8595 27.6262C17.4366 27.637 16.7775 28.168 17.4017 28.3538C17.5107 28.3863 17.8201 28.4486 17.9246 28.4454C18.0608 28.4411 18.5037 28.2071 18.5434 28.0833C18.6337 27.8007 18.0763 27.6205 17.8595 27.6262Z"
        fill="#0D0C1D"
      />
      <path
        d="M28.5715 27.0813C28.096 27.4362 27.3664 27.4834 26.8027 27.3697C26.7915 27.2811 26.8034 27.3124 26.8532 27.2942C27.1148 27.1974 28.0845 27.056 28.379 27.0468C28.4536 27.0445 28.5031 27.0651 28.5718 27.0813H28.5715Z"
        fill="#0D0C1D"
      />
      <path
        d="M17.5209 27.8751C17.7186 27.6758 18.3732 27.8738 18.3399 28.0249C18.325 28.0923 18.0172 28.2634 17.9449 28.2824C17.7307 28.3383 17.2615 28.1369 17.5211 27.8751H17.5209Z"
        fill="#0D0C1D"
      />
      <path
        d="M30.0969 21.0245C29.5731 20.9765 29.5256 20.178 28.9183 20.2114C28.714 20.2229 28.1817 20.4096 27.9732 20.4962C27.5142 20.6863 26.3922 21.3691 26.668 21.9754C26.8099 22.2877 28.0981 22.8161 28.4614 23.0368C30.5565 24.3086 29.5738 25.101 27.8329 25.8665C27.2832 26.108 26.385 26.4916 25.7988 26.3829C25.3869 26.3065 24.8868 25.796 24.828 25.3763C25.4777 25.0471 26.2113 24.9986 26.8304 24.59C27.8117 23.9415 26.4291 23.9582 26.0172 23.8515C24.865 23.5536 23.8798 21.4345 24.22 20.3426C24.4515 19.6005 25.5025 18.9788 26.1555 18.6079C26.6577 18.3222 28.0367 17.5821 28.5327 17.4511C28.6638 17.4164 28.837 17.3846 28.9653 17.4299C29.059 17.4626 30.1473 18.8591 30.1883 18.9942C30.3666 19.5816 30.1502 20.4229 30.0969 21.0247V21.0245Z"
        fill="#0D0C1D"
      />
      <path
        d="M22.8293 20.3703C22.9792 19.3281 22.7131 19.11 21.8643 18.6317C20.4952 17.8603 18.6641 17.438 17.1173 17.847C16.646 17.9717 16.5354 18.1144 16.46 18.604C16.5075 18.7921 17.0245 18.581 16.9995 19.3585C16.9716 20.2154 16.8097 21.3886 16.7232 22.2822C16.6354 23.1887 16.1652 24.2927 16.8241 25.0394C17.8093 26.1562 17.9225 24.794 18.1509 24.0179C18.5217 24.4966 18.9293 24.7949 19.4909 25.022C19.7888 25.1424 20.7089 25.4651 20.9882 25.5023C21.5561 25.5778 22.0323 24.3884 22.7694 24.8339C22.7748 24.6968 22.7304 24.5491 22.6626 24.4317C22.494 24.141 20.7188 23.1565 20.3023 22.9175C19.8665 22.6672 19.2831 22.5445 19.0352 22.0782C20.5905 21.3313 22.4809 22.7946 22.8297 20.3701L22.8293 20.3703ZM19.082 20.9424C18.7057 20.8307 18.7573 19.8976 19.0104 19.8115C19.2486 19.7306 20.1036 19.9001 20.377 19.9851C20.5495 20.0386 21.055 20.2104 20.9958 20.4336C20.8954 20.6127 20.7465 20.6912 20.5585 20.7489C20.3378 20.8168 19.2549 20.9938 19.082 20.9424Z"
        fill="#0D0C1D"
      />
    </svg>
  );
}

function IconMinecraft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="226 11 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M243.555 20.214L238.367 17.2199L237.986 17L237.604 17.2185L232.387 20.2023L232 20.4235V27.4804L232.389 27.7011L237.606 30.6658L237.99 30.8843L238.372 30.6603L243.56 27.6176L243.94 27.3952V20.4351L243.556 20.2137L243.555 20.214ZM243.173 22.2751L242.55 22.6207V23.9709L241.914 24.3527V23.648L241.446 23.9415V24.6364L240.801 24.9888V24.2844L240.205 24.6268V23.9711L239.658 24.2844V24.8908L238.456 25.6345V24.9397L237.938 25.2721L237.342 24.9593V25.5171L236.209 24.9008V24.2844L235.613 23.9415V24.6168L235.017 24.294V24.9008L234.469 24.607V23.9615L233.873 23.6387V24.2255L233.317 23.9415V22.6014L232.767 22.2846V20.8695L237.985 17.8856L243.173 20.8794V22.2753L243.173 22.2751Z"
        fill="#0E0F20"
      />
    </svg>
  );
}

function IconDiablo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="356 11 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M361 17.7457L362.989 18.7836L362.793 19.541L362.877 19.8777L362.681 21.0839C362.681 21.0839 363.493 28.0966 363.493 28.1807C363.493 28.2649 363.885 32.2762 363.885 32.2762C363.885 32.2762 364.194 26.6381 364.277 26.5259C364.361 26.4138 364.586 25.7685 364.586 25.7685L364.642 20.1022L364.866 18.5593L365.454 17.6897L361 17.7459L361 17.7457Z"
        fill="#0E0F20"
      />
      <path
        d="M365.888 17.8933L366.434 19.3028C366.434 19.3028 368.472 25.6562 368.388 25.6562C368.304 25.6562 369.922 30.3688 369.922 30.3688L370.993 28.3491L371.224 27.1711C371.224 27.1711 371.77 26.1192 371.791 25.9931C371.812 25.8669 372.506 22.4166 372.506 22.4166L372.485 21.7223L374.208 16L371.35 22.6059L370.678 25.0463L369.985 26.6242C369.985 26.6242 368.892 22.0379 368.913 21.9538C368.934 21.8696 368.514 20.7757 368.514 20.7757L368.115 20.5442C368.115 20.5442 368.262 20.1866 368.262 20.0603C368.262 19.9339 368.136 18.9874 368.136 18.9874L368.472 18.3563L368.22 18.4614L369.039 17.8303L365.888 17.8935L365.888 17.8933Z"
        fill="#0E0F20"
      />
    </svg>
  );
}

function IconWow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="479 11 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
      <path
        d="M497.906 22.8128C497.775 22.0272 497.477 21.2315 497.093 20.5361C497.033 20.4258 496.806 20.1315 496.785 20.0543C496.748 19.9161 496.78 19.5659 496.779 19.3979C496.774 19.0408 496.781 18.6823 496.779 18.3252C496.748 18.2944 496.766 18.2286 496.666 18.2124C496.318 18.2096 495.969 18.2161 495.622 18.2124C495.449 18.2104 495.08 18.2432 494.938 18.2055C494.855 18.1835 494.519 17.9331 494.4 17.8689C494.228 17.7754 494.024 17.6693 493.846 17.5912C493.144 17.2847 492.383 17.0912 491.618 17.027C490.935 16.9695 490.26 17.0023 489.587 17.1398C489.147 17.2296 488.646 17.3849 488.234 17.5632C488.03 17.6515 487.819 17.7634 487.623 17.8689C487.486 17.9424 487.192 18.1657 487.079 18.1997C486.98 18.229 486.846 18.2094 486.74 18.2124C486.355 18.2234 485.968 18.2019 485.583 18.2124C485.494 18.2147 485.301 18.1817 485.259 18.2687C485.224 18.3408 485.246 18.6165 485.245 18.7205C485.24 19.0616 485.301 19.7088 485.244 20.0041C485.231 20.0758 484.866 20.6136 484.794 20.7527C484.443 21.4306 484.201 22.1691 484.089 22.926C483.963 23.7675 483.961 24.6049 484.145 25.4381C484.294 26.11 484.55 26.7711 484.873 27.3764C484.945 27.5096 485.213 27.8752 485.238 27.9709C485.27 28.0932 485.243 28.3693 485.245 28.5146C485.251 28.909 485.24 29.3055 485.245 29.7001C485.254 29.7061 485.323 29.7756 485.329 29.7847C485.733 29.7891 486.138 29.7788 486.542 29.7847C486.689 29.7869 486.953 29.7596 487.079 29.7974C487.193 29.8318 487.484 30.0543 487.623 30.1282C488.182 30.4264 488.799 30.6849 489.418 30.829C490.126 30.9936 490.98 31.0365 491.703 30.9701C492.327 30.9128 493.008 30.7456 493.592 30.5187C493.877 30.4075 494.215 30.2225 494.485 30.0719C494.7 29.9521 494.871 29.7699 495.115 29.7563C495.627 29.7282 496.164 29.7784 496.679 29.7555C496.806 29.7318 496.773 29.6245 496.779 29.5308C496.806 29.0264 496.759 28.4976 496.777 27.9901C496.758 27.9302 496.83 27.9043 496.835 27.8936C497.017 27.5217 497.259 27.1802 497.427 26.7928C497.614 26.36 497.787 25.8446 497.878 25.3814C498.033 24.5974 498.038 23.6003 497.906 22.8128ZM493.958 22.6157C493.791 23.3829 493.669 24.1561 493.535 24.93C493.443 25.4618 493.135 26.6594 493.225 27.1316C493.262 27.325 493.34 27.4802 493.451 27.6395H491.364C491.536 26.782 491.224 25.8912 491.096 25.0426C490.981 25.4691 490.868 25.9053 490.785 26.3401C490.707 26.7478 490.559 27.263 490.8 27.6395C490.461 27.6565 490.114 27.6626 489.766 27.6614C489.383 27.6608 489 27.6517 488.629 27.6395C488.737 27.5359 488.901 27.4092 488.967 27.2727C489.069 27.0608 488.947 26.6057 488.902 26.3642C488.852 26.0993 488.772 25.8405 488.713 25.579C488.526 24.7432 488.31 23.9223 488.093 23.0954C487.97 22.6268 487.806 21.5837 487.54 21.2351C487.47 21.1426 487.366 21.0772 487.304 20.9786L489.39 21.0066C489.377 21.0541 489.334 21.2693 489.334 21.3029V21.8391C489.334 21.8983 489.378 22.0798 489.39 22.1638L489.443 22.2644C489.628 23.1719 489.824 24.0814 490.047 24.9816L490.485 23.2918C490.482 23.2661 490.482 23.245 490.487 23.2276C490.494 23.2023 490.511 23.1867 490.536 23.1816C490.539 23.181 490.543 23.1804 490.546 23.1798C490.637 22.8128 490.734 22.4454 490.828 22.0792C490.891 21.8367 490.944 21.5859 491.011 21.345C491.022 21.308 491.038 21.2098 491.082 21.2045C491.227 21.8474 491.397 22.4855 491.561 23.1236L491.635 23.2567C491.797 23.8074 491.95 24.3594 492.095 24.9136C492.161 24.5268 492.231 24.1432 492.305 23.7628L492.317 23.7507L492.351 23.7163C492.433 23.2367 492.504 22.7582 492.577 22.2768C492.609 22.06 492.666 21.8476 492.689 21.6278C492.721 21.3357 492.694 21.208 492.492 20.9786L494.692 21.0066C494.176 21.498 494.104 21.9511 493.958 22.6157Z"
        fill="#0E0F20"
      />
    </svg>
  );
}

function HeroGameChips() {
  const chips = [
    {
      href: "/games?game=osrs",
      label: "Old School Runescape",
      width: 202,
      iconBg: "#FF4E4E",
      Icon: IconOsrs,
    },
    {
      href: "/games?game=minecraft",
      label: "Minecraft",
      width: 118,
      iconBg: "#B7FF93",
      Icon: IconMinecraft,
    },
    {
      href: "/games?game=diablo-iv",
      label: "Diablo IV",
      width: 114,
      iconBg: "#F05416",
      Icon: IconDiablo,
    },
    {
      href: "/games?game=world-of-warcraft",
      label: "World of Warcraft",
      width: 173,
      iconBg: "#F8CA48",
      Icon: IconWow,
    },
  ];

  return (
    <div className="w-full max-w-[640px] px-2 sm:px-0">
      <div className="home-marquee-wrap h-[47px] overflow-hidden">
        <div className="home-marquee-track flex w-max gap-[12px]">
          {Array.from({ length: 2 }).flatMap((_, pass) =>
            chips.map((chip, i) => (
              <Link
                key={`${chip.label}-${pass}-${i}`}
                href={chip.href}
                className="group/chip flex h-[47px] items-center rounded-[8px] border border-[#2B2A42] bg-[#19182D] pl-[11px] pr-[14px] text-[14px] font-medium text-white shadow-[0_4px_8px_rgba(0,0,0,0.32),inset_0_-6px_8px_rgba(0,0,0,0.22)] transition-all duration-200 hover:border-[#3E4771] hover:bg-[#21203A] hover:shadow-[0_8px_14px_rgba(0,0,0,0.42),0_0_0_1px_rgba(84,113,214,0.32),inset_0_-6px_8px_rgba(0,0,0,0.2)]"
                style={{ width: chip.width }}
              >
                <span
                  className="mr-[10px] grid h-[24px] w-[24px] place-items-center rounded-[6px] transition-transform duration-200 group-hover/chip:scale-105"
                  style={{ backgroundColor: chip.iconBg }}
                >
                  <chip.Icon className="h-[24px] w-[24px]" />
                </span>
                <span className="whitespace-nowrap transition-all duration-200 group-hover/chip:[text-shadow:0_0_10px_rgba(108,133,235,0.42)]">{chip.label}</span>
              </Link>
            )),
          )}
        </div>
      </div>

      <Link
        href="/games"
        className="group mt-[24px] flex items-center justify-center gap-[12px] text-[14px] font-medium text-white transition-all duration-200 hover:gap-[14px] hover:text-[#E8ECFF] hover:[text-shadow:0_0_12px_rgba(86,156,255,0.55)]"
      >
        <IconArrowInline className="h-[8px] w-[11px] transition-transform duration-200 group-hover:translate-x-[2px]" />
        <span className="leading-none">View all games</span>
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] sm:h-[760px] lg:h-[820px]">
        <img
          src="/figma/embedded/homepage/hero-bg.svg"
          alt=""
          className="h-full w-full select-none object-cover object-center"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 74%, rgba(0,0,0,0) 100%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 74%, rgba(0,0,0,0) 100%)",
          }}
          draggable={false}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-[60px] lg:pt-[110px]">
        <div className="mx-auto w-fit">
          <img
            src="/figma/embedded/homepage/trustpilot-pill.svg"
            alt="Trustpilot rating"
            className="h-[31px] w-auto"
            draggable={false}
          />
        </div>

        <h1 className="mx-auto mt-6 max-w-[860px] text-center text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-[64px] lg:leading-[74px]">
          Your #1 Source for MMO Services and Boosting
        </h1>

        <form action="/games" className="mx-auto mt-7 h-[64px] w-full max-w-[592px] sm:h-[74px]">
          <div className="relative h-full w-full rounded-[14px] border border-[#2B2A42] bg-[#19182D] shadow-[0_4px_4px_rgba(0,0,0,0.25),inset_0_-10px_10px_rgba(0,0,0,0.2)]">
            <input
              name="q"
              placeholder="Search for games or services..."
              className="h-full w-full bg-transparent pl-5 pr-20 text-[15px] font-medium text-[#BDBADF] placeholder:text-[#BDBADF]/70 outline-none sm:pl-[33px] sm:pr-[96px] sm:text-[16px]"
            />

            <button
              type="submit"
              aria-label="Search"
              className="absolute right-2 top-2 grid h-[48px] w-[48px] cursor-pointer place-items-center rounded-[10px] bg-gradient-to-b from-[#FFB338] to-[#FF9D00] shadow-[0_4px_8px_rgba(0,0,0,0.28),inset_0_-4px_8px_rgba(0,0,0,0.16)] transition-all duration-200 hover:-translate-y-px hover:brightness-[1.03] hover:shadow-[0_8px_14px_rgba(0,0,0,0.36),inset_0_-3px_6px_rgba(0,0,0,0.12)] sm:right-[18px] sm:top-[10px] sm:h-[54px] sm:w-[54px]"
            >
              <IconSearch className="h-[21px] w-[23px]" />
            </button>
          </div>
        </form>

        <div className="mx-auto mt-[24px] w-fit">
          <HeroGameChips />
        </div>

        <div className="relative left-1/2 mt-14 w-screen -translate-x-1/2 sm:mt-20 lg:mt-[88px]">
          <div className="absolute inset-x-[6.5vw] top-0 h-px bg-[#2B2A42]" />
          <div className="absolute inset-x-[6.5vw] bottom-0 h-px bg-[#2B2A42]" />
          <div className="mx-auto flex max-w-[1440px] items-center justify-center px-4 py-5 sm:px-6 lg:px-[60px] lg:py-[26px]">
            <HeroFeatures />
          </div>
        </div>
      </div>

      <BrowseAllGamesServices />
      <WhyChooseUs />
      <TestimonialsSection />
      <SimpleProcessSection />
      <GameCardsCarouselSection />
      <FeaturedBlogSection />
      <MarketplaceCardsSection />
    </section>
  );
}
