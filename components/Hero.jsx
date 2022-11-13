import Image from 'next/image';

const Hero = () => {
  return (
    <section className='min relative flex max-h-96 items-center justify-center'>
      <div className='absolute z-10 flex flex-col space-y-2 text-center font-bold text-white'>
        <h1 className='text-xl md:text-4xl'>Track. Browse. Discover</h1>
        <p className='text-xs md:text-base'>
          Track what you watch. Browse the season&apos;s hottest anime. Discover
          new anime{' '}
        </p>
      </div>
      <Image
        className='max-w-full opacity-30'
        src='/assets/cover.jpg'
        alt='hero cover'
        width={1440}
        height={384}
      />
    </section>
  );
};

export default Hero;
