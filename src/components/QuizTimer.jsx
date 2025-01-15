import { useContext, useEffect } from 'react';
import { QuizContext } from '@context/ContextProvider';

const QuizTimer = () => {
  const { remainingTime, decrementTime } = useContext(QuizContext);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = Math.floor(remainingTime % 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      decrementTime();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className="text-sm sm:text-lg">
      ⌛{minutes < 10 && '0'}
      {minutes}:{seconds < 10 && '0'}
      {seconds}
    </span>
  );
};

export default QuizTimer;
