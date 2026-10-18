import React from 'react';
import { CheckCircle2, ShieldCheck, Gauge, Trophy, MessageSquare } from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

interface TestSeriesProps {
  onOpenSmsDesk: (preset?: string) => void;
}

export const TestSeriesShowcase: React.FC<TestSeriesProps> = ({ onOpenSmsDesk }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Test Series Hall Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img
                src="/src/assets/images/classroom_test_series_1792297114577.jpg"
                alt="Disciplined competitive mock exam testing hall at Alchemy Science Academy"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-amber-400 font-semibold uppercase tracking-wider">Exam Hall Simulation</span>
                  <span className="text-slate-400 font-mono">Weekly 3-Hour Proctored Tests</span>
                </div>
                <p className="text-sm font-bold text-white mt-1">Strict OMR &amp; CBT Proctored Examination Protocol</p>
              </div>
            </div>
          </div>

          {/* Right Column: Explanatory Proof & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                Simulated Test Series &amp; Assessment
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Exam Temperament is Built Through 50+ Real-Time Mocks
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Knowledge without exam composure leads to silly mistakes and negative marks. Our proctored test series trains students to handle time pressure, calculate accurately under fatigue, and execute smart question selection.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
                <Gauge className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">NTA CBT UI for JEE &amp; MHT-CET</p>
                  <p className="text-slate-400 text-xs mt-0.5">Identical question palette, timer, mark-for-review, and instant result computation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Negative Marking Reduction Protocol</p>
                  <p className="text-slate-400 text-xs mt-0.5">Custom algorithm flagging blind guesses vs calculated risks to preserve precious percentiles.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700">
                <Trophy className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">State &amp; National Rank Prediction</p>
                  <p className="text-slate-400 text-xs mt-0.5">Standardized percentile benchmarking calibrated against actual past cutoffs.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenSmsDesk('All Maharashtra Mock Test Series Only')}
                className="px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors flex items-center gap-2 cursor-pointer shadow-md shadow-amber-400/10"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>Join Test Series Only via SMS ({ACADEMY_INFO.phone})</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
