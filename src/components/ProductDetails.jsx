import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequireAuth } from "../utils/RequireAuth";

const ProductDetails = ({
  title,
  price,
  image,
  id,
  brand,
  rating,
  _id,
  isAddedToCart,
  inCart,
  inWishlist,
  handleWishlist,
  removeWishlist,
  wishlistItem,
  handleAddToCart,
  removeCartItem,
  isProduct,
  handleQuantityIncrease,
  handleQuantityDecrease,
  quantity,
}) => {
  const showAlert = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <article className={styles["product-desc"]} key={id}>
        <img src={image} alt="" />
        {!isProduct && <Link to={`/products/${_id}`}>{title}</Link>}
        <p>{title}</p>
        <p>{brand}</p>
        <p>Rs:{price}</p>
        <p>Rating: {rating} star</p>
        {isAddedToCart ? (
          <>
            <button onClick={() => handleQuantityDecrease(_id)}>-</button>
            {quantity}
            <button onClick={() => handleQuantityIncrease(_id)}>+</button>
            <button
              onClick={() => {
                removeCartItem(_id);
                showAlert("removed from cart");
              }}
            >
              Remove from Cart
            </button>
          </>
        ) : (
          <>
            {inCart && (
              <Link to={"/cart"}>
                <button>Go to Cart</button>
              </Link>
            )}
            {!inCart && (
              <>
              {/* <RequireAuth> */}
                <button
                  onClick={() => {
                    handleAddToCart(_id);
                    showAlert("Added to cart");
                  }}
                >
                  Add to Cart
                </button>
              {/* </RequireAuth> */}
              </>
            )}
          </>
        )}

        {wishlistItem ? (
          <button
            onClick={() => {
              removeWishlist(_id);
              showAlert(`removed from wishlist`);
            }}
          >
            Remove from wishlist
          </button>
        ) : (
          <>
            {inWishlist && (
              <Link to={"/wishlist"}>
                <button>Go to wishlist</button>
              </Link>
            )}
            {!inWishlist && (
              <button
                onClick={() => {
                  handleWishlist(_id);
                  showAlert(`Added to wishlist`);
                }}
              >
                Add to wishlist
              </button>
            )}
          </>
        )}
      </article>
      <ToastContainer />
    </>
  );
};

export default ProductDetails;
