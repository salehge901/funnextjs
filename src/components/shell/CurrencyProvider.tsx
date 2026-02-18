"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CurrencyCode = "USD" | "EUR" | "GBP" | "CAD";

type RatesMap = Record<CurrencyCode, number>;

type CurrencyContextValue = {
  selectedCurrency: CurrencyCode;
  setSelectedCurrency: (currency: CurrencyCode) => void;
  currencies: CurrencyCode[];
  rates: RatesMap;
  convertFromUsd: (amountUsd: number) => number;
  convertToUsd: (amountInSelected: number) => number;
  formatFromUsd: (amountUsd: number, fractionDigits?: number) => string;
};

const FALLBACK_RATES: RatesMap = {
  USD: 1,
  EUR: 0.84590128,
  GBP: 0.734504,
  CAD: 1.36580487,
};

const CURRENCIES: CurrencyCode[] = ["USD", "EUR", "GBP", "CAD"];

const STORAGE_KEY = "virtgold_selected_currency";

const CURRENCY_SYMBOL: Record<CurrencyCode, string> = {
  USD: "$",
  EUR: "\u20AC",
  GBP: "\u00A3",
  CAD: "C$",
};

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [selectedCurrency, setSelectedCurrencyState] = useState<CurrencyCode>("USD");
  const [rates, setRates] = useState<RatesMap>(FALLBACK_RATES);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && CURRENCIES.includes(saved as CurrencyCode)) {
      setSelectedCurrencyState(saved as CurrencyCode);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, selectedCurrency);
  }, [selectedCurrency]);

  useEffect(() => {
    let cancelled = false;

    async function loadRates() {
      try {
        const response = await fetch("/api/exchange-rates", { cache: "no-store" });
        if (!response.ok) return;

        const payload = (await response.json()) as {
          rates?: Partial<Record<CurrencyCode, number>>;
        };

        if (!payload.rates) return;

        const nextRates: RatesMap = {
          USD: Number(payload.rates.USD ?? 1),
          EUR: Number(payload.rates.EUR ?? FALLBACK_RATES.EUR),
          GBP: Number(payload.rates.GBP ?? FALLBACK_RATES.GBP),
          CAD: Number(payload.rates.CAD ?? FALLBACK_RATES.CAD),
        };

        if (!cancelled) {
          setRates(nextRates);
        }
      } catch {
        // Keep fallback rates when remote fetch fails.
      }
    }

    loadRates();

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo<CurrencyContextValue>(() => {
    const rate = rates[selectedCurrency] || 1;

    const convertFromUsd = (amountUsd: number) => amountUsd * rate;
    const convertToUsd = (amountInSelected: number) => amountInSelected / rate;
    const formatFromUsd = (amountUsd: number, fractionDigits = 2) => {
      const converted = convertFromUsd(amountUsd);
      return `${CURRENCY_SYMBOL[selectedCurrency]}${converted.toFixed(fractionDigits)} ${selectedCurrency}`;
    };

    return {
      selectedCurrency,
      setSelectedCurrency: setSelectedCurrencyState,
      currencies: CURRENCIES,
      rates,
      convertFromUsd,
      convertToUsd,
      formatFromUsd,
    };
  }, [rates, selectedCurrency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
}
