import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Github, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const HeroSection: React.FC = () => {
  const [bdTime, setBdTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setBdTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    soundSynth.playHoverPop();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    soundSynth.playHoverPop();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    soundSynth.playHoverPop();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-10 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      {/* ── Top status bar ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex items-center justify-between text-[11px] font-mono-custom"
        style={{ color: 'var(--text-muted)' }}
      >
        <div className="flex items-center gap-2.5">
          <span>Bangladesh</span>
          <span style={{ color: 'var(--text-hint)' }}>·</span>
          <span style={{ color: 'var(--text-secondary)' }}>{bdTime || 'UTC+6'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Open to collaborate</span>
        </div>
      </motion.div>

      {/* ── Main editorial headline block ────────────── */}
      <div className="py-16 flex flex-col items-start">

        {/* Year tag */}
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="label-text mb-10"
        >
          Portfolio — 2026
        </motion.span>

        {/* Main name — massive serif editorial */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(52px,12vw,160px)] font-normal leading-[0.9] tracking-[-0.03em]"
            style={{ color: 'var(--text-primary)' }}
          >
            Ahmed
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(52px,12vw,160px)] font-normal leading-[0.9] tracking-[-0.03em] italic"
            style={{ color: 'var(--accent-primary)' }}
          >
            Rafin.
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-base sm:text-lg font-light max-w-lg mb-4 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Self-Taught Developer & AI Builder
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-sm font-light max-w-md mb-12 leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          I build web products, explore AI, and learn by turning ideas into real projects.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="flex flex-wrap items-center gap-3"
        >
          <button
            onClick={scrollToProjects}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: 'var(--button-primary-bg)',
              color: 'var(--button-primary-text)',
            }}
          >
            <ExternalLink className="w-4 h-4" />
            <span>View Projects</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm border transition-all duration-300"
            style={{
              color: 'var(--text-secondary)',
              borderColor: 'var(--button-secondary-border)',
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--button-secondary-border)';
            }}
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <button
            onClick={scrollToContact}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm border transition-all duration-300 cursor-pointer"
            style={{
              color: 'var(--text-secondary)',
              borderColor: 'var(--button-secondary-border)',
            }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--button-secondary-border)';
            }}
          >
            <span>Let's Connect</span>
          </button>
        </motion.div>
      </div>

      {/* ── Bottom scroll indicator ───────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex items-center justify-between"
      >
        <p className="text-[11px] font-mono-custom max-w-xs leading-relaxed" style={{ color: 'var(--text-hint)' }}>
          Building web products, exploring AI, learning through real projects.
        </p>

        <button
          type="button"
          onClick={scrollToAbout}
          onMouseEnter={() => soundSynth.playHoverPop()}
          aria-label="Scroll to the about section"
          className="group flex items-center gap-2 text-[11px] font-mono-custom transition-colors cursor-pointer"
          style={{ color: 'var(--text-muted)' }}
          onMouseOver={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
          }}
          onMouseOut={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
          }}
        >
          <span className="tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
};
