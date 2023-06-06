import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PriceDetails from "../components/PriceDetails";
import Navbar from "../components/Navbar";
import AddressDetails from "../components/AddressDetails";

const Checkout = () => {
  const {
    appState: { cartItems, selectedAddress },
  } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <h2>Checkout</h2>

      {cartItems.length > 0 ? (
        <>
          <AddressDetails />
          <PriceDetails isCheckout />
          {selectedAddress && (
            <p>
              <b>Delivery Address: {selectedAddress.details}</b>
            </p>
          )}
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </>
  );
};

export default Checkout;
