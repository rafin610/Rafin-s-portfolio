import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Pause, Volume2, BookOpen, FileText, CheckCircle2, Shield, Trophy, Sparkles, ExternalLink, RefreshCw } from 'lucide-react';
import { Project } from '../types';
import { soundSynth } from '../utils/soundSynth';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Beatflow state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentTrack, setCurrentTrack] = useState('Atmospheric Waves');

  // BoiBazar state
  const [selectedBook, setSelectedBook] = useState('Deyal by Humayun Ahmed');
  const [sampleOpened, setSampleOpened] = useState(false);

  // PDF Reader state
  const [summaryGenerated, setSummaryGenerated] = useState(false);

  // Nafs state
  const [habitsCompleted, setHabitsCompleted] = useState<Record<string, boolean>>({
    meditation: true,
    deepWork: false,
    noSocialMedia: true
  });

  if (!project) return null;

  const toggleHabit = (id: string) => {
    soundSynth.playHoverPop();
    setHabitsCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-2xl overflow-y-auto">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl bg-neutral-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto text-neutral-100"
      >
        {/* Header Modal Bar */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-neutral-900/60 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
              Project {project.number}
            </span>
            <span className="text-sm font-mono text-neutral-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={() => {
              soundSynth.playHoverPop();
              onClose();
            }}
            className="p-2.5 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Main Title & Headline */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl text-sky-300 font-light italic mb-4">
              “{project.headline}”
            </p>
            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* INTERACTIVE DEMO MODULE BY TYPE */}
          <div className="p-6 rounded-2xl bg-neutral-900/90 border border-white/10">
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-sky-300">
                  Interactive Concept Simulator
                </span>
              </div>
              <span className="text-[10px] font-mono text-neutral-500">Live Sandbox</span>
            </div>

            {/* 1. BEATFLOW DEMO */}
            {project.liveDemoType === 'beatflow' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col items-center text-center">
                  
                  {/* Waveform Visualizer */}
                  <div className="w-full h-16 flex items-center justify-center gap-1 my-4">
                    {[30, 60, 40, 90, 70, 100, 45, 80, 60, 95, 30, 85, 50, 75, 40, 90, 65, 30].map((h, i) => (
                      <div
                        key={i}
                        className={`w-1.5 rounded-full transition-all duration-300 ${
                          isPlayingAudio ? 'bg-sky-400 animate-pulse' : 'bg-neutral-800'
                        }`}
                        style={{
                          height: isPlayingAudio ? `${Math.min(100, h * (Math.random() * 0.5 + 0.8))}%` : '20%'
                        }}
                      />
                    ))}
                  </div>

                  <span className="text-xs font-mono text-neutral-400 mb-1">Track: {currentTrack}</span>
                  <p className="text-xs text-sky-300 font-mono italic mb-6">Synced Lyrics: "Floating in the silence of digital space..."</p>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => {
                        const newPlaying = !isPlayingAudio;
                        setIsPlayingAudio(newPlaying);
                        if (newPlaying) soundSynth.playChime(523, 0.05);
                      }}
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-sky-400 text-black font-medium text-xs hover:bg-sky-300 transition-colors cursor-pointer"
                    >
                      {isPlayingAudio ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black" />}
                      <span>{isPlayingAudio ? 'Pause Audio Pulse' : 'Play Audio Pulse'}</span>
                    </button>

                    <button
                      onClick={() => {
                        soundSynth.playHoverPop();
                        setCurrentTrack(prev => prev === 'Atmospheric Waves' ? 'Lo-Fi Dhaka Rain' : 'Atmospheric Waves');
                      }}
                      className="p-3 rounded-full bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white text-xs font-mono"
                    >
                      Switch Track
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 2. BOIBAZAR DEMO */}
            {project.liveDemoType === 'boibazar' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { title: 'Deyal', author: 'Humayun Ahmed', genre: 'History / Drama' },
                    { title: 'Taranath Tantrik', author: 'Bibhutibhushan', genre: 'Mystery' },
                    { title: 'Kobi', author: 'Tarashankar', genre: 'Classic Literature' }
                  ].map((book) => (
                    <div
                      key={book.title}
                      onClick={() => {
                        setSelectedBook(`${book.title} by ${book.author}`);
                        soundSynth.playHoverPop();
                      }}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedBook.includes(book.title)
                          ? 'bg-amber-950/40 border-amber-500/50 text-amber-200'
                          : 'bg-neutral-950 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <BookOpen className="w-4 h-4 text-amber-400 mb-2" />
                      <h4 className="text-sm font-medium text-white">{book.title}</h4>
                      <p className="text-xs text-neutral-400 font-mono">{book.author}</p>
                      <span className="text-[10px] text-amber-400/80 font-mono mt-2 block">{book.genre}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-neutral-950 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-neutral-400 block">Selected Title:</span>
                    <span className="text-sm font-medium text-white">{selectedBook}</span>
                  </div>

                  <button
                    onClick={() => {
                      setSampleOpened(!sampleOpened);
                      soundSynth.playChime(587, 0.04);
                    }}
                    className="px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono hover:bg-amber-500/30 transition-colors cursor-pointer"
                  >
                    {sampleOpened ? 'Close Sample Chapter' : 'Read Chapter Sample'}
                  </button>
                </div>

                {sampleOpened && (
                  <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-500/30 font-serif text-sm text-neutral-200 leading-relaxed italic">
                    “The evening mist settled over the old town streets. In the quiet courtyard, pages turned slowly under the soft amber light...”
                  </div>
                )}
              </div>
            )}

            {/* 3. SMART PDF READER DEMO */}
            {project.liveDemoType === 'pdfreader' && (
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-neutral-950 border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                    <FileText className="w-4 h-4" />
                    <span>Sample Research Paper: "Distributed Cloud Systems in South Asia.pdf"</span>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-900 border border-white/5 text-xs text-neutral-300 font-mono leading-relaxed mb-4">
                    "Cloud network latency in emerging regional nodes can be optimized by 38% using localized caching layers..."
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSummaryGenerated(true);
                        soundSynth.playChime(659, 0.04);
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500 text-black text-xs font-medium hover:bg-cyan-400 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Generate AI Summary</span>
                    </button>

                    <span className="text-xs font-mono text-neutral-500">Bangla Translation Ready</span>
                  </div>

                  {summaryGenerated && (
                    <div className="mt-4 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 text-xs text-cyan-200 font-mono space-y-1">
                      <p className="font-semibold text-white">Core Insight Breakdown:</p>
                      <p>• Local caching reduces packet latency significantly.</p>
                      <p>• Edge deployments improve reliability for Bangladeshi developers.</p>
                      <p>• Bangla OCR translation: "ক্লাউড নেটওয়ার্ক লেটেন্সি ৩৮% কমানো সম্ভব।"</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 4. NAFS CONTROL DEMO */}
            {project.liveDemoType === 'nafs' && (
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-neutral-950 border border-white/10">
                  <span className="text-xs font-mono text-emerald-400 block mb-3">Daily Discipline Checklist:</span>
                  
                  <div className="space-y-2">
                    {[
                      { id: 'meditation', label: 'Morning Reflection & Gratitude' },
                      { id: 'deepWork', label: '2 Hours Deep Uninterrupted Code' },
                      { id: 'noSocialMedia', label: 'Zero Doomscrolling Before 6 PM' }
                    ].map((item) => (
                      <div
                        key={item.id}
                        onClick={() => toggleHabit(item.id)}
                        className="p-3 rounded-xl bg-neutral-900 border border-white/5 hover:border-emerald-500/40 flex items-center justify-between cursor-pointer"
                      >
                        <span className="text-xs font-mono text-neutral-200">{item.label}</span>
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${
                          habitsCompleted[item.id] ? 'bg-emerald-500 border-emerald-400' : 'border-neutral-700'
                        }`}>
                          {habitsCompleted[item.id] && <CheckCircle2 className="w-3.5 h-3.5 text-black" />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 5. RED PARADOX DEMO */}
            {project.liveDemoType === 'redparadox' && (
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-neutral-950 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-rose-400 flex items-center gap-1.5">
                      <Trophy className="w-4 h-4 text-rose-400" />
                      <span>Red Paradox Roster Showcase</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">Match Ready</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-neutral-900 border border-white/5">
                      <span className="text-white font-semibold block">Rafin (Cap)</span>
                      <span className="text-neutral-500 text-[10px]">IGL / Strategy</span>
                    </div>
                    <div className="p-3 rounded-xl bg-neutral-900 border border-white/5">
                      <span className="text-white font-semibold block">Nabil</span>
                      <span className="text-neutral-500 text-[10px]">Entry Fragger</span>
                    </div>
                    <div className="p-3 rounded-xl bg-neutral-900 border border-white/5">
                      <span className="text-white font-semibold block">Sami</span>
                      <span className="text-neutral-500 text-[10px]">Support / Smoke</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Key Features Bullet List */}
          <div>
            <h3 className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">
              Core Technical Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-neutral-900/60 border border-white/5 text-xs font-mono text-neutral-300 flex items-start gap-2.5">
                  <span className="text-sky-400 mt-0.5">✦</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            {project.tags.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-400">
                {t}
              </span>
            ))}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-neutral-900/80 flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-500">
            Concept by Ahmed Rafin
          </span>

          <button
            onClick={() => {
              soundSynth.playHoverPop();
              onClose();
            }}
            className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-medium hover:bg-sky-200 transition-colors cursor-pointer"
          >
            Close Inspector
          </button>
        </div>

      </motion.div>
    </div>
  );
};
