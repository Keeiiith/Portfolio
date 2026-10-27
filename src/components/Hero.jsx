import { profile, projects } from "../data/portfolio";
import HeroTerminal from "./HeroTerminal";

// Each line slides up from behind a mask on page load.
function Line({ children, delay = 0, className = "" }) {
  return (
    <span className="block overflow-hidden pb-[0.04em]">
      <span className={`block animate-rise ${className}`} style={{ animationDelay: `${delay}ms` }}>
        {children}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center py-28">
      <HeroTerminal />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="max-w-md lg:ml-[14%]">
          <h1 className="display text-[clamp(2.6rem,5.2vw,4.75rem)]">
            <Line className="text-accent">Frontend</Line>
            <Line delay={110} className="text-zinc-200">
              Developer
            </Line>
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-zinc-400">
            Hi! I'm <span className="font-medium text-white">{profile.firstName}</span>. {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="display inline-block bg-accent px-6 py-3.5 text-sm tracking-wider text-zinc-950 transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              Let's Talk
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="display inline-block border border-white/25 px-6 py-3.5 text-sm tracking-wider text-white transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
            >
              View Resume
            </a>
          </div>

          <p className="mt-4 flex items-center gap-2 text-xs text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-white" />
            {profile.status}
          </p>
        </div>

        {/* Project count: bottom right on wide screens, below the intro on small screens */}
        <div className="mt-14 lg:absolute lg:bottom-12 lg:right-8 lg:mt-0 lg:text-right">
          <p className="display text-4xl text-accent">{projects.length}</p>
          <p className="mt-1 text-xs text-zinc-400">Projects Completed</p>
        </div>
      </div>
    </section>
  );
}
