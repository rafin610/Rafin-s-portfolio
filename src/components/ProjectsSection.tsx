import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { soundSynth } from '../utils/soundSynth';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text text-[#444] mb-20 block"
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
            className="font-serif text-[clamp(36px,5.5vw,72px)] text-white leading-[1.05] tracking-[-0.025em]"
          >
            What I'm Building
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[15px] text-[#666] font-light max-w-xs"
        >
          Each project is an exploration into solving a real problem.
        </motion.p>
      </div>

      {/* Projects list — editorial rows */}
      <div>
        {PROJECTS.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: index * 0.06 }}
            onClick={() => {
              setSelectedProject(proj);
              soundSynth.playChime(523, 0.05);
            }}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-12 py-8 border-b border-[rgba(255,255,255,0.05)] cursor-pointer hover:border-[rgba(255,255,255,0.1)] transition-all duration-500"
          >
            {/* Number */}
            <span className="font-serif text-[clamp(38px,5vw,64px)] text-[#1c1c1c] leading-none tracking-tight shrink-0 group-hover:text-[#2a2a2a] transition-colors duration-500 select-none">
              {proj.number}
            </span>

            {/* Title + meta */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="font-serif text-[clamp(20px,3vw,36px)] text-white tracking-[-0.02em] leading-tight group-hover:text-[var(--color-accent)] transition-colors duration-500">
                  {proj.title}
                </h3>
                <span className="label-text text-[#333]">{proj.category}</span>
              </div>
              <p className="text-[14px] text-[#666] font-light leading-relaxed max-w-xl">
                {proj.description}
              </p>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tags.map(t => (
                  <span key={t} className="text-[11px] font-mono-custom text-[#444] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.05)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Thumbnail */}
            <div className="w-full md:w-48 lg:w-60 aspect-video rounded-xl overflow-hidden shrink-0 border border-[rgba(255,255,255,0.06)] group-hover:border-[rgba(255,255,255,0.12)] transition-all duration-500">
              <img
                src={proj.featuredVisual}
                alt={proj.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 brightness-75 group-hover:brightness-90 scale-105 group-hover:scale-100 transition-all duration-700"
              />
            </div>

            {/* Arrow */}
            <div className="shrink-0 w-9 h-9 rounded-full border border-[rgba(255,255,255,0.07)] flex items-center justify-center text-[#444] group-hover:text-white group-hover:border-[rgba(255,255,255,0.2)] transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
