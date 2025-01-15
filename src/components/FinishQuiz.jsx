import { useContext } from 'react';
import { QuizContext } from '@context/ContextProvider';

const FinishQuiz = () => {
  const { quizQuestion, points, bestScore, restartQuiz } =
    useContext(QuizContext);

  const totalQuizPoints = quizQuestion.reduce(
    (accumulator, currentValue) => accumulator + currentValue.points,
    0
  );
  const percentage = (points / totalQuizPoints) * 100;

  let emoji, message, textColor;
  if (percentage === 100) {
    emoji = '🎉';
    message = 'Perfect!';
    textColor = 'text-green-500';
  } else if (percentage >= 80) {
    emoji = '👏';
    message = 'Great job!';
    textColor = 'text-teal-500';
  } else if (percentage >= 60) {
    emoji = '🙂';
    message = 'Good effort!';
    textColor = 'text-yellow-500';
  } else if (percentage >= 40) {
    emoji = '🤔';
    message = 'Not bad, but you can do better!';
    textColor = 'text-orange-500';
  } else if (percentage >= 20) {
    emoji = '😕';
    message = 'Needs improvement!';
    textColor = 'text-red-500';
  } else {
    emoji = '😞';
    message = 'Better luck next time!';
    textColor = 'text-gray-500';
  }

  return (
    <div className="wrapper">
      <div className="container-custom">
        <div className="quiz-app">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Quiz Finished!
          </h2>
          <p className="text-lg text-custom-blue mb-4">
            You have completed the quiz. Here are your results:
          </p>
          <div className="text-lg text-gray-700 mb-6">
            <p className="mb-2">
              You scored {points} out of {totalQuizPoints}.
            </p>
            <span className={`text-xl ${textColor}`}>
              {message} {emoji}
            </span>
            <p className="text-lg font-semibold text-gray-800 mt-4">
              High score: {bestScore} points
            </p>
          </div>
          <div className="mt-6">
            <button className="btn-custom" onClick={() => restartQuiz()}>
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishQuiz;
