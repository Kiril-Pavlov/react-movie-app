import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Movie from "./Movie";

import "./Home.css"

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [apiURL, setApiURL] = useState('/api/v2/list_movies.json');

  useEffect(() => {
    getMovies(apiURL);
  }, [])

  const getMovies = (apiURL) => {
    axios.get(apiURL).then((response) => {
      console.log(response)
      setMovies(response.data.data.movies)
    }).catch((error) => {
      console.log(error)
    })
  }

  let genre = "all";
  let sortBy = "title"
  let orderBy = "asc";
  const setFilters = function () {
    genre = document.getElementById('genre').value;
    sortBy = document.getElementById('sort-by').value;
    orderBy = document.getElementById('order-by').value;
    console.log(genre);
    let endpoint = `/api/v2/list_movies.json?genre=${genre}&sort_by=${sortBy}&order_by=${orderBy}`
    //console.log(endpoint)
    setApiURL(endpoint);
    //console.log(theApi);
    //filterMovies();
    return genre;
  }

  function filterMovies() {
    getMovies(apiURL);
  }

  function searchMovies() {
    getMovies(apiURL);
  }



  return (
    <div className='home-container'>
      <div className="filters-container">
        <label htmlFor="genre">Genre:</label>
        <select name="" id="genre" onChange={setFilters}>
          <option value="all">All</option>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <option value="comedy">Comedy</option>
          <option value="adventure">Adventure</option>
          <option value="horror">Horror</option>
          <option value="thriller">Thriller</option>
          <option value="documentary">Documentary</option>
          <option value="music">Music</option>
          <option value="fantasy">Fantasy</option>
          <option value="mystery">Mystery</option>
          <option value="crime">Crime</option>
          <option value="family">Family</option>
        </select>
        <label htmlFor="sort-by">Sort by:</label>
        <select name="" id="sort-by" onChange={setFilters}>
          <option value="title">Title</option>
          <option value="rating">Rating</option>
        </select>
        <label htmlFor="order-by">Order by:</label>
        <select name="" id="order-by" onChange={setFilters}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
        <button onClick={filterMovies}>Filter Movies</button>
      </div>
      <div>
        {movies.map(movie => <Movie key={movie.id}
          movieTitle={movie.title}
          movieImg={movie.medium_cover_image}
          movieGenre={movie.genres}
          movieRating={movie.rating} />)}
      </div>
    </div>
  )
}

export default Home