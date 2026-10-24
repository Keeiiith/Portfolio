import { useEffect, useRef } from "react";

// Cursor effects that match the theme:
//  - a soft green glow that follows the mouse
//  - a small dot with a trailing ring that grows over links and buttons
//  - a ripple on click
// Only runs on devices with a real mouse.
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const glow = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let hovering = false;
    let pressed = false;
    let shown = false;
    let raf = 0;

    const show = (on) => {
      shown = on;
      const o = on ? "1" : "0";
      dot.current.style.opacity = o;
      ring.current.style.opacity = o;
      glow.current.style.opacity = o;
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!shown) {
        rx = x;
        ry = y;
        show(true);
      }
    };

    const onOver = (e) => {
      const el = e.target instanceof Element ? e.target.closest("a, button, [data-cursor]") : null;
      hovering = Boolean(el);
      ring.current.style.backgroundColor = hovering ? "rgb(0 230 64 / 0.14)" : "transparent";
    };

    const onDown = (e) => {
      pressed = true;
      if (reduce) return;
      // Ripple at the click point
      const r = document.createElement("div");
      r.style.cssText = `position:fixed;left:${e.clientX}px;top:${e.clientY}px;width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:9999px;border:1px solid #00e640;pointer-events:none;z-index:99;`;
      document.body.appendChild(r);
      r.animate(
        [
          { transform: "scale(1)", opacity: 0.8 },
          { transform: "scale(6)", opacity: 0 },
        ],
        { duration: 600, easing: "cubic-bezier(0.2, 0.8, 0.2, 1)" }
      ).onfinish = () => r.remove();
    };
    const onUp = () => (pressed = false);
    const onLeave = () => show(false);
    const onEnter = () => show(true);

    const loop = () => {
      const ease = reduce ? 1 : 0.18;
      rx += (x - rx) * ease;
      ry += (y - ry) * ease;
      const dotScale = pressed ? 0.6 : hovering ? 0.4 : 1;
      const ringScale = pressed ? 0.8 : hovering ? 1.8 : 1;
      dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      glow.current.style.transform = `translate3d(${x - 400}px, ${y - 400}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <>
      {/* Soft glow, sits behind the page content */}
      <div
        ref={glow}
        className="pointer-events-none fixed left-0 top-0 z-0 h-[800px] w-[800px] opacity-0 transition-opacity duration-500"
        style={{ background: "radial-gradient(circle, rgb(0 230 64 / 0.09), transparent 62%)" }}
        aria-hidden
      />
      <div
        ref={ring}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-accent/70 opacity-0 transition-[opacity,background-color] duration-300"
        aria-hidden
      />
      <div
        ref={dot}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-300"
        aria-hidden
      />
    </>
  );
}
