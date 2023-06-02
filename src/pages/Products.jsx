import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Error from "./Error";
import Filters from "../components/Filters";
import ProductDetails from "../components/ProductDetails";

const Products = () => {
  const {
    appState: { filteredProducts, loading, errorMsg },
    dispatch,
  } = useContext(AppContext);

  const showProduct = (_id) => {
    dispatch({ type: "SHOW_PRODUCT", payload: _id });
  };

  const handleWishlist = (_id) => {
    dispatch({ type: "WISHLIST", payload: _id });
  };

  const handleAddToCart = (_id) => {
    dispatch({ type: "ADD_TO_CART", payload: _id });
  }

  if (loading) return <Loading />;
  if (errorMsg) return <Error />;

  return (
    <>
      <Filters />
      {filteredProducts.map((product) => (
        
        <ProductDetails 
        {...product}
        showProduct={showProduct}
        handleWishlist={handleWishlist}
        handleAddToCart={handleAddToCart}
         />
        
      ))}
    </>
  );
};

export default Products;
