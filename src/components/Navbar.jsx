import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
  });

  const {
    appState: { cartItems, wishlist, searchQuery, isLogin },
    dispatch,
  } = useContext(AppContext);

  const handleChange = (e) => {
    dispatch({ type: "HANDLE_SEARCH_CHANGE", payload: e.target.value });
  };

  const handleSearch = () => {
    dispatch({ type: "HANDLE_SEARCH" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "HANDLE_SEARCH" });
    }
  };

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'})
  }

  return (
    <header>
      <div>
        <input
          value={searchQuery}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={styles.search}
          type="text"
          placeholder="search for products"
        />
        <button onClick={handleSearch} className={styles["search-btn"]}>
          Search
        </button>
      </div>
      <NavLink className={styles.navlink} style={getActiveStyle} to="/">
        Home ||
      </NavLink>
      <NavLink className={styles.navlink} style={getActiveStyle} to="/products">
        Products ||
      </NavLink>
      <NavLink className={styles.navlink} style={getActiveStyle} to="/wishlist">
        Wishlist {wishlist.length > 0 && `(${wishlist.length})`} ||
      </NavLink>
      <NavLink className={styles.navlink} style={getActiveStyle} to="/cart">
        Cart {cartItems.length > 0 && `(${cartItems.length})`} ||
      </NavLink>
      {!isLogin && (
        <NavLink className={styles.navlink} style={getActiveStyle} to="/login">
          Login
        </NavLink>
      )}
      {isLogin && (
        <NavLink className={styles.navlink} style={getActiveStyle} onClick={handleLogout}>
          Logout
        </NavLink>
      )}
    </header>
  );
};

export default Navbar;
