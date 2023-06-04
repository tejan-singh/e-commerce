import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Error from "./Error";
import ProductDetails from "../components/ProductDetails";
import { useParams } from "react-router-dom";


const Product = () => {
  const {
    appState: { allProducts, loading, errorMsg },
    dispatch,
  } = useContext(AppContext);
  
  const {productId} = useParams()

  const product = allProducts.find( (product) => product._id === Number(productId) )
  // useEffect( () => {
  //   const fetchProduct = async () => {
  //     try {
  //       const result = await fetch(`/api/products/${productId}`)
  //       const product = await result.json()
  //       console.log(product.product)
  //       dispatch({type:'SHOW_PRODUCT', payload: product.product})
  //     } catch (error) {
  //       dispatch({type:'SHOW_ERROR', payload: error.message})
  //     } finally{
  //       dispatch({type: 'HIDE_LOADING'})
  //     }
  //   }

  //   fetchProduct()
  // },[productId, dispatch] )

  if (loading ) return <Loading />;
  if (errorMsg) return <Error />;
  

  const handleAddToCart = (_id) => {
    dispatch({ type: "ADD_TO_CART", payload: _id });
  }

  const handleWishlist = (_id) => {
    dispatch({ type: "WISHLIST", payload: _id });
  };

  return (
    <div>
      <p>ProductDetail</p>
      <ProductDetails
        key={product._id}
        isProduct
        {...product}
        handleWishlist={handleWishlist}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Product;
