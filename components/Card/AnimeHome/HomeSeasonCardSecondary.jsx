import Image from 'next/image';
import Rating from '../../View/Rating';
import shorten from '../../../utils/shortenString';
import Link from 'next/link';

const HomeSeasonCardSecondary = ({
  image,
  alt,
  title,
  studio,
  averageScore,
  description,
  id,
}) => {
  return (
    <div className='grid h-44 max-w-[37rem] grid-cols-[110px,_auto] rounded-xl bg-eerieBlack text-white shadow-md shadow-black lg:h-52 lg:grid-cols-[160px,_auto]'>
      <div className='relative'>
        <Link href={`/anime/${id}`}>
          <Image
            className='rounded-l-xl object-left'
            src={image}
            alt={alt}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Link>
      </div>
      <div className='overflow-hidden py-1 px-2'>
        <Link href={`/anime/${id}`}>
          <h1 className='hover:text-mediumSlateBlue'>{title}</h1>
        </Link>
        <span className='text-xs text-white/60'>{studio}</span>
        <Rating averageScore={averageScore} />
        <p className='hidden lg:block'>{shorten(description, 250)}...</p>
        <p className='text-xs lg:hidden'>{shorten(description, 170)}...</p>
      </div>
    </div>
  );
};

export default HomeSeasonCardSecondary;
