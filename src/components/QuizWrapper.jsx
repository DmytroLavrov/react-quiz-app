import QuizQuestion from '@components/QuizQuestion';
import QuizProgress from '@components/QuizProgress';
import QuizButtons from '@components/QuizButtons';

const QuizWrapper = () => {
  return (
    <div className="wrapper">
      <div className="container-custom">
        <div className="quiz-app">
          <QuizProgress />
          <QuizQuestion />
          <QuizButtons />
        </div>
      </div>
    </div>
  );
};

export default QuizWrapper;
