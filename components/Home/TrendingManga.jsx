import SectionTitle from '../Title/SectionTitle';
import HomeTrendingCardPrimary from '../Card/MangaHome/HomeTrendingCardPrimary';
import HomeTrendingCardSecondary from '../Card/MangaHome/HomeTrendingCardSecondary';
import markdownToTxt from 'markdown-to-txt';

const TrendingManga = ({ trendingMangaData }) => {
  const primaryManga = trendingMangaData[0];
  const secondaryManga = trendingMangaData.slice(1);

  return (
    <section>
      <SectionTitle title='Trending Now' link='/manga/trending/?page=1' />
      <div className='grid grid-cols-1 gap-4 rounded-xl bg-eerieBlack p-4 shadow-md shadow-black lg:grid-cols-2'>
        <HomeTrendingCardPrimary
          key={primaryManga.id}
          id={primaryManga.id}
          image={primaryManga.bannerImage}
          alt={
            primaryManga.title.english
              ? primaryManga.title.english
              : primaryManga.title.romaji
          }
          title={
            primaryManga.title.english
              ? primaryManga.title.english
              : primaryManga.title.romaji
          }
          creator={primaryManga.staff.nodes[0].name.full}
          averageScore={primaryManga.averageScore}
          description={markdownToTxt(primaryManga.description)}
        />
        <div className='grid grid-cols-1 gap-4 pt-10 md:grid-cols-2 lg:grid-cols-1 lg:pt-0'>
          {secondaryManga.map((manga) => (
            <HomeTrendingCardSecondary
              key={manga.id}
              id={manga.id}
              image={manga.coverImage.extraLarge}
              alt={
                manga.title.english ? manga.title.english : manga.title.romaji
              }
              title={
                manga.title.english ? manga.title.english : manga.title.romaji
              }
              creator={manga.staff.nodes[0].name.full}
              averageScore={manga.averageScore}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingManga;
