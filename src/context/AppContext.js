import { createContext, useEffect, useReducer } from "react";
import { reducerFun } from "../reducer/appReducer";
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
    cartItems: [],
    priceDetails: { bill: 0, shipping: 0, amount: 0 },
    orders: [],
    searchQuery: "",
  };

  const [appState, dispatch] = useReducer(reducerFun, initialState);

  console.log(appState);

  const getProducts = async () => {
    try {
      const result = await fetch("/api/products");
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
    } finally {
      dispatch({ type: "HIDE_LOADING" });
    }
  };

  const getCartItems = () => {
    dispatch({ type: "SHOW_CART_ITEMS" });
  };

  const getWishlistItems = () => {
    dispatch({ type: "SHOW_WISHLIST_ITEMS" });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getCartItems();
    getWishlistItems();
  }, [appState.allProducts]);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
