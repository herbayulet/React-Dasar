import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";
// import { Yutub } from "./components/Yutub/Yutub";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />
    <Header />
    <Body />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
