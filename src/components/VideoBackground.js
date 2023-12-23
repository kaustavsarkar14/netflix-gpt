import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailerVideo = useSelector((state) => state.movies.trailerVideo);

  if (!trailerVideo) return;
  return (
    <div className="w-full h-[50vh] md:h-screen overflow-hidden" >
      <iframe
      className="md:w-full w-[190%] aspect-video md:h-auto"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1`}
        title="Aquaman and the Lost Kingdom | Mouthful of Water Challenge"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
