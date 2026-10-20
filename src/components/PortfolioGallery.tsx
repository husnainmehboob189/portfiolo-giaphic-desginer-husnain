import React from 'react';
import { Eye, ArrowUpRight, Filter, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';

interface PortfolioGalleryProps {
  onSelectProject: (project: PortfolioItem) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({
  onSelectProject,
  selectedCategory,
  onCategoryChange,
}) => {
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'real-estate', label: 'Real Estate ⭐' },
    { id: 'healthcare', label: 'Healthcare & Clinics ⭐' },
    { id: 'advertising', label: 'Campaigns & Ads' },
    { id: 'branding', label: 'Branding & Logos' },
    { id: 'packaging', label: 'Packaging Design' },
    { id: 'print', label: 'Print & Billboards' },
    { id: 'social', label: 'Social Media Posts' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 border-b border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-[#ff1e42] uppercase mb-2">
              04. Selected Works
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Design Portfolio
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Curated commercial design projects across the UAE and international markets.
            </p>
          </div>

          <div className="text-xs text-slate-400">
            Showing <strong className="text-white">{filteredItems.length}</strong> featured projects
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-white text-slate-950 shadow-md font-bold scale-[1.02]'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Bento Grid with Motion Stagger */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
              onClick={() => onSelectProject(item)}
              className="group rounded-2xl border border-white/10 bg-[#0e1017] overflow-hidden hover:border-[#ff1e42]/50 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#ff1e42]/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-80" />

                {/* Badge tags */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-white bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-sm border border-white/10">
                    {item.categoryLabel}
                  </span>
                  {item.featured && (
                    <span className="text-[11px] font-bold text-amber-300 bg-amber-950/80 px-2 py-1 rounded-md border border-amber-500/30">
                      ★ Featured
                    </span>
                  )}
                </div>

                {/* Hover overlay preview trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-950 shadow-lg scale-95 group-hover:scale-100 transition-transform">
                    <Eye className="h-4 w-4" />
                    <span>View Project Specs</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="text-white font-medium">{item.client}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-[#ff1e42] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.software.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-[#ff1e42] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>Inspect</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
