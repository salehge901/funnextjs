import Link from "next/link";

import { CurrencyAmount } from "@/components/shell/CurrencyAmount";
import { getGame, getOffer } from "@/lib/catalog";

export default async function OfferSelectedPage({
  params,
}: {
  params: Promise<{ game: string; offer: string }>;
}) {
  const { game: gameSlug, offer: offerId } = await params;

  const game = getGame(gameSlug);
  const offer = getOffer(gameSlug, offerId);

  if (!game || !offer) {
    return (
      <div className="mx-auto max-w-[1440px] px-6 py-10">
        <h1 className="text-2xl font-semibold">Offer not found</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-10">
      <div className="flex items-center gap-3">
        <Link href={`/games/${game.slug}`} className="text-sm text-white/70 hover:text-white">
          Back
        </Link>
        <h1 className="text-3xl font-semibold">{game.name}</h1>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_420px]">
        <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">{offer.title}</h2>
          {offer.subtitle ? <p className="mt-2 text-white/70">{offer.subtitle}</p> : null}

          <div className="mt-6 text-sm text-white/70">
            This page will be replaced with the exact Figma layout and real form controls.
          </div>
        </section>

        <aside className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/70">Price</div>
          <div className="mt-1 text-3xl font-semibold">
            <CurrencyAmount usd={offer.priceUsd} />
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-full bg-[#00ff4d] px-5 py-3 text-sm font-semibold text-black hover:bg-[#19ff5f]"
          >
            Buy now
          </button>

          <button
            type="button"
            className="mt-3 w-full rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15"
          >
            Add to cart
          </button>
        </aside>
      </div>
    </div>
  );
}
