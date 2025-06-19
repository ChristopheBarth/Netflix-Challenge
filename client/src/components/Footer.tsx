import "../styles/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-socials">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Facebook.png" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Instagram.png" alt="Instagram" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Twitter.png" alt="Twitter" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/Youtube.png" alt="YouTube" />
          </a>
          <div>
            <div className="footer-links">
              <ul>
                <li>
                  <Link to="#">Audiodescription</Link>
                </li>
                <li>
                  <Link to="#">Relations Investisseurs</Link>
                </li>
                <li>
                  <Link to="#">Confidentialité</Link>
                </li>
                <li>
                  <Link to="#">Nous contacter</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="#">Centre d'aide</Link>
                </li>
                <li>
                  <Link to="#">Recrutement</Link>
                </li>
                <li>
                  <Link to="#">Informations légales</Link>
                </li>
                <li>
                  <Link to="#">Choix liés à la pub</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="#">Cartes cadeaux</Link>
                </li>
                <li>
                  <Link to="#">Boutique Netflix</Link>
                </li>
                <li>
                  <Link to="#">Préférences de cookies</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="#">Presse</Link>
                </li>
                <li>
                  <Link to="#">Conditions d'utilisateurs</Link>
                </li>
                <li>
                  <Link to="#">Mentions légales</Link>
                </li>
              </ul>
            </div>

            <div className="footer-code">
              <button type="button">Code de service</button>
            </div>

            <div className="footer-copyright">© 2025 Netflix</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
