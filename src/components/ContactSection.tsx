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
    <section id="contact" className="relative py-32 px-6 md:px-16 max-w-[1400px] mx-auto z-10">

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="label-text text-[#444] mb-20 block"
      >
        08 / Contact
      </motion.span>

      {/* Big CTA headline */}
      <div className="mb-24">
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(44px,8vw,110px)] text-white leading-[0.95] tracking-[-0.03em]"
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
            className="font-serif text-[clamp(44px,8vw,110px)] italic leading-[0.95] tracking-[-0.03em]"
            style={{ color: 'var(--color-accent)' }}
          >
            Let's build it.
          </motion.h2>
        </div>
      </div>

      {/* Contact options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.05)] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] mb-16 max-w-3xl"
      >
        {/* Email */}
        <div className="bg-[#080808] p-8 flex flex-col gap-6 hover:bg-[rgba(255,255,255,0.02)] transition-colors group">
          <div>
            <span className="label-text text-[#444] block mb-4">Email</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="text-[17px] text-white font-light hover:text-[var(--color-accent)] transition-colors break-all leading-relaxed block"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
          <div className="flex gap-3 mt-auto">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="flex-1 py-2.5 rounded-full bg-white text-[#080808] text-[13px] font-medium text-center hover:bg-[var(--color-accent)] transition-colors"
            >
              Open Email
            </a>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="px-4 py-2.5 rounded-full border border-[rgba(255,255,255,0.08)] text-[13px] text-[#666] hover:text-white transition-colors cursor-pointer flex items-center gap-2"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedEmail ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="bg-[#080808] p-8 flex flex-col gap-6 hover:bg-[rgba(255,255,255,0.02)] transition-colors group">
          <div>
            <span className="label-text text-[#444] block mb-4">WhatsApp</span>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="text-[17px] text-white font-light hover:text-emerald-400 transition-colors block"
            >
              {PERSONAL_INFO.whatsapp}
            </a>
          </div>
          <div className="flex gap-3 mt-auto">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="flex-1 py-2.5 rounded-full bg-emerald-500 text-[#080808] text-[13px] font-medium text-center hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.whatsapp, 'phone')}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="px-4 py-2.5 rounded-full border border-[rgba(255,255,255,0.08)] text-[13px] text-[#666] hover:text-white transition-colors cursor-pointer flex items-center gap-2"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedPhone ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-12 border-t border-[rgba(255,255,255,0.05)]"
      >
        {/* Social links */}
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
              className="text-[#444] hover:text-white transition-colors duration-300 cursor-pointer"
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="text-right">
          <p className="font-serif text-[15px] text-[#555] italic mb-1">
            "Still learning. Still building. Still becoming."
          </p>
          <p className="label-text text-[#333]">
            Designed & Built by Ahmed Rafin · Bangladesh © {new Date().getFullYear()}
          </p>
        </div>
      </motion.div>

    </section>
  );
};
