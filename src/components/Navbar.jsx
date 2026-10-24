import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import { ArrowUpRightIcon, CloseIcon, DownloadIcon, GithubIcon, LinkedinIcon, XIcon } from "./Icons";

const socials = [
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: "X (Twitter)", href: profile.socials.twitter, Icon: XIcon },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock page scroll and close with Escape while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {/* Menu button: just two lines, top right */}
      <button
        onClick={() => setOpen(true)}
        className="group fixed right-5 top-5 z-40 grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-white/10 sm:right-8 sm:top-6"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <span className="flex w-6 flex-col gap-[6px]">
          <span className="h-px w-full bg-white transition-all group-hover:bg-accent" />
          <span className="h-px w-full bg-white transition-all group-hover:w-4 group-hover:bg-accent" />
        </span>
      </button>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
      />

      {/* Slide-in panel */}
      <aside
        inert={!open}
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[55] flex h-full w-full max-w-sm flex-col justify-between overflow-y-auto border-l border-white/10 bg-ink-deep p-8 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="label">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full text-white transition-colors hover:bg-white/10 hover:text-accent"
              aria-label="Close menu"
            >
              <CloseIcon />
            </button>
          </div>

          <ul className="mt-10 space-y-1">
            {navLinks.map((l, i) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-1.5 text-white"
                >
                  <span className="font-mono text-xs text-zinc-600">0{i + 1}</span>
                  <span className="display text-3xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent">
                    {l.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 space-y-8">
          <div>
            <p className="label mb-3">Social</p>
            <ul className="space-y-2">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-zinc-300 transition-colors hover:text-accent"
                  >
                    <Icon width={16} height={16} /> {label}
                    <ArrowUpRightIcon width={13} height={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label mb-3">Resume</p>
            <div className="flex items-center gap-5 text-sm">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                View <ArrowUpRightIcon width={13} height={13} />
              </a>
              <a
                href={profile.resume}
                download="Keith-Ryan-Almanzor-Resume.pdf"
                className="inline-flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-accent"
              >
                <DownloadIcon width={14} height={14} /> Download
              </a>
            </div>
          </div>
          <div>
            <p className="label mb-3">Get in touch</p>
            <a
              href={`mailto:${profile.email}`}
              className="break-all text-sm text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
