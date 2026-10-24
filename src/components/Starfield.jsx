import { useEffect, useRef } from "react";

const RADIUS = 140; // how far the mouse reaches

// Tiny twinkling dots that drift upward behind the page.
// Near the mouse they glow green, get pushed away, and connect to the cursor.
export default function Starfield() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: 0, y: 0, active: false };
    let w = 0;
    let h = 0;
    let stars = [];
    let raf = 0;

    const draw = (time) => {
      ctx.clearRect(0, 0, w, h);
      const lines = [];

      for (const s of stars) {
        // Push away from the mouse, then ease back
        s.ox *= 0.92;
        s.oy *= 0.92;
        let near = 0;
        if (mouse.active) {
          const dx = s.x + s.ox - mouse.x;
          const dy = s.y + s.oy - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < RADIUS && d > 0.01) {
            near = 1 - d / RADIUS;
            s.ox += (dx / d) * near * 1.6;
            s.oy += (dy / d) * near * 1.6;
          }
        }

        const px = s.x + s.ox;
        const py = s.y + s.oy;
        const twinkle = reduce ? 1 : 0.6 + 0.4 * Math.sin(time / 1500 + s.phase);

        ctx.globalAlpha = Math.min(1, s.alpha * twinkle + near * 0.7);
        ctx.fillStyle = near > 0.05 ? "#00e640" : "#fff";
        ctx.beginPath();
        ctx.arc(px, py, s.r + near * 1.2, 0, Math.PI * 2);
        ctx.fill();

        if (near > 0.05) lines.push([px, py, near]);

        if (!reduce) {
          s.y -= s.speed;
          if (s.y < -2) {
            s.y = h + 2;
            s.x = Math.random() * w;
          }
        }
      }

      // Thin lines from the cursor to nearby stars
      ctx.lineWidth = 1;
      for (const [px, py, near] of lines) {
        ctx.globalAlpha = near * 0.4;
        ctx.strokeStyle = "#00e640";
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(px, py);
        ctx.stroke();
      }
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        ox: 0,
        oy: 0,
        r: Math.random() * 1.1 + 0.3,
        alpha: Math.random() * 0.6 + 0.15,
        speed: Math.random() * 0.15 + 0.03,
        phase: Math.random() * Math.PI * 2,
      }));
      draw(0);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => (mouse.active = false);

    const loop = (time) => {
      draw(time);
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (!reduce) {
      raf = requestAnimationFrame(loop);
      window.addEventListener("mousemove", onMove, { passive: true });
      document.documentElement.addEventListener("mouseleave", onLeave);
    }
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0" aria-hidden />;
}
