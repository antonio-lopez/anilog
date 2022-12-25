import Image from 'next/image';
import Rating from '../../View/Rating';
import Link from 'next/link';

const HomeTrendingCardSecondary = ({
  image,
  alt,
  title,
  studio,
  averageScore,
  id,
}) => {
  return (
    <div className='grid max-w-[37rem] grid-cols-1 rounded-xl bg-eerieBlack text-white lg:grid-cols-2'>
      <div className='relative h-28 w-full'>
        <Link href={`/anime/${id}`}>
          <Image
            className='rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none'
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
      <div className='flex flex-col space-y-1 p-2'>
        <Link href={`/anime/${id}`}>
          <h1 className='text-sm font-bold hover:text-mediumSlateBlue lg:text-lg'>
            {title}
          </h1>
        </Link>
        <span className='text-sm text-white/60'>{studio}</span>
        <Rating averageScore={averageScore} />
      </div>
    </div>
  );
};

export default HomeTrendingCardSecondary;
