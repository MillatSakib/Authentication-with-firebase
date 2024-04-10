import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider";

const PrivateRoutesAuth = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
};

export default PrivateRoutesAuth;
