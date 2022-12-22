import { useState } from 'react';
import { AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai';
import Router from 'next/router';

const Pagination = ({ pageData, category, type }) => {
  const [page, setPage] = useState(1);

  const nextPage = (e) => {
    e.preventDefault();
    setPage((prev) => prev + 1);
    Router.push(`/${type}/${category}/?page=${page + 1}`);
  };

  const prevPage = (e) => {
    e.preventDefault();
    setPage((prev) => prev - 1);
    Router.push(`/${type}/${category}/?page=${page - 1}`);
  };
  return (
    <div className='flex w-full items-center justify-center space-x-9 pt-10'>
      <button
        type='button'
        className='flex items-end justify-center rounded-lg px-4 py-2 text-white ring-2 ring-white hover:ring-mediumSlateBlue focus:ring-mediumSlateBlue disabled:hidden'
        disabled={pageData.currentPage === 1}
        onClick={prevPage}
      >
        <AiOutlineCaretLeft className='mr-1 h-6 w-6' />
        Previous
      </button>

      <button
        type='button'
        className='flex items-end justify-center rounded-lg px-4 py-2 text-white ring-2 ring-white hover:ring-mediumSlateBlue focus:ring-mediumSlateBlue disabled:hidden'
        disabled={pageData.hasNextPage === false}
        onClick={nextPage}
      >
        Next
        <AiOutlineCaretRight className='ml-1 h-6 w-6' />
      </button>
    </div>
  );
};

export default Pagination;
