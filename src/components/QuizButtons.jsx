import { useContext } from 'react';
import { QuizContext } from '@context/ContextProvider';

const QuizButtons = () => {
  const {
    quizQuestion,
    currentQuestionIndex,
    userAnswer,
    moveToNextQuestion,
    finishQuiz,
  } = useContext(QuizContext);

  const numberOfQuestions = quizQuestion.length;

  if (userAnswer === null) return null;

  if (currentQuestionIndex < numberOfQuestions - 1)
    return (
      <div className="mt-6">
        <button
          className="btn-custom"
          onClick={() => moveToNextQuestion(currentQuestionIndex)}
        >
          Next
        </button>
      </div>
    );
  else {
    return (
      <div className="mt-6">
        <button className="btn-custom" onClick={() => finishQuiz()}>
          Finish
        </button>
      </div>
    );
  }
};

export default QuizButtons;
