import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const SectionTitle = ({ title, link }) => {
  return (
    <div className='py-5 text-white'>
      {/* title text */}
      <div className='py-3 md:flex md:items-center md:justify-between'>
        <h1 className='text-xl font-bold md:text-2xl'>{title}</h1>
        <div className='flex items-center space-x-3 text-sm hover:text-mediumSlateBlue md:text-base'>
          <Link href={link}>View all</Link>
          <FaArrowRight className='h-4 w-4' />
        </div>
      </div>
      <div>
        <div className='w-full border-2 border-tealBlue'></div>
      </div>
    </div>
  );
};

export default SectionTitle;
