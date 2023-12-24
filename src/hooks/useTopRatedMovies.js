import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../redux/movieSlice";
import { useEffect } from "react";

const useTopRatesMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector(state=>state.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const data = await res.json();
    dispatch(addTopRatedMovies(data.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatesMovies;
