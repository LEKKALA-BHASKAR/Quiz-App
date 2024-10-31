import React, { useState } from 'react';
import { CategorySelector } from './components/CategorySelector';
import { QuizQuestion } from './components/QuizQuestion';
import { QuizNavigation } from './components/QuizNavigation';
import { QuizResults } from './components/QuizResults';
import { getRandomQuestions } from './utils/quizUtils';
import { QuizState } from './types/quiz';

const QUESTIONS_PER_QUIZ = 5;

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    userAnswers: [],
    isComplete: false,
    score: 0,
    selectedQuestions: [],
    category: ''
  });

  const startQuiz = (category: string) => {
    const questions = getRandomQuestions(category, QUESTIONS_PER_QUIZ);
    setQuizState({
      currentQuestionIndex: 0,
      userAnswers: new Array(questions.length).fill(null),
      isComplete: false,
      score: 0,
      selectedQuestions: questions,
      category
    });
  };

  const handleAnswerSelect = (answer: number) => {
    const newAnswers = [...quizState.userAnswers];
    newAnswers[quizState.currentQuestionIndex] = answer;
    setQuizState({ ...quizState, userAnswers: newAnswers });
  };

  const navigateToNext = () => {
    if (quizState.currentQuestionIndex < quizState.selectedQuestions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex + 1
      });
    }
  };

  const navigateToPrevious = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex - 1
      });
    }
  };

  const submitQuiz = () => {
    const score = quizState.selectedQuestions.reduce((total, question, index) => {
      return total + (question.correctAnswer === quizState.userAnswers[index] ? 1 : 0);
    }, 0);

    setQuizState({
      ...quizState,
      isComplete: true,
      score
    });
  };

  const retryQuiz = () => {
    startQuiz(quizState.category);
  };

  const resetQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      userAnswers: [],
      isComplete: false,
      score: 0,
      selectedQuestions: [],
      category: ''
    });
  };

  // If no category selected, show category selector
  if (!quizState.category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <CategorySelector onSelectCategory={startQuiz} />
      </div>
    );
  }

  // If quiz is complete, show results
  if (quizState.isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <QuizResults
          score={quizState.score}
          totalQuestions={quizState.selectedQuestions.length}
          onRetry={retryQuiz}
          onNewCategory={resetQuiz}
        />
      </div>
    );
  }

  // Show quiz question
  const currentQuestion = quizState.selectedQuestions[quizState.currentQuestionIndex];
  const currentAnswer = quizState.userAnswers[quizState.currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <QuizQuestion
        question={currentQuestion}
        selectedAnswer={currentAnswer}
        onSelectAnswer={handleAnswerSelect}
        questionNumber={quizState.currentQuestionIndex + 1}
        totalQuestions={quizState.selectedQuestions.length}
      />
      
      <QuizNavigation
        canGoBack={quizState.currentQuestionIndex > 0}
        canGoForward={
          quizState.currentQuestionIndex < quizState.selectedQuestions.length - 1 &&
          currentAnswer !== null
        }
        onNext={navigateToNext}
        onPrevious={navigateToPrevious}
        onSubmit={submitQuiz}
        isLastQuestion={
          quizState.currentQuestionIndex === quizState.selectedQuestions.length - 1
        }
      />
    </div>
  );
}

export default App;