import Image from 'next/image';
import Rating from '../View/Rating';

const HomeTrendingCardSecondary = ({
  image,
  alt,
  title,
  studio,
  percentage,
}) => {
  return (
    <div className='grid max-w-[37rem] grid-cols-1 rounded-xl bg-eerieBlack text-white lg:grid-cols-2'>
      <div className='relative h-28 w-full'>
        <Image
          className='rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none'
          src={image}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='flex flex-col space-y-1 p-2'>
        <h1 className='text-sm font-bold lg:text-lg'>{title}</h1>
        <span className='text-sm text-white/60'>{studio}</span>
        <Rating percentage={percentage} />
      </div>
    </div>
  );
};

export default HomeTrendingCardSecondary;
