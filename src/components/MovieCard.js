import React, { useEffect, useState } from "react";
import { IMG_CDN } from "../utils/constants";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import Modal from "./Modal";

const MovieCard = ({ movie }) => {
  const [isHovering, setHovering] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleMouseEnter = () => {
    setHovering(true);
  };
  useEffect(()=>{
    setHovering(false)
  },[isModalOpen])
  if (!movie.poster_path) return;
  return (
    <div
      className="relative w-44 min-w-32 md:min-w-48 bg-black transition-all duration-300 ease-in-out overflow-hidden cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovering(false)}
      onClick={() => setModalOpen(true)}
    >
      <img
        className={
          "w-full  rounded-sm shadow-md duration-300 transition-all " +
          (isHovering && "opacity-20 scale-125")
        }
        src={IMG_CDN + movie.poster_path}
        alt="movie poster"
      />
      {isHovering && (
        <div className="absolute flex gap-4 flex-col justify-between items-start bottom-0 p-1 md:p-5  w-full">
          <h1 className="md:text-xl text-sm font-semibold">
            {movie.original_title}
          </h1>
          <div className="flex gap-0 justify-start items-center">
            <StarRoundedIcon sx={{ width: "1.5rem", marginBottom: "2px" }} />
            <p className="text-xs md:text-sm">
              {movie.vote_average.toFixed(1)}{" "}
              <span className="text-xs md:text-sm">({movie.vote_count})</span>
            </p>
          </div>
          <div className="absolute right-5 bottom-5 hidden md:block">
            <PlayCircleOutlineRoundedIcon
              sx={{ scale: "1.4", marginBottom: "5px" }}
            />
          </div>
        </div>
      )}
      {isModalOpen && <Modal setModalOpen={setModalOpen} movie={movie} />}
    </div>
  );
};

export default MovieCard;
