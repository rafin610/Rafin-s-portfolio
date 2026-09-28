import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Sparkles, Compass } from 'lucide-react';
import { LEARNING_GOALS } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const LearningGrowthSection: React.FC = () => {
  const getStageBadge = (stage: string) => {
    switch (stage) {
      case 'Learning':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/20';
      case 'Exploring':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default:
        return 'text-[var(--text-muted)] bg-[var(--surface-overlay)] border-[var(--border-default)]';
    }
  };

  return (
    <section id="growth" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block"
        style={{ color: 'var(--text-muted)' }}
      >
        08 / Learning Focus
      </motion.span>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

        {/* Left: header */}
        <div>
          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(36px,5.5vw,64px)] leading-[1.05] tracking-[-0.025em]"
              style={{ color: 'var(--text-primary)' }}
            >
              Currently Becoming Better At
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] font-light leading-relaxed mb-6"
            style={{ color: 'var(--text-secondary)' }}
          >
            Growth is a continuous discipline. I don't pretend to know everything — these are the core engineering and AI topics I am actively practicing, studying, and implementing into real projects.
          </motion.p>
          <div className="flex items-center gap-2 text-xs font-mono-custom" style={{ color: 'var(--text-muted)' }}>
            <Compass className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>Honest, self-directed curriculum</span>
          </div>
        </div>

        {/* Right: learning list */}
        <div className="flex flex-col gap-3">
          {LEARNING_GOALS.map((item, index) => (
            <motion.div
              key={item.subject}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="group p-6 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:border-[var(--border-hover)]"
              style={{
                borderColor: 'var(--border-default)',
                backgroundColor: 'var(--surface-overlay)'
              }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-medium group-hover:text-[var(--accent-primary)] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                    {item.subject}
                  </h3>
                  <span className={`text-[11px] font-mono-custom px-2.5 py-0.5 rounded-full border ${getStageBadge(item.stage)}`}>
                    {item.stage}
                  </span>
                </div>
                <p className="text-[13px] font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
