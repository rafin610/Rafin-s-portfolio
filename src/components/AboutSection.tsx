import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 md:px-16">
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="label-text mb-20 block text-[#6d7483]"
      >
        01 / About
      </motion.span>

      <div className="mb-16 sm:mb-24">
        <div className="mb-2 overflow-hidden">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(34px,5.6vw,78px)] font-normal leading-[1.05] tracking-[-0.02em] text-[#6d7483]"
          >
            "I'm not just learning to code."
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(34px,5.6vw,78px)] font-normal leading-[1.05] tracking-[-0.02em] text-white"
          >
            I'm learning how to <span className="italic" style={{ color: 'var(--color-accent)' }}>build.</span>
          </motion.h2>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-6"
        >
          <div className="glass-panel overflow-hidden rounded-[30px] p-4 sm:p-6">
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src={PERSONAL_INFO.portraitPath}
                alt="Ahmed Rafin"
                className="h-[360px] w-full object-cover grayscale contrast-110 brightness-90"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#05070b] via-[#05070b]/70 to-transparent px-5 py-6">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-[#dfe3eb]">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[28px] p-6 sm:p-8">
            <p className="mb-6 text-base font-light leading-relaxed text-[#9ba1ad]">
              {PERSONAL_INFO.bio}
            </p>
            <blockquote className="border-l border-white/10 pl-5 py-1">
              <p className="font-serif text-[15px] italic leading-relaxed text-[#c8d0dc]">
                “{PERSONAL_INFO.quote}”
              </p>
            </blockquote>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex flex-col gap-4"
        >
          {[
            {
              num: '01',
              title: 'Curiosity First',
              body: 'Unpacking complex systems down to first principles. I take things apart before I build them.',
            },
            {
              num: '02',
              title: 'Human Purpose',
              body: 'Building software that respects user focus and attention — not just software that works.',
            },
            {
              num: '03',
              title: 'Long Horizon',
              body: 'Creating products with longevity. Thinking about Bangladesh impact and the next decade.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass-panel flex items-start gap-5 rounded-[24px] p-6"
            >
              <span className="label-text mt-1 w-6 shrink-0 text-[#6f7688]">{item.num}</span>
              <div>
                <h4 className="mb-2 text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-[13px] font-light leading-relaxed text-[#8f95a6]">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
