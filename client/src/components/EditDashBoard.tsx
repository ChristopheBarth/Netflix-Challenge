import { useLoaderData } from "react-router-dom";
import "../styles/editdashboard.css";

export default function EditDashBoard() {
  const { movie } = useLoaderData() as { movie: MovieType[] };

  return (
    <section className="list-movie">
      {movie.map((movie) => (
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
