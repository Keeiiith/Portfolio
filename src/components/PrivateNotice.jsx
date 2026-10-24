import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { privateNotice } from "../data/portfolio";
import { CloseIcon, LockIcon } from "./Icons";

// Popup shown when someone clicks the locked GitHub button on a private project.
// Rendered with a portal so it stays fixed on screen even inside the fading sections.
export default function PrivateNotice({ project, onClose }) {
  const closeBtn = useRef(null);

  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[90] grid place-items-center bg-black/70 p-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="private-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md animate-fadein rounded-2xl border border-white/10 bg-ink-deep p-7 shadow-[0_0_60px_-20px_var(--color-accent)]"
        style={{ animationDelay: "0s", animationDuration: "0.3s" }}
      >
        <button
          ref={closeBtn}
          onClick={onClose}
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close"
        >
          <CloseIcon width={18} height={18} />
        </button>

        <span className="grid h-11 w-11 place-items-center rounded-full border border-accent/40 bg-accent/10 text-accent">
          <LockIcon />
        </span>

        <p className="label mt-5">{project.title}</p>
        <h3 id="private-title" className="display mt-2 text-3xl text-white">
          {privateNotice.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-zinc-300">{privateNotice.body}</p>
        <p className="mt-3 text-sm leading-relaxed text-zinc-500">{privateNotice.note}</p>

        <button
          onClick={onClose}
          className="display mt-7 bg-accent px-6 py-3 text-sm tracking-wider text-zinc-950 transition-all hover:-translate-y-0.5 hover:brightness-110"
        >
          Got it
        </button>
      </div>
    </div>,
    document.body
  );
}
