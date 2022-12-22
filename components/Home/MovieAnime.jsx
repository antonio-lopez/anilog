import SectionTitle from '../Title/SectionTitle';
import HomeMovieCard from '../Card/AnimeHome/HomeMovieCard';

const MovieAnime = ({ animeMoviesData }) => {
  return (
    <section>
      <SectionTitle title='Movies' link='/anime/movie/?page=1' />
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {animeMoviesData.map((movie) => (
          <HomeMovieCard
            key={movie.id}
            id={movie.id}
            image={movie.bannerImage}
            alt={movie.title.english ? movie.title.english : movie.title.romaji}
            title={
              movie.title.english ? movie.title.english : movie.title.romaji
            }
            studio={movie.studios.nodes[0].name}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieAnime;
