import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const PriceDetails = ({ isAddedToCart, isCheckout }) => {
  const {
    appState: { priceDetails, cartItems },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    const getPrice = () => {
      dispatch({ type: "GET_PRICE_DETAILS" });
    };

    getPrice();
  }, [cartItems]);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART"});
  };

  return (
    <>
      <h2>Price details</h2>
      <section>
        <div>
          <p>Total MRP</p>
          <p>Shipping Fee</p>
          <h2>Total Amount</h2>
        </div>
        <div>
          <p>{priceDetails.bill}</p>
          <p>{priceDetails.shipping}</p>
          <h2>{priceDetails.amount}</h2>
        </div>
      </section>
      {isAddedToCart && (
        <button>
          <Link to="/checkout">Checkout</Link>
        </button>
      )}
      {isCheckout && (
        <button onClick={clearCart}>
          <Link to="/order-summary">Place order</Link>
        </button>
      )}
    </>
  );
};

export default PriceDetails;
