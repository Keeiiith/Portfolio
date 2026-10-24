import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon, MailIcon, XIcon } from "./Icons";

const links = [
  { label: "GitHub", href: profile.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: "X (Twitter)", href: profile.socials.twitter, Icon: XIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 pt-10 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="mt-1 font-mono text-xs text-zinc-600">
            Built with React, Vite &amp; Tailwind CSS · Layout inspired by tajmirul.site
          </p>
        </div>

        <ul className="flex items-center gap-2">
          {links.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Giant name wordmark */}
      <p
        className="display select-none whitespace-nowrap text-center text-[clamp(3rem,15vw,13rem)] leading-[0.85] text-zinc-900"
        style={{ WebkitTextStroke: "1px rgb(255 255 255 / 0.08)" }}
        aria-hidden
      >
        Almanzor
      </p>
    </footer>
  );
}
