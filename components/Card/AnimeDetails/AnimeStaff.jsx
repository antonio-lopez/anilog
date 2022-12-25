import Image from 'next/image';

const AnimeStaff = ({ image, alt, fullName }) => {
  return (
    <div className='flex h-60 w-40 flex-col rounded-xl bg-eerieBlack text-white shadow-md shadow-black lg:h-64 lg:w-44'>
      <div className='relative h-full'>
        <Image
          className='rounded-t-xl object-top'
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
      <div className='py-4 text-center'>
        <h1 className='text-sm lg:text-base'>{fullName}</h1>
      </div>
    </div>
  );
};

export default AnimeStaff;
