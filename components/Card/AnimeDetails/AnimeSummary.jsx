import Image from 'next/image';

const AnimeSummary = ({ image, alt, title, description }) => {
  return (
    <div className='w-full bg-eerieBlack py-4 text-white'>
      <div className='layout grid grid-cols-1 md:grid-cols-[219px,_auto]'>
        <div className='relative h-64 self-center'>
          <Image
            src={image}
            alt={alt}
            fill
            style={{
              objectFit: 'contain',
            }}
          />
        </div>
        <div className='flex flex-col space-y-1 pt-5 sm:pt-0'>
          <h1 className='text-2xl font-bold'>{title}</h1>
          <p className='text-sm lg:text-base'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeSummary;
