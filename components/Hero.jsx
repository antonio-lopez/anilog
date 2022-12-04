import Image from 'next/image';

const Hero = () => {
  return (
    <section className='relative'>
      <div className='absolute z-10 flex h-full w-full flex-col items-center justify-center space-y-2 text-center font-bold text-white'>
        <h1 className='text-xl md:text-4xl'>Track. Browse. Discover</h1>
        <p className='text-xs md:text-base'>
          Track what you watch. Browse the season&apos;s hottest anime. Discover
          new anime{' '}
        </p>
      </div>
      <Image
        className='mx-auto max-w-full opacity-30'
        src='/assets/cover.jpg'
        alt='hero cover'
        width={1440}
        height={384}
      />
    </section>
  );
};

export default Hero;
