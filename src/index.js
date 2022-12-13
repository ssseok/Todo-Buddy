import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import store from "./store";

// import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const darkThem = {
  textColor: "#f5f6fa",
  bgColor: "#f5f6fa",
  rootBg: "#353b48",
  borderColor: "#44bd32",
};

const lightThem = {
  textColor: "#2f3640",
  bgColor: "#353b48",
  rootBg: "#f5f6fa",
  borderColor: "#4cd137",
  bgBtn: "#D9D9D9",
  menuColor: "#dcdde1",
};
root.render(
  <Provider store={store}>
    <ThemeProvider theme={lightThem}>
      <App />
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
