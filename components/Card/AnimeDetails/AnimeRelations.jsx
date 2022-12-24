import Image from 'next/image';
import stringCase from '../../../utils/formatString';
import Link from 'next/link';

const AnimeRelations = ({
  image,
  alt,
  title,
  relationshipType,
  type,
  relationId,
}) => {
  const lowerType = type.toLowerCase();
  return (
    <div className='grid grid-cols-[113px,_auto] gap-3 rounded-xl bg-eerieBlack text-white shadow-md shadow-black'>
      <div className='relative h-40 self-center rounded-xl'>
        <Link href={`/${lowerType}/${relationId}`}>
          <Image
            className='rounded-l-xl object-left'
            src={image}
            alt={alt}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </Link>
      </div>
      <div className='flex flex-col justify-between py-2 text-xs'>
        <div>
          <span>{stringCase(relationshipType)}</span>
          <h1 className='text-base font-bold lg:text-lg'>{title}</h1>
        </div>
        <span>{stringCase(type)}</span>
      </div>
    </div>
  );
};

export default AnimeRelations;
