import React, { useContext, useEffect } from "react";
import OrderDetails from "../components/OrderDetails";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const OrderSummary = () => {
  const {
    appState: { priceDetails, orders, deliveryAddress },
  } = useContext(AppContext);

  return (
    <>
    <Navbar/>
      {orders.length > 0 ? (
        <>
          <h3>Your order is confirmed</h3>
          <OrderDetails />
          {deliveryAddress && (
            <p>
              <b>Delivery Address: {deliveryAddress.details}</b>
            </p>
          )}
          <p>Your total amount is {priceDetails.amount}</p>
          <Link to="/products"><button >Browse more</button></Link>
        </>
      )
      : <p>Your don't have any orders</p>
      }
    </>
  );
};

export default OrderSummary;
