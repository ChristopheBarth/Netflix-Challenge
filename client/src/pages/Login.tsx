import { Link } from "react-router-dom";
import "../styles/login.css";
export default function Login() {
  return (
    <section className="login">
      <form className="login-page">
        <h1>Se Connecter</h1>
        <p>
          Vous pouvez vous connecter si vous possédez un compte, sinon vous
          pouvez en créez un <Link to="/signup">ici</Link>
        </p>
        <div className="container-form">
          <div className="login-form">
            <label htmlFor="email">E-mail : </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Votre E-mail"
            />
          </div>
          <div className="login-form">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Votre Password"
            />
          </div>
          <button type="submit">Continuer</button>
        </div>
      </form>
    </section>
  );
}
