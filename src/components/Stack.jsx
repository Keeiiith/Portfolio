import { logos, skills } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ToolTile({ name }) {
  const logo = logos[name];
  return (
    <li className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-white/[0.05]">
      {logo ? (
        <img
          src={logo}
          alt=""
          width={32}
          height={32}
          loading="lazy"
          className="h-8 w-8 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      ) : (
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 font-display text-sm text-accent">
          {name[0]}
        </span>
      )}
      <span className="text-sm font-medium text-zinc-200">{name}</span>
    </li>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="02" label="Toolbox" title="My Stack" />
      </Reveal>

      <div className="border-t border-white/10">
        {skills.map((group, gi) => {
          const isSoft = group.title === "Soft Skills";
          return (
            <Reveal key={group.title} delay={gi * 60}>
              <div className="grid gap-6 border-b border-white/10 py-10 md:grid-cols-12 md:gap-8">
                <h3 className="display text-2xl text-white md:col-span-3">{group.title}</h3>

                {isSoft ? (
                  <div className="flex flex-wrap gap-2 md:col-span-9">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-accent hover:text-accent"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:col-span-9 lg:grid-cols-4">
                    {group.items.map((item) => (
                      <ToolTile key={item} name={item} />
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
