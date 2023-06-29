import React from 'react'
import { Link } from "react-router-dom";
import "./Components.css"

const NavBar = () => {
  return (
    <div class="NavBar">
        
        <Link class="NavBar-Links" to="/">Home</Link> <Link class="NavBar-Links" to="/movies-list" >Movie List</Link> <Link class="NavBar-Links" to="movies-form">Movie Form </Link>
        
    </div>
  )
}

export default NavBar