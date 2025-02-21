import { Link } from "react-router-dom";
import "../styles/homepage.css";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovieCards from "../components/MovieCards";

export default function HomePage() {
  const [selectedOffer, setSelectedOffer] = useState("free");
  const movie = useLoaderData() as MovieTypes[];
  console.info(movie);
  return (
    <section className="all-element">
      <section className="top-element">
        <h1>L’original au service du digital</h1>
        <p>
          Profitez d' un catalogue qui contient le meilleur du cinéma. Saisissez
          votre adresse e-mail pour nous rejoindre.
        </p>
        <div className="input-mail">
          <input type="text" placeholder="Adresse e-mail" />
          <Link to="/">S' inscrire</Link>
        </div>
        <img src="public\arrow-down.png" alt="" className="arrow" />
        {/*  */}
        <h2>Tendances Actuelles</h2>
        {movie.map((movie) => (
          <MovieCards key={movie.id} movie={movie} />
        ))}
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
            Nous rejoindre
          </button>
        </div>
      </section>
      <div className="bottom-element">
        <h2>N' attendez plus!</h2>
        <Link to="/">Se connecter</Link>
      </div>
    </section>
  );
}
