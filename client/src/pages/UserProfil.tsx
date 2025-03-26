import { useLoaderData } from "react-router-dom";
// import { useAuth } from "../services/AuthContext";
export default function UserProfil() {
  //   const { role, setRole } = useAuth();
  const user = useLoaderData();
  console.info(user);

  return (
    <>
      <h1>USER</h1>
      <div className="avatar">
        <h3>name</h3>
      </div>
    </>
  );
}
