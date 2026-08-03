import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { soundSynth } from '../utils/soundSynth';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 md:px-16">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block text-[#6d7483]"
      >
        04 / Projects
      </motion.span>

      <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(34px,5.4vw,72px)] leading-[1.05] tracking-[-0.025em] text-white"
          >
            What I'm Building
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xs text-[15px] font-light leading-relaxed text-[#8f95a6]"
        >
          Each project is an exploration into solving a real problem with clarity and craft.
        </motion.p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {PROJECTS.map((proj, index) => (
          <motion.article
            key={proj.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: index * 0.06 }}
            onClick={() => {
              setSelectedProject(proj);
              soundSynth.playChime(523, 0.05);
            }}
            onMouseEnter={() => soundSynth.playHoverPop()}
            className="glass-panel group relative cursor-pointer overflow-hidden rounded-[28px] p-4 sm:p-5"
          >
            <div className="relative overflow-hidden rounded-[22px]">
              <img
                src={proj.featuredVisual}
                alt={proj.title}
                className="h-56 w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06070a] via-[#06070a]/40 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-[#dfe3eb] backdrop-blur-xl">
                {proj.number}
              </div>
            </div>

            <div className="px-1 pb-1 pt-5">
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <h3 className="font-serif text-[clamp(20px,3vw,28px)] leading-tight text-white transition-colors duration-500 group-hover:text-[#8b5cf6]">
                  {proj.title}
                </h3>
                <span className="rounded-full border border-white/10 bg-white/8 px-2.5 py-1 text-[11px] uppercase tracking-[0.24em] text-[#aab0bc]">
                  {proj.category}
                </span>
              </div>
              <p className="mb-4 text-[14px] font-light leading-relaxed text-[#8f95a6]">
                {proj.description}
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono-custom text-[#aab0bc]">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-sm text-[#c7cad4]">
                <span className="text-[12px] uppercase tracking-[0.28em] text-[#6d7483]">Open case study</span>
                <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-[12px] transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/8">
                  View
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
