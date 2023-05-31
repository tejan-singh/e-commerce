import { createContext, useEffect, useReducer } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    allProducts: [],
    errorMsg: "",
    loading: true,
    allCategories: [],
    allRatings: ["1", "2", "3", "4"],
    product: {},
    filteredProducts: [],
    category: "",
    rating: "",
    price: 0,
    wishlist: [],
  };

  const reducerFun = (state, action) => {
    switch (action.type) {
      case "SHOW_PRODUCTS":
        return {
          ...state,
          allProducts: action.payload,
          filteredProducts: action.payload,
        };
      case "SET_CATEGORIES":
        return {
          ...state,
          allCategories: action.payload,
        };
      case "SHOW_ERROR":
        return {
          ...state,
          errorMsg: action.payload,
        };
      case "HIDE_LOADING":
        return {
          ...state,
          loading: false,
        };
      case "SHOW_LOADING":
        return {
          ...state,
          loading: true,
        };
      case "SHOW_PRODUCT":
        return {
          ...state,
          product: state.allProducts.find(
            (product) => product._id === action.payload
          ),
        };

      case "CATEGORY":
        return {
          ...state,
          category: action.payload,
          filteredProducts: applyFilter({ ...state, category: action.payload }),
        };

      case "RATING":
        return {
          ...state,
          rating: action.payload,
          filteredProducts: applyFilter({ ...state, rating: action.payload }),
        };
      case "PRICE":
        return {
          ...state,
          price: action.payload,
          filteredProducts: applyFilter({ ...state, price: action.payload }),
        };

      case "WISHLIST":
        const product = {
          ...state.allProducts.find(
            (product) => product._id === action.payload
          ),
          inWishlist: true,
        };
        const updatedProducts = state.allProducts.map((product) =>
          product._id === action.payload
            ? { ...product, inWishlist: true }
            : product
        );
        return {
          ...state,
          wishlist: [...state.wishlist, product],
          allProducts: updatedProducts,
          filteredProducts: updatedProducts,
        };

        case "REMOVE_FROM_WISHLIST":
          // const product = {
          //   ...state.allProducts.find(
          //     (product) => product._id === action.payload
          //   ),
          //   inWishlist: true,
          // };
          const updatedListItems = state.allProducts.filter((product) =>
            product._id !== action.payload
          );
          return {
            ...state,
            wishlist: [...state.wishlist, product],
            allProducts: updatedListItems,
            filteredProducts: updatedListItems,
          };
      default:
        return state;
    }
  };

  const applyFilter = ({ allProducts, category, rating, price }) => {
    let filteredProducts = [...allProducts];

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

  const [appState, dispatch] = useReducer(reducerFun, initialState);

  console.log(appState);

  const getProducts = async () => {
    try {
      const result = await fetch("api/products");
      const { products } = await result.json();
      const allCategories = products.reduce(
        (sum, { categoryName }) =>
          sum.includes(categoryName) ? sum : [...sum, categoryName],
        []
      );
      dispatch({ type: "SET_CATEGORIES", payload: allCategories });
      dispatch({ type: "SHOW_PRODUCTS", payload: products });
    } catch (error) {
      dispatch({ type: "SHOW_ERROR", payload: error.message });
      console.error(error.message);
    } finally {
      dispatch({ type: "HIDE_LOADING" });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
