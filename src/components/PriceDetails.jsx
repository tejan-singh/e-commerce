import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import styles from './PriceDetails.module.css';
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
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div className={styles['price-section']}>
      <h2>Price details</h2>
      <section className={styles['price-details']}>
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
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      )}
      {isCheckout && (
        <Link to="/order-summary">
          <button onClick={clearCart}>Place order </button>
        </Link>
      )}
    </div>
  );
};

export default PriceDetails;
