import React, { useContext } from "react";
import styles from "./Login.module.css";
import Navbar from "../components/Navbar";
import { AppContext } from "../context/AppContext";

const Signup = () => {
  const {
    appState: {
      signupInput: { name, email, password },
    },
    dispatch,
  } = useContext(AppContext);

  const handleNameChange = (e) => {
    dispatch({ type: "SIGNUP_INPUT_NAME", payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "SIGNUP_INPUT_EMAIL", payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: "SIGNUP_INPUT_PASSWORD", payload: e.target.value });
  };

  const handleSignUp = () => {
    dispatch({type: 'SIGNUP'})
  }

  return (
    <>
      <Navbar />
      <div className={styles["login-page"]}>
        <article className={styles.login}>
          <h3>New user Sign up!</h3>
          <label htmlFor="name" className={styles["login-label"]}>
            Name:
          </label>
          <input
            onChange={handleNameChange}
            className={styles["login-input"]}
            type="text"
            name="name"
            value={name}
          />
          <label htmlFor="email" className={styles["login-label"]}>
            Email:
          </label>
          <input
            onChange={handleEmailChange}
            className={styles["login-input"]}
            type="email"
            name="email"
            value={email}
          />

          <label className={styles["login-label"]} htmlFor="password">
            Password:
          </label>
          <input
            onChange={handlePasswordChange}
            className={styles["login-input"]}
            type="password"
            value={password}
          />

          <button className={styles["login-button"]} onClick={handleSignUp}>Sign up</button>
        </article>
      </div>
    </>
  );
};

export default Signup;
