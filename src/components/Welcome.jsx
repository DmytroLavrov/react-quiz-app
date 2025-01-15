import { useContext } from 'react';
import { QuizContext } from '@context/ContextProvider';

import reactLogo from '@assets/react.svg';

const Welcome = () => {
  const { quizQuestion, startQuiz } = useContext(QuizContext);

  const numberOfQuestions = quizQuestion.length;

  return (
    <div className="wrapper">
      <div className="container-custom">
        <div className="quiz-app">
          <img
            src={reactLogo}
            alt="React Logo"
            className="mx-auto mb-6"
            width={'180px'}
          />
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Welcome to the Quiz!
          </h1>
          <div className="text-lg mb-6 text-custom-blue">
            <p>
              Ready to test your React knowledge? ({numberOfQuestions} question
              {numberOfQuestions === 1 ? '' : 's'})
            </p>
          </div>
          <button className="btn-custom" onClick={() => startQuiz()}>
            Let's Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
