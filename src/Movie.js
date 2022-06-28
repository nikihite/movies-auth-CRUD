import React from 'react';
import { Link } from 'react-router-dom';

export function Movie({ movie }) {
  return <Link to={`/movies/${movie.id}`} >
    <p>{movie.title} directed by {movie.director}</p>
  </Link>;
}
