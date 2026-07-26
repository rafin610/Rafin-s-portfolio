import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Globe, Gamepad2, Cpu, Code2, Layers, Rocket } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const JourneyTimeline: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<string>(TIMELINE[5].id);

  const getIcon = (iconName: string) => {
    const cls = "w-4 h-4";
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

  const active = TIMELINE.find(t => t.id === activeMilestone)!;

  return (
    <section id="journey" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="label-text text-[#444] mb-20 block"
      >
        02 / Journey
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
            Personal Evolution
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[15px] text-[#666] font-light leading-relaxed"
        >
          Not a finished expert — a lifelong builder on a trajectory forward.
        </motion.p>
      </div>

      {/* Two-column layout: steps + detail */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16 items-start">

        {/* Left: Step list */}
        <div className="flex flex-col">
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
                className={`group flex items-center gap-5 py-4 border-b border-[rgba(255,255,255,0.05)] text-left w-full cursor-pointer transition-all duration-300 ${
                  isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                }`}
              >
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isActive
                    ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[rgba(232,213,183,0.07)]'
                    : 'border-[rgba(255,255,255,0.1)] text-[#555]'
                }`}>
                  {getIcon(item.iconName)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white">{item.title}</span>
                    <span className="label-text text-[#333]">{item.period}</span>
                  </div>
                  <p className="text-[12px] text-[#555] font-light mt-0.5">{item.subtitle}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right: Detail panel */}
        <div className="sticky top-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMilestone}
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(6px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)]"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl border border-[rgba(232,213,183,0.2)] bg-[rgba(232,213,183,0.05)] flex items-center justify-center text-[var(--color-accent)]">
                  {getIcon(active.iconName)}
                </div>
                <div>
                  <span className="label-text text-[#444]">{active.period}</span>
                </div>
              </div>

              <h3 className="font-serif text-[clamp(26px,3.5vw,40px)] text-white mb-2 tracking-[-0.02em] leading-tight">
                {active.title}
              </h3>
              <p className="text-[13px] text-[#555] font-mono-custom mb-6">{active.subtitle}</p>

              <p className="text-[15px] text-[#999] font-light leading-relaxed mb-8">
                {active.description}
              </p>

              <blockquote className="border-l-2 border-[rgba(232,213,183,0.3)] pl-5">
                <p className="font-serif text-[17px] text-[var(--color-accent)] italic leading-relaxed">
                  "{active.quote}"
                </p>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
