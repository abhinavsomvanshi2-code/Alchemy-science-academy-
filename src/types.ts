export type ExamType = 'JEE' | 'NEET' | 'MHT_CET' | 'FOUNDATION' | 'ALL';

export interface CourseProgram {
  id: string;
  name: string;
  targetExam: string;
  duration: string;
  eligibility: string;
  description: string;
  keyFeatures: string[];
  subjects: string[];
  batchSize: number;
  badge?: string;
}

export interface InquiryFormData {
  studentName: string;
  requirement: string;
  targetExam: string;
  currentClass: string;
  contactNumber: string;
  parentName: string;
  city: string;
  additionalNotes: string;
}

export interface StudentResult {
  id: string;
  name: string;
  exam: string;
  score: string;
  rankOrPercentile: string;
  allottedCollege: string;
  quote: string;
  year: string;
}
