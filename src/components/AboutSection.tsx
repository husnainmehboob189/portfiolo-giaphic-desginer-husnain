import React from 'react';
import { Check, Download, Globe2, Briefcase, Sparkles, Building2, Utensils, GraduationCap, MapPin } from 'lucide-react';
import { DESIGNER_INFO, INDUSTRIES } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenInquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInquiry }) => {
  const pillars = [
    {
      title: '5+ Years Experience',
      desc: 'Proven track record crafting high-impact visual systems for agencies, global startups, and GCC enterprises.',
    },
    {
      title: 'UAE Market Specialist',
      desc: 'Deep familiarity with Dubai real estate trends, luxury off-plan aesthetics, and UAE aesthetic clinic compliance.',
    },
    {
      title: 'Conversion-Driven Graphic Design',
      desc: 'Designs engineered not just to look stunning, but to stop the scroll, lower ad CPAs, and generate real inquiries.',
    },
    {
      title: 'Cross-Discipline Execution',
      desc: 'From vector brand identities and digital ad campaigns to packaging dielines and outdoor roadside billboards.',
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-[#ff1e42] uppercase mb-2">
            01. Profile & Creative Vision
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A designer who focuses on storytelling, visual psychology, and tangible commercial results.
          </p>
        </div>

        {/* Narrative & Credentials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#0e1017] p-6 sm:p-8">
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Turning Ideas Into Visually Striking Commercial Reality
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                I am <span className="text-white font-semibold">Husnain Mehboob</span>. Over the past 5+ years, I have collaborated with real estate developers, aesthetic clinics, high-growth restaurants, and direct-to-consumer brands across the UAE, Middle East, and worldwide.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                My approach bridges artistic creative direction with strategic conversion principles: every typography pairing, negative space ratio, and color mood is chosen with intent. Whether designing a luxury penthouse campaign in Downtown Dubai or a full packaging suite for an organic food brand, I ensure the creative speaks directly to your ideal client.
              </p>

              {/* Quote Block */}
              <blockquote className="mt-6 border-l-2 border-[#ff1e42] pl-4 italic text-slate-200 text-sm sm:text-base">
                "I believe every design should tell a story and I'm here to bring those stories to life."
              </blockquote>
            </div>

            {/* Core Capability Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-5 w-5 rounded-full bg-[#ff1e42]/20 text-[#ff1e42] flex items-center justify-center text-xs">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <h4 className="font-semibold text-white text-sm">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Details & Industries */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Fact Sheet */}
            <div className="rounded-2xl border border-white/10 bg-[#0e1017] p-6">
              <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">
                Professional Details
              </h4>
              <dl className="divide-y divide-white/5 text-sm">
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-400">Experience</dt>
                  <dd className="font-medium text-white">5+ Years Professional</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-400">Market Specialty</dt>
                  <dd className="font-medium text-[#ff1e42]">UAE / Dubai Market Focus</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-400">Primary Core</dt>
                  <dd className="font-medium text-white">Graphic, Brand & Campaign</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-400">Location Base</dt>
                  <dd className="font-medium text-white">Pakistan (Remote Available)</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-400">Email Contact</dt>
                  <dd className="font-medium text-slate-200">{DESIGNER_INFO.email}</dd>
                </div>
                <div className="py-2.5 flex justify-between">
                  <dt className="text-slate-400">Turnaround</dt>
                  <dd className="font-medium text-emerald-400">Fast 24-48h Delivery</dd>
                </div>
              </dl>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={DESIGNER_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors"
                >
                  Direct WhatsApp
                </a>
                <button
                  onClick={onOpenInquiry}
                  className="flex-1 text-center py-2.5 px-4 rounded-lg bg-[#ff1e42] hover:bg-[#e01435] text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>
            </div>

            {/* Industries Worked With */}
            <div className="rounded-2xl border border-white/10 bg-[#0e1017] p-6">
              <h4 className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-3">
                Industries Worked With
              </h4>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                <span className="py-1 px-2.5 rounded-md border border-white/10 bg-white/5 font-medium text-white flex items-center gap-1">
                  ⭐ Real Estate & Luxury Off-Plan
                </span>
                <span className="py-1 px-2.5 rounded-md border border-white/10 bg-white/5 font-medium text-white flex items-center gap-1">
                  ⭐ Healthcare & Aesthetic Clinics
                </span>
                <span className="py-1 px-2.5 rounded-md border border-white/10 bg-white/5">
                  Restaurants & F&B
                </span>
                <span className="py-1 px-2.5 rounded-md border border-white/10 bg-white/5">
                  Education & Universities
                </span>
                <span className="py-1 px-2.5 rounded-md border border-white/10 bg-white/5">
                  Automotive & EV
                </span>
                <span className="py-1 px-2.5 rounded-md border border-white/10 bg-white/5">
                  Retail & FMCG Packaging
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
