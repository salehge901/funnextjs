"use client";

import { useCurrency } from "@/components/shell/CurrencyProvider";

export function CurrencyAmount({
  usd,
  fractionDigits = 2,
  className,
}: {
  usd: number;
  fractionDigits?: number;
  className?: string;
}) {
  const { formatFromUsd } = useCurrency();
  return <span className={className}>{formatFromUsd(usd, fractionDigits)}</span>;
}
