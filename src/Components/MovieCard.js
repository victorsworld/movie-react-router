import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div class="MovieCard">
        <h3>{movie.title}</h3>
        <h3>{movie.year}</h3>
        
    </div>
  )
}

export default MovieCard
