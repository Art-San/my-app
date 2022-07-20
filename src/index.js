import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css"
import App from "./app";

// const element1 = <h1>Hello world</h1>;
// ReactDOM.render(element1< document.getElementById("root")); Работало в 17ом реакте

const root = createRoot(document.getElementById('root'));



root.render(<App />);

// reactDom.render(element, document.getElementById("root"));