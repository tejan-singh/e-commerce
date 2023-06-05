import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Filters = () => {
  const {
    appState: { allRatings, allCategories, category, rating, price },
    dispatch,
  } = useContext(AppContext);

  const handleCategory = (e) => {
    dispatch({ type: "CATEGORY", payload: e.target.value });
  };

  const handleRating = (e) => {
    dispatch({ type: "RATING", payload: e.target.value });
  };

  const handlePrice = (e) => {
    dispatch({ type: "PRICE", payload: parseInt(e.target.value) });
  };

  const handleClearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <div>
      <p>Filters</p>
      <div>
        <label htmlFor="price">Price</label>
        <input
          onChange={handlePrice}
          value={price}
          type="range"
          name="price"
          min={0}
          max={5000}
          step={1000}
          list='price-tag'
        />
      </div>

      <div>
        <p>Category</p>
        <select onChange={handleCategory} value={category} name="category">
          <option value="">Select</option>
          {allCategories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div>
        <p>Rating</p>
        <select name="rating" onChange={handleRating} value={rating}>
          <option value="">Select</option>
          {allRatings.map((rating) => (
            <option value={rating}>{rating} star and above</option>
          ))}
        </select>
      </div>

      <button onClick={handleClearFilters}>Clear Filters</button>
    </div>
  );
};

export default Filters;
