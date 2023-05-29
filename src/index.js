import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { makeServer } from "./server";
import { AppProvider } from "./context/AppContext";
import {FilterProvider} from "./context/FilterContext";

// Call makeServer
makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AppProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </AppProvider>
    </Router>
  </React.StrictMode>
);
