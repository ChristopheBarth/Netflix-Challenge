import { useLoaderData } from "react-router-dom";
import "../styles/editdashboard.css";

export default function EditDashBoard() {
  const { movies } = useLoaderData() as { movies: MovieType[] };

  return (
    <section className="list-movie">
      {movies.map((movie) => (
        <section className="movie-edit" key={movie.id}>
          <div className="dashboard-movielist" key={movie.id}>
            <p>{movie.title}</p>
          </div>
          <div key={movie.id}>
            <button type="button">
              <img src="" alt="" />
            </button>
            <button type="button">
              <img src="" alt="" />
            </button>
          </div>
        </section>
      ))}
    </section>
  );
}
