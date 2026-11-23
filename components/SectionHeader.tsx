type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  align?: "center" | "left";
};

const SectionHeader = ({ eyebrow, title, body, align = "center" }: SectionHeaderProps) => (
  <div
    className={`reveal mb-14 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
  >
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
      {title}
    </h2>
    {body ? (
      <p className="mt-5 text-pretty text-base leading-7 text-neutral-400 sm:text-lg">{body}</p>
    ) : null}
  </div>
);

export default SectionHeader;
