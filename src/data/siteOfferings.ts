import {
  BookOpen,
  Briefcase,
  FileCheck,
  FileText,
  FileUser,
  Globe,
  Home,
  LucideIcon,
  Map,
  PlaneTakeoff,
  ShieldCheck,
  Users,
} from 'lucide-react';

export type OfferingCategory = 'services' | 'student-support';

export type Offering = {
  slug: string;
  title: string;
  shortTitle: string;
  desc: string;
  href: string;
  category: OfferingCategory;
  icon: LucideIcon;
  image: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  trustLine: string;
  intro: string;
  sections: {
    title: string;
    body: string;
  }[];
  highlights: string[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
};

export const services: Offering[] = [
  {
    slug: 'education-counselling',
    title: 'Education Counselling',
    shortTitle: 'Education Counselling',
    desc: 'We sit down with students and their families to unpack academic history, evaluate interests, and explore matching career fields. This foundational step eliminates confusion and identifies sustainable goals before financial commitments are made.',
    href: '/services/education-counselling',
    category: 'services',
    icon: Users,
    image: '/images/educationcounselling.jpg',
    eyebrow: 'Academic Direction',
    heroTitle: 'Education Counselling',
    heroSubtitle: 'Clarify your academic goals, strengths, and Canadian study options before making major decisions.',
    trustLine: 'Personalized education-first advisory',
    intro:
      'Strong applications start with a clear education plan. Our counselling sessions help students and families understand academic history, interests, budget realities, intake timing, and practical career goals before selecting programs.',
    sections: [
      {
        title: 'Student Profile Review',
        body: 'We review previous studies, grades, language readiness, preferred subjects, and long-term interests to create a grounded starting point for program exploration.',
      },
      {
        title: 'Goal Alignment',
        body: 'We compare the student’s interests with realistic Canadian college pathways, helping families understand what each option can support academically and professionally.',
      },
      {
        title: 'Decision Clarity',
        body: 'The outcome is a cleaner shortlist and a more confident next step, reducing scattered applications and unnecessary confusion.',
      },
    ],
    highlights: ['Academic profile review', 'Interest and pathway discussion', 'Family advisory sessions', 'Practical next-step planning'],
    ctaTitle: 'Ready To Clarify Your Education Direction?',
    ctaText: 'Book a counselling session and leave with a focused understanding of your strongest Canadian study options.',
    ctaLabel: 'Book Counselling',
  },
  {
    slug: 'college-program-selection',
    title: 'College & Program Selection Guidance',
    shortTitle: 'College & Program Selection',
    desc: 'With hundreds of options across Canada, finding the correct match is essential. We systematically compare available institutional options, examining program suitability, exact durations, regional nuances, operational delivery methods, and local industries.',
    href: '/services/college-program-selection',
    category: 'services',
    icon: BookOpen,
    image: '/images/collegeprogram.jpg',
    eyebrow: 'Program Match',
    heroTitle: 'College & Program Selection Guidance',
    heroSubtitle: 'Compare institutions, program formats, regional fit, and study outcomes with a practical framework.',
    trustLine: 'Structured college and program matching',
    intro:
      'Choosing a Canadian program means weighing more than the course name. We help students compare institutional requirements, program duration, location, delivery format, and career relevance.',
    sections: [
      {
        title: 'Institution Shortlisting',
        body: 'We identify college options that fit your academic background, preferred intake, location needs, and program expectations.',
      },
      {
        title: 'Program Comparison',
        body: 'We compare curriculum focus, credential type, duration, schedule, and delivery model so each choice is easier to evaluate.',
      },
      {
        title: 'Regional Fit',
        body: 'We discuss regional factors including local industries, commuting needs, and practical living considerations for students in Canada.',
      },
    ],
    highlights: ['College comparison support', 'Program duration review', 'Intake and delivery guidance', 'Location and industry context'],
    ctaTitle: 'Find A Program That Fits Your Plan',
    ctaText: 'Build a focused college shortlist with practical program comparison support.',
    ctaLabel: 'Compare Programs',
  },
  {
    slug: 'admission-application-support',
    title: 'Admission Application Support',
    shortTitle: 'Admission Applications',
    desc: 'Institutional applications demand strict adherence to deadlines and entry criteria. Our team reviews your academic files, helps organize necessary documentation, confirms intake schedules, and guides you through clean, accurate institutional submissions.',
    href: '/services/admission-application-support',
    category: 'services',
    icon: FileCheck,
    image: '/images/applicationform.jpg',
    eyebrow: 'Application Accuracy',
    heroTitle: 'Admission Application Support',
    heroSubtitle: 'Prepare clean college applications with organized files, intake awareness, and requirement checks.',
    trustLine: 'Application organization and submission guidance',
    intro:
      'Admission applications require careful attention to entry criteria, document formatting, and deadlines. We guide students through a clear application preparation process for selected institutions.',
    sections: [
      {
        title: 'Requirement Review',
        body: 'We check published academic and language requirements for your selected programs and help identify gaps before submission.',
      },
      {
        title: 'File Organization',
        body: 'We help arrange transcripts, identity documents, language scores, and supporting materials into a clean application package.',
      },
      {
        title: 'Submission Readiness',
        body: 'We guide students through institutional application steps with an emphasis on accuracy, deadline awareness, and consistency.',
      },
    ],
    highlights: ['Entry requirement review', 'Application file organization', 'Intake deadline tracking', 'Clean submission guidance'],
    ctaTitle: 'Prepare A Cleaner Application Package',
    ctaText: 'Get structured support before submitting your college admission application.',
    ctaLabel: 'Start Application Support',
  },
  {
    slug: 'document-checklist-guidance',
    title: 'Document Checklist Guidance',
    shortTitle: 'Document Checklists',
    desc: 'Incomplete files trigger institutional delays. We supply clear, comprehensive checklists tailored to specific institutional policies, ensuring your transcripts, identity proofs, language credentials, and portfolios are correctly structured.',
    href: '/services/document-checklist-guidance',
    category: 'services',
    icon: FileText,
    image: '/images/documentchecklist.jpg',
    eyebrow: 'Document Readiness',
    heroTitle: 'Document Checklist Guidance',
    heroSubtitle: 'Understand what to prepare, how to organize it, and where missing documents can slow you down.',
    trustLine: 'Clear document planning for admissions',
    intro:
      'Small document issues can create major delays. We prepare students with practical, institution-aware checklists for the documents commonly required in Canadian college admissions.',
    sections: [
      {
        title: 'Checklist Planning',
        body: 'We create a tailored preparation list based on selected programs, institutional expectations, and the student’s academic background.',
      },
      {
        title: 'Format Awareness',
        body: 'We explain common formatting expectations for transcripts, identity documents, language credentials, portfolios, and supporting files.',
      },
      {
        title: 'Gap Identification',
        body: 'We help students identify missing, outdated, or inconsistent items early so they can resolve issues before deadlines.',
      },
    ],
    highlights: ['Tailored document lists', 'Transcript and ID planning', 'Language credential review', 'Missing-file tracking'],
    ctaTitle: 'Organize Your Documents With Confidence',
    ctaText: 'Build a clearer document plan before your admission timeline gets tight.',
    ctaLabel: 'Review My Checklist',
  },
  {
    slug: 'career-pathway-mapping',
    title: 'Career Pathway Mapping',
    shortTitle: 'Career Pathway Mapping',
    desc: 'Investing in education requires long-term perspective. We host focused pathway discussions to show how specific diploma, certificate, or postgraduate options match modern occupational fields in Canada.',
    href: '/services/career-pathway-mapping',
    category: 'services',
    icon: Briefcase,
    image: '/images/careerpathway.jpg',
    eyebrow: 'Future Planning',
    heroTitle: 'Career Pathway Mapping',
    heroSubtitle: 'Connect education choices with realistic career directions and Canadian labour-market context.',
    trustLine: 'Education planning with long-term context',
    intro:
      'A strong program choice should make sense beyond admission. We help students evaluate how credentials may connect with occupational fields, skill development, and future study progression.',
    sections: [
      {
        title: 'Credential Context',
        body: 'We explain how diploma, certificate, graduate certificate, and other options may fit different academic and professional goals.',
      },
      {
        title: 'Skill Direction',
        body: 'We discuss the skills each pathway is designed to develop and how those skills may relate to Canadian employment sectors.',
      },
      {
        title: 'Progression Planning',
        body: 'We help students consider follow-on education, specialization choices, and realistic next steps after program completion.',
      },
    ],
    highlights: ['Credential comparison', 'Career-field discussion', 'Skill alignment review', 'Long-term study planning'],
    ctaTitle: 'Map Your Education To Your Future',
    ctaText: 'Discuss how your program options connect with long-term academic and career goals.',
    ctaLabel: 'Map My Pathway',
  },
  {
    slug: 'newcomer-student-settlement-guidance',
    title: 'Newcomer Student Settlement Guidance',
    shortTitle: 'Newcomer Settlement',
    desc: 'Transitioning to life in Ontario involves practical hurdles. We provide general informational guidance covering housing options, regional public transit systems, banking setups, and community integration resources.',
    href: '/services/newcomer-student-settlement-guidance',
    category: 'services',
    icon: Globe,
    image: '/images/newcomresstudent.jpg',
    eyebrow: 'Arrival Readiness',
    heroTitle: 'Newcomer Student Settlement Guidance',
    heroSubtitle: 'Prepare for the practical realities of student life in Ontario before and after arrival.',
    trustLine: 'Practical soft-landing guidance',
    intro:
      'Starting life in a new country involves more than attending classes. We provide general information to help students understand housing research, local systems, banking basics, and community resources.',
    sections: [
      {
        title: 'Arrival Planning',
        body: 'We help students prepare practical next steps for their first weeks, including local accounts, campus orientation, and basic city navigation.',
      },
      {
        title: 'Housing Awareness',
        body: 'We share renter checklist information and questions students can ask when researching accommodation options independently.',
      },
      {
        title: 'Community Integration',
        body: 'We point students toward common public resources, local services, and student-friendly routines that support smoother adjustment.',
      },
    ],
    highlights: ['Arrival checklist guidance', 'Housing research basics', 'Banking and local account awareness', 'Community resource orientation'],
    ctaTitle: 'Prepare For A Smoother Arrival',
    ctaText: 'Get practical settlement information before your first weeks in Ontario.',
    ctaLabel: 'Plan My Arrival',
  },
  {
    slug: 'professional-referral-support',
    title: 'Professional Referral Support',
    shortTitle: 'Professional Referrals',
    desc: 'We stick strictly to our core expertise. When clients require specialized legal advice, study permit assistance, or licensed immigration services, we connect them with authorized representatives or regulated professionals.',
    href: '/services/professional-referral-support',
    category: 'services',
    icon: ShieldCheck,
    image: '/images/proffessionalsupport.png',
    eyebrow: 'Trusted Boundaries',
    heroTitle: 'Professional Referral Support',
    heroSubtitle: 'Connect with regulated professionals when your situation requires specialized advice beyond education counselling.',
    trustLine: 'Clear professional boundaries and referrals',
    intro:
      'GuideToEducation focuses on education counselling and admissions guidance. When a student needs licensed immigration, legal, or specialized professional advice, we help identify the right type of regulated support.',
    sections: [
      {
        title: 'Scope Clarity',
        body: 'We explain what our education advisory team can support and where regulated professional advice may be required.',
      },
      {
        title: 'Referral Direction',
        body: 'When appropriate, we guide clients toward authorized representatives or regulated professionals suited to their needs.',
      },
      {
        title: 'Education Continuity',
        body: 'We continue supporting education and admissions planning while respecting the boundaries of licensed professional services.',
      },
    ],
    highlights: ['Clear service boundaries', 'Regulated referral direction', 'Education-focused support', 'Transparent client guidance'],
    ctaTitle: 'Need The Right Type Of Support?',
    ctaText: 'Start with a consultation so we can clarify your education needs and referral direction.',
    ctaLabel: 'Discuss Support Options',
  },
];

export const studentSupport: Offering[] = [
  {
    slug: 'essential-pre-arrival-guidance',
    title: 'Essential Pre-Arrival Guidance',
    shortTitle: 'Pre-Arrival Guidance',
    desc: 'We walk students through what to pack, how to organize essential academic files for arrival, and how to prepare for the academic style of Canadian college classrooms.',
    href: '/student-support/essential-pre-arrival-guidance',
    category: 'student-support',
    icon: PlaneTakeoff,
    image: '/images/essential.png',
    eyebrow: 'Before You Fly',
    heroTitle: 'Essential Pre-Arrival Guidance',
    heroSubtitle: 'Prepare your documents, packing priorities, and student-life expectations before arriving in Canada.',
    trustLine: 'Practical preparation for Canada-bound students',
    intro:
      'Pre-arrival planning helps students land with fewer surprises. We help students understand what to organize before departure, what documents to keep accessible, and how to prepare for Canadian college expectations.',
    sections: [
      {
        title: 'Document Preparation',
        body: 'We help students organize academic files, identification records, admission documents, and key arrival papers for quick access.',
      },
      {
        title: 'Packing Priorities',
        body: 'We discuss practical packing considerations for Ontario weather, student housing, campus routines, and early settlement needs.',
      },
      {
        title: 'Classroom Readiness',
        body: 'We introduce expectations around participation, assignments, scheduling, and independent learning in Canadian college settings.',
      },
    ],
    highlights: ['Arrival document planning', 'Packing guidance', 'Canadian classroom orientation', 'First-week preparation'],
    ctaTitle: 'Prepare Before You Depart',
    ctaText: 'Build a clear pre-arrival plan for your first academic term in Canada.',
    ctaLabel: 'Get Pre-Arrival Guidance',
  },
  {
    slug: 'accommodation-search-information',
    title: 'Accommodation Search Information',
    shortTitle: 'Accommodation Search',
    desc: 'Finding housing in the Greater Toronto Area (GTA) requires careful planning. We provide students with helpful resources, standard renter checklists, and general insights into local landlord-tenant frameworks to guide their search safely.',
    href: '/student-support/accommodation-search-information',
    category: 'student-support',
    icon: Home,
    image: '/images/accomodation.png',
    eyebrow: 'Housing Research',
    heroTitle: 'Accommodation Search Information',
    heroSubtitle: 'Learn how to research housing options more safely and understand practical renter considerations.',
    trustLine: 'General housing information for GTA students',
    intro:
      'Student housing in the GTA can be competitive and fast-moving. We provide general research guidance, renter checklist information, and practical questions students can use while searching independently.',
    sections: [
      {
        title: 'Search Planning',
        body: 'We help students think through location, commute, budget, lease timing, and proximity to campus or transit.',
      },
      {
        title: 'Renter Checklist',
        body: 'We provide general checklist items for viewing rooms, asking questions, and reviewing basic rental expectations.',
      },
      {
        title: 'Safety Awareness',
        body: 'We discuss common-sense ways to approach listings, payments, communication, and document requests while researching housing.',
      },
    ],
    highlights: ['Housing research framework', 'GTA commute considerations', 'Renter checklist guidance', 'Listing safety awareness'],
    ctaTitle: 'Research Accommodation With A Clearer Plan',
    ctaText: 'Use practical housing information to guide your independent accommodation search.',
    ctaLabel: 'Review Housing Guidance',
  },
  {
    slug: 'local-transit-infrastructure-orientation',
    title: 'Local Transit & Infrastructure Orientation',
    shortTitle: 'Transit Orientation',
    desc: 'Learn how to navigate regional transport options including MiWay, GO Transit, and the TTC and set up essential local accounts like banking and student services securely upon arrival.',
    href: '/student-support/local-transit-infrastructure-orientation',
    category: 'student-support',
    icon: Map,
    image: '/images/localtransit.png',
    eyebrow: 'City Navigation',
    heroTitle: 'Local Transit & Infrastructure Orientation',
    heroSubtitle: 'Understand transit systems, local accounts, and everyday infrastructure for student life in Ontario.',
    trustLine: 'Orientation for daily student routines',
    intro:
      'Getting around confidently makes the first few weeks easier. We orient students to common transit options, local service accounts, and practical routines for living and studying in the GTA.',
    sections: [
      {
        title: 'Transit Basics',
        body: 'We explain how students commonly use MiWay, GO Transit, TTC connections, fare systems, and route planning tools.',
      },
      {
        title: 'Local Accounts',
        body: 'We discuss the basic setup process for banking, phone plans, student portals, and other everyday services.',
      },
      {
        title: 'Daily Routine Planning',
        body: 'We help students think through commute times, campus access, grocery options, and appointment planning.',
      },
    ],
    highlights: ['MiWay, GO, and TTC orientation', 'Student routine planning', 'Banking and local account basics', 'GTA infrastructure awareness'],
    ctaTitle: 'Feel More Oriented In Your New City',
    ctaText: 'Prepare for daily life with practical local transit and infrastructure information.',
    ctaLabel: 'Plan Local Orientation',
  },
  {
    slug: 'general-career-preparation-skills',
    title: 'General Career Preparation Skills',
    shortTitle: 'Career Preparation',
    desc: 'We provide students with access to standard Canadian-style resume formats and introductory job search strategies tailored for regional student opportunities.',
    href: '/student-support/general-career-preparation-skills',
    category: 'student-support',
    icon: FileUser,
    image: '/images/careerskill.png',
    eyebrow: 'Student Readiness',
    heroTitle: 'General Career Preparation Skills',
    heroSubtitle: 'Build introductory resume, communication, and job-search habits for Canadian student opportunities.',
    trustLine: 'General preparation, not job placement',
    intro:
      'Career preparation starts with understanding local expectations. We provide general guidance on Canadian-style resumes, job-search organization, and professional communication for students.',
    sections: [
      {
        title: 'Resume Basics',
        body: 'We introduce common Canadian resume structure, concise formatting, and ways to present academic and project experience clearly.',
      },
      {
        title: 'Search Habits',
        body: 'We discuss practical job-search routines, tracking applications, reading postings, and preparing for student-friendly opportunities.',
      },
      {
        title: 'Communication Readiness',
        body: 'We help students understand professional email tone, interview preparation basics, and workplace expectation awareness.',
      },
    ],
    highlights: ['Canadian-style resume formats', 'Introductory job-search strategies', 'Professional communication basics', 'Interview readiness orientation'],
    ctaTitle: 'Build Stronger Career Preparation Habits',
    ctaText: 'Start with general career-readiness guidance tailored to student life in Canada.',
    ctaLabel: 'Prepare My Career Materials',
  },
];

export const allOfferings = [...services, ...studentSupport];

export function getOffering(category: OfferingCategory, slug: string) {
  const collection = category === 'services' ? services : studentSupport;
  return collection.find((offering) => offering.slug === slug);
}

export function getRelatedOfferings(category: OfferingCategory, slug: string) {
  const collection = category === 'services' ? services : studentSupport;
  return collection.filter((offering) => offering.slug !== slug).slice(0, 3);
}
