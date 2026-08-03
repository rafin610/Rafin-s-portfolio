import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Copy, Check, Github, Linkedin, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundSynth } from '../utils/soundSynth';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    soundSynth.playChime(659, 0.05);
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-[1400px] px-6 py-32 md:px-16">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text mb-20 block text-[#6d7483]"
      >
        08 / Contact
      </motion.span>

      <div className="mb-16 sm:mb-24">
        <div className="mb-2 overflow-hidden">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(40px,7.5vw,108px)] leading-[0.95] tracking-[-0.03em] text-white"
          >
            Have an idea?
          </motion.h2>
        </div>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(40px,7.5vw,108px)] italic leading-[0.95] tracking-[-0.03em]"
            style={{ color: 'var(--color-accent)' }}
          >
            Let's build it.
          </motion.h2>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-2"
      >
        <div className="glass-panel flex flex-col gap-6 rounded-[28px] p-7">
          <div>
            <span className="label-text mb-4 block text-[#6d7483]">Email</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="block break-all text-[17px] font-light leading-relaxed text-white transition-colors hover:text-[#8b5cf6]"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
          <div className="mt-auto flex gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="glass-button flex-1 rounded-full px-4 py-2.5 text-center text-[13px] font-medium text-white"
            >
              Open Email
            </a>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="glass-button flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium text-[#dfe3eb]"
            >
              {copiedEmail ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              {copiedEmail ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        <div className="glass-panel flex flex-col gap-6 rounded-[28px] p-7">
          <div>
            <span className="label-text mb-4 block text-[#6d7483]">WhatsApp</span>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="block text-[17px] font-light leading-relaxed text-white transition-colors hover:text-emerald-400"
            >
              {PERSONAL_INFO.whatsapp}
            </a>
          </div>
          <div className="mt-auto flex gap-3">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="glass-button flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium text-white"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.whatsapp, 'phone')}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="glass-button flex items-center gap-2 rounded-full px-4 py-2.5 text-[13px] font-medium text-[#dfe3eb]"
            >
              {copiedPhone ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
              {copiedPhone ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-12 md:flex-row md:items-center"
      >
        <div className="flex items-center gap-5">
          {[
            { href: PERSONAL_INFO.github, label: 'GitHub', Icon: Github },
            { href: PERSONAL_INFO.linkedin, label: 'LinkedIn', Icon: Linkedin },
            { href: PERSONAL_INFO.twitter, label: 'Twitter', Icon: Twitter },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="text-[#6d7483] transition-colors duration-300 hover:text-white"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="text-left md:text-right">
          <p className="mb-1 font-serif text-[15px] italic text-[#c8d0dc]">“Still learning. Still building. Still becoming.”</p>
          <p className="label-text text-[#6d7483]">
            Designed & Built by Ahmed Rafin · Bangladesh © {new Date().getFullYear()}
          </p>
        </div>
      </motion.div>
    </section>
  );
};
