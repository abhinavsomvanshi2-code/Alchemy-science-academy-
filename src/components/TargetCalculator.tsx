import React, { useState } from 'react';
import { Target, Calculator, ArrowRight, MessageSquare, BookOpen, Clock, Award } from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

interface TargetCalculatorProps {
  onSendCustomPlanToSms: (planSummary: string) => void;
}

export const TargetCalculator: React.FC<TargetCalculatorProps> = ({ onSendCustomPlanToSms }) => {
  const [selectedExam, setSelectedExam] = useState<'JEE' | 'NEET' | 'MHT_CET'>('JEE');
  const [targetCollegeTier, setTargetCollegeTier] = useState<'TOP_IIT_AIIMS' | 'TOP_NIT_GMC' | 'COEP_VJTI_STATE'>('TOP_IIT_AIIMS');
  const [currentDailyHours, setCurrentDailyHours] = useState<number>(6);

  const examDetails = {
    JEE: {
      name: 'JEE (Main & Advanced)',
      totalMarks: 300,
      tiers: {
        TOP_IIT_AIIMS: { label: 'Top 7 IITs (CSE/ECE)', targetScore: '240+ / 300 (JEE Main) & Top 1500 (Adv)', percentile: '99.70+ %ile', minHours: 8 },
        TOP_NIT_GMC: { label: 'Top NITs / IIITs', targetScore: '190+ / 300', percentile: '98.50+ %ile', minHours: 6 },
        COEP_VJTI_STATE: { label: 'Premier State Tier 1', targetScore: '160+ / 300', percentile: '96.00+ %ile', minHours: 5 }
      },
      keyFormula: 'Rigorous Calculus, Multi-concept Mechanics & Organic Mechanisms'
    },
    NEET: {
      name: 'NEET-UG (Medical)',
      totalMarks: 720,
      tiers: {
        TOP_IIT_AIIMS: { label: 'AIIMS New Delhi / Premier GMCs', targetScore: '690+ / 720', percentile: '99.85+ %ile', minHours: 9 },
        TOP_NIT_GMC: { label: 'State Top GMC (KEM, BJMC, Grant)', targetScore: '640+ / 720', percentile: '99.00+ %ile', minHours: 7 },
        COEP_VJTI_STATE: { label: 'Government Medical Colleges', targetScore: '590+ / 720', percentile: '97.50+ %ile', minHours: 6 }
      },
      keyFormula: '350+ in Biology (NCERT word-for-word) + 160+ in Physics & Chemistry'
    },
    MHT_CET: {
      name: 'MHT-CET (Engineering / Pharmacy)',
      totalMarks: 200,
      tiers: {
        TOP_IIT_AIIMS: { label: 'COEP / VJTI (Computer / IT)', targetScore: '175+ / 200', percentile: '99.75+ %ile', minHours: 7 },
        TOP_NIT_GMC: { label: 'PICT / SPIT / Walchand', targetScore: '155+ / 200', percentile: '98.50+ %ile', minHours: 6 },
        COEP_VJTI_STATE: { label: 'Autonomous Top Colleges', targetScore: '135+ / 200', percentile: '95.00+ %ile', minHours: 5 }
      },
      keyFormula: 'High-speed accuracy: 150 questions in 180 min without negative marks'
    }
  };

  const currentConfig = examDetails[selectedExam];
  const activeTier = currentConfig.tiers[targetCollegeTier];
  const hoursGap = activeTier.minHours - currentDailyHours;

  const handleInquireThisPlan = () => {
    const summary = `${currentConfig.name} - Goal: ${activeTier.label} (${activeTier.targetScore}, ${activeTier.percentile})`;
    onSendCustomPlanToSms(summary);
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            <span>Academic Target Benchmarking</span>
            <span aria-hidden="true">·</span>
            <span>Strategic Planning</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Interactive Target &amp; Percentile Planner
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Select your ambition, examine the benchmark cutoffs, and consult with Prof. Sharad Raktate on your tailored preparation roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
            
            {/* Step 1: Exam Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Select Target Competitive Exam
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['JEE', 'NEET', 'MHT_CET'] as const).map(e => (
                  <button
                    key={e}
                    onClick={() => setSelectedExam(e)}
                    className={`py-2.5 px-2 text-xs font-bold rounded-lg border transition-all text-center ${
                      selectedExam === e
                        ? 'bg-indigo-900 text-white border-indigo-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {e === 'MHT_CET' ? 'MHT-CET' : e}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: College Ambition Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Select Desired Institution Tier
              </label>
              <div className="space-y-2">
                {(['TOP_IIT_AIIMS', 'TOP_NIT_GMC', 'COEP_VJTI_STATE'] as const).map(tierKey => {
                  const t = currentConfig.tiers[tierKey];
                  return (
                    <button
                      key={tierKey}
                      onClick={() => setTargetCollegeTier(tierKey)}
                      className={`w-full p-3 rounded-lg border text-left transition-all flex items-center justify-between ${
                        targetCollegeTier === tierKey
                          ? 'bg-white border-indigo-600 ring-2 ring-indigo-100 shadow-sm'
                          : 'bg-white/80 border-slate-200 hover:bg-white text-slate-700'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold text-slate-900">{t.label}</span>
                      <span className="text-xs font-mono font-bold text-amber-700 tabular-nums">{t.percentile}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Current Daily Self-Study Hours */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  3. Current Daily Self-Study Hours
                </label>
                <span className="font-mono text-sm font-bold text-indigo-900">{currentDailyHours} hrs/day</span>
              </div>
              <input
                type="range"
                min={3}
                max={12}
                step={1}
                value={currentDailyHours}
                onChange={(e) => setCurrentDailyHours(Number(e.target.value))}
                className="w-full accent-indigo-900 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                <span>3 hrs (Base)</span>
                <span>6 hrs (Average)</span>
                <span>9 hrs (Intensive)</span>
                <span>12 hrs (Maximum)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Calculated Diagnostic Output */}
          <div className="lg:col-span-6 bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-lg space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-xs uppercase font-mono font-bold text-amber-400 tracking-wider">
                Target Benchmark Diagnostic
              </span>
              <span className="text-xs text-slate-400 font-medium">Alchemy Science Academy</span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="text-xs text-slate-400">Target Score Required</span>
                  <p className="font-mono text-lg font-bold text-amber-400 mt-1 tabular-nums">
                    {activeTier.targetScore}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <span className="text-xs text-slate-400">Target Percentile</span>
                  <p className="font-mono text-lg font-bold text-emerald-400 mt-1 tabular-nums">
                    {activeTier.percentile}
                  </p>
                </div>
              </div>

              {/* Study Hours Analysis */}
              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-slate-300">Recommended Daily Study</span>
                  <span className="font-mono font-bold text-white">{activeTier.minHours} hours/day</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2 overflow-hidden">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      currentDailyHours >= activeTier.minHours ? 'bg-emerald-400' : 'bg-amber-400'
                    }`}
                    style={{ width: `${Math.min(100, (currentDailyHours / activeTier.minHours) * 100)}%` }}
                  />
                </div>
                <p className="mt-2.5 text-xs text-slate-400 leading-normal">
                  {hoursGap <= 0 
                    ? '✓ Your current self-study hours match the benchmark for this tier! Focus on problem quality.'
                    : `⚠️ We recommend adding +${hoursGap} hour(s) of focused problem practice to comfortably reach this threshold.`}
                </p>
              </div>

              {/* Strategic takeaway */}
              <div className="text-xs text-slate-300 space-y-1.5 pt-1">
                <p className="text-slate-400 font-semibold uppercase text-[11px] tracking-wider">Core Academic Strategy:</p>
                <p className="italic text-slate-200">"{currentConfig.keyFormula}"</p>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-2">
              <button
                onClick={handleInquireThisPlan}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-amber-400/20"
              >
                <MessageSquare className="w-4 h-4 text-slate-950" />
                <span>SMS This Study Goal to Prof. Sharad Raktate</span>
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-2">
                Auto-fills into the Direct SMS inquiry desk with phone: {ACADEMY_INFO.phone}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
