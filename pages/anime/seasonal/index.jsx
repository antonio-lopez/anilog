import { gql } from '@apollo/client';
import client from '../../../apollo-client';
import getSeason from '../../../utils/findSeason';
import AllSectionTitle from '../../../components/Title/AllSectionTitle';
import AnimeViewAllCard from '../../../components/Card/AnimeViewAll/AnimeViewAllCard';
import formatString from '../../../utils/formatString';
import markdownToTxt from 'markdown-to-txt';

const currentSeason = ['WINTER', 'SPRING', 'SUMMER', 'FALL'][
  getSeason(new Date())
];
const currentYear = new Date().getFullYear();

const Seasonal = ({ seasonalAllData }) => {
  return (
    <section className='layout'>
      <AllSectionTitle
        title={`${formatString(currentSeason)} ${currentYear} Anime`}
      />
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {seasonalAllData.map((anime) => (
          <AnimeViewAllCard
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
    </section>
  );
};

export default Seasonal;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      {
        seasonalAll: Page(perPage: 10) {
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
    },
  };
}
