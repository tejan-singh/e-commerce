import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const OrderDetails = () => {
const {appState:{orders}} = useContext(AppContext)

  return (
    <section>
    <h3>Order summary</h3>
    {orders.map(({title, price, quantity}) => <div>
      
      <div>
      <p>{title} - {(`${price} X ${quantity}`)}</p>
      </div>
      <div>
        <p>Rs:{price * quantity}</p>
      </div>
    </div>)}
  </section>
  )
}

export default OrderDetails