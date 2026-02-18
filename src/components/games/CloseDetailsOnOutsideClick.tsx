"use client";

import { useEffect } from "react";

export function CloseDetailsOnOutsideClick() {
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const openDetails = document.querySelectorAll<HTMLDetailsElement>('details[data-outside-close="true"][open]');
      openDetails.forEach((node) => {
        if (!node.contains(target)) {
          node.open = false;
          node.removeAttribute("open");
        }
      });
    };

    const onClickCapture = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const closeTrigger = target.closest<HTMLElement>('[data-close-details-on-select="true"]');
      if (!closeTrigger) return;

      const owner = closeTrigger.closest<HTMLDetailsElement>('details[data-outside-close="true"]');
      if (owner) {
        owner.open = false;
        owner.removeAttribute("open");
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("click", onClickCapture, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return null;
}
