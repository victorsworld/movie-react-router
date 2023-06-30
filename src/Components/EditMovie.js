import React, { useState, useEffect } from 'react';
import { useOutletContext, useParams, useNavigate } from 'react-router-dom';

const EditMovie = () => {
  const navigate = useNavigate();
  const [editTitle, setEditTitle] = useState('');
  const [editYear, setEditYear] = useState('');
  const [editDirector, setEditDirector] = useState('');
  const [editGenre, setEditGenre] = useState('');
  const [editRating, setEditRating] = useState('');
  const [editRuntime, setEditRuntime] = useState('');
  const [editActors, setEditActors] = useState([]);
  const [editPlot, setEditPlot] = useState('');

  const { id } = useParams();
  const { movieData, setMovieData } = useOutletContext();

  


  return (
    <div>

    </div>
  );
};

export default EditMovie