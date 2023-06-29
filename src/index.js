import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MoviesList from './Components/MoviesList';
import CreateMovie from './Components/CreateMovie';
import Home from './Components/Home';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/movies-list',
        element: <MoviesList />,
      },
      {
        path: '/movies-form',
        element: <CreateMovie />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
