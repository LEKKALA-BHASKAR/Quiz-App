import React from 'react';
import { Question } from '../types/quiz';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (answer: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

export function QuizQuestion({
  question,
  selectedAnswer,
  onSelectAnswer,
  questionNumber,
  totalQuestions
}: QuizQuestionProps) {
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-blue-600">
            Question {questionNumber} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-gray-500 capitalize">
            {question.category}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">{question.question}</h2>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectAnswer(index)}
            className={`w-full p-4 text-left rounded-lg transition-all ${
              selectedAnswer === index
                ? 'bg-blue-100 border-2 border-blue-500 text-blue-700'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}