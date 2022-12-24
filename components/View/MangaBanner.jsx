import Image from 'next/image';

const MangaBanner = ({ image, alt }) => {
  return (
    <section className='relative h-28 w-full'>
      <Image
        className='mx-auto max-w-screen-2xl opacity-30'
        src={image ? image : ''}
        alt={alt}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
    </section>
  );
};

export default MangaBanner;
