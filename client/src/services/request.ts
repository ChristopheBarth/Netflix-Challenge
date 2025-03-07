import axios from "axios";
const API = import.meta.env.VITE_API_URL;

const getMovies = () => {
  return axios
    .get(`${API}/api/movies`)
    .then((response) => response.data)
    .catch((error) => console.error(error));
};
const getMovieById = (id: number) => {
  return axios
    .get(`${API}/api/movies/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};

const getUsers = () => {
  return axios
    .get(`${API}/api/users`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};

const putMovies = async (id: number, updatedMovie: MovieType) => {
  try {
    const response = await axios.put(`${API}/api/movies/${id}`, updatedMovie);
    return response;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du film :", error);
    throw error;
  }
};

export { getMovieById, getMovies, getUsers, putMovies };
