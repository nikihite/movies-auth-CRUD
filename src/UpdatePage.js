import { useEffect, useState } from 'react';
import { deleteMovie, getMovieById, updateMovie } from './services/Fetch-utils';
import { useHistory, useParams } from 'react-router-dom';

export default function UpdatePage() {
  const { push } = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    async function doFetch() {
      const movie = await getMovieById(id);

      setTitle(movie.title);
      setDirector(movie.director);
      setYear(movie.year);
      setDescription(movie.description);
    }

    doFetch();
  }, [id]);

  async function handleDeleteMovie() {
    await deleteMovie(id);

    push('/movies');
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await updateMovie({
      title: title,
      director: director,
      year: year,
      description: description
    }, id);

    setTitle('');
    setDirector('');
    setYear('');
    setDescription('');

    push('/movies');
  }

  return (
    <div className='update-page'>
      <h2>Update a Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
        Title
          <input onChange={e => setTitle(e.target.value)} value={title} />
        </label>
        <label>
        Director
          <input onChange={e => setDirector(e.target.value)} value={director} />
        </label>
        <label>
        Year
          <input onChange={e => setYear(e.target.value)} value={year} />
        </label>
        <label>
        Description
          <input onChange={e => setDescription(e.target.value)} value={description} />
        </label>
        <button>Update Movie</button>
      </form>
      <button 
        onClick={handleDeleteMovie} className='delete-button'>Delete Movie</button>
    </div>
  );
}