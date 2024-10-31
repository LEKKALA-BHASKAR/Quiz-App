import React from 'react';
import { Trophy } from 'lucide-react';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
  onNewCategory: () => void;
}

export function QuizResults({
  score,
  totalQuestions,
  onRetry,
  onNewCategory
}: QuizResultsProps) {
  const percentage = (score / totalQuestions) * 100;
  
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8 text-center">
      <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
      
      <div className="mb-8">
        <p className="text-4xl font-bold text-blue-600 mb-2">
          {score} / {totalQuestions}
        </p>
        <p className="text-gray-600">
          You scored {percentage.toFixed(0)}%
        </p>
      </div>
      
      <div className="space-x-4">
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={onNewCategory}
          className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Choose New Category
        </button>
      </div>
    </div>
  );
}