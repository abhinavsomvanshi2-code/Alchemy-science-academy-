import React from 'react';
import { BookOpen, Target, CheckCircle2, Award, Zap, HelpCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

interface MethodologyProps {
  onOpenSmsDesk: () => void;
}

export const Methodology: React.FC<MethodologyProps> = ({ onOpenSmsDesk }) => {
  const steps = [
    {
      number: '01',
      title: 'Concept Nucleation',
      subtitle: 'First-principles mastery over shortcut memorization',
      desc: 'Every chapter begins with intuitive physical & mathematical roots. Formulas are derived on the board with multi-variable proofs, ensuring students understand the conditions under which equations hold.'
    },
    {
      number: '02',
      title: 'Tiered Daily Practice Problems (DPP)',
      subtitle: '30-40 targeted problems solved daily',
      desc: 'Problems are segregated into Level 1 (speed & accuracy), Level 2 (multi-concept JEE/NEET standard), and Level 3 (Olympiad & Advanced rankers), ensuring continuous progression.'
    },
    {
      number: '03',
      title: 'Personal Doubt Clinic',
      subtitle: 'Daily 1-on-1 availability before leaving campus',
      desc: 'No student goes home with an unresolved question. Prof. Sharad Raktate and faculty hold mandatory post-class clinics to sit beside the student and analyze their scratchpad calculation steps.'
    },
    {
      number: '04',
      title: 'Real-Condition CBT & OMR Tests',
      subtitle: 'Fortnightly full-length exam simulations',
      desc: 'Exact NTA computer testing interface for JEE Main and Advanced, state-grade CBT for MHT-CET, and high-speed carbon-copy OMR papers for NEET-UG to condition biological clock and stress endurance.'
    },
    {
      number: '05',
      title: 'Ranker\'s Error-Log Rectification',
      subtitle: 'Zero recurrent mistakes strategy',
      desc: 'Each test is followed by mandatory error categorization: conceptual, calculation, or misreading. Students rectify and re-attempt every missed question under mentor supervision.'
    }
  ];

  return (
    <section id="methodology" className="py-16 sm:py-24 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>The Alchemy System</span>
            <span aria-hidden="true">·</span>
            <span>Proven 5-Stage Engine</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            How Raw Effort is Transmuted Into Top Percentiles
          </h2>
          <p className="mt-2 text-base text-slate-600">
            A disciplined, reproducible academic framework refined over two decades of coaching rankers in Maharashtra.
          </p>
        </div>

        {/* 2-Column Split: Image with highlight card on Left, Steps on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Visual of study group with stats */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50">
              <img
                src="/src/assets/images/students_study_prep_1792297114468.jpg"
                alt="Students studying chemistry and physics problems at Alchemy Science Academy"
                className="w-full h-72 sm:h-80 object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-slate-900 text-white">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Collaborative Academic Rigor</p>
                <p className="font-semibold text-white text-sm mt-1">Dedicated Study Library &amp; Daily Doubt Tables</p>
                <p className="text-xs text-slate-300 mt-1">
                  Students study alongside faculty until 8:00 PM with direct access to Prof. Sharad Raktate.
                </p>
              </div>
            </div>

            {/* Quick action card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-display font-bold text-slate-900 text-sm">Experience the Alchemy Pedagogy</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Attend 2 days of demo lectures and meet Prof. Sharad Raktate in person before taking admission.
              </p>
              <button
                onClick={onOpenSmsDesk}
                className="mt-4 w-full py-2.5 px-3 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors shadow-sm"
              >
                SMS "Demo Lecture" to {ACADEMY_INFO.phone}
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Numbered Steps */}
          <div className="lg:col-span-7 space-y-6">
            {steps.map((st) => (
              <div 
                key={st.number}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-indigo-200 hover:bg-slate-50/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono font-bold text-2xl text-amber-600 shrink-0 tabular-nums">
                    {st.number}.
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight">
                      {st.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-900 mt-0.5">
                      {st.subtitle}
                    </p>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
