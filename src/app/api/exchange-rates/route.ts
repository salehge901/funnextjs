import { NextResponse } from "next/server";

const FALLBACK_RATES = {
  USD: 1,
  EUR: 0.84590128,
  GBP: 0.734504,
  CAD: 1.36580487,
};

export async function GET() {
  try {
    const response = await fetch("https://cdn.moneyconvert.net/api/latest.json", {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Rates fetch failed with ${response.status}`);
    }

    const payload = (await response.json()) as {
      rates?: Record<string, number>;
      ts?: number;
    };

    const rates = payload.rates ?? {};

    return NextResponse.json({
      base: "USD",
      updatedAt: payload.ts ?? null,
      rates: {
        USD: 1,
        EUR: Number(rates.EUR ?? FALLBACK_RATES.EUR),
        GBP: Number(rates.GBP ?? FALLBACK_RATES.GBP),
        CAD: Number(rates.CAD ?? FALLBACK_RATES.CAD),
      },
      source: "moneyconvert",
    });
  } catch {
    return NextResponse.json({
      base: "USD",
      updatedAt: null,
      rates: FALLBACK_RATES,
      source: "fallback",
    });
  }
}
