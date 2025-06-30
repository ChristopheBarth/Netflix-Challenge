import axios from "axios";
import { useState } from "react";
import "../styles/formdashboard.css";
import joi from "joi";

export default function FormDashBoard() {
  const [newMovie, setNewMovie] = useState({
    title: "",
    poster: "",
    release_year: "",
    synopsis: "",
    duration: "",
    trailer: "",
    casting: "",
    production: "",
    landscape_image: "",
  });

  const API = import.meta.env.VITE_API_URL;
  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(`${API}/api/movies/`, newMovie, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 201) {
        } else {
          alert(response.data.error);
        }
      })
      .catch((error) => {
        if (joi.isError(error)) {
          console.error(error);
        }
      });
  };

  const handleChangeMovieForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  console.info(newMovie);
  return (
    <form onSubmit={sendForm} className="form-dashboard">
      <label htmlFor="title">
        Titre <p>*</p>
      </label>
      <input
        type="text"
        name="title"
        value={newMovie.title}
        onChange={handleChangeMovieForm}
        placeholder="Titre du film"
      />
      <label htmlFor="poster">
        Affiche <p>*</p>
      </label>
      <input
        type="text"
        name="poster"
        onChange={handleChangeMovieForm}
        id=""
        placeholder="URL"
      />
      <label htmlFor="release_year">
        Date de sortie <p>*</p>
      </label>
      <input
        type="number"
        name="release_year"
        onChange={handleChangeMovieForm}
        placeholder="AAAA"
      />
      <label htmlFor="synopsis">
        Synopsis <p>*</p>
      </label>
      <input
        type="text"
        name="synopsis"
        onChange={handleChangeMovieForm}
        placeholder="Synopsis"
      />
      <label htmlFor="duration">
        Durée <p>*</p>
      </label>
      <input
        type="text"
        name="duration"
        onChange={handleChangeMovieForm}
        placeholder="0:00:00"
      />
      <label htmlFor="trailer">
        Bandes annonces <p>*</p>
      </label>
      <input
        type="text"
        name="trailer"
        onChange={handleChangeMovieForm}
        placeholder="URL"
      />
      <label htmlFor="casting">
        Casting <p>*</p>
      </label>
      <input
        type="text"
        name="casting"
        onChange={handleChangeMovieForm}
        placeholder="Nom/prénoms acteurs"
      />
      <label htmlFor="production">
        Production <p>*</p>
      </label>
      <input
        type="text"
        name="production"
        onChange={handleChangeMovieForm}
        placeholder="Noms/prénoms réalisateur"
      />
      <label htmlFor="landscape_image">
        Landscape <p>*</p>
      </label>
      <input
        type="text"
        name="landscape_image"
        onChange={handleChangeMovieForm}
        placeholder="URL"
      />
      <label htmlFor="nationality">
        Nationality <p>*</p>
      </label>
      <input
        required
        type="text"
        name="nationality"
        onChange={handleChangeMovieForm}
        placeholder="Noms"
      />
      <input type="submit" className="submit-form" />
    </form>
  );
}
