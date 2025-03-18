import { useState } from "react";
import "../styles/favorite.css";
// import axios from "axios";

export default function FavoriteButton() {
  const [isFavorite] = useState(false);
  // const API = import.meta.env.VITE_API_URL;

  // const handleToggleFavorite = async (id: number) => {
  //   try {
  //     console.info(API);
  //     const response = await axios.post(
  //       "http://localhost:3310/api/users/watchlist",
  //       {
  //         movie_id: id,
  //         user_id: id,
  //       },
  //       {
  //         withCredentials: true,
  //       },
  //     );
  //     console.info(response);
  //   } catch (error) {
  //     console.info("Erreur lors de l'ajout du film aux favoris :", error);
  //     console.error(error);
  //   }
  // };

  return (
    <button
      type="button"
      className={`favorite-button ${isFavorite ? "active" : ""}`}
      // onClick={handleToggleFavorite}
      aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
    >
      <span className="favorite-icon">{isFavorite ? "★" : "☆"}</span>
      <span className="button-text">
        {isFavorite ? "Ajouté aux favoris" : "Ajouter aux favoris"}
      </span>
    </button>
  );
}
