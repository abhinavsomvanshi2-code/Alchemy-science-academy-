import { CourseProgram, StudentResult } from '../types';

export const ACADEMY_INFO = {
  name: 'Alchemy Science Academy',
  director: 'Prof. Sharad Raktate',
  phone: '8999952512',
  displayPhone: '+91 89999 52512',
  tagline: 'Precision Coaching for JEE, NEET-UG & MHT-CET',
  address: 'Alchemy Science Academy Campus, Maharashtra, India',
  email: 'inquiry@alchemyscience.edu',
  inquiryRequirementNotice: 'Direct SMS Inquiry to 8999952512. Student Name and Exact Requirement are compulsory.',
};

export const COURSES_DATA: CourseProgram[] = [
  {
    id: 'jee-main-adv',
    name: 'JEE (Main + Advanced) Two-Year Pinnacle Batch',
    targetExam: 'JEE Main & IIT-JEE Advanced',
    duration: '2 Years (Class 11 & 12 Integrated)',
    eligibility: 'Class 10 Passed / Appearing Students',
    description: 'Comprehensive, deep-dive conceptual training for IIT, NIT, and IIIT aspirants. Designed for students aspiring for top 1,000 All-India Ranks with rigorous multi-concept problem solving.',
    keyFeatures: [
      'Core Mechanics, Electrodynamics & Advanced Calculus mastery',
      'Daily Practice Problem (DPP) sets with tiered difficulty levels',
      'Direct problem-solving mentorship under Prof. Sharad Raktate',
      'Bi-weekly Computer Based Test (CBT) matching exact NTA JEE UI',
      'In-depth error analysis and rank-booster masterclasses'
    ],
    subjects: ['Physics', 'Chemistry (Physical, Organic, Inorganic)', 'Mathematics'],
    batchSize: 35,
    badge: 'Flagship Engineering Program'
  },
  {
    id: 'neet-ug-medical',
    name: 'NEET-UG Medical Masterclass Program',
    targetExam: 'NEET-UG (National Eligibility cum Entrance Test)',
    duration: '2 Years (Class 11 & 12) & 1-Year Repeater Option',
    eligibility: 'Class 10 Passed / Class 12 Appearing / Droppers',
    description: 'Tailored for MBBS, BDS, and veterinary aspirants aiming for premier Government Medical Colleges (AIIMS, KEM, BJMC, Grant Medical). Line-by-line NCERT decoding and high-speed calculation drills.',
    keyFeatures: [
      '100% NCERT line-by-line retention and diagrammatic decoding',
      'Speed-focused Physics and physical chemistry calculation shortcuts',
      'Extensive 360-degree Biology test bank with assertion-reason drills',
      'OMR sheet time-management and negative marking prevention training',
      'Weekly full-length 720-mark mock tests with instant percentile analysis'
    ],
    subjects: ['Physics', 'Chemistry', 'Botany', 'Zoology'],
    batchSize: 35,
    badge: 'Premier Medical Batch'
  },
  {
    id: 'mht-cet-accelerator',
    name: 'MHT-CET Top Ranker Accelerator (PCM & PCB)',
    targetExam: 'MHT-CET (Maharashtra Health & Technical Common Entrance Test)',
    duration: '1 Year & 6-Month Intensive Crash Course Options',
    eligibility: 'Class 11 & 12 Science (State Board & CBSE)',
    description: 'Dedicated focus on Maharashtra State Board syllabus mapping with competitive entrance accuracy. Target premier engineering & pharmacy institutes including COEP Pune, VJTI Mumbai, SPIT, and PICT.',
    keyFeatures: [
      'Precise Maharashtra State Board textbook syllabus alignment',
      'Last 15 years MHT-CET question trend breakdown & pattern mastery',
      'Speed drills to tackle 150 questions in 180 minutes with zero negative marking',
      'Chapter-wise formula sheets and rapid-fire mock tests',
      'Special focus on High-Weightage Chapters in Physics and Mathematics'
    ],
    subjects: ['Physics', 'Chemistry', 'Mathematics (PCM) or Biology (PCB)'],
    batchSize: 40,
    badge: 'State Rank Specialty'
  },
  {
    id: 'science-foundation',
    name: 'Class 11th & 12th Board + Competitive Foundation',
    targetExam: 'HSC Board + Competitive Foundation (JEE / NEET / CET)',
    duration: '2 Academic Years',
    eligibility: 'Class 10 passed students seeking solid base',
    description: 'Balanced coaching addressing both Maharashtra State Board / CBSE academic rigor and entrance examination fundamentals so students excel in 12th board exams without entrance exam pressure.',
    keyFeatures: [
      'Synchronized board curriculum coverage with competitive orientation',
      'Conceptual clarity building in fundamental Science and Mathematics',
      'Regular board-style subjective test series with personalized paper checking',
      'Stress-free environment emphasizing scientific curiosity and problem solving',
      'Direct guidance by Prof. Sharad Raktate on career pathway planning'
    ],
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    batchSize: 30,
    badge: 'Foundation & Boards'
  }
];

export const RESULTS_DATA: StudentResult[] = [
  {
    id: 'res-1',
    name: 'Aditya Deshmukh',
    exam: 'JEE Advanced',
    score: 'AIR 412',
    rankOrPercentile: '99.86 Percentile (JEE Main)',
    allottedCollege: 'IIT Bombay - Computer Science & Engineering',
    quote: 'The conceptual clarity imparted by Prof. Sharad Raktate transformed my approach. The DPPs and individual doubt sessions made complex physics intuitive.',
    year: '2025'
  },
  {
    id: 'res-2',
    name: 'Tanvi Kulkarni',
    exam: 'NEET-UG',
    score: '692 / 720',
    rankOrPercentile: 'AIR 684 (99.72 Percentile)',
    allottedCollege: 'Seth GS Medical College & KEM Hospital, Mumbai',
    quote: 'Alchemy Science Academy provided an unmatched test series. Line-by-line NCERT reviews and error analysis directly helped me achieve 355/360 in Biology.',
    year: '2025'
  },
  {
    id: 'res-3',
    name: 'Prathamesh Shinde',
    exam: 'MHT-CET (PCM)',
    score: '99.94 Percentile',
    rankOrPercentile: 'State Rank 48',
    allottedCollege: 'COEP Technological University, Pune - Electronics & TC',
    quote: 'Prof. Sharad Raktate sir’s time management strategies for MHT-CET were the game changer. Direct access to teachers for daily doubt solving is unbeatable.',
    year: '2025'
  },
  {
    id: 'res-4',
    name: 'Sanika Joshi',
    exam: 'NEET-UG',
    score: '681 / 720',
    rankOrPercentile: 'AIR 1120',
    allottedCollege: 'BJ Government Medical College, Pune (MBBS)',
    quote: 'The discipline, weekly tests, and continuous personal mentorship from Sharad Sir kept my morale high throughout my two-year journey.',
    year: '2024'
  }
];

export const FAQ_DATA = [
  {
    q: 'How do I submit an inquiry for admission or batch availability?',
    a: 'You can directly send an SMS to our Director contact number at 8999952512. Please note that specifying your Student Name and Exact Requirement (e.g., JEE 2026, NEET Repeater, MHT-CET Crash Course) is compulsory so Prof. Sharad Raktate can review your academic background immediately.'
  },
  {
    q: 'Why are Student Name and Requirement compulsory in the SMS?',
    a: 'Prof. Sharad Raktate personally reviews candidate inquiries to recommend the most suitable batch, target curriculum, and schedule based on your current academic standing. Providing your name and requirement ensures immediate, accurate counseling without delays.'
  },
  {
    q: 'What is the batch size at Alchemy Science Academy?',
    a: 'We strictly maintain limited batch sizes of 30 to 40 students per classroom. This guarantees that every student receives individualized attention and direct doubt-clearing sessions with Prof. Sharad Raktate and our expert faculty.'
  },
  {
    q: 'Are test series conducted in both online (CBT) and offline modes?',
    a: 'Yes. For JEE Main & Advanced and MHT-CET, we conduct Computer Based Tests (CBT) identical to the actual exam interface. For NEET-UG, all weekly mock tests are conducted on standard OMR sheets to replicate real exam pressure and timing.'
  },
  {
    q: 'Can parents meet Director Prof. Sharad Raktate for 1-on-1 counseling?',
    a: 'Absolutely. Prior appointment can be booked directly by sending an SMS to 8999952512 stating your Name and Requirement as "Parent Consultation with Prof. Sharad Raktate".'
  }
];
