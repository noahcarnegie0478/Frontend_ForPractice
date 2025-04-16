import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ItemProvider from "./Context/ItemContext.jsx";

createRoot(document.getElementById("root")).render(
  <ItemProvider>
    <App />
  </ItemProvider>
);
