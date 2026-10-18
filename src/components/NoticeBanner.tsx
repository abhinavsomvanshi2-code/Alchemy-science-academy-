import React from 'react';
import { MessageCircle, AlertCircle, PhoneCall } from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

interface NoticeBannerProps {
  onOpenSmsDesk: () => void;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({ onOpenSmsDesk }) => {
  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-950 px-4 py-2.5 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        <div className="flex items-center gap-2 text-center md:text-left">
          <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 hidden sm:inline" />
          <p className="leading-snug">
            <span className="font-bold tracking-wide uppercase text-amber-900">Mandatory Inquiry Protocol:</span>{' '}
            For admissions, directly SMS to <strong className="font-bold underline text-amber-950">{ACADEMY_INFO.phone}</strong>.{' '}
            <span className="font-semibold text-rose-800">Student Name &amp; Requirement are compulsory.</span>{' '}
            Director: <strong className="font-bold text-indigo-950">{ACADEMY_INFO.director}</strong>
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenSmsDesk}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-900 text-amber-50 hover:bg-amber-950 rounded font-semibold text-xs transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-amber-300" />
            <span>Format SMS Now</span>
          </button>
          <a
            href={`tel:${ACADEMY_INFO.phone}`}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-amber-900 border border-amber-300 hover:bg-amber-100 rounded transition-colors whitespace-nowrap"
          >
            <PhoneCall className="w-3 h-3 text-amber-800" />
            <span>Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};
