import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";

const PrivateRoutesAuth = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};

export default PrivateRoutesAuth;
