import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Checkout = () => {
    const {cartItems, checkout} = useContext(AppContext)

  return (
    <div>Checkout</div>
  )
}

export default Checkout