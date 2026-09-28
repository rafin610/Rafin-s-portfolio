import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block"
        style={{ color: 'var(--text-muted)' }}
      >
        04 / Projects
      </motion.span>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(36px,5.5vw,72px)] leading-[1.05] tracking-[-0.025em]"
            style={{ color: 'var(--text-primary)' }}
          >
            What I'm Building
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[15px] font-light max-w-xs"
          style={{ color: 'var(--text-secondary)' }}
        >
          Real projects, real problems. Each one taught me something new.
        </motion.p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="group relative flex flex-col p-6 sm:p-7 rounded-2xl border transition-all duration-500 hover:border-[var(--border-hover)]"
            style={{
              borderColor: 'var(--border-default)',
              backgroundColor: 'var(--surface-overlay)',
            }}
          >
            {/* Top row: number + status */}
            <div className="flex items-center justify-between mb-5">
              <span className="font-serif text-2xl leading-none tracking-tight" style={{ color: 'var(--text-muted)' }}>
                {proj.number}
              </span>
              <span
                className="text-[10px] font-mono-custom px-2.5 py-1 rounded-full border"
                style={{ color: 'var(--text-muted)', borderColor: 'var(--border-default)' }}
              >
                {proj.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl sm:text-2xl tracking-[-0.02em] leading-tight mb-2 transition-colors duration-500 group-hover:text-[var(--accent-primary)]" style={{ color: 'var(--text-primary)' }}>
              {proj.title}
            </h3>

            {/* Category */}
            <span className="label-text mb-3" style={{ color: 'var(--text-muted)' }}>{proj.category}</span>

            {/* Description */}
            <p className="text-[13px] font-light leading-relaxed mb-5 flex-1" style={{ color: 'var(--text-secondary)' }}>
              {proj.description}
            </p>

            {/* Key features */}
            <div className="mb-5">
              {proj.keyFeatures.slice(0, 3).map((feat, i) => (
                <div key={i} className="flex items-start gap-2 mb-1.5">
                  <span className="text-[10px] mt-1 shrink-0" style={{ color: 'var(--accent-primary)' }}>✦</span>
                  <span className="text-[11px] font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>{feat}</span>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {proj.tags.map(t => (
                <span
                  key={t}
                  className="text-[10px] font-mono-custom px-2.5 py-1 rounded-full border"
                  style={{ color: 'var(--text-muted)', borderColor: 'var(--border-default)' }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 mt-auto pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundSynth.playHoverPop()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] font-medium transition-all duration-300"
                  style={{
                    backgroundColor: 'var(--button-primary-bg)',
                    color: 'var(--button-primary-text)',
                  }}
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Live Demo</span>
                </a>
              )}
              {proj.githubUrl && (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundSynth.playHoverPop()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[12px] border transition-all duration-300"
                  style={{
                    color: 'var(--text-secondary)',
                    borderColor: 'var(--button-secondary-border)',
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)';
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--button-secondary-border)';
                  }}
                >
                  <Github className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
              )}
              <div className="ml-auto">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" style={{ color: 'var(--text-muted)' }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
