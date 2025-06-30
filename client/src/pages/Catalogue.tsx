import { useLoaderData } from "react-router-dom";
import MovieCards from "../components/MovieCards";
import { useAuth } from "../services/AuthContext";
import "../styles/catalogue.css";
import { useState } from "react";
import { WithNetflixLogo } from "../components/WithNetflixLogo";

export default function Catalogue() {
  const { movies } = useLoaderData() as {
    movies: MovieType[];
  };

  const { subscription } = useAuth();
  const [selectedGenre, setSelectedGenre] = useState("all");

  // Genres uniques
  const allGenres = Array.from(
    new Set(movies.flatMap((movie) => movie.genres)),
  ).sort();

  // Résultat du filtre
  const filteredMovies =
    selectedGenre === "all"
      ? movies
      : movies.filter((movie) => movie.genres.includes(selectedGenre));

  // Sections spécifiques
  const topRatedMovies = [...movies]
    .filter((m) => m.rating !== undefined)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 10);

  const latestMovies = [...movies]
    .filter((m) => m.release_year)
    .sort((a, b) => b.release_year - a.release_year)
    .slice(0, 10);

  const freeMovies = movies.filter((movie) => !movie.premium).slice(0, 10);

  return (
    <>
      {/* VIDEO HEADER */}
      <div className="first-container">
        <video
          className="background-video"
          autoPlay
          muted
          loop
          poster="/BackgroundConnection.jpg"
        >
          <source src="/CatalogueCover.mp4" type="video/mp4" />
          {/* fallback si nécessaire */}
        </video>
        <div className="video-overlay" />
        {!subscription && (
          <button type="button" className="decouvrir-nos-offres">
            <a href="#acces">Découvrir nos offres</a>
          </button>
        )}
      </div>

      <div className="show-movies">
        <h2>Les mieux notés</h2>
        <section className="movie-container">
          {topRatedMovies.length > 0 ? (
            topRatedMovies.map((movie) => (
              <WithNetflixLogo key={movie.id} logoSize={24} logoOffset={8}>
                <MovieCards movie={movie} />
              </WithNetflixLogo>
            ))
          ) : (
            <p>Aucun film noté pour le moment.</p>
          )}
        </section>

        <h2>Nouveautés sur Netflix</h2>
        <section className="movie-container">
          {latestMovies.map((movie) => (
            <WithNetflixLogo key={movie.id} logoSize={24} logoOffset={8}>
              <MovieCards movie={movie} />
            </WithNetflixLogo>
          ))}
        </section>

        <h2>Films offerts</h2>
        <section className="movie-container">
          {freeMovies.length > 0 ? (
            freeMovies.map((movie) => (
              <WithNetflixLogo key={movie.id} logoSize={24} logoOffset={8}>
                <MovieCards movie={movie} />
              </WithNetflixLogo>
            ))
          ) : (
            <p>Aucun film gratuit disponible.</p>
          )}
        </section>

        <h2>Rechercher un film par genre</h2>
        <div className="genre-filter">
          <label htmlFor="genre-select">🎬 :</label>
          <select
            id="genre-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="all">Tous</option>
            {allGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <section className="movie-container">
          {filteredMovies.map((movie) => (
            <WithNetflixLogo key={movie.id} logoSize={24} logoOffset={8}>
              <MovieCards movie={movie} />
            </WithNetflixLogo>
          ))}
        </section>
      </div>

      {!subscription && (
        <section id="acces" className="connection-bottom">
          {/* … tes offres premium/gratuits … */}
        </section>
      )}
    </>
  );
}
