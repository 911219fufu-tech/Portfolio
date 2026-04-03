import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

const sectionIds = ["home", "about", "projects", "education", "skills", "contact"];

export default function App() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (location.pathname !== "/") {
      window.scrollTo({ top: 0, behavior: "auto" });
      setActiveSection("");
      return;
    }

    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.replace("#", "");
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, [location.hash, location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") {
      return undefined;
    }

    const sectionState = new Map();
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const resolveActiveSection = () => {
      const visibleSections = sectionIds
        .map((id) => ({
          id,
          ...(sectionState.get(id) ?? {
            isIntersecting: false,
            ratio: 0,
            top: Number.POSITIVE_INFINITY,
          }),
        }))
        .filter((section) => section.isIntersecting);

      if (!visibleSections.length) {
        return;
      }

      visibleSections.sort((sectionA, sectionB) => {
        if (sectionB.ratio !== sectionA.ratio) {
          return sectionB.ratio - sectionA.ratio;
        }

        return Math.abs(sectionA.top) - Math.abs(sectionB.top);
      });

      const nextSection = visibleSections[0].id;
      setActiveSection((currentSection) =>
        currentSection === nextSection ? currentSection : nextSection,
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionState.set(entry.target.id, {
            isIntersecting: entry.isIntersecting,
            ratio: entry.intersectionRatio,
            top: entry.boundingClientRect.top,
          });
        });

        resolveActiveSection();
      },
      {
        rootMargin: "-18% 0px -42% 0px",
        threshold: [0.15, 0.3, 0.45, 0.6, 0.75],
      },
    );

    targets.forEach((target) => {
      sectionState.set(target.id, {
        isIntersecting: false,
        ratio: 0,
        top: target.getBoundingClientRect().top,
      });
      observer.observe(target);
    });

    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, [location.pathname]);

  return (
    <div className="relative overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.8),transparent_40%),radial-gradient(circle_at_top_right,rgba(216,167,177,0.26),transparent_30%)]" />
      <Navbar activeSection={activeSection} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
}
