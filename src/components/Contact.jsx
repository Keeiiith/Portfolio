import { profile } from "../data/portfolio";
import { ArrowUpRightIcon, DownloadIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <Reveal>
        <p className="label mb-6">( 05 ) Contact</p>
        <h2 className="display text-[clamp(2.25rem,6vw,4.5rem)] text-white">
          Have a project
          <br />
          <span className="outline-text">in mind?</span>
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-3 break-all text-lg font-medium text-white underline decoration-white/30 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent sm:text-2xl"
          >
            {profile.email}
            <ArrowUpRightIcon
              width={22}
              height={22}
              className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
        <p className="mt-6 max-w-md text-zinc-500">
          I'm open to internships, collaborations, and new opportunities.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="display inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm tracking-wider text-zinc-950 transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            View CV
          </a>
          <a
            href={profile.resume}
            download="Keith-Ryan-Almanzor-Resume.pdf"
            className="display inline-flex items-center gap-2 border border-white/25 px-6 py-3.5 text-sm tracking-wider text-white transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            <DownloadIcon width={16} height={16} /> Download
          </a>
        </div>
      </Reveal>
    </section>
  );
}
