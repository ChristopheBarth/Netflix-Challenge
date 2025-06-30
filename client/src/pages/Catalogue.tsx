import { Link, useLoaderData } from "react-router-dom";
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
      <div className="first-container">
        <img
          src="/BackgroundConnection.jpg"
          className="img-container"
          alt="Background films vignettes"
        />
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
              <WithNetflixLogo
                key={movie.id}
                logoSize={24} // taille du logo en px
                logoOffset={8} // marge du logo en px
              >
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
          <label htmlFor="genre-select">🎬 : </label>
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
          <h2>Nos différentes souscriptions</h2>
          <div className="bottom-container">
            <div className="bottom-left">
              <h3>Offre Gratuite</h3>
              <p>Visionnez 4 films par mois</p>
              <p className="bottom-free">Accédez à notre catalogue complet</p>
              <p className="bottom-free">Regardez en haute qualité</p>
              <p className="bottom-free">Gérez vos listes de films à voir</p>
            </div>

            <div className="bottom-right">
              <h3>Offre Premium</h3>
              <p>Films illimités en haute qualité</p>
              <p>Accédez à notre catalogue complet</p>
              <p>Regardez en haute qualité</p>
              <p>Gérez vos listes de films à voir</p>
            </div>
          </div>
          <Link to="/payment">
            <button type="button" className="button-premium">
              Devenir Premium
            </button>
          </Link>
        </section>
      )}
    </>
  );
}
