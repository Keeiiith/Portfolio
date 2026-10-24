import { useEffect, useRef } from "react";

const clamp = (n) => Math.min(1, Math.max(0, n));

// Wraps a section so it fades and drifts away as it leaves the screen,
// and fades in as it arrives. Only the section you are looking at stays visible.
// Pass `last` for the final section so it never fades out at the bottom of the page.
export default function Focus({ children, last = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const H = window.innerHeight;

      // 0 -> 1 while the section's top moves from 85% down the screen to 50%
      const enter = clamp((H * 0.85 - r.top) / (H * 0.35));
      // 1 -> 0 while the section's bottom moves from 50% down the screen to 15%
      const leave = last ? 1 : clamp((r.bottom - H * 0.15) / (H * 0.35));
      const v = Math.min(enter, leave);

      if (v === 1) {
        el.style.opacity = "1";
        el.style.transform = "none";
        return;
      }
      const shift = (1 - enter) * 60 - (1 - leave) * 60; // arrives from below, leaves upward
      el.style.opacity = v.toFixed(3);
      el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(${(0.94 + 0.06 * v).toFixed(4)})`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      el.style.opacity = "";
      el.style.transform = "";
    };
  }, [last]);

  return (
    <div ref={ref} className="will-change-[opacity,transform]">
      {children}
    </div>
  );
}
