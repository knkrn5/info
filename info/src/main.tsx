import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { PopupProvider } from "./contexts/PopupProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PopupProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PopupProvider>
  </StrictMode>
);
