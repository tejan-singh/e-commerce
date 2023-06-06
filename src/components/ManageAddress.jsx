import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ManageAddress = () => {
  const {
    appState: { address },
  } = useContext(AppContext);

  return (
    <div>
      <h3>Manage Address</h3>
    </div>
  );
};

export default ManageAddress;
