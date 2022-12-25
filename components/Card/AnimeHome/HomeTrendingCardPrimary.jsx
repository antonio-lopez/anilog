import Image from 'next/image';
import Rating from '../../View/Rating';
import Link from 'next/link';
import shorten from '../../../utils/shortenString';

const HomeTrendingCardPrimary = ({
  image,
  alt,
  title,
  studio,
  averageScore,
  description,
  id,
}) => {
  return (
    <div className='w-full text-white'>
      <div className='relative h-28 w-full lg:h-64'>
        <Link href={`/anime/${id}`}>
          <Image
            className='rounded-xl'
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
        </Link>
      </div>
      <div className='flex flex-col space-y-1'>
        <Link href={`/anime/${id}`}>
          <h1 className='text-xl font-bold hover:text-mediumSlateBlue lg:text-3xl'>
            {title}
          </h1>
        </Link>
        <span className='text-sm text-white/60'>{studio}</span>
        <Rating averageScore={averageScore} />
        <p className='text-sm'>{shorten(description, 550)}...</p>
      </div>
    </div>
  );
};

export default HomeTrendingCardPrimary;
