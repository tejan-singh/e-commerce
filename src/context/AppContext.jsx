import { createContext, useEffect, useReducer } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    allProducts: [],
    errorMsg: "",
    loading: true,
    product: {}
  };

  const reducerFun = (state, action) => {
    switch (action.type) {
      case "SHOW_PRODUCTS":
        return {
          ...state,
          allProducts: action.payload,
          filteredProducts: action.payload
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
          product: state.allProducts.find( (product) => product._id === action.payload )
        }  
      default:
        return state;
    }
  };

  const [appState, dispatch] = useReducer(reducerFun, initialState);
  console.log(appState);

  const getProducts = async () => {
    try {
      const result = await fetch("api/products");
      const { products } = await result.json();
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
