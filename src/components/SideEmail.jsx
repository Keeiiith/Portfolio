import { profile } from "../data/portfolio";

// Email written vertically along the left edge (wide screens only).
export default function SideEmail() {
  return (
    <a
      href={`mailto:${profile.email}`}
      className="fixed bottom-8 left-5 z-30 hidden rotate-180 text-xs tracking-wider text-zinc-400 transition-colors [writing-mode:vertical-rl] hover:text-accent 2xl:block"
    >
      {profile.email}
    </a>
  );
}
