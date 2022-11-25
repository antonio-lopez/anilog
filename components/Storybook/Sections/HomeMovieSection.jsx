import HomeMovieCard from '../../Card/AnimeHome/HomeMovieCard';
import SectionTitle from '../../Title/SectionTitle';

const HomeMovieSection = ({ image, alt, title, studio }) => {
  return (
    <section className='layout'>
      <SectionTitle title='Movies' />
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        <HomeMovieCard image={image} alt={alt} title={title} studio={studio} />
        <HomeMovieCard image={image} alt={alt} title={title} studio={studio} />
        <HomeMovieCard image={image} alt={alt} title={title} studio={studio} />
      </div>
    </section>
  );
};

export default HomeMovieSection;
