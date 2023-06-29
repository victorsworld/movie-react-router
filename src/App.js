import { useState, useEffect } from 'react';
import data from './Components/MovieData';
import NavBar from './Components/NavBar';
import MoviesList from './Components/MoviesList';
import Home from './Components/Home';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [movieData, setMovieData] = useState(data);

  return (
    <div>
      <div class="App-Header">
        <NavBar />
        <Outlet context={{movieData, setMovieData}} />
      </div>
    </div>
  );
}

export default App;
