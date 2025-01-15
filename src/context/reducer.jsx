export const initialState = {
  quizQuestion: [],
  status: 'LOADING_QUESTIONS',
  currentQuestionIndex: 0,
  userAnswer: null,
  points: 0,
  bestScore: 0,
  remainingTime: null,
};

const TIME_PER_QUESTION = 20;

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_QUESTIONS_SUCCESS':
      return {
        ...state,
        quizQuestion: action.payload,
        status: 'QUESTIONS_LOADED',
      };
    case 'LOAD_QUESTIONS_ERROR':
      return {
        ...state,
        status: 'QUESTIONS_LOAD_FAILED',
      };
    case 'START_QUIZ':
      return {
        ...state,
        status: 'QUIZ_IN_PROGRESS',
        remainingTime: state.quizQuestion.length * TIME_PER_QUESTION,
      };
    case 'SET_ANSWER':
      const question = state.quizQuestion.at(state.currentQuestionIndex);

      return {
        ...state,
        userAnswer: action.payload,
        points:
          action.payload === question.correctAnswer
            ? state.points + question.points
            : state.points,
      };
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        // userAnswer: state.userAnswer !== null ? null : state.userAnswer,
        userAnswer: null,
      };
    case 'QUIZ_FINISHED':
      return {
        ...state,
        status: 'QUIZ_RESULT_DISPLAY',
        bestScore:
          state.points > state.bestScore ? state.points : state.bestScore,
      };
    case 'QUIZ_RESTART':
      return {
        ...initialState,
        quizQuestion: state.quizQuestion,
        status: 'QUESTIONS_LOADED',
        bestScore: state.points,
      };
    case 'TIMER_TICK':
      return {
        ...state,
        remainingTime: state.remainingTime - 1,
        status:
          state.remainingTime === 0 ? 'QUIZ_RESULT_DISPLAY' : state.status,
      };
    default:
      return state;
  }
};

export default quizReducer;
