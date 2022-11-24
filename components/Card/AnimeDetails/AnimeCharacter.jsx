import Image from 'next/image';

const AnimeCharacter = ({ image, alt, fullName, role }) => {
  return (
    <div className='grid grid-cols-[113px,_auto] gap-3 rounded-xl bg-eerieBlack text-white'>
      <div className='relative h-40 self-center rounded-xl'>
        <Image
          className='rounded-xl object-left'
          src={image}
          alt={alt}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className='flex flex-col justify-between py-2 text-xs'>
        <span className='text-base font-bold lg:text-lg'>{fullName}</span>
        <span>{role}</span>
      </div>
    </div>
  );
};

export default AnimeCharacter;
