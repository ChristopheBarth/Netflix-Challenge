import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <img src="/Logo_OriginalDigital.webp" alt="Logo" />
      <Link to="/">Nous rejoindre</Link>
    </nav>
  );
}
