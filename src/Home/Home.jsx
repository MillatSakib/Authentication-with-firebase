import React, { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AuthContext } from "../AuthProvider";

const Home = () => {
  // console.log(import.meta.env.VITE_SOME_KEY);  // Here I use environmet variable
  // console.log(import.meta.env.VITE_MY_NAME);
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <HelmetProvider>
      <Helmet>
        <title>F-Auth - Home</title>
      </Helmet>
      <div>This is Home page.</div>
    </HelmetProvider>
  );
};

export default Home;
