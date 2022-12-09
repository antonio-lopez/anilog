import SectionTitle from '../Title/SectionTitle';
import HomeTopCard from '../Card/AnimeHome/HomeTopCard';

const TopAnime = ({ topFiveAnimeData }) => {
  return (
    <section>
      <SectionTitle title='Top Anime' link='/anime/top' />
      <div className='grid grid-cols-2 justify-items-center gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-0'>
        {topFiveAnimeData.map((anime) => (
          <HomeTopCard
            key={anime.id}
            id={anime.id}
            image={anime.coverImage.extraLarge}
            alt={anime.title.english}
            title={anime.title.english}
            averageScore={anime.averageScore}
          />
        ))}
      </div>
    </section>
  );
};

export default TopAnime;
