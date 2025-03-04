export default function MovieCards({ movie }: MoviesProps) {
  return (
    <>
      <div className="card-movie-img">
        <img src={movie.poster} alt="" />
        <p className="movie-title">{movie.title}</p>
        <p className="movie-year">{movie.release_year}</p>
      </div>
    </>
  );
}
