import Image from 'next/image';
import Divider from '../../View/Divider';
import GenrePill from '../../View/GenrePill';
import Rating from '../../View/Rating';
import formatString from '../../../utils/formatString';
import shorten from '../../../utils/shortenString';
import Link from 'next/link';

const MangaViewAllCard = ({
  id,
  genres,
  image,
  alt,
  title,
  creator,
  description,
  status,
  averageScore,
  type,
}) => {
  return (
    <div className='grid h-60 max-w-[37rem] grid-cols-2 gap-3 rounded-lg bg-eerieBlack text-white shadow-md shadow-black md:h-72 md:grid-cols-[188px,_auto]'>
      <Link className='group' href={`/manga/${id}`}>
        <div className='relative h-60 self-center rounded-xl md:h-72'>
          <div className='absolute z-10 hidden h-full w-full flex-col justify-end text-white lg:flex'>
            <div className='rounded-bl-lg bg-black/70 p-3 group-hover:text-mediumSlateBlue'>
              <h1 className='font-bold'>{title}</h1>
              <span className='text-sm text-white'>{creator}</span>
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
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          />
        </div>
      </Link>
      <div className='flex w-full flex-col space-y-2 py-2 pr-2 text-xs sm:text-sm'>
        <div className='flex flex-col space-y-1 lg:hidden'>
          <h1 className='font-bold'>{title}</h1>
          <span>{creator}</span>
        </div>
        <p className='hidden lg:block'>{shorten(description, 380)}...</p>
        <Divider />
        <div className='flex flex-wrap justify-center space-y-1 lg:justify-between lg:pb-1'>
          <div className='flex flex-wrap items-center justify-center space-x-1'>
            <span>{formatString(type)}</span>
            <span>•</span>
            <span>{formatString(status)}</span>
          </div>
          <Rating averageScore={averageScore} />
        </div>
        <div className='justify-self-end'>
          <GenrePill genres={genres} />
        </div>
      </div>
    </div>
  );
};

export default MangaViewAllCard;
