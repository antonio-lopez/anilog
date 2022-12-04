import SectionTitle from '../Title/SectionTitle';
import HomeSeasonCardPrimary from '../Card/AnimeHome/HomeSeasonCardPrimary';
import HomeSeasonCardSecondary from '../Card/AnimeHome/HomeSeasonCardSecondary';
import markdownToTxt from 'markdown-to-txt';

const SeasonalAnime = ({ seasonalAnimeData }) => {
  const primaryAnime = seasonalAnimeData[0];
  const secondaryAnime = seasonalAnimeData.slice(1);
  return (
    <section>
      <SectionTitle title='Current Season' />
      <HomeSeasonCardPrimary
        image={primaryAnime.bannerImage}
        alt={primaryAnime.title.english}
        title={primaryAnime.title.english}
        studio={primaryAnime.studios.nodes[0].name}
        averageScore={primaryAnime.averageScore}
        description={markdownToTxt(primaryAnime.description)}
      />

      <div className='mt-8 grid grid-cols-1 gap-3 md:grid-cols-2'>
        {secondaryAnime.map((anime) => (
          <HomeSeasonCardSecondary
            key={anime.id}
            image={anime.coverImage.extraLarge}
            alt={anime.title.english}
            title={anime.title.english}
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
