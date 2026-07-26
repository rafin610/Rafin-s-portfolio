import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Terminal, Smartphone } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Foundations');

  const getCategoryIcon = (category: string) => {
    const cls = "w-3.5 h-3.5";
    switch (category) {
      case 'Foundations': return <Code className={cls} />;
      case 'Development': return <Terminal className={cls} />;
      case 'Mobile':      return <Smartphone className={cls} />;
      default:            return <Code className={cls} />;
    }
  };

  const activeCat = SKILL_CATEGORIES.find(c => c.category === activeCategory)!;

  return (
    <section id="skills" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text text-[#444] mb-20 block"
      >
        03 / Stack
      </motion.span>

      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
        <div>
          <div className="overflow-hidden mb-3">
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[clamp(36px,5.5vw,72px)] text-white leading-[1.05] tracking-[-0.025em]"
            >
              What I Build With
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] text-[#666] font-light max-w-sm"
          >
            Tools chosen for reliability and developer ergonomics. No arbitrary percentages.
          </motion.p>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => { setActiveCategory(cat.category); soundSynth.playHoverPop(); }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-light transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'border-[rgba(255,255,255,0.15)] text-white bg-white/5'
                    : 'border-[rgba(255,255,255,0.06)] text-[#666] hover:text-[#aaa]'
                }`}
              >
                {getCategoryIcon(cat.category)}
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills display */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">

        {/* Category info */}
        <motion.div
          key={activeCategory + '-info'}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-2"
        >
          <div className="w-10 h-10 rounded-xl border border-[rgba(255,255,255,0.07)] flex items-center justify-center text-[#666] mb-6">
            {getCategoryIcon(activeCat.category)}
          </div>
          <h3 className="text-lg font-medium text-white mb-3">{activeCat.category}</h3>
          <p className="text-[13px] text-[#666] font-light leading-relaxed mb-4">{activeCat.description}</p>
          <span className="label-text text-[#333]">{activeCat.skills.length} tools</span>
        </motion.div>

        {/* Skill pills grid */}
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="group flex items-center gap-3 px-5 py-3 rounded-full border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(255,255,255,0.14)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300 cursor-default"
            >
              <span className="text-sm text-[#ccc] font-light group-hover:text-white transition-colors">{skill.name}</span>
              <span className="label-text text-[#333] group-hover:text-[#555] transition-colors">{skill.level}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
