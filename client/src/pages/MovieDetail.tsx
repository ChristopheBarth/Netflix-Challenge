import { useLoaderData } from "react-router-dom";
import "../styles/MoviesDetail.css";
import FavoriteButton from "../components/FavoriteButton";
import MovieCards from "../components/MovieCards";

export default function MovieDetail() {
  const movieData = useLoaderData() as {
    movieId: MovieType;
    movies: MovieType[];
  };

  const movieId = movieData.movieId;
  const movies = movieData.movies;

  const sameGenre = movies
    .filter((movie) =>
      movie.genres.split(",").some((genre) => movieId.genres.includes(genre)),
    )
    .slice(0, 12);

  return (
    <>
      <h1>Original digitals</h1>
      <img className="landscape" src={movieId.landscape_image} alt="" />
      <h2 className="movie-titleDetail">{movieId.title}</h2>

      <div className="container-movies">
        <div className="landscape-information">
          <p>année : {movieId.release_year}</p>
          <p>durée : {movieId.duration}</p>
          <p>genres : {movieId.genres}</p>
          <p>casting : {movieId.casting}</p>
          <p>production : {movieId.production}</p>
          <div className="bio">
            <p>synopsis : {movieId.synopsis.slice(0, 50)}...</p>
            <details>
              <summary>
                <p>En savoir plus</p>
              </summary>
              <p>{movieId.synopsis.substring(50)}</p>
            </details>
            <FavoriteButton id={movieId.id} />
          </div>
        </div>
        <iframe
          className="short-movie"
          width="100%"
          height="auto"
          src={movieId.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <h3 className="same-genre">Vous pourriez aimer aussi...</h3>
        <section className="movie-container">
          {sameGenre.map((movie) => (
            <MovieCards key={movie.id} movie={movie} />
          ))}
        </section>
      </div>
    </>
  );
}
