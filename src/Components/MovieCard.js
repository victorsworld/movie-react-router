import React from 'react'
import "./Components.css"
import { useNavigate, useParams } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()
  const { id } = useParams();
  return (
    <div class="MovieCard">
      
        <h3 class="movieh3">{movie.title}</h3>
        <h3 class="movieh3">{ movie.year}</h3>
        <button class="movielist-button" onClick={() => navigate(`/moive/${movie.id}/edit`)}>Edit</button>

    </div>
  )
}

export default MovieCard
