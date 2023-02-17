import { Navigate } from "react-router";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

export default Logout;
