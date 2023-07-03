import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useOutletContext, useNavigate } from 'react-router-dom';
import './CreateMovie.css';

const CreateMovie = () => {
  const { movieData, setMovieData } = useOutletContext();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState();
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState();
  const [runtime, setRuntime] = useState();
  const [actors, setActors] = useState([]);
  const [plot, setPlot] = useState('');

  const navigate = useNavigate();

  const handleOnSubmit = () => {
    const newMovie = {
      title: title ? title : 'None',
      year: year ? year : 0,
      director: director ? director : 'None',
      genre: genre ? genre : 'None',
      rating: rating ? rating : 0,
      runtime: runtime ? runtime : 0,
      actors: actors.length > 0 ? actors : ['None'],
      plot: plot ? plot : 'None',
      id: uuid(),
    };

    setMovieData((prevState) => [...prevState, newMovie]);

    setTitle('');
    setYear('');
    setDirector('');
    setGenre('');
    setRating('');
    setRuntime('');
    setActors([]);
    setPlot('');

    navigate('/');
  };

  return (
    <div class="Create">
      <div class="create-box">
        <label htmlFor="title">Title:</label><input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
      </div>

      <div class="create-box">
        <label htmlFor="year">Year:</label>
        <input
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <br />
      </div>

      <div class="create-box">
        <label htmlFor="director">Director:</label>
        <input
          id="director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <br />
      </div>

      <div class="create-box">
        <label htmlFor="genre">Genre:</label>
        <input
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />
      </div>

      <div class="create-box">
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <br />
      </div>

      <div class="create-box">
        <label htmlFor="runtime">Runtime:</label>
        <input
          id="runtime"
          value={runtime}
          onChange={(e) => setRuntime(e.target.value)}
        />
        <br />
      </div>

      <div class="create-box">
        <label htmlFor="actors">Actors:</label>
        <input
          id="actors"
          value={actors}
          onChange={(e) => setActors(e.target.value.split(','))}
        />
        <br />
      </div>

      <div class="create-box">
        <label htmlFor="plot">Plot:</label>
        <input
          id="plot"
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
        />
        <br />

        <button onClick={handleOnSubmit}>Submit</button>
      </div>

    </div>
  );
};

export default CreateMovie;
