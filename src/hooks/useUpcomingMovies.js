import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import {addUpcomingMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addUpcomingMovies(data.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useUpcomingMovies;
