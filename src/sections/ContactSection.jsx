import AnimatedSection from "../components/AnimatedSection";
import { contactLinks } from "../data/portfolioData";

function ContactIcon({ type }) {
  const commonProps = {
    className: "h-6 w-6 text-[#7A8B7A]",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    viewBox: "0 0 24 24",
  };

  if (type === "phone") {
    return (
      <svg {...commonProps}>
        <path d="M7.12 4.25h2.3c.38 0 .72.25.83.61l1.08 3.45a1 1 0 0 1-.24 1.01l-1.38 1.38a12.35 12.35 0 0 0 3.59 3.59l1.38-1.38a1 1 0 0 1 1.01-.24l3.45 1.08c.36.11.61.45.61.83v2.3A1.88 1.88 0 0 1 17.87 20h-.62C9.66 20 4 14.34 4 6.75v-.62a1.88 1.88 0 0 1 1.87-1.88Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="#7A8B7A"
          d="M19.2 3H4.8A1.8 1.8 0 0 0 3 4.8v14.4A1.8 1.8 0 0 0 4.8 21h14.4a1.8 1.8 0 0 0 1.8-1.8V4.8A1.8 1.8 0 0 0 19.2 3Z"
        />
        <circle cx="7.35" cy="8.1" r="1.35" fill="#F8F7F3" />
        <path
          fill="#F8F7F3"
          d="M6.15 10.05h2.4v7.8h-2.4v-7.8Zm3.9 0h2.3v1.06h.03c.32-.6 1.1-1.23 2.28-1.23 2.44 0 2.89 1.6 2.89 3.68v4.3h-2.4V14c0-.9-.02-2.05-1.25-2.05s-1.44.98-1.44 1.98v3.92h-2.4v-7.8Z"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="2.25" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="py-20">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#7A8B7A]">
            CONTACT
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#2E2E2E] sm:text-5xl">
            Let&apos;s connect.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            I&apos;m open to frontend, product design, and software engineering
            opportunities where thoughtful interaction and strong execution both
            matter.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {contactLinks.map((link) => (
            <div
              key={link.label}
              className="group rounded-[1.9rem] border border-white/70 bg-white/75 p-8 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <a
                href={link.href}
                target={link.type === "linkedin" ? "_blank" : undefined}
                rel={link.type === "linkedin" ? "noreferrer" : undefined}
                className="block"
              >
                <div className="flex justify-center md:justify-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm transition duration-300 group-hover:scale-105 group-hover:shadow-md">
                    <ContactIcon type={link.type} />
                  </div>
                </div>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                  {link.label}
                </p>
                <p className="mt-3 text-lg font-medium text-stone-700 transition-colors duration-300 group-hover:text-[#7A8B7A]">
                  {link.value}
                </p>
              </a>
            </div>
          ))}
          </div>
      </div>
    </AnimatedSection>
  );
}
