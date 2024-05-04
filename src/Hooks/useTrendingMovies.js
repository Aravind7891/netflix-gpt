import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {  addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useTrendingMovies = () => {
    // fetch data from tmdb and update store
  const dispatch = useDispatch();
  const trendingMovies = useSelector(store => store.movies.trendingMovies);

  
  const getTrendingMovies = async () => {
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.results))
  };

  useEffect(() =>{
    !trendingMovies && getTrendingMovies();
  },[]);

};
export default useTrendingMovies;