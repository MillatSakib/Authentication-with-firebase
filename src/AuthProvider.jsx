import React, { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { auth } from "./firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // console.log(children);
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      }
    );
  };

  const logInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const authInfo = {
    registerUser,
    logInUser,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

/*

1. create a context as bellow
      export const DataContext = createContext(null)

2. Wrap the children components with context provider.
      const data = {name: "jack"}
      <DataContext.Provider value={data}>
      <ChildrenComponent/>
      </DataContext.Provider>

3. Access context value
      import {DataContext} from "../path"
      const context = useContext(DataContext)

      */
