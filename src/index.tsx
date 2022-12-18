import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, 
  body {
    margin: 0;
    padding: 0;
  }
  html, 
  body,
  #root {
    width: 100%;
    height: 100%;
  }
`;

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
