interface MovieTypes {
  id: number;
  title: string;
  release_year: string;
  poster: string;
}

interface MovieProps {
  movie: MovieTypes;
}
