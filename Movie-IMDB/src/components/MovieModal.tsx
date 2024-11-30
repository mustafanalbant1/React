/** @format */

import React from "react";
import { useMovieContext } from "../context/MovieContext";

const MovieModal = () => {
  const { selectedMovie, closeMovie } = useMovieContext();

  if (!selectedMovie) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg max-w-lg w-full">
        <img
          className="w-full h-auto rounded-lg mb-4 max-h-60 object-cover"
          src={selectedMovie.Poster}
          alt={selectedMovie.Title}
        />
        <h2 className="text-2xl font-bold mb-4">{selectedMovie.Title}</h2>
        <p className="text-sm mb-2">
          <strong>Released:</strong> {selectedMovie.Released}
        </p>
        <p className="text-sm mb-2">
          <strong>Genre:</strong> {selectedMovie.Genre}
        </p>
        <p className="text-sm mb-2">
          <strong>Director:</strong> {selectedMovie.Director}
        </p>
        <p className="text-sm mb-2">
          <strong>Actors:</strong> {selectedMovie.Actors}
        </p>
        <p className="text-sm mb-2">
          <strong>IMDB Rating:</strong> {selectedMovie.imdbRating}
        </p>
        <p className="text-sm mb-2">
          <strong>Plot:</strong> {selectedMovie.Plot}
        </p>

        <button
          onClick={closeMovie}
          className="bg-red-600 px-4 py-2 rounded-lg text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
