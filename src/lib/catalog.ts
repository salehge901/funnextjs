export type GameCardTitleVariant = "large" | "medium" | "compact";

export type GameChipPresentation = {
  iconSrc: string;
  iconBg: string;
};

export type GameCardPresentation = {
  imageSrc: string;
  gradient: string;
  title: string;
  titleVariant: GameCardTitleVariant;
  offersCount: number;
};

export type Game = {
  slug: string;
  name: string;
  chip?: GameChipPresentation;
  card?: GameCardPresentation;
};

export type OfferCategory = "items" | "accounts" | "boosting" | "gold";
export type OfferServer = "North American" | "Europe" | "Asia";
export type OfferPlatform = "Windows" | "PlayStation" | "Xbox";
export type OfferSort = "recommended" | "price-asc" | "price-desc" | "delivery-fast";
export type DeliveryTimeFilter = "1" | "3" | "5";

export type Offer = {
  id: string;
  gameSlug: string;
  category: OfferCategory;
  title: string;
  subtitle?: string;
  priceUsd: number;
  deliveryDays: number;
  server: OfferServer;
  platform: OfferPlatform;
  sellerName: string;
  sellerRating: number;
  sellerOrders: number;
  imageSrc: string;
};

export type QueryGameOffersInput = {
  category?: OfferCategory;
  search?: string;
  server?: OfferServer;
  platform?: OfferPlatform;
  delivery?: DeliveryTimeFilter;
  minPrice?: number;
  maxPrice?: number;
  sort?: OfferSort;
  page?: number;
  pageSize?: number;
};

export type QueryGameOffersResult = {
  items: Offer[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasMore: boolean;
};

export const offerCategoryOrder: OfferCategory[] = ["items", "accounts", "boosting", "gold"];

export const offerCategoryLabels: Record<OfferCategory, string> = {
  items: "Items",
  accounts: "Accounts",
  boosting: "Boosting",
  gold: "Gold",
};

export const offerSortOptions: { value: OfferSort; label: string }[] = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "delivery-fast", label: "Fastest Delivery" },
];

export const deliveryFilterOptions: { value: DeliveryTimeFilter; label: string }[] = [
  { value: "1", label: "1 day" },
  { value: "3", label: "3 days" },
  { value: "5", label: "5+ days" },
];

const offerServers: OfferServer[] = ["North American", "Europe", "Asia"];
const offerPlatforms: OfferPlatform[] = ["Windows", "PlayStation", "Xbox"];

export const games: Game[] = [
  {
    slug: "old-school-runescape",
    name: "Old School Runescape",
    chip: {
      iconSrc: "https://www.figma.com/api/mcp/asset/e44d6d25-0ca9-431a-831b-1798b8178380",
      iconBg: "#FF4E4E",
    },
  },
  {
    slug: "minecraft",
    name: "Minecraft",
    chip: {
      iconSrc: "https://www.figma.com/api/mcp/asset/cc98977a-487c-49e2-81b9-bcdf28241b1e",
      iconBg: "#B7FF93",
    },
    card: {
      imageSrc: "https://www.figma.com/api/mcp/asset/9601b9e7-5c1f-49c5-b95e-092b59f5b17b",
      gradient: "linear-gradient(180deg, rgba(88, 242, 99, 0) 44.186%, #22D24B 96.512%)",
      title: "MINECRAFT",
      titleVariant: "large",
      offersCount: 125,
    },
  },
  {
    slug: "diablo-iv",
    name: "Diablo IV",
    chip: {
      iconSrc: "https://www.figma.com/api/mcp/asset/6cee3ef3-2d7e-481f-a57d-bf8dac6e3084",
      iconBg: "#F05416",
    },
  },
  {
    slug: "world-of-warcraft",
    name: "World of Warcraft",
    chip: {
      iconSrc: "https://www.figma.com/api/mcp/asset/e8797c16-5484-46b7-9ca3-032a7eb0b202",
      iconBg: "#F8CA48",
    },
  },
  {
    slug: "star-wars-the-old-republic",
    name: "Star Wars The Old Republic",
    card: {
      imageSrc: "https://www.figma.com/api/mcp/asset/28cc54b1-2f49-46c9-b73d-54149ca4fef8",
      gradient: "linear-gradient(180deg, rgba(107, 44, 255, 0) 37.708%, #6B2CFF 100%)",
      title: "STAR WARS\nTHE OLD\nREPUBLIC",
      titleVariant: "compact",
      offersCount: 125,
    },
  },
  {
    slug: "roblox",
    name: "Roblox",
    card: {
      imageSrc: "https://www.figma.com/api/mcp/asset/8326de3a-598b-496f-8167-98f4c6cc0032",
      gradient: "linear-gradient(180deg, rgba(119, 88, 255, 0) 37.209%, #4696FF 100%)",
      title: "ROBLOX",
      titleVariant: "large",
      offersCount: 125,
    },
  },
  {
    slug: "new-world",
    name: "New World",
    card: {
      imageSrc: "https://www.figma.com/api/mcp/asset/e0f14fe8-1b6e-4505-9b1d-ae2d99ed9e93",
      gradient: "linear-gradient(180deg, rgba(218, 44, 0, 0) 36%, #DA2C00 100%)",
      title: "NEW\nWORLD",
      titleVariant: "medium",
      offersCount: 125,
    },
  },
  {
    slug: "lost-ark",
    name: "Lost Ark",
    card: {
      imageSrc: "https://www.figma.com/api/mcp/asset/7c6c212c-5ef7-436b-93e8-9f1457ba742c",
      gradient: "linear-gradient(180deg, rgba(255, 149, 27, 0) 51.993%, #FFBF0D 100%)",
      title: "LOST ARK",
      titleVariant: "large",
      offersCount: 125,
    },
  },
  {
    slug: "world-of-warcraft-classic",
    name: "World of Warcraft Classic",
    card: {
      imageSrc: "https://www.figma.com/api/mcp/asset/b782bc90-3a35-4a46-bb86-caf312ecf0c0",
      gradient: "linear-gradient(180deg, rgba(230, 65, 5, 0) 40.532%, #E64105 92.857%)",
      title: "WORLD OF\nWARCRAFT\nCLASSIC",
      titleVariant: "compact",
      offersCount: 125,
    },
  },
  {
    slug: "dofus",
    name: "Dofus",
    card: {
      imageSrc: "https://www.figma.com/api/mcp/asset/427aa26a-794f-484a-96c5-7f667947c082",
      gradient: "linear-gradient(180deg, rgba(255, 237, 55, 0) 36.213%, rgba(255, 237, 55, 0.8) 100%)",
      title: "DOFUS",
      titleVariant: "large",
      offersCount: 125,
    },
  },
  {
    slug: "elder-scrolls",
    name: "Elder Scrolls",
    card: {
      imageSrc: "https://www.figma.com/api/mcp/asset/f573531b-ca2e-4cc0-8eac-725c1dd50f40",
      gradient: "linear-gradient(180deg, rgba(255, 98, 0, 0) 34.718%, #BE4900 100%)",
      title: "ELDER\nSCROLLS",
      titleVariant: "medium",
      offersCount: 125,
    },
  },
  {
    slug: "runescape-3",
    name: "Runescape 3",
    card: {
      imageSrc: "https://www.figma.com/api/mcp/asset/d10b0e91-df05-4552-ad15-e9c093d2e013",
      gradient: "linear-gradient(180deg, rgba(188, 37, 1, 0) 16.113%, rgba(188, 37, 1, 0.8) 100%)",
      title: "RUNESCAPE\n3",
      titleVariant: "medium",
      offersCount: 125,
    },
  },
  {
    slug: "world-of-warcraft-pandaria",
    name: "World of Warcraft Pandaria",
    card: {
      imageSrc: "https://www.figma.com/api/mcp/asset/00488652-f7b7-4369-9487-7ccb32a1179c",
      gradient: "linear-gradient(180deg, rgba(198, 255, 0, 0) 38.372%, rgba(198, 255, 0, 0.6) 100%)",
      title: "WORLD OF\nWARCRAFT\nPANDARIA",
      titleVariant: "compact",
      offersCount: 125,
    },
  },
];

export const gamesPagePopularGameSlugs: string[] = [
  "old-school-runescape",
  "minecraft",
  "diablo-iv",
  "world-of-warcraft",
];

export const gamesPageGridOrder: string[] = [
  "star-wars-the-old-republic",
  "minecraft",
  "roblox",
  "new-world",
  "lost-ark",
  "world-of-warcraft-classic",
  "dofus",
  "elder-scrolls",
  "runescape-3",
  "world-of-warcraft-pandaria",
  "roblox",
  "star-wars-the-old-republic",
  "star-wars-the-old-republic",
  "minecraft",
  "roblox",
  "new-world",
  "lost-ark",
  "world-of-warcraft-classic",
  "dofus",
  "elder-scrolls",
  "runescape-3",
];

type OfferSeed = {
  category: OfferCategory;
  title: string;
  subtitle: string;
  basePrice: number;
  deliveryDays: number;
};

const offerSeeds: OfferSeed[] = [
  { category: "items", title: "Dungeon Loot Bundle", subtitle: "Best-in-slot drops bundle", basePrice: 14.5, deliveryDays: 1 },
  { category: "items", title: "Crafting Materials Pack", subtitle: "Rare materials and reagents", basePrice: 11.25, deliveryDays: 1 },
  { category: "items", title: "Legendary Gear Set", subtitle: "Top tier equipment package", basePrice: 28.0, deliveryDays: 3 },
  { category: "items", title: "PvP Consumables Kit", subtitle: "Prepared for ranked sessions", basePrice: 9.8, deliveryDays: 1 },
  { category: "items", title: "Mount and Cosmetic Pack", subtitle: "Exclusive vanity rewards", basePrice: 18.6, deliveryDays: 3 },
  { category: "items", title: "Raid Entry Bundle", subtitle: "Ready-to-run raid supplies", basePrice: 21.0, deliveryDays: 3 },
  { category: "items", title: "Weapon Upgrade Bundle", subtitle: "Optimized upgrade path", basePrice: 24.4, deliveryDays: 5 },
  { category: "accounts", title: "Starter Progress Account", subtitle: "Campaign and systems unlocked", basePrice: 45.0, deliveryDays: 3 },
  { category: "accounts", title: "Ranked Ready Account", subtitle: "Built for competitive queues", basePrice: 59.0, deliveryDays: 3 },
  { category: "accounts", title: "Collector Account", subtitle: "Skins, mounts, and collectibles", basePrice: 64.5, deliveryDays: 5 },
  { category: "accounts", title: "Raider Progress Account", subtitle: "Raid progression included", basePrice: 72.0, deliveryDays: 5 },
  { category: "accounts", title: "PvP Veteran Account", subtitle: "High MMR and tracked history", basePrice: 83.0, deliveryDays: 5 },
  { category: "accounts", title: "Premium Legacy Account", subtitle: "Long-term progression account", basePrice: 95.0, deliveryDays: 5 },
  { category: "boosting", title: "Leveling Boost", subtitle: "Fast level progression", basePrice: 18.0, deliveryDays: 1 },
  { category: "boosting", title: "Raid Clear Boost", subtitle: "Weekly or custom raid run", basePrice: 34.0, deliveryDays: 1 },
  { category: "boosting", title: "PvP Rank Boost", subtitle: "Target rank push service", basePrice: 39.5, deliveryDays: 3 },
  { category: "boosting", title: "Achievement Boost", subtitle: "Specific achievements completion", basePrice: 22.0, deliveryDays: 3 },
  { category: "boosting", title: "Dungeon Carry", subtitle: "Speed clear with pro team", basePrice: 26.5, deliveryDays: 1 },
  { category: "boosting", title: "Mythic Progress Boost", subtitle: "Endgame progression package", basePrice: 55.0, deliveryDays: 5 },
  { category: "gold", title: "50K Gold Delivery", subtitle: "Trusted direct transfer", basePrice: 12.0, deliveryDays: 1 },
  { category: "gold", title: "100K Gold Delivery", subtitle: "Fast and secure transfer", basePrice: 20.0, deliveryDays: 1 },
  { category: "gold", title: "250K Gold Delivery", subtitle: "Bulk order discount included", basePrice: 42.0, deliveryDays: 3 },
  { category: "gold", title: "500K Gold Delivery", subtitle: "High volume gold package", basePrice: 79.0, deliveryDays: 3 },
  { category: "gold", title: "1M Gold Delivery", subtitle: "Premium large transfer", basePrice: 145.0, deliveryDays: 5 },
  { category: "gold", title: "Custom Gold Amount", subtitle: "Tailored amount and schedule", basePrice: 26.0, deliveryDays: 3 },
];

const offerTierSuffixes = ["", "Plus", "Elite", "Pro", "Ultimate"];
const sellerPrefixes = ["Astra", "Nova", "Prime", "Vanguard", "Nightfall", "Vertex", "Iron", "Echo"];
const fallbackOfferImage =
  "https://www.figma.com/api/mcp/asset/9601b9e7-5c1f-49c5-b95e-092b59f5b17b";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function uniqueOrdered<T extends string>(items: T[]): T[] {
  const seen = new Set<T>();
  const result: T[] = [];

  for (const item of items) {
    if (seen.has(item)) continue;
    seen.add(item);
    result.push(item);
  }

  return result;
}

function getOfferImageForGame(game: Game): string {
  return game.card?.imageSrc ?? fallbackOfferImage;
}

function buildOffersForGame(game: Game, gameIndex: number): Offer[] {
  const generated: Offer[] = [];
  const imageSrc = getOfferImageForGame(game);

  for (let tierIndex = 0; tierIndex < offerTierSuffixes.length; tierIndex += 1) {
    for (let seedIndex = 0; seedIndex < offerSeeds.length; seedIndex += 1) {
      const seed = offerSeeds[seedIndex];
      const sequence = tierIndex * offerSeeds.length + seedIndex + 1;
      const tierSuffix = offerTierSuffixes[tierIndex];
      const title = tierSuffix ? `${seed.title} ${tierSuffix}` : seed.title;
      const sellerIndex = (gameIndex * 11 + seedIndex + tierIndex * 3) % sellerPrefixes.length;
      const sellerNumber = ((gameIndex + 1) * 97 + sequence * 3) % 900;
      const priceWithVariance =
        seed.basePrice + tierIndex * 2.9 + ((seedIndex + gameIndex) % 5) * 0.85 + (gameIndex % 3) * 0.55;
      const ratingWithVariance = 4.72 + ((seedIndex + tierIndex + gameIndex) % 7) * 0.03;

      generated.push({
        id: `${slugify(game.slug)}-${slugify(seed.title)}-${String(sequence).padStart(3, "0")}`,
        gameSlug: game.slug,
        category: seed.category,
        title,
        subtitle: `${seed.subtitle} for ${game.name}`,
        priceUsd: Number(priceWithVariance.toFixed(2)),
        deliveryDays: clamp(seed.deliveryDays + (tierIndex % 2), 1, 7),
        server: offerServers[(seedIndex + tierIndex + gameIndex) % offerServers.length],
        platform: offerPlatforms[(seedIndex + gameIndex) % offerPlatforms.length],
        sellerName: `${sellerPrefixes[sellerIndex]}-${String(sellerNumber + 100).slice(-3)}`,
        sellerRating: Number(ratingWithVariance.toFixed(2)),
        sellerOrders: 140 + sequence * 9 + gameIndex * 17,
        imageSrc,
      });
    }
  }

  return generated;
}

export const offers: Offer[] = games.flatMap((game, gameIndex) => buildOffersForGame(game, gameIndex));

const gamesBySlug = new Map(games.map((game) => [game.slug, game]));
const offersByGame = new Map<string, Offer[]>();

for (const offer of offers) {
  const current = offersByGame.get(offer.gameSlug);
  if (!current) {
    offersByGame.set(offer.gameSlug, [offer]);
  } else {
    current.push(offer);
  }
}

export function getGame(slug: string): Game | undefined {
  return gamesBySlug.get(slug);
}

export function getGamesPagePopularGames(): Game[] {
  return gamesPagePopularGameSlugs
    .map((slug) => gamesBySlug.get(slug))
    .filter((game): game is Game => Boolean(game));
}

export function getGamesPageGridGames(): Game[] {
  return gamesPageGridOrder
    .map((slug) => gamesBySlug.get(slug))
    .filter((game): game is Game => Boolean(game && game.card));
}

export function getOffersForGame(gameSlug: string): Offer[] {
  return offersByGame.get(gameSlug) ?? [];
}

export function getOffer(gameSlug: string, offerId: string): Offer | undefined {
  const gameOffers = offersByGame.get(gameSlug);
  if (!gameOffers) return undefined;
  return gameOffers.find((offer) => offer.id === offerId);
}

export function getOfferServersForGame(gameSlug: string): OfferServer[] {
  return uniqueOrdered(getOffersForGame(gameSlug).map((offer) => offer.server));
}

export function getOfferPlatformsForGame(gameSlug: string): OfferPlatform[] {
  return uniqueOrdered(getOffersForGame(gameSlug).map((offer) => offer.platform));
}

function filterByDelivery(offer: Offer, delivery?: DeliveryTimeFilter): boolean {
  if (!delivery) return true;
  if (delivery === "1") return offer.deliveryDays <= 1;
  if (delivery === "3") return offer.deliveryDays <= 3;
  return true;
}

function sortOffers(items: Offer[], sort: OfferSort): Offer[] {
  const sorted = [...items];

  if (sort === "price-asc") {
    sorted.sort((a, b) => a.priceUsd - b.priceUsd || a.deliveryDays - b.deliveryDays);
    return sorted;
  }

  if (sort === "price-desc") {
    sorted.sort((a, b) => b.priceUsd - a.priceUsd || a.deliveryDays - b.deliveryDays);
    return sorted;
  }

  if (sort === "delivery-fast") {
    sorted.sort((a, b) => a.deliveryDays - b.deliveryDays || a.priceUsd - b.priceUsd);
    return sorted;
  }

  sorted.sort(
    (a, b) =>
      b.sellerRating - a.sellerRating ||
      b.sellerOrders - a.sellerOrders ||
      a.deliveryDays - b.deliveryDays ||
      a.priceUsd - b.priceUsd,
  );
  return sorted;
}

export function queryGameOffers(gameSlug: string, input: QueryGameOffersInput = {}): QueryGameOffersResult {
  const all = getOffersForGame(gameSlug);
  const sort = input.sort ?? "recommended";
  const page = Math.max(1, input.page ?? 1);
  const pageSize = clamp(input.pageSize ?? 12, 1, 48);
  const normalizedSearch = input.search?.trim().toLowerCase();

  const filtered = all.filter((offer) => {
    if (input.category && offer.category !== input.category) return false;
    if (input.server && offer.server !== input.server) return false;
    if (input.platform && offer.platform !== input.platform) return false;
    if (typeof input.minPrice === "number" && !Number.isNaN(input.minPrice) && offer.priceUsd < input.minPrice) return false;
    if (typeof input.maxPrice === "number" && !Number.isNaN(input.maxPrice) && offer.priceUsd > input.maxPrice) return false;
    if (!filterByDelivery(offer, input.delivery)) return false;

    if (normalizedSearch) {
      const haystack = `${offer.title} ${offer.subtitle ?? ""} ${offer.sellerName}`.toLowerCase();
      if (!haystack.includes(normalizedSearch)) return false;
    }

    return true;
  });

  const sorted = sortOffers(filtered, sort);
  const visibleCount = page * pageSize;
  const items = sorted.slice(0, visibleCount);
  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));

  return {
    items,
    total: sorted.length,
    page,
    pageSize,
    totalPages,
    hasMore: visibleCount < sorted.length,
  };
}

