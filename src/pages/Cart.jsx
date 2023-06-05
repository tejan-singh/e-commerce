import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductDetails from "../components/ProductDetails";
import PriceDetails from "../components/PriceDetails";

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

  const handleAddToCart = (_id) => {
    dispatch({ type: "ADD_TO_CART", payload: _id });
  };

  const handleQuantityDecrease = (_id) => {
    dispatch({type: 'DECREASE_QUANTITY', payload: _id})
  }

  const handleQuantityIncrease = (_id) => {
    dispatch({type: 'INCREASE_QUANTITY', payload: _id})
  }

  return (
    <>
      <section>
        <h1>Cart</h1>
        {cartItems.length > 0 ? (
          cartItems.map((product) => (
            <ProductDetails
              isAddedToCart
              {...product}
              handleAddToCart={handleAddToCart}
              removeCartItem={removeCartItem}
              handleWishlist={handleWishlist}
              removeWishlist={removeWishlist}
              handleQuantityIncrease={handleQuantityIncrease}
              handleQuantityDecrease={handleQuantityDecrease}
            />
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </section>
      <section>{cartItems.length > 0 && <PriceDetails isAddedToCart/>}</section>
    </>
  );
};

export default Cart;