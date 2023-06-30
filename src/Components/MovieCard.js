import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div>
        <h3>{movie.title}</h3>
        <h3>{movie.year}</h3>
        <h3>{movie.genre}</h3>
    </div>
  )
}

export default MovieCard