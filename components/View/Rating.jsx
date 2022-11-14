import { AiFillStar } from 'react-icons/ai';

const Rating = ({ percentage }) => {
  return (
    <div className='flex items-center space-x-1 text-white'>
      <AiFillStar className='h-5 w-5 text-yellow-300' />
      <span className='text-sm lg:text-base'>{percentage}%</span>
    </div>
  );
};

export default Rating;
