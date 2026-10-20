import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { UAESpecialties } from './components/UAESpecialties';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { IndustriesSection } from './components/IndustriesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { InquiryModal } from './components/InquiryModal';
import { MarqueeTicker } from './components/MarqueeTicker';
import { PortfolioItem, CaseStudy } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryPrefill, setInquiryPrefill] = useState('');
  const [portfolioCategory, setPortfolioCategory] = useState('all');

  const handleOpenInquiry = (prefill?: string) => {
    setInquiryPrefill(prefill || '');
    setInquiryModalOpen(true);
  };

  const handleSelectCategoryFromHero = (cat: string) => {
    setPortfolioCategory(cat);
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-[#ff1e42] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenInquiry={() => handleOpenInquiry()} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry()}
          onSelectCategory={handleSelectCategoryFromHero}
        />

        {/* Dynamic Animated Marquee Ribbon */}
        <MarqueeTicker />

        {/* 1. About Me / Profile */}
        <AboutSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* 2. Skills & Software */}
        <SkillsSection />

        {/* 3 & 4. Real Estate ⭐ & Healthcare / Aesthetic Clinic ⭐ UAE Portfolios */}
        <UAESpecialties
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenInquiry={(specialty) => handleOpenInquiry(specialty)}
        />

        {/* 6. Case Studies ⭐⭐⭐ (Project 01, 02, 03) */}
        <CaseStudiesSection
          onOpenCaseStudy={(study) => setSelectedCaseStudy(study)}
        />

        {/* 5, 8, 9, 10. Selected Portfolio Gallery */}
        <PortfolioGallery
          selectedCategory={portfolioCategory}
          onCategoryChange={setPortfolioCategory}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 8. Industries Served */}
        <IndustriesSection />

        {/* Social Proof / Testimonials */}
        <TestimonialsSection />

        {/* 9. Contact / Let's Work Together */}
        <ContactSection onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry()} />

      {/* Lightbox / Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={(title) => handleOpenInquiry(title)}
      />

      {/* Case Study In-Depth Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenInquiry={(title) => handleOpenInquiry(title)}
      />

      {/* Interactive Project Inquiry & Brief Builder Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        prefillProject={inquiryPrefill}
      />
    </div>
  );
}
