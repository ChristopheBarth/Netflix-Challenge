import { useState } from "react";
import "../styles/favorite.css";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <button
      type="button"
      className={`favorite-button ${isFavorite ? "active" : ""}`}
      onClick={handleToggleFavorite}
      aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
    >
      <span className="favorite-icon">{isFavorite ? "★" : "☆"}</span>
      <span className="button-text">
        {isFavorite ? "Ajouté aux favoris" : "Ajouter aux favoris"}
      </span>
    </button>
  );
}
