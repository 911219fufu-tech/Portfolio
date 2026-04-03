import AnimatedSection from "../components/AnimatedSection";
import { contactLinks } from "../data/portfolioData";

function ContactIcon({ type }) {
  const commonProps = {
    className: "h-8 w-8 text-[#7A8B7A]",
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
        className="h-8 w-8"
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
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[#2E2E2E] sm:text-4xl">
            Feel free to contact me!
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-stone-600 sm:text-[1.35rem] sm:leading-[1.8]">
            I&apos;d love to hear from you. Whether you have a question, a
            project idea, or just want to connect, feel free to reach out.
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {contactLinks.map((link) => (
            <div
              key={link.label}
              className="group text-center"
            >
              <a
                href={link.href}
                target={link.type === "linkedin" ? "_blank" : undefined}
                rel={link.type === "linkedin" ? "noreferrer" : undefined}
                className="block transition-transform duration-300 group-hover:-translate-y-1"
              >
                <div className="flex justify-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-[0_14px_45px_rgba(46,46,46,0.1)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_55px_rgba(46,46,46,0.14)]">
                    <ContactIcon type={link.type} />
                  </div>
                </div>

                <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.16em] text-[#2E2E2E] sm:text-[1.6rem]">
                  {link.label}
                </p>
                <p className="mt-4 text-base text-stone-600 transition-colors duration-300 group-hover:text-[#7A8B7A] sm:text-[1.1rem]">
                  {link.value}
                </p>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <p className="bg-[rgba(216,167,177,0.28)] px-4 py-2 text-center text-lg font-extrabold uppercase tracking-[0.08em] text-[#2E2E2E] sm:text-[1.8rem]">
            Thanks for patience!
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
