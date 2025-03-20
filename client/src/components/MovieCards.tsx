import { Link } from "react-router-dom";

export default function MovieCards({ movie }: MoviesProps) {
  return (
    <>
      <div className="card-movie-img">
        <Link to={`/movies/${movie.id}`}>
          <img src={movie.poster} alt="" />
        </Link>
        <p className="movie-title">{movie.title}</p>
        <p className="movie-year">{movie.release_year}</p>
      </div>
    </>
  );
}
