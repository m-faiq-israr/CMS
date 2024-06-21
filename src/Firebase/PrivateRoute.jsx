import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("User in PrivateRoute:", user); // Debugging log
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
