import React from "react";
import loaderGig from '../assets/spinner.gif'
import styles from "../components/Loading.module.css"

const Loading = () => {
  return <div className={styles.loading}>
    <img  src={loaderGig} alt="Loader" />
  </div>;
};

export default Loading;
