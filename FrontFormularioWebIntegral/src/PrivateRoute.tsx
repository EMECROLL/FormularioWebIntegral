import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem(import.meta.env.VITE_AUTH_KEY) !== null;

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
