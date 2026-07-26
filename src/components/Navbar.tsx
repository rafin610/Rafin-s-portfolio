import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { soundSynth } from '../utils/soundSynth';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = soundSynth.toggleMute();
    setIsAudioActive(!muted);
  };

  const navLinks = [
    { id: 'about',      label: 'About' },
    { id: 'journey',    label: 'Journey' },
    { id: 'skills',     label: 'Stack' },
    { id: 'projects',   label: 'Projects' },
    { id: 'ideas',      label: 'Ideas' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'contact',    label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    soundSynth.playHoverPop();
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(8,8,8,0.92)] backdrop-blur-2xl border-b border-[rgba(255,255,255,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 h-[60px] flex items-center justify-between">

          {/* Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="cursor-pointer group"
          >
            <span className="font-serif text-xl text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">
              AR
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  onMouseEnter={() => soundSynth.playHoverPop()}
                  className={`px-3.5 py-1.5 rounded-md text-[13px] font-light transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-white bg-white/6'
                      : 'text-[#666] hover:text-[#ccc]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSound}
              title={isAudioActive ? 'Mute' : 'Enable audio'}
              className="p-1.5 text-[#555] hover:text-[#999] transition-colors cursor-pointer"
            >
              {isAudioActive
                ? <Volume2 className="w-4 h-4" />
                : <VolumeX className="w-4 h-4" />
              }
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[13px] text-[#aaa] hover:text-white hover:border-[rgba(255,255,255,0.2)] transition-all duration-300"
            >
              Connect
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 text-[#555] hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[rgba(255,255,255,0.05)] bg-[rgba(8,8,8,0.98)] backdrop-blur-2xl px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left px-3 py-2.5 text-sm text-[#888] hover:text-white rounded-md hover:bg-white/5 transition-all"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
