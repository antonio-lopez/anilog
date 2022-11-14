import { AiFillStar } from 'react-icons/ai';

const Rating = ({ percentage }) => {
  return (
    <div className='flex items-center space-x-1 text-white'>
      <AiFillStar className='h-4 w-4 text-yellow-300 lg:h-5 lg:w-5' />
      <span className='text-xs lg:text-base'>{percentage}%</span>
    </div>
  );
};

export default Rating;
