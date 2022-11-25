import Image from 'next/image';
import Rating from '../../View/Rating';

const HomeSeasonCardSecondary = ({
  image,
  alt,
  title,
  studio,
  percentage,
  description,
}) => {
  return (
    <div className='grid h-44 max-w-[37rem] grid-cols-[110px,_auto] rounded-xl bg-eerieBlack text-white lg:h-52 lg:grid-cols-[160px,_auto]'>
      <div className='relative'>
        <Image
          className='rounded-l-xl object-left'
          src={image}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='overflow-hidden py-1 px-2'>
        <h1>{title}</h1>
        <span className='text-xs text-white/60'>{studio}</span>
        <Rating percentage={percentage} />
        <p className='text-xs lg:text-base'>{description}</p>
      </div>
    </div>
  );
};

export default HomeSeasonCardSecondary;
