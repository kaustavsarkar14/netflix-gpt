import React, { useRef } from "react";
import { LOGIN_BG_IMAGE } from "../utils/constants";
import openai from "../utils/opanai";
import getMovieDetailsByName from "../utils/getMovieDetailsByName";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovies, setLoading } from "../redux/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.gpt.isLoading);
  const input = useRef();
  const handleGptSearch = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      input.current.value +
      ". only give me names of 10 movies, comma seperated. like the example given ahead. Example Result: Gadar, Sholay, Golmaal, Koi Mil Gaya, Dhoom";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const gptMovies = gptResults.choices?.[0].message.content.split(",");
    const promises = gptMovies.map((movie) => getMovieDetailsByName(movie));
    const movies = await Promise.all(promises);
    dispatch(addGptMovies({ movieNames: gptMovies, movieResults: movies }));
    dispatch(setLoading(false));
  };
  return (
    <div className="flex justify-center items-center h-[60vh] md:h-[70vh] overflow-hidden md:mb-40 relative z-0">
      <div className="absolute w-full hfull top-0 h-[60vh] md:h-[70vh] bg-gradient-to-t from-black flex justify-center items-center">
        <form className="flex justify-center items-center w-[90%] md:w-[40%] gap-3 relative z-20 flex-wrap">
          <input
            ref={input}
            className="flex-1 rounded py-2 px-3 bg-black bg-opacity-80 backdrop-blur-xs border-2 border-gray-600"
            type="text"
            placeholder="What do you want to watch today?..."
          />
          <button
            onClick={handleGptSearch}
            className="bg-red-600 px-6 md:px-8 py-2 rounded flex justify-center items-center"
          >
            {isLoading && <svg
                width="20"
                height="20"
                fill="currentColor"
                class="mr-2 animate-spin"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
              </svg>}
            <h1>Search</h1>
          </button>
        </form>
      </div>
      <img className="w-full h-full object-cover" src={LOGIN_BG_IMAGE} alt="" />
    </div>
  );
};

export default GptSearchBar;
