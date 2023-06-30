import React from 'react';
import { useOutletContext } from 'react-router-dom';
import MoviesList from './MoviesList';

const Home = () => {
  const { movieData, setMovieData } = useOutletContext();
  console.log(movieData);

  return (
    <div>
      <h1>Home</h1>
      <div class="SideBar">
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
