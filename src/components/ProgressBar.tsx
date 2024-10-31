import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="w-full max-w-2xl mb-8">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Question {current + 1} of {total}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}