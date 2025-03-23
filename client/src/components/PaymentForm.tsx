import { useState } from "react";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import { editPremium } from "../services/request";

export default function PaymentForm() {
  const [cardNumbers, setCardNumbers] = useState({
    cardName: "",
    cardNumbers: "",
    expiryDay: "",
    cvv: "",
    country: "",
  } as CardData);

  const countries = [
    "France 🇫🇷",
    "Belgique 🇧🇪",
    "Suisse 🇨🇭",
    "Canada 🇨🇦",
    "USA 🇺🇸",
    "Royaume-Unis 🇬🇧",
    "Allemagne 🇩🇪",
    "Espagne 🇪🇸",
    "Italie 🇮🇹",
  ];

  const handleChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replaceAll(" ", "");
    let formattedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += " ";
      }
      formattedValue += value[i];
    }
    setCardNumbers((prev) => ({
      ...prev,
      cardNumbers: formattedValue.slice(0, 19),
    }));
  };

  const handleChangeExpiryDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace("/", "");
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
    }
    setCardNumbers((prev) => ({
      ...prev,
      expiryDay: value.slice(0, 5),
    }));
  };

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumbers({ ...cardNumbers, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setCardNumbers((prev) => ({ ...prev, country: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editPremium();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulaire de paiement</h2>
      <h3>Tous les champs sont obligatoires</h3>
      <label htmlFor="billed_to">Nom indiqué sur la carte</label>
      <input
        type="text"
        id="cardName"
        name="cardName"
        value={cardNumbers.cardName}
        onChange={handleChangeForm}
        placeholder="Votre prénom et nom de famille"
      />
      <label htmlFor="payment_details">Détails du paiement</label>
      <input
        type="text"
        id="cardNumbers"
        name="cardNumbers"
        maxLength={19}
        value={cardNumbers.cardNumbers}
        onChange={handleChangeCardNumber}
        placeholder="XXXX XXXX XXXX XXXX"
      />
      <div className="expiry-cvv">
        <input
          type="text"
          id="expireDay"
          name="expireDay"
          maxLength={5}
          value={cardNumbers.expiryDay}
          onChange={handleChangeExpiryDate}
          placeholder="MM/YY"
        />
        <input
          type="text"
          id="cvv"
          name="cvv"
          maxLength={3}
          value={cardNumbers.cvv}
          onChange={handleChangeForm}
          placeholder="XXX"
        />
      </div>
      <label htmlFor="country">Pays</label>
      <input
        list="country-list"
        id="country"
        name="country"
        value={cardNumbers.country}
        onChange={handleChangeForm}
        onFocus={handleFocus}
        placeholder="Sélectionnez votre pays"
      />
      <datalist id="country-list">
        {countries.map((country) => (
          <option key={country} value={country} />
        ))}
      </datalist>
      <div className="button-cancel-submit">
        <Link to="/catalogue">
          <button type="button">Annuler</button>
        </Link>
        <button type="submit">Payer</button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </form>
  );
}
