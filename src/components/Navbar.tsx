import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { soundSynth } from '../utils/soundSynth';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

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
    { id: 'about',       label: 'About' },
    { id: 'journey',     label: 'Journey' },
    { id: 'skills',      label: 'Stack' },
    { id: 'projects',    label: 'Projects' },
    { id: 'ai-workflow', label: 'AI Workflow' },
    { id: 'building',    label: 'Building' },
    { id: 'ideas',       label: 'Ideas' },
    { id: 'growth',      label: 'Growth' },
    { id: 'contact',     label: 'Contact' },
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
            ? 'scrolled backdrop-blur-2xl border-b'
            : 'bg-transparent'
        }`}
        style={scrolled ? { borderColor: 'var(--border-default)', backgroundColor: 'var(--navbar-bg)' } : {}}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 h-[64px] flex items-center justify-between">

          {/* Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="cursor-pointer group flex items-center gap-2"
          >
            <span className="font-serif text-xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              AR
            </span>
            <span className="hidden sm:inline-block text-xs font-mono-custom opacity-50" style={{ color: 'var(--text-muted)' }}>
              / builder
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  onMouseEnter={() => soundSynth.playHoverPop()}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-light transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[var(--surface-overlay)] font-normal'
                      : 'hover:bg-[var(--surface-overlay)]'
                  }`}
                  style={{
                    color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            <button
              type="button"
              onClick={toggleSound}
              title={isAudioActive ? 'Mute' : 'Enable audio'}
              aria-label={isAudioActive ? 'Mute ambient sound' : 'Enable ambient sound'}
              className="p-2 rounded-full border transition-colors cursor-pointer"
              style={{
                borderColor: 'var(--border-default)',
                color: 'var(--text-muted)',
                backgroundColor: 'var(--surface-overlay)'
              }}
            >
              {isAudioActive
                ? <Volume2 className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                : <VolumeX className="w-3.5 h-3.5" />
              }
            </button>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-[13px] font-medium transition-all duration-300"
              style={{
                color: 'var(--text-primary)',
                borderColor: 'var(--border-default)',
                backgroundColor: 'var(--surface-overlay)'
              }}
            >
              Connect
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden p-2 rounded-full border transition-colors"
              style={{
                borderColor: 'var(--border-default)',
                color: 'var(--text-primary)',
                backgroundColor: 'var(--surface-overlay)'
              }}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t px-6 py-4 flex flex-col gap-1 backdrop-blur-2xl shadow-xl" style={{
            borderColor: 'var(--border-default)',
            backgroundColor: 'var(--bg-primary)',
          }}>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left px-3 py-2 text-sm rounded-lg transition-all"
                style={{
                  color: activeSection === link.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  backgroundColor: activeSection === link.id ? 'var(--surface-overlay)' : 'transparent',
                }}
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
