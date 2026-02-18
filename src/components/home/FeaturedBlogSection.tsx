import Link from "next/link";

export type FeaturedBlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAtLabel: string;
  readTimeLabel: string;
  href: string;
  imageSrc: string;
};

type FeaturedBlogSectionProps = {
  heading?: string;
  posts?: FeaturedBlogPost[];
  ctaHref?: string;
  ctaLabel?: string;
};

export const featuredBlogFallbackPosts: FeaturedBlogPost[] = [
  {
    id: "wow-1",
    title: "World of warcraft creative boost economy",
    excerpt: "We are committed to providing top-notch security, ensuring your personal...",
    category: "Boosting",
    publishedAtLabel: "Jan 1, 2025",
    readTimeLabel: "2 min Read",
    href: "/games?game=world-of-warcraft",
    imageSrc: "https://www.figma.com/api/mcp/asset/f9f94d2c-faf0-47ef-ab7b-e2aa84d35ab2",
  },
  {
    id: "wow-2",
    title: "World of warcraft creative boost economy",
    excerpt: "We are committed to providing top-notch security, ensuring your personal...",
    category: "Boosting",
    publishedAtLabel: "Jan 1, 2025",
    readTimeLabel: "2 min Read",
    href: "/games?game=world-of-warcraft",
    imageSrc: "https://www.figma.com/api/mcp/asset/c16f7bd7-47e7-4fbc-b92d-45b3fbea762b",
  },
  {
    id: "wow-3",
    title: "World of warcraft creative boost economy",
    excerpt: "We are committed to providing top-notch security, ensuring your personal...",
    category: "Boosting",
    publishedAtLabel: "Jan 1, 2025",
    readTimeLabel: "2 min Read",
    href: "/games?game=world-of-warcraft",
    imageSrc: "https://www.figma.com/api/mcp/asset/ccdeaac3-43d8-4f77-816b-4eec6ef9e296",
  },
  {
    id: "wow-4",
    title: "World of warcraft creative boost economy",
    excerpt: "We are committed to providing top-notch security, ensuring your personal...",
    category: "Boosting",
    publishedAtLabel: "Jan 1, 2025",
    readTimeLabel: "2 min Read",
    href: "/games?game=world-of-warcraft",
    imageSrc: "https://www.figma.com/api/mcp/asset/fd3adced-9ed6-4352-98eb-454fc6b32b4f",
  },
];

export function FeaturedBlogSection({
  heading = "Our Featured Blog",
  posts = featuredBlogFallbackPosts,
  ctaHref = "/games",
  ctaLabel = "Browse all Blogs",
}: FeaturedBlogSectionProps) {
  const blogPosts = posts.length > 0 ? posts : featuredBlogFallbackPosts;

  return (
    <section className="relative left-1/2 w-[calc(100vw-20px)] max-w-[1680px] -translate-x-1/2 px-[20px] pb-[120px] pt-[122px]">
      <h2 className="text-[52px] font-semibold leading-[62px] tracking-[-0.02em] text-white">{heading}</h2>

      <div className="mt-[49px] grid grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-4">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={post.href}
            className="group relative h-[430px] overflow-hidden rounded-[10px] border border-[#2A2941] bg-[#07061A] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-[#3A3A57] hover:shadow-[0_18px_28px_rgba(0,0,0,0.36)]"
          >
            <div className="relative h-[206px] border-b border-[#2A2941]">
              <img src={post.imageSrc} alt={post.title} className="h-full w-full select-none object-cover" decoding="async" draggable={false} />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,26,0)_56%,rgba(7,6,26,0.22)_100%)]" />
            </div>

            <div className="absolute left-[16px] top-[190px] z-[2] inline-flex h-[32px] items-center justify-center rounded-[144px] bg-gradient-to-b from-[#DBFFA2] to-[#00FF4D] px-[14px] text-[12px] font-semibold leading-none text-[#101020] shadow-[0_4px_12px_rgba(0,0,0,0.24)]">
              {post.category}
            </div>

            <div className="flex h-[224px] flex-col px-[16px] pb-[20px] pt-[34px]">
              <h3 className="max-w-[250px] text-[21px] font-semibold leading-[1.18] text-white">{post.title}</h3>
              <p className="mt-[14px] text-[13px] leading-[1.5] text-[#BDBADF]">{post.excerpt}</p>

              <div className="mt-auto flex items-center justify-between text-[12px] leading-[24px] text-[#BDBADF]">
                <span>{post.publishedAtLabel}</span>
                <span>{post.readTimeLabel}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-[49px]">
        <Link
          href={ctaHref}
          className="group mx-auto flex h-[54px] w-full items-center justify-center rounded-[10px] bg-[linear-gradient(180deg,#1A1930_0%,#171629_100%)] text-[16px] font-[600] text-white shadow-[0_8px_16px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-200 hover:-translate-y-px hover:bg-[linear-gradient(180deg,#211F39_0%,#1A1930_100%)] hover:text-[#EFF2FF] hover:shadow-[0_12px_22px_rgba(0,0,0,0.44),0_0_0_1px_rgba(61,74,118,0.35),inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
