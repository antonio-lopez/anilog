const MangaSectionTitle = ({ title }) => {
  return (
    <div className='py-5 text-white'>
      {/* title text */}
      <div className='py-2 md:flex md:items-center md:justify-between'>
        <h1 className='text-xl font-bold'>{title}</h1>
      </div>
      <div>
        <div className='w-full border-2 border-tealBlue'></div>
      </div>
    </div>
  );
};

export default MangaSectionTitle;
