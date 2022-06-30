import { useState } from 'react';
import { createMovie } from './services/Fetch-utils';
import { useHistory } from 'react-router-dom';

export default function CreatePage() {
  const { push } = useHistory();
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const data = await createMovie({
      title: title,
      director: director,
      year: year,
      description: description,

    });
    setTitle('');
    setDirector('');
    setYear('');
    setDescription('');

    push('/movies');
  }

  return (
    <div className='create-page'>
      <h3>
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
          <button>Create Movie</button>
        </form>
      </h3>
    </div>
  );
}
