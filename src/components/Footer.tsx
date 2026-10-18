import React from 'react';
import { Phone, MessageSquare, MapPin, Mail, AlertCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

interface FooterProps {
  onOpenSmsDesk: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSmsDesk }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pb-16 md:pb-10 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Director */}
          <div className="space-y-4">
            <a href="#" className="font-display text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="w-7 h-7 rounded bg-indigo-900 text-amber-400 flex items-center justify-center font-bold text-base">
                ⚗
              </span>
              <span>{ACADEMY_INFO.name}</span>
            </a>
            <p className="text-slate-400 text-xs leading-relaxed">
              Premier science coaching institute dedicated to transforming student potential into top ranks in JEE Main &amp; Advanced, NEET-UG, and MHT-CET.
            </p>
            <div className="pt-1">
              <p className="text-white font-semibold">Founder &amp; Director:</p>
              <p className="text-amber-400 font-medium">{ACADEMY_INFO.director}</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <p className="font-bold uppercase tracking-wider text-white text-xs mb-4">Academic Programs</p>
            <ul className="space-y-2.5">
              <li>
                <a href="#programs" className="hover:text-white transition-colors">JEE (Main + Advanced) 2-Year Program</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">NEET-UG Medical Entrance Batch</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">MHT-CET Top Ranker Accelerator (PCM/PCB)</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Class 11 &amp; 12 Integrated Foundation</a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">Dropper &amp; Repeater Intensive Course</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiry Mandatory Protocol */}
          <div>
            <p className="font-bold uppercase tracking-wider text-white text-xs mb-4">Inquiry Guidelines</p>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="font-semibold">SMS Protocol Notice:</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                Per Director Prof. Sharad Raktate's protocol, every SMS inquiry sent to <strong className="text-white">{ACADEMY_INFO.phone}</strong> must specify:
              </p>
              <ul className="list-disc pl-4 text-slate-400 text-[11px] space-y-0.5">
                <li><strong className="text-slate-200">Candidate / Student Name</strong> (Compulsory)</li>
                <li><strong className="text-slate-200">Target Academic Requirement</strong> (Compulsory)</li>
              </ul>
            </div>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <p className="font-bold uppercase tracking-wider text-white text-xs mb-4">Direct Contact</p>
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${ACADEMY_INFO.phone}`} className="text-white font-mono font-bold hover:underline">
                  {ACADEMY_INFO.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-amber-400 shrink-0" />
                <button 
                  onClick={onOpenSmsDesk}
                  className="text-amber-300 hover:text-amber-200 underline text-left cursor-pointer"
                >
                  Direct SMS Composer ({ACADEMY_INFO.phone})
                </button>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  Alchemy Science Academy Campus, Maharashtra, India
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} {ACADEMY_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Director: {ACADEMY_INFO.director}</span>
            <span>·</span>
            <span>Direct SMS Helpline: {ACADEMY_INFO.phone}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
