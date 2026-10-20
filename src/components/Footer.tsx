import React from 'react';
import { ArrowUp, Mail, MessageSquare } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06070a] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-display text-lg font-bold tracking-tight text-white">
              HUSNAIN MEHBOOB
            </span>
            <span className="text-xs text-slate-400 mt-0.5">
              Graphic Designer & Visual Brand Strategist · UAE Market Focus
            </span>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#specialties" className="hover:text-white transition-colors">UAE Specialties</a>
            <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Husnain Mehboob. All Rights Reserved. Available for Remote & UAE Projects.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${DESIGNER_INFO.email}`}
              className="hover:text-slate-300 transition-colors"
            >
              {DESIGNER_INFO.email}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={DESIGNER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
