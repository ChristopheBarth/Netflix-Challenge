interface MovieType {
  id: number;
  title: string;
  synopsis: string;
  release_year: string;
  duration: string;
  poster: string;
  trailer: string;
}

interface MoviesProps {
  movies: MovieType[];
}
