import React, { useState, useEffect } from 'react'
import { categories, getMovies } from "../services/api"

import "./Banner.css"

const Banner = () => {
  const [movie, setMovie] = useState({})

  const fetchRandomMovie = async () => {
    const netflixOriginals = categories.find((category) => category.name === 'originals')
    try {
      const data = await getMovies(netflixOriginals.path)
      const randomIndex = Math.floor(Math.random() * data.results.length)
      setMovie(data?.results[randomIndex])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
   fetchRandomMovie()
  }, [])

  function truncate(str, n) {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str
  }
  

  return (
    <header className='banner-container' style={{backgroundSize:"cover", backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, roundPosition:"center-center"}}>
      <div className='banner-content'>
        <h1 className='banner-title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-button-container">
          <button className='banner-button'>Assistir</button>
          <button className='banner-button'>Minha Lista</button>
        </div>
        <div className='banner-description'>
          <p>{truncate(movie?.overview, 150)}</p>
        </div>
      </div>
    </header>
  )
}

export default Banner