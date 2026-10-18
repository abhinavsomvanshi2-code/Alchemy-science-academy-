import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  Copy, 
  Check, 
  PhoneCall, 
  AlertCircle, 
  QrCode, 
  CheckCircle2, 
  Sparkles,
  RefreshCw
} from 'lucide-react';
import { ACADEMY_INFO } from '../data/courses';

interface SmsInquiryDeskProps {
  initialRequirement?: string;
}

export const SmsInquiryDesk: React.FC<SmsInquiryDeskProps> = ({ initialRequirement }) => {
  const [studentName, setStudentName] = useState('');
  const [requirement, setRequirement] = useState(initialRequirement || 'JEE (Main + Advanced) 2-Year Program');
  const [currentClass, setCurrentClass] = useState('10th Appearing / Moving to 11th');
  const [contactNumber, setContactNumber] = useState('');
  const [parentName, setParentName] = useState('');
  const [city, setCity] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [submittedAttempt, setSubmittedAttempt] = useState(false);
  const [smsSentNotice, setSmsSentNotice] = useState(false);

  useEffect(() => {
    if (initialRequirement) {
      setRequirement(initialRequirement);
    }
  }, [initialRequirement]);

  const presetRequirements = [
    'JEE (Main + Advanced) 2-Year Program',
    'NEET-UG Medical Ranker Batch',
    'MHT-CET Top Ranker Accelerator (PCM)',
    'MHT-CET Top Ranker Accelerator (PCB)',
    'Class 11 & 12 Board + Competitive Foundation',
    'Dropper / Repeater Intensive Batch',
    'Personal Counseling with Director Prof. Sharad Raktate'
  ];

  const isNameValid = studentName.trim().length >= 2;
  const isRequirementValid = requirement.trim().length >= 3;
  const canSend = isNameValid && isRequirementValid;

  // Format the standard SMS message payload
  const formattedSmsBody = `[ALCHEMY SCIENCE ACADEMY INQUIRY]
ATTN: Director Prof. Sharad Raktate
STUDENT NAME: ${studentName.trim() || '[NAME REQUIRED]'}
REQUIREMENT: ${requirement.trim() || '[REQUIREMENT REQUIRED]'}
CLASS: ${currentClass}
${parentName.trim() ? `PARENT: ${parentName.trim()}\n` : ''}${contactNumber.trim() ? `CONTACT: ${contactNumber.trim()}\n` : ''}${city.trim() ? `CITY: ${city.trim()}\n` : ''}${additionalNotes.trim() ? `NOTES: ${additionalNotes.trim()}\n` : ''}Please send batch schedule and admission details.`;

  // Encode for URI
  const encodedBody = encodeURIComponent(formattedSmsBody);
  // SMS URI format: works across iOS and Android
  const smsHref = `sms:${ACADEMY_INFO.phone}?&body=${encodedBody}`;
  const whatsappHref = `https://wa.me/91${ACADEMY_INFO.phone}?text=${encodedBody}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedSmsBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSmsClick = (e: React.MouseEvent) => {
    setSubmittedAttempt(true);
    if (!canSend) {
      e.preventDefault();
      return;
    }
    setSmsSentNotice(true);
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    setSubmittedAttempt(true);
    if (!canSend) {
      e.preventDefault();
      return;
    }
  };

  const handleReset = () => {
    setStudentName('');
    setRequirement('JEE (Main + Advanced) 2-Year Program');
    setContactNumber('');
    setParentName('');
    setCity('');
    setAdditionalNotes('');
    setSubmittedAttempt(false);
    setSmsSentNotice(false);
  };

  return (
    <section id="sms-desk" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-900 tracking-wider uppercase mb-2">
            <span>Direct SMS Inquiry Protocol</span>
            <span>·</span>
            <span>Hotline: {ACADEMY_INFO.phone}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Direct SMS Inquiry Desk
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Inquiries are routed directly to <strong className="text-slate-900 font-semibold">{ACADEMY_INFO.director}</strong>. 
            To maintain academic standards and allow personalized evaluation, <span className="text-rose-700 font-bold">Candidate Name</span> and <span className="text-rose-700 font-bold">Requirement</span> are strictly compulsory.
          </p>
        </div>

        {/* Main Grid: Builder on Left, Live SMS Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Field Entry */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              <h3 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span>Fill Inquiry Details</span>
              </h3>
              <button 
                type="button" 
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-5">
              
              {/* Field 1: Student Name (Compulsory) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  1. Candidate / Student Full Name <span className="text-rose-600 font-bold">* (COMPULSORY)</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohan R. Patil"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border text-sm transition-all outline-none ${
                      submittedAttempt && !isNameValid
                        ? 'border-rose-500 bg-rose-50/50 focus:ring-2 focus:ring-rose-200'
                        : isNameValid
                        ? 'border-emerald-500 bg-emerald-50/20 focus:ring-2 focus:ring-emerald-200'
                        : 'border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100'
                    }`}
                  />
                  {isNameValid ? (
                    <Check className="absolute right-3.5 top-3.5 w-4 h-4 text-emerald-600" />
                  ) : submittedAttempt ? (
                    <AlertCircle className="absolute right-3.5 top-3.5 w-4 h-4 text-rose-600" />
                  ) : null}
                </div>
                {submittedAttempt && !isNameValid && (
                  <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>Student name is mandatory per Director's instruction.</span>
                  </p>
                )}
              </div>

              {/* Field 2: Target Requirement / Course (Compulsory) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  2. Academic Requirement / Course <span className="text-rose-600 font-bold">* (COMPULSORY)</span>
                </label>
                
                {/* Quick Presets */}
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {presetRequirements.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setRequirement(preset)}
                      className={`text-xs px-2.5 py-1 rounded-md transition-colors border text-left ${
                        requirement === preset
                          ? 'bg-indigo-900 text-white border-indigo-900 font-medium'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Specify target course (e.g., JEE Main 2026, NEET Repeater, MHT-CET Crash Course)"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border text-sm transition-all outline-none ${
                      submittedAttempt && !isRequirementValid
                        ? 'border-rose-500 bg-rose-50/50 focus:ring-2 focus:ring-rose-200'
                        : isRequirementValid
                        ? 'border-emerald-500 bg-emerald-50/20 focus:ring-2 focus:ring-emerald-200'
                        : 'border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100'
                    }`}
                  />
                </div>
                {submittedAttempt && !isRequirementValid && (
                  <p className="mt-1 text-xs text-rose-600 font-medium flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    <span>Requirement is mandatory per Director's instruction.</span>
                  </p>
                )}
              </div>

              {/* Field 3: Current Class & Phone in 2-col */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Current Class / Academic Year
                  </label>
                  <select
                    value={currentClass}
                    onChange={(e) => setCurrentClass(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                  >
                    <option value="10th Appearing / Moving to 11th">10th Appearing / Moving to 11th</option>
                    <option value="11th Studying / Moving to 12th">11th Studying / Moving to 12th</option>
                    <option value="12th Board Appearing (2025-26)">12th Board Appearing (2025-26)</option>
                    <option value="12th Passed / Repeater / Dropper">12th Passed / Repeater / Dropper</option>
                    <option value="Foundation (Class 8th / 9th / 10th)">Foundation (Class 8th / 9th / 10th)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Contact Phone (for Callback)
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 98220XXXXX"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                  />
                </div>
              </div>

              {/* Field 4: Optional Parent Name & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Parent / Guardian Name (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mr. Ramesh Patil"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    City / Location (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Pune / Nashik / Aurangabad"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                  />
                </div>
              </div>

              {/* Field 5: Specific Query / Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Additional Queries (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Would like to inquire about batch timings, fee installment structure, and personal demo lecture with Prof. Sharad Raktate."
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none resize-none"
                />
              </div>

            </form>
          </div>

          {/* Right Column: Live Formatted SMS Preview & 1-Click Dispatch */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Live Message Box */}
            <div className="bg-slate-900 text-slate-100 p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    SMS Preview to {ACADEMY_INFO.phone}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">
                  {formattedSmsBody.length} chars
                </span>
              </div>

              {/* Requirement Check Warning */}
              {(!isNameValid || !isRequirementValid) && (
                <div className="mt-4 p-3 rounded-lg bg-rose-950/70 border border-rose-800/80 text-rose-200 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-rose-100">Compulsory Fields Pending:</p>
                    <p className="mt-0.5 text-rose-200">
                      {!isNameValid && '• Student Name is required. '}
                      {!isRequirementValid && '• Academic Requirement is required.'}
                    </p>
                  </div>
                </div>
              )}

              {/* Monospace Message Container */}
              <div className="mt-4 p-4 rounded-xl bg-slate-950/90 border border-slate-800 font-mono text-xs leading-relaxed text-slate-300 whitespace-pre-wrap select-all">
                {formattedSmsBody}
              </div>

              {/* Verification of protocol */}
              <div className="mt-4 text-xs text-slate-400 space-y-1">
                <p className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Target Recipient: <strong>{ACADEMY_INFO.phone}</strong></span>
                </p>
                <p className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Recipient: <strong>Director {ACADEMY_INFO.director}</strong></span>
                </p>
              </div>

              {/* Primary Dispatch Action Buttons */}
              <div className="mt-6 space-y-2.5">
                
                {/* Send SMS Button */}
                <a
                  href={canSend ? smsHref : '#'}
                  onClick={handleSmsClick}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    canSend 
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md shadow-amber-400/20 cursor-pointer'
                      : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct SMS to {ACADEMY_INFO.phone}</span>
                </a>

                {/* Send via WhatsApp */}
                <a
                  href={canSend ? whatsappHref : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 border transition-all ${
                    canSend
                      ? 'border-emerald-600 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300'
                      : 'border-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Send via WhatsApp (+91 {ACADEMY_INFO.phone})</span>
                </a>

                {/* Secondary Actions Row */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy Text</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowQr(!showQr)}
                    className="py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 border border-slate-700 transition-colors"
                  >
                    <QrCode className="w-3.5 h-3.5 text-slate-400" />
                    <span>{showQr ? 'Hide QR' : 'Phone QR'}</span>
                  </button>
                </div>

                {/* Call directly fallback */}
                <a
                  href={`tel:${ACADEMY_INFO.phone}`}
                  className="w-full py-2.5 px-4 rounded-lg bg-transparent hover:bg-slate-800 text-slate-300 text-xs font-medium flex items-center justify-center gap-1.5 border border-slate-800 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>Or Call Office: {ACADEMY_INFO.displayPhone}</span>
                </a>

              </div>

              {/* QR Code view if toggled */}
              {showQr && (
                <div className="mt-4 p-4 rounded-xl bg-white text-slate-900 text-center animate-in fade-in duration-200">
                  <p className="text-xs font-bold text-slate-900 mb-2">Scan with Phone to Trigger SMS</p>
                  <div className="flex justify-center p-2 bg-slate-50 border border-slate-200 rounded-lg">
                    {/* Visual QR representation for sms link */}
                    <svg viewBox="0 0 100 100" className="w-36 h-36">
                      <rect width="100" height="100" fill="#ffffff" />
                      {/* Standard QR locator corners */}
                      <rect x="10" y="10" width="25" height="25" fill="#0f172a" />
                      <rect x="14" y="14" width="17" height="17" fill="#ffffff" />
                      <rect x="18" y="18" width="9" height="9" fill="#0f172a" />

                      <rect x="65" y="10" width="25" height="25" fill="#0f172a" />
                      <rect x="69" y="14" width="17" height="17" fill="#ffffff" />
                      <rect x="73" y="18" width="9" height="9" fill="#0f172a" />

                      <rect x="10" y="65" width="25" height="25" fill="#0f172a" />
                      <rect x="14" y="69" width="17" height="17" fill="#ffffff" />
                      <rect x="18" y="73" width="9" height="9" fill="#0f172a" />

                      {/* Data dots pattern */}
                      <rect x="42" y="12" width="6" height="6" fill="#0f172a" />
                      <rect x="52" y="15" width="6" height="6" fill="#0f172a" />
                      <rect x="40" y="25" width="8" height="6" fill="#0f172a" />
                      <rect x="48" y="35" width="6" height="8" fill="#0f172a" />
                      <rect x="25" y="45" width="6" height="6" fill="#0f172a" />
                      <rect x="35" y="45" width="8" height="6" fill="#0f172a" />
                      <rect x="48" y="48" width="8" height="8" fill="#0f172a" />
                      <rect x="60" y="42" width="6" height="6" fill="#0f172a" />
                      <rect x="75" y="42" width="6" height="8" fill="#0f172a" />
                      <rect x="65" y="55" width="8" height="6" fill="#0f172a" />
                      <rect x="78" y="62" width="6" height="6" fill="#0f172a" />
                      <rect x="42" y="65" width="6" height="6" fill="#0f172a" />
                      <rect x="52" y="72" width="6" height="8" fill="#0f172a" />
                      <rect x="65" y="75" width="8" height="6" fill="#0f172a" />
                      <rect x="45" y="85" width="8" height="6" fill="#0f172a" />
                      <rect x="75" y="82" width="8" height="6" fill="#0f172a" />
                    </svg>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-600">
                    Direct SMS destination: <strong>{ACADEMY_INFO.phone}</strong>
                  </p>
                </div>
              )}

              {/* Sent notice confirmation feedback */}
              {smsSentNotice && (
                <div className="mt-3 p-3 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-200 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>SMS client launched! If not opened, click 'Copy Text' and paste in your Messages app.</span>
                </div>
              )}

            </div>

            {/* Reassurance note */}
            <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-100 text-xs text-indigo-950">
              <p className="font-bold flex items-center gap-1.5 text-indigo-900">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Director's Personal Response Guarantee</span>
              </p>
              <p className="mt-1 text-slate-600 leading-relaxed">
                Prof. Sharad Raktate or our academic coordinator will reply back via SMS or call within 2 hours during office hours (8:00 AM – 8:00 PM IST).
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
