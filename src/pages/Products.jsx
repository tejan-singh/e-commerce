import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Loading from "../components/Loading";
import Error from "./Error";
import { Link, useParams } from "react-router-dom";

const Products = () => {
  const {
    appState: { filteredProducts, loading, errorMsg },
    dispatch,
  } = useContext(AppContext);

  const showProduct = (_id) => {
    dispatch({ type: "SHOW_PRODUCT", payload: _id });
  };

  if (loading) return <Loading />;
  if (errorMsg) return <Error />;

  return (
    <>
      {filteredProducts.map(
        ({ title, author, price, categoryName, id, _id }) => (
          <article style={{ border: "1px solid" }} key={id}>
            <Link onClick={() => showProduct(_id)} to={`/product/${_id}`}>
              {title}
            </Link>
            <p>{author}</p>
            <p>{price}</p>
            <button>Add to cart</button>
          </article>
        )
      )}
    </>
  );
};

export default Products;
