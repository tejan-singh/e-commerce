export const applyFilter = ({
    allProducts,
    category,
    rating,
    price,
    searchQuery,
    isSortHighToLow,
    isSortLowToHigh
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

    if (isSortHighToLow) {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (isSortLowToHigh) {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    }

    return filteredProducts;
  };

  

