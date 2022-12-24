import { gql } from '@apollo/client';
import client from '../../apollo-client';
import AnimeBanner from '../../components/AnimeBanner';
import AnimeSummary from '../../components/Card/AnimeDetails/AnimeSummary';
import Relations from '../../components/AnimeDetails/Relations';
import Characters from '../../components/AnimeDetails/Characters';
import Staff from '../../components/AnimeDetails/Staff';
import AnimeInfo from '../../components/Card/AnimeDetails/AnimeInfo';

const Anime = ({ anime }) => {
  const {
    title,
    studios,
    coverImage,
    bannerImage,
    description,
    relations,
    format,
    episodes,
    duration,
    status,
    season,
    seasonYear,
    averageScore,
    genres,
    staff,
    characters,
  } = anime;
  return (
    <>
      <AnimeBanner image={bannerImage} alt={title.english} />
      <AnimeSummary
        image={coverImage.extraLarge}
        alt={title.english}
        title={title.english}
        description={description}
      />
      <div className='layout grid grid-cols-1 gap-10 py-10 lg:grid-cols-[240px,_auto]'>
        <div>
          <Relations relations={relations} />
          <Characters characters={characters} />
          <Staff staff={staff} />
        </div>
        <div className='lg:row-start-1'>
          <AnimeInfo
            title={title}
            studios={studios.nodes}
            format={format}
            episodes={episodes}
            duration={duration}
            status={status}
            season={season}
            seasonYear={seasonYear}
            averageScore={averageScore}
            genres={genres}
          />
        </div>
      </div>
    </>
  );
};

export default Anime;

export async function getServerSideProps(context) {
  const { data } = await client.query({
    query: gql`
      {
        media: Media(id: ${context.params.id}) {
          title {
            english
            romaji
            native
          }
          studios(sort: FAVOURITES_DESC) {
            nodes {
              id
              name
              isAnimationStudio
            }
          }
          coverImage {
            extraLarge
          }
          relations {
            edges {
              relationType
              node {
                id
                type
                title {
                  english
                }
                coverImage{
                  extraLarge
                }
              }
              id
            }
          }
          bannerImage
          description(asHtml: false)
          format
          episodes
          duration
          status
          season
          seasonYear
          averageScore
          genres
          staff(perPage: 4) {
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
          characters(sort: FAVOURITES_DESC, perPage: 6) {
            edges{
              role
              node{
                id
                image{
                  large
                }
                name{
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

  return { props: { anime: data.media } };
}
