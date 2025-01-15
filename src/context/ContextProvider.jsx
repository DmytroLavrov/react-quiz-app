import { createContext, useReducer } from 'react';
import reducer, { initialState } from './reducer';

export const QuizContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    quizQuestion,
    status,
    currentQuestionIndex,
    userAnswer,
    points,
    bestScore,
    remainingTime,
  } = state;

  const loadQuestionsSuccess = (data) => {
    dispatch({ type: 'LOAD_QUESTIONS_SUCCESS', payload: data });
  };

  const loadQuestionsError = () => {
    dispatch({ type: 'LOAD_QUESTIONS_ERROR' });
  };

  const startQuiz = () => {
    dispatch({ type: 'START_QUIZ' });
  };

  const setAnswer = (index) => {
    dispatch({ type: 'SET_ANSWER', payload: index });
  };

  const moveToNextQuestion = (index) => {
    dispatch({ type: 'NEXT_QUESTION', payload: index });
  };

  const finishQuiz = () => {
    dispatch({ type: 'QUIZ_FINISHED' });
  };

  const restartQuiz = () => {
    dispatch({ type: 'QUIZ_RESTART' });
  };

  const decrementTime = () => {
    dispatch({ type: 'TIMER_TICK' });
  };

  const value = {
    quizQuestion,
    status,
    currentQuestionIndex,
    userAnswer,
    points,
    bestScore,
    remainingTime,
    loadQuestionsSuccess,
    loadQuestionsError,
    startQuiz,
    setAnswer,
    moveToNextQuestion,
    finishQuiz,
    restartQuiz,
    decrementTime,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
