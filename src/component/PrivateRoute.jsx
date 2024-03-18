import { Outlet, Navigate } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
export default function PrivateRoute() {
  const {loggedIn, checkingStatus} = useAuthStatus();

 
  if (checkingStatus) {
    // Handle case when authentication status is being checked
    return <h3>Loading...</h3>;
  }

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}
