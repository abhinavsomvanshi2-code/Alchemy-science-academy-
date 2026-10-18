import React from 'react';
import { RESULTS_DATA, ACADEMY_INFO } from '../data/courses';
import { Award, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="results" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-2">
            <span>Verified Results &amp; Alumni</span>
            <span aria-hidden="true">·</span>
            <span>Batch 2024–2025</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Real Ranks from Alchemy Science Academy
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Transparent admissions into India's premier engineering and medical institutions under Prof. Sharad Raktate's guidance.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {RESULTS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all"
            >
              <div>
                {/* Header line with exam and year */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-bold text-indigo-900 uppercase tracking-wider">{item.exam}</span>
                  <span className="font-mono">{item.year}</span>
                </div>

                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-slate-900">{item.name}</h3>
                  <div className="text-right">
                    <p className="font-mono text-base font-extrabold text-amber-600 tabular-nums">{item.score}</p>
                    <p className="text-[11px] font-semibold text-slate-500">{item.rankOrPercentile}</p>
                  </div>
                </div>

                {/* College tag */}
                <div className="mt-3 py-1.5 px-3 rounded-lg bg-indigo-50 border border-indigo-100/80 text-xs font-medium text-indigo-950 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
                  <span>Allotted: <strong className="font-semibold">{item.allottedCollege}</strong></span>
                </div>

                {/* Testimonial Quote */}
                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>Mentored by {ACADEMY_INFO.director}</span>
                <span className="text-emerald-700 font-semibold">Verified Admissions Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
