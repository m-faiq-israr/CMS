import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("User in PublicRoute:", user);

  return user ? <Navigate to="/" /> : children;
};

export default PublicRoute;
