import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const {
    appState: { allCategories },dispatch
  } = useContext(AppContext);

  const showCategoryProduct = (category) => {
    dispatch({type: 'SHOW_CATEGORY_PRODUCTS', payload:category})
  }

  return (
    <>
      <Navbar />
      <h1>Welcome</h1>
      <Link to="/products">See all products</Link>
      {allCategories.map((category) => (
        <div>
          <Link to="/products">
            <button onClick={() => showCategoryProduct(category)}>{category}</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Home;
