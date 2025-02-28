interface UserTypes {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

interface SvgTypes {
  path: string;
  width: string;
  height: string;
}

interface FormTypes {
  user: UserTypes;
  handleChangeForm: React.ChangeEventHandler<HTMLInputElement>;
}

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
