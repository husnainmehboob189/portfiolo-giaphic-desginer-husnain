import React, { useState } from 'react';
import { Building2, Sparkles, ArrowRight, Check, Eye, Compass, TrendingUp, Calendar, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';

interface UAESpecialtiesProps {
  onSelectProject: (project: PortfolioItem) => void;
  onOpenInquiry: (specialty?: string) => void;
}

export const UAESpecialties: React.FC<UAESpecialtiesProps> = ({ onSelectProject, onOpenInquiry }) => {
  const [activeSpecialty, setActiveSpecialty] = useState<'real-estate' | 'healthcare'>('real-estate');

  const realEstateItems = PORTFOLIO_ITEMS.filter((item) => item.category === 'real-estate');
  const healthcareItems = PORTFOLIO_ITEMS.filter((item) => item.category === 'healthcare');

  return (
    <section id="specialties" className="py-20 border-b border-white/5 relative bg-[#07080d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-2 flex items-center gap-1.5">
              <span>⭐ Dedicated UAE Market Portfolios</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              UAE Real Estate & Aesthetic Clinics
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Two high-growth UAE sectors where design directly dictates investor confidence and patient bookings.
            </p>
          </div>

          {/* Interactive Switcher with Animated Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-white/5 rounded-xl border border-white/10 shrink-0 self-start">
            <button
              onClick={() => setActiveSpecialty('real-estate')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                activeSpecialty === 'real-estate'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold scale-[1.02]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>Real Estate Design (UAE)</span>
            </button>
            <button
              onClick={() => setActiveSpecialty('healthcare')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                activeSpecialty === 'healthcare'
                  ? 'bg-rose-400 text-slate-950 shadow-md font-bold scale-[1.02]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Sparkles className="h-4 w-4" />
              <span>Healthcare & Aesthetics (UAE)</span>
            </button>
          </div>
        </div>

        {/* Animated Tab Switcher Container */}
        <AnimatePresence mode="wait">
          {activeSpecialty === 'real-estate' ? (
            <motion.div
              key="real-estate"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              {/* Real Estate Overview Banner */}
              <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-[#0e1017] to-transparent p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-3">
                      <Compass className="h-4 w-4" />
                      <span>Dubai & UAE Luxury Property Expertise</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                      High-Converting Visuals for UAE Brokers, Agencies & Developers
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      In Dubai’s competitive property landscape, cookie-cutter flyers get ignored. I craft luxury architectural visuals, high-CTR Meta ad carousels, off-plan launch campaigns, and floorplan brochures that convey Golden Visa prestige and high-yield returns.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-amber-400 shrink-0" />
                        <span>Property Social Media Posts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-amber-400 shrink-0" />
                        <span>Luxury Penthouse & Villa Ads</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-amber-400 shrink-0" />
                        <span>Project Launch Campaigns</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-amber-400 shrink-0" />
                        <span>Investment & ROI Brochures</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-amber-400 shrink-0" />
                        <span>Instagram / Meta Ads</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-amber-400 shrink-0" />
                        <span>Cityscape Exhibition Standees</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
                    <div className="p-4 rounded-xl border border-white/10 bg-black/40 w-full text-left">
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                        Target Deliverables
                      </div>
                      <div className="text-white font-bold text-base mb-2">
                        Real Estate Launch Kit
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        Complete set of 1:1 Feed Ads, 9:16 Stories, and digital PDF brochure formatted for WhatsApp investor sharing.
                      </p>
                      <button
                        onClick={() => onOpenInquiry('Real Estate Design (UAE)')}
                        className="w-full text-center py-2.5 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Inquire Real Estate Package
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Estate Featured Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {realEstateItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectProject(item)}
                    className="group rounded-2xl border border-white/10 bg-[#0e1017] overflow-hidden hover:border-amber-400/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-80" />
                      <div className="absolute top-3 left-3 text-[11px] font-semibold text-amber-300 bg-amber-950/80 px-2 py-1 rounded border border-amber-500/30 backdrop-blur-sm">
                        {item.location}
                      </div>
                      <div className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                          <span>{item.client}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.year}</span>
                        </div>
                        <h4 className="font-display text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                        <div className="flex flex-wrap gap-1">
                          {item.software.map((s) => (
                            <span key={s} className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-slate-400">
                              {s}
                            </span>
                          ))}
                        </div>
                        <span className="text-amber-400 font-semibold group-hover:underline flex items-center gap-1">
                          <span>View Details</span>
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="healthcare"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              {/* Healthcare Overview Banner */}
              <div className="rounded-2xl border border-rose-500/20 bg-gradient-to-r from-rose-500/10 via-[#0e1017] to-transparent p-6 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-3">
                      <Sparkles className="h-4 w-4" />
                      <span>Dubai & Abu Dhabi Medical Aesthetic Care</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                      Elevated, Trust-Inspiring Designs for Dubai Aesthetic Clinics
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                      Aesthetics clients in the UAE expect uncompromising elegance. I design clinic social media systems, doctor profile spotlights, HydraFacial and Laser promotions, and culturally resonant Ramadan glow campaigns that communicate safety, hygiene, and luxury indulgence.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-rose-400 shrink-0" />
                        <span>Clinic Social Media Feeds</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-rose-400 shrink-0" />
                        <span>HydraFacial & Laser Promos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-rose-400 shrink-0" />
                        <span>Ramadan & Eid Glow Offers</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-rose-400 shrink-0" />
                        <span>Educational Skin Carousels</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-rose-400 shrink-0" />
                        <span>Treatment Price Menu Cards</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-rose-400 shrink-0" />
                        <span>Doctor Authority Spotlights</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
                    <div className="p-4 rounded-xl border border-white/10 bg-black/40 w-full text-left">
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                        Monthly Retainer / Package
                      </div>
                      <div className="text-white font-bold text-base mb-2">
                        Clinic Growth Social Retainer
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        15x Treatment Promos, Doctor Highlights, Seasonal Glow Ads, and WhatsApp inquiry flyers designed for Dubai wellness centers.
                      </p>
                      <button
                        onClick={() => onOpenInquiry('Clinic Social Media & Branding')}
                        className="w-full text-center py-2.5 px-4 rounded-lg bg-rose-400 hover:bg-rose-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Inquire Clinic Retainer
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Healthcare Featured Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {healthcareItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectProject(item)}
                    className="group rounded-2xl border border-white/10 bg-[#0e1017] overflow-hidden hover:border-rose-400/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-rose-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-80" />
                      <div className="absolute top-3 left-3 text-[11px] font-semibold text-rose-300 bg-rose-950/80 px-2 py-1 rounded border border-rose-500/30 backdrop-blur-sm">
                        {item.location}
                      </div>
                      <div className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                          <span>{item.client}</span>
                          <span aria-hidden="true">·</span>
                          <span>{item.year}</span>
                        </div>
                        <h4 className="font-display text-lg font-bold text-white group-hover:text-rose-400 transition-colors mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                        <div className="flex flex-wrap gap-1">
                          {item.software.map((s) => (
                            <span key={s} className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-slate-400">
                              {s}
                            </span>
                          ))}
                        </div>
                        <span className="text-rose-400 font-semibold group-hover:underline flex items-center gap-1">
                          <span>View Details</span>
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
