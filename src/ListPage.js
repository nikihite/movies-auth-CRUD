import React, { useEffect, useState } from 'react';
import { getMovies } from './services/Fetch-utils';
import { Movie } from './Movie';

export default function ListPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function doFetch() {
      const movies = await getMovies();

      setMovies(movies);
    }
    doFetch();
  }, []);
  return (
    <div className='list-page'>
      {
        movies.map((movie, i) => <Movie movie={movie} key={movie.director + movie.title + i} />)
      }
    </div>
  );
}