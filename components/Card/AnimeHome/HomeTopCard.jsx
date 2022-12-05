import Image from 'next/image';
import Rating from '../../View/Rating';
import Link from 'next/link';

const HomeTopCard = ({ image, alt, title, averageScore, id }) => {
  return (
    <div className='flex h-60 w-40 flex-col rounded-xl bg-eerieBlack text-white shadow-md shadow-black lg:h-80 lg:w-52'>
      <div className='relative h-full'>
        <Link href={`/anime/${id}`}>
          <Image
            className='rounded-t-xl object-top'
            src={image}
            alt={alt}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </Link>
      </div>
      <div className='flex flex-col space-y-1 p-2'>
        <Link href={`/anime/${id}`}>
          <h1 className='text-sm hover:text-mediumSlateBlue lg:text-base'>
            {title}
          </h1>
        </Link>
        <Rating averageScore={averageScore} />
      </div>
    </div>
  );
};

export default HomeTopCard;
