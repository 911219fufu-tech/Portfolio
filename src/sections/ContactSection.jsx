import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import { contactLinks } from "../data/portfolioData";

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="pb-24">
      <div className="section-shell">
        <div className="section-card p-8 sm:p-10 lg:p-12">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something thoughtful."
            description="I’m interested in frontend, product design, and software engineering opportunities where user experience and execution both matter."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="group rounded-[1.75rem] border border-stone-200 bg-white p-6 transition hover:-translate-y-1 hover:border-moss hover:shadow-card"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
                  {link.label}
                </p>
                <p className="mt-4 text-lg font-medium text-charcoal transition group-hover:text-moss">
                  {link.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
