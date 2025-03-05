import axios from "axios";
import { useRef, useState } from "react";
import { useLoaderData, useRevalidator } from "react-router-dom";
import "../styles/editdashboard.css";

export default function EditDashBoard() {
  const { movies } = useLoaderData() as { movies: MovieType[] };
  const { revalidate } = useRevalidator();
  const API = import.meta.env.VITE_API_URL;

  const deleteMovie = (id: number) => {
    return axios
      .delete(`${API}/api/movies/${id}`)
      .then(() => {
        revalidate();
      })
      .catch((error) => console.error(error));
  };

  const [updatedMovie, setUpdatedMovie] = useState({
    id: Number(""),
    title: "",
    poster: "",
    release_year: Number(""),
    synopsis: "",
    duration: "",
    trailer: "",
    casting: "",
    production: "",
  });
  console.info(movies);
  const editMovie = (id: number) => {
    return axios
      .put(`${API}/api/movies/${id}`, updatedMovie)
      .then((response) => response.data)
      .catch((error) => console.error(error));
  };

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openModal = (movie: MovieType) => {
    setUpdatedMovie(movie);
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

  return (
    <section className="list-movie">
      {movies.map((movie) => (
        <section className="movie-edit" key={movie.id}>
          <div className="dashboard-movielist">
            <p>{movie.title}</p>
          </div>
          <div>
            <button type="button" onClick={() => deleteMovie(movie.id)}>
              <img src="/GarbageIcone.png" alt="Delete" />
            </button>
            <button type="button" onClick={() => openModal(movie)}>
              <img src="/EditIcone.png" alt="Edit" />
            </button>
          </div>
        </section>
      ))}
      <dialog
        ref={dialogRef}
        className="modal"
        onClick={closeModal}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            closeModal();
          }
        }}
      >
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          tabIndex={-1}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
        >
          {updatedMovie && (
            <form
              onSubmit={() => editMovie(updatedMovie.id)}
              className="form-dashboard"
            >
              <p>Titre</p>
              <input
                type="text"
                value={updatedMovie.title}
                name="title"
                placeholder="Titre du film"
              />
              <p>Affiche</p>
              <input
                type="text"
                value={updatedMovie.poster}
                name="poster"
                id=""
                placeholder="URL"
              />
              <p>Date de sortie</p>
              <input
                type="text"
                id="release_year"
                value={updatedMovie.release_year}
                name="release_year"
                placeholder="AAAA"
              />
              <p>Synopsis</p>
              <input
                type="text"
                value={updatedMovie.synopsis}
                name="synopsis"
                placeholder="Synopsis"
              />
              <p>Durée</p>
              <input
                type="text"
                value={updatedMovie.duration}
                name="duration"
                placeholder="0:00:00"
              />
              <p>Bandes annonces</p>
              <input
                type="text"
                value={updatedMovie.trailer}
                name="trailer"
                placeholder="URL"
              />
              <p>Casting</p>
              <input
                type="text"
                name="casting"
                placeholder="Nom/prénoms acteurs"
                value={updatedMovie.casting}
              />
              <p>Production</p>
              <input
                type="text"
                name="production"
                placeholder="Noms/prénoms réalisateur"
                value={updatedMovie.production}
              />
              <input type="submit" className="submit-form" />
            </form>
          )}
        </div>
      </dialog>
    </section>
  );
}
