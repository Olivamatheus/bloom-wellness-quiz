
export type QuestionType = 'single' | 'scale' | 'multicard' | 'emotion';

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  section: number;
  options?: Option[];
  minLabel?: string;
  maxLabel?: string;
}

export interface Option {
  id: number;
  text: string;
  value: string;
  description?: string;
  imageUrl?: string;
}

export interface Answer {
  questionId: number;
  value: string | number;
}

export interface Profile {
  title: string;
  description: string;
  strengths: string[];
  focusAreas: string[];
  imageUrl: string;
}

export interface Result {
  profile: Profile;
  energyLevel: number;
  mentalStrength: number;
  balanceScore: number;
  recommendations: string[];
}

export type QuizSection = 1 | 2 | 3;
