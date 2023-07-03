import React from 'react';
import { useOutletContext } from 'react-router-dom';
import './Components.css';

const Home = () => {
  const { movieData, setMovieData } = useOutletContext();
  console.log(movieData);

  return (
    <div class="Homepage">
    <h1>Home</h1>
      <div class="Homepagediv2" >
          {movieData.map((movie) => {
            return <div class="movie-image">
              <img src={movie.image}
              alt='not entered yet'/> 
              </div>;
          })}
      </div>
    </div>
  );
};

export default Home;
