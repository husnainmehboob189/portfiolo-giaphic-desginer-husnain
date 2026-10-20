import React from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, CheckCircle2, ChevronRight, Layers, Palette, Type } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';

interface CaseStudiesSectionProps {
  onOpenCaseStudy: (study: CaseStudy) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenCaseStudy }) => {
  return (
    <section id="case-studies" className="py-20 border-b border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#ff1e42] uppercase mb-2 flex items-center gap-1.5">
            <span>⭐⭐⭐ Strategic Deep Dives</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Case Studies
          </h2>
          <p className="mt-3 text-base text-slate-300">
            From brief and creative direction to final delivery and commercial performance.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="space-y-12">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={study.id}
              className="rounded-3xl border border-white/10 bg-[#0e1017] overflow-hidden hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#ff1e42]/5 transition-all duration-300 p-6 sm:p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Column */}
                <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => onOpenCaseStudy(study)}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-xl">
                    <img
                      src={study.heroImage}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                      <span className="font-medium bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                        {study.sector}
                      </span>
                      <span className="flex items-center gap-1 bg-[#ff1e42] px-2.5 py-1 rounded-md font-bold text-white shadow-md">
                        <span>Read Case Study</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Brand Color Mood Preview */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">Palette:</span>
                    <div className="flex items-center gap-1.5">
                      {study.palette.map((c, i) => (
                        <div
                          key={i}
                          className="h-5 w-5 rounded-full border border-white/20 shadow-sm"
                          style={{ backgroundColor: c.hex }}
                          title={`${c.name} (${c.hex})`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 ml-auto">
                      {study.timeline}
                    </span>
                  </div>
                </div>

                {/* Content Details Column */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Index & Client */}
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                      <span className="font-mono text-[#ff1e42] font-bold">PROJECT {study.number}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-white font-medium">{study.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{study.sector}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                      {study.title}
                    </h3>
                    <p className="text-sm font-medium text-[#ff1e42] mb-4">
                      {study.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {study.summary}
                    </p>

                    {/* Problem → Strategy → Creative Direction Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl border border-white/5 bg-white/[0.02] text-xs">
                      <div>
                        <div className="font-bold text-slate-300 uppercase tracking-wider mb-1">
                          The Challenge
                        </div>
                        <p className="text-slate-400 leading-relaxed line-clamp-3">
                          {study.problem}
                        </p>
                      </div>
                      <div>
                        <div className="font-bold text-amber-400 uppercase tracking-wider mb-1">
                          Design Strategy
                        </div>
                        <p className="text-slate-400 leading-relaxed line-clamp-3">
                          {study.designStrategy}
                        </p>
                      </div>
                      <div>
                        <div className="font-bold text-emerald-400 uppercase tracking-wider mb-1">
                          Creative Direction
                        </div>
                        <p className="text-slate-400 leading-relaxed line-clamp-3">
                          {study.creativeDirection}
                        </p>
                      </div>
                    </div>

                    {/* Metrics Results */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {study.results.map((res, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                            {res.metric}
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {res.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Open Deep Dive Button */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Type className="h-3.5 w-3.5" />
                      <span>Type: <strong className="text-slate-200">{study.typography.family}</strong></span>
                    </div>

                    <button
                      onClick={() => onOpenCaseStudy(study)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#ff1e42] transition-colors cursor-pointer"
                    >
                      <span>View Full Project Breakdown</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
