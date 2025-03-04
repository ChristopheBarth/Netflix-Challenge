import axios from "axios";
import { useLoaderData, useRevalidator } from "react-router-dom";
import "../styles/editdashboard.css";

export default function EditDashBoard() {
  const { movies } = useLoaderData() as { movies: MovieType[] };
  const { revalidate } = useRevalidator();
  const API = import.meta.env.VITE_API_URL;
  const deleteMovie = (id: number) => {
    return axios
      .delete(`${API}/api/movies/${id}`)
      .then((response) => {
        response;
        revalidate();
      })
      .catch((error) => console.error(error));
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
            <button type="button">
              <img src="/EditIcone.png" alt="" />
            </button>
          </div>
        </section>
      ))}
    </section>
  );
}
