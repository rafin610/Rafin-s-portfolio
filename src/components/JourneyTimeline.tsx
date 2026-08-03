import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Globe, Gamepad2, Cpu, Code2, Layers, Rocket } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const JourneyTimeline: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<string>(TIMELINE[5].id);

  const getIcon = (iconName: string) => {
    const cls = 'h-4 w-4';
    switch (iconName) {
      case 'Sparkles': return <Sparkles className={cls} />;
      case 'Globe': return <Globe className={cls} />;
      case 'Gamepad2': return <Gamepad2 className={cls} />;
      case 'Cpu': return <Cpu className={cls} />;
      case 'Code2': return <Code2 className={cls} />;
      case 'Layers': return <Layers className={cls} />;
      case 'Rocket': return <Rocket className={cls} />;
      default: return <Sparkles className={cls} />;
    }
  };

  const active = TIMELINE.find((t) => t.id === activeMilestone)!;

  return (
    <section id="journey" className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 md:px-16">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="label-text mb-20 block text-[#6d7483]"
      >
        02 / Journey
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
            Personal Evolution
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[15px] font-light leading-relaxed text-[#8f95a6]"
        >
          Not a finished expert — a lifelong builder on a trajectory forward.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div className="glass-panel rounded-[28px] p-3 sm:p-4">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/20 to-transparent" />
            {TIMELINE.map((item, index) => {
              const isActive = activeMilestone === item.id;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06 }}
                  onClick={() => {
                    setActiveMilestone(item.id);
                    soundSynth.playHoverPop();
                  }}
                  className={`group relative flex w-full items-center gap-4 rounded-[18px] px-4 py-4 text-left transition-all duration-300 ${
                    isActive ? 'bg-white/8' : 'hover:bg-white/6'
                  }`}
                >
                  <div
                    className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'border-[#8b5cf6] bg-[#8b5cf6]/12 text-[#c4b0ff]'
                        : 'border-white/10 text-[#7b8292]'
                    }`}
                  >
                    {getIcon(item.iconName)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-white">{item.title}</span>
                      <span className="label-text text-[#6d7483]">{item.period}</span>
                    </div>
                    <p className="mt-0.5 text-[12px] font-light text-[#7e8694]">{item.subtitle}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="sticky top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone}
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-[30px] p-7 sm:p-8"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/10 text-[#c4b0ff]">
                  {getIcon(active.iconName)}
                </div>
                <div>
                  <span className="label-text text-[#6d7483]">{active.period}</span>
                </div>
              </div>

              <h3 className="mb-2 font-serif text-[clamp(24px,3.4vw,38px)] leading-tight tracking-[-0.02em] text-white">
                {active.title}
              </h3>
              <p className="mb-6 text-[13px] font-mono-custom text-[#8fc5ff]">{active.subtitle}</p>

              <p className="mb-8 text-[15px] font-light leading-relaxed text-[#9ba1ad]">
                {active.description}
              </p>

              <blockquote className="border-l-2 border-[#8b5cf6]/30 pl-5">
                <p className="font-serif text-[17px] italic leading-relaxed text-[#c4b0ff]">
                  “{active.quote}”
                </p>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
