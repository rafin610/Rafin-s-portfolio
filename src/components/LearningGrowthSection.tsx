import React from 'react';
import { motion } from 'motion/react';
import { LEARNING_GOALS } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const LearningGrowthSection: React.FC = () => {
  const stageColor: Record<string, string> = {
    'Building':     '#34d399',
    'Practicing':   '#a5b4fc',
    'Understanding': '#818cf8',
    'Exploring':    '#fbbf24',
  };

  return (
    <section id="growth" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text text-[#444] mb-20 block"
      >
        06 / Growth
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
              className="font-serif text-[clamp(36px,5.5vw,64px)] text-white leading-[1.05] tracking-[-0.025em]"
            >
              Currently Becoming Better At
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] text-[#666] font-light leading-relaxed"
          >
            Growth is a continuous practice. Core disciplines I'm actively deepening right now.
          </motion.p>
        </div>

        {/* Right: learning list */}
        <div className="flex flex-col">
          {LEARNING_GOALS.map((item, index) => (
            <motion.div
              key={item.subject}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-5 border-b border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.09)] transition-all duration-300"
            >
              {/* Stage dot */}
              <div className="shrink-0 flex items-center gap-3 sm:w-40">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: stageColor[item.stage] ?? '#444' }}
                />
                <span
                  className="text-[12px] font-mono-custom"
                  style={{ color: stageColor[item.stage] ?? '#555' }}
                >
                  {item.stage}
                </span>
              </div>

              {/* Subject + focus */}
              <div className="flex-1">
                <h3 className="text-[15px] font-medium text-white mb-1 group-hover:text-[var(--color-accent)] transition-colors duration-400">
                  {item.subject}
                </h3>
                <p className="text-[12px] text-[#555] font-light leading-relaxed">{item.focus}</p>
              </div>

              {/* Progress bar */}
              <div className="shrink-0 sm:w-28 flex flex-col gap-1">
                <div className="h-0.5 w-full bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progressPercentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.08 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full"
                    style={{ background: stageColor[item.stage] ?? '#444', opacity: 0.6 }}
                  />
                </div>
                <span className="label-text text-[#333]">{item.progressPercentage}%</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
