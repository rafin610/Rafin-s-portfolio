import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, ChevronRight } from 'lucide-react';
import { soundSynth } from '../utils/soundSynth';

export const PhilosophySection: React.FC = () => {
  const sentences = [
    "I don't want to only consume technology.",
    'I want to understand it.',
    'Build with it.',
    'And someday…',
    'Create something that matters.',
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const nextSentence = () => {
    soundSynth.playChime(587, 0.04);
    setActiveIndex((prev) => (prev + 1) % sentences.length);
  };

  return (
    <section id="philosophy" className="relative z-10 mx-auto max-w-[1400px] px-6 py-40 md:px-16">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block text-[#6d7483]"
      >
        07 / Philosophy
      </motion.span>

      <div className="max-w-4xl">
        <div className="mb-12 flex items-center gap-2">
          {sentences.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIndex(idx);
                soundSynth.playHoverPop();
              }}
              className="cursor-pointer transition-all duration-300"
              aria-label={`Go to line ${idx + 1}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'h-0.5 w-8 bg-white' : 'h-0.5 w-2 bg-[#3a4251] hover:bg-[#60697d]'
                }`}
              />
            </button>
          ))}
          <span className="label-text ml-3 text-[#6d7483]">{activeIndex + 1} / {sentences.length}</span>
        </div>

        <div className="glass-panel mb-14 rounded-[32px] p-8 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -24, filter: 'blur(8px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(30px,5.8vw,74px)] leading-[1.05] tracking-[-0.025em] text-white"
            >
              {sentences[activeIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextSentence}
          onMouseEnter={() => soundSynth.playHoverPop()}
          className="glass-button group inline-flex items-center gap-3 rounded-full px-4 py-2.5 text-[13px] font-medium text-[#e5e9f0]"
        >
          {activeIndex === sentences.length - 1 ? (
            <>
              <RotateCcw className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
              <span>Restart</span>
            </>
          ) : (
            <>
              <span>Next thought</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};
