import React, { useContext } from "react";
import styles from "./Login.module.css";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const {
    appState: {
      loginInput: { email, password },
      warning,
      isLogin
    },
    dispatch,
  } = useContext(AppContext);

  const handleEmailChange = (e) => {
    dispatch({ type: "LOGIN_INPUT_EMAIL", payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: "LOGIN_INPUT_PASSWORD", payload: e.target.value });
  };

  const handleLogin = () => {
    dispatch({ type: "LOGIN" });
  };

  return (
    <>
      <Navbar />
      {isLogin && <p>You are logged in</p>}
      {!isLogin && <div className={styles["login-page"]}>
        <article className={styles.login}>
          <h3>Login</h3>
          {warning && <p className={styles.warning}>{warning}</p>}
          <label htmlFor="email" className={styles["login-label"]}>
            Email:
          </label>
          <input
            className={styles["login-input"]}
            onChange={handleEmailChange}
            type="email"
            name="email"
            id=""
            value={email}
          />

          <label className={styles["login-label"]} htmlFor="password">
            Password:
          </label>
          <input
            onChange={handlePasswordChange}
            value={password}
            className={styles["login-input"]}
            type="password"
          />

          <button className={styles["login-button"]} onClick={handleLogin}>Login</button>
          <button className={styles["login-button"]}>Login as a Guest</button>

          <a className={styles["login-forget"]} href="/signup">
            New user ? Sign up here!
          </a>
        </article>
      </div>}
    </>
  );
};

export default Login;
