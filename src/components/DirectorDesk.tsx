import React from 'react';
import { MessageSquare, Phone, CheckCircle2, Quote, Award, Sparkles } from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

interface DirectorDeskProps {
  onInquireWithDirector: () => void;
}

export const DirectorDesk: React.FC<DirectorDeskProps> = ({ onInquireWithDirector }) => {
  return (
    <section id="director" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Academic Leadership</span>
            <span aria-hidden="true">·</span>
            <span>Founder &amp; Director</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Director's Academic Desk
          </h2>
          <p className="mt-2 text-base text-slate-600">
            A message from <strong className="text-slate-900 font-semibold">{ACADEMY_INFO.director}</strong> to engineering &amp; medical aspirants and parents.
          </p>
        </div>

        {/* 2-Column Split: Director Portrait + Personal Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Portrait & Credentials */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src="/src/assets/images/director_prof_raktate_1792297113027.jpg"
                alt="Prof. Sharad Raktate - Director of Alchemy Science Academy"
                className="w-full aspect-square object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              <div className="p-6 bg-slate-900 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white tracking-tight">
                      {ACADEMY_INFO.director}
                    </h3>
                    <p className="text-xs font-medium text-amber-400 mt-0.5">
                      Director &amp; Head of Academic Pedagogy
                    </p>
                    <p className="text-xs text-slate-300 mt-2">
                      20+ Years Mentoring Toppers in JEE (Main &amp; Advanced), NEET-UG &amp; MHT-CET
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Direct Contact:</span>
                  <a href={`tel:${ACADEMY_INFO.phone}`} className="font-mono font-bold text-amber-300 hover:underline">
                    {ACADEMY_INFO.displayPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Educational Philosophy & Direct Commitments */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="relative p-6 sm:p-7 rounded-2xl bg-amber-50/50 border border-amber-200/80">
              <Quote className="w-8 h-8 text-amber-500/30 absolute top-4 right-4" />
              <p className="text-base sm:text-lg font-serif italic text-slate-800 leading-relaxed">
                "In science, alchemy was once thought to turn base metals into gold. At Alchemy Science Academy, our alchemy is strictly rational: we take raw student determination, pass it through rigorous conceptual clarity and disciplined testing, and produce gold-standard ranks in IIT-JEE, NEET-UG, and MHT-CET."
              </p>
              <p className="mt-3 text-xs sm:text-sm font-semibold text-slate-900 not-italic">
                — {ACADEMY_INFO.director}
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Too many coaching institutions have become crowded factories with 150 students per room and surrogate tutors. At <strong>Alchemy Science Academy</strong>, we maintain intimate batches where I personally track each candidate's problem-solving accuracy, conceptual gaps, and examination temperament.
              </p>
              <p>
                Whether a student is striving for the top 500 ranks in JEE Advanced, aiming for 680+ in NEET-UG, or targeting 99.5+ percentile for COEP / VJTI in MHT-CET, success begins with a clear diagnosis of where they currently stand.
              </p>
            </div>

            {/* The 3 Pillars of Director's Guarantee */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold text-indigo-900 uppercase tracking-wide">Pillar 1</p>
                <p className="font-semibold text-slate-900 text-sm mt-1">Direct Accessibility</p>
                <p className="text-xs text-slate-600 mt-1 leading-normal">
                  Students and parents can directly contact the Director for academic reviews.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold text-indigo-900 uppercase tracking-wide">Pillar 2</p>
                <p className="font-semibold text-slate-900 text-sm mt-1">Zero Doubt Left Behind</p>
                <p className="text-xs text-slate-600 mt-1 leading-normal">
                  Daily dedicated 1-on-1 doubt clearing slots for every student before batch departure.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-xs font-bold text-indigo-900 uppercase tracking-wide">Pillar 3</p>
                <p className="font-semibold text-slate-900 text-sm mt-1">Transparent Evaluation</p>
                <p className="text-xs text-slate-600 mt-1 leading-normal">
                  Fortnightly score reports and micro-analysis sent directly to parents.
                </p>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onInquireWithDirector}
                className="px-5 py-3 text-xs sm:text-sm font-bold text-white bg-indigo-900 hover:bg-indigo-800 rounded-lg shadow-sm transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>SMS Director for 1-on-1 Guidance (8999952512)</span>
              </button>

              <a
                href={`tel:${ACADEMY_INFO.phone}`}
                className="px-4 py-3 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-400 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-700" />
                <span>Call Director's Desk</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
