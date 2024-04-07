import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>F-Auth - Home</title>
      </Helmet>
      <div>This is login page.</div>
    </HelmetProvider>
  );
};

export default Home;
