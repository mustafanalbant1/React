type MovieCardProps = {
  movie: {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
  };
  onClick: () => void;
};

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-900 p-4 rounded-lg shadow-md cursor-pointer"
    >
      <img src={movie.Poster} alt={movie.Title} className="rounded-lg" />
      <h3 className="text-white mt-2 text-lg font-semibold">{movie.Title}</h3>
      <p className="text-gray-400">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
