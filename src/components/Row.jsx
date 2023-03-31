import React, { useState, useEffect } from 'react'
import { getMovies } from "../services/api"

import "./Row.css"

const imageHost = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, path }) => {
  const [movies, setMovies] = useState([])

  const fetchMovies  = async (_path) => {
    try {
      const data = await getMovies(_path)
      setMovies(data?.results)
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies(path)
  }, [path])
  

  return (
    <div className='row-container'>
      <h2 className='row-header'>{title}</h2>
      <div className='row-cards'>
        {movies?.map((movie) => (
          <img className='movie-card' key={movie.id} src={`${imageHost}${movie.poster_path}`} alt={movie.name}/>
        ))}
      </div>
    </div>
  )
}

export default Row