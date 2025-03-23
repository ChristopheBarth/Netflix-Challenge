import { useState } from "react";
import { editPremium } from "../services/request";

export default function PaymentForm() {
  const [cardNumbers, setCardNumbers] = useState({
    cardName: "",
    cardNumbers: "",
    expireDay: "",
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

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumbers({ ...cardNumbers, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editPremium();
  };

  const handleFocus = () => {
    setCardNumbers((prev) => ({ ...prev, country: "" }));
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
        onChange={handleChangeForm}
        placeholder="XXXX XXXX XXXX XXXX"
      />
      <input
        type="text"
        id="expireDay"
        name="expireDay"
        maxLength={5}
        value={cardNumbers.expireDay}
        onChange={handleChangeForm}
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
    </form>
  );
}
