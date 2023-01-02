import { gql } from '@apollo/client';
import client from '../../../apollo-client';
import getSeason from '../../../utils/findSeason';
import Pagination from '../../../components/View/Pagination';
import AllSectionTitle from '../../../components/Title/AllSectionTitle';
import AnimeViewAllCard from '../../../components/Card/AnimeViewAll/AnimeViewAllCard';
import formatString from '../../../utils/formatString';
import markdownToTxt from 'markdown-to-txt';

const currentSeason = ['WINTER', 'SPRING', 'SUMMER', 'FALL'][
  getSeason(new Date())
];
const currentYear = new Date().getFullYear();

const Seasonal = ({ seasonalAllData, pageData }) => {
  return (
    <section className='layout'>
      <AllSectionTitle
        title={`${formatString(currentSeason)} ${currentYear} Anime`}
      />
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {seasonalAllData.map((anime) => (
          <AnimeViewAllCard
            id={anime.id}
            genres={anime.genres}
            key={anime.id}
            image={anime?.coverImage.extraLarge}
            alt={anime.title.english ? anime.title.english : anime.title.romaji}
            title={
              anime.title.english ? anime.title.english : anime.title.romaji
            }
            studios={anime.studios.nodes[0]?.name}
            description={markdownToTxt(anime.description)}
            format={anime?.format}
            episodes={anime?.episodes}
            season={anime.season}
            seasonYear={anime.seasonYear}
            averageScore={anime?.averageScore}
          />
        ))}
      </div>
      <Pagination pageData={pageData} type='anime' category='seasonal' />
    </section>
  );
};

export default Seasonal;

export async function getServerSideProps(context) {
  const page = context.query.page;
  const { data } = await client.query({
    query: gql`
      {
        seasonalAll: Page(perPage: 10, page: ${page}) {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
          media(format: TV, season: ${currentSeason}, seasonYear: ${currentYear}, sort: SCORE_DESC) {
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
      seasonalAllData: data.seasonalAll.media,
      pageData: data.seasonalAll.pageInfo,
    },
  };
}
