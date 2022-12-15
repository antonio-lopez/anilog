import SectionTitle from '../Title/SectionTitle';
import HomePopularCardPrimary from '../Card/MangaHome/HomePopularCardPrimary';
import HomePopularCardSecondary from '../Card/MangaHome/HomePopularCardSecondary';
import markdownToTxt from 'markdown-to-txt';

const PopularManga = ({ popularMangaData }) => {
  const primaryManga = popularMangaData[0];
  const secondaryManga = popularMangaData.slice(1);

  return (
    <section>
      <SectionTitle title='Popular Manga' link='/manga/popularity/?page=1' />
      <HomePopularCardPrimary
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

      <div className='mt-8 grid grid-cols-1 gap-3 md:grid-cols-2'>
        {secondaryManga.map((manga) => (
          <HomePopularCardSecondary
            key={manga.id}
            id={manga.id}
            image={manga.coverImage.extraLarge}
            alt={manga.title.english ? manga.title.english : manga.title.romaji}
            title={
              manga.title.english ? manga.title.english : manga.title.romaji
            }
            studio={manga.staff.nodes[0].name.full}
            averageScore={manga.averageScore}
            description={markdownToTxt(manga.description)}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularManga;
