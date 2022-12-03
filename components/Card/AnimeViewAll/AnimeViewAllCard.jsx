import Image from 'next/image';
import Divider from '../../View/Divider';
import GenrePill from '../../View/GenrePill';
import Rating from '../../View/Rating';
import formatString from '../../../utils/formatString';

const AnimeViewAllCard = ({
  genres,
  image,
  alt,
  title,
  studios,
  description,
  format,
  episodes,
  season,
  seasonYear,
  averageScore,
}) => {
  return (
    <div className='grid h-60 max-w-[37rem] grid-cols-2 gap-3 rounded-lg bg-eerieBlack text-white md:h-72 md:grid-cols-[188px,_auto]'>
      <div className='relative h-60 self-center rounded-xl md:h-72'>
        <div className='absolute z-10 hidden h-full flex-col justify-end text-white lg:flex'>
          <div className='rounded-bl-lg bg-black/70 p-3'>
            <h1 className='font-bold'>{title}</h1>
            <span className='text-sm text-white'>{studios}</span>
          </div>
        </div>
        <Image
          className='rounded-l-lg'
          src={image}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='flex w-full flex-col space-y-2 py-2 pr-2 text-xs sm:text-sm'>
        <div className='flex flex-col space-y-1 lg:hidden'>
          <h1 className='font-bold'>{title}</h1>
          <span>{studios}</span>
        </div>
        <p className='hidden lg:block'>{description}</p>
        <Divider />
        <div className='flex flex-wrap justify-center space-y-1 lg:justify-between lg:pb-1'>
          <div className='flex flex-wrap items-center justify-center space-x-1'>
            <span>{formatString(format)}</span>
            <span>•</span>
            <span>{episodes} episodes</span>
            <span>•</span>
            <span>
              {formatString(season)} {seasonYear}
            </span>
          </div>
          <Rating averageScore={averageScore} />
        </div>
        <GenrePill genres={genres} />
      </div>
    </div>
  );
};

export default AnimeViewAllCard;
