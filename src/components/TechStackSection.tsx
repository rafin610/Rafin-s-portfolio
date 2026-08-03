import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Terminal, Smartphone } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Foundations');

  const getCategoryIcon = (category: string) => {
    const cls = 'h-3.5 w-3.5';
    switch (category) {
      case 'Foundations': return <Code className={cls} />;
      case 'Development': return <Terminal className={cls} />;
      case 'Mobile': return <Smartphone className={cls} />;
      default: return <Code className={cls} />;
    }
  };

  const activeCat = SKILL_CATEGORIES.find((c) => c.category === activeCategory)!;

  return (
    <section id="skills" className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 md:px-16">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block text-[#6d7483]"
      >
        03 / Stack
      </motion.span>

      <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 overflow-hidden">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(34px,5.4vw,72px)] leading-[1.05] tracking-[-0.025em] text-white"
            >
              What I Build With
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-sm text-[15px] font-light leading-relaxed text-[#8f95a6]"
          >
            Tools chosen for reliability, clarity, and developer ergonomics. No arbitrary percentages.
          </motion.p>
        </div>

        <div className="flex flex-wrap gap-2">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => {
                  setActiveCategory(cat.category);
                  soundSynth.playHoverPop();
                }}
                className={`glass-button flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300 ${
                  isActive ? 'border-white/20 bg-white/12 text-white' : 'text-[#9ba1ad] hover:text-white'
                }`}
              >
                {getCategoryIcon(cat.category)}
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <motion.div
          key={activeCategory + '-info'}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-[28px] p-7"
        >
          <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/8 text-[#9ba1ad]">
            {getCategoryIcon(activeCat.category)}
          </div>
          <h3 className="mb-3 text-lg font-semibold text-white">{activeCat.category}</h3>
          <p className="mb-4 text-[13px] font-light leading-relaxed text-[#8f95a6]">{activeCat.description}</p>
          <span className="label-text text-[#6d7483]">{activeCat.skills.length} tools</span>
        </motion.div>

        <motion.div
          key={activeCategory + '-skills'}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {activeCat.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="glass-chip group flex items-center gap-3 rounded-full px-5 py-3 cursor-default"
            >
              <span className="text-sm font-light text-[#dfe3eb] transition-colors group-hover:text-white">{skill.name}</span>
              <span className="label-text text-[#6d7483] transition-colors group-hover:text-[#acb2bf]">{skill.level}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
