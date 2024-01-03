import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./Route.jsx";
import { AuthProvider } from "./AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <RouteComponent />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
