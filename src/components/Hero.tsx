import React from 'react';
import { ArrowRight, Sparkles, Building2, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { VoiceNotePlayer } from './VoiceNotePlayer';

interface HeroProps {
  onOpenInquiry?: () => void;
  onSelectCategory: (cat: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry, onSelectCategory }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-white/5">
      {/* Background Animated Ambient Glow */}
      <div className="pointer-events-none absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-[#ff1e42]/15 blur-3xl animate-ambient-glow" />
      <div className="pointer-events-none absolute -bottom-20 left-10 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl animate-ambient-glow" style={{ animationDelay: '3s' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          {/* Left Column: Typographic Hierarchy with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Top Market Badge & Experience Indicator */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4"
            >
              <span className="text-[#ff1e42] flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#ff1e42] animate-ping" />
                UAE Market Specialist
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>5+ Years Experience</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-slate-400" />
                Available Worldwide & Gulf
              </span>
            </motion.div>

            {/* Main Headline - Bold Impact matching PDF cover */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none mb-6"
            >
              HELLO! <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#ff1e42]">
                I am Husnain.
              </span>
            </motion.h1>

            {/* Lead Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-light"
            >
              A passionate graphic designer who turns ideas into visually striking designs with a keen eye for detail and creativity. I specialize in crafting modern, high-converting visuals for <strong className="text-white font-semibold">UAE Real Estate</strong>, <strong className="text-white font-semibold">Aesthetic Clinics</strong>, <strong className="text-white font-semibold">F&B Brands</strong>, and <strong className="text-white font-semibold">Advertising Campaigns</strong> that connect with people and drive real business growth.
            </motion.p>

            {/* Quick Domain Focus Highlights with Micro-Interactions */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
            >
              <button
                onClick={() => onSelectCategory('real-estate')}
                className="group flex flex-col p-3 rounded-xl border border-white/10 bg-white/[0.03] text-left hover:border-[#ff1e42]/50 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#ff1e42]/5"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>UAE Focus</span>
                  <span className="text-amber-400 text-xs">⭐</span>
                </div>
                <span className="font-semibold text-white text-sm group-hover:text-[#ff1e42] transition-colors">
                  Real Estate
                </span>
                <span className="text-[11px] text-slate-400">Dubai Luxury Ads</span>
              </button>

              <button
                onClick={() => onSelectCategory('healthcare')}
                className="group flex flex-col p-3 rounded-xl border border-white/10 bg-white/[0.03] text-left hover:border-[#ff1e42]/50 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#ff1e42]/5"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>UAE Focus</span>
                  <span className="text-amber-400 text-xs">⭐</span>
                </div>
                <span className="font-semibold text-white text-sm group-hover:text-[#ff1e42] transition-colors">
                  Aesthetic Clinics
                </span>
                <span className="text-[11px] text-slate-400">Ramadan & Promos</span>
              </button>

              <button
                onClick={() => onSelectCategory('branding')}
                className="group flex flex-col p-3 rounded-xl border border-white/10 bg-white/[0.03] text-left hover:border-[#ff1e42]/50 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#ff1e42]/5"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Identity</span>
                </div>
                <span className="font-semibold text-white text-sm group-hover:text-[#ff1e42] transition-colors">
                  Branding
                </span>
                <span className="text-[11px] text-slate-400">Harvest Dine & Logos</span>
              </button>

              <button
                onClick={() => onSelectCategory('packaging')}
                className="group flex flex-col p-3 rounded-xl border border-white/10 bg-white/[0.03] text-left hover:border-[#ff1e42]/50 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-[#ff1e42]/5"
              >
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Retail</span>
                </div>
                <span className="font-semibold text-white text-sm group-hover:text-[#ff1e42] transition-colors">
                  Packaging
                </span>
                <span className="text-[11px] text-slate-400">Pouches, Cans & Boxes</span>
              </button>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#case-studies"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#ff1e42] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#ff1e42]/25 transition-all duration-200 hover:bg-[#e01435] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore 3 In-Depth Case Studies</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <VoiceNotePlayer />
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Portrait & Animated Credentials Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative breathing glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#ff1e42]/40 via-transparent to-blue-500/20 blur-lg opacity-75 animate-ambient-glow" />

              {/* Floating Badge on Portrait */}
              <div className="absolute -top-3 -right-3 z-10 hidden sm:flex items-center gap-1.5 rounded-full bg-[#0a0c12] border border-amber-500/40 px-3.5 py-1.5 text-xs font-bold text-amber-300 shadow-xl animate-float">
                <span>⭐</span>
                <span>UAE Market Specialist</span>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#10121a] shadow-2xl transition-transform duration-300 hover:scale-[1.01]">
                {/* Hero portrait image with studio lighting backdrop */}
                <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-[#1e2338] via-[#111422] to-[#0a0c14] group">
                  {/* Subtle crimson studio ambient backlight */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,30,66,0.25)_0%,transparent_65%)] pointer-events-none" />
                  <img
                    src={DESIGNER_INFO.portraitImage}
                    alt="Husnain Mehboob — Senior Graphic Designer"
                    referrerPolicy="no-referrer"
                    className="relative z-10 h-full w-full object-cover object-top filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Quantitative Metrics Strip below Hero split */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10"
        >
          {DESIGNER_INFO.intro.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition-all duration-200"
            >
              <span className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
