import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Movie from "./Movie";

import "./Home.css"

const Home = () => {
  const [movies,setMovies] = useState([]);
  const [apiURL,setApiURL] = useState('/api/v2/list_movies.json');

  useEffect(()=>{
    axios.get(apiURL).then((response)=>{
      console.log(response)
      setMovies(response.data.data.movies)
    }).catch((error)=>{
      console.log(error)
    })

  },[])

    console.log(movies)


  return (
    <div className='home-container'>
      {movies.map(movie => <Movie key={movie.id} 
      movieTitle={movie.title} 
      movieImg={movie.medium_cover_image} 
      movieGenre={movie.genres} 
      movieRating={movie.rating} />)}
    </div>
  )
}

export default Home