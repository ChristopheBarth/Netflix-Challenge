import axios from "axios";
import { useRef } from "react";
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

  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const openModal = () => {
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
          <div className="dashboard-movielist" key={movie.id}>
            <p>{movie.title}</p>
          </div>
          <div key={movie.id}>
            <button type="button" onClick={() => deleteMovie(movie.id)}>
              <img src="/GarbageIcone.png" alt="" />
            </button>
            <button type="button" onClick={openModal}>
              <img src="/EditIcone.png" alt="" />
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
        <h1>test</h1>
      </dialog>
    </section>
  );
}
