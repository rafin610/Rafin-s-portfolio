import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, X } from 'lucide-react';
import { IDEAS } from '../data/portfolioData';
import { IdeaItem } from '../types';
import { soundSynth } from '../utils/soundSynth';

export const IdeasLabSection: React.FC = () => {
  const [selectedIdea, setSelectedIdea] = useState<IdeaItem | null>(null);

  const statusColor: Record<string, string> = {
    Building: 'text-emerald-400',
    Exploring: 'text-cyan-400',
    Experimenting: 'text-indigo-400',
    Thinking: 'text-amber-400',
    'Coming Soon': 'text-rose-400',
  };

  return (
    <section id="ideas" className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 md:px-16">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block text-[#6d7483]"
      >
        05 / Ideas Lab
      </motion.span>

      <div className="mb-20 max-w-2xl">
        <div className="mb-3 overflow-hidden">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(34px,5.4vw,72px)] leading-[1.05] tracking-[-0.025em] text-white"
          >
            Ideas Not Yet Finished
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[15px] font-light leading-relaxed text-[#8f95a6]"
        >
          A living collection of experiments, raw product hypotheses, and future concepts.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
            className="glass-panel group flex min-h-[220px] cursor-pointer flex-col justify-between rounded-[24px] p-6 transition-all duration-400"
          >
            <div>
              <div className="mb-5 flex items-center justify-between">
                <span className={`text-[11px] font-mono-custom ${statusColor[item.status] ?? 'text-[#6d7483]'}`}>
                  {item.status}
                </span>
                <span className="label-text text-[#6d7483]">{item.category}</span>
              </div>
              <h3 className="mb-2 text-[17px] font-medium leading-snug text-white transition-colors duration-400 group-hover:text-[#8b5cf6]">
                {item.title}
              </h3>
              <p className="text-[13px] font-light leading-relaxed text-[#8f95a6]">{item.tagline}</p>
            </div>

            <div className="mt-6 flex items-center gap-1.5 text-[12px] font-mono-custom text-[#6d7483] transition-colors group-hover:text-[#c7cad4]">
              <span>Inspect</span>
              <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIdea && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-2xl"
            onClick={() => setSelectedIdea(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-[28px] border border-white/10 bg-[#0b0d12]/90 p-8 shadow-2xl"
            >
              <div className="mb-7 flex items-start justify-between">
                <div>
                  <span className={`mb-2 block text-[11px] font-mono-custom ${statusColor[selectedIdea.status] ?? 'text-[#6d7483]'}`}>
                    {selectedIdea.status} · {selectedIdea.category}
                  </span>
                  <h3 className="mb-1 font-serif text-[26px] leading-tight tracking-[-0.01em] text-white">{selectedIdea.title}</h3>
                  <p className="text-[14px] font-light italic text-[#8f95a6]">“{selectedIdea.tagline}”</p>
                </div>
                <button
                  onClick={() => {
                    soundSynth.playHoverPop();
                    setSelectedIdea(null);
                  }}
                  className="rounded-full p-2 text-[#6d7483] transition-colors hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-7 space-y-5">
                {[
                  { label: 'The Problem', body: selectedIdea.problem, color: 'text-rose-400' },
                  { label: 'Core Idea', body: selectedIdea.coreIdea, color: 'text-cyan-400' },
                  { label: 'Solution', body: selectedIdea.solution, color: 'text-emerald-400' },
                ].map(({ label, body, color }) => (
                  <div key={label}>
                    <span className={`label-text ${color} mb-2 block`}>{label}</span>
                    <p className="text-[14px] font-light leading-relaxed text-[#9ba1ad]">{body}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {selectedIdea.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono-custom text-[#aab0bc]">
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
