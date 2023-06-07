import { applyFilter } from "../utils/appUtils";

export const reducerFun = (state, action) => {
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
    case "SORT_BY_PRICE":
      return {
        ...state,
        sortBy: action.payload,
        isSortHighToLow: action.payload === "highToLow" ? true : false,
        isSortLowToHigh: action.payload === "lowToHigh" ? true : false,
        filteredProducts: applyFilter({
          ...state,
          sortBy: action.payload,
        }),
      };

    case "HANDLE_SEARCH_CHANGE":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "HANDLE_SEARCH":
      return {
        ...state,
        searchQuery: "",
        filteredProducts: applyFilter({
          ...state,
          searchQuery: state.searchQuery,
        }),
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        category: "",
        rating: "",
        price: 0,
        isSortHighToLow: false,
        isSortLowToHigh: false,
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
        product._id === action.payload ? { ...product, inCart: false } : product
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
        (sum, currentValue) => sum + currentValue.price * currentValue.quantity,
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

    case "CLEAR_CART":
      const updatedAllProductsWithClearCart = state.allProducts.map((product) =>
        product.inCart ? { ...product, inCart: false } : product
      );
      return {
        ...state,
        cartItems: [],
        orders: state.cartItems,
        allProducts: updatedAllProductsWithClearCart,
        filteredProducts: updatedAllProductsWithClearCart,
      };
    case "SHOW_CATEGORY_PRODUCTS":
      return {
        ...state,
        category: action.payload,
        filteredProducts: applyFilter({ ...state, category: action.payload }),
      };
    case "SIGNUP_INPUT_NAME":
      return {
        ...state,
        signupInput: { ...state.signupInput, name: action.payload },
      };

    case "SIGNUP_INPUT_EMAIL":
      return {
        ...state,
        signupInput: { ...state.signupInput, email: action.payload },
      };

    case "SIGNUP_INPUT_PASSWORD":
      return {
        ...state,
        signupInput: { ...state.signupInput, password: action.payload },
      };
    case "SIGNUP":
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: new Date().valueOf(),
            name: state.signupInput.name,
            email: state.signupInput.email,
            password: state.signupInput.password,
          },
        ],
        signupInput: { name: "", email: "", password: "" },
      };
    case "LOGIN_INPUT_EMAIL":
      return {
        ...state,
        loginInput: { ...state.loginInput, email: action.payload },
      };
    case "LOGIN_INPUT_PASSWORD":
      return {
        ...state,
        loginInput: { ...state.loginInput, password: action.payload },
      };
    case "LOGIN":
      const result = state.users.find(
        ({ email, password }) =>
          email === state.loginInput.email &&
          password === state.loginInput.password
      );
      if (result) {
        return {
          ...state,
          isLogin: true,
          warning: "",
        };
      }
      return {
        ...state,
        warning: "invalid user",
      };

    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    case "LOGIN_AS_GUEST":
      return {
        ...state,
        isLogin: true,
      };
    case "SET_ADDRESS":
      return {
        ...state,
        selectedAddress: state.address.find(({ id }) => id === action.payload),
      };
    case "CLEAR_SELECTED_ADDRESS":
      return {
        ...state,
        deliveryAddress: state.selectedAddress,
        selectedAddress: "",
      };
    case "INPUT_ADDRESS":
      return {
        ...state,
        inputAddress: action.payload,
      };
    case "ADD_NEW_ADDRESS":
      return {
        ...state,
        inputAddress: "",
        address: [
          ...state.address,
          { id: new Date().valueOf(), details: state.inputAddress },
        ],
      };
    case "REMOVE_ADDRESS":
      return {
        ...state,
        address: state.address.filter(
          (eachAddress) => eachAddress.id !== action.payload
        ),
      };
    case "EDIT_ADDRESS":
      const updatedAddress = state.address.map((eachValue) =>
        eachValue.id === action.payload.id
          ? { ...eachValue, details: action.payload.details }
          : { ...eachValue }
      );
      return {
        ...state,
        address: updatedAddress,
      };
    default:
      return state;
  }
};
