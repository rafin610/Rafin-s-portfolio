import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCcw, ChevronRight } from 'lucide-react';
import { soundSynth } from '../utils/soundSynth';

export const PhilosophySection: React.FC = () => {
  const sentences = [
    "I don't want to only consume technology.",
    "I want to understand it.",
    "Build with it.",
    "And someday…",
    "Create something that matters.",
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
        className="label-text text-[#444] mb-20 block"
      >
        07 / Philosophy
      </motion.span>

      <div className="max-w-4xl">

        {/* Progress indicator */}
        <div className="flex items-center gap-2 mb-12">
          {sentences.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setActiveIndex(idx); soundSynth.playHoverPop(); }}
              className="cursor-pointer transition-all duration-300"
              aria-label={`Go to line ${idx + 1}`}
            >
              <span className={`block rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-8 h-0.5 bg-white'
                  : 'w-2 h-0.5 bg-[#333] hover:bg-[#555]'
              }`} />
            </button>
          ))}
          <span className="label-text text-[#333] ml-3">
            {activeIndex + 1} / {sentences.length}
          </span>
        </div>

        {/* Quote display */}
        <div className="min-h-[120px] sm:min-h-[150px] flex items-start mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(32px,6vw,80px)] text-white leading-[1.05] tracking-[-0.025em]"
            >
              {sentences[activeIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next button */}
        <button
          onClick={nextSentence}
          onMouseEnter={() => soundSynth.playHoverPop()}
          className="group inline-flex items-center gap-3 text-[13px] text-[#555] hover:text-white transition-colors duration-300 cursor-pointer"
        >
          {activeIndex === sentences.length - 1 ? (
            <>
              <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              <span>Restart</span>
            </>
          ) : (
            <>
              <span>Next thought</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </section>
  );
};
