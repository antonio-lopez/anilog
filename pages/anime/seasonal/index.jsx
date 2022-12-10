import { useState } from 'react';
import { gql } from '@apollo/client';
import client from '../../../apollo-client';
import getSeason from '../../../utils/findSeason';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';
import AllSectionTitle from '../../../components/Title/AllSectionTitle';
import AnimeViewAllCard from '../../../components/Card/AnimeViewAll/AnimeViewAllCard';
import formatString from '../../../utils/formatString';
import markdownToTxt from 'markdown-to-txt';
import Router from 'next/router';

const currentSeason = ['WINTER', 'SPRING', 'SUMMER', 'FALL'][
  getSeason(new Date())
];
const currentYear = new Date().getFullYear();

const Seasonal = ({ seasonalAllData, pageData }) => {
  const [page, setPage] = useState(1);

  const nextPage = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
    Router.push(`/anime/seasonal/?page=${page + 1}`);
  };

  const prevPage = (e) => {
    e.preventDefault();
    setPage((prev) => prev - 1);
    Router.push(`/anime/seasonal/?page=${page - 1}`);
  };

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
      <div className='flex w-full items-center justify-center space-x-9 pt-10'>
        <button
          type='button'
          className='flex items-end justify-center rounded-lg px-4 py-2 text-white ring-2 ring-white hover:ring-mediumSlateBlue focus:ring-mediumSlateBlue'
          disabled={pageData.currentPage === 1}
          onClick={prevPage}
        >
          <AiOutlineCaretLeft className='mr-1 h-6 w-6' />
          Previous
        </button>

        <button
          type='button'
          className='flex items-end justify-center rounded-lg px-4 py-2 text-white ring-2 ring-white hover:ring-mediumSlateBlue focus:ring-mediumSlateBlue'
          disabled={pageData.hasNextPage === false}
          onClick={nextPage}
        >
          Next
          <AiOutlineCaretRight className='ml-1 h-6 w-6' />
        </button>
      </div>
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
