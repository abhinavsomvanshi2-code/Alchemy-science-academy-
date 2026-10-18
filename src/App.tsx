/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { NoticeBanner } from './components/NoticeBanner';
import { Hero } from './components/Hero';
import { DirectorDesk } from './components/DirectorDesk';
import { ProgramsSection } from './components/ProgramsSection';
import { Methodology } from './components/Methodology';
import { TestSeriesShowcase } from './components/TestSeriesShowcase';
import { TargetCalculator } from './components/TargetCalculator';
import { Testimonials } from './components/Testimonials';
import { SmsInquiryDesk } from './components/SmsInquiryDesk';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickySmsBar } from './components/StickySmsBar';
import { ExamGuideModal } from './components/ExamGuideModal';

export default function App() {
  const [selectedRequirement, setSelectedRequirement] = useState<string>('JEE (Main + Advanced) 2-Year Program');
  const [examGuideModalType, setExamGuideModalType] = useState<string | null>(null);

  const scrollToSmsDesk = (preset?: string) => {
    if (preset) {
      setSelectedRequirement(preset);
    }
    const deskElement = document.getElementById('sms-desk');
    if (deskElement) {
      deskElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenExamGuide = (examType: string) => {
    setExamGuideModalType(examType);
  };

  const handleCloseExamGuide = () => {
    setExamGuideModalType(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-amber-200 selection:text-slate-900">
      {/* Top Bar Navigation */}
      <Navbar onOpenSmsDesk={scrollToSmsDesk} />

      {/* Mandatory Inquiry Notice Banner */}
      <NoticeBanner onOpenSmsDesk={scrollToSmsDesk} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenSmsDesk={scrollToSmsDesk} />

        {/* 2. Director's Desk (Prof. Sharad Raktate) */}
        <DirectorDesk onInquireWithDirector={() => scrollToSmsDesk('1-on-1 Academic Counseling with Director Prof. Sharad Raktate')} />

        {/* 3. Core Academic Programs (JEE, NEET, MHT-CET) */}
        <ProgramsSection 
          onSelectCourseForSms={scrollToSmsDesk} 
          onOpenExamGuide={handleOpenExamGuide}
        />

        {/* 4. Methodology & The Alchemy System */}
        <Methodology onOpenSmsDesk={scrollToSmsDesk} />

        {/* 5. Exam Hall & Proctored Test Series */}
        <TestSeriesShowcase onOpenSmsDesk={scrollToSmsDesk} />

        {/* 6. Interactive Target & Score Calculator */}
        <TargetCalculator onSendCustomPlanToSms={scrollToSmsDesk} />

        {/* 7. Student Success & Proven Ranks */}
        <Testimonials />

        {/* 8. Dedicated Direct SMS Inquiry Desk */}
        <SmsInquiryDesk initialRequirement={selectedRequirement} />

        {/* 9. Admission FAQ */}
        <FaqSection onOpenSmsDesk={scrollToSmsDesk} />
      </main>

      {/* Footer */}
      <Footer onOpenSmsDesk={scrollToSmsDesk} />

      {/* Mobile Sticky SMS Action Bar (under 15% mobile viewport) */}
      <StickySmsBar onOpenSmsDesk={scrollToSmsDesk} />

      {/* Exam Blueprint Modal */}
      <ExamGuideModal 
        examType={examGuideModalType} 
        onClose={handleCloseExamGuide} 
        onSelectForSms={scrollToSmsDesk}
      />
    </div>
  );
}
