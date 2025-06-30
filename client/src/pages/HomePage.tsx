import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import MovieCards from "../components/MovieCards";
import { WithNetflixLogo } from "../components/WithNetflixLogo";
import "../styles/homepage.css";

export default function HomePage() {
  const [selectedOffer, setSelectedOffer] = useState("free");
  const movies = useLoaderData() as MovieType[];
  const freeMovies = movies.filter((movie) => !movie.premium);
  return (
    <div className="homepage-content">
      <section className="all-element">
        <section className="top-element">
          <div className="input-mail">
            {/* mise en place d'une vidéo dans la homepage */}
            <video autoPlay muted loop className="background-video">
              <source src="/NetflixIntro.mp4" type="video/mp4" />
              {/* <img src="/image-homepage.png" alt="" /> */}
            </video>
          </div>
          <img src="/arrow-down.png" alt="" className="arrow" />
          <h2>Offres de bienvenue</h2>
          <section className="movie-container">
            {freeMovies.map((movie) => (
              <WithNetflixLogo
                key={movie.id}
                logoSize={24}
                logoOffset={8}
                style={{
                  width: 160,
                  borderRadius: "8px", // identique au border-radius de tes vignettes
                }}
              >
                <MovieCards movie={movie} />
              </WithNetflixLogo>
            ))}
          </section>
        </section>
        <section className="middle-element">
          <h2>Nos différentes souscriptions</h2>
          <div className="offer">
            <button
              type="button"
              className={`button ${selectedOffer === "free" ? "active" : "inactive"}`}
              onClick={() => setSelectedOffer("free")}
            >
              Gratuit
            </button>
            <button
              type="button"
              className={`button ${selectedOffer === "premium" ? "active" : "inactive"}`}
              onClick={() => setSelectedOffer("premium")}
            >
              Premium
            </button>
          </div>
          <div className="content">
            {selectedOffer === "free" ? (
              <div className="free">
                <p>Visionnez 4 films par mois</p>
                <p className="disabled">Accédez à notre catalogue complet</p>
                <p className="disabled">Regardez en haute qualité</p>
                <p className="disabled">Gérez vos listes de films à voir</p>
              </div>
            ) : (
              <div className="premium">
                <p>Films illimités en haute qualité</p>
                <p>Accédez à notre catalogue complet</p>
                <p>Regardez en haute qualité</p>
                <p>Gérez vos listes de films à voir</p>
              </div>
            )}
            <button type="button" className="button-middle">
              <Link to="/signup">Nous rejoindre</Link>
            </button>
          </div>
        </section>
        <div className="bottom-element">
          <h2>N'attendez plus!</h2>
          <Link to="/">Se connecter</Link>
        </div>
      </section>
    </div>
  );
}
