import React from 'react';
import { useOutletContext } from 'react-router-dom';
import "./Components.css"


const Home = () => {
  const { movieData, setMovieData } = useOutletContext();
  console.log(movieData);

  return (
    <div class="Homepage" >
      <h1>Home</h1>
      <div >
        {movieData.map((movie) => {
          return movie.image;
        })}
        {/* {movieData.map((movie) => {
            return <MoviesList movieData={movieData} setMovieData={setMovieData} key={movie.id} movie={movie}/>
        })} */}
      </div>
    </div>
  );
};

export default Home;
