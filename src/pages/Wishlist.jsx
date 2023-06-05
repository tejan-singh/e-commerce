import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductDetails from "../components/ProductDetails";
import Navbar from "../components/Navbar";
import styles from './Wishlist.module.css';

const Wishlist = () => {
  const {
    appState: { wishlist },
    dispatch,
  } = useContext(AppContext);

  const removeWishlist = (_id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: _id });
  };

  const handleAddToCart = (_id) => {
    dispatch({ type: "ADD_TO_CART", payload: _id });
  };

  return (
    <>
      <Navbar />
      <h2>Wishlist</h2>
      <section className={styles["wishlist-page"]} >
        {wishlist.length > 0 ? (
          wishlist.map((product) => (
            <ProductDetails
              {...product}
              removeWishlist={removeWishlist}
              handleAddToCart={handleAddToCart}
              wishlistItem
            />
          ))
        ) : (
          <p>You wishlist is empty</p>
        )}
      </section>
    </>
  );
};

export default Wishlist;
