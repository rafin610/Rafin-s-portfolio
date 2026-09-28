import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { ThemeProvider } from './context/ThemeContext';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { OpeningIntro } from './components/OpeningIntro';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { JourneyTimeline } from './components/JourneyTimeline';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AIWorkflowSection } from './components/AIWorkflowSection';
import { CurrentlyBuildingSection } from './components/CurrentlyBuildingSection';
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
      const sections = [
        'hero',
        'about',
        'journey',
        'skills',
        'projects',
        'ai-workflow',
        'building',
        'ideas',
        'growth',
        'philosophy',
        'contact'
      ];
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
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-x-hidden transition-colors duration-500">
        
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
          <AIWorkflowSection />
          <CurrentlyBuildingSection />
          <IdeasLabSection />
          <LearningGrowthSection />
          <PhilosophySection />
          <ContactSection />
        </main>

      </div>
    </ThemeProvider>
  );
}
