import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isLoading : false,
    showGptSearch: false,
    movieNames:null,
    movieResults:null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies : (state, action)=>{
      const {movieNames, movieResults} = action.payload
      state.movieNames = movieNames
      state.movieResults = movieResults
    },
    setLoading : (state, action)=>{
      state.isLoading = action.payload
    }
  },
});

export const { toggleGptSearchView,addGptMovies,setLoading } = gptSlice.actions;
export default gptSlice.reducer;
