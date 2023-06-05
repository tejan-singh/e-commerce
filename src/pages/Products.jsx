import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Error from "./Error";
import Filters from "../components/Filters";
import ProductDetails from "../components/ProductDetails";
import Navbar from "../components/Navbar";
import styles from './Products.module.css'

const Products = () => {
  const {
    appState: { filteredProducts, loading, errorMsg },
    dispatch,
  } = useContext(AppContext);

  const showProduct = (_id) => {
    dispatch({ type: "SHOW_PRODUCT", payload: _id });
  };

  const handleWishlist = (_id) => {
    dispatch({ type: "WISHLIST", payload: _id });
  };

  const handleAddToCart = (_id) => {
    dispatch({ type: "ADD_TO_CART", payload: _id });
  };

  if (loading) return <Loading />;
  if (errorMsg) return <Error />;

  return (
    <>
      <Navbar />
      <main className={styles.products}>
        <section>
          <Filters />
        </section>
        <section className={styles["product-list"]}>
          {filteredProducts.map((product) => (
            <ProductDetails
              {...product}
              showProduct={showProduct}
              handleWishlist={handleWishlist}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Products;
