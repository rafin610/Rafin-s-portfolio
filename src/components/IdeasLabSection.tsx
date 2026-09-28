import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X, Lightbulb } from 'lucide-react';
import { IDEAS } from '../data/portfolioData';
import { IdeaItem } from '../types';
import { soundSynth } from '../utils/soundSynth';

export const IdeasLabSection: React.FC = () => {
  const [selectedIdea, setSelectedIdea] = useState<IdeaItem | null>(null);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Building':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Exploring':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/20';
      case 'Experimenting':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      case 'Thinking':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      default:
        return 'text-[var(--text-muted)] bg-[var(--surface-overlay)] border-[var(--border-default)]';
    }
  };

  return (
    <section id="ideas" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block"
        style={{ color: 'var(--text-muted)' }}
      >
        07 / Ideas & Experiments
      </motion.span>

      {/* Header */}
      <div className="mb-20 max-w-2xl">
        <div className="overflow-hidden mb-3">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(36px,5.5vw,72px)] leading-[1.05] tracking-[-0.025em]"
            style={{ color: 'var(--text-primary)' }}
          >
            Ideas in Progress
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[15px] font-light leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Raw product hypotheses, architectural experiments, and concepts I'm exploring before full-scale shipping.
        </motion.p>
      </div>

      {/* Ideas grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {IDEAS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            onClick={() => {
              setSelectedIdea(item);
              soundSynth.playChime(659, 0.04);
            }}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="p-8 rounded-2xl border flex flex-col justify-between cursor-pointer transition-all duration-300 min-h-[240px] hover:border-[var(--border-hover)]"
            style={{
              backgroundColor: 'var(--surface-overlay)',
              borderColor: 'var(--border-default)'
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className={`text-[11px] font-mono-custom px-2.5 py-0.5 rounded-full border ${getStatusBadge(item.status)}`}>
                  {item.status}
                </span>
                <span className="label-text" style={{ color: 'var(--text-muted)' }}>{item.category}</span>
              </div>
              <h3 className="text-xl font-medium mb-3 group-hover:text-[var(--accent-primary)] transition-colors leading-snug" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p className="text-[14px] font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.tagline}
              </p>
            </div>

            <div className="flex items-center gap-1.5 transition-colors mt-8 text-xs font-mono-custom pt-4 border-t" style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}>
              <span>Inspect Concept</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Idea modal */}
      <AnimatePresence>
        {selectedIdea && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedIdea(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl border rounded-2xl p-8 shadow-2xl relative"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-default)',
                color: 'var(--text-primary)'
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className={`text-[11px] font-mono-custom px-2.5 py-0.5 rounded-full border inline-block mb-3 ${getStatusBadge(selectedIdea.status)}`}>
                    {selectedIdea.status} · {selectedIdea.category}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl tracking-tight mb-2" style={{ color: 'var(--text-primary)' }}>
                    {selectedIdea.title}
                  </h3>
                  <p className="text-[14px] font-light italic" style={{ color: 'var(--text-secondary)' }}>
                    "{selectedIdea.tagline}"
                  </p>
                </div>
                <button
                  onClick={() => { soundSynth.playHoverPop(); setSelectedIdea(null); }}
                  className="p-2 transition-colors cursor-pointer rounded-full hover:bg-[var(--surface-overlay)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-4 mb-6">
                <div>
                  <span className="label-text block mb-1 text-rose-400">The Problem</span>
                  <p className="text-[14px] font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {selectedIdea.problem}
                  </p>
                </div>
                <div>
                  <span className="label-text block mb-1" style={{ color: 'var(--accent-primary)' }}>Core Idea</span>
                  <p className="text-[14px] font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {selectedIdea.coreIdea}
                  </p>
                </div>
                <div>
                  <span className="label-text block mb-1 text-emerald-400">Proposed Solution</span>
                  <p className="text-[14px] font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {selectedIdea.solution}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
                {selectedIdea.tags.map(t => (
                  <span
                    key={t}
                    className="text-xs font-mono-custom px-3 py-1 rounded-full border"
                    style={{
                      borderColor: 'var(--border-default)',
                      backgroundColor: 'var(--surface-overlay)',
                      color: 'var(--text-muted)'
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
