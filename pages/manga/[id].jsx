import { gql } from '@apollo/client';
import client from '../../apollo-client';
import MangaBanner from '../../components/View/MangaBanner';
import MangaSummary from '../../components/Card/MangaDetails/MangaSummary';
import Relations from '../../components/MangaDetails/Relations';
import Characters from '../../components/MangaDetails/Characters';
import Staff from '../../components/MangaDetails/Staff';
import MangaInfo from '../../components/Card/MangaDetails/MangaInfo';

const Manga = ({ manga }) => {
  const {
    title,
    chapters,
    volume,
    coverImage,
    bannerImage,
    description,
    relations,
    format,
    status,
    averageScore,
    genres,
    staff,
    characters,
  } = manga;
  //   console.log(manga);
  return (
    <>
      <MangaBanner
        image={bannerImage}
        alt={title.english ? title.english : title.romaji}
      />
      <MangaSummary
        image={coverImage.extraLarge}
        alt={title.english ? title.english : title.romaji}
        title={title.english ? title.english : title.romaji}
        description={description}
      />
      <div className='layout grid grid-cols-1 gap-10 py-10 lg:grid-cols-[240px,_auto]'>
        <div>
          <Relations relations={relations} />
          <Characters characters={characters} />
          <Staff staff={staff} />
        </div>
        <div className='lg:row-start-1'>
          <MangaInfo
            title={title}
            format={format}
            status={status}
            averageScore={averageScore}
            genres={genres}
            staff={staff}
            chapters={chapters}
            volume={volume}
          />
        </div>
      </div>
    </>
  );
};

export default Manga;

export async function getServerSideProps(context) {
  const { data } = await client.query({
    query: gql`
      {
        media: Media(id: ${context.params.id}) {
          chapters
          volumes
          title {
            english
            romaji
            native
          }
          relations {
            edges {
              id
              relationType
              node {
                type
                title {
                  english
                  romaji
                }
                coverImage {
                  extraLarge
                }
              }
            }
          }
          staff(sort: RELEVANCE, perPage: 4) {
            nodes {
              id
              name {
                full
              }
              image {
                large
              }
            }
          }

          format
          status
          averageScore
          bannerImage
          coverImage {
            extraLarge
          }
          genres
          description(asHtml: false)
          characters(sort: FAVOURITES_DESC, perPage: 6) {
            edges {
              role
              node {
                id
                image {
                  large
                }
                name {
                  full
                }
                favourites
              }
            }
          }
        }
      }
    `,
  });

  return { props: { manga: data.media } };
}
