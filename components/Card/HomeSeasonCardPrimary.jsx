import Image from 'next/image';
import Rating from '../View/Rating';

const HomeSeasonCardPrimary = ({
  image,
  alt,
  title,
  studio,
  percentage,
  description,
}) => {
  return (
    <div className='layout grid grid-cols-1 items-center gap-4 text-white lg:grid-cols-2'>
      <div className='relative h-36 lg:h-full'>
        <Image
          className=' rounded-xl'
          // src='/assets/offline-cover.jpg'
          src={image}
          alt={alt}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className='flex flex-col space-y-1'>
        <h1 className='text-xl font-bold lg:text-3xl'>
          {/* Kaguya-sama: Love is War? */}
          {title}
        </h1>
        <span className='text-sm text-white/60'>{studio}</span>
        {/* <Rating percentage='90' /> */}
        <Rating percentage={percentage} />
        <p className='text-sm md:text-base'>{description}</p>
        {/* <p className='text-sm md:text-base'>
          After a slow but eventful summer vacation, Shuchiin Academy&apos;s
          second term is now starting in full force. As August transitions into
          September, Miyuki Shirogane&apos;s birthday looms ever closer, leaving
          Kaguya Shinomiya in a serious predicament as to how to celebrate it.
          Furthermore, the tenure of the school&apos;s 67th student council is
          coming to an end. Due to the council members being in different
          classes, the only time Kaguya and Miyuki have to be together will soon
          disappear, putting all of their cunning plans at risk.
        </p> */}
      </div>
    </div>
  );
};

export default HomeSeasonCardPrimary;
