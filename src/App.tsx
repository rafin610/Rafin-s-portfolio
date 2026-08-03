import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { OpeningIntro } from './components/OpeningIntro';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { IdeasLabSection } from './components/IdeasLabSection';
import { LearningGrowthSection } from './components/LearningGrowthSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'journey', 'skills', 'projects', 'ideas', 'growth', 'philosophy', 'contact'];
      const scrollPos = window.scrollY + 260;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-neutral-100 relative overflow-x-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-orb hero-orb-c" />
      </div>

      <AnimatePresence>
        {showIntro && <OpeningIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <BackgroundCanvas />
      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <JourneyTimeline />
        <TechStackSection />
        <ProjectsSection />
        <IdeasLabSection />
        <LearningGrowthSection />
        <PhilosophySection />
        <ContactSection />
      </main>
    </div>
  );
}
