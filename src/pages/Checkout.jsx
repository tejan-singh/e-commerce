import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import PriceDetails from '../components/PriceDetails'
import OrderDetails from '../components/OrderDetails'
import Navbar from '../components/Navbar'

const Checkout = () => {
    const {appState:{cartItems}} = useContext(AppContext)

  return (
    <>
      <Navbar/>
      <h2>Checkout</h2>
      {cartItems.length > 0 ? <>
        <OrderDetails/>
        <PriceDetails isCheckout/>
      </> : <p>Your cart is empty</p>}
    </>
  )
}

export default Checkout