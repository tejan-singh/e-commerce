import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const AddressDetails = () => {
  const {
    appState: { address },
    dispatch,
  } = useContext(AppContext);

  const [selectedAddress, setSelectedAddress] = useState(null);

  const handleAddressSelect = (id) => {
    setSelectedAddress(id);
  };

  const handleAddressChange = (id) => {
    dispatch({ type: "SET_ADDRESS", payload:id });
  };

  return (
    <>
      <h3>Select your delivery address</h3>
      {address.length > 0 &&
        address.map(({ id, details }) => (
          <div key={id}>
            <input
              type="checkbox"
              id={`address-${id}`}
              checked={selectedAddress === id}
              onChange={() => {
                handleAddressSelect(id);
                handleAddressChange(id);
              }}
            />
            <label htmlFor={`address-${id}`}>{details}</label>
          </div>
        ))}

      <Link>
        <button>Manage address</button>
      </Link>
    </>
  );
};

export default AddressDetails;
