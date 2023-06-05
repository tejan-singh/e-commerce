import { useContext } from "react";
import { AppContext } from "../context/AppContext";



export const applyFilter = ({
    allProducts,
    category,
    rating,
    price,
    searchQuery,
  }) => {
    let filteredProducts = [...allProducts];

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (category) {
      filteredProducts = filteredProducts.filter(
        ({ categoryName }) => categoryName === category
      );
    }

    if (rating) {
      filteredProducts = filteredProducts.filter(
        (product) => product.rating >= rating
      );
    }

    if (price) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= price
      );
    }

    return filteredProducts;
  };

  

