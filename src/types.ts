export type UserType = 'content_creators' | 'bloggers' | 'students' | 'businesses' | 'researchers' | 'trend_hunters';

export interface IdeaOutput {
  title: string;
  idea: string;
  steps: string[];
  seo_keywords: string[];
  tags: string[];
  score_rating: number;
  market_analysis?: string;
  target_audience_brief?: string;
}

export interface QuestionDefinition {
  id: string;
  question: string;
  placeholder: string;
  suggestions: string[];
}

export interface QuestionFlow {
  id: string;
  title: string;
  description: string;
  questions: QuestionDefinition[];
}

export const PROFESSIONAL_QUESTIONS: QuestionDefinition[] = [
  {
    id: 'project_name',
    question: 'Project or Brand Name',
    placeholder: 'e.g. TechFlow, HealthyHabits',
    suggestions: ['InnovateX', 'ZenMind', 'GlobalStream', 'EcoVibe']
  },
  {
    id: 'core_mission',
    question: 'Core Mission / Objective',
    placeholder: 'What are you trying to achieve?',
    suggestions: ['Simplify complex tech', 'Promote sustainable living', 'Educate on financial literacy']
  },
  {
    id: 'target_audience',
    question: 'Target Audience Profile',
    placeholder: 'Describe your ideal user/viewer',
    suggestions: ['Gen Z Techies', 'Eco-conscious homeowners', 'Aspiring entrepreneurs (20-35)']
  },
  {
    id: 'primary_platform',
    question: 'Primary Distribution Channel',
    placeholder: 'Where will this live?',
    suggestions: ['YouTube Shorts', 'LinkedIn Articles', 'TikTok', 'B2B Newsletter']
  },
  {
    id: 'content_style',
    question: 'Visual & Content Style',
    placeholder: 'e.g. Brutalist, Academic, High-Energy',
    suggestions: ['Minimalist Aesthetic', 'Bold & Vibrant', 'Data-driven & Professional']
  },
  {
    id: 'competitive_advantage',
    question: 'Unique Selling Point (USP)',
    placeholder: 'What makes you different?',
    suggestions: ['First-hand expert knowledge', 'Proprietary data insights', 'Innovative systems architecture']
  },
  {
    id: 'main_challenges',
    question: 'Current Challenges',
    placeholder: 'What is holding you back?',
    suggestions: ['Low engagement rates', 'Saturated market', 'Technical complexity']
  },
  {
    id: 'output_format',
    question: 'Desired Output Type',
    placeholder: 'e.g. Viral Script, Business Strategy, Roadmap',
    suggestions: ['Detailed Video Script', '5-Part Email Sequence', '12-Month Content Plan']
  },
  {
    id: 'tone_of_voice',
    question: 'Brand Tone of Voice',
    placeholder: 'e.g. Witty, Serious, Empathetic',
    suggestions: ['Authoritative but accessible', 'Playful & Relatable', 'Futuristic & Cold']
  },
  {
    id: 'keywords',
    question: 'Priority Keywords/Topics',
    placeholder: 'Comma separated list',
    suggestions: ['SAAS, Efficiency, Automation', 'Health, Yoga, Mindfulness', 'Web3, Security, NFT']
  },
  {
    id: 'monetization',
    question: 'Growth/Monetization Goal',
    placeholder: 'How do you measure success?',
    suggestions: ['Lead generation', 'Ad revenue growth', 'Brand authority building']
  },
  {
    id: 'additional_context',
    question: 'Additional Constraints/Notes',
    placeholder: 'Any specific rules to follow?',
    suggestions: ['Budget < $1000', 'Must include "Green" terminology', 'Specific industry standards']
  }
];

export const USER_FLOWS: Record<UserType, QuestionFlow> = {
  content_creators: {
    id: 'content_creators',
    title: 'Professional Strategist',
    description: 'The ultimate synthesis engine for high-output professionals.',
    questions: PROFESSIONAL_QUESTIONS
  },
  bloggers: {
    id: 'bloggers',
    title: 'Professional Strategist',
    description: 'The ultimate synthesis engine for high-output professionals.',
    questions: PROFESSIONAL_QUESTIONS
  },
  students: {
    id: 'students',
    title: 'Professional Strategist',
    description: 'The ultimate synthesis engine for high-output professionals.',
    questions: PROFESSIONAL_QUESTIONS
  },
  businesses: {
    id: 'businesses',
    title: 'Professional Strategist',
    description: 'The ultimate synthesis engine for high-output professionals.',
    questions: PROFESSIONAL_QUESTIONS
  },
  researchers: {
    id: 'researchers',
    title: 'Professional Strategist',
    description: 'The ultimate synthesis engine for high-output professionals.',
    questions: PROFESSIONAL_QUESTIONS
  },
  trend_hunters: {
    id: 'trend_hunters',
    title: 'Professional Strategist',
    description: 'The ultimate synthesis engine for high-output professionals.',
    questions: PROFESSIONAL_QUESTIONS
  }
};
