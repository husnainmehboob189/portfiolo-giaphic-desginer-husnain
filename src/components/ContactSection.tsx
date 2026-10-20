import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, ArrowUpRight, Send, Clock, FileCheck, MapPin, Sparkles } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenInquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiry }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: 'Real Estate (UAE)',
    projectType: 'Social Media & Ad Campaign',
    timeline: 'Within 1-2 Weeks',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Compose whatsapp query or mailto
    const text = `Hi Husnain, I am ${formData.name} (${formData.email}). We are in ${formData.industry} looking for ${formData.projectType} needed ${formData.timeline}. Details: ${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/923280600557?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07080d]">
      {/* Glow accent */}
      <div className="pointer-events-none absolute bottom-0 right-10 -z-10 h-96 w-96 rounded-full bg-[#ff1e42]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#ff1e42] uppercase mb-3">
            <Sparkles className="h-4 w-4" />
            <span>Ready for your next campaign?</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            LET'S WORK TOGETHER
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Whether you need a full Dubai real estate campaign launch, a clinic social overhaul, or custom packaging, let's bring your visual story to life.
          </p>
        </div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Direct Contact Info & Guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0e1017] p-8">
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Primary Contact
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  Husnain Mehboob
                </h3>
                <p className="text-xs text-[#ff1e42] font-semibold">
                  Senior Graphic Designer & Brand Strategist
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 mb-8">
                {/* Email with copy button */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center text-white">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">Email Address</div>
                      <a
                        href={`mailto:${DESIGNER_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-white hover:text-[#ff1e42] transition-colors"
                      >
                        {DESIGNER_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* WhatsApp direct */}
                <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400">WhatsApp / Call</div>
                      <a
                        href={DESIGNER_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        {DESIGNER_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={DESIGNER_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1 transition-colors"
                  >
                    <span>Chat</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Location & Availability */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-center gap-3">
                  <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center text-white">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Location Base & Availability</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      {DESIGNER_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Principles */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Clock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Fast 24 to 48 Hours turnaround on active campaign assets</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <FileCheck className="h-4 w-4 text-[#ff1e42] shrink-0" />
                <span>Full source files included (AI, PSD, Print CMYK PDF, Web PNG/SVG)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Brief & Instant Inquiry Builder */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#0e1017] p-8">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Send a Project Brief
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out your requirements below to instantly dispatch your brief to Husnain via WhatsApp or email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#ff1e42] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Email or Phone
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tariq@propertygroup.ae"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#ff1e42] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Industry Sector
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#161922] px-3 py-2.5 text-xs text-white focus:border-[#ff1e42] focus:outline-none"
                  >
                    <option value="Real Estate (Dubai/UAE)">Real Estate (Dubai/UAE)</option>
                    <option value="Aesthetic Clinic (UAE)">Aesthetic Clinic (UAE)</option>
                    <option value="Restaurant & Hospitality">Restaurant & Hospitality</option>
                    <option value="Automotive & Motors">Automotive & Motors</option>
                    <option value="Education / University">Education / University</option>
                    <option value="Retail & Packaging">Retail & Packaging</option>
                    <option value="Other Industry">Other Industry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Required Service
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#161922] px-3 py-2.5 text-xs text-white focus:border-[#ff1e42] focus:outline-none"
                  >
                    <option value="Social Media & Ad Campaign">Social Media & Ad Campaign</option>
                    <option value="Full Brand Identity & Logo">Full Brand Identity & Logo</option>
                    <option value="Property Launch & Brochure">Property Launch & Brochure</option>
                    <option value="Clinic Treatment Promos">Clinic Treatment Promos</option>
                    <option value="Product Packaging & Box">Product Packaging & Box</option>
                    <option value="Monthly Design Retainer">Monthly Design Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Turnaround Time
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-[#161922] px-3 py-2.5 text-xs text-white focus:border-[#ff1e42] focus:outline-none"
                  >
                    <option value="Urgent (24-48 Hours)">Urgent (24-48 Hours)</option>
                    <option value="Within 1 Week">Within 1 Week</option>
                    <option value="Within 2-3 Weeks">Within 2-3 Weeks</option>
                    <option value="Ongoing Monthly Support">Ongoing Monthly Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Project Details / Brief Overview
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your goals, number of designs needed, target audience, or any existing brand guidelines..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#ff1e42] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#ff1e42] py-3.5 px-6 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff1e42]/20 transition-all hover:bg-[#e01435] hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Submit Brief & Connect on WhatsApp</span>
              </button>

              {submitted && (
                <div className="mt-3 text-center text-xs text-emerald-400 font-semibold">
                  ✓ Opening WhatsApp with your project brief details...
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
