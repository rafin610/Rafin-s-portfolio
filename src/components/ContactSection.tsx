import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Copy, Check, Github, Twitter, Facebook } from 'lucide-react';
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
        className="label-text mb-20 block"
        style={{ color: 'var(--text-muted)' }}
      >
        10 / Contact & Connect
      </motion.span>

      {/* Big CTA headline */}
      <div className="mb-24">
        <div className="overflow-hidden mb-2">
          <motion.h2
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(44px,8vw,110px)] leading-[0.95] tracking-[-0.03em]"
            style={{ color: 'var(--text-primary)' }}
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
            style={{ color: 'var(--accent-primary)' }}
          >
            Let's build it together.
          </motion.h2>
        </div>
      </div>

      {/* Contact options */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-3xl"
      >
        {/* Email */}
        <div
          className="p-8 rounded-2xl border flex flex-col justify-between gap-6 transition-all duration-300"
          style={{
            backgroundColor: 'var(--surface-overlay)',
            borderColor: 'var(--border-default)'
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-4 h-4 text-[var(--accent-primary)]" />
              <span className="label-text" style={{ color: 'var(--text-muted)' }}>Email Inquiry</span>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="text-[17px] font-light hover:text-[var(--accent-primary)] transition-colors break-all leading-relaxed block"
              style={{ color: 'var(--text-primary)' }}
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
          <div className="flex gap-3 mt-auto pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="flex-1 py-2.5 rounded-full text-[13px] font-medium text-center transition-colors shadow-sm"
              style={{
                backgroundColor: 'var(--text-primary)',
                color: 'var(--bg-primary)'
              }}
            >
              Open Email
            </a>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="px-4 py-2.5 rounded-full border text-[13px] transition-colors cursor-pointer flex items-center gap-2"
              style={{
                borderColor: 'var(--border-default)',
                color: 'var(--text-secondary)'
              }}
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedEmail ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        {/* WhatsApp */}
        <div
          className="p-8 rounded-2xl border flex flex-col justify-between gap-6 transition-all duration-300"
          style={{
            backgroundColor: 'var(--surface-overlay)',
            borderColor: 'var(--border-default)'
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="label-text" style={{ color: 'var(--text-muted)' }}>WhatsApp Chat</span>
            </div>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="text-[17px] font-light hover:text-emerald-400 transition-colors block"
              style={{ color: 'var(--text-primary)' }}
            >
              {PERSONAL_INFO.whatsapp}
            </a>
          </div>
          <div className="flex gap-3 mt-auto pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="flex-1 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-[13px] font-medium text-center transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat Directly</span>
            </a>
            <button
              onClick={() => handleCopy(PERSONAL_INFO.whatsapp, 'phone')}
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="px-4 py-2.5 rounded-full border text-[13px] transition-colors cursor-pointer flex items-center gap-2"
              style={{
                borderColor: 'var(--border-default)',
                color: 'var(--text-secondary)'
              }}
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
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-12 border-t"
        style={{ borderColor: 'var(--border-default)' }}
      >
        {/* Social links */}
        <div className="flex items-center gap-5">
          {[
            { href: PERSONAL_INFO.github, label: 'GitHub', Icon: Github },
            { href: PERSONAL_INFO.facebook, label: 'Facebook', Icon: Facebook },
            { href: PERSONAL_INFO.twitter, label: 'X', Icon: Twitter },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => soundSynth.playHoverPop()}
              className="transition-colors duration-300 cursor-pointer p-2 rounded-full border hover:border-[var(--border-hover)]"
              style={{
                borderColor: 'var(--border-default)',
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--surface-overlay)'
              }}
              aria-label={label}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="text-left md:text-right">
          <p className="font-serif text-[15px] italic mb-1" style={{ color: 'var(--text-secondary)' }}>
            "Still learning. Still building. Still becoming."
          </p>
          <p className="label-text" style={{ color: 'var(--text-muted)' }}>
            Designed & Built by Ahmed Rafin · Bangladesh © {new Date().getFullYear()}
          </p>
        </div>
      </motion.div>

    </section>
  );
};
