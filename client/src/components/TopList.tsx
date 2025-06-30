import axios from "axios";
import { useEffect, useState } from "react";
import { WithNetflixLogo } from "./WithNetflixLogo";
import "../styles/toplist.css";

export default function TopList() {
  const [topMovies, setTopMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchTop10 = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/movies/top10`,
          {
            withCredentials: true, // si tu utilises les cookies d'auth
          },
        );
        setTopMovies(response.data);
      } catch (error) {
        console.error("Erreur lors du chargement du top 10 :", error);
      }
    };

    fetchTop10();
  }, []);

  return (
    <section className="top-list">
      <h1>Top 10 des films aujourd’hui : France</h1>
      <div className="items-container">
        {topMovies.map((movie, index) => (
          <div key={movie.id} className="item">
            <div className="top-item-content">
              <span className="rank-number">{index + 1}</span>
              {/* ← On remplace la div.thumbnail brute par le HOC */}
              <WithNetflixLogo
                className="thumbnail" // conserve ta classe CSS existante
                logoSize={24} // taille du N en px
                logoOffset={8} // marge du N en px
              >
                <img src={movie.poster} alt={movie.title} />
                <span className="badge">Ajout récent</span>
              </WithNetflixLogo>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
