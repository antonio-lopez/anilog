import SectionTitle from '../Title/SectionTitle';
import HomeSeasonCardPrimary from '../Card/AnimeHome/HomeSeasonCardPrimary';
import HomeSeasonCardSecondary from '../Card/AnimeHome/HomeSeasonCardSecondary';
import markdownToTxt from 'markdown-to-txt';

const SeasonalAnime = ({ seasonalAnimeData }) => {
  const primaryAnime = seasonalAnimeData[0];
  const secondaryAnime = seasonalAnimeData.slice(1);
  return (
    <section>
      <SectionTitle title='Current Season' link='/anime/seasonal/?page=1' />
      <HomeSeasonCardPrimary
        key={primaryAnime.id}
        id={primaryAnime.id}
        image={primaryAnime?.bannerImage}
        alt={
          primaryAnime.title.english
            ? primaryAnime.title.english
            : primaryAnime.title.romaji
        }
        title={
          primaryAnime.title.english
            ? primaryAnime.title.english
            : primaryAnime.title.romaji
        }
        studio={primaryAnime.studios.nodes[0].name}
        averageScore={primaryAnime.averageScore}
        description={markdownToTxt(primaryAnime.description)}
      />

      <div className='mt-8 grid grid-cols-1 gap-3 md:grid-cols-2'>
        {secondaryAnime.map((anime) => (
          <HomeSeasonCardSecondary
            key={anime.id}
            id={anime.id}
            image={anime.coverImage?.extraLarge}
            alt={anime.title.english ? anime.title.english : anime.title.romaji}
            title={
              anime.title.english ? anime.title.english : anime.title.romaji
            }
            studio={anime.studios.nodes[0].name}
            averageScore={anime.averageScore}
            description={markdownToTxt(anime.description)}
          />
        ))}
      </div>
    </section>
  );
};

export default SeasonalAnime;
