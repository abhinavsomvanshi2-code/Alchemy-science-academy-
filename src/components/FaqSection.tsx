import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { FAQ_DATA, ACADEMY_INFO } from '../data/courses';

interface FaqSectionProps {
  onOpenSmsDesk: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenSmsDesk }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Admission Inquiries</span>
            <span>·</span>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Everything You Need to Know Before Inquiring
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Have questions regarding admissions, batch allocation, or SMS protocol? Find quick answers below.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden transition-all bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-indigo-900 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-indigo-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg">Have a specific academic question?</h3>
            <p className="text-xs sm:text-sm text-indigo-200 mt-0.5">
              Send a direct SMS with your name &amp; question to Prof. Sharad Raktate at {ACADEMY_INFO.displayPhone}.
            </p>
          </div>
          <button
            onClick={onOpenSmsDesk}
            className="px-5 py-2.5 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors whitespace-nowrap shrink-0 shadow-md"
          >
            Open SMS Desk
          </button>
        </div>

      </div>
    </section>
  );
};
