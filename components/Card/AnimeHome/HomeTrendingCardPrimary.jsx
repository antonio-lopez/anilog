import Image from 'next/image';
import Rating from '../../View/Rating';

const HomeTrendingCardPrimary = ({
  image,
  alt,
  title,
  studio,
  averageScore,
  description,
}) => {
  return (
    <div className='w-full text-white'>
      <div className='relative h-28 w-full lg:h-64'>
        <Image
          className='rounded-xl'
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
        <Rating averageScore={averageScore} />
        <p className='text-sm'>{description}</p>
      </div>
    </div>
  );
};

export default HomeTrendingCardPrimary;
