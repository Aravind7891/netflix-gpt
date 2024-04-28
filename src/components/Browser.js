import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTrendingMovies from "../Hooks/useTrendingMovies";

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies(); 
  useTrendingMovies(); 
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  );
};

export default Browser;
