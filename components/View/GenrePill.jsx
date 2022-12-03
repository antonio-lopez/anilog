const GenrePill = ({ genres }) => {
  const genreArr = genres.slice(0, 3);
  return (
    <div className='flex flex-col items-center space-y-1 lg:flex-row lg:space-x-2 lg:space-y-0'>
      {/* <div className='flex items-center space-x-2 overflow-auto'> */}
      {/* <div> */}
      {genreArr.map((genre, index) => (
        <span
          key={index}
          className='rounded-full bg-[#EF5D5D] py-1 px-4 text-center text-xs text-white md:text-sm'
        >
          {genre}
        </span>
      ))}
    </div>
  );
};

export default GenrePill;
