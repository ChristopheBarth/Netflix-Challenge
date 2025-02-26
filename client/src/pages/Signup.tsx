import { useState } from "react";
import SignupForm from "../components/SignupForm";
import "../styles/signup.css";

export default function Signup() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  } as UserTypes);

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <section>
      <SignupForm user={user} handleChangeForm={handleChangeForm} />
    </section>
  );
}
