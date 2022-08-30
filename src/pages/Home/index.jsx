import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "./Home.css"

const Home = () => {
  const [movies,setMovies] = useState([]);
  const [apiURL,setApiURL] = useState('/api/v2/list_movies.json');

  // const cors = require("cors");
  // app.use(
  //   cors({
  //     origin: "https://yts.torrentbay.to/api/v2/list_movies.json",
  //   })
  // )

  useEffect(()=>{
    axios.get(apiURL).then((response)=>{
      console.log(response.data.data)
    }).catch((error)=>{
      console.log(error)
    })

  },[])



  return (
    <div>Home</div>
  )
}

export default Home