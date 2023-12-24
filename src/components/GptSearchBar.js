import React, { useRef } from "react";
import { LOGIN_BG_IMAGE } from "../utils/constants";
import openai from "../utils/opanai";
import getMovieDetailsByName from "../utils/getMovieDetailsByName";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../redux/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const input = useRef();
  const handleGptSearch = async (e) => {
    e.preventDefault();
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
  };
  return (
    <div className="flex justify-center items-center h-[60vh] md:h-[70vh] overflow-hidden md:mb-40">
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
            className="bg-red-600 px-6 md:px-8 py-2 rounded"
          >
            Search
          </button>
        </form>
      </div>
      <img className="w-full h-full object-cover" src={LOGIN_BG_IMAGE} alt="" />
    </div>
  );
};

export default GptSearchBar;
