import SectionTitle from '../Title/SectionTitle';
import HomeTopCard from '../Card/MangaHome/HomeTopCard';

const TopManga = ({ topFiveMangaData }) => {
  return (
    <section>
      <SectionTitle title='Top Manga' link='/manga/top/?page=1' />
      <div className='grid grid-cols-2 justify-items-center gap-4 md:grid-cols-4 lg:grid-cols-5 lg:gap-y-5'>
        {topFiveMangaData.map((manga) => (
          <HomeTopCard
            key={manga.id}
            id={manga.id}
            image={manga.coverImage.extraLarge}
            alt={manga.title.english ? manga.title.english : manga.title.romaji}
            title={
              manga.title.english ? manga.title.english : manga.title.romaji
            }
            averageScore={manga.averageScore}
          />
        ))}
      </div>
    </section>
  );
};

export default TopManga;
