import React, { useState } from 'react';
import {v4 as uuid} from "uuid"
import { useOutletContext, useNavigate } from 'react-router-dom';

const CreateMovie = () => {
  const { movieData, setMovieData,} = useOutletContext()
  const [title, setTitle] = useState("")
  const [year, setYear] = useState()
  const [director, setDirector] = useState("")
  const [genre, setGenre] = useState("")
  const [rating, setRating] = useState()
  const [runtime, setRuntime] = useState()
  const [actors, setActors] = useState([])
  const [plot, setPlot] = useState("")
  
  const navigate = useNavigate()

  const handleOnSubmit = () => {
    const newMovie = {
      title,
      year,
      director,
      genre,
      rating,
      runtime,
      actors,
      plot,
      id: uuid(),
    };
  
    setMovieData((prevState) => [...prevState, newMovie]);
    
    setAuthor("");
    setTitle("");
    setContent("");
    navigate("/");
  };


  return (
    <div>
      <label htmlFor="title">Title:</label>
<input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
<br/>

<label htmlFor="year">Year:</label>
<input id="year" value={year} onChange={(e) => setYear(e.target.value)} />
<br/>

<label htmlFor="director">Director:</label>
<input id="director" value={director} onChange={(e) => setDirector(e.target.value)} />
<br/>

<label htmlFor="genre">Genre:</label>
<input id="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
<br/>

<label htmlFor="rating">Rating:</label>
<input id="rating" value={rating} onChange={(e) => setRating(e.target.value)} />
<br/>

<label htmlFor="runtime">Runtime:</label>
<input id="runtime" value={runtime} onChange={(e) => setRuntime(e.target.value)} />
<br/>

<label htmlFor="actors">Actors:</label>
<input id="actors" value={actors} onChange={(e) => setActors(e.target.value.split(','))} />
<br/>

<label htmlFor="plot">Plot:</label>
<input id="plot" value={plot} onChange={(e) => setPlot(e.target.value)} />
<br/>

<button onClick={handleOnSubmit}>Submit</button>

    </div>
  )
}

export default CreateMovie
/*
 "id": uuid(),
"title": "The Avengers",
"year": 2012,
"director": "Joss Whedon",
"genre": "Action",
"rating": 8.0,
"runtime": 143,
"actors": ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"],
"plot": "Earth's mightiest heroes must come together and learn to fight as a team to stop the mischievous Loki and his alien army from enslaving humanity.",
"image": "https://example.com/the-avengers.jpg"
*/