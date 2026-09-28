import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Bot, Terminal, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AI_WORKFLOW_STEPS, AI_EXPLORATIONS } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const AIWorkflowSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="ai-workflow" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">
      
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block"
        style={{ color: 'var(--text-muted)' }}
      >
        05 / AI & Workflow
      </motion.span>

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 mb-20 items-end">
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
              How I Build With AI
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[15px] font-light leading-relaxed max-w-xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            I don't look at AI as a magic replacement for learning fundamentals. I use it as a high-leverage collaborator to research faster, unblock architecture decisions, automate repetition, and turn complex ideas into tangible software.
          </motion.p>
        </div>

        {/* Explorations Tags */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-6 rounded-2xl border flex flex-col gap-4"
          style={{
            borderColor: 'var(--border-default)',
            backgroundColor: 'var(--surface-overlay)'
          }}
        >
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-xs uppercase tracking-wider font-mono-custom" style={{ color: 'var(--text-muted)' }}>
              Active AI Explorations
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {AI_EXPLORATIONS.map((item, idx) => (
              <span
                key={idx}
                onMouseEnter={() => soundSynth.playHoverPop()}
                className="px-3 py-1.5 rounded-full text-xs font-mono-custom border transition-all duration-200 cursor-default"
                style={{
                  borderColor: 'var(--border-default)',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-secondary)'
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive Workflow Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {AI_WORKFLOW_STEPS.map((step, index) => {
          const isSelected = activeStep === index;
          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => {
                setActiveStep(index);
                soundSynth.playChime(500 + index * 40, 0.04);
              }}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[180px] ${
                isSelected ? 'scale-[1.02]' : 'hover:scale-[1.01]'
              }`}
              style={{
                borderColor: isSelected ? 'var(--accent-primary)' : 'var(--border-default)',
                backgroundColor: isSelected ? 'var(--surface-overlay)' : 'var(--bg-primary)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono-custom px-2.5 py-1 rounded-full border" style={{
                    borderColor: 'var(--border-default)',
                    color: isSelected ? 'var(--accent-primary)' : 'var(--text-muted)',
                    backgroundColor: 'var(--bg-secondary)'
                  }}>
                    Step 0{index + 1}
                  </span>
                  {isSelected ? (
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)]" />
                  ) : (
                    <ArrowRight className="w-4 h-4 opacity-40" style={{ color: 'var(--text-muted)' }} />
                  )}
                </div>
                <h3 className="text-xl font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
                  {step.label}
                </h3>
                <p className="text-[13px] font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono-custom" style={{ borderColor: 'var(--border-default)', color: 'var(--text-muted)' }}>
                <span>Workflow Stage</span>
                <span className="capitalize">{isSelected ? 'Active Focus' : 'Click to inspect'}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
