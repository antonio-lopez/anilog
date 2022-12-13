import { gql } from '@apollo/client';
import client from '../../../apollo-client';
import markdownToTxt from 'markdown-to-txt';
import AnimeViewAllCard from '../../../components/Card/AnimeViewAll/AnimeViewAllCard';
import AllSectionTitle from '../../../components/Title/AllSectionTitle';
import Pagination from '../../../components/View/Pagination';

const Top = ({ topAllData, pageData }) => {
  return (
    <section className='layout'>
      <AllSectionTitle title='Top Anime' />

      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {topAllData.map((anime) => (
          <AnimeViewAllCard
            id={anime.id}
            genres={anime.genres}
            key={anime.id}
            image={anime.coverImage.extraLarge}
            alt={anime.title.english}
            title={anime.title.english}
            studios={anime.studios.nodes[0].name}
            description={markdownToTxt(anime.description)}
            format={anime.format}
            episodes={anime?.episodes}
            season={anime.season}
            seasonYear={anime.seasonYear}
            averageScore={anime.averageScore}
          />
        ))}
      </div>
      <Pagination pageData={pageData} category='top' />
    </section>
  );
};

export default Top;

export async function getServerSideProps(context) {
  const page = context.query.page;
  const { data } = await client.query({
    query: gql`
      {
        topAll: Page(perPage: 10, page: ${page}) {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          media(format: TV, sort: SCORE_DESC, type:ANIME) {
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
      topAllData: data.topAll.media,
      pageData: data.topAll.pageInfo,
    },
  };
}
