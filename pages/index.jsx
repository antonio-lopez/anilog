import { gql } from '@apollo/client';
import client from '../apollo-client';
import Hero from '../components/Hero';
import SeasonalAnime from '../components/Home/SeasonalAnime';

export default function Home({ seasonalAnimeData }) {
  // console.log(seasonalAnimeData);
  return (
    <div>
      <Hero />
      <div className='layout'>
        <SeasonalAnime seasonalAnimeData={seasonalAnimeData} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    //  TOP 9 ANIME IN THE SEASON
    query: gql`
      {
        seasonalAnime: Page(perPage: 9) {
          media(
            format: TV
            season: SPRING
            seasonYear: 2022
            averageScore_greater: 76
            sort: SCORE_DESC
          ) {
            id
            averageScore
            title {
              english
            }
            studios(sort: NAME, isMain: true) {
              nodes {
                name
              }
            }
            description(asHtml: false)
            bannerImage
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
      seasonalAnimeData: data.seasonalAnime.media,
    },
  };
}
