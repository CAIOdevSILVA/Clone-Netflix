import React, { useState, useEffect } from 'react'
import { getMovies } from "../services/api"
import Card from './Card'

const Row = ({ title, path }) => {
  const [movies, setMovies] = useState([])

  const fetchMovies  = async (_path) => {
    try {
      const data = await getMovies(_path)
      setMovies(data?.results)
      console.log(movies)
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
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  )
}

export default Row