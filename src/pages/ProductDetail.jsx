import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Error from "./Error";

const ProductDetail = () => {
  const {
    appState: { product, loading, errorMsg },
    dispatch,
  } = useContext(AppContext);

  if (loading ) return <Loading />;
  if (errorMsg) return <Error />;
  
  return (
    <div>
      <p>ProductDetail</p>
      <p>{product.title}</p>
      <p>{product.author}</p>
      <p>{product.price}</p>
      <p>{product.categoryName}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default ProductDetail;
