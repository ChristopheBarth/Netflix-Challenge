import "../styles/footer.css";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo_OriginalDigital.webp";

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Original Digital" />
      <div>
        <h3>Support</h3>
        <ul>
          <li>
            <Link to={"#"}>À propos d'Original Digital</Link>
          </li>
          <li>
            <Link to={"#"}>Nous contacter</Link>
          </li>
          <li>
            <Link to={"#"}>FAQ</Link>
          </li>
          <li>
            <Link
              to="https://fast.com/fr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Test de vitesse
            </Link>
          </li>
          <li>
            <Link to={"#"}>Appareils pris en charge</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="footer-name">Régles et conditions</h3>
        <ul>
          <li className="footer-li">
            <Link to={"#"}>Conditions d'utilisation</Link>
          </li>
          <li className="footer-li">
            <Link to={"#"}>Politique de confidentialité</Link>
          </li>
          <li className="footer-li">
            <Link to={"#"}>Mentions Légales</Link>
          </li>
          <li className="footer-li">
            <Link to={"#"}>Gérer les cookies</Link>
          </li>
        </ul>
      </div>
      <section>© 2025 Original Digital by Wilders</section>
    </footer>
  );
}
