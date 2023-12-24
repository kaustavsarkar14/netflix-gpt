import React from "react";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((state) => state.gpt);
  if (!movieNames) return <SecondaryContainer />;
  return (
    <div className=" -mt-20 md:-mt-52 relative px-3 md:px-10">
      {movieNames.map(
        (movie, i) =>
          movieResults[i].length != 0 && (
            <MovieList key={movie} title={movie} movies={movieResults[i]} />
          )
      )}
    </div>
  );
};

export default GptMovieSuggestions;
