export default function ProjectVisual({
  title,
  subtitle,
  gradient,
  accent,
  image,
  className = "",
}) {
  if (image) {
    return (
      <div
        className={`relative h-full min-h-[250px] overflow-hidden rounded-[1.75rem] border border-stone-200/70 bg-stone-100 ${className}`}
      >
        <img
          src={image}
          alt={`${title} project cover`}
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(46,46,46,0.06)_0%,rgba(46,46,46,0.18)_48%,rgba(46,46,46,0.68)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
            {subtitle}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white sm:text-[1.75rem]">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative h-full min-h-[250px] overflow-hidden rounded-[1.75rem] border border-white/30 ${className}`}
      style={{ backgroundImage: gradient }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(46,46,46,0.22),transparent_34%)]" />
      <div
        className="absolute right-5 top-5 h-24 w-24 rounded-[1.6rem] border border-white/40 bg-white/20 backdrop-blur-xl"
        style={{ boxShadow: `0 0 0 1px ${accent}` }}
      />
      <div className="absolute left-6 top-8 h-3 w-28 rounded-full bg-white/70" />
      <div className="absolute left-6 top-16 h-3 w-20 rounded-full bg-white/40" />
      <div className="absolute right-10 top-28 h-40 w-32 rounded-[1.6rem] border border-white/40 bg-white/20 shadow-card backdrop-blur-xl" />
      <div className="absolute left-6 right-6 top-24 rounded-[1.8rem] border border-white/40 bg-white/20 p-5 shadow-card backdrop-blur-xl">
        <div className="h-3 w-20 rounded-full bg-white/70" />
        <div className="mt-3 grid grid-cols-3 gap-3">
          <div className="h-20 rounded-2xl bg-white/60" />
          <div className="h-20 rounded-2xl bg-white/40" />
          <div className="h-20 rounded-2xl bg-white/20" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/75">
          {subtitle}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-white sm:text-[1.75rem]">
          {title}
        </h3>
      </div>
    </div>
  );
}
