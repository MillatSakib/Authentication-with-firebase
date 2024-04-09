import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "./firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [previousPath, setpreviousPath] = useState("");
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

  const provider = new GoogleAuthProvider();
  const GoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        // setUser(loginUser);
        console.log(loginUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const logOut = () => {
    setLoading(false);

    return signOut(auth);
  };

  const authInfo = {
    registerUser,
    logInUser,
    loading,
    logOut,
    user,
    setUser,
    GoogleSignIn,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log(currentUser);
        setUser(currentUser);
        setLoading(false);

        // console.log("Loading is now ", loading);
      } else {
        // console.log("No user!!!");
        setLoading(false);
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
