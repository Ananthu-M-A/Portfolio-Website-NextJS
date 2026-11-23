import { Boxes, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { ENGINEERING_ADVANTAGES, TEACHING_ADVANTAGES } from "@/config/constants";

const TILES = [
  ...TEACHING_ADVANTAGES.map((item) => ({ ...item, kind: "teaching" as const })),
  ...ENGINEERING_ADVANTAGES.map((item) => ({ ...item, kind: "engineering" as const })),
];

const TAG = {
  teaching: { icon: GraduationCap, label: "Teaching → engineering" },
  engineering: { icon: Boxes, label: "Engineering → teaching" },
};

const SystemsSection = () => (
  <section id="systems" className="section">
    <div className="container-x">
      <SectionHeader
        eyebrow="Approach"
        title={
          <>
            Teaching sharpens the engineering.{" "}
            <span className="text-gradient">Engineering makes the teaching real.</span>
          </>
        }
        body="The overlap is the advantage: systems thinking, clear explanation, and production judgment reinforcing each other."
      />

      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card reveal flex flex-col justify-between bg-gradient-to-br from-cyan-300/[0.08] to-violet-400/[0.06] p-7 sm:col-span-2 lg:row-span-2">
          <div className="flex gap-3 text-cyan-200">
            <GraduationCap size={28} aria-hidden="true" />
            <span aria-hidden="true" className="text-neutral-600">
              ⇄
            </span>
            <Boxes size={28} aria-hidden="true" />
          </div>
          <div className="mt-16">
            <p className="text-balance text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
              &ldquo;I teach how systems work, not just how tutorials work, and I build for the
              developers who come after me.&rdquo;
            </p>
            <p className="mt-4 text-sm text-neutral-400">
              Every project I ship becomes teaching material; every cohort I teach exposes where
              real systems confuse people.
            </p>
          </div>
        </div>

        {TILES.map((tile) => {
          const Tag = TAG[tile.kind];
          return (
            <div key={tile.title} className="card reveal flex flex-col p-6">
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-neutral-500">
                <Tag.icon size={13} aria-hidden="true" className="text-cyan-300" />
                {Tag.label}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-white">{tile.title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-400">{tile.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SystemsSection;
