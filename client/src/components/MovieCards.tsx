import "../styles/moviecards.css";
export default function MovieCards({ movie }: MovieProps) {
  return (
    <>
      <div className="card-movie">
        <img src={movie.poster} alt="" />
        <p>{movie.title}</p>
        <p>{movie.release_year}</p>
      </div>
    </>
  );
}
