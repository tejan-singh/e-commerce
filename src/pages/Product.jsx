import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Error from "./Error";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Product = () => {
  const {
    appState: { allProducts, loading, errorMsg },
    dispatch,
  } = useContext(AppContext);
  
  const {productId} = useParams()

  const product = allProducts.find( (product) => product._id === Number(productId) )

  if (loading ) return <Loading />;
  if (errorMsg) return <Error />;
  
  const handleAddToCart = (_id) => {
    dispatch({ type: "ADD_TO_CART", payload: _id });
  }

  const handleWishlist = (_id) => {
    dispatch({ type: "WISHLIST", payload: _id });
  };

  return (
    <>
    <Navbar/>
      <p>Product Detail</p>
      <ProductDetails
        key={product._id}
        isProduct
        {...product}
        handleWishlist={handleWishlist}
        handleAddToCart={handleAddToCart}
      />
    </>
  );
};

export default Product;
