import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title, movies);
  if(!movies) return
  return (
    <div className="flex flex-col gap-4 py-4" >
      <h1 className="text-2xl " >{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar gap-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
