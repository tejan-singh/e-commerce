import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Filters = () => {
  const {
    appState: { allRatings, allCategories },
    dispatch,
  } = useContext(AppContext);

  const handleCategory = (e) => {
    dispatch({ type: "CATEGORY", payload: e.target.value });
  };

  const handleRating = (e) => {
    dispatch({ type: "RATING", payload: e.target.value });
  };

  const handlePrice = (e) => {
    console.log(e.target.value)
    dispatch({ type: "PRICE", payload: parseInt(e.target.value) });
  };

  return (
    <div>
      <p>Filters</p>
      <div>
        <label htmlFor="price">Price</label>
        <input onChange={handlePrice} type="range" name="price" min={0} max={10000} step={250} />
      </div>

      <div>
        <p>Category</p>
        <select onChange={handleCategory} name="category">
          {allCategories.map( (category)=>  <option value={category}>{category}</option>)}
        </select>
      </div>

      <div>
        <select name="rating" onChange={handleRating} >
          <p>Rating</p>
          {allRatings.map((rating) => (
            <option value={rating}>{rating} star and above</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
