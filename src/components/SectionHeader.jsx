export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <p className="font-display text-lg text-moss">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
