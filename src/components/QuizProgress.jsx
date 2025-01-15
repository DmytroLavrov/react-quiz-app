import { useContext } from 'react';
import { QuizContext } from '@context/ContextProvider';

import QuizTimer from '@components/QuizTimer';

const QuizProgress = () => {
  const { quizQuestion, currentQuestionIndex, userAnswer, points } =
    useContext(QuizContext);

  const currentQuestionNumber = currentQuestionIndex + 1;
  const numberOfQuestions = quizQuestion.length;
  const totalQuizPoints = quizQuestion.reduce(
    (accumulator, currentValue) => accumulator + currentValue.points,
    0
  );

  const progressValue = currentQuestionIndex + Number(userAnswer !== null);
  const progressPercentage = (progressValue / numberOfQuestions) * 100;

  return (
    <div className="mb-6">
      <div className="mb-4 w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between font-medium">
        <span className="text-sm sm:text-lg">
          Ques: {currentQuestionNumber}/{numberOfQuestions}
        </span>
        <QuizTimer />
        <span className="text-sm sm:text-lg">
          Points: {points}/{totalQuizPoints}
        </span>
      </div>
    </div>
  );
};

export default QuizProgress;
