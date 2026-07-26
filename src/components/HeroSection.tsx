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

      {/* ── Top status bar ───────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex items-center justify-between text-[11px] font-mono-custom text-[#555]"
      >
        <div className="flex items-center gap-2.5">
          <MapPin className="w-3 h-3 text-[#444]" />
          <span>Bangladesh</span>
          <span className="text-[#333]">·</span>
          <span className="text-[#666]">{bdTime || 'UTC+6'}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for collaborations</span>
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
            className="font-serif text-[clamp(52px,12vw,160px)] font-normal text-white leading-[0.9] tracking-[-0.03em]"
          >
            Ahmed
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(52px,12vw,160px)] font-normal text-white leading-[0.9] tracking-[-0.03em] italic"
            style={{ color: 'var(--color-accent)' }}
          >
            Rafin.
          </motion.h1>
        </div>

        {/* Descriptor row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-12"
        >
          {['Developer', 'Creative Technologist', 'Product Thinker', 'Gamer'].map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-[#333]" />}
              <span className="text-sm font-sans text-[#888] font-light">{role}</span>
            </span>
          ))}
        </motion.div>

        {/* CTA row */}
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
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-[#080808] text-sm font-medium hover:bg-[var(--color-accent)] transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Say hello</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm text-[#999] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.18)] hover:text-white transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </motion.div>
      </div>

      {/* ── Bottom scroll indicator ───────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex items-center justify-between"
      >
        <p className="text-[11px] font-mono-custom text-[#444] max-w-xs leading-relaxed">
          I turn raw ideas into digital experiences — from concept to product.
        </p>

        <button
          onClick={scrollToAbout}
          onMouseEnter={() => soundSynth.playHoverPop()}
          className="group flex items-center gap-2 text-[11px] font-mono-custom text-[#555] hover:text-white transition-colors cursor-pointer"
        >
          <span className="tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
};
