import React from 'react'
import MovieCard from './MovieCard';
import { useOutletContext } from 'react-router-dom';

const MoviesList = () => {
    const { movieData, setMovieData} = useOutletContext()
  
    return (
    <div> 
        {movieData.map((movie)=>{
            return <MovieCard movie={movie}/>})}
           
    </div>
  )
}

export default MoviesList