import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

interface NavbarProps {
  onOpenSmsDesk: (presetRequirement?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSmsDesk }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand wordmark */}
          <a href="#" className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-900 text-amber-400 flex items-center justify-center font-bold text-lg shadow-sm">
              ⚗
            </span>
            <span>{ACADEMY_INFO.name}</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#programs" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Programs</a>
            <a href="#director" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Director's Desk</a>
            <a href="#methodology" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Methodology</a>
            <a href="#calculator" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Target Calculator</a>
            <a href="#results" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Results</a>
            <a href="#faq" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">FAQ</a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${ACADEMY_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-indigo-900 px-3 py-2 border border-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-700" />
              <span>{ACADEMY_INFO.phone}</span>
            </a>

            <button
              onClick={() => onOpenSmsDesk()}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-indigo-900 hover:bg-indigo-800 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Send SMS Inquiry</span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 text-sm font-medium text-slate-700">
          <a 
            href="#programs" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-indigo-900"
          >
            Programs (JEE, NEET, CET)
          </a>
          <a 
            href="#director" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-indigo-900"
          >
            Director: Prof. Sharad Raktate
          </a>
          <a 
            href="#methodology" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-indigo-900"
          >
            Teaching Methodology
          </a>
          <a 
            href="#calculator" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-indigo-900"
          >
            Target & Score Calculator
          </a>
          <a 
            href="#results" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-indigo-900"
          >
            Student Results
          </a>
          <a 
            href="#sms-desk" 
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSmsDesk();
            }}
            className="block py-2 font-semibold text-indigo-900"
          >
            Direct SMS to 8999952512
          </a>
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Helpline:</span>
            <a href={`tel:${ACADEMY_INFO.phone}`} className="text-xs font-bold text-indigo-900">
              {ACADEMY_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
