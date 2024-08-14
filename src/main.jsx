import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Jobs from "./Context/Jobs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Jobs>
      <App />
    </Jobs>
  </React.StrictMode>
);
