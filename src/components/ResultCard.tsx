import React from 'react';
import { Trophy } from 'lucide-react';

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

export function ResultCard({ score, totalQuestions, onRetry }: ResultCardProps) {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8 text-center">
      <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
      <p className="text-xl mb-6">
        Your score: <span className="font-bold text-blue-600">{score}</span> out of{' '}
        {totalQuestions} ({percentage.toFixed(1)}%)
      </p>
      <button
        onClick={onRetry}
        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}