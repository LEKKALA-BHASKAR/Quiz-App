import React from 'react';
import { Question } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (index: number) => void;
}

export function QuestionCard({ question, selectedAnswer, onSelectAnswer }: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{question.question}</h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`w-full p-4 text-left rounded-lg transition-all ${
              selectedAnswer === index
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}