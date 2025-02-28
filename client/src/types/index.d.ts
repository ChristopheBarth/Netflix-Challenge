interface MovieType {
  id: number;
  title: string;
  release_year: string;
  poster: string;
  duration: string;
  synopsis: string;
  trailer: string;
}

interface MoviesProps {
  movie: MovieType;
}

interface UserType {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  email: string;
  subscription: boolean;
}
