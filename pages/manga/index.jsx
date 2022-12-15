import { gql } from '@apollo/client';
import client from '../../apollo-client';
import TopManga from '../../components/Home/TopManga';
import PopularManga from '../../components/Home/PopularManga';
import TrendingManga from '../../components/Home/TrendingManga';

const Manga = ({ topFiveMangaData, popularMangaData, trendingMangaData }) => {
  return (
    <div className='layout'>
      <PopularManga popularMangaData={popularMangaData} />
      <TrendingManga trendingMangaData={trendingMangaData} />
      <TopManga topFiveMangaData={topFiveMangaData} />
    </div>
  );
};

export default Manga;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      {
        popularManga: Page(perPage: 9) {
          media(type: MANGA, sort: POPULARITY_DESC) {
            id
            title {
              romaji
              english
            }
            staff(sort: RELEVANCE, perPage: 1) {
              nodes {
                name {
                  full
                }
              }
            }
            averageScore
            bannerImage
            coverImage {
              extraLarge
            }
            description
          }
        }
        trendingManga: Page(perPage: 5) {
          media(type: MANGA, sort: TRENDING_DESC) {
            id
            title {
              romaji
              english
            }
            staff(sort: RELEVANCE, perPage: 1) {
              nodes {
                name {
                  full
                }
              }
            }
            averageScore
            bannerImage
            coverImage {
              extraLarge
            }
            description
          }
        }
        topFiveManga: Page(perPage: 10) {
          media(type: MANGA, sort: SCORE_DESC) {
            id
            title {
              romaji
              english
            }
            averageScore
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
      topFiveMangaData: data.topFiveManga.media,
      popularMangaData: data.popularManga.media,
      trendingMangaData: data.trendingManga.media,
    },
  };
}
