import { Link } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <img src="public\Logo_OriginalDigital.webp" alt="Logo" />
      <Link to="/signup">Nous rejoindre</Link>
    </nav>
  );
}
