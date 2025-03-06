import { useLoaderData } from "react-router-dom";
import "../styles/MoviesDetail.css";
export default function MovieDetail() {
  const movie = useLoaderData() as MovieType;
  return (
    <>
      <h1>Original digitals</h1>
      <div className="container-movies">
        <iframe
          className="complete-movie"
          width="293"
          height="315"
          src={movie.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
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
          {/* ici je veux creer un bouton qui permet d'ajouter un film a ma liste des favoris */}
          <button type="button" className="add-favorite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#black"
              aria-hidden="true"
            >
              <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        {/* ici je veux faire une section bande annonce */}
        <iframe
          className="short-movie"
          width="293"
          height="315"
          src={movie.trailer}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      {/* et ici je veux un section pour afficher la liste des films en correspondance au genre du film */}
    </>
  );
}
