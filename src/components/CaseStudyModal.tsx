import React from 'react';
import { X, CheckCircle2, TrendingUp, Sparkles, Type, Quote, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { CaseStudy, DESIGNER_INFO } from '../data/portfolioData';

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  onOpenInquiry: (projectName?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose, onOpenInquiry }) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl rounded-3xl border border-white/15 bg-[#0e1017] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#0a0b10]">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="font-mono text-[#ff1e42] font-bold">CASE STUDY {study.number}</span>
            <span aria-hidden="true">·</span>
            <span className="text-white font-medium">{study.client}</span>
            <span aria-hidden="true">·</span>
            <span>{study.sector}</span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Hero Banner */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-xl">
            <img
              src={study.heroImage}
              alt={study.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded border border-amber-500/30">
                {study.sector}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mt-2">
                {study.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 mt-1">
                {study.subtitle}
              </p>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            {study.results.map((res, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#ff1e42] tabular-nums">
                  {res.metric}
                </span>
                <span className="text-xs text-slate-400 mt-0.5">
                  {res.label}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Goal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-white/5 bg-[#12141d]">
              <h4 className="text-xs font-bold tracking-wider text-rose-400 uppercase mb-2">
                The Client's Problem
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {study.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-[#12141d]">
              <h4 className="text-xs font-bold tracking-wider text-amber-400 uppercase mb-2">
                Strategic Goal
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {study.clientGoal}
              </p>
            </div>
          </div>

          {/* Design Strategy & Creative Direction */}
          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-white/10 bg-[#0e1017]">
              <h4 className="text-xs font-bold tracking-wider text-emerald-400 uppercase mb-2">
                Design Strategy & Execution
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {study.designStrategy}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#0e1017]">
              <h4 className="text-xs font-bold tracking-wider text-blue-400 uppercase mb-2">
                Creative Direction & Visual Language
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {study.creativeDirection}
              </p>
            </div>
          </div>

          {/* Typography & Brand Colors (Directly matching PDF page 2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/10">
            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-1.5">
                <Type className="h-4 w-4" />
                <span>Typography System</span>
              </h4>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="text-lg font-bold text-white mb-1">
                  {study.typography.family}
                </div>
                <div className="text-xs text-slate-400 mb-2 font-mono">
                  {study.typography.sample}
                </div>
                <div className="text-[11px] text-[#ff1e42] font-semibold">
                  Role: {study.typography.role}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">
                RGB Mood / Brand Colors
              </h4>
              <div className="space-y-2">
                {study.palette.map((color, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-6 w-6 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs font-medium text-white">{color.name}</span>
                    </div>
                    <span className="font-mono text-xs text-slate-400 uppercase font-semibold">
                      {color.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="pt-6 border-t border-white/10">
            <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">
              Full Deliverables Handover
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {study.deliverables.map((del, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-lg border border-white/5 bg-white/[0.01]">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          {study.quote && (
            <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent flex items-start gap-4">
              <Quote className="h-6 w-6 text-[#ff1e42] shrink-0 mt-1" />
              <div>
                <blockquote className="text-xs sm:text-sm text-slate-200 italic mb-2">
                  "{study.quote.text}"
                </blockquote>
                <div className="text-xs font-bold text-white">{study.quote.author}</div>
                <div className="text-[11px] text-slate-400">{study.quote.role}</div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 px-6 py-4 bg-[#0a0b10]">
          <div className="text-xs text-slate-400">
            Timeline: <strong className="text-white">{study.timeline}</strong> · Turnaround guaranteed
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={DESIGNER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial text-center px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors"
            >
              Discuss Case Study
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(study.title);
              }}
              className="flex-1 sm:flex-initial text-center px-4 py-2 rounded-lg bg-[#ff1e42] hover:bg-[#e01435] text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
            >
              Start Similar Project
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
