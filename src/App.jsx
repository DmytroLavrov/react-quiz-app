import { useContext, useEffect } from 'react';

import { QuizContext } from '@context/ContextProvider';

import Loading from '@components/Loading';
import Error from '@components/Error';
import Welcome from '@components/Welcome';
import QuizWrapper from './components/QuizWrapper';
import FinishQuiz from '@components/FinishQuiz';

function App() {
  const { status, loadQuestionsSuccess, loadQuestionsError } =
    useContext(QuizContext);

  useEffect(() => {
    fetch('http://localhost:8000/quizQuestion')
      .then((res) => res.json())
      .then((data) => {
        loadQuestionsSuccess(data);
      })
      .catch((err) => {
        console.log('error msg');
        loadQuestionsError();
      });
  }, []);

  return (
    <>
      {status === 'LOADING_QUESTIONS' && <Loading />}
      {status === 'QUESTIONS_LOAD_FAILED' && <Error />}
      {status === 'QUESTIONS_LOADED' && <Welcome />}
      {status === 'QUIZ_IN_PROGRESS' && <QuizWrapper />}
      {status === 'QUIZ_RESULT_DISPLAY' && <FinishQuiz />}
    </>
  );
}

export default App;
