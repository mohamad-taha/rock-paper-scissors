import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./context/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </ContextProvider>
  </StrictMode>
);
