import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Mail, MessageSquare, MapPin } from 'lucide-react';
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

  const scrollToAbout = () => {
    soundSynth.playHoverPop();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-32 pb-10 px-6 md:px-16 max-w-[1400px] mx-auto z-10">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-orb hero-orb-c" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="glass-panel flex items-center justify-between rounded-full px-4 py-3 text-[11px] font-mono-custom text-[#c7cad4]"
      >
        <div className="flex items-center gap-2.5">
          <MapPin className="h-3.5 w-3.5 text-[#7dd3fc]" />
          <span>Bangladesh</span>
          <span className="text-[#51586d]">·</span>
          <span className="text-[#aab0bc]">{bdTime || 'UTC+6'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for collaborations</span>
        </div>
      </motion.div>

      <div className="flex flex-col items-start py-16">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-chip mb-10 inline-flex items-center rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-[#aab0bc]"
        >
          Portfolio — 2026
        </motion.span>

        <div className="mb-6 overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(52px,12vw,160px)] font-normal leading-[0.9] tracking-[-0.03em] text-white"
          >
            Ahmed
          </motion.h1>
        </div>
        <div className="mb-8 overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(52px,12vw,160px)] font-normal leading-[0.9] tracking-[-0.03em] italic"
            style={{ color: 'var(--color-accent)' }}
          >
            Rafin.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mb-10 max-w-2xl text-[15px] leading-relaxed text-[#9ba1ad] sm:text-[16px]"
        >
          I design and build thoughtful digital products with a sharp eye for clarity, motion, and product elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          {['Developer', 'Creative Technologist', 'Product Thinker', 'Gamer'].map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-[#4b5365]" />}
              <span className="text-sm font-light text-[#8f95a6]">{role}</span>
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="glass-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Say hello</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="glass-button inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-[#e9ecf3]"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="max-w-xs text-[11px] font-mono-custom leading-relaxed text-[#596273]">
          I turn raw ideas into digital experiences — from concept to product.
        </p>

        <button
          onClick={scrollToAbout}
          onMouseEnter={() => soundSynth.playHoverPop()}
          className="group inline-flex items-center gap-2 text-[11px] font-mono-custom uppercase tracking-[0.28em] text-[#7c8392] transition-colors hover:text-white"
        >
          <span>Scroll</span>
          <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
        </button>
      </motion.div>
    </section>
  );
};
