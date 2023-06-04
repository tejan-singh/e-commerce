import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductDetails from "../components/ProductDetails";

const Cart = () => {
  const {
    appState: { cartItems },
    dispatch,
  } = useContext(AppContext);

  const removeCartItem = (_id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: _id });
  };

  const handleWishlist = (_id) => {
    dispatch({ type: "WISHLIST", payload: _id });
  };

  const removeWishlist = (_id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: _id });
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((product) => (
        <ProductDetails
          isAddToCart
          {...product}
          removeCartItem={removeCartItem}
          handleWishlist={handleWishlist}
          removeWishlist={removeWishlist}
        />
      ))}
    </div>
  );
};

export default Cart;