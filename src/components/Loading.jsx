import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ClipLoader size={100} color="#3043d2" />
    </div>
  );
};

export default Loading;
