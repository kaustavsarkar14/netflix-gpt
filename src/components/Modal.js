import React, { useEffect, useRef, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const Modal = ({ setModalOpen, movie }) => {
    const [video, setVideo] = useState(null)
  const modal = useRef();
  const modalContainer = useRef();
  const closeButton = useRef();
  const fetchVideo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
      API_OPTIONS
    );
    const data = await res.json();
    const filteredData = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer =
      filteredData.length == 0 ? data.results[0] : filteredData[0];
    setVideo(trailer.key)
  };
  useEffect(() => {
    fetchVideo();
    const handleClose = (e) => {
      if (
        (modalContainer.current.contains(e.target) &&
          !modal.current.contains(e.target)) ||
        closeButton.current.contains(e.target)
      )
        setModalOpen(false);
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, []);
  return (
    <div
      ref={modalContainer}
      className="fixed top-0 right-0 w-[100vw] h-[100vh] bg-black bg-opacity-30 z-20 flex justify-center items-center backdrop-blur-sm"
    >
      <div
        ref={modal}
        className="w-[95%]  md:w-[50%] min-h-[50vh]  bg-gray-600 mb-20 md:mb-0 relative"
      >
        {video && <iframe
          className="w-full aspect-video md:h-auto"
          src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1&controls=0&loop=1`}
          title="Aquaman and the Lost Kingdom | Mouthful of Water Challenge"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>}
        <div className="absolute bottom-0 p-8 w-full h-full flex flex-col justify-end items-start bg-gradient-to-t from-black gap-3">
          <h1 className="text-md md:text-4xl font-semibold">{movie.title}</h1>
          <p className="text-xs md:text-sm">{movie.overview}</p>
          <div className="absolute top-4 right-4" ref={closeButton}>
            <CloseRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
