import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import EducationSection from "../sections/EducationSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
