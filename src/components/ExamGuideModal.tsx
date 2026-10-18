import React from 'react';
import { X, BookOpen, Clock, AlertTriangle, CheckCircle, MessageSquare } from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

interface ExamGuideModalProps {
  examType: string | null;
  onClose: () => void;
  onSelectForSms: (requirement: string) => void;
}

export const ExamGuideModal: React.FC<ExamGuideModalProps> = ({ examType, onClose, onSelectForSms }) => {
  if (!examType) return null;

  const guides: Record<string, {
    title: string;
    conductingBody: string;
    totalMarks: string;
    duration: string;
    mode: string;
    markingScheme: string;
    subjectDistribution: { subject: string; questions: string; marks: string }[];
    preparationStrategy: string[];
  }> = {
    JEE: {
      title: 'JEE Main & Advanced Examination Pattern',
      conductingBody: 'National Testing Agency (NTA) & IIT Joint Admission Board',
      totalMarks: '300 Marks (JEE Main) / Dynamic (JEE Advanced ~360)',
      duration: '3 Hours per paper',
      mode: 'Computer Based Test (CBT)',
      markingScheme: '+4 for Correct, -1 for Incorrect (MCQs & Numerical Value Questions)',
      subjectDistribution: [
        { subject: 'Physics', questions: '25 Questions (20 MCQ + 5 Numerical)', marks: '100 Marks' },
        { subject: 'Chemistry', questions: '25 Questions (20 MCQ + 5 Numerical)', marks: '100 Marks' },
        { subject: 'Mathematics', questions: '25 Questions (20 MCQ + 5 Numerical)', marks: '100 Marks' },
      ],
      preparationStrategy: [
        'Master conceptual derivations in Mechanics, Electrostatics, and Calculus.',
        'Solve 50 previous years questions (PYQs) per chapter under timed conditions.',
        'Zero-error approach in numerical value questions to maximize rank boost.'
      ]
    },
    NEET: {
      title: 'NEET-UG Medical Entrance Examination Pattern',
      conductingBody: 'National Testing Agency (NTA)',
      totalMarks: '720 Marks',
      duration: '3 Hours 20 Minutes (200 Minutes)',
      mode: 'Pen & Paper (Offline OMR Sheet)',
      markingScheme: '+4 for Correct, -1 for Incorrect',
      subjectDistribution: [
        { subject: 'Physics', questions: '45 Questions (Section A: 35 + Section B: 10/15)', marks: '180 Marks' },
        { subject: 'Chemistry', questions: '45 Questions (Section A: 35 + Section B: 10/15)', marks: '180 Marks' },
        { subject: 'Botany', questions: '45 Questions (Section A: 35 + Section B: 10/15)', marks: '180 Marks' },
        { subject: 'Zoology', questions: '45 Questions (Section A: 35 + Section B: 10/15)', marks: '180 Marks' },
      ],
      preparationStrategy: [
        '100% line-by-line NCERT Biology mastery (target: 350+ out of 360).',
        'Speed calculation shortcuts for Physics and Physical Chemistry.',
        'Rigorous OMR bubbling practice to eliminate mis-marking and bubble bleeding.'
      ]
    },
    MHT_CET: {
      title: 'MHT-CET (Engineering / Pharmacy) Pattern',
      conductingBody: 'State Common Entrance Test Cell, Maharashtra',
      totalMarks: '200 Marks (PCM or PCB)',
      duration: '180 Minutes (90 min Physics+Chemistry, 90 min Maths/Bio)',
      mode: 'Computer Based Test (CBT)',
      markingScheme: 'NO NEGATIVE MARKING (+2 per Math Q, +1 per Physics/Chem/Bio Q)',
      subjectDistribution: [
        { subject: 'Mathematics (for PCM)', questions: '50 Questions', marks: '100 Marks (2 marks each)' },
        { subject: 'Physics', questions: '50 Questions', marks: '50 Marks (1 mark each)' },
        { subject: 'Chemistry', questions: '50 Questions', marks: '50 Marks (1 mark each)' },
        { subject: 'Biology (for PCB)', questions: '100 Questions', marks: '100 Marks (1 mark each)' },
      ],
      preparationStrategy: [
        'Strict mastery of Maharashtra State Board (HSC) textbooks (80% Class 12, 20% Class 11).',
        'Speed is paramount: since there is no negative marking, 100% attempt rate is essential.',
        'High accuracy in Mathematics: 50 questions dictate 50% of the aggregate score.'
      ]
    }
  };

  const guide = guides[examType] || guides['JEE'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-900">Official Exam Blueprint</span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mt-0.5">{guide.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700">
          
          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-2.5 rounded-lg bg-slate-100/70">
              <span className="text-[11px] text-slate-500 block">Total Marks</span>
              <strong className="font-mono text-slate-900 text-sm">{guide.totalMarks}</strong>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-100/70">
              <span className="text-[11px] text-slate-500 block">Duration</span>
              <strong className="text-slate-900">{guide.duration}</strong>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-100/70">
              <span className="text-[11px] text-slate-500 block">Test Mode</span>
              <strong className="text-slate-900">{guide.mode}</strong>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-100/70">
              <span className="text-[11px] text-slate-500 block">Negative Mark</span>
              <strong className="text-slate-900">{guide.markingScheme.includes('NO') ? 'No Negative' : '-1 Mark'}</strong>
            </div>
          </div>

          {/* Subject Distribution Table */}
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Subject-wise Marks Distribution</h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold text-xs">
                    <th className="py-2.5 px-4">Subject</th>
                    <th className="py-2.5 px-4">Questions</th>
                    <th className="py-2.5 px-4">Total Weight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {guide.subjectDistribution.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50/50">
                      <td className="py-2.5 px-4 font-semibold text-slate-900">{row.subject}</td>
                      <td className="py-2.5 px-4 font-mono">{row.questions}</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-indigo-900">{row.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Strategy Points */}
          <div>
            <h4 className="font-bold text-slate-900 mb-2">Alchemy Science Academy Strategy:</h4>
            <div className="space-y-2">
              {guide.preparationStrategy.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry reminder */}
          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs">
            <p className="font-bold text-amber-900">Direct Inquiries to Director Prof. Sharad Raktate:</p>
            <p className="mt-0.5 text-amber-800">
              SMS <span className="font-bold">{ACADEMY_INFO.phone}</span> with your Name &amp; Requirement to receive previous years question analysis and batch schedules.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectForSms(`${examType} Complete Preparation Batch`);
            }}
            className="px-4 py-2 text-xs font-bold text-white bg-indigo-900 hover:bg-indigo-800 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>Inquire for {examType} via SMS</span>
          </button>
        </div>

      </div>
    </div>
  );
};
