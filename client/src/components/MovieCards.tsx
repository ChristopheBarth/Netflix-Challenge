import { Link } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

export default function MovieCards({ movie }: MoviesProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const { role } = useAuth();

  return (
    <>
      <div className="card-movie-img">
        {role === "anonymous" ? (
          <Link to="/signup" onClick={scrollToTop}>
            <img src={movie.poster} alt="" />
          </Link>
        ) : (
          <Link to={`/movies/${movie.id}`} onClick={scrollToTop}>
            <img src={movie.poster} alt="" />
          </Link>
        )}

        <p className="movie-title">{movie.title}</p>
      </div>
    </>
  );
}
