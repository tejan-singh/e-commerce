import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ProductDetails = ({
  title,
  author,
  price,
  image,
  id,
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
        {!isProduct && <Link to={`/products/${_id}`}>{title}</Link>}
        <img src={image} alt="" />
        <p>{author}</p>
        <p>{price}</p>

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
              <button>
                <Link to={"/cart"}>Go to Cart</Link>
              </button>
            )}
            {!inCart && (
              <button
                onClick={() => {
                  handleAddToCart(_id);
                  showAlert("Added to cart");
                }}
              >
                Add to Cart
              </button>
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
              <button>
                <Link to={"/wishlist"}>Go to wishlist</Link>
              </button>
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
