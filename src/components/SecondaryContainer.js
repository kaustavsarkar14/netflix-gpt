import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(state=>state.movies)
  return (
    <div className=' -mt-20 md:-mt-52 relative px-3 md:px-10' >
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular Movies" movies={movies.popularMovies} />
      <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
      <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
    </div>
  )
}

export default SecondaryContainer