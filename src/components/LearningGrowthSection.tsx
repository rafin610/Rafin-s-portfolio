import React from 'react';
import { motion } from 'motion/react';
import { LEARNING_GOALS } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const LearningGrowthSection: React.FC = () => {
  const stageColor: Record<string, string> = {
    Building: '#34d399',
    Practicing: '#a5b4fc',
    Understanding: '#818cf8',
    Exploring: '#fbbf24',
  };

  return (
    <section id="growth" className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 md:px-16">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block text-[#6d7483]"
      >
        06 / Growth
      </motion.span>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-4 overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(34px,5.4vw,64px)] leading-[1.05] tracking-[-0.025em] text-white"
            >
              Currently Becoming Better At
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] font-light leading-relaxed text-[#8f95a6]"
          >
            Growth is a continuous practice. Core disciplines I'm actively deepening right now.
          </motion.p>
        </div>

        <div className="glass-panel rounded-[28px] p-3 sm:p-4">
          {LEARNING_GOALS.map((item, index) => (
            <motion.div
              key={item.subject}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="group flex flex-col gap-4 rounded-[18px] border-b border-white/10 px-4 py-5 last:border-0 transition-all duration-300 hover:bg-white/6 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="flex shrink-0 items-center gap-3 sm:w-40">
                <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: stageColor[item.stage] ?? '#444' }} />
                <span className="text-[12px] font-mono-custom" style={{ color: stageColor[item.stage] ?? '#555' }}>
                  {item.stage}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="mb-1 text-[15px] font-medium text-white transition-colors duration-400 group-hover:text-[#8b5cf6]">
                  {item.subject}
                </h3>
                <p className="text-[12px] font-light leading-relaxed text-[#7e8694]">{item.focus}</p>
              </div>

              <div className="flex shrink-0 flex-col gap-1 sm:w-28">
                <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progressPercentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.08 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full"
                    style={{ background: stageColor[item.stage] ?? '#444', opacity: 0.7 }}
                  />
                </div>
                <span className="label-text text-[#6d7483]">{item.progressPercentage}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
