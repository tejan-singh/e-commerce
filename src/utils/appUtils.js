const getSortedProducts = (data, category) => {
  if (category === "lowToHigh") {
    return data.sort((a, b) => a.price - b.price);
  } else {
    return data.sort((a, b) => b.price - a.price);
  }
};

export const applyFilter = ({
  allProducts,
  category,
  rating,
  price,
  searchQuery,
  sortBy,
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

  if (sortBy) {
    filteredProducts = getSortedProducts(filteredProducts, sortBy);
  }

  return filteredProducts;
};
