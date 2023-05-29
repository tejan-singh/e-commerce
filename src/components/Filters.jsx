import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

const Filters = () => {
  const {filterState, dispatch} = useContext(FilterContext)

  const handleCategory = (e) => {
    dispatch({type: 'CATEGORY', payload: e.target.value})

  }

  return (
    <div>
      <p>Filters</p>
      <div>
        <label htmlFor="price">Price</label>
        <input type="range" name="price" min={1} max={1000} step={1} />
      </div>

      <div>
      <select onChange={handleCategory} name="category">
        <p>Category</p>
        <option value="men">Men</option>
        <option value="women">Women</option>
      </select>
      </div>

      <div>
      <select name="rating">
        <p>Rating</p>
        <option value="3">3 Star</option>
        <option value="4">4 Star</option>
        <option value="5">5 Star</option>
      </select>
      </div>
    </div>
  );
};

export default Filters;
