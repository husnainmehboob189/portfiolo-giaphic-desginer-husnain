import React, { useState } from 'react';
import { X, Send, Sparkles, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillProject?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  prefillProject = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(prefillProject || 'UAE Real Estate Marketing');
  const [timeline, setTimeline] = useState('Urgent (24-48 Hours)');
  const [notes, setNotes] = useState('');
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([
    'Meta 1:1 Feed Creatives',
    '9:16 Instagram Stories',
    'Full Vector / PSD Source Files',
  ]);

  const deliverableOptions = [
    'Meta 1:1 Feed Creatives',
    '9:16 Instagram Stories',
    'Full Vector / PSD Source Files',
    'High-Res Print CMYK PDF',
    'Brand Guidelines & Color Mood',
    'Carousel Lead Gen Set',
  ];

  const toggleDeliverable = (opt: string) => {
    if (selectedDeliverables.includes(opt)) {
      setSelectedDeliverables(selectedDeliverables.filter((d) => d !== opt));
    } else {
      setSelectedDeliverables([...selectedDeliverables, opt]);
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Husnain! My name is ${name} (${email}).
I'd like to hire you for: ${service}
Target Timeline: ${timeline}
Required Deliverables: ${selectedDeliverables.join(', ')}
Project Brief: ${notes || 'Looking forward to discussing project scope and rates!'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/923280600557?text=${encoded}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl rounded-3xl border border-white/15 bg-[#0e1017] shadow-2xl overflow-hidden my-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#0a0b10]">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#ff1e42]" />
            <span className="font-display font-bold text-white text-base">
              Start a Project with Husnain
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 sm:p-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Your Name / Brand
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Tariq Al-Mansoor"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#ff1e42] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Email / WhatsApp Number
              </label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. +971 50 123 4567"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:border-[#ff1e42] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Project Focus
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#161922] px-3 py-2.5 text-xs text-white focus:border-[#ff1e42] focus:outline-none"
              >
                <option value="UAE Real Estate Marketing">UAE Real Estate Marketing</option>
                <option value="Healthcare & Aesthetic Clinic Ads">Healthcare & Aesthetic Clinic Ads</option>
                <option value="Brand Identity & Logo Suite">Brand Identity & Logo Suite</option>
                <option value="Food & Restaurant Branding (Harvest Dine style)">Food & Restaurant Branding</option>
                <option value="Product Packaging & Dielines">Product Packaging & Dielines</option>
                <option value="Meta / Social Media Retainer">Meta / Social Media Retainer</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Target Timeline
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#161922] px-3 py-2.5 text-xs text-white focus:border-[#ff1e42] focus:outline-none"
              >
                <option value="Urgent (24-48 Hours)">Urgent (24-48 Hours)</option>
                <option value="1 Week Sprint">1 Week Sprint</option>
                <option value="2-3 Weeks Comprehensive">2-3 Weeks Comprehensive</option>
                <option value="Ongoing Monthly Retainer">Ongoing Monthly Retainer</option>
              </select>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Deliverables Needed (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {deliverableOptions.map((opt) => {
                const isSelected = selectedDeliverables.includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleDeliverable(opt)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#ff1e42] bg-[#ff1e42]/10 text-white font-medium'
                        : 'border-white/5 bg-white/[0.02] text-slate-400 hover:text-white'
                    }`}
                  >
                    <div
                      className={`h-4 w-4 rounded flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-[#ff1e42] border-[#ff1e42] text-white'
                          : 'border-white/20 bg-transparent'
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3 stroke-[3]" />}
                    </div>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Project Brief / Goals (Optional)
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tell Husnain about your target market, style preferences, or any reference links..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white placeholder-slate-500 focus:border-[#ff1e42] focus:outline-none"
            />
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#ff1e42] py-3 px-6 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ff1e42]/20 hover:bg-[#e01435] transition-all cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Connect on WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};
