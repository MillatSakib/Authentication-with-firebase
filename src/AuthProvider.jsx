import React from "react";
import { createContext } from "react";
import { useContext } from "react";

const AuthProvider = ({ children }) => {
  const AuthProvider = createContext("");
  return <div>This is puto</div>;
};

export default AuthProvider;
