import Image from 'next/image';

const HomeMovieCard = ({ image, alt, title, studio }) => {
  return (
    <div className='relative'>
      <div className='absolute z-10 flex h-full flex-col justify-end p-3 text-white'>
        <h1 className='text-lg font-bold lg:text-2xl'>{title}</h1>
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
        />
      </div>
    </div>
  );
};

export default HomeMovieCard;
