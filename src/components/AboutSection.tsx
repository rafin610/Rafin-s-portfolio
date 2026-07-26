import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      {/* Section label */}
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="label-text text-[#444] mb-20 block"
      >
        01 / About
      </motion.span>

      {/* ── Big statement ────────────────────────────── */}
      <div className="mb-24">
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(38px,6vw,82px)] font-normal text-[#555] leading-[1.05] tracking-[-0.02em]"
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
            className="font-serif text-[clamp(38px,6vw,82px)] font-normal text-white leading-[1.05] tracking-[-0.02em]"
          >
            I'm learning how to <span className="italic" style={{ color: 'var(--color-accent)' }}>build.</span>
          </motion.h2>
        </div>
      </div>

      {/* ── Split layout ─────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left: Portrait + identity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-10"
        >
          {/* Portrait */}
          <div className="relative inline-block">
            <div className="w-48 h-60 rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)]">
              <img
                src={PERSONAL_INFO.portraitPath}
                alt="Ahmed Rafin"
                className="w-full h-full object-cover grayscale contrast-110 brightness-90"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-[#101010] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-2">
              <span className="label-text text-[#555]">Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Bio text */}
          <div className="max-w-md">
            <p className="text-base text-[#999] font-light leading-relaxed mb-6">
              {PERSONAL_INFO.bio}
            </p>
            <blockquote className="border-l border-[rgba(255,255,255,0.1)] pl-5 py-1">
              <p className="font-serif text-[15px] text-[#777] italic leading-relaxed">
                "{PERSONAL_INFO.quote}"
              </p>
            </blockquote>
          </div>
        </motion.div>

        {/* Right: traits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex flex-col gap-6 pt-4"
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
              className="flex gap-6 items-start py-6 border-b border-[rgba(255,255,255,0.05)] last:border-0"
            >
              <span className="label-text text-[#333] mt-1 shrink-0 w-6">{item.num}</span>
              <div>
                <h4 className="text-sm font-medium text-white mb-2">{item.title}</h4>
                <p className="text-[13px] text-[#777] font-light leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
