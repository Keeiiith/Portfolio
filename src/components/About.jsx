import { education, profile } from "../data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <Reveal>
        <p className="label mb-6">( 01 ) About me</p>
        <h2 className="max-w-5xl text-2xl font-medium leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-4xl">
          {profile.statement}
        </h2>
      </Reveal>

      <div className="mt-20 grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <p className="display text-2xl text-white">This is me</p>
        </Reveal>
        <Reveal delay={100} className="space-y-5 text-base leading-relaxed md:col-span-8 lg:col-span-6">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </div>

      {/* Education */}
      <div className="mt-24">
        <Reveal>
          <p className="label mb-6">Education</p>
        </Reveal>
        <ul className="border-t border-white/10">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 80}>
              <li className="grid gap-4 border-b border-white/10 py-8 md:grid-cols-12 md:gap-8">
                <span className="font-mono text-xs text-zinc-500 md:col-span-3 md:pt-2">{e.period}</span>
                <div className="md:col-span-9">
                  <h3 className="display text-2xl text-white sm:text-3xl">{e.degree}</h3>
                  <p className="mt-1 text-zinc-300">{e.school}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.badges.map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-accent/30 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">{e.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
