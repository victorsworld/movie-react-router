import React from 'react'
import { useOutletContext } from 'react-router-dom';
import MoviesList from './MoviesList';

const Home = () => {
 const { movieData, setMovieData} = useOutletContext()
 console.log(movieData)


  return (
    <div>
        <h1>Home</h1>
        <div class="SideBar">
        
        </div>

    </div>
  )
}

export default Home