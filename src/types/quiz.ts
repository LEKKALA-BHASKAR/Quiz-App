export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: 'python' | 'java' | 'javascript' | 'react' | 'typescript' | 'general';
}

export interface QuizState {
  currentQuestionIndex: number;
  userAnswers: number[];
  isComplete: boolean;
  score: number;
  selectedQuestions: Question[];
  category: string;
}