import React, { useState } from 'react';
import { Layers, Palette, Sparkles, MonitorSmartphone, Printer, Box, Megaphone, CheckCircle } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'software' | 'disciplines'>('all');

  const softwareList = [
    {
      name: 'Adobe Photoshop',
      tag: 'Ps',
      accent: '#31a8ff',
      role: 'Mastery in photo composition, skin retouching, aesthetic lighting, real estate dusk architectural manipulation, and high-impact social ad design.',
      experience: '5+ Years',
      deliverables: ['Real Estate Compositing', 'Skin & Facial Retouching', 'Social Media Ads', 'Lighting & Scrims']
    },
    {
      name: 'Adobe Illustrator',
      tag: 'Ai',
      accent: '#ff9a00',
      role: 'Precision vector logo systems, brand guideline standards, bespoke typography, packaging dielines, and scalable outdoor billboard graphics.',
      experience: '5+ Years',
      deliverables: ['Vector Logo Suites', 'Brand Style Guides', 'Packaging Dielines', 'Vector Icons & Marks']
    },
    {
      name: 'Canva Pro',
      tag: 'Cv',
      accent: '#00c4cc',
      role: 'Rapid campaign scaling, responsive social story creation, and editable branded design systems for client marketing and social teams.',
      experience: '4+ Years',
      deliverables: ['Client Team Templates', 'Carousel Story Systems', 'Rapid Ad Iterations']
    },
    {
      name: 'Adobe After Effects',
      tag: 'Ae',
      accent: '#9999ff',
      role: 'Motion graphic design, logo reveal animations, kinetic typography, and high-CTR dynamic video hooks for Instagram & TikTok.',
      experience: '3+ Years',
      deliverables: ['Animated Logo Stings', 'Motion Reels', 'Kinetic Typography']
    }
  ];

  const disciplines = [
    {
      icon: Palette,
      name: 'Branding & Visual Identity',
      desc: 'Crafting cohesive, unforgettable brands like Harvest Dine: from logo suites and color moodboards to typography guidelines and stationery.',
      highlight: 'Logo Folio & Style Guides'
    },
    {
      icon: MonitorSmartphone,
      name: 'Social Media Design',
      desc: 'Scroll-stopping carousels, aesthetic grids, and promotional banners tailored for Instagram, Facebook, and LinkedIn engagement.',
      highlight: 'Meta Feed & Stories'
    },
    {
      icon: Megaphone,
      name: 'Digital Advertising & Meta Ads',
      desc: 'High-CTR campaign creative concepts designed around conversion psychology, lead generation, and seasonal flash offers.',
      highlight: 'Lead Gen & Conversion Ads'
    },
    {
      icon: Box,
      name: 'Packaging Design',
      desc: 'Retail-ready product packaging including kraft pouches, aluminum beverage cans, glass jar labels, and takeaway burger boxes.',
      highlight: 'Dielines & 3D Mockups'
    },
    {
      icon: Printer,
      name: 'Print Media & Collateral',
      desc: 'CMYK print-ready tri-fold brochures, company profiles, restaurant menus, roll-up exhibition standees, and roadside billboards.',
      highlight: 'Brochures & Standees'
    },
    {
      icon: Sparkles,
      name: 'Creative Direction & Strategy',
      desc: 'Guiding brands from initial client brief to market execution, ensuring visual resonance across multi-channel campaigns.',
      highlight: 'End-to-End Execution'
    }
  ];

  return (
    <section id="skills" className="py-20 border-b border-white/5 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-[#ff1e42] uppercase mb-2">
              02. Technical Mastery
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Skills & Software
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Battle-tested tools and specialized design disciplines tuned for high-growth businesses.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-white/5 rounded-lg border border-white/10 shrink-0 self-start">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab('software')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'software'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Software Suite
            </button>
            <button
              onClick={() => setActiveTab('disciplines')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'disciplines'
                  ? 'bg-white text-slate-900 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Design Disciplines
            </button>
          </div>
        </div>

        {/* Software Cards */}
        {(activeTab === 'all' || activeTab === 'software') && (
          <div className="mb-14">
            <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-5 flex items-center gap-2">
              <span>Core Creative Software</span>
              <span className="text-xs font-normal text-slate-500">· Industry Standard Tools</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {softwareList.map((app) => (
                <div
                  key={app.name}
                  className="rounded-2xl border border-white/10 bg-[#0e1017] p-6 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="h-12 w-12 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-inner"
                        style={{ backgroundColor: `${app.accent}20`, color: app.accent, border: `1px solid ${app.accent}40` }}
                      >
                        {app.tag}
                      </div>
                      <span className="text-xs text-slate-400 font-medium">
                        {app.experience}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-bold text-white mb-2">{app.name}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">{app.role}</p>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <div className="text-[11px] font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                      Key Deliverables
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {app.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Design Disciplines */}
        {(activeTab === 'all' || activeTab === 'disciplines') && (
          <div>
            <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-5 flex items-center gap-2">
              <span>Design Disciplines & Specialties</span>
              <span className="text-xs font-normal text-slate-500">· Strategic Commercial Execution</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {disciplines.map((d, index) => {
                const Icon = d.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-[#0e1017] p-6 hover:border-[#ff1e42]/40 transition-all group"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#ff1e42]/10 border border-[#ff1e42]/20 flex items-center justify-center text-[#ff1e42] mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-display text-base font-bold text-white group-hover:text-[#ff1e42] transition-colors">
                        {d.name}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {d.desc}
                    </p>
                    <div className="text-xs text-[#ff1e42] font-semibold flex items-center gap-1">
                      <CheckCircle className="h-3.5 w-3.5" />
                      <span>{d.highlight}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
