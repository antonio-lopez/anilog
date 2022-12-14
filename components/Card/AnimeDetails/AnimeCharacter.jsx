import Image from 'next/image';
import stringCase from '../../../utils/formatString';

const AnimeCharacter = ({ image, alt, fullName, role }) => {
  return (
    <div className='grid grid-cols-[113px,_auto] gap-3 rounded-xl bg-eerieBlack text-white shadow-md shadow-black'>
      <div className='relative h-40 self-center rounded-xl'>
        <Image
          className='rounded-xl object-left'
          src={image}
          alt={alt}
          fill
          style={{
            objectFit: 'contain',
          }}
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
        />
      </div>
      <div className='flex flex-col justify-between py-2 text-xs'>
        <span className='text-base font-bold lg:text-lg'>{fullName}</span>
        <span>{stringCase(role)}</span>
      </div>
    </div>
  );
};

export default AnimeCharacter;
