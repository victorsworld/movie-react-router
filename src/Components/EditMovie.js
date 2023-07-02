import React, { useState, useEffect } from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';

const EditMovie = () => {
  const navigate = useNavigate();
  const [editTitle, setEditTitle] = useState('');
  const [editYear, setEditYear] = useState('');
  const [editDirector, setEditDirector] = useState('');
  const [editGenre, setEditGenre] = useState('');
  const [editRating, setEditRating] = useState('');
  const [editRuntime, setEditRuntime] = useState('');
  const [editActors, setEditActors] = useState([]);
  const [editPlot, setEditPlot] = useState('');

  const { id } = useParams();
  const { movieData, setMovieData } = useOutletContext();

  const handleOnSubmit = () => {

    setMovieData((prevMovies) => {
      const movieIndex = prevMovies.findIndex((movie) => movie.id.toString() === id);

      const previousMovie = prevMovies[movieIndex];
      if (movieIndex !== -1) {
      
        //Created new movie that when anything in the object is not updated will return with an iternary if statement
        const updatedMovie = {
        id: previousMovie.id,
        title: editTitle || previousMovie.title,
        year: editYear ? parseInt(editYear) : previousMovie.year,
        director: editDirector || previousMovie.director,
        genre: editGenre || previousMovie.genre,
        rating: editRating ? parseFloat(editRating) : previousMovie.rating,
        runtime: editRuntime ? parseInt(editRuntime) : previousMovie.runtime,
        actors: editActors.length > 0 ? editActors : previousMovie.actors,
        plot: editPlot || previousMovie.plot,
        };

        // Create a new array of movies with the updated movie
        const newMovies = [...prevMovies];
        newMovies[movieIndex] = updatedMovie;
        return newMovies;
      }

      return prevMovies;
    });
    navigate('/movies-list');
  };

  const handleOnDelete = () => {
    // Using a filter array method to filter the blogs in the array by ID
    const remainingMovies = movieData.filter((movie) => {
      return movie.id.toString() !== id;
    });
    // SetBlogs to the filtered blog
    setMovieData(remainingMovies);
    navigate('/movies-list');
  };

  return (
    <div>
      <h1>Edit Movie</h1>
      <label htmlFor="editTitle">Title:</label>
      <input
        id="editTitle"
        value={editTitle}
        onChange={(e) => setEditTitle(e.target.value)}
      />
      <br />
      <label htmlFor="editYear">Year:</label>
      <input
        id="editYear"
        value={editYear}
        onChange={(e) => setEditYear(e.target.value)}
      />
      <br />
      <label htmlFor="editDirector">Director:</label>
      <input
        id="editDirector"
        value={editDirector}
        onChange={(e) => setEditDirector(e.target.value)}
      />
      <br />
      <label htmlFor="editGenre">Genre:</label>
      <input
        id="editGenre"
        value={editGenre}
        onChange={(e) => setEditGenre(e.target.value)}
      />
      <br />
      <label htmlFor="editRating">Rating:</label>
      <input
        id="editRating"
        value={editRating}
        onChange={(e) => setEditRating(e.target.value)}
      />
      <br />
      <label htmlFor="editRuntime">Runtime:</label>
      <input
        id="editRuntime"
        value={editRuntime}
        onChange={(e) => setEditRuntime(e.target.value)}
      />
      <br />
      <label htmlFor="editActors">Actors:</label>
      <input
        id="editActors"
        value={editActors.join(', ')}
        onChange={(e) => setEditActors(e.target.value.split(','))}
      />
      <br />
      <label htmlFor="editPlot">Plot:</label>
      <textarea
        id="editPlot"
        value={editPlot}
        onChange={(e) => setEditPlot(e.target.value)}
      />
      <br />
      <button onClick={handleOnSubmit}>Submit</button>
      <button onClick={handleOnDelete}>Delete</button>
    </div>
  );
};

export default EditMovie;
