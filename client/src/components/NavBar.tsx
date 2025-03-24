import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const links = [
    {
      name: "Accueil",
      path: "/",
      role: ["anonymous", "administrateur"],
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      role: ["administrateur"],
    },
    {
      name: "Se connecter",
      path: "/login",
      role: ["anonymous"],
    },
    {
      name: "Catalogue",
      path: "/catalogue",
      role: ["utilisateur", "administrateur"],
    },
  ];

  return (
    <nav>
      <div className="title">
        <Link to="/" onClick={closeMenu}>
          <img src="/Logo_OriginalDigital.webp" alt="logo" className="logo" />
        </Link>
      </div>

      <div className="menu-container">
        {role !== "anonymous" ? (
          <div
            className="menu-icon"
            onClick={toggleMenu}
            onKeyDown={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        ) : null}
        {role !== "anonymous" ? (
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            {links
              .filter((link) => link.role.includes(role))
              .map((link) => (
                <li key={link.name}>
                  <Link to={link.path} onClick={closeMenu}>
                    {link.name}
                  </Link>
                </li>
              ))}
            {role === "anonymous" ? null : (
              <li className="disconnect-button-mobile">
                <button type="button" onClick={disconnect}>
                  Se déconnecter
                </button>
              </li>
            )}
          </ul>
        ) : null}
      </div>
      {role === "anonymous" ? (
        <Link to="/signup" className="link-signup">
          Nous rejoindre
        </Link>
      ) : (
        <button
          type="button"
          onClick={disconnect}
          className="disconnect-button"
        >
          Se déconnecter
        </button>
      )}
    </nav>
  );
}
