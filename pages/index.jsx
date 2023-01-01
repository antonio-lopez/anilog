import { gql } from '@apollo/client';
import client from '../apollo-client';
import getSeason from '../utils/findSeason';
import Hero from '../components/Hero';
import SeasonalAnime from '../components/Home/SeasonalAnime';
import TopAnime from '../components/Home/TopAnime';
import MovieAnime from '../components/Home/MovieAnime';
import TrendingAnime from '../components/Home/TrendingAnime';

export default function Home({
  seasonalAnimeData,
  topFiveAnimeData,
  animeMoviesData,
  trendingAnimeData,
}) {
  return (
    <div>
      <Hero />
      <div className='layout'>
        {/* <SeasonalAnime seasonalAnimeData={seasonalAnimeData} /> */}
        <TopAnime topFiveAnimeData={topFiveAnimeData} />
        <TrendingAnime trendingAnimeData={trendingAnimeData} />
        <MovieAnime animeMoviesData={animeMoviesData} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const currentSeason = ['WINTER', 'SPRING', 'SUMMER', 'FALL'][
    getSeason(new Date())
  ];
  const currentYear = new Date().getFullYear();

  const { data } = await client.query({
    query: gql`
      {
        seasonalAnime: Page(perPage: 9) {
          media(
            format: TV
            season: ${currentSeason}
            seasonYear: ${currentYear}
            averageScore_greater: 76
            sort: SCORE_DESC
          ) {
            id
            averageScore
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
            bannerImage
            coverImage {
              extraLarge
            }
          }
        }
        topFiveAnime: Page(perPage: 5) {
          media(format: TV, averageScore_greater: 89, sort: SCORE_DESC) {
            id
            averageScore
            title {
              english
              romaji
            }
            coverImage {
              extraLarge
            }
          }
        }
        trendingAnime: Page(perPage: 5) {
          media(format: TV, averageScore_greater: 70, sort: TRENDING_DESC) {
            id
            averageScore
            title {
              english
              romaji
            }
            coverImage {
              extraLarge
            }
            bannerImage
            studios(isMain:true){
              nodes{
                name
              }
            }
            description(asHtml: false)
          }
        }
        animeMovies: Page(perPage: 3) {
          media(format: MOVIE, sort: SCORE_DESC) {
            id
            averageScore
            studios(isMain:true){
              nodes{
                name
              }
            }
            title {
              english
              romaji
            }
            bannerImage
          }
        }
      }
    `,
  });

  return {
    props: {
      seasonalAnimeData: data.seasonalAnime.media,
      topFiveAnimeData: data.topFiveAnime.media,
      animeMoviesData: data.animeMovies.media,
      trendingAnimeData: data.trendingAnime.media,
    },
  };
}
