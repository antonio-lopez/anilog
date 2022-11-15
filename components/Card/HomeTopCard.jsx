import Image from 'next/image';
import Rating from '../View/Rating';

const HomeTopCard = ({ image, alt, title, percentage }) => {
  return (
    <div className='flex h-60 w-40 flex-col rounded-xl bg-eerieBlack text-white shadow-md shadow-black lg:h-80 lg:w-52'>
      <div className='relative h-full'>
        <Image
          className='rounded-t-xl object-top'
          src={image}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='flex flex-col space-y-1 p-2'>
        <h1 className='text-sm lg:text-base'>{title}</h1>
        <Rating percentage={percentage} />
      </div>
    </div>
  );
};

export default HomeTopCard;
