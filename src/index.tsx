import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { HashRouter } from "react-router-dom";
import Router from "./Router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <HashRouter> */}
      <Router />
    </BrowserRouter>
    {/* </HashRouter> */}
  </React.StrictMode>
);
