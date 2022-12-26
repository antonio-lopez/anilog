import Image from 'next/image';
import Link from 'next/link';
import formatString from '../../../utils/formatString';

const SearchResultCard = ({ props }) => {
  const { id, type, format, status, title, coverImage } = props;
  const typeLowercase = type.toLowerCase();
  return (
    <div className='grid grid-cols-[70px,_auto] gap-3 rounded-xl bg-eerieBlack text-white shadow-md shadow-black'>
      <Link href={`/${typeLowercase}/${id}`}>
        <div className='relative h-24 self-center rounded-xl'>
          <Image
            className='rounded-l-xl object-left'
            src={coverImage.medium}
            alt={title.english ? title.english : title.romaji}
            fill
            style={{
              objectFit: 'contain',
            }}
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          />
        </div>
      </Link>
      <div className='flex flex-col justify-between py-2 text-xs'>
        <span className='text-sm font-bold'>
          {title.english ? title.english : title.romaji}
        </span>
        <div className='flex flex-wrap space-x-1'>
          <span>{formatString(format)}</span>
          <span>•</span>
          <span>{formatString(type)}</span>
          <span>•</span>
          <span>{formatString(status)}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;
