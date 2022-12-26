import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import SearchResultCard from '../../components/Card/Search/SearchResultCard';
import { BsSearch } from 'react-icons/bs';

const GET_SEARCH = gql`
  query ($userSearch: String) {
    mangaSearch: Page(perPage: 8) {
      media(
        search: $userSearch
        type: MANGA
        sort: SCORE_DESC
        isAdult: false
      ) {
        id
        type
        format
        status
        title {
          english
          romaji
        }
        coverImage {
          medium
        }
      }
    }
    animeSearch: Page(perPage: 8) {
      media(
        search: $userSearch
        type: ANIME
        sort: SCORE_DESC
        isAdult: false
      ) {
        id
        type
        format
        status
        title {
          english
          romaji
        }
        coverImage {
          medium
        }
      }
    }
  }
`;

const Search = () => {
  const [userSearch, setUserSearch] = useState('');
  const [input, setInput] = useState('');
  const { loading, error, data, refetch } = useQuery(GET_SEARCH, {
    variables: { userSearch },
  });

  const handleChange = (e) => {
    e.preventDefault();
    refetch(setUserSearch(input));
  };

  if (loading)
    return (
      <div className='absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 transform '>
        <div className='h-64 w-64 animate-spin rounded-full border-8 border-solid border-mediumSlateBlue border-t-transparent'></div>
      </div>
    );
  if (error) return `Error! ${error.message}`;

  return (
    <section className='layout text-white'>
      <div className='flex w-full items-center justify-center py-8'>
        <form
          className='flex h-12 w-full items-center rounded-md bg-eerieBlack/70 md:w-3/4 lg:w-1/2'
          onSubmit={handleChange}
        >
          <BsSearch className='mx-3 h-5 w-5' />
          <input
            className='w-full bg-transparent outline-none'
            type='text'
            aria-label='search input'
            value={input}
            placeholder='Search...'
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            aria-label='submit'
            className='h-full rounded-md bg-red-500'
            type='submit'
          />
        </form>
      </div>

      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        <div className='grid grid-rows-8 gap-y-2'>
          {data.animeSearch.media.length > 0 &&
            data.animeSearch.media.map((result) => (
              <SearchResultCard key={result.id} props={result} />
            ))}
        </div>
        <div>
          <div className='grid gap-y-2'>
            {data.mangaSearch.media.length > 0 &&
              data.mangaSearch.media.map((result) => (
                <SearchResultCard key={result.id} props={result} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
