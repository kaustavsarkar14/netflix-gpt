import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({movie}) => {
  if(!movie.poster_path) return
  return (
    <div className='w-44 min-w-32 md:min-w-48 ' >
        <img className='w-full rounded-sm shadow-md' src={IMG_CDN+movie.poster_path} alt="movie poster" />
    </div>
  )
}

export default MovieCard