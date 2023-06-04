import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductDetails from "../components/ProductDetails";
import Checkout from "./Checkout";

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
    <>
      <section>
        <h1>Cart</h1>
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <ProductDetails
              isAddToCart
              {...product}
              removeCartItem={removeCartItem}
              handleWishlist={handleWishlist}
              removeWishlist={removeWishlist}
            />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </section>
      <section>{cartItems.length > 0 && <Checkout />}</section>
    </>
  );
};

export default Cart;
