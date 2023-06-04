import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Checkout = () => {
  const {
    appState: { checkout },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    const getBill = () => {
      dispatch({ type: "CHECKOUT" });
    };

    getBill();
  }, []);

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
          <p>{checkout.price}</p>
          <p>{checkout.shipping}</p>
          <h2>{checkout.amount}</h2>
        </div>
      </section>
      <button>Place Order</button>
    </>
  );
};

export default Checkout;
