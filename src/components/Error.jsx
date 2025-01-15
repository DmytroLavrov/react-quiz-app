import { FaExclamationTriangle } from 'react-icons/fa';

const Error = ({ message }) => {
  return (
    <div className="wrapper">
      <div className="container-custom">
        <div className="quiz-app  bg-red-500 text-white ">
          <FaExclamationTriangle className="mx-auto mb-4 text-6xl" />
          <h2 className="text-xl font-semibold mb-4">
            Oops! Something went wrong.
          </h2>
          <p className="mb-6">
            {message || 'An unexpected error has occurred.'}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn-custom bg-red-700 hover:bg-red-800"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
