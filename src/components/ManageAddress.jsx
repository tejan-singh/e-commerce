import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import styles from "./ManageAddress.module.css";
const ManageAddress = () => {
  const {
    appState: { address },
    dispatch,
  } = useContext(AppContext);

  const [showInputField, setShowInputField] = useState(false);

  const handleInputChange = (e) => {
    dispatch({ type: "INPUT_ADDRESS", payload: e.target.value });
  };

  const handleAddNewAddress = () => {
    dispatch({ type: "ADD_NEW_ADDRESS" });
  };

  const handleRemoveAddress = (id) => {
    dispatch({ type: "REMOVE_ADDRESS", payload: id });
  };

  return (
    <>
      <h3>Manage Address</h3>
      <button onClick={() => setShowInputField(() => true)}>
        Add new address
      </button>
      {showInputField && (
        <div>
          <input type="text" onChange={handleInputChange} />
          <button onClick={handleAddNewAddress}>add</button>
        </div>
      )}

      {address.length > 1 ? (
        <section className={styles["address-page"]}>
          {address.map(({ id, details }) => (
            <article className={styles.address} key={id}>
              <p>{details}</p>
              <button>Edit</button>
              <button onClick={() => handleRemoveAddress(id)}>Remove</button>
            </article>
          ))}
        </section>
      ) : (
        <p>No address found</p>
      )}
    </>
  );
};

export default ManageAddress;
