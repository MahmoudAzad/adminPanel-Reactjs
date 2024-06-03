import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/styles/global.scss";
import { LoginContextProvider } from "./context/LoginContext.tsx";
import { LanguageContextProvider } from "./context/LanguageContext.tsx";
import { ThemeContextProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ThemeContextProvider>
        <LoginContextProvider>
          <App />
        </LoginContextProvider>
      </ThemeContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
