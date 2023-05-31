import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ProductDetails from '../components/ProductDetails'

const Wishlist = () => {
    const {appState:{wishlist}} = useContext(AppContext)
    
  return (
    <div>Wishlist
    {wishlist.map( (product) => <ProductDetails {...product} wishlistItem/> )}
    </div>  
  )
}

export default Wishlist