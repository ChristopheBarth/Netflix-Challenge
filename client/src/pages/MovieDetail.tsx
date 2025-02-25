import { useLoaderData } from "react-router-dom";
import "../styles/MoviesDetail.css";
export default function MovieDetail() {
  const movie = useLoaderData() as MovieType;
  return (
    <>
      <h1>Original digitals</h1>
      <div className="container-movies">
        <button type="button">
          <img
            src={movie.poster}
            alt={`Affiche de présentation du film ${movie.title}`}
          />
        </button>
        <h2>{movie.title}</h2>
        <div className="informations">
          <p>{movie.release_year}</p>
          <p>{movie.duration}</p>
        </div>
        <div className="bio">
          <p>{movie.synopsis.slice(0, 50)}...</p>
          <details>
            <summary>
              <p>En savoir plus</p>
            </summary>
            <p>{movie.synopsis.substring(50)}</p>
          </details>
        </div>
      </div>
    </>
  );
}
