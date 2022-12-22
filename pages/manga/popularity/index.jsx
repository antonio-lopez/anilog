import { gql } from '@apollo/client';
import client from '../../../apollo-client';
import markdownToTxt from 'markdown-to-txt';
import AllSectionTitle from '../../../components/Title/AllSectionTitle';
import MangaViewAllCard from '../../../components/Card/MangaViewAll/MangaViewAllCard';
import Pagination from '../../../components/View/Pagination';

const Popularity = ({ popularAllData, pageData }) => {
  return (
    <div className='layout'>
      <AllSectionTitle title='Popular Manga' />
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {popularAllData.map((manga) => (
          <MangaViewAllCard
            id={manga.id}
            genres={manga.genres}
            key={manga.id}
            image={manga.coverImage.extraLarge}
            alt={manga.title.english ? manga.title.english : manga.title.romaji}
            title={
              manga.title.english ? manga.title.english : manga.title.romaji
            }
            creator={manga.staff.nodes[0].name.full}
            description={markdownToTxt(manga.description)}
            status={manga.status}
            averageScore={manga.averageScore}
            type={manga.type}
          />
        ))}
      </div>
      <Pagination pageData={pageData} type='manga' category='popularity' />
    </div>
  );
};

export default Popularity;

export async function getServerSideProps(context) {
  const page = context.query.page;
  const { data } = await client.query({
    query: gql`
      {
        popularAll: Page(perPage: 10, page: ${page}) {
          pageInfo {
            total
            perPage
            currentPage
            lastPage
            hasNextPage
          }
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
            status
            genres
            type
            averageScore
            coverImage {
              extraLarge
            }
            description(asHtml: false)
          }
        }
      }
    `,
  });

  return {
    props: {
      popularAllData: data.popularAll.media,
      pageData: data.popularAll.pageInfo,
    },
  };
}
