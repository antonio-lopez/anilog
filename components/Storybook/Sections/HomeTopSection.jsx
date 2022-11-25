import HomeTopCard from '../../Card/AnimeHome/HomeTopCard';
import SectionTitle from '../../Title/SectionTitle';

const HomeTopSection = ({ image, alt, title, percentage }) => {
  return (
    <section className='layout'>
      <SectionTitle title='Top Anime' />
      <div className='grid grid-cols-2 justify-items-center gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-0'>
        <HomeTopCard
          image={image}
          alt={alt}
          title={title}
          percentage={percentage}
        />
        <HomeTopCard
          image={image}
          alt={alt}
          title={title}
          percentage={percentage}
        />
        <HomeTopCard
          image={image}
          alt={alt}
          title={title}
          percentage={percentage}
        />
        <HomeTopCard
          image={image}
          alt={alt}
          title={title}
          percentage={percentage}
        />
        <HomeTopCard
          image={image}
          alt={alt}
          title={title}
          percentage={percentage}
        />
      </div>
    </section>
  );
};

export default HomeTopSection;
