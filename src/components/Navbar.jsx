import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
  });

  const {
    appState: { cartItems, wishlist },
  } = useContext(AppContext);

  return (
    <header>
      <div>
        <input
          className={styles.search}
          type="text"
          placeholder="search for products"
        />
        <button className={styles["search-btn"]}>Search</button>
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
      
    </header>
  );
};

export default Navbar;
