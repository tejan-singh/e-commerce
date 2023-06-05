import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import PriceDetails from '../components/PriceDetails'
import OrderDetails from '../components/OrderDetails'

const Checkout = () => {
    const {appState:{cartItems}} = useContext(AppContext)

  return (
    <>
      <h2>Checkout</h2>
      {cartItems.length > 0 ? <>
        <OrderDetails/>
        <PriceDetails isCheckout/>
      </> : <p>Your cart is empty</p>}
    </>
  )
}

export default Checkout