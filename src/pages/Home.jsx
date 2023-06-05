import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar/>
      <h1>Welcome to Fashionista</h1>
      <Link to="/products">Go to products</Link>
    </>
  );
};

export default Home;
