import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Radio, Users, Sparkles, BookOpen, Layers } from 'lucide-react';
import { CURRENTLY_BUILDING } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const CurrentlyBuildingSection: React.FC = () => {
  return (
    <section id="building" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block"
        style={{ color: 'var(--text-muted)' }}
      >
        06 / Active Work & Community
      </motion.span>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <div className="overflow-hidden mb-3">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(36px,5.5vw,72px)] leading-[1.05] tracking-[-0.025em]"
              style={{ color: 'var(--text-primary)' }}
            >
              Currently Building & Leading
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] font-light max-w-lg leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Real projects under active development, plus the community space I'm nurturing for fellow self-driven builders in Bangladesh.
          </motion.p>
        </div>

        {/* Live indicator badge */}
        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border shrink-0" style={{
          borderColor: 'var(--border-default)',
          backgroundColor: 'var(--surface-overlay)'
        }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono-custom" style={{ color: 'var(--text-secondary)' }}>
            Active Development Cycle
          </span>
        </div>
      </div>

      {/* Grid of active work */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {CURRENTLY_BUILDING.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:border-[var(--border-hover)]"
            style={{
              borderColor: 'var(--border-default)',
              backgroundColor: 'var(--surface-overlay)'
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono-custom text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {item.status}
                </span>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded transition-colors"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseOver={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'; }}
                    onMouseOut={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--text-primary)' }}>
                {item.name}
              </h3>
              <p className="text-[14px] font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.description}
              </p>
            </div>

            {item.url && (
              <div className="mt-8 pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-custom transition-colors"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <span>Visit Platform</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Community Spotlight Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 md:p-12 rounded-3xl border relative overflow-hidden"
        style={{
          borderColor: 'var(--border-default)',
          backgroundColor: 'var(--surface-overlay)'
        }}
      >
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-xs uppercase tracking-wider font-mono-custom" style={{ color: 'var(--accent-primary)' }}>
              Community Initiative
            </span>
          </div>
          <h3 className="font-serif text-2xl md:text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
            The DropOut College: Building Alternative Paths
          </h3>
          <p className="text-[15px] font-light leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            Education doesn't only happen in lecture halls. I started The DropOut College to unite learners who want to master real-world skills — from modern web coding and AI tools to digital content and creative tech — by actually building projects together.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="https://the-dropout-college.vercel.app/"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-300 inline-flex items-center gap-2"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: '#080808'
              }}
            >
              <span>Explore The Community</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <span className="text-xs font-mono-custom" style={{ color: 'var(--text-muted)' }}>
              Open for builders & self-driven creators
            </span>
          </div>
        </div>
      </motion.div>

    </section>
  );
};
