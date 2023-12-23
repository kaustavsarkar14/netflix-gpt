import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(state=>state.movies)
  console.log(movies)
  return (
    <div className=' -mt-20 md:-mt-52 relative px-10' >
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular Movies" movies={movies.popularMovies} />
      {/* <MovieList title="Horror Movies" movies={movies.nowPlayingMovies} />
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} /> */}
    </div>
  )
}

export default SecondaryContainer