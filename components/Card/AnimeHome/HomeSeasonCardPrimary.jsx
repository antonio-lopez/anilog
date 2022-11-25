import Image from 'next/image';
import Rating from '../../View/Rating';

const HomeSeasonCardPrimary = ({
  image,
  alt,
  title,
  studio,
  percentage,
  description,
}) => {
  return (
    <div className='grid grid-cols-1 items-center gap-4 text-white lg:grid-cols-2'>
      <div className='relative h-36 lg:h-full'>
        <Image
          className=' rounded-xl'
          src={image}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='flex flex-col space-y-1'>
        <h1 className='text-xl font-bold lg:text-3xl'>{title}</h1>
        <span className='text-sm text-white/60'>{studio}</span>
        <Rating percentage={percentage} />
        <p className='text-sm md:text-base'>{description}</p>
      </div>
    </div>
  );
};

export default HomeSeasonCardPrimary;
