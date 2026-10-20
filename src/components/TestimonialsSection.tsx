import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 border-b border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#ff1e42] uppercase mb-2">
            06. Client Endorsements
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Client Words
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Real feedback from UAE real estate brokers, clinic directors, and brand founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-[#0e1017] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-slate-200 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="font-display font-bold text-white text-sm">{t.author}</div>
                <div className="text-xs text-[#ff1e42] font-medium">{t.role}</div>
                <div className="text-xs text-slate-400">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
