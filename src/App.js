import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";
import Products from "./pages/Products";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSummary from "./pages/OrderSummary";
import { RequireAuth } from "./utils/RequireAuth";
import Login from './pages/Login'
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="order-summary"
          element={
            <RequireAuth>
              <OrderSummary />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
