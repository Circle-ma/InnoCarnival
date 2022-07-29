import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Questions from "./Questions";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App questionsList={Questions} />
  </React.StrictMode>
);
