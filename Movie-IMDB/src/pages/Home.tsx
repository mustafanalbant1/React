/** @format */

import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import MovieModal from "../components/MovieModal";
import { useMovieContext } from "../context/MovieContext";

const Home = () => {
  const { movies, selectedMovie } = useMovieContext();
  return (
    <div className="min-h-screen bg-black text-white">
      <SearchBar />
      {movies.length > 0 ? (
        <MovieList />
      ) : (
        <p className="text-center text-gray-500 mt-4">No movies found.</p>
      )}

      {selectedMovie && <MovieModal />}
    </div>
  );
};

export default Home;
