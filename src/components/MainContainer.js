import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];
  return (
    <div >
      <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
      <VideoBackground id={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
