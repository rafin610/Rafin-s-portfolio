import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, ChevronRight } from 'lucide-react';
import { soundSynth } from '../utils/soundSynth';

export const PhilosophySection: React.FC = () => {
  const sentences = [
    "I don't wait until I know everything to start building.",
    "Learn → Build → Break → Fix → Ship.",
    "Every bug taught me more than any tutorial could.",
    "Curiosity turns everyday problems into real projects.",
    "Still learning. Still building. Still becoming.",
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextSentence = () => {
    soundSynth.playChime(587, 0.04);
    setActiveIndex((prev) => (prev + 1) % sentences.length);
  };

  return (
    <section id="philosophy" className="relative py-40 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block"
        style={{ color: 'var(--text-muted)' }}
      >
        09 / Philosophy
      </motion.span>

      <div className="max-w-4xl">

        {/* Progress indicator */}
        <div className="flex items-center gap-2 mb-12">
          {sentences.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setActiveIndex(idx); soundSynth.playHoverPop(); }}
              className="cursor-pointer transition-all duration-300 py-2"
              aria-label={`Go to line ${idx + 1}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 h-0.5 ${
                  activeIndex === idx ? 'w-8 bg-[var(--text-primary)]' : 'w-2 bg-[var(--text-muted)]'
                }`}
              />
            </button>
          ))}
          <span className="label-text ml-3" style={{ color: 'var(--text-muted)' }}>
            0{activeIndex + 1} / 0{sentences.length}
          </span>
        </div>

        {/* Quote display */}
        <div className="min-h-[140px] sm:min-h-[180px] flex items-start mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -25, filter: 'blur(6px)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(32px,5.5vw,72px)] leading-[1.08] tracking-[-0.025em]"
              style={{ color: 'var(--text-primary)' }}
            >
              {sentences[activeIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next button */}
        <button
          onClick={nextSentence}
          onMouseEnter={() => soundSynth.playHoverPop()}
          className="group inline-flex items-center gap-3 text-[13px] font-mono-custom cursor-pointer transition-colors duration-300 px-5 py-2.5 rounded-full border"
          style={{
            borderColor: 'var(--border-default)',
            backgroundColor: 'var(--surface-overlay)',
            color: 'var(--text-secondary)'
          }}
        >
          {activeIndex === sentences.length - 1 ? (
            <>
              <RotateCcw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500 text-[var(--accent-primary)]" />
              <span>Restart Loop</span>
            </>
          ) : (
            <>
              <span>Next Core Value</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[var(--accent-primary)]" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};
