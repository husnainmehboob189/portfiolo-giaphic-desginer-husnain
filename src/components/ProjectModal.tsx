import React from 'react';
import { X, ArrowRight, CheckCircle2, Layers, MapPin, Calendar, Palette, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { PortfolioItem, DESIGNER_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onOpenInquiry: (projectName?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenInquiry }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl rounded-3xl border border-white/15 bg-[#0e1017] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#0a0b10]">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-white">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.location}</span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual Display */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Title & Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
              <span className="text-[#ff1e42] font-semibold">{project.client}</span>
              <span aria-hidden="true">·</span>
              <span>Year {project.year}</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white mb-4">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
            {/* Deliverables */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">
                Deliverables & Assets Created
              </h4>
              <div className="space-y-2">
                {project.deliverables?.map((del, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software & Palette */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">
                Software & Palette
              </h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.software.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {project.palette && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">Color Mood:</span>
                  <div className="flex items-center gap-1.5">
                    {project.palette.map((color, idx) => (
                      <div
                        key={idx}
                        className="h-6 w-6 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 px-6 py-4 bg-[#0a0b10]">
          <div className="text-xs text-slate-400">
            Want a similar design for your brand or agency?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={DESIGNER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial text-center px-4 py-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-colors"
            >
              Ask on WhatsApp
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(project.title);
              }}
              className="flex-1 sm:flex-initial text-center px-4 py-2 rounded-lg bg-[#ff1e42] hover:bg-[#e01435] text-xs font-bold uppercase tracking-wider text-white transition-colors cursor-pointer"
            >
              Inquire Project
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
