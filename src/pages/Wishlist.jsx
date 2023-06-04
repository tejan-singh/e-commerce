import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductDetails from "../components/ProductDetails";

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
  }

  return (
    <div>
      Wishlist
      {wishlist.map((product) => (
        <ProductDetails
          {...product}
          removeWishlist={removeWishlist}
          handleAddToCart={handleAddToCart}
          wishlistItem
        />
      ))}
    </div>
  );
};

export default Wishlist;
