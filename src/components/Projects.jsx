import { useState } from "react";
import { projects } from "../data/portfolio";
import { FigmaIcon, GithubIcon, LockIcon, TrophyIcon } from "./Icons";
import PrivateNotice from "./PrivateNotice";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Used when a project has no screenshot yet. Each project gets its own color.
const hues = [140, 200, 270, 25, 330];

// Fills its parent. Shows the project's screenshot, or a colored placeholder.
function Preview({ project, index }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className={`h-full w-full ${
          project.fit === "contain" ? "bg-zinc-900 object-contain" : "object-cover object-top"
        }`}
      />
    );
  }

  const hue = hues[index % hues.length];
  const initials = project.title
    .split(/[\s-]+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3);

  return (
    <div
      className="relative h-full w-full"
      style={{
        background: `radial-gradient(circle at 25% 20%, hsl(${hue} 80% 40% / 0.5), transparent 55%), linear-gradient(135deg, hsl(${hue} 45% 14%), hsl(${hue + 40} 50% 6%))`,
      }}
    >
      <span className="display absolute -bottom-3 right-4 select-none text-[8rem] leading-none text-white/10">
        {initials}
      </span>
      <span className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-wider text-white/40">
        UI preview
      </span>
    </div>
  );
}

export default function Projects() {
  const [hover, setHover] = useState(null);
  const [notice, setNotice] = useState(null); // project whose private notice is open

  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="04" label="Hackathons, class & school" title="Selected Projects" />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-12">
        {/* Preview panel on the left. Shows the UI of the hovered project. */}
        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-24">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
              {projects.map((p, i) => (
                <div
                  key={p.title}
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    hover === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  }`}
                  aria-hidden={hover !== i}
                >
                  <Preview project={p} index={i} />
                </div>
              ))}
              <p
                className={`absolute inset-0 grid place-items-center text-sm text-zinc-600 transition-opacity duration-300 ${
                  hover === null ? "opacity-100" : "opacity-0"
                }`}
              >
                Hover a project to preview its UI
              </p>
            </div>
            <p className="mt-3 h-5 font-mono text-xs text-zinc-500">
              {hover !== null && `_0${hover + 1} / ${projects[hover].title}`}
            </p>
          </div>
        </div>

        {/* Project list */}
        <ul className="border-t border-white/10 lg:col-span-7" onMouseLeave={() => setHover(null)}>
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <li
                onMouseEnter={() => setHover(i)}
                onFocus={() => setHover(i)}
                className="group border-b border-white/10 py-7 transition-colors duration-300 hover:bg-white/[0.03] md:px-4"
              >
                {/* Screenshot shown inline on small screens (no hover on touch) */}
                <div className="mb-5 aspect-[16/10] overflow-hidden rounded-lg border border-white/10 lg:hidden">
                  <Preview project={p} index={i} />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-zinc-600">_0{i + 1}</span>
                    <h3 className="display text-2xl text-white transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent sm:text-3xl">
                      {p.title}
                    </h3>
                  </div>
                  <span className="shrink-0 pt-1.5 font-mono text-xs text-zinc-500">{p.period}</span>
                </div>

                <div className="mt-2 pl-0 sm:pl-10">
                  <p className="text-sm text-zinc-300">{p.subtitle}</p>
                  <p className="tag mt-1">{p.role}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">{p.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                    {p.tags.map((t) => (
                      <li key={t} className="tag">
                        #{t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    {p.award && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 px-3 py-0.5 text-xs font-medium text-accent">
                        <TrophyIcon width={13} height={13} />
                        {p.award}
                      </span>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-zinc-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        <GithubIcon width={15} height={15} /> GitHub
                      </a>
                    )}
                    {p.private && (
                      <button
                        type="button"
                        onClick={() => setNotice(p)}
                        className="inline-flex items-center gap-1.5 text-sm text-zinc-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                      >
                        <GithubIcon width={15} height={15} /> GitHub
                        <span className="inline-flex items-center gap-1 rounded-full border border-white/15 px-2 py-0.5 text-[11px] no-underline">
                          <LockIcon width={11} height={11} /> Private
                        </span>
                      </button>
                    )}
                    {p.figma && (
                      <a
                        href={p.figma}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-4 py-1.5 text-sm font-medium text-accent transition-all hover:-translate-y-0.5 hover:bg-accent hover:text-zinc-950"
                      >
                        <FigmaIcon width={15} height={15} /> View Figma
                      </a>
                    )}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      <PrivateNotice project={notice} onClose={() => setNotice(null)} />
    </section>
  );
}
