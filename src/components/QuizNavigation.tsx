import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface QuizNavigationProps {
  canGoBack: boolean;
  canGoForward: boolean;
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  isLastQuestion: boolean;
}

export function QuizNavigation({
  canGoBack,
  canGoForward,
  onNext,
  onPrevious,
  onSubmit,
  isLastQuestion
}: QuizNavigationProps) {
  return (
    <div className="flex justify-between items-center w-full max-w-2xl mt-6">
      <button
        onClick={onPrevious}
        disabled={!canGoBack}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
          canGoBack
            ? 'text-blue-600 hover:bg-blue-50'
            : 'text-gray-400 cursor-not-allowed'
        }`}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Previous</span>
      </button>

      {isLastQuestion ? (
        <button
          onClick={onSubmit}
          className="flex items-center space-x-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <span>Submit Quiz</span>
        </button>
      ) : (
        <button
          onClick={onNext}
          disabled={!canGoForward}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            canGoForward
              ? 'text-blue-600 hover:bg-blue-50'
              : 'text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>Next</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}