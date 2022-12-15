import SectionTitle from '../Title/SectionTitle';
import HomeTrendingCardPrimary from '../Card/AnimeHome/HomeTrendingCardPrimary';
import HomeTrendingCardSecondary from '../Card/AnimeHome/HomeTrendingCardSecondary';
import markdownToTxt from 'markdown-to-txt';

const TrendingAnime = ({ trendingAnimeData }) => {
  const primaryAnime = trendingAnimeData[0];
  const secondaryAnime = trendingAnimeData.slice(1);

  return (
    <section>
      <SectionTitle title='Trending Now' link='/anime/trending/?page=1' />
      <div className='grid grid-cols-1 gap-4 rounded-xl bg-eerieBlack p-4 shadow-md shadow-black lg:grid-cols-2'>
        <HomeTrendingCardPrimary
          key={primaryAnime.id}
          id={primaryAnime.id}
          image={primaryAnime.bannerImage}
          alt={primaryAnime.title.english}
          title={primaryAnime.title.english}
          studio={primaryAnime.studios.nodes[0].name}
          averageScore={primaryAnime.averageScore}
          description={markdownToTxt(primaryAnime.description)}
        />
        <div className='grid grid-cols-1 gap-4 pt-10 md:grid-cols-2 lg:grid-cols-1 lg:pt-0'>
          {secondaryAnime.map((anime) => (
            <HomeTrendingCardSecondary
              key={anime.id}
              id={anime.id}
              image={anime.coverImage.extraLarge}
              alt={anime.title.english}
              title={anime.title.english}
              studio={anime.studios.nodes[0].name}
              averageScore={anime.averageScore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingAnime;
