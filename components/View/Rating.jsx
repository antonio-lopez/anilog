import { AiFillStar } from 'react-icons/ai';

const Rating = ({ averageScore }) => {
  return (
    <div className='flex items-center space-x-1 text-white'>
      <AiFillStar className='h-4 w-4 text-yellow-300 lg:h-5 lg:w-5' />
      <span className='text-xs lg:text-base'>{averageScore}%</span>
    </div>
  );
};

export default Rating;
