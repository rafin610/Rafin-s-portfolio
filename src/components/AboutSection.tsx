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
        className="label-text mb-20 block"
        style={{ color: 'var(--text-muted)' }}
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
            className="font-serif text-[clamp(38px,6vw,82px)] font-normal leading-[1.05] tracking-[-0.02em]"
            style={{ color: 'var(--text-secondary)' }}
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
            className="font-serif text-[clamp(38px,6vw,82px)] font-normal leading-[1.05] tracking-[-0.02em]"
            style={{ color: 'var(--text-primary)' }}
          >
            I'm learning how to <span className="italic" style={{ color: 'var(--accent-primary)' }}>build.</span>
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
            <div className="w-48 h-60 rounded-2xl overflow-hidden border" style={{ borderColor: 'var(--border-default)' }}>
              <img
                src={PERSONAL_INFO.portraitPath}
                alt="Ahmed Rafin"
                className="w-full h-full object-cover grayscale contrast-110 brightness-90"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-xl px-4 py-2 border" style={{ 
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--border-default)'
            }}>
              <span className="label-text" style={{ color: 'var(--text-muted)' }}>Bangladesh</span>
            </div>
          </div>

          {/* Bio text */}
          <div className="max-w-md">
            <p className="text-base font-light leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              {PERSONAL_INFO.bio}
            </p>
            <blockquote className="pl-5 py-1 border-l-2" style={{ borderLeftColor: 'var(--border-default)' }}>
              <p className="font-serif text-[15px] italic leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                "{PERSONAL_INFO.quote}"
              </p>
            </blockquote>
          </div>
        </motion.div>

        {/* Right: interests & values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="flex flex-col gap-6 pt-4"
        >
          {/* Interests */}
          <div className="mb-4">
            <span className="label-text block mb-5" style={{ color: 'var(--text-muted)' }}>Interests</span>
            <div className="flex flex-wrap gap-2">
              {["Web Development", "AI", "AI-Assisted Development", "Automation", "Product Building", "Modern Dev Tools"].map((interest) => (
                <span
                  key={interest}
                  className="text-[12px] font-mono-custom px-3 py-1.5 rounded-full border"
                  style={{ color: 'var(--text-secondary)', borderColor: 'var(--border-default)' }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Values */}
          {[
            {
              num: '01',
              title: 'Learn by Building',
              body: 'I don\'t wait until I know everything. I start building, face problems, solve them, and get better along the way.',
            },
            {
              num: '02',
              title: 'Stay Honest',
              body: 'I present what I actually know and what I\'m still learning. No inflated titles, no fake expertise.',
            },
            {
              num: '03',
              title: 'Keep Shipping',
              body: 'Real projects, real users, real feedback. Ideas are only valuable when they become something you can use.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex gap-6 items-start py-6 border-b last:border-0"
              style={{ borderColor: 'var(--border-default)' }}
            >
              <span className="label-text mt-1 shrink-0 w-6" style={{ color: 'var(--text-muted)' }}>{item.num}</span>
              <div>
                <h4 className="text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{item.title}</h4>
                <p className="text-[13px] font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
