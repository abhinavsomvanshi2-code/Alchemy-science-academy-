import React from 'react';
import { MessageSquare, Phone, ArrowDown, Award, Users, BookOpen, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

interface HeroProps {
  onOpenSmsDesk: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSmsDesk }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Subtle radial background tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(67,56,202,0.25),rgba(255,255,255,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Proposition & Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Quiet metadata line without pills */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium tracking-wide mb-4">
              <span>JEE (Main &amp; Advanced)</span>
              <span aria-hidden="true" className="text-amber-400">·</span>
              <span>NEET-UG</span>
              <span aria-hidden="true" className="text-amber-400">·</span>
              <span>MHT-CET</span>
              <span aria-hidden="true" className="text-amber-400">·</span>
              <span className="text-amber-300 font-semibold">Admissions Open 2025–2026</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Where Rigorous Science Turns Dedication Into <span className="text-amber-400">Top Competitive Ranks.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Under the personal mentorship of <strong className="text-white font-semibold">{ACADEMY_INFO.director}</strong>, Alchemy Science Academy delivers concept-nucleated coaching, disciplined problem-solving drills, and consistent top percentiles for engineering and medical aspirants.
            </p>

            {/* Direct SMS Notice Card */}
            <div className="mt-6 p-4 rounded-xl bg-slate-800/80 border border-slate-700 max-w-2xl">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-indigo-900/80 text-amber-400 rounded-lg shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm text-slate-300">
                  <p className="font-semibold text-white">
                    Direct SMS Inquiries to Director: <span className="text-amber-300 font-mono text-base ml-1">{ACADEMY_INFO.displayPhone}</span>
                  </p>
                  <p className="mt-1 text-slate-400 leading-normal">
                    To maintain academic discipline, every candidate must state <strong className="text-white">Student Name</strong> and <strong className="text-white">Target Requirement</strong> in their SMS inquiry.
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenSmsDesk}
                className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-400/20 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>Launch Direct SMS Composer</span>
              </button>

              <a
                href={`tel:${ACADEMY_INFO.phone}`}
                className="px-5 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {ACADEMY_INFO.phone}</span>
              </a>

              <a
                href="#programs"
                className="px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
              >
                <span>View Courses</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Micro proof badges */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Limited 35 Students / Batch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Teaching by Sharad Sir</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Daily Practice Problems (DPP)</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Classroom Asset */}
          <div className="lg:col-span-5 flex items-center">
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-800">
              <img
                src="/src/assets/images/hero_alchemy_academy_1792297113168.jpg"
                alt="Prof. Sharad Raktate explaining chemical bonding and quantum mechanics in modern classroom"
                className="w-full h-80 sm:h-96 lg:h-full object-cover min-h-[380px]"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Classroom Integrity</p>
                    <p className="text-sm font-bold text-white mt-0.5">Quantum Mechanics &amp; Chemical Bonding Lecture</p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 tabular-nums">Batch 2025-26</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Full-Width KPI & Assurance Strip */}
        <div className="mt-14 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">99.86%ile</p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">JEE Top Percentile</p>
            <p className="text-xs text-slate-400 mt-0.5">IIT Bombay selections in Computer Science</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">692 / 720</p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">NEET-UG Top Score</p>
            <p className="text-xs text-slate-400 mt-0.5">Admissions into KEM Mumbai &amp; BJMC Pune</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">99.94%ile</p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">MHT-CET State Top Rank</p>
            <p className="text-xs text-slate-400 mt-0.5">COEP &amp; VJTI engineering admissions</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">1-on-1</p>
            <p className="text-xs sm:text-sm font-semibold text-white mt-1">Director Mentorship</p>
            <p className="text-xs text-slate-400 mt-0.5">Direct accessibility to Prof. Sharad Raktate</p>
          </div>
        </div>

      </div>
    </section>
  );
};
