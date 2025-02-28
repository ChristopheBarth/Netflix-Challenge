import axios from "axios";
import { useState } from "react";
import "../styles/formdashboard.css";

export default function FormDashBoard() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [release_year, setRelease_year] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [duration, setDuration] = useState("");
  const [trailer, setTrailer] = useState("");
  const [casting, setCasting] = useState("");
  const [production, setProduction] = useState("");

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:3310/api/movies/", {
        title: title,
        poster: poster,
        release_year: release_year,
        synopsis: synopsis,
        duration: duration,
        trailer: trailer,
        casting: casting,
        production: production,
      })
      .then((response) => {
        console.info(response);
      })
      .catch((error) => console.error(error));
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleChangePoster = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPoster(e.currentTarget.value);
  };

  const handleChangeRelease_year = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRelease_year(e.currentTarget.value);
  };

  const handleChangeSynopsis = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSynopsis(e.currentTarget.value);
  };

  const handleChangeDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(e.currentTarget.value);
  };

  const handleChangeTrailer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTrailer(e.currentTarget.value);
  };

  const handleChangeCasting = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCasting(e.currentTarget.value);
  };

  const handleChangeProduction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduction(e.currentTarget.value);
  };

  return (
    <form onSubmit={sendForm} className="form-dashboard">
      <p>Titre</p>
      <input
        type="text"
        onChange={handleChangeTitle}
        placeholder="Titre du film"
      />
      <p>Affiche</p>
      <input
        type="text"
        onChange={handleChangePoster}
        id=""
        placeholder="URL"
      />
      <p>Date de sortie</p>
      <input
        type="text"
        onChange={handleChangeRelease_year}
        placeholder="AAAA"
      />
      <p>Synopsis</p>
      <input
        type="text"
        onChange={handleChangeSynopsis}
        placeholder="Synopsis"
      />
      <p>Durée</p>
      <input
        type="text"
        onChange={handleChangeDuration}
        placeholder="0:00:00"
      />
      <p>Bandes annonces</p>
      <input type="text" onChange={handleChangeTrailer} placeholder="URL" />
      <p>Casting</p>
      <input
        type="text"
        onChange={handleChangeCasting}
        placeholder="Nom/prénoms acteurs"
      />
      <p>Production</p>
      <input
        type="text"
        onChange={handleChangeProduction}
        placeholder="Noms/prénoms réalisateur"
      />
      <input type="submit" className="submit-form" />
    </form>
  );
}
