const GenrePill = ({ genres }) => {
  const genreArr = genres.slice(0, 3);
  return (
    <div>
      {genreArr.map((genre, index) => (
        <span
          key={index}
          className='mr-2 rounded-full bg-[#EF5D5D] py-1 px-4 text-xs text-white md:text-sm'
        >
          {genre}
        </span>
      ))}
    </div>
  );
};

export default GenrePill;
