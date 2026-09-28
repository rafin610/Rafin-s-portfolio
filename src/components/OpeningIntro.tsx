import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { soundSynth } from '../utils/soundSynth';

interface OpeningIntroProps {
  onComplete: () => void;
}

export const OpeningIntro: React.FC<OpeningIntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<number>(0);
  // 0: blank
  // 1: quote appears
  // 2: name reveal

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 800);
    const t2 = setTimeout(() => setStage(2), 3600);
    const t3 = setTimeout(() => onComplete(), 7000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  const skipIntro = () => {
    soundSynth.playChime(660, 0.04);
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Skip */}
      <button
        onClick={skipIntro}
        className="absolute bottom-8 right-8 label-text transition-colors cursor-pointer"
        style={{ color: 'var(--text-muted)' }}
      >
        Skip esc
      </button>

      <AnimatePresence mode="wait">

        {/* Stage 1: philosophical quote */}
        {stage === 1 && (
          <motion.div
            key="quote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="text-center px-8 max-w-2xl"
          >
            <p className="font-serif text-[clamp(22px,4vw,44px)] font-normal leading-relaxed tracking-[-0.01em] italic" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
              "I build, face problems, solve them, and improve."
            </p>
          </motion.div>
        )}

        {/* Stage 2: name */}
        {stage === 2 && (
          <motion.div
            key="identity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center px-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="label-text block mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              Self-Taught Developer & AI Builder
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(48px,11vw,140px)] leading-[0.9] tracking-[-0.03em]"
              style={{ color: 'var(--text-primary)' }}
            >
              Ahmed <span className="italic" style={{ color: 'var(--accent-primary)' }}>Rafin.</span>
            </motion.h1>
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
  );
};
