import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductDetails from "../components/ProductDetails";

const Wishlist = () => {
  const {
    appState: { wishlist },
    dispatch,
  } = useContext(AppContext);

  const removeWishlist = (_id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: _id });
  };

  const handleAddToCart = (_id) => {
    dispatch({ type: "ADD_TO_CART", payload: _id });

    const updatedCartItems = wishlist.map( item => {
      if(item._id === _id){
        return {...item, inCart: true}
      }else{
        return item;
      }
    })

    dispatch({type:'SET_WISHLIST_ITEMS', payload: updatedCartItems})
  }

  return (
    <div>
      Wishlist
      {wishlist.map((product) => (
        <ProductDetails
          {...product}
          removeWishlist={removeWishlist}
          handleAddToCart={handleAddToCart}
          wishlistItem
        />
      ))}
    </div>
  );
};

export default Wishlist;
