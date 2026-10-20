import React from 'react';
import { Building2, Sparkles, UtensilsCrossed, Car, GraduationCap, Package, Store } from 'lucide-react';
import { INDUSTRIES } from '../data/portfolioData';

export const IndustriesSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Building2,
    Sparkles,
    UtensilsCrossed,
    Car,
    GraduationCap,
    Package,
    Store,
  };

  return (
    <section className="py-20 border-b border-white/5 relative bg-[#07080d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#ff1e42] uppercase mb-2">
            05. Domain Specialization
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Industries Served
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Tailored visual communication adapted to each market sector’s unique consumer behavior.
          </p>
        </div>

        {/* 6-Card Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => {
            const Icon = iconMap[ind.icon] || Building2;
            return (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-[#0e1017] p-6 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold font-mono text-[#ff1e42] bg-[#ff1e42]/10 px-2.5 py-1 rounded-md border border-[#ff1e42]/20">
                      {ind.count}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ind.focus}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>UAE & Global Delivery</span>
                  <span className="text-white font-medium">Verified Client Work</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
