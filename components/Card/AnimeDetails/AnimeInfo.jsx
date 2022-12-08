import stringCase from '../../../utils/formatString';

const AnimeInfo = ({
  title,
  studios,
  format,
  episodes,
  duration,
  status,
  season,
  seasonYear,
  averageScore,
  genres,
}) => {
  const studio = studios[0].name;
  const producers = studios.slice(1);

  return (
    <section className='rounded-xl bg-eerieBlack p-4 text-white shadow-md shadow-black'>
      <div className='flex flex-col space-y-3 [&_span]:font-bold'>
        <div>
          <span>Studio</span>
          <div>{studio}</div>
        </div>
        <div>
          <span>Format</span>
          <div>{stringCase(format)}</div>
        </div>
        <div>
          <span>Episodes</span>
          <div>{episodes}</div>
        </div>
        <div>
          <span>Episode Duration</span>
          <div>{duration} mins</div>
        </div>
        <div>
          <span>Status</span>
          <div>{stringCase(status)}</div>
        </div>
        <div>
          <span>Season</span>
          <div>
            {stringCase(season)} {seasonYear}
          </div>
        </div>
        <div>
          <span>Average Score</span>
          <div>{averageScore}%</div>
        </div>
        <div>
          <span>Producers</span>
          {producers.map((producer) => (
            <div key={producer.id}>{producer.name}</div>
          ))}
        </div>
        <div>
          <span>Genres</span>
          {genres.map((genre, index) => (
            <div key={index}>{genre}</div>
          ))}
        </div>
        <div>
          <span>Romaji</span>
          <div>{title.romaji}</div>
        </div>
        <div>
          <span>English</span>
          <div>{title.english}</div>
        </div>
        <div>
          <span>Native</span>
          <div>{title.native}</div>
        </div>
      </div>
    </section>
  );
};

export default AnimeInfo;
