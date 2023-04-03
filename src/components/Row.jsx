import React, { useState, useEffect } from 'react'
import { getMovies } from "../services/api"

import "./Row.css"
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'

const imageHost = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, path, isLarge }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  const handleOnClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl("")
    }else{
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
      .then((url) => {
        setTrailerUrl(url)
      })
      .catch((error) => {
        console.log(error)
      })

      console.log({
        name: movies?.name || "",
        title: movies?.title || "",
        original: movies?.original_name || ""
      })
    }
  }

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
          <img 
            className={ isLarge ? "movie-card-large" : "movie-card" }
            onClick={() => handleOnClick(movie)}
            key={movie.id}
            src={`${imageHost}${isLarge ? movie?.backdrop_path : movie?.poster_path}`} 
            alt={movie.name}/>
        ))}
      </div>
      {trailerUrl && <ReactPlayer url={trailerUrl}/>}
    </div>
  )
}

export default Row