import { useEffect, useRef, useState } from "react";
import { experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Distance from the top of each item to its dot (matches `top-9` below).
const DOT_OFFSET = 36;

export default function Experience() {
  const listRef = useRef(null);
  const fillRef = useRef(null);
  const itemRefs = useRef([]);
  const [active, setActive] = useState(-1);

  // The colored line grows as you scroll, like mercury rising in a thermometer.
  // Each dot lights up when the line reaches it.
  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const list = listRef.current;
      if (!list) return;
      const rect = list.getBoundingClientRect();
      const reading = window.innerHeight * 0.6; // line sits 60% down the screen
      const fill = Math.min(Math.max(reading - rect.top, 0), rect.height);

      if (fillRef.current) fillRef.current.style.height = `${fill}px`;

      let idx = -1;
      itemRefs.current.forEach((el, i) => {
        if (el && el.offsetTop + DOT_OFFSET <= fill) idx = i;
      });
      setActive((prev) => (prev === idx ? prev : idx));
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
    };
  }, []);

  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="03" label="Competitions & leadership" title="My Experience" />
      </Reveal>

      <ol ref={listRef} className="relative ml-2 pl-10 sm:ml-4 sm:pl-14 lg:max-w-4xl">
        {/* Empty track */}
        <span className="absolute left-0 top-0 h-full w-px bg-white/10" aria-hidden />

        {/* Colored fill that follows the scroll */}
        <span
          ref={fillRef}
          className="absolute left-0 top-0 w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent/30 to-accent shadow-[0_0_18px_var(--color-accent)]"
          style={{ height: 0 }}
          aria-hidden
        >
          {/* Glowing tip */}
          <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_20px_4px_var(--color-accent)]" />
        </span>

        {experience.map((item, i) => {
          const on = i <= active;
          return (
            <li
              key={item.title}
              ref={(el) => (itemRefs.current[i] = el)}
              className="relative pb-8 last:pb-0"
            >
              {/* Dot */}
              <span
                className={`absolute -left-10 top-9 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-500 sm:-left-14 ${
                  on
                    ? "scale-125 border-accent bg-accent shadow-[0_0_16px_var(--color-accent)]"
                    : "border-zinc-600 bg-ink"
                }`}
                aria-hidden
              />

              <div
                className={`rounded-xl border bg-white/[0.02] p-6 transition-all duration-500 hover:opacity-100 ${
                  on
                    ? "translate-x-0 border-accent/30 opacity-100"
                    : "translate-x-3 border-white/10 opacity-40"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs text-zinc-500">{item.period}</span>
                  {item.badge && (
                    <span className="rounded-full border border-accent/30 px-3 py-0.5 text-xs font-medium text-accent">
                      {item.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-zinc-400">{item.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-500">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
