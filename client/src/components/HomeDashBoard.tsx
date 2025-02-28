import { useLoaderData } from "react-router-dom";

export default function HomeDashBoard() {
  const { movie } = useLoaderData() as { movie: MovieType[] };

  return (
    <>
      {movie.map((movie) => (
        <div className="dashboard-movies" key={movie.id}>
          <img src={movie.poster} alt="" />
          <p>{movie.title}</p>
        </div>
      ))}
    </>
  );
}
