import { useContext } from 'react';
import { QuizContext } from '@context/ContextProvider';

const QuizQuestion = () => {
  const { quizQuestion, currentQuestionIndex, userAnswer, setAnswer } =
    useContext(QuizContext);

  const currentQuestion = quizQuestion[currentQuestionIndex];
  let hasAnswered = userAnswer !== null;

  return (
    <div>
      <h2 className="mb-6 text-xl sm:text-2xl font-semibold text-gray-800">
        {currentQuestion.question}
      </h2>
      <div className="space-y-2">
        {currentQuestion.options.map((option, index) => {
          let buttonClass = 'w-full px-1 py-2 rounded-lg transition-all  ';

          if (hasAnswered) {
            if (index === userAnswer) {
              // Якщо відповідь неправильна
              if (index !== currentQuestion.correctAnswer) {
                buttonClass += 'text-white bg-red-500 border-2 border-red-500';
              }
              // Якщо відповідь правильна
              else {
                buttonClass +=
                  'text-white bg-green-500 border-2 border-green-500';
              }
            } else {
              // Якщо не вибраний варіант
              if (index === currentQuestion.correctAnswer) {
                buttonClass +=
                  'text-white bg-green-500 border-2 border-green-500';
              } else {
                buttonClass += 'text-custom-blue border-2 border-custom-blue';
              }
            }
          } else {
            // Якщо на питання ще не відповіли
            buttonClass +=
              'text-custom-blue border-2 border-custom-blue hover:text-white hover:bg-blue-600';
          }

          buttonClass += hasAnswered
            ? ' cursor-not-allowed'
            : ' cursor-pointer';

          return (
            <button
              className={buttonClass}
              key={option}
              onClick={() => setAnswer(index)}
              disabled={hasAnswered}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
