import { useState } from "react";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
  } as UserTypes);

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <h1>Créer ton compte</h1>
      <SignupForm user={user} handleChangeForm={handleChangeForm} />
    </section>
  );
}
