import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Server, Database, Bot, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const TechStackSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0]?.category || 'Frontend');

  const getCategoryIcon = (category: string) => {
    const cls = "w-3.5 h-3.5";
    switch (category) {
      case 'Frontend': return <Code className={cls} />;
      case 'Backend':  return <Server className={cls} />;
      case 'Database': return <Database className={cls} />;
      case 'AI':       return <Bot className={cls} />;
      case 'Tools':    return <Wrench className={cls} />;
      default:         return <Code className={cls} />;
    }
  };

  const getLevelBadgeStyle = (level: string) => {
    switch (level) {
      case 'Comfortable':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Working Knowledge':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/20';
      case 'Learning':
        return 'text-amber-400 bg-amber-500/10 border-amber-500/20';
      case 'Exploring':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/20';
      default:
        return 'text-[var(--text-muted)] bg-[var(--surface-overlay)] border-[var(--border-default)]';
    }
  };

  const activeCat = SKILL_CATEGORIES.find(c => c.category === activeCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block"
        style={{ color: 'var(--text-muted)' }}
      >
        03 / Stack & Skills
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
              className="font-serif text-[clamp(36px,5.5vw,72px)] leading-[1.05] tracking-[-0.025em]"
              style={{ color: 'var(--text-primary)' }}
            >
              What I Build With
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] font-light max-w-md leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Honest proficiency, real usage, and zero arbitrary percentages. From modern frontend to emerging AI workflows.
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
                    ? 'border-[var(--accent-primary)] bg-[rgba(232,213,183,0.08)]'
                    : 'border-[var(--border-default)] hover:border-[var(--border-hover)]'
                }`}
                style={{
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  backgroundColor: isActive ? 'var(--surface-overlay)' : 'transparent',
                }}
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
          className="p-6 rounded-2xl border"
          style={{
            borderColor: 'var(--border-default)',
            backgroundColor: 'var(--surface-overlay)',
          }}
        >
          <div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6" style={{ borderColor: 'var(--border-default)', color: 'var(--accent-primary)' }}>
            {getCategoryIcon(activeCat.category)}
          </div>
          <h3 className="text-xl font-medium mb-3" style={{ color: 'var(--text-primary)' }}>{activeCat.category}</h3>
          <p className="text-[14px] font-light leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>{activeCat.description}</p>
          <span className="label-text" style={{ color: 'var(--text-muted)' }}>{activeCat.skills.length} tools & competencies</span>
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="group flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 cursor-default"
              style={{
                borderColor: 'var(--border-default)',
                backgroundColor: 'var(--surface-overlay)',
              }}
            >
              <span className="text-sm font-light transition-colors" style={{ color: 'var(--text-primary)' }}>{skill.name}</span>
              <span className={`text-[11px] font-mono-custom px-2 py-0.5 rounded-full border ${getLevelBadgeStyle(skill.level)}`}>
                {skill.level}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
