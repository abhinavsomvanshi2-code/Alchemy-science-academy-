import React, { useState } from 'react';
import { Check, ArrowRight, MessageSquare, Clock, Users, GraduationCap, ChevronRight } from 'lucide-react';
import { COURSES_DATA, ACADEMY_INFO } from '../data/courses';
import { CourseProgram } from '../types';

interface ProgramsSectionProps {
  onSelectCourseForSms: (courseName: string) => void;
  onOpenExamGuide: (examType: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ 
  onSelectCourseForSms,
  onOpenExamGuide 
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'JEE' | 'NEET' | 'MHT_CET'>('ALL');

  const filteredCourses = COURSES_DATA.filter(course => {
    if (selectedFilter === 'ALL') return true;
    if (selectedFilter === 'JEE') return course.id.includes('jee');
    if (selectedFilter === 'NEET') return course.id.includes('neet');
    if (selectedFilter === 'MHT_CET') return course.id.includes('mht-cet');
    return true;
  });

  return (
    <section id="programs" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Filter Segmented Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-900 uppercase tracking-wider mb-2">
              <span>Academic Programs</span>
              <span aria-hidden="true">·</span>
              <span>Class 11, 12 &amp; Repeaters</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Targeted Entrance Examination Programs
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Engineered for syllabus thoroughness, high-speed calculation accuracy, and zero negative-marking discipline.
            </p>
          </div>

          {/* Interactive Filter Control (functional tabs with clean segmented styling) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl shrink-0 self-start md:self-end">
            {(['ALL', 'JEE', 'NEET', 'MHT_CET'] as const).map(tabKey => (
              <button
                key={tabKey}
                onClick={() => setSelectedFilter(tabKey)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedFilter === tabKey
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tabKey === 'ALL' && 'All Programs'}
                {tabKey === 'JEE' && 'JEE (Main & Adv)'}
                {tabKey === 'NEET' && 'NEET-UG'}
                {tabKey === 'MHT_CET' && 'MHT-CET'}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredCourses.map((course, idx) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all shadow-sm"
            >
              <div>
                {/* Clean unboxed metadata line */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-indigo-900">{course.badge || 'Academic Track'}</span>
                  <span aria-hidden="true">·</span>
                  <span>{course.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{course.batchSize} Students/Batch</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {course.name}
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {course.description}
                </p>

                {/* Key Subjects */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-600">
                  <span className="font-medium text-slate-900">Curriculum:</span>
                  {course.subjects.map((sub, sIdx) => (
                    <span key={sub} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                      {sub}
                    </span>
                  ))}
                </div>

                {/* Feature checklist */}
                <div className="mt-5 space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-900">Program Deliverables:</p>
                  {course.keyFeatures.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Eligibility: <strong className="text-slate-800">{course.eligibility}</strong></span>
                  <button
                    onClick={() => onOpenExamGuide(course.id.includes('jee') ? 'JEE' : course.id.includes('neet') ? 'NEET' : 'MHT_CET')}
                    className="text-indigo-900 font-semibold hover:underline flex items-center gap-0.5"
                  >
                    <span>Pattern Guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={() => onSelectCourseForSms(course.name)}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-indigo-900 hover:bg-indigo-800 text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>Inquire via SMS (Send to {ACADEMY_INFO.phone})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Notice on Customization */}
        <div className="mt-10 p-5 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Need a Customized Batch or Repeater/Dropper Schedule?</p>
            <p className="text-slate-500 mt-0.5">
              Prof. Sharad Raktate designs specialized schedules for test-series only or single-subject booster modules (Physics, Chemistry, Maths, Bio).
            </p>
          </div>
          <button
            onClick={() => onSelectCourseForSms('Customized Subject Booster / Test Series')}
            className="px-4 py-2.5 text-xs font-bold text-indigo-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Direct SMS for Custom Batch
          </button>
        </div>

      </div>
    </section>
  );
};
