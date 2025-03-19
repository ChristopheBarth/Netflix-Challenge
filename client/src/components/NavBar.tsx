import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import { useAuth } from "../services/AuthContext";

export default function NavBar() {
  const API = import.meta.env.VITE_API_URL;
  const { role, setRole } = useAuth();
  const navigate = useNavigate();
  const disconnect = () => {
    axios
      .get(`${API}/api/logout`, { withCredentials: true })
      .then(() => {
        setRole("anonymous");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <nav>
      <img src="/Logo_OriginalDigital.webp" alt="Logo" />
      {role === "anonymous" ? (
        <Link to="/signup">Nous rejoindre</Link>
      ) : (
        <button type="button" onClick={disconnect}>
          Se déconnecter
        </button>
      )}
    </nav>
  );
}
