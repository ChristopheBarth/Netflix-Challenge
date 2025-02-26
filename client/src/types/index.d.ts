interface MovieType {
  id: number;
  title: string;
  release_year: string;
  poster: string;
  duration: string;
  synopsis: string;
}

interface MoviesProps {
  movie: MovieType;
}
