import React from 'react';
import { MessageSquare, PhoneCall, AlertCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

interface StickySmsBarProps {
  onOpenSmsDesk: () => void;
}

export const StickySmsBar: React.FC<StickySmsBarProps> = ({ onOpenSmsDesk }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 text-white px-3 py-2.5 shadow-2xl md:hidden">
      <div className="flex items-center justify-between gap-2 max-w-lg mx-auto">
        <div className="text-[11px] leading-tight">
          <p className="font-bold text-amber-400">SMS Inquiry: {ACADEMY_INFO.phone}</p>
          <p className="text-slate-300 text-[10px]">Name &amp; Req. Compulsory</p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={`tel:${ACADEMY_INFO.phone}`}
            className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 flex items-center justify-center"
            aria-label="Call Director"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
          </a>

          <button
            onClick={onOpenSmsDesk}
            className="px-3.5 py-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-slate-950" />
            <span>Format SMS</span>
          </button>
        </div>
      </div>
    </div>
  );
};
