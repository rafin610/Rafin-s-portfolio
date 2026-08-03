import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { soundSynth } from '../utils/soundSynth';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 28);
      if (currentY <= 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = soundSynth.toggleMute();
    setIsAudioActive(!muted);
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'journey', label: 'Journey' },
    { id: 'skills', label: 'Stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'ideas', label: 'Ideas' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    soundSynth.playHoverPop();
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-4 sm:top-6 left-1/2 z-50 w-[calc(100%-1rem)] max-w-6xl -translate-x-1/2 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className={`rounded-full border px-3 py-2.5 sm:px-4 sm:py-3 ${scrolled ? 'border-white/15 bg-[#07080b]/75' : 'border-white/10 bg-[#07080b]/55'} shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-[20px]`}>
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={() => scrollToSection('hero')}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="group flex items-center gap-2 cursor-pointer rounded-full px-2 py-1"
          >
            <span className="font-serif text-lg text-white transition-colors duration-300 group-hover:text-[#8b5cf6]">AR</span>
            <span className="hidden text-[10px] uppercase tracking-[0.3em] text-[#8d93a0] sm:inline">Developer</span>
          </button>

          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  onMouseEnter={() => soundSynth.playHoverPop()}
                  className={`rounded-full px-3.5 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white/12 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]'
                      : 'text-[#9095a2] hover:text-white hover:bg-white/8'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleSound}
              title={isAudioActive ? 'Mute' : 'Enable audio'}
              className="glass-button rounded-full p-2 text-[#c5cad7] hover:text-white"
            >
              {isAudioActive ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="glass-button hidden lg:inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium text-white"
            >
              Connect
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glass-button rounded-full p-2 text-[#c5cad7] hover:text-white md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mt-2 rounded-[24px] border border-white/10 bg-[#07080b]/85 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-[20px] md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="flex w-full items-center rounded-full px-3 py-2.5 text-left text-sm text-[#aab0bc] transition-all hover:bg-white/8 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
