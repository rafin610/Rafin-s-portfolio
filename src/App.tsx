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

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'journey', 'skills', 'projects', 'ideas', 'growth', 'philosophy', 'contact'];
      const scrollPos = window.scrollY + 250;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-neutral-100 relative overflow-x-hidden">
      
      {/* Intro Experience overlay */}
      <AnimatePresence>
        {showIntro && (
          <OpeningIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Interactive Particle Canvas */}
      <BackgroundCanvas />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Experience Body */}
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
