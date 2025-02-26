export default function MovieCards({ movie }: MoviesProps) {
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
