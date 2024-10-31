import { Question } from '../types/quiz';
import { questionBank } from '../data/questions';

export const getRandomQuestions = (category: string, count: number = 5): Question[] => {
  // Get questions based on category
  let availableQuestions = category === 'all' 
    ? questionBank 
    : questionBank.filter(q => q.category === category);

  // If not enough questions in category, use all available
  const questionCount = Math.min(count, availableQuestions.length);

  // Create a copy of the array to avoid modifying the original
  availableQuestions = [...availableQuestions];

  // Fisher-Yates shuffle algorithm
  for (let i = availableQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [availableQuestions[i], availableQuestions[j]] = [availableQuestions[j], availableQuestions[i]];
  }

  return availableQuestions.slice(0, questionCount);
};