import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const Error = () => {
  const {
    appState: { errorMsg },
  } = useContext(AppContext);

  return (
    <div>
      Error:{errorMsg}
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default Error;
