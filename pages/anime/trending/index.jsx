import { gql } from '@apollo/client';
import client from '../../../apollo-client';
import markdownToTxt from 'markdown-to-txt';
import AllSectionTitle from '../../../components/Title/AllSectionTitle';
import AnimeViewAllCard from '../../../components/Card/AnimeViewAll/AnimeViewAllCard';
import Pagination from '../../../components/View/Pagination';

const Trending = ({ trendAllData, pageData }) => {
  return (
    <section className='layout'>
      <AllSectionTitle title='Trending Anime' />
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {trendAllData.map((anime) => (
          <AnimeViewAllCard
            id={anime.id}
            genres={anime.genres}
            key={anime.id}
            image={anime.coverImage.extraLarge}
            alt={anime.title.english ? anime.title.english : anime.title.romaji}
            title={
              anime.title.english ? anime.title.english : anime.title.romaji
            }
            studios={anime.studios.nodes[0]?.name}
            description={markdownToTxt(anime.description)}
            format={anime.format}
            episodes={anime?.episodes}
            season={anime?.season}
            seasonYear={anime?.seasonYear}
            averageScore={anime.averageScore}
          />
        ))}
      </div>
      <Pagination pageData={pageData} type='anime' category='trending' />
    </section>
  );
};

export default Trending;

export async function getServerSideProps(context) {
  const page = context.query.page;
  const { data } = await client.query({
    query: gql`
      {
        trendAll: Page(perPage: 10, page: ${page}) {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          media(format: TV, sort: TRENDING_DESC, type:ANIME) {
            id
            averageScore
            format
            episodes
            status
            season
            seasonYear
            genres
            title {
              english
              romaji
            }
            studios(sort: NAME, isMain: true) {
              nodes {
                name
              }
            }
            description(asHtml: false)
            coverImage {
              extraLarge
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      trendAllData: data.trendAll.media,
      pageData: data.trendAll.pageInfo,
    },
  };
}
