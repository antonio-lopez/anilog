import stringCase from '../../../utils/formatString';

const MangaInfo = ({
  title,
  format,
  status,
  averageScore,
  genres,
  staff,
  chapters,
  volume,
}) => {
  const creator = staff.nodes[0]?.name.full;
  const otherStaff = staff.nodes?.slice(1);

  return (
    <section className='rounded-xl bg-eerieBlack p-4 text-white shadow-md shadow-black'>
      <div className='flex flex-col space-y-3 [&_span]:font-bold'>
        <div>
          <span>Creator</span>
          <div>{creator}</div>
        </div>
        <div>
          <span>Format</span>
          <div>{stringCase(format)}</div>
        </div>
        <div>
          <span>Chapters</span>
          {chapters ? <div>{chapters}</div> : <div>Unknown</div>}
        </div>
        <div>
          <span>Volumes</span>
          {volume ? <div>{volume}</div> : <div>Unknown</div>}
        </div>
        <div>
          <span>Status</span>
          <div>{stringCase(status)}</div>
        </div>
        <div>
          <span>Average Score</span>
          <div>{averageScore}%</div>
        </div>
        <div>
          <span>Staff</span>
          {otherStaff.map((staff) => (
            <div key={staff.id}>{staff.name.full}</div>
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

export default MangaInfo;
