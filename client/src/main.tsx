import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/globals.css";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
      <Router>
        <App />
      </Router>
    </ThirdwebProvider>
  </React.StrictMode>
);
