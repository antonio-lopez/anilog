import Image from 'next/image';

const AnimeRelations = ({ image, alt, title, relationshipType, type }) => {
  return (
    <div className='grid grid-cols-[113px,_auto] gap-3 rounded-xl bg-eerieBlack text-white'>
      <div className='relative h-40 self-center rounded-xl'>
        <Image
          className='rounded-xl '
          src={image}
          alt={alt}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className='flex flex-col justify-between py-2 text-xs'>
        <div>
          <span>{relationshipType}</span>
          <h1 className='text-base font-bold lg:text-lg'>{title}</h1>
        </div>
        <span>{type}</span>
      </div>
    </div>
  );
};

export default AnimeRelations;
