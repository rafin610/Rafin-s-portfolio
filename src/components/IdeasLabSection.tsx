import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X } from 'lucide-react';
import { IDEAS } from '../data/portfolioData';
import { IdeaItem } from '../types';
import { soundSynth } from '../utils/soundSynth';

export const IdeasLabSection: React.FC = () => {
  const [selectedIdea, setSelectedIdea] = useState<IdeaItem | null>(null);

  const statusColor: Record<string, string> = {
    'Building':    'text-emerald-400',
    'Exploring':   'text-[var(--color-accent-cool)]',
    'Experimenting': 'text-indigo-400',
    'Thinking':    'text-amber-400',
    'Coming Soon': 'text-rose-400',
  };

  return (
    <section id="ideas" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text text-[#444] mb-20 block"
      >
        05 / Ideas Lab
      </motion.span>

      {/* Header */}
      <div className="mb-20 max-w-2xl">
        <div className="overflow-hidden mb-3">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(36px,5.5vw,72px)] text-white leading-[1.05] tracking-[-0.025em]"
          >
            Ideas Not Yet Finished
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[15px] text-[#666] font-light leading-relaxed"
        >
          A living collection of experiments, raw product hypotheses, and future concepts.
        </motion.p>
      </div>

      {/* Ideas grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(255,255,255,0.04)] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
        {IDEAS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.07 }}
            onClick={() => {
              setSelectedIdea(item);
              soundSynth.playChime(659, 0.04);
            }}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="group bg-[#080808] p-7 flex flex-col justify-between cursor-pointer hover:bg-[rgba(255,255,255,0.025)] transition-all duration-400 min-h-[220px]"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className={`text-[11px] font-mono-custom ${statusColor[item.status] ?? 'text-[#555]'}`}>
                  {item.status}
                </span>
                <span className="label-text text-[#333]">{item.category}</span>
              </div>
              <h3 className="text-[17px] font-medium text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-400 leading-snug">
                {item.title}
              </h3>
              <p className="text-[13px] text-[#555] font-light leading-relaxed">
                {item.tagline}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[#444] group-hover:text-[#888] transition-colors mt-6 text-[12px] font-mono-custom">
              <span>Inspect</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Idea modal */}
      <AnimatePresence>
        {selectedIdea && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl"
            onClick={() => setSelectedIdea(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-[#0c0c0c] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-7">
                <div>
                  <span className={`text-[11px] font-mono-custom block mb-2 ${statusColor[selectedIdea.status] ?? 'text-[#555]'}`}>
                    {selectedIdea.status} · {selectedIdea.category}
                  </span>
                  <h3 className="font-serif text-[26px] text-white tracking-[-0.01em] leading-tight mb-1">{selectedIdea.title}</h3>
                  <p className="text-[14px] text-[#666] font-light italic">"{selectedIdea.tagline}"</p>
                </div>
                <button
                  onClick={() => { soundSynth.playHoverPop(); setSelectedIdea(null); }}
                  className="p-2 text-[#555] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-5 mb-7">
                {[
                  { label: 'The Problem', body: selectedIdea.problem, color: 'text-rose-500' },
                  { label: 'Core Idea',   body: selectedIdea.coreIdea, color: 'text-[var(--color-accent-cool)]' },
                  { label: 'Solution',    body: selectedIdea.solution, color: 'text-emerald-500' },
                ].map(({ label, body, color }) => (
                  <div key={label}>
                    <span className={`label-text ${color} block mb-2`}>{label}</span>
                    <p className="text-[14px] text-[#888] font-light leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-5 border-t border-[rgba(255,255,255,0.05)]">
                {selectedIdea.tags.map(t => (
                  <span key={t} className="text-[11px] font-mono-custom text-[#444] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.05)]">
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
