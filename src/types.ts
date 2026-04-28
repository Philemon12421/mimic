export type UserType = 'content_creators' | 'bloggers' | 'students' | 'businesses' | 'researchers' | 'trend_hunters';

export interface IdeaOutput {
  title: string;
  idea: string;
  steps: string[];
  seo_keywords: string[];
  tags: string[];
  score_rating: number;
}

export interface QuestionFlow {
  id: string;
  title: string;
  description: string;
  questions: string[];
}

export const USER_FLOWS: Record<UserType, QuestionFlow> = {
  content_creators: {
    id: 'content_creators',
    title: 'Content Creators',
    description: 'Grow your audience with high-impact video and social content.',
    questions: [
      'What platform are you targeting?',
      'What niche are you in?',
      'What growth goal do you want?',
      'Who is your audience?',
      'Do you want viral, educational, or storytelling content?'
    ]
  },
  bloggers: {
    id: 'bloggers',
    title: 'Bloggers',
    description: 'Create SEO-optimized articles and compelling stories.',
    questions: [
      'What topic do you want to write about?',
      'Do you want SEO-focused or storytelling style?',
      'What audience are you targeting?',
      'Long-form or short-form article?'
    ]
  },
  students: {
    id: 'students',
    title: 'Students',
    description: 'Unlock academic excellence and project inspiration.',
    questions: [
      'What subject are you working on?',
      'Do you want project ideas or study assistance?',
      'Difficulty level required?',
      'Deadline or urgency level?'
    ]
  },
  businesses: {
    id: 'businesses',
    title: 'Businesses',
    description: 'Strategy, marketing, and startup ideas for the modern market.',
    questions: [
      'What industry are you in?',
      'Startup idea or marketing strategy?',
      'Target market?',
      'Budget level (low/medium/high)?'
    ]
  },
  researchers: {
    id: 'researchers',
    title: 'Researchers',
    description: 'Deep dives, practical summaries, and source navigation.',
    questions: [
      'What field are you researching?',
      'Depth level required?',
      'Academic or practical focus?',
      'Do you need sources or summaries?'
    ]
  },
  trend_hunters: {
    id: 'trend_hunters',
    title: 'Trend Hunters',
    description: 'Stay ahead of the curve with daily and niche insights.',
    questions: [
      'Do you want global or niche trends?',
      'Platform focus (TikTok, YouTube, etc.)?',
      'Time sensitivity (daily/weekly/monthly)?'
    ]
  }
};
