import React from "react";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";
import MovieList from "./MovieList";
import ShimmerCards from "./ShimmerCards";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults, isLoading } = useSelector(
    (state) => state.gpt
  );
  if (!movieNames && !isLoading) return <SecondaryContainer />;
  return (
    <div className=" -mt-20 md:-mt-52 relative px-3 md:px-10">
      {isLoading ? (
        <ShimmerCards/>
      ) : (
        movieNames.map(
          (movie, i) =>
            movieResults[i].length != 0 && (
              <MovieList key={movie} title={movie} movies={movieResults[i]} />
            )
        )
      )}
    </div>
  );
};

export default GptMovieSuggestions;
