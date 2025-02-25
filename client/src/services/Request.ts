import axios from "axios";

const getMovieById = (id: number) => {
  return axios
    .get(`http://localhost:3310/api/movies/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
    });
};

export { getMovieById };
