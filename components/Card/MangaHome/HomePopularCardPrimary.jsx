import Image from 'next/image';
import Rating from '../../View/Rating';
import shorten from '../../../utils/shortenString';
import Link from 'next/link';

const HomePopularCardPrimary = ({
  image,
  alt,
  title,
  creator,
  averageScore,
  description,
  id,
}) => {
  return (
    <div className='grid grid-cols-1 items-center gap-4 text-white lg:grid-cols-2'>
      <div className='relative h-36 lg:h-full'>
        <Link href={`/manga/${id}`}>
          <Image
            className=' rounded-xl'
            src={image}
            alt={alt}
            fill
            style={{
              objectFit: 'cover',
            }}
            priority
          />
        </Link>
      </div>
      <div className='flex flex-col space-y-1'>
        <Link href={`/manga/${id}`}>
          <h1 className='text-xl font-bold hover:text-mediumSlateBlue lg:text-3xl'>
            {title}
          </h1>
        </Link>
        <span className='text-sm text-white/60'>{creator}</span>
        <Rating averageScore={averageScore} />
        <p className='text-sm md:text-base'>{shorten(description, 550)}...</p>
      </div>
    </div>
  );
};

export default HomePopularCardPrimary;
