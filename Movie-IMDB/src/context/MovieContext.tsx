import { createContext, useState, useContext } from "react";
import { searchMovies, getMovieDetails } from "../api/omdbApi";

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}

interface MovieDetail extends Movie {
  Plot: string;
  Genre: string;
  Director: string;
  Released: string;
  Actors: string;
  imdbRating: string;
}

interface MovieContextType {
  movies: Movie[];
  selectedMovie: MovieDetail | null;
  searchMovies: (query: string) => Promise<void>;
  selectMovie: (id: string) => Promise<void>;
  closeMovie: () => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

type MovieProviderProps = {
  children: React.ReactNode;
};

export const MovieProvider = ({ children }: MovieProviderProps) => {
  // state dari movies kita
  const [movies, setMovies] = useState<Movie[]>([]);

  // state selectedMovie
  const [selectedMovie, setSelectedMovie] = useState<MovieDetail | null>(null);

  const searchMoviesHandler = async (query: string) => {
    const result = await searchMovies(query);
    setMovies(result || []);
  };

  const selectMovieHandler = async (id: string) => {
    const movieDetails = await getMovieDetails(id);
    setSelectedMovie(movieDetails);
  };

  const closeMovieHandler = () => {
    setSelectedMovie(null);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        selectedMovie,
        searchMovies: searchMoviesHandler,
        selectMovie: selectMovieHandler,
        closeMovie: closeMovieHandler,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// custom hooks untuk useContext
export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }

  return context;
};
