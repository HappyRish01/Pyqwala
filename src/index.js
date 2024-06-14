import React from "react";
import ReactDOM , {hydrateRoot}from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";



const container = document.getElementById('root');
hydrateRoot(container , <App />)


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <HelmetProvider>
//     <App />
//   </HelmetProvider>
// );
reportWebVitals();
