import { Link } from "react-router-dom";
import "../styles/login.css";
export default function Login() {
  return (
    <div className="login">
      <section className="login-page">
        <h1>Se Connecter</h1>
        <p>
          Vous pouvez vous connecter si vous possédez un compte, sinon vous
          pouvez en créez un <Link to="/signup">ici</Link>
        </p>
        <div className="login-form">
          <input
            type="email"
            name="account"
            id="account"
            placeholder="E-mail"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit">Continuer</button>
      </section>
    </div>
  );
}
