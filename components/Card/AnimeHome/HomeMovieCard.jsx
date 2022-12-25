import Image from 'next/image';
import Link from 'next/link';

const HomeMovieCard = ({ image, alt, title, studio, id }) => {
  return (
    <div className='relative'>
      <div className='absolute z-10 flex h-full flex-col justify-end p-3 text-white'>
        <Link href={`/anime/${id}`}>
          <h1 className='text-lg font-bold hover:text-mediumSlateBlue lg:text-2xl'>
            {title}
          </h1>
        </Link>
        <span className='text-sm text-white'>{studio}</span>
      </div>
      <div className='relative h-28 lg:h-64'>
        <Image
          className='rounded-xl opacity-30'
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
    </div>
  );
};

export default HomeMovieCard;
