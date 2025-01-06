import React from 'react';
import { Trophy } from 'lucide-react';
import './ResultCard.css'; // Import custom styles for animations

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

export function ResultCard({ score, totalQuestions, onRetry }: ResultCardProps) {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="result-card-container">
      <div className="result-card animated-popup">
        <Trophy className="icon w-16 h-16 mx-auto mb-4 text-yellow-500" />
        <h2 className="title text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
        <p className="score-text text-xl mb-6">
          Your score: <span className="font-bold text-blue-600">{score}</span> out of{' '}
          {totalQuestions} ({percentage.toFixed(1)}%)
        </p>
        <button
          onClick={onRetry}
          className="retry-button bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
      <div className="paper-falling-overlay">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="falling-paper"></div>
        ))}
      </div>
    </div>
  );
}
