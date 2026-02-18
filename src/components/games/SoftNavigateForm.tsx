"use client";

import type { FormEvent, PointerEvent as ReactPointerEvent, ReactNode } from "react";
import { useMemo, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SoftNavigateFormProps = {
  actionPath: string;
  className?: string;
  children: ReactNode;
};

function buildHrefFromForm(actionPath: string, form: HTMLFormElement): string {
  const formData = new FormData(form);
  const params = new URLSearchParams();

  for (const [key, rawValue] of formData.entries()) {
    const value = String(rawValue).trim();
    if (!value) continue;
    params.set(key, value);
  }

  const query = params.toString();
  return query ? `${actionPath}?${query}` : actionPath;
}

export function SoftNavigateForm({ actionPath, className, children }: SoftNavigateFormProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPrefetchedRef = useRef("");
  const skipNextSubmitRef = useRef(false);

  const currentHref = useMemo(() => {
    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, searchParams]);

  function prefetchIfNeeded(nextHref: string) {
    if (!nextHref || nextHref === currentHref || nextHref === lastPrefetchedRef.current) return;
    lastPrefetchedRef.current = nextHref;
    router.prefetch(nextHref);
  }

  function navigate(nextHref: string) {
    if (!nextHref || nextHref === currentHref) return;
    prefetchIfNeeded(nextHref);
    router.replace(nextHref, { scroll: false });
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (skipNextSubmitRef.current) {
      skipNextSubmitRef.current = false;
      return;
    }

    const form = event.currentTarget;
    const nextHref = buildHrefFromForm(actionPath, form);
    navigate(nextHref);
  }

  function onPointerDownCapture(event: ReactPointerEvent<HTMLFormElement>) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (!target.closest('button[type="submit"], input[type="submit"]')) return;

    const form = event.currentTarget;
    const nextHref = buildHrefFromForm(actionPath, form);
    if (!nextHref || nextHref === currentHref) return;

    // Trigger navigation on pointer down to remove click-up delay.
    event.preventDefault();
    skipNextSubmitRef.current = true;
    navigate(nextHref);
  }

  return (
    <form
      method="get"
      action={actionPath}
      className={className}
      onSubmit={onSubmit}
      onInput={(event) => {
        prefetchIfNeeded(buildHrefFromForm(actionPath, event.currentTarget));
      }}
      onPointerDownCapture={onPointerDownCapture}
    >
      {children}
    </form>
  );
}
