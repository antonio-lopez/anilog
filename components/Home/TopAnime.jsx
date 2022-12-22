import SectionTitle from '../Title/SectionTitle';
import HomeTopCard from '../Card/AnimeHome/HomeTopCard';

const TopAnime = ({ topFiveAnimeData }) => {
  return (
    <section>
      <SectionTitle title='Top Anime' link='/anime/top/?page=1' />
      <div className='grid grid-cols-2 justify-items-center gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-0'>
        {topFiveAnimeData.map((anime) => (
          <HomeTopCard
            key={anime.id}
            id={anime.id}
            image={anime.coverImage.extraLarge}
            alt={anime.title.english ? anime.title.english : anime.title.romaji}
            title={
              anime.title.english ? anime.title.english : anime.title.romaji
            }
            averageScore={anime.averageScore}
          />
        ))}
      </div>
    </section>
  );
};

export default TopAnime;
