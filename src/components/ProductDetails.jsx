import React from "react";
import { Link } from "react-router-dom";

const ProductDetails = ({
  title,
  author,
  price,
  image,
  id,
  _id,
  showProduct,
  handleWishlist,
  inWishlist,
  removeWishlist,
  wishlistItem,
}) => {
  return (
    <article style={{ border: "1px solid" }} key={id}>
      <Link onClick={() => showProduct(_id)} to={`/product/${_id}`}>
        {title}
      </Link>
      <figure>
        <img src={image} alt="" />
      </figure>
      <p>{author}</p>
      <p>{price}</p>
      <button>Add to cart</button>
      {wishlistItem ? (
        <button onClick={console.log("click")}>
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
            <button onClick={handleWishlist(_id)}>Add to wishlist</button>
          )}
        </>
      )}
    </article>
  );
};

export default ProductDetails;
