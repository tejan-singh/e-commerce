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
    cartItems: [],
    priceDetails: { bill: 0, shipping: 0, amount: 0 },
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
          product: action.payload,
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
      case "CLEAR_FILTERS":
        return {
          ...state,
          category: "",
          rating: "",
          filteredProducts: state.allProducts,
        };
      case "WISHLIST":
        const updatedFilteredProducts = state.filteredProducts.map((product) =>
          product._id === action.payload
            ? { ...product, inWishlist: true }
            : product
        );

        const updatedAllProducts = state.allProducts.map((product) =>
          product._id === action.payload
            ? { ...product, inWishlist: true }
            : product
        );
        return {
          ...state,
          allProducts: updatedAllProducts,
          filteredProducts: updatedFilteredProducts,
        };

      case "REMOVE_FROM_WISHLIST":
        const updatedFilteredProductsList = state.filteredProducts.map(
          (product) =>
            product._id === action.payload
              ? { ...product, inWishlist: false }
              : product
        );

        const updatedAllProductsList = state.allProducts.map((product) =>
          product._id === action.payload
            ? { ...product, inWishlist: false }
            : product
        );

        return {
          ...state,
          filteredProducts: updatedFilteredProductsList,
          allProducts: updatedAllProductsList,
        };

      case "ADD_TO_CART":
        const updatedFilteredProductsCart = state.filteredProducts.map(
          (product) =>
            product._id === action.payload
              ? { ...product, inCart: true, quantity: 1 }
              : product
        );

        const updatedAllProductsCart = state.allProducts.map((product) =>
          product._id === action.payload
            ? { ...product, inCart: true, quantity: 1 }
            : product
        );
        return {
          ...state,
          allProducts: updatedAllProductsCart,
          filteredProducts: updatedFilteredProductsCart,
        };

      case "REMOVE_FROM_CART":
        const updatedFilteredProductsListCart = state.filteredProducts.map(
          (product) =>
            product._id === action.payload
              ? { ...product, inCart: false }
              : product
        );

        const updatedAllProductsListCart = state.allProducts.map((product) =>
          product._id === action.payload
            ? { ...product, inCart: false }
            : product
        );

        return {
          ...state,
          filteredProducts: updatedFilteredProductsListCart,
          allProducts: updatedAllProductsListCart,
        };
      case "SHOW_CART_ITEMS":
        return {
          ...state,
          cartItems: state.allProducts.filter(({ inCart }) => inCart),
        };
      case "SHOW_WISHLIST_ITEMS":
        return {
          ...state,
          wishlist: state.allProducts.filter(({ inWishlist }) => inWishlist),
        };
      case "GET_PRICE_DETAILS":
        const totalPrice = state.cartItems.reduce(
          (sum, currentValue) => sum + currentValue.price,
          0
        );
        const shippingFee = totalPrice > 1000 ? 0 : 50;
        const totalAmount = totalPrice + shippingFee;
        return {
          ...state,
          priceDetails: {
            bill: totalPrice,
            shipping: shippingFee,
            amount: totalAmount,
          },
        };
      case "INCREASE_QUANTITY":
        const allProductsWithIncreasedQuantityWithId = state.allProducts.map(
          (product) =>
            product._id === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : product
        );

        return {
          ...state,
          allProducts: allProductsWithIncreasedQuantityWithId,
        };

      case "DECREASE_QUANTITY":
        const allProductsWithDecreasedQuantityWithId = state.allProducts.map(
          (product) => {
            if (product._id === action.payload) {
              if (product.quantity > 1) {
                return { ...product, quantity: product.quantity - 1 };
              }

              return { ...product, quantity: 1 };
            } else {
              return product;
            }
          }
        );

        return {
          ...state,
          allProducts: allProductsWithDecreasedQuantityWithId,
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
      console.error(error.message);
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
