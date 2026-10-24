import { useEffect, useRef, useState } from "react";
import { profile, terminal } from "../data/portfolio";

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// A small terminal window that types out a short intro.
// It tilts slightly toward the mouse (mouse devices only).
export default function HeroTerminal() {
  const tilt = useRef(null);
  const [state, setState] = useState(() =>
    typeof window !== "undefined" && reduceMotion()
      ? { line: terminal.length, chars: 0, out: false }
      : { line: 0, chars: 0, out: false }
  );

  // Typing: one character at a time, then the output, then the next command.
  useEffect(() => {
    const { line, chars, out } = state;
    if (line >= terminal.length) return;

    let delay;
    let next;
    if (chars < terminal[line].cmd.length) {
      delay = line === 0 && chars === 0 ? 1100 : 55;
      next = { line, chars: chars + 1, out: false };
    } else if (!out) {
      delay = 280;
      next = { line, chars, out: true };
    } else {
      delay = 520;
      next = { line: line + 1, chars: 0, out: false };
    }
    const t = setTimeout(() => setState(next), delay);
    return () => clearTimeout(t);
  }, [state]);

  // Tilt toward the cursor
  useEffect(() => {
    if (reduceMotion() || !window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!tilt.current) return;
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        tilt.current.style.transform = `perspective(900px) rotateY(${(nx * 10).toFixed(2)}deg) rotateX(${(-ny * 10).toFixed(2)}deg)`;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const { line, chars, out } = state;
  const done = line >= terminal.length;
  const cursor = <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent" />;

  return (
    <div className="absolute right-[6%] top-1/2 hidden w-[min(28rem,34vw)] -translate-y-1/2 animate-fadein xl:block">
      <div ref={tilt} className="transition-transform duration-300 ease-out will-change-transform">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30 shadow-[0_0_60px_-20px_var(--color-accent)] backdrop-blur-md">
          {/* Window bar */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 font-mono text-[11px] text-zinc-500">
              {profile.firstName.toLowerCase()}@portfolio: ~
            </span>
          </div>

          {/* Output */}
          <div className="min-h-[15rem] space-y-3 p-5 font-mono text-[13px] leading-relaxed">
            {terminal.map((t, i) => {
              if (i > line) return null;
              const typing = i === line && !done;
              const cmdText = typing ? t.cmd.slice(0, chars) : t.cmd;
              const showOut = i < line || done || out;
              return (
                <div key={t.cmd}>
                  <p className="text-white">
                    <span className="mr-2 text-accent">$</span>
                    {cmdText}
                    {typing && !showOut && cursor}
                  </p>
                  {showOut && <p className="pl-4 text-zinc-400">{t.out}</p>}
                </div>
              );
            })}
            {done && (
              <p className="text-white">
                <span className="mr-2 text-accent">$</span>
                {cursor}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
