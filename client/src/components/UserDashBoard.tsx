import { useLoaderData } from "react-router-dom";
import "../styles/userdashboard.css";

export default function UserDashBoard() {
  const { user } = useLoaderData() as { user: UserType[] };
  console.info(user);
  return (
    <>
      {user.map((user) => (
        <div key={user.id} className="user-dashboard">
          <p>
            {user.last_name} {user.first_name}
          </p>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      ))}
    </>
  );
}
