import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContext";
import styles from "./Home.module.css";

const Home = () => {
  const {
    appState: { allCategories },
    dispatch,
  } = useContext(AppContext);

  const showCategoryProduct = (category) => {
    dispatch({ type: "SHOW_CATEGORY_PRODUCTS", payload: category });
  };

  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome</h1>
        <img
          src="https://i.postimg.cc/g2j5N7VK/468-2022-07-29-main-banner.jpg"
          alt="banner"
        />
        <h2>Popular categories</h2>
        <section className={styles.categories}>
          {allCategories.map((category) => (
            <div>
              <Link to="/products">
                {category === "men" && (
                  <img
                    onClick={() => showCategoryProduct(category)}
                    src="https://i.postimg.cc/6qCdtnk3/rounded-2.png"
                    alt="mens-category"
                  />
                )}
                {category === "women" && (
                  <img
                    onClick={() => showCategoryProduct(category)}
                    src="https://i.postimg.cc/13MRbXjZ/rounded-3.png"
                    alt="mens-category"
                  />
                )}
                <h3>{category}</h3>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
