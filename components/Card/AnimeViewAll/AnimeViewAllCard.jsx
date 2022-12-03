import Image from 'next/image';
import Divider from '../../View/Divider';
import GenrePill from '../../View/GenrePill';
import Rating from '../../View/Rating';
import formatString from '../../../utils/formatString';

const AnimeViewAllCard = ({
  genres,
  image,
  alt,
  description,
  format,
  episodes,
  season,
  seasonYear,
  averageScore,
}) => {
  return (
    <div className='grid max-w-[37rem] gap-3 rounded-lg bg-eerieBlack text-white md:h-72 lg:grid-cols-[188px,_auto]'>
      <div className='relative h-60 self-center rounded-xl md:h-72'>
        <Image
          className='rounded-l-xl '
          src={image}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='flex flex-col space-y-2 py-2 pr-2 text-xs sm:text-sm'>
        <div>
          <p>{description}</p>
        </div>
        <Divider />
        <div className='flex justify-between pb-4'>
          <div className='flex items-center justify-center space-x-1'>
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
