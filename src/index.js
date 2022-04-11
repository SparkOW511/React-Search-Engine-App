import React from "react";
import  ReactDOMClient  from 'react-dom/client'
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router,}  from "react-router-dom";

const root = ReactDOMClient.createRoot(document.getElementById("root"))


root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
