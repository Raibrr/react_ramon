import React from "react";
import ReactDOM from "react-dom";
//import "bootstrap/dist/css/bootstrap.css";
//import "./index.css";
//import "./components/styles.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Test from "./components/Test";
//import UseForm from "./components/UseForm";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
